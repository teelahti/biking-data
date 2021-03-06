/* */ 
"format cjs";
(function(process) {
  (function(root, factory) {
    'use strict';
    var widget = factory();
    if (typeof define === 'function' && define.amd) {
      define('sheetrock', function() {
        widget.environment.amd = true;
        return widget;
      });
    } else if (typeof module === 'object' && module.exports) {
      widget.environment.commonjs = true;
      widget.environment.request = require('@empty');
      module.exports = widget;
    } else {
      root.sheetrock = widget;
    }
  }(this, function() {
    'use strict';
    var sheetTypes = {
      '2014': {
        'apiEndpoint': 'https://docs.google.com/spreadsheets/d/%key%/gviz/tq?',
        'keyFormat': new RegExp('spreadsheets/d/([^/#]+)', 'i'),
        'gidFormat': new RegExp('gid=([^/&#]+)', 'i')
      },
      '2010': {
        'apiEndpoint': 'https://spreadsheets.google.com/tq?key=%key%&',
        'keyFormat': new RegExp('key=([^&#]+)', 'i'),
        'gidFormat': new RegExp('gid=([^/&#]+)', 'i')
      }
    };
    var requestStatusCache = {
      loaded: {},
      failed: {},
      labels: {},
      header: {},
      offset: {}
    };
    var jsonpCallbackIndex = 0;
    var root = (typeof window === 'undefined') ? {} : window;
    var env = {
      document: root.document || {},
      dom: !!(root.document && root.document.createElement),
      jquery: !!(root.jQuery && root.jQuery.fn && root.jQuery.fn.jquery),
      request: false
    };
    if (!Array.prototype.forEach) {
      Array.prototype.forEach = function(func) {
        var i;
        var array = this;
        var arrayLength = array.length;
        for (i = 0; i < arrayLength; i = i + 1) {
          func(array[i], i);
        }
      };
    }
    if (!Array.prototype.map) {
      Array.prototype.map = function(func) {
        var array = this;
        var resultArray = [];
        array.forEach(function(value, i) {
          resultArray[i] = func(value, i);
        });
        return resultArray;
      };
    }
    if (!Object.keys) {
      Object.keys = function(object) {
        var key;
        var array = [];
        for (key in object) {
          if (object.hasOwnProperty(key)) {
            array.push(key);
          }
        }
        return array;
      };
    }
    var handleError = function(error, options, response) {
      if (!(error instanceof Error)) {
        error = new Error(error);
      }
      if (options && options.request && options.request.index) {
        requestStatusCache.failed[options.request.index] = true;
      }
      if (options && options.user && options.user.callback) {
        options.user.callback(error, options, response || null);
      } else {
        throw error;
      }
    };
    var trim = function(str) {
      return str.toString().replace(/^ +/, '').replace(/ +$/, '');
    };
    var stringToNaturalNumber = function(str) {
      return Math.max(0, parseInt(str, 10) || 0);
    };
    var hasClass = function(el, className) {
      var classes = ' ' + el.className + ' ';
      return classes.indexOf(' ' + className + ' ') !== -1;
    };
    var extractElement = function(blob) {
      blob = blob || {};
      if (blob.jquery && blob.length) {
        blob = blob[0];
      }
      return (blob.nodeType && blob.nodeType === 1) ? blob : false;
    };
    var updateEnvironment = function() {
      env.dom = !!(env.document && env.document.createElement);
    };
    var getRequestOptions = function(url) {
      var requestOptions = {};
      var sheetTypeKeys = Object.keys(sheetTypes);
      sheetTypeKeys.forEach(function(key) {
        var sheetType = sheetTypes[key];
        if (sheetType.keyFormat.test(url) && sheetType.gidFormat.test(url)) {
          requestOptions.key = url.match(sheetType.keyFormat)[1];
          requestOptions.gid = url.match(sheetType.gidFormat)[1];
          requestOptions.apiEndpoint = sheetType.apiEndpoint.replace('%key%', requestOptions.key);
        }
      });
      return requestOptions;
    };
    var generateRequestID = function(requestOptions) {
      return (requestOptions.key && requestOptions.gid) ? requestOptions.key + '_' + requestOptions.gid + '_' + requestOptions.query : null;
    };
    var getCellValue = function(cell) {
      var value;
      if (cell && cell.f) {
        value = cell.f;
      } else if (cell && cell.v) {
        value = cell.v;
      } else {
        value = '';
      }
      if (value instanceof Array) {
        value = cell.f || value.join('');
      }
      return trim(value);
    };
    var createRowObject = function(rowNumber, cells, labels) {
      var row = {
        cells: {},
        cellsArray: cells,
        labels: labels,
        num: rowNumber
      };
      cells.forEach(function(cell, x) {
        row.cells[labels[x]] = cell;
      });
      return row;
    };
    var wrapTag = function(str, tag) {
      return '<' + tag + '>' + str + '</' + tag + '>';
    };
    var toHTML = function(row) {
      var tag = (row.num) ? 'td' : 'th';
      var cells = Object.keys(row.cells);
      var html = '';
      cells.forEach(function(key) {
        html += wrapTag(row.cells[key], tag);
      });
      return wrapTag(html, 'tr');
    };
    var resetRequestStatus = function(index) {
      requestStatusCache.loaded[index] = false;
      requestStatusCache.failed[index] = false;
      requestStatusCache.labels[index] = false;
      requestStatusCache.header[index] = 0;
      requestStatusCache.offset[index] = 0;
    };
    var extendDefaults = function(defaults, options) {
      var extended = {};
      var defaultKeys = Object.keys(defaults);
      options.query = options.sql || options.query;
      options.reset = options.resetStatus || options.reset;
      options.fetchSize = options.chunkSize || options.fetchSize;
      options.rowTemplate = options.rowHandler || options.rowTemplate;
      defaultKeys.forEach(function(key) {
        extended[key] = options[key] || defaults[key];
      });
      return extended;
    };
    var checkUserOptions = function(target, options) {
      options.target = extractElement(options.target) || extractElement(target);
      options.fetchSize = stringToNaturalNumber(options.fetchSize);
      return options;
    };
    var processUserOptions = function(target, options) {
      var userOptions = checkUserOptions(target, options);
      var requestOptions = getRequestOptions(userOptions.url);
      requestOptions.query = userOptions.query;
      requestOptions.index = generateRequestID(requestOptions);
      if (userOptions.reset && requestOptions.index) {
        resetRequestStatus(requestOptions.index);
        requestOptions.reset = true;
      }
      userOptions.offset = requestStatusCache.offset[requestOptions.index] || 0;
      if (userOptions.fetchSize && requestOptions.index) {
        requestOptions.query += ' limit ' + (userOptions.fetchSize + 1);
        requestOptions.query += ' offset ' + userOptions.offset;
        requestStatusCache.offset[requestOptions.index] = userOptions.offset + userOptions.fetchSize;
      }
      return {
        user: userOptions,
        request: requestOptions
      };
    };
    var validateOptions = function(options) {
      if (!options.user.target && !options.user.callback) {
        throw 'No element targeted or callback provided.';
      }
      if (!(options.request.key && options.request.gid)) {
        throw 'No key/gid in the provided URL.';
      }
      if (requestStatusCache.failed[options.request.index]) {
        throw 'A previous request for this resource failed.';
      }
      if (requestStatusCache.loaded[options.request.index]) {
        throw 'No more rows to load!';
      }
      return options;
    };
    var validateUserLabels = function(userLabels, columnLabels) {
      return (userLabels && userLabels.length === columnLabels.length) ? userLabels : columnLabels;
    };
    var getResponseAttributes = function(options, data) {
      var requestIndex = options.request.index;
      var columnLabels = requestStatusCache.labels[requestIndex];
      var fetchSize = options.user.fetchSize;
      var rows = data.table.rows;
      var cols = data.table.cols;
      var attributes = {
        last: rows.length - 1,
        rowNumberOffset: requestStatusCache.header[requestIndex] || 0
      };
      if (!options.user.offset) {
        columnLabels = cols.map(function(col, i) {
          if (col.label) {
            return col.label.replace(/\s/g, '');
          } else {
            attributes.last = attributes.last + 1;
            attributes.rowNumberOffset = 1;
            return getCellValue(rows[0].c[i]).replace(/\s/g, '') || col.id;
          }
        });
        requestStatusCache.offset[requestIndex] = requestStatusCache.offset[requestIndex] + attributes.rowNumberOffset;
        requestStatusCache.header[requestIndex] = attributes.rowNumberOffset;
        requestStatusCache.labels[requestIndex] = columnLabels;
      }
      if (!fetchSize || (rows.length - attributes.rowNumberOffset) < fetchSize) {
        attributes.last = attributes.last + 1;
        requestStatusCache.loaded[requestIndex] = true;
      }
      attributes.labels = validateUserLabels(options.user.labels, columnLabels);
      return attributes;
    };
    var parseData = function(userOptions, attributes, rawData) {
      var output = [];
      var labels = attributes.labels;
      if (!userOptions.offset && !attributes.rowNumberOffset) {
        output.push(createRowObject(0, labels, labels));
      }
      rawData.table.rows.forEach(function(row, i) {
        if (row.c && i < attributes.last) {
          var counter = stringToNaturalNumber(userOptions.offset + i + 1 - attributes.rowNumberOffset);
          output.push(createRowObject(counter, row.c.map(getCellValue), labels));
        }
      });
      return output;
    };
    var appendHTMLToDOM = function(target, headerHTML, bodyHTML) {
      if (target.tagName === 'TABLE') {
        var headerElement = env.document.createElement('thead');
        var bodyElement = env.document.createElement('tbody');
        headerElement.innerHTML = headerHTML;
        bodyElement.innerHTML = bodyHTML;
        target.appendChild(headerElement);
        target.appendChild(bodyElement);
      } else {
        target.insertAdjacentHTML('beforeEnd', headerHTML + bodyHTML);
      }
    };
    var generateHTML = function(userOptions, rows) {
      var template = userOptions.rowTemplate || toHTML;
      var hasDOMTarget = env.dom && userOptions.target;
      var isTable = hasDOMTarget && userOptions.target.tagName === 'TABLE';
      var needsHeader = hasDOMTarget && hasClass(userOptions.target, 'sheetrock-header');
      var headerHTML = '';
      var bodyHTML = '';
      rows.forEach(function(row) {
        if (row.num) {
          bodyHTML += template(row);
        } else if (isTable || needsHeader) {
          headerHTML += template(row);
        }
      });
      if (hasDOMTarget) {
        appendHTMLToDOM(userOptions.target, headerHTML, bodyHTML);
      }
      return (isTable) ? wrapTag(headerHTML, 'thead') + wrapTag(bodyHTML, 'tbody') : headerHTML + bodyHTML;
    };
    var processResponse = function(options, rawData) {
      var response = {raw: rawData};
      try {
        var attributes = response.attributes = getResponseAttributes(options, rawData);
        var rows = response.rows = parseData(options.user, attributes, rawData);
        response.html = generateHTML(options.user, rows);
      } catch (error) {
        handleError('Unexpected API response format.', options, response);
        return;
      }
      if (options.user.callback) {
        options.user.callback(null, options, response);
      }
    };
    var requestJSON = function(options, callback) {
      if (typeof env.request !== 'function') {
        throw 'No HTTP transport available.';
      }
      var requestOptions = {
        headers: {'X-DataSource-Auth': 'true'},
        url: options.request.url
      };
      var responseCallback = function(responseError, response, body) {
        if (!responseError && response.statusCode === 200) {
          try {
            body = JSON.parse(body.replace(/^\)\]\}\'\n/, ''));
            callback(options, body);
          } catch (error) {
            handleError(error, options, {raw: body});
          }
        } else {
          handleError(responseError || 'Request failed.', options);
        }
      };
      env.request(requestOptions, responseCallback);
    };
    var requestJSONP = function(options, callback) {
      var always;
      var success;
      var error;
      var headElement = env.document.getElementsByTagName('head')[0];
      var scriptElement = env.document.createElement('script');
      var callbackName = '_sheetrock_callback_' + jsonpCallbackIndex;
      always = function() {
        if (scriptElement.removeEventListener) {
          scriptElement.removeEventListener('error', error, false);
          scriptElement.removeEventListener('abort', error, false);
        }
        headElement.removeChild(scriptElement);
        delete root[callbackName];
      };
      success = function(data) {
        try {
          callback(options, data);
        } catch (error) {
          handleError(error, options, {raw: data});
        } finally {
          always();
        }
      };
      error = function() {
        handleError('Request failed.', options);
        always();
      };
      root[callbackName] = success;
      options.request.url = options.request.url.replace('%callback%', callbackName);
      if (scriptElement.addEventListener) {
        scriptElement.addEventListener('error', error, false);
        scriptElement.addEventListener('abort', error, false);
      }
      scriptElement.type = 'text/javascript';
      scriptElement.src = options.request.url;
      headElement.appendChild(scriptElement);
      jsonpCallbackIndex = jsonpCallbackIndex + 1;
    };
    var buildRequestURL = function(options) {
      var query = ['gid=' + encodeURIComponent(options.request.gid), 'tq=' + encodeURIComponent(options.request.query)];
      if (env.dom) {
        query.push('tqx=responseHandler:%callback%');
      }
      return options.request.apiEndpoint + query.join('&');
    };
    var fetchData = function(options, callback) {
      options.request.url = buildRequestURL(options);
      if (env.dom) {
        requestJSONP(options, callback);
      } else {
        requestJSON(options, callback);
      }
    };
    var defaults = {
      url: '',
      query: '',
      target: null,
      fetchSize: 0,
      labels: [],
      rowTemplate: null,
      callback: null,
      reset: false
    };
    var sheetrock = function(options, bootstrappedData) {
      try {
        options = extendDefaults(defaults, options || {});
        options = processUserOptions(this, options);
        options = validateOptions(options);
        updateEnvironment();
        if (bootstrappedData) {
          processResponse(options, bootstrappedData);
        } else {
          fetchData(options, processResponse);
        }
      } catch (error) {
        handleError(error, options);
      }
      return this;
    };
    sheetrock.defaults = defaults;
    sheetrock.version = '1.0.1';
    sheetrock.environment = env;
    if (env.jquery) {
      root.jQuery.fn.sheetrock = sheetrock;
    }
    return sheetrock;
  }));
})(require('process'));
