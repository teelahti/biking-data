"format register";
System.register("github:mbostock/d3@3.5.5/d3", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    "format global";
    "exports d3";
    !function() {
      var d3 = {version: "3.5.5"};
      var d3_arraySlice = [].slice,
          d3_array = function(list) {
            return d3_arraySlice.call(list);
          };
      var d3_document = this.document;
      function d3_documentElement(node) {
        return node && (node.ownerDocument || node.document || node).documentElement;
      }
      function d3_window(node) {
        return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
      }
      if (d3_document) {
        try {
          d3_array(d3_document.documentElement.childNodes)[0].nodeType;
        } catch (e) {
          d3_array = function(list) {
            var i = list.length,
                array = new Array(i);
            while (i--)
              array[i] = list[i];
            return array;
          };
        }
      }
      if (!Date.now)
        Date.now = function() {
          return +new Date();
        };
      if (d3_document) {
        try {
          d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
        } catch (error) {
          var d3_element_prototype = this.Element.prototype,
              d3_element_setAttribute = d3_element_prototype.setAttribute,
              d3_element_setAttributeNS = d3_element_prototype.setAttributeNS,
              d3_style_prototype = this.CSSStyleDeclaration.prototype,
              d3_style_setProperty = d3_style_prototype.setProperty;
          d3_element_prototype.setAttribute = function(name, value) {
            d3_element_setAttribute.call(this, name, value + "");
          };
          d3_element_prototype.setAttributeNS = function(space, local, value) {
            d3_element_setAttributeNS.call(this, space, local, value + "");
          };
          d3_style_prototype.setProperty = function(name, value, priority) {
            d3_style_setProperty.call(this, name, value + "", priority);
          };
        }
      }
      d3.ascending = d3_ascending;
      function d3_ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
      }
      d3.descending = function(a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
      };
      d3.min = function(array, f) {
        var i = -1,
            n = array.length,
            a,
            b;
        if (arguments.length === 1) {
          while (++i < n)
            if ((b = array[i]) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = array[i]) != null && a > b)
              a = b;
        } else {
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && a > b)
              a = b;
        }
        return a;
      };
      d3.max = function(array, f) {
        var i = -1,
            n = array.length,
            a,
            b;
        if (arguments.length === 1) {
          while (++i < n)
            if ((b = array[i]) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = array[i]) != null && b > a)
              a = b;
        } else {
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b > a)
              a = b;
        }
        return a;
      };
      d3.extent = function(array, f) {
        var i = -1,
            n = array.length,
            a,
            b,
            c;
        if (arguments.length === 1) {
          while (++i < n)
            if ((b = array[i]) != null && b >= b) {
              a = c = b;
              break;
            }
          while (++i < n)
            if ((b = array[i]) != null) {
              if (a > b)
                a = b;
              if (c < b)
                c = b;
            }
        } else {
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = c = b;
              break;
            }
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null) {
              if (a > b)
                a = b;
              if (c < b)
                c = b;
            }
        }
        return [a, c];
      };
      function d3_number(x) {
        return x === null ? NaN : +x;
      }
      function d3_numeric(x) {
        return !isNaN(x);
      }
      d3.sum = function(array, f) {
        var s = 0,
            n = array.length,
            a,
            i = -1;
        if (arguments.length === 1) {
          while (++i < n)
            if (d3_numeric(a = +array[i]))
              s += a;
        } else {
          while (++i < n)
            if (d3_numeric(a = +f.call(array, array[i], i)))
              s += a;
        }
        return s;
      };
      d3.mean = function(array, f) {
        var s = 0,
            n = array.length,
            a,
            i = -1,
            j = n;
        if (arguments.length === 1) {
          while (++i < n)
            if (d3_numeric(a = d3_number(array[i])))
              s += a;
            else
              --j;
        } else {
          while (++i < n)
            if (d3_numeric(a = d3_number(f.call(array, array[i], i))))
              s += a;
            else
              --j;
        }
        if (j)
          return s / j;
      };
      d3.quantile = function(values, p) {
        var H = (values.length - 1) * p + 1,
            h = Math.floor(H),
            v = +values[h - 1],
            e = H - h;
        return e ? v + e * (values[h] - v) : v;
      };
      d3.median = function(array, f) {
        var numbers = [],
            n = array.length,
            a,
            i = -1;
        if (arguments.length === 1) {
          while (++i < n)
            if (d3_numeric(a = d3_number(array[i])))
              numbers.push(a);
        } else {
          while (++i < n)
            if (d3_numeric(a = d3_number(f.call(array, array[i], i))))
              numbers.push(a);
        }
        if (numbers.length)
          return d3.quantile(numbers.sort(d3_ascending), .5);
      };
      d3.variance = function(array, f) {
        var n = array.length,
            m = 0,
            a,
            d,
            s = 0,
            i = -1,
            j = 0;
        if (arguments.length === 1) {
          while (++i < n) {
            if (d3_numeric(a = d3_number(array[i]))) {
              d = a - m;
              m += d / ++j;
              s += d * (a - m);
            }
          }
        } else {
          while (++i < n) {
            if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
              d = a - m;
              m += d / ++j;
              s += d * (a - m);
            }
          }
        }
        if (j > 1)
          return s / (j - 1);
      };
      d3.deviation = function() {
        var v = d3.variance.apply(this, arguments);
        return v ? Math.sqrt(v) : v;
      };
      function d3_bisector(compare) {
        return {
          left: function(a, x, lo, hi) {
            if (arguments.length < 3)
              lo = 0;
            if (arguments.length < 4)
              hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) < 0)
                lo = mid + 1;
              else
                hi = mid;
            }
            return lo;
          },
          right: function(a, x, lo, hi) {
            if (arguments.length < 3)
              lo = 0;
            if (arguments.length < 4)
              hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) > 0)
                hi = mid;
              else
                lo = mid + 1;
            }
            return lo;
          }
        };
      }
      var d3_bisect = d3_bisector(d3_ascending);
      d3.bisectLeft = d3_bisect.left;
      d3.bisect = d3.bisectRight = d3_bisect.right;
      d3.bisector = function(f) {
        return d3_bisector(f.length === 1 ? function(d, x) {
          return d3_ascending(f(d), x);
        } : f);
      };
      d3.shuffle = function(array, i0, i1) {
        if ((m = arguments.length) < 3) {
          i1 = array.length;
          if (m < 2)
            i0 = 0;
        }
        var m = i1 - i0,
            t,
            i;
        while (m) {
          i = Math.random() * m-- | 0;
          t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
        }
        return array;
      };
      d3.permute = function(array, indexes) {
        var i = indexes.length,
            permutes = new Array(i);
        while (i--)
          permutes[i] = array[indexes[i]];
        return permutes;
      };
      d3.pairs = function(array) {
        var i = 0,
            n = array.length - 1,
            p0,
            p1 = array[0],
            pairs = new Array(n < 0 ? 0 : n);
        while (i < n)
          pairs[i] = [p0 = p1, p1 = array[++i]];
        return pairs;
      };
      d3.zip = function() {
        if (!(n = arguments.length))
          return [];
        for (var i = -1,
            m = d3.min(arguments, d3_zipLength),
            zips = new Array(m); ++i < m; ) {
          for (var j = -1,
              n,
              zip = zips[i] = new Array(n); ++j < n; ) {
            zip[j] = arguments[j][i];
          }
        }
        return zips;
      };
      function d3_zipLength(d) {
        return d.length;
      }
      d3.transpose = function(matrix) {
        return d3.zip.apply(d3, matrix);
      };
      d3.keys = function(map) {
        var keys = [];
        for (var key in map)
          keys.push(key);
        return keys;
      };
      d3.values = function(map) {
        var values = [];
        for (var key in map)
          values.push(map[key]);
        return values;
      };
      d3.entries = function(map) {
        var entries = [];
        for (var key in map)
          entries.push({
            key: key,
            value: map[key]
          });
        return entries;
      };
      d3.merge = function(arrays) {
        var n = arrays.length,
            m,
            i = -1,
            j = 0,
            merged,
            array;
        while (++i < n)
          j += arrays[i].length;
        merged = new Array(j);
        while (--n >= 0) {
          array = arrays[n];
          m = array.length;
          while (--m >= 0) {
            merged[--j] = array[m];
          }
        }
        return merged;
      };
      var abs = Math.abs;
      d3.range = function(start, stop, step) {
        if (arguments.length < 3) {
          step = 1;
          if (arguments.length < 2) {
            stop = start;
            start = 0;
          }
        }
        if ((stop - start) / step === Infinity)
          throw new Error("infinite range");
        var range = [],
            k = d3_range_integerScale(abs(step)),
            i = -1,
            j;
        start *= k, stop *= k, step *= k;
        if (step < 0)
          while ((j = start + step * ++i) > stop)
            range.push(j / k);
        else
          while ((j = start + step * ++i) < stop)
            range.push(j / k);
        return range;
      };
      function d3_range_integerScale(x) {
        var k = 1;
        while (x * k % 1)
          k *= 10;
        return k;
      }
      function d3_class(ctor, properties) {
        for (var key in properties) {
          Object.defineProperty(ctor.prototype, key, {
            value: properties[key],
            enumerable: false
          });
        }
      }
      d3.map = function(object, f) {
        var map = new d3_Map();
        if (object instanceof d3_Map) {
          object.forEach(function(key, value) {
            map.set(key, value);
          });
        } else if (Array.isArray(object)) {
          var i = -1,
              n = object.length,
              o;
          if (arguments.length === 1)
            while (++i < n)
              map.set(i, object[i]);
          else
            while (++i < n)
              map.set(f.call(object, o = object[i], i), o);
        } else {
          for (var key in object)
            map.set(key, object[key]);
        }
        return map;
      };
      function d3_Map() {
        this._ = Object.create(null);
      }
      var d3_map_proto = "__proto__",
          d3_map_zero = "\x00";
      d3_class(d3_Map, {
        has: d3_map_has,
        get: function(key) {
          return this._[d3_map_escape(key)];
        },
        set: function(key, value) {
          return this._[d3_map_escape(key)] = value;
        },
        remove: d3_map_remove,
        keys: d3_map_keys,
        values: function() {
          var values = [];
          for (var key in this._)
            values.push(this._[key]);
          return values;
        },
        entries: function() {
          var entries = [];
          for (var key in this._)
            entries.push({
              key: d3_map_unescape(key),
              value: this._[key]
            });
          return entries;
        },
        size: d3_map_size,
        empty: d3_map_empty,
        forEach: function(f) {
          for (var key in this._)
            f.call(this, d3_map_unescape(key), this._[key]);
        }
      });
      function d3_map_escape(key) {
        return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
      }
      function d3_map_unescape(key) {
        return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
      }
      function d3_map_has(key) {
        return d3_map_escape(key) in this._;
      }
      function d3_map_remove(key) {
        return (key = d3_map_escape(key)) in this._ && delete this._[key];
      }
      function d3_map_keys() {
        var keys = [];
        for (var key in this._)
          keys.push(d3_map_unescape(key));
        return keys;
      }
      function d3_map_size() {
        var size = 0;
        for (var key in this._)
          ++size;
        return size;
      }
      function d3_map_empty() {
        for (var key in this._)
          return false;
        return true;
      }
      d3.nest = function() {
        var nest = {},
            keys = [],
            sortKeys = [],
            sortValues,
            rollup;
        function map(mapType, array, depth) {
          if (depth >= keys.length)
            return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
          var i = -1,
              n = array.length,
              key = keys[depth++],
              keyValue,
              object,
              setter,
              valuesByKey = new d3_Map(),
              values;
          while (++i < n) {
            if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
              values.push(object);
            } else {
              valuesByKey.set(keyValue, [object]);
            }
          }
          if (mapType) {
            object = mapType();
            setter = function(keyValue, values) {
              object.set(keyValue, map(mapType, values, depth));
            };
          } else {
            object = {};
            setter = function(keyValue, values) {
              object[keyValue] = map(mapType, values, depth);
            };
          }
          valuesByKey.forEach(setter);
          return object;
        }
        function entries(map, depth) {
          if (depth >= keys.length)
            return map;
          var array = [],
              sortKey = sortKeys[depth++];
          map.forEach(function(key, keyMap) {
            array.push({
              key: key,
              values: entries(keyMap, depth)
            });
          });
          return sortKey ? array.sort(function(a, b) {
            return sortKey(a.key, b.key);
          }) : array;
        }
        nest.map = function(array, mapType) {
          return map(mapType, array, 0);
        };
        nest.entries = function(array) {
          return entries(map(d3.map, array, 0), 0);
        };
        nest.key = function(d) {
          keys.push(d);
          return nest;
        };
        nest.sortKeys = function(order) {
          sortKeys[keys.length - 1] = order;
          return nest;
        };
        nest.sortValues = function(order) {
          sortValues = order;
          return nest;
        };
        nest.rollup = function(f) {
          rollup = f;
          return nest;
        };
        return nest;
      };
      d3.set = function(array) {
        var set = new d3_Set();
        if (array)
          for (var i = 0,
              n = array.length; i < n; ++i)
            set.add(array[i]);
        return set;
      };
      function d3_Set() {
        this._ = Object.create(null);
      }
      d3_class(d3_Set, {
        has: d3_map_has,
        add: function(key) {
          this._[d3_map_escape(key += "")] = true;
          return key;
        },
        remove: d3_map_remove,
        values: d3_map_keys,
        size: d3_map_size,
        empty: d3_map_empty,
        forEach: function(f) {
          for (var key in this._)
            f.call(this, d3_map_unescape(key));
        }
      });
      d3.behavior = {};
      function d3_identity(d) {
        return d;
      }
      d3.rebind = function(target, source) {
        var i = 1,
            n = arguments.length,
            method;
        while (++i < n)
          target[method = arguments[i]] = d3_rebind(target, source, source[method]);
        return target;
      };
      function d3_rebind(target, source, method) {
        return function() {
          var value = method.apply(source, arguments);
          return value === source ? target : value;
        };
      }
      function d3_vendorSymbol(object, name) {
        if (name in object)
          return name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        for (var i = 0,
            n = d3_vendorPrefixes.length; i < n; ++i) {
          var prefixName = d3_vendorPrefixes[i] + name;
          if (prefixName in object)
            return prefixName;
        }
      }
      var d3_vendorPrefixes = ["webkit", "ms", "moz", "Moz", "o", "O"];
      function d3_noop() {}
      d3.dispatch = function() {
        var dispatch = new d3_dispatch(),
            i = -1,
            n = arguments.length;
        while (++i < n)
          dispatch[arguments[i]] = d3_dispatch_event(dispatch);
        return dispatch;
      };
      function d3_dispatch() {}
      d3_dispatch.prototype.on = function(type, listener) {
        var i = type.indexOf("."),
            name = "";
        if (i >= 0) {
          name = type.slice(i + 1);
          type = type.slice(0, i);
        }
        if (type)
          return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
        if (arguments.length === 2) {
          if (listener == null)
            for (type in this) {
              if (this.hasOwnProperty(type))
                this[type].on(name, null);
            }
          return this;
        }
      };
      function d3_dispatch_event(dispatch) {
        var listeners = [],
            listenerByName = new d3_Map();
        function event() {
          var z = listeners,
              i = -1,
              n = z.length,
              l;
          while (++i < n)
            if (l = z[i].on)
              l.apply(this, arguments);
          return dispatch;
        }
        event.on = function(name, listener) {
          var l = listenerByName.get(name),
              i;
          if (arguments.length < 2)
            return l && l.on;
          if (l) {
            l.on = null;
            listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
            listenerByName.remove(name);
          }
          if (listener)
            listeners.push(listenerByName.set(name, {on: listener}));
          return dispatch;
        };
        return event;
      }
      d3.event = null;
      function d3_eventPreventDefault() {
        d3.event.preventDefault();
      }
      function d3_eventSource() {
        var e = d3.event,
            s;
        while (s = e.sourceEvent)
          e = s;
        return e;
      }
      function d3_eventDispatch(target) {
        var dispatch = new d3_dispatch(),
            i = 0,
            n = arguments.length;
        while (++i < n)
          dispatch[arguments[i]] = d3_dispatch_event(dispatch);
        dispatch.of = function(thiz, argumentz) {
          return function(e1) {
            try {
              var e0 = e1.sourceEvent = d3.event;
              e1.target = target;
              d3.event = e1;
              dispatch[e1.type].apply(thiz, argumentz);
            } finally {
              d3.event = e0;
            }
          };
        };
        return dispatch;
      }
      d3.requote = function(s) {
        return s.replace(d3_requote_re, "\\$&");
      };
      var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
      var d3_subclass = {}.__proto__ ? function(object, prototype) {
        object.__proto__ = prototype;
      } : function(object, prototype) {
        for (var property in prototype)
          object[property] = prototype[property];
      };
      function d3_selection(groups) {
        d3_subclass(groups, d3_selectionPrototype);
        return groups;
      }
      var d3_select = function(s, n) {
        return n.querySelector(s);
      },
          d3_selectAll = function(s, n) {
            return n.querySelectorAll(s);
          },
          d3_selectMatches = function(n, s) {
            var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
            d3_selectMatches = function(n, s) {
              return d3_selectMatcher.call(n, s);
            };
            return d3_selectMatches(n, s);
          };
      if (typeof Sizzle === "function") {
        d3_select = function(s, n) {
          return Sizzle(s, n)[0] || null;
        };
        d3_selectAll = Sizzle;
        d3_selectMatches = Sizzle.matchesSelector;
      }
      d3.selection = function() {
        return d3.select(d3_document.documentElement);
      };
      var d3_selectionPrototype = d3.selection.prototype = [];
      d3_selectionPrototype.select = function(selector) {
        var subgroups = [],
            subgroup,
            subnode,
            group,
            node;
        selector = d3_selection_selector(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          subgroups.push(subgroup = []);
          subgroup.parentNode = (group = this[j]).parentNode;
          for (var i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              subgroup.push(subnode = selector.call(node, node.__data__, i, j));
              if (subnode && "__data__" in node)
                subnode.__data__ = node.__data__;
            } else {
              subgroup.push(null);
            }
          }
        }
        return d3_selection(subgroups);
      };
      function d3_selection_selector(selector) {
        return typeof selector === "function" ? selector : function() {
          return d3_select(selector, this);
        };
      }
      d3_selectionPrototype.selectAll = function(selector) {
        var subgroups = [],
            subgroup,
            node;
        selector = d3_selection_selectorAll(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
              subgroup.parentNode = node;
            }
          }
        }
        return d3_selection(subgroups);
      };
      function d3_selection_selectorAll(selector) {
        return typeof selector === "function" ? selector : function() {
          return d3_selectAll(selector, this);
        };
      }
      var d3_nsPrefix = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      };
      d3.ns = {
        prefix: d3_nsPrefix,
        qualify: function(name) {
          var i = name.indexOf(":"),
              prefix = name;
          if (i >= 0) {
            prefix = name.slice(0, i);
            name = name.slice(i + 1);
          }
          return d3_nsPrefix.hasOwnProperty(prefix) ? {
            space: d3_nsPrefix[prefix],
            local: name
          } : name;
        }
      };
      d3_selectionPrototype.attr = function(name, value) {
        if (arguments.length < 2) {
          if (typeof name === "string") {
            var node = this.node();
            name = d3.ns.qualify(name);
            return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
          }
          for (value in name)
            this.each(d3_selection_attr(value, name[value]));
          return this;
        }
        return this.each(d3_selection_attr(name, value));
      };
      function d3_selection_attr(name, value) {
        name = d3.ns.qualify(name);
        function attrNull() {
          this.removeAttribute(name);
        }
        function attrNullNS() {
          this.removeAttributeNS(name.space, name.local);
        }
        function attrConstant() {
          this.setAttribute(name, value);
        }
        function attrConstantNS() {
          this.setAttributeNS(name.space, name.local, value);
        }
        function attrFunction() {
          var x = value.apply(this, arguments);
          if (x == null)
            this.removeAttribute(name);
          else
            this.setAttribute(name, x);
        }
        function attrFunctionNS() {
          var x = value.apply(this, arguments);
          if (x == null)
            this.removeAttributeNS(name.space, name.local);
          else
            this.setAttributeNS(name.space, name.local, x);
        }
        return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
      }
      function d3_collapse(s) {
        return s.trim().replace(/\s+/g, " ");
      }
      d3_selectionPrototype.classed = function(name, value) {
        if (arguments.length < 2) {
          if (typeof name === "string") {
            var node = this.node(),
                n = (name = d3_selection_classes(name)).length,
                i = -1;
            if (value = node.classList) {
              while (++i < n)
                if (!value.contains(name[i]))
                  return false;
            } else {
              value = node.getAttribute("class");
              while (++i < n)
                if (!d3_selection_classedRe(name[i]).test(value))
                  return false;
            }
            return true;
          }
          for (value in name)
            this.each(d3_selection_classed(value, name[value]));
          return this;
        }
        return this.each(d3_selection_classed(name, value));
      };
      function d3_selection_classedRe(name) {
        return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
      }
      function d3_selection_classes(name) {
        return (name + "").trim().split(/^|\s+/);
      }
      function d3_selection_classed(name, value) {
        name = d3_selection_classes(name).map(d3_selection_classedName);
        var n = name.length;
        function classedConstant() {
          var i = -1;
          while (++i < n)
            name[i](this, value);
        }
        function classedFunction() {
          var i = -1,
              x = value.apply(this, arguments);
          while (++i < n)
            name[i](this, x);
        }
        return typeof value === "function" ? classedFunction : classedConstant;
      }
      function d3_selection_classedName(name) {
        var re = d3_selection_classedRe(name);
        return function(node, value) {
          if (c = node.classList)
            return value ? c.add(name) : c.remove(name);
          var c = node.getAttribute("class") || "";
          if (value) {
            re.lastIndex = 0;
            if (!re.test(c))
              node.setAttribute("class", d3_collapse(c + " " + name));
          } else {
            node.setAttribute("class", d3_collapse(c.replace(re, " ")));
          }
        };
      }
      d3_selectionPrototype.style = function(name, value, priority) {
        var n = arguments.length;
        if (n < 3) {
          if (typeof name !== "string") {
            if (n < 2)
              value = "";
            for (priority in name)
              this.each(d3_selection_style(priority, name[priority], value));
            return this;
          }
          if (n < 2) {
            var node = this.node();
            return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
          }
          priority = "";
        }
        return this.each(d3_selection_style(name, value, priority));
      };
      function d3_selection_style(name, value, priority) {
        function styleNull() {
          this.style.removeProperty(name);
        }
        function styleConstant() {
          this.style.setProperty(name, value, priority);
        }
        function styleFunction() {
          var x = value.apply(this, arguments);
          if (x == null)
            this.style.removeProperty(name);
          else
            this.style.setProperty(name, x, priority);
        }
        return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
      }
      d3_selectionPrototype.property = function(name, value) {
        if (arguments.length < 2) {
          if (typeof name === "string")
            return this.node()[name];
          for (value in name)
            this.each(d3_selection_property(value, name[value]));
          return this;
        }
        return this.each(d3_selection_property(name, value));
      };
      function d3_selection_property(name, value) {
        function propertyNull() {
          delete this[name];
        }
        function propertyConstant() {
          this[name] = value;
        }
        function propertyFunction() {
          var x = value.apply(this, arguments);
          if (x == null)
            delete this[name];
          else
            this[name] = x;
        }
        return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
      }
      d3_selectionPrototype.text = function(value) {
        return arguments.length ? this.each(typeof value === "function" ? function() {
          var v = value.apply(this, arguments);
          this.textContent = v == null ? "" : v;
        } : value == null ? function() {
          this.textContent = "";
        } : function() {
          this.textContent = value;
        }) : this.node().textContent;
      };
      d3_selectionPrototype.html = function(value) {
        return arguments.length ? this.each(typeof value === "function" ? function() {
          var v = value.apply(this, arguments);
          this.innerHTML = v == null ? "" : v;
        } : value == null ? function() {
          this.innerHTML = "";
        } : function() {
          this.innerHTML = value;
        }) : this.node().innerHTML;
      };
      d3_selectionPrototype.append = function(name) {
        name = d3_selection_creator(name);
        return this.select(function() {
          return this.appendChild(name.apply(this, arguments));
        });
      };
      function d3_selection_creator(name) {
        function create() {
          var document = this.ownerDocument,
              namespace = this.namespaceURI;
          return namespace ? document.createElementNS(namespace, name) : document.createElement(name);
        }
        function createNS() {
          return this.ownerDocument.createElementNS(name.space, name.local);
        }
        return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
      }
      d3_selectionPrototype.insert = function(name, before) {
        name = d3_selection_creator(name);
        before = d3_selection_selector(before);
        return this.select(function() {
          return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
        });
      };
      d3_selectionPrototype.remove = function() {
        return this.each(d3_selectionRemove);
      };
      function d3_selectionRemove() {
        var parent = this.parentNode;
        if (parent)
          parent.removeChild(this);
      }
      d3_selectionPrototype.data = function(value, key) {
        var i = -1,
            n = this.length,
            group,
            node;
        if (!arguments.length) {
          value = new Array(n = (group = this[0]).length);
          while (++i < n) {
            if (node = group[i]) {
              value[i] = node.__data__;
            }
          }
          return value;
        }
        function bind(group, groupData) {
          var i,
              n = group.length,
              m = groupData.length,
              n0 = Math.min(n, m),
              updateNodes = new Array(m),
              enterNodes = new Array(m),
              exitNodes = new Array(n),
              node,
              nodeData;
          if (key) {
            var nodeByKeyValue = new d3_Map(),
                keyValues = new Array(n),
                keyValue;
            for (i = -1; ++i < n; ) {
              if (nodeByKeyValue.has(keyValue = key.call(node = group[i], node.__data__, i))) {
                exitNodes[i] = node;
              } else {
                nodeByKeyValue.set(keyValue, node);
              }
              keyValues[i] = keyValue;
            }
            for (i = -1; ++i < m; ) {
              if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
                enterNodes[i] = d3_selection_dataNode(nodeData);
              } else if (node !== true) {
                updateNodes[i] = node;
                node.__data__ = nodeData;
              }
              nodeByKeyValue.set(keyValue, true);
            }
            for (i = -1; ++i < n; ) {
              if (nodeByKeyValue.get(keyValues[i]) !== true) {
                exitNodes[i] = group[i];
              }
            }
          } else {
            for (i = -1; ++i < n0; ) {
              node = group[i];
              nodeData = groupData[i];
              if (node) {
                node.__data__ = nodeData;
                updateNodes[i] = node;
              } else {
                enterNodes[i] = d3_selection_dataNode(nodeData);
              }
            }
            for (; i < m; ++i) {
              enterNodes[i] = d3_selection_dataNode(groupData[i]);
            }
            for (; i < n; ++i) {
              exitNodes[i] = group[i];
            }
          }
          enterNodes.update = updateNodes;
          enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
          enter.push(enterNodes);
          update.push(updateNodes);
          exit.push(exitNodes);
        }
        var enter = d3_selection_enter([]),
            update = d3_selection([]),
            exit = d3_selection([]);
        if (typeof value === "function") {
          while (++i < n) {
            bind(group = this[i], value.call(group, group.parentNode.__data__, i));
          }
        } else {
          while (++i < n) {
            bind(group = this[i], value);
          }
        }
        update.enter = function() {
          return enter;
        };
        update.exit = function() {
          return exit;
        };
        return update;
      };
      function d3_selection_dataNode(data) {
        return {__data__: data};
      }
      d3_selectionPrototype.datum = function(value) {
        return arguments.length ? this.property("__data__", value) : this.property("__data__");
      };
      d3_selectionPrototype.filter = function(filter) {
        var subgroups = [],
            subgroup,
            group,
            node;
        if (typeof filter !== "function")
          filter = d3_selection_filter(filter);
        for (var j = 0,
            m = this.length; j < m; j++) {
          subgroups.push(subgroup = []);
          subgroup.parentNode = (group = this[j]).parentNode;
          for (var i = 0,
              n = group.length; i < n; i++) {
            if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
              subgroup.push(node);
            }
          }
        }
        return d3_selection(subgroups);
      };
      function d3_selection_filter(selector) {
        return function() {
          return d3_selectMatches(this, selector);
        };
      }
      d3_selectionPrototype.order = function() {
        for (var j = -1,
            m = this.length; ++j < m; ) {
          for (var group = this[j],
              i = group.length - 1,
              next = group[i],
              node; --i >= 0; ) {
            if (node = group[i]) {
              if (next && next !== node.nextSibling)
                next.parentNode.insertBefore(node, next);
              next = node;
            }
          }
        }
        return this;
      };
      d3_selectionPrototype.sort = function(comparator) {
        comparator = d3_selection_sortComparator.apply(this, arguments);
        for (var j = -1,
            m = this.length; ++j < m; )
          this[j].sort(comparator);
        return this.order();
      };
      function d3_selection_sortComparator(comparator) {
        if (!arguments.length)
          comparator = d3_ascending;
        return function(a, b) {
          return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
        };
      }
      d3_selectionPrototype.each = function(callback) {
        return d3_selection_each(this, function(node, i, j) {
          callback.call(node, node.__data__, i, j);
        });
      };
      function d3_selection_each(groups, callback) {
        for (var j = 0,
            m = groups.length; j < m; j++) {
          for (var group = groups[j],
              i = 0,
              n = group.length,
              node; i < n; i++) {
            if (node = group[i])
              callback(node, i, j);
          }
        }
        return groups;
      }
      d3_selectionPrototype.call = function(callback) {
        var args = d3_array(arguments);
        callback.apply(args[0] = this, args);
        return this;
      };
      d3_selectionPrototype.empty = function() {
        return !this.node();
      };
      d3_selectionPrototype.node = function() {
        for (var j = 0,
            m = this.length; j < m; j++) {
          for (var group = this[j],
              i = 0,
              n = group.length; i < n; i++) {
            var node = group[i];
            if (node)
              return node;
          }
        }
        return null;
      };
      d3_selectionPrototype.size = function() {
        var n = 0;
        d3_selection_each(this, function() {
          ++n;
        });
        return n;
      };
      function d3_selection_enter(selection) {
        d3_subclass(selection, d3_selection_enterPrototype);
        return selection;
      }
      var d3_selection_enterPrototype = [];
      d3.selection.enter = d3_selection_enter;
      d3.selection.enter.prototype = d3_selection_enterPrototype;
      d3_selection_enterPrototype.append = d3_selectionPrototype.append;
      d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
      d3_selection_enterPrototype.node = d3_selectionPrototype.node;
      d3_selection_enterPrototype.call = d3_selectionPrototype.call;
      d3_selection_enterPrototype.size = d3_selectionPrototype.size;
      d3_selection_enterPrototype.select = function(selector) {
        var subgroups = [],
            subgroup,
            subnode,
            upgroup,
            group,
            node;
        for (var j = -1,
            m = this.length; ++j < m; ) {
          upgroup = (group = this[j]).update;
          subgroups.push(subgroup = []);
          subgroup.parentNode = group.parentNode;
          for (var i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
              subnode.__data__ = node.__data__;
            } else {
              subgroup.push(null);
            }
          }
        }
        return d3_selection(subgroups);
      };
      d3_selection_enterPrototype.insert = function(name, before) {
        if (arguments.length < 2)
          before = d3_selection_enterInsertBefore(this);
        return d3_selectionPrototype.insert.call(this, name, before);
      };
      function d3_selection_enterInsertBefore(enter) {
        var i0,
            j0;
        return function(d, i, j) {
          var group = enter[j].update,
              n = group.length,
              node;
          if (j != j0)
            j0 = j, i0 = 0;
          if (i >= i0)
            i0 = i + 1;
          while (!(node = group[i0]) && ++i0 < n)
            ;
          return node;
        };
      }
      d3.select = function(node) {
        var group;
        if (typeof node === "string") {
          group = [d3_select(node, d3_document)];
          group.parentNode = d3_document.documentElement;
        } else {
          group = [node];
          group.parentNode = d3_documentElement(node);
        }
        return d3_selection([group]);
      };
      d3.selectAll = function(nodes) {
        var group;
        if (typeof nodes === "string") {
          group = d3_array(d3_selectAll(nodes, d3_document));
          group.parentNode = d3_document.documentElement;
        } else {
          group = nodes;
          group.parentNode = null;
        }
        return d3_selection([group]);
      };
      d3_selectionPrototype.on = function(type, listener, capture) {
        var n = arguments.length;
        if (n < 3) {
          if (typeof type !== "string") {
            if (n < 2)
              listener = false;
            for (capture in type)
              this.each(d3_selection_on(capture, type[capture], listener));
            return this;
          }
          if (n < 2)
            return (n = this.node()["__on" + type]) && n._;
          capture = false;
        }
        return this.each(d3_selection_on(type, listener, capture));
      };
      function d3_selection_on(type, listener, capture) {
        var name = "__on" + type,
            i = type.indexOf("."),
            wrap = d3_selection_onListener;
        if (i > 0)
          type = type.slice(0, i);
        var filter = d3_selection_onFilters.get(type);
        if (filter)
          type = filter, wrap = d3_selection_onFilter;
        function onRemove() {
          var l = this[name];
          if (l) {
            this.removeEventListener(type, l, l.$);
            delete this[name];
          }
        }
        function onAdd() {
          var l = wrap(listener, d3_array(arguments));
          onRemove.call(this);
          this.addEventListener(type, this[name] = l, l.$ = capture);
          l._ = listener;
        }
        function removeAll() {
          var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"),
              match;
          for (var name in this) {
            if (match = name.match(re)) {
              var l = this[name];
              this.removeEventListener(match[1], l, l.$);
              delete this[name];
            }
          }
        }
        return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
      }
      var d3_selection_onFilters = d3.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      });
      if (d3_document) {
        d3_selection_onFilters.forEach(function(k) {
          if ("on" + k in d3_document)
            d3_selection_onFilters.remove(k);
        });
      }
      function d3_selection_onListener(listener, argumentz) {
        return function(e) {
          var o = d3.event;
          d3.event = e;
          argumentz[0] = this.__data__;
          try {
            listener.apply(this, argumentz);
          } finally {
            d3.event = o;
          }
        };
      }
      function d3_selection_onFilter(listener, argumentz) {
        var l = d3_selection_onListener(listener, argumentz);
        return function(e) {
          var target = this,
              related = e.relatedTarget;
          if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
            l.call(target, e);
          }
        };
      }
      var d3_event_dragSelect,
          d3_event_dragId = 0;
      function d3_event_dragSuppress(node) {
        var name = ".dragsuppress-" + ++d3_event_dragId,
            click = "click" + name,
            w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
        if (d3_event_dragSelect == null) {
          d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
        }
        if (d3_event_dragSelect) {
          var style = d3_documentElement(node).style,
              select = style[d3_event_dragSelect];
          style[d3_event_dragSelect] = "none";
        }
        return function(suppressClick) {
          w.on(name, null);
          if (d3_event_dragSelect)
            style[d3_event_dragSelect] = select;
          if (suppressClick) {
            var off = function() {
              w.on(click, null);
            };
            w.on(click, function() {
              d3_eventPreventDefault();
              off();
            }, true);
            setTimeout(off, 0);
          }
        };
      }
      d3.mouse = function(container) {
        return d3_mousePoint(container, d3_eventSource());
      };
      var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
      function d3_mousePoint(container, e) {
        if (e.changedTouches)
          e = e.changedTouches[0];
        var svg = container.ownerSVGElement || container;
        if (svg.createSVGPoint) {
          var point = svg.createSVGPoint();
          if (d3_mouse_bug44083 < 0) {
            var window = d3_window(container);
            if (window.scrollX || window.scrollY) {
              svg = d3.select("body").append("svg").style({
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                padding: 0,
                border: "none"
              }, "important");
              var ctm = svg[0][0].getScreenCTM();
              d3_mouse_bug44083 = !(ctm.f || ctm.e);
              svg.remove();
            }
          }
          if (d3_mouse_bug44083)
            point.x = e.pageX, point.y = e.pageY;
          else
            point.x = e.clientX, point.y = e.clientY;
          point = point.matrixTransform(container.getScreenCTM().inverse());
          return [point.x, point.y];
        }
        var rect = container.getBoundingClientRect();
        return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop];
      }
      d3.touch = function(container, touches, identifier) {
        if (arguments.length < 3)
          identifier = touches, touches = d3_eventSource().changedTouches;
        if (touches)
          for (var i = 0,
              n = touches.length,
              touch; i < n; ++i) {
            if ((touch = touches[i]).identifier === identifier) {
              return d3_mousePoint(container, touch);
            }
          }
      };
      d3.behavior.drag = function() {
        var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"),
            origin = null,
            mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"),
            touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
        function drag() {
          this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
        }
        function dragstart(id, position, subject, move, end) {
          return function() {
            var that = this,
                target = d3.event.target,
                parent = that.parentNode,
                dispatch = event.of(that, arguments),
                dragged = 0,
                dragId = id(),
                dragName = ".drag" + (dragId == null ? "" : "-" + dragId),
                dragOffset,
                dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended),
                dragRestore = d3_event_dragSuppress(target),
                position0 = position(parent, dragId);
            if (origin) {
              dragOffset = origin.apply(that, arguments);
              dragOffset = [dragOffset.x - position0[0], dragOffset.y - position0[1]];
            } else {
              dragOffset = [0, 0];
            }
            dispatch({type: "dragstart"});
            function moved() {
              var position1 = position(parent, dragId),
                  dx,
                  dy;
              if (!position1)
                return ;
              dx = position1[0] - position0[0];
              dy = position1[1] - position0[1];
              dragged |= dx | dy;
              position0 = position1;
              dispatch({
                type: "drag",
                x: position1[0] + dragOffset[0],
                y: position1[1] + dragOffset[1],
                dx: dx,
                dy: dy
              });
            }
            function ended() {
              if (!position(parent, dragId))
                return ;
              dragSubject.on(move + dragName, null).on(end + dragName, null);
              dragRestore(dragged && d3.event.target === target);
              dispatch({type: "dragend"});
            }
          };
        }
        drag.origin = function(x) {
          if (!arguments.length)
            return origin;
          origin = x;
          return drag;
        };
        return d3.rebind(drag, event, "on");
      };
      function d3_behavior_dragTouchId() {
        return d3.event.changedTouches[0].identifier;
      }
      d3.touches = function(container, touches) {
        if (arguments.length < 2)
          touches = d3_eventSource().touches;
        return touches ? d3_array(touches).map(function(touch) {
          var point = d3_mousePoint(container, touch);
          point.identifier = touch.identifier;
          return point;
        }) : [];
      };
      var ε = 1e-6,
          ε2 = ε * ε,
          π = Math.PI,
          τ = 2 * π,
          τε = τ - ε,
          halfπ = π / 2,
          d3_radians = π / 180,
          d3_degrees = 180 / π;
      function d3_sgn(x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
      }
      function d3_cross2d(a, b, c) {
        return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
      }
      function d3_acos(x) {
        return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
      }
      function d3_asin(x) {
        return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
      }
      function d3_sinh(x) {
        return ((x = Math.exp(x)) - 1 / x) / 2;
      }
      function d3_cosh(x) {
        return ((x = Math.exp(x)) + 1 / x) / 2;
      }
      function d3_tanh(x) {
        return ((x = Math.exp(2 * x)) - 1) / (x + 1);
      }
      function d3_haversin(x) {
        return (x = Math.sin(x / 2)) * x;
      }
      var ρ = Math.SQRT2,
          ρ2 = 2,
          ρ4 = 4;
      d3.interpolateZoom = function(p0, p1) {
        var ux0 = p0[0],
            uy0 = p0[1],
            w0 = p0[2],
            ux1 = p1[0],
            uy1 = p1[1],
            w1 = p1[2];
        var dx = ux1 - ux0,
            dy = uy1 - uy0,
            d2 = dx * dx + dy * dy,
            d1 = Math.sqrt(d2),
            b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1),
            b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1),
            r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
            r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1),
            dr = r1 - r0,
            S = (dr || Math.log(w1 / w0)) / ρ;
        function interpolate(t) {
          var s = t * S;
          if (dr) {
            var coshr0 = d3_cosh(r0),
                u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
            return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0)];
          }
          return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * s)];
        }
        interpolate.duration = S * 1e3;
        return interpolate;
      };
      d3.behavior.zoom = function() {
        var view = {
          x: 0,
          y: 0,
          k: 1
        },
            translate0,
            center0,
            center,
            size = [960, 500],
            scaleExtent = d3_behavior_zoomInfinity,
            duration = 250,
            zooming = 0,
            mousedown = "mousedown.zoom",
            mousemove = "mousemove.zoom",
            mouseup = "mouseup.zoom",
            mousewheelTimer,
            touchstart = "touchstart.zoom",
            touchtime,
            event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"),
            x0,
            x1,
            y0,
            y1;
        if (!d3_behavior_zoomWheel) {
          d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
            return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
          }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
            return d3.event.wheelDelta;
          }, "mousewheel") : (d3_behavior_zoomDelta = function() {
            return -d3.event.detail;
          }, "MozMousePixelScroll");
        }
        function zoom(g) {
          g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
        }
        zoom.event = function(g) {
          g.each(function() {
            var dispatch = event.of(this, arguments),
                view1 = view;
            if (d3_transitionInheritId) {
              d3.select(this).transition().each("start.zoom", function() {
                view = this.__chart__ || {
                  x: 0,
                  y: 0,
                  k: 1
                };
                zoomstarted(dispatch);
              }).tween("zoom:zoom", function() {
                var dx = size[0],
                    dy = size[1],
                    cx = center0 ? center0[0] : dx / 2,
                    cy = center0 ? center0[1] : dy / 2,
                    i = d3.interpolateZoom([(cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k], [(cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k]);
                return function(t) {
                  var l = i(t),
                      k = dx / l[2];
                  this.__chart__ = view = {
                    x: cx - l[0] * k,
                    y: cy - l[1] * k,
                    k: k
                  };
                  zoomed(dispatch);
                };
              }).each("interrupt.zoom", function() {
                zoomended(dispatch);
              }).each("end.zoom", function() {
                zoomended(dispatch);
              });
            } else {
              this.__chart__ = view;
              zoomstarted(dispatch);
              zoomed(dispatch);
              zoomended(dispatch);
            }
          });
        };
        zoom.translate = function(_) {
          if (!arguments.length)
            return [view.x, view.y];
          view = {
            x: +_[0],
            y: +_[1],
            k: view.k
          };
          rescale();
          return zoom;
        };
        zoom.scale = function(_) {
          if (!arguments.length)
            return view.k;
          view = {
            x: view.x,
            y: view.y,
            k: +_
          };
          rescale();
          return zoom;
        };
        zoom.scaleExtent = function(_) {
          if (!arguments.length)
            return scaleExtent;
          scaleExtent = _ == null ? d3_behavior_zoomInfinity : [+_[0], +_[1]];
          return zoom;
        };
        zoom.center = function(_) {
          if (!arguments.length)
            return center;
          center = _ && [+_[0], +_[1]];
          return zoom;
        };
        zoom.size = function(_) {
          if (!arguments.length)
            return size;
          size = _ && [+_[0], +_[1]];
          return zoom;
        };
        zoom.duration = function(_) {
          if (!arguments.length)
            return duration;
          duration = +_;
          return zoom;
        };
        zoom.x = function(z) {
          if (!arguments.length)
            return x1;
          x1 = z;
          x0 = z.copy();
          view = {
            x: 0,
            y: 0,
            k: 1
          };
          return zoom;
        };
        zoom.y = function(z) {
          if (!arguments.length)
            return y1;
          y1 = z;
          y0 = z.copy();
          view = {
            x: 0,
            y: 0,
            k: 1
          };
          return zoom;
        };
        function location(p) {
          return [(p[0] - view.x) / view.k, (p[1] - view.y) / view.k];
        }
        function point(l) {
          return [l[0] * view.k + view.x, l[1] * view.k + view.y];
        }
        function scaleTo(s) {
          view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
        }
        function translateTo(p, l) {
          l = point(l);
          view.x += p[0] - l[0];
          view.y += p[1] - l[1];
        }
        function zoomTo(that, p, l, k) {
          that.__chart__ = {
            x: view.x,
            y: view.y,
            k: view.k
          };
          scaleTo(Math.pow(2, k));
          translateTo(center0 = p, l);
          that = d3.select(that);
          if (duration > 0)
            that = that.transition().duration(duration);
          that.call(zoom.event);
        }
        function rescale() {
          if (x1)
            x1.domain(x0.range().map(function(x) {
              return (x - view.x) / view.k;
            }).map(x0.invert));
          if (y1)
            y1.domain(y0.range().map(function(y) {
              return (y - view.y) / view.k;
            }).map(y0.invert));
        }
        function zoomstarted(dispatch) {
          if (!zooming++)
            dispatch({type: "zoomstart"});
        }
        function zoomed(dispatch) {
          rescale();
          dispatch({
            type: "zoom",
            scale: view.k,
            translate: [view.x, view.y]
          });
        }
        function zoomended(dispatch) {
          if (!--zooming)
            dispatch({type: "zoomend"});
          center0 = null;
        }
        function mousedowned() {
          var that = this,
              target = d3.event.target,
              dispatch = event.of(that, arguments),
              dragged = 0,
              subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended),
              location0 = location(d3.mouse(that)),
              dragRestore = d3_event_dragSuppress(that);
          d3_selection_interrupt.call(that);
          zoomstarted(dispatch);
          function moved() {
            dragged = 1;
            translateTo(d3.mouse(that), location0);
            zoomed(dispatch);
          }
          function ended() {
            subject.on(mousemove, null).on(mouseup, null);
            dragRestore(dragged && d3.event.target === target);
            zoomended(dispatch);
          }
        }
        function touchstarted() {
          var that = this,
              dispatch = event.of(that, arguments),
              locations0 = {},
              distance0 = 0,
              scale0,
              zoomName = ".zoom-" + d3.event.changedTouches[0].identifier,
              touchmove = "touchmove" + zoomName,
              touchend = "touchend" + zoomName,
              targets = [],
              subject = d3.select(that),
              dragRestore = d3_event_dragSuppress(that);
          started();
          zoomstarted(dispatch);
          subject.on(mousedown, null).on(touchstart, started);
          function relocate() {
            var touches = d3.touches(that);
            scale0 = view.k;
            touches.forEach(function(t) {
              if (t.identifier in locations0)
                locations0[t.identifier] = location(t);
            });
            return touches;
          }
          function started() {
            var target = d3.event.target;
            d3.select(target).on(touchmove, moved).on(touchend, ended);
            targets.push(target);
            var changed = d3.event.changedTouches;
            for (var i = 0,
                n = changed.length; i < n; ++i) {
              locations0[changed[i].identifier] = null;
            }
            var touches = relocate(),
                now = Date.now();
            if (touches.length === 1) {
              if (now - touchtime < 500) {
                var p = touches[0];
                zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
                d3_eventPreventDefault();
              }
              touchtime = now;
            } else if (touches.length > 1) {
              var p = touches[0],
                  q = touches[1],
                  dx = p[0] - q[0],
                  dy = p[1] - q[1];
              distance0 = dx * dx + dy * dy;
            }
          }
          function moved() {
            var touches = d3.touches(that),
                p0,
                l0,
                p1,
                l1;
            d3_selection_interrupt.call(that);
            for (var i = 0,
                n = touches.length; i < n; ++i, l1 = null) {
              p1 = touches[i];
              if (l1 = locations0[p1.identifier]) {
                if (l0)
                  break;
                p0 = p1, l0 = l1;
              }
            }
            if (l1) {
              var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1,
                  scale1 = distance0 && Math.sqrt(distance1 / distance0);
              p0 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
              l0 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
              scaleTo(scale1 * scale0);
            }
            touchtime = null;
            translateTo(p0, l0);
            zoomed(dispatch);
          }
          function ended() {
            if (d3.event.touches.length) {
              var changed = d3.event.changedTouches;
              for (var i = 0,
                  n = changed.length; i < n; ++i) {
                delete locations0[changed[i].identifier];
              }
              for (var identifier in locations0) {
                return void relocate();
              }
            }
            d3.selectAll(targets).on(zoomName, null);
            subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
            dragRestore();
            zoomended(dispatch);
          }
        }
        function mousewheeled() {
          var dispatch = event.of(this, arguments);
          if (mousewheelTimer)
            clearTimeout(mousewheelTimer);
          else
            translate0 = location(center0 = center || d3.mouse(this)), d3_selection_interrupt.call(this), zoomstarted(dispatch);
          mousewheelTimer = setTimeout(function() {
            mousewheelTimer = null;
            zoomended(dispatch);
          }, 50);
          d3_eventPreventDefault();
          scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
          translateTo(center0, translate0);
          zoomed(dispatch);
        }
        function dblclicked() {
          var p = d3.mouse(this),
              k = Math.log(view.k) / Math.LN2;
          zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
        }
        return d3.rebind(zoom, event, "on");
      };
      var d3_behavior_zoomInfinity = [0, Infinity],
          d3_behavior_zoomDelta,
          d3_behavior_zoomWheel;
      d3.color = d3_color;
      function d3_color() {}
      d3_color.prototype.toString = function() {
        return this.rgb() + "";
      };
      d3.hsl = d3_hsl;
      function d3_hsl(h, s, l) {
        return this instanceof d3_hsl ? void(this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
      }
      var d3_hslPrototype = d3_hsl.prototype = new d3_color();
      d3_hslPrototype.brighter = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return new d3_hsl(this.h, this.s, this.l / k);
      };
      d3_hslPrototype.darker = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return new d3_hsl(this.h, this.s, k * this.l);
      };
      d3_hslPrototype.rgb = function() {
        return d3_hsl_rgb(this.h, this.s, this.l);
      };
      function d3_hsl_rgb(h, s, l) {
        var m1,
            m2;
        h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
        s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
        l = l < 0 ? 0 : l > 1 ? 1 : l;
        m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
        m1 = 2 * l - m2;
        function v(h) {
          if (h > 360)
            h -= 360;
          else if (h < 0)
            h += 360;
          if (h < 60)
            return m1 + (m2 - m1) * h / 60;
          if (h < 180)
            return m2;
          if (h < 240)
            return m1 + (m2 - m1) * (240 - h) / 60;
          return m1;
        }
        function vv(h) {
          return Math.round(v(h) * 255);
        }
        return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
      }
      d3.hcl = d3_hcl;
      function d3_hcl(h, c, l) {
        return this instanceof d3_hcl ? void(this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
      }
      var d3_hclPrototype = d3_hcl.prototype = new d3_color();
      d3_hclPrototype.brighter = function(k) {
        return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
      };
      d3_hclPrototype.darker = function(k) {
        return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
      };
      d3_hclPrototype.rgb = function() {
        return d3_hcl_lab(this.h, this.c, this.l).rgb();
      };
      function d3_hcl_lab(h, c, l) {
        if (isNaN(h))
          h = 0;
        if (isNaN(c))
          c = 0;
        return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
      }
      d3.lab = d3_lab;
      function d3_lab(l, a, b) {
        return this instanceof d3_lab ? void(this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
      }
      var d3_lab_K = 18;
      var d3_lab_X = .95047,
          d3_lab_Y = 1,
          d3_lab_Z = 1.08883;
      var d3_labPrototype = d3_lab.prototype = new d3_color();
      d3_labPrototype.brighter = function(k) {
        return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
      };
      d3_labPrototype.darker = function(k) {
        return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
      };
      d3_labPrototype.rgb = function() {
        return d3_lab_rgb(this.l, this.a, this.b);
      };
      function d3_lab_rgb(l, a, b) {
        var y = (l + 16) / 116,
            x = y + a / 500,
            z = y - b / 200;
        x = d3_lab_xyz(x) * d3_lab_X;
        y = d3_lab_xyz(y) * d3_lab_Y;
        z = d3_lab_xyz(z) * d3_lab_Z;
        return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
      }
      function d3_lab_hcl(l, a, b) {
        return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
      }
      function d3_lab_xyz(x) {
        return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
      }
      function d3_xyz_lab(x) {
        return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
      }
      function d3_xyz_rgb(r) {
        return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
      }
      d3.rgb = d3_rgb;
      function d3_rgb(r, g, b) {
        return this instanceof d3_rgb ? void(this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
      }
      function d3_rgbNumber(value) {
        return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
      }
      function d3_rgbString(value) {
        return d3_rgbNumber(value) + "";
      }
      var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
      d3_rgbPrototype.brighter = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        var r = this.r,
            g = this.g,
            b = this.b,
            i = 30;
        if (!r && !g && !b)
          return new d3_rgb(i, i, i);
        if (r && r < i)
          r = i;
        if (g && g < i)
          g = i;
        if (b && b < i)
          b = i;
        return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
      };
      d3_rgbPrototype.darker = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return new d3_rgb(k * this.r, k * this.g, k * this.b);
      };
      d3_rgbPrototype.hsl = function() {
        return d3_rgb_hsl(this.r, this.g, this.b);
      };
      d3_rgbPrototype.toString = function() {
        return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
      };
      function d3_rgb_hex(v) {
        return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
      }
      function d3_rgb_parse(format, rgb, hsl) {
        var r = 0,
            g = 0,
            b = 0,
            m1,
            m2,
            color;
        m1 = /([a-z]+)\((.*)\)/i.exec(format);
        if (m1) {
          m2 = m1[2].split(",");
          switch (m1[1]) {
            case "hsl":
              {
                return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
              }
            case "rgb":
              {
                return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
              }
          }
        }
        if (color = d3_rgb_names.get(format.toLowerCase())) {
          return rgb(color.r, color.g, color.b);
        }
        if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
          if (format.length === 4) {
            r = (color & 3840) >> 4;
            r = r >> 4 | r;
            g = color & 240;
            g = g >> 4 | g;
            b = color & 15;
            b = b << 4 | b;
          } else if (format.length === 7) {
            r = (color & 16711680) >> 16;
            g = (color & 65280) >> 8;
            b = color & 255;
          }
        }
        return rgb(r, g, b);
      }
      function d3_rgb_hsl(r, g, b) {
        var min = Math.min(r /= 255, g /= 255, b /= 255),
            max = Math.max(r, g, b),
            d = max - min,
            h,
            s,
            l = (max + min) / 2;
        if (d) {
          s = l < .5 ? d / (max + min) : d / (2 - max - min);
          if (r == max)
            h = (g - b) / d + (g < b ? 6 : 0);
          else if (g == max)
            h = (b - r) / d + 2;
          else
            h = (r - g) / d + 4;
          h *= 60;
        } else {
          h = NaN;
          s = l > 0 && l < 1 ? 0 : h;
        }
        return new d3_hsl(h, s, l);
      }
      function d3_rgb_lab(r, g, b) {
        r = d3_rgb_xyz(r);
        g = d3_rgb_xyz(g);
        b = d3_rgb_xyz(b);
        var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X),
            y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y),
            z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
        return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
      }
      function d3_rgb_xyz(r) {
        return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
      }
      function d3_rgb_parseNumber(c) {
        var f = parseFloat(c);
        return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
      }
      var d3_rgb_names = d3.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      });
      d3_rgb_names.forEach(function(key, value) {
        d3_rgb_names.set(key, d3_rgbNumber(value));
      });
      function d3_functor(v) {
        return typeof v === "function" ? v : function() {
          return v;
        };
      }
      d3.functor = d3_functor;
      d3.xhr = d3_xhrType(d3_identity);
      function d3_xhrType(response) {
        return function(url, mimeType, callback) {
          if (arguments.length === 2 && typeof mimeType === "function")
            callback = mimeType, mimeType = null;
          return d3_xhr(url, mimeType, response, callback);
        };
      }
      function d3_xhr(url, mimeType, response, callback) {
        var xhr = {},
            dispatch = d3.dispatch("beforesend", "progress", "load", "error"),
            headers = {},
            request = new XMLHttpRequest(),
            responseType = null;
        if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url))
          request = new XDomainRequest();
        "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
          request.readyState > 3 && respond();
        };
        function respond() {
          var status = request.status,
              result;
          if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
            try {
              result = response.call(xhr, request);
            } catch (e) {
              dispatch.error.call(xhr, e);
              return ;
            }
            dispatch.load.call(xhr, result);
          } else {
            dispatch.error.call(xhr, request);
          }
        }
        request.onprogress = function(event) {
          var o = d3.event;
          d3.event = event;
          try {
            dispatch.progress.call(xhr, request);
          } finally {
            d3.event = o;
          }
        };
        xhr.header = function(name, value) {
          name = (name + "").toLowerCase();
          if (arguments.length < 2)
            return headers[name];
          if (value == null)
            delete headers[name];
          else
            headers[name] = value + "";
          return xhr;
        };
        xhr.mimeType = function(value) {
          if (!arguments.length)
            return mimeType;
          mimeType = value == null ? null : value + "";
          return xhr;
        };
        xhr.responseType = function(value) {
          if (!arguments.length)
            return responseType;
          responseType = value;
          return xhr;
        };
        xhr.response = function(value) {
          response = value;
          return xhr;
        };
        ["get", "post"].forEach(function(method) {
          xhr[method] = function() {
            return xhr.send.apply(xhr, [method].concat(d3_array(arguments)));
          };
        });
        xhr.send = function(method, data, callback) {
          if (arguments.length === 2 && typeof data === "function")
            callback = data, data = null;
          request.open(method, url, true);
          if (mimeType != null && !("accept" in headers))
            headers["accept"] = mimeType + ",*/*";
          if (request.setRequestHeader)
            for (var name in headers)
              request.setRequestHeader(name, headers[name]);
          if (mimeType != null && request.overrideMimeType)
            request.overrideMimeType(mimeType);
          if (responseType != null)
            request.responseType = responseType;
          if (callback != null)
            xhr.on("error", callback).on("load", function(request) {
              callback(null, request);
            });
          dispatch.beforesend.call(xhr, request);
          request.send(data == null ? null : data);
          return xhr;
        };
        xhr.abort = function() {
          request.abort();
          return xhr;
        };
        d3.rebind(xhr, dispatch, "on");
        return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
      }
      function d3_xhr_fixCallback(callback) {
        return callback.length === 1 ? function(error, request) {
          callback(error == null ? request : null);
        } : callback;
      }
      function d3_xhrHasResponse(request) {
        var type = request.responseType;
        return type && type !== "text" ? request.response : request.responseText;
      }
      d3.dsv = function(delimiter, mimeType) {
        var reFormat = new RegExp('["' + delimiter + "\n]"),
            delimiterCode = delimiter.charCodeAt(0);
        function dsv(url, row, callback) {
          if (arguments.length < 3)
            callback = row, row = null;
          var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
          xhr.row = function(_) {
            return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
          };
          return xhr;
        }
        function response(request) {
          return dsv.parse(request.responseText);
        }
        function typedResponse(f) {
          return function(request) {
            return dsv.parse(request.responseText, f);
          };
        }
        dsv.parse = function(text, f) {
          var o;
          return dsv.parseRows(text, function(row, i) {
            if (o)
              return o(row, i - 1);
            var a = new Function("d", "return {" + row.map(function(name, i) {
              return JSON.stringify(name) + ": d[" + i + "]";
            }).join(",") + "}");
            o = f ? function(row, i) {
              return f(a(row), i);
            } : a;
          });
        };
        dsv.parseRows = function(text, f) {
          var EOL = {},
              EOF = {},
              rows = [],
              N = text.length,
              I = 0,
              n = 0,
              t,
              eol;
          function token() {
            if (I >= N)
              return EOF;
            if (eol)
              return eol = false, EOL;
            var j = I;
            if (text.charCodeAt(j) === 34) {
              var i = j;
              while (i++ < N) {
                if (text.charCodeAt(i) === 34) {
                  if (text.charCodeAt(i + 1) !== 34)
                    break;
                  ++i;
                }
              }
              I = i + 2;
              var c = text.charCodeAt(i + 1);
              if (c === 13) {
                eol = true;
                if (text.charCodeAt(i + 2) === 10)
                  ++I;
              } else if (c === 10) {
                eol = true;
              }
              return text.slice(j + 1, i).replace(/""/g, '"');
            }
            while (I < N) {
              var c = text.charCodeAt(I++),
                  k = 1;
              if (c === 10)
                eol = true;
              else if (c === 13) {
                eol = true;
                if (text.charCodeAt(I) === 10)
                  ++I, ++k;
              } else if (c !== delimiterCode)
                continue;
              return text.slice(j, I - k);
            }
            return text.slice(j);
          }
          while ((t = token()) !== EOF) {
            var a = [];
            while (t !== EOL && t !== EOF) {
              a.push(t);
              t = token();
            }
            if (f && (a = f(a, n++)) == null)
              continue;
            rows.push(a);
          }
          return rows;
        };
        dsv.format = function(rows) {
          if (Array.isArray(rows[0]))
            return dsv.formatRows(rows);
          var fieldSet = new d3_Set(),
              fields = [];
          rows.forEach(function(row) {
            for (var field in row) {
              if (!fieldSet.has(field)) {
                fields.push(fieldSet.add(field));
              }
            }
          });
          return [fields.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
            return fields.map(function(field) {
              return formatValue(row[field]);
            }).join(delimiter);
          })).join("\n");
        };
        dsv.formatRows = function(rows) {
          return rows.map(formatRow).join("\n");
        };
        function formatRow(row) {
          return row.map(formatValue).join(delimiter);
        }
        function formatValue(text) {
          return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
        }
        return dsv;
      };
      d3.csv = d3.dsv(",", "text/csv");
      d3.tsv = d3.dsv("	", "text/tab-separated-values");
      var d3_timer_queueHead,
          d3_timer_queueTail,
          d3_timer_interval,
          d3_timer_timeout,
          d3_timer_active,
          d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
            setTimeout(callback, 17);
          };
      d3.timer = function(callback, delay, then) {
        var n = arguments.length;
        if (n < 2)
          delay = 0;
        if (n < 3)
          then = Date.now();
        var time = then + delay,
            timer = {
              c: callback,
              t: time,
              f: false,
              n: null
            };
        if (d3_timer_queueTail)
          d3_timer_queueTail.n = timer;
        else
          d3_timer_queueHead = timer;
        d3_timer_queueTail = timer;
        if (!d3_timer_interval) {
          d3_timer_timeout = clearTimeout(d3_timer_timeout);
          d3_timer_interval = 1;
          d3_timer_frame(d3_timer_step);
        }
      };
      function d3_timer_step() {
        var now = d3_timer_mark(),
            delay = d3_timer_sweep() - now;
        if (delay > 24) {
          if (isFinite(delay)) {
            clearTimeout(d3_timer_timeout);
            d3_timer_timeout = setTimeout(d3_timer_step, delay);
          }
          d3_timer_interval = 0;
        } else {
          d3_timer_interval = 1;
          d3_timer_frame(d3_timer_step);
        }
      }
      d3.timer.flush = function() {
        d3_timer_mark();
        d3_timer_sweep();
      };
      function d3_timer_mark() {
        var now = Date.now();
        d3_timer_active = d3_timer_queueHead;
        while (d3_timer_active) {
          if (now >= d3_timer_active.t)
            d3_timer_active.f = d3_timer_active.c(now - d3_timer_active.t);
          d3_timer_active = d3_timer_active.n;
        }
        return now;
      }
      function d3_timer_sweep() {
        var t0,
            t1 = d3_timer_queueHead,
            time = Infinity;
        while (t1) {
          if (t1.f) {
            t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
          } else {
            if (t1.t < time)
              time = t1.t;
            t1 = (t0 = t1).n;
          }
        }
        d3_timer_queueTail = t0;
        return time;
      }
      function d3_format_precision(x, p) {
        return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
      }
      d3.round = function(x, n) {
        return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
      };
      var d3_formatPrefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(d3_formatPrefix);
      d3.formatPrefix = function(value, precision) {
        var i = 0;
        if (value) {
          if (value < 0)
            value *= -1;
          if (precision)
            value = d3.round(value, d3_format_precision(value, precision));
          i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
          i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
        }
        return d3_formatPrefixes[8 + i / 3];
      };
      function d3_formatPrefix(d, i) {
        var k = Math.pow(10, abs(8 - i) * 3);
        return {
          scale: i > 8 ? function(d) {
            return d / k;
          } : function(d) {
            return d * k;
          },
          symbol: d
        };
      }
      function d3_locale_numberFormat(locale) {
        var locale_decimal = locale.decimal,
            locale_thousands = locale.thousands,
            locale_grouping = locale.grouping,
            locale_currency = locale.currency,
            formatGroup = locale_grouping && locale_thousands ? function(value, width) {
              var i = value.length,
                  t = [],
                  j = 0,
                  g = locale_grouping[0],
                  length = 0;
              while (i > 0 && g > 0) {
                if (length + g + 1 > width)
                  g = Math.max(1, width - length);
                t.push(value.substring(i -= g, i + g));
                if ((length += g + 1) > width)
                  break;
                g = locale_grouping[j = (j + 1) % locale_grouping.length];
              }
              return t.reverse().join(locale_thousands);
            } : d3_identity;
        return function(specifier) {
          var match = d3_format_re.exec(specifier),
              fill = match[1] || " ",
              align = match[2] || ">",
              sign = match[3] || "-",
              symbol = match[4] || "",
              zfill = match[5],
              width = +match[6],
              comma = match[7],
              precision = match[8],
              type = match[9],
              scale = 1,
              prefix = "",
              suffix = "",
              integer = false,
              exponent = true;
          if (precision)
            precision = +precision.substring(1);
          if (zfill || fill === "0" && align === "=") {
            zfill = fill = "0";
            align = "=";
          }
          switch (type) {
            case "n":
              comma = true;
              type = "g";
              break;
            case "%":
              scale = 100;
              suffix = "%";
              type = "f";
              break;
            case "p":
              scale = 100;
              suffix = "%";
              type = "r";
              break;
            case "b":
            case "o":
            case "x":
            case "X":
              if (symbol === "#")
                prefix = "0" + type.toLowerCase();
            case "c":
              exponent = false;
            case "d":
              integer = true;
              precision = 0;
              break;
            case "s":
              scale = -1;
              type = "r";
              break;
          }
          if (symbol === "$")
            prefix = locale_currency[0], suffix = locale_currency[1];
          if (type == "r" && !precision)
            type = "g";
          if (precision != null) {
            if (type == "g")
              precision = Math.max(1, Math.min(21, precision));
            else if (type == "e" || type == "f")
              precision = Math.max(0, Math.min(20, precision));
          }
          type = d3_format_types.get(type) || d3_format_typeDefault;
          var zcomma = zfill && comma;
          return function(value) {
            var fullSuffix = suffix;
            if (integer && value % 1)
              return "";
            var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
            if (scale < 0) {
              var unit = d3.formatPrefix(value, precision);
              value = unit.scale(value);
              fullSuffix = unit.symbol + suffix;
            } else {
              value *= scale;
            }
            value = type(value, precision);
            var i = value.lastIndexOf("."),
                before,
                after;
            if (i < 0) {
              var j = exponent ? value.lastIndexOf("e") : -1;
              if (j < 0)
                before = value, after = "";
              else
                before = value.substring(0, j), after = value.substring(j);
            } else {
              before = value.substring(0, i);
              after = locale_decimal + value.substring(i + 1);
            }
            if (!zfill && comma)
              before = formatGroup(before, Infinity);
            var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length),
                padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
            if (zcomma)
              before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
            negative += prefix;
            value = before + after;
            return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
          };
        };
      }
      var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
      var d3_format_types = d3.map({
        b: function(x) {
          return x.toString(2);
        },
        c: function(x) {
          return String.fromCharCode(x);
        },
        o: function(x) {
          return x.toString(8);
        },
        x: function(x) {
          return x.toString(16);
        },
        X: function(x) {
          return x.toString(16).toUpperCase();
        },
        g: function(x, p) {
          return x.toPrecision(p);
        },
        e: function(x, p) {
          return x.toExponential(p);
        },
        f: function(x, p) {
          return x.toFixed(p);
        },
        r: function(x, p) {
          return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
        }
      });
      function d3_format_typeDefault(x) {
        return x + "";
      }
      var d3_time = d3.time = {},
          d3_date = Date;
      function d3_date_utc() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
      }
      d3_date_utc.prototype = {
        getDate: function() {
          return this._.getUTCDate();
        },
        getDay: function() {
          return this._.getUTCDay();
        },
        getFullYear: function() {
          return this._.getUTCFullYear();
        },
        getHours: function() {
          return this._.getUTCHours();
        },
        getMilliseconds: function() {
          return this._.getUTCMilliseconds();
        },
        getMinutes: function() {
          return this._.getUTCMinutes();
        },
        getMonth: function() {
          return this._.getUTCMonth();
        },
        getSeconds: function() {
          return this._.getUTCSeconds();
        },
        getTime: function() {
          return this._.getTime();
        },
        getTimezoneOffset: function() {
          return 0;
        },
        valueOf: function() {
          return this._.valueOf();
        },
        setDate: function() {
          d3_time_prototype.setUTCDate.apply(this._, arguments);
        },
        setDay: function() {
          d3_time_prototype.setUTCDay.apply(this._, arguments);
        },
        setFullYear: function() {
          d3_time_prototype.setUTCFullYear.apply(this._, arguments);
        },
        setHours: function() {
          d3_time_prototype.setUTCHours.apply(this._, arguments);
        },
        setMilliseconds: function() {
          d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
        },
        setMinutes: function() {
          d3_time_prototype.setUTCMinutes.apply(this._, arguments);
        },
        setMonth: function() {
          d3_time_prototype.setUTCMonth.apply(this._, arguments);
        },
        setSeconds: function() {
          d3_time_prototype.setUTCSeconds.apply(this._, arguments);
        },
        setTime: function() {
          d3_time_prototype.setTime.apply(this._, arguments);
        }
      };
      var d3_time_prototype = Date.prototype;
      function d3_time_interval(local, step, number) {
        function round(date) {
          var d0 = local(date),
              d1 = offset(d0, 1);
          return date - d0 < d1 - date ? d0 : d1;
        }
        function ceil(date) {
          step(date = local(new d3_date(date - 1)), 1);
          return date;
        }
        function offset(date, k) {
          step(date = new d3_date(+date), k);
          return date;
        }
        function range(t0, t1, dt) {
          var time = ceil(t0),
              times = [];
          if (dt > 1) {
            while (time < t1) {
              if (!(number(time) % dt))
                times.push(new Date(+time));
              step(time, 1);
            }
          } else {
            while (time < t1)
              times.push(new Date(+time)), step(time, 1);
          }
          return times;
        }
        function range_utc(t0, t1, dt) {
          try {
            d3_date = d3_date_utc;
            var utc = new d3_date_utc();
            utc._ = t0;
            return range(utc, t1, dt);
          } finally {
            d3_date = Date;
          }
        }
        local.floor = local;
        local.round = round;
        local.ceil = ceil;
        local.offset = offset;
        local.range = range;
        var utc = local.utc = d3_time_interval_utc(local);
        utc.floor = utc;
        utc.round = d3_time_interval_utc(round);
        utc.ceil = d3_time_interval_utc(ceil);
        utc.offset = d3_time_interval_utc(offset);
        utc.range = range_utc;
        return local;
      }
      function d3_time_interval_utc(method) {
        return function(date, k) {
          try {
            d3_date = d3_date_utc;
            var utc = new d3_date_utc();
            utc._ = date;
            return method(utc, k)._;
          } finally {
            d3_date = Date;
          }
        };
      }
      d3_time.year = d3_time_interval(function(date) {
        date = d3_time.day(date);
        date.setMonth(0, 1);
        return date;
      }, function(date, offset) {
        date.setFullYear(date.getFullYear() + offset);
      }, function(date) {
        return date.getFullYear();
      });
      d3_time.years = d3_time.year.range;
      d3_time.years.utc = d3_time.year.utc.range;
      d3_time.day = d3_time_interval(function(date) {
        var day = new d3_date(2e3, 0);
        day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
        return day;
      }, function(date, offset) {
        date.setDate(date.getDate() + offset);
      }, function(date) {
        return date.getDate() - 1;
      });
      d3_time.days = d3_time.day.range;
      d3_time.days.utc = d3_time.day.utc.range;
      d3_time.dayOfYear = function(date) {
        var year = d3_time.year(date);
        return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
      };
      ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(day, i) {
        i = 7 - i;
        var interval = d3_time[day] = d3_time_interval(function(date) {
          (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
          return date;
        }, function(date, offset) {
          date.setDate(date.getDate() + Math.floor(offset) * 7);
        }, function(date) {
          var day = d3_time.year(date).getDay();
          return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
        });
        d3_time[day + "s"] = interval.range;
        d3_time[day + "s"].utc = interval.utc.range;
        d3_time[day + "OfYear"] = function(date) {
          var day = d3_time.year(date).getDay();
          return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
        };
      });
      d3_time.week = d3_time.sunday;
      d3_time.weeks = d3_time.sunday.range;
      d3_time.weeks.utc = d3_time.sunday.utc.range;
      d3_time.weekOfYear = d3_time.sundayOfYear;
      function d3_locale_timeFormat(locale) {
        var locale_dateTime = locale.dateTime,
            locale_date = locale.date,
            locale_time = locale.time,
            locale_periods = locale.periods,
            locale_days = locale.days,
            locale_shortDays = locale.shortDays,
            locale_months = locale.months,
            locale_shortMonths = locale.shortMonths;
        function d3_time_format(template) {
          var n = template.length;
          function format(date) {
            var string = [],
                i = -1,
                j = 0,
                c,
                p,
                f;
            while (++i < n) {
              if (template.charCodeAt(i) === 37) {
                string.push(template.slice(j, i));
                if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null)
                  c = template.charAt(++i);
                if (f = d3_time_formats[c])
                  c = f(date, p == null ? c === "e" ? " " : "0" : p);
                string.push(c);
                j = i + 1;
              }
            }
            string.push(template.slice(j, i));
            return string.join("");
          }
          format.parse = function(string) {
            var d = {
              y: 1900,
              m: 0,
              d: 1,
              H: 0,
              M: 0,
              S: 0,
              L: 0,
              Z: null
            },
                i = d3_time_parse(d, template, string, 0);
            if (i != string.length)
              return null;
            if ("p" in d)
              d.H = d.H % 12 + d.p * 12;
            var localZ = d.Z != null && d3_date !== d3_date_utc,
                date = new (localZ ? d3_date_utc : d3_date)();
            if ("j" in d)
              date.setFullYear(d.y, 0, d.j);
            else if ("w" in d && ("W" in d || "U" in d)) {
              date.setFullYear(d.y, 0, 1);
              date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
            } else
              date.setFullYear(d.y, d.m, d.d);
            date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
            return localZ ? date._ : date;
          };
          format.toString = function() {
            return template;
          };
          return format;
        }
        function d3_time_parse(date, template, string, j) {
          var c,
              p,
              t,
              i = 0,
              n = template.length,
              m = string.length;
          while (i < n) {
            if (j >= m)
              return -1;
            c = template.charCodeAt(i++);
            if (c === 37) {
              t = template.charAt(i++);
              p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
              if (!p || (j = p(date, string, j)) < 0)
                return -1;
            } else if (c != string.charCodeAt(j++)) {
              return -1;
            }
          }
          return j;
        }
        d3_time_format.utc = function(template) {
          var local = d3_time_format(template);
          function format(date) {
            try {
              d3_date = d3_date_utc;
              var utc = new d3_date();
              utc._ = date;
              return local(utc);
            } finally {
              d3_date = Date;
            }
          }
          format.parse = function(string) {
            try {
              d3_date = d3_date_utc;
              var date = local.parse(string);
              return date && date._;
            } finally {
              d3_date = Date;
            }
          };
          format.toString = local.toString;
          return format;
        };
        d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
        var d3_time_periodLookup = d3.map(),
            d3_time_dayRe = d3_time_formatRe(locale_days),
            d3_time_dayLookup = d3_time_formatLookup(locale_days),
            d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays),
            d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays),
            d3_time_monthRe = d3_time_formatRe(locale_months),
            d3_time_monthLookup = d3_time_formatLookup(locale_months),
            d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths),
            d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
        locale_periods.forEach(function(p, i) {
          d3_time_periodLookup.set(p.toLowerCase(), i);
        });
        var d3_time_formats = {
          a: function(d) {
            return locale_shortDays[d.getDay()];
          },
          A: function(d) {
            return locale_days[d.getDay()];
          },
          b: function(d) {
            return locale_shortMonths[d.getMonth()];
          },
          B: function(d) {
            return locale_months[d.getMonth()];
          },
          c: d3_time_format(locale_dateTime),
          d: function(d, p) {
            return d3_time_formatPad(d.getDate(), p, 2);
          },
          e: function(d, p) {
            return d3_time_formatPad(d.getDate(), p, 2);
          },
          H: function(d, p) {
            return d3_time_formatPad(d.getHours(), p, 2);
          },
          I: function(d, p) {
            return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
          },
          j: function(d, p) {
            return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
          },
          L: function(d, p) {
            return d3_time_formatPad(d.getMilliseconds(), p, 3);
          },
          m: function(d, p) {
            return d3_time_formatPad(d.getMonth() + 1, p, 2);
          },
          M: function(d, p) {
            return d3_time_formatPad(d.getMinutes(), p, 2);
          },
          p: function(d) {
            return locale_periods[+(d.getHours() >= 12)];
          },
          S: function(d, p) {
            return d3_time_formatPad(d.getSeconds(), p, 2);
          },
          U: function(d, p) {
            return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
          },
          w: function(d) {
            return d.getDay();
          },
          W: function(d, p) {
            return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
          },
          x: d3_time_format(locale_date),
          X: d3_time_format(locale_time),
          y: function(d, p) {
            return d3_time_formatPad(d.getFullYear() % 100, p, 2);
          },
          Y: function(d, p) {
            return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
          },
          Z: d3_time_zone,
          "%": function() {
            return "%";
          }
        };
        var d3_time_parsers = {
          a: d3_time_parseWeekdayAbbrev,
          A: d3_time_parseWeekday,
          b: d3_time_parseMonthAbbrev,
          B: d3_time_parseMonth,
          c: d3_time_parseLocaleFull,
          d: d3_time_parseDay,
          e: d3_time_parseDay,
          H: d3_time_parseHour24,
          I: d3_time_parseHour24,
          j: d3_time_parseDayOfYear,
          L: d3_time_parseMilliseconds,
          m: d3_time_parseMonthNumber,
          M: d3_time_parseMinutes,
          p: d3_time_parseAmPm,
          S: d3_time_parseSeconds,
          U: d3_time_parseWeekNumberSunday,
          w: d3_time_parseWeekdayNumber,
          W: d3_time_parseWeekNumberMonday,
          x: d3_time_parseLocaleDate,
          X: d3_time_parseLocaleTime,
          y: d3_time_parseYear,
          Y: d3_time_parseFullYear,
          Z: d3_time_parseZone,
          "%": d3_time_parseLiteralPercent
        };
        function d3_time_parseWeekdayAbbrev(date, string, i) {
          d3_time_dayAbbrevRe.lastIndex = 0;
          var n = d3_time_dayAbbrevRe.exec(string.slice(i));
          return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseWeekday(date, string, i) {
          d3_time_dayRe.lastIndex = 0;
          var n = d3_time_dayRe.exec(string.slice(i));
          return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseMonthAbbrev(date, string, i) {
          d3_time_monthAbbrevRe.lastIndex = 0;
          var n = d3_time_monthAbbrevRe.exec(string.slice(i));
          return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseMonth(date, string, i) {
          d3_time_monthRe.lastIndex = 0;
          var n = d3_time_monthRe.exec(string.slice(i));
          return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseLocaleFull(date, string, i) {
          return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
        }
        function d3_time_parseLocaleDate(date, string, i) {
          return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
        }
        function d3_time_parseLocaleTime(date, string, i) {
          return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
        }
        function d3_time_parseAmPm(date, string, i) {
          var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
          return n == null ? -1 : (date.p = n, i);
        }
        return d3_time_format;
      }
      var d3_time_formatPads = {
        "-": "",
        _: " ",
        "0": "0"
      },
          d3_time_numberRe = /^\s*\d+/,
          d3_time_percentRe = /^%/;
      function d3_time_formatPad(value, fill, width) {
        var sign = value < 0 ? "-" : "",
            string = (sign ? -value : value) + "",
            length = string.length;
        return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
      }
      function d3_time_formatRe(names) {
        return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
      }
      function d3_time_formatLookup(names) {
        var map = new d3_Map(),
            i = -1,
            n = names.length;
        while (++i < n)
          map.set(names[i].toLowerCase(), i);
        return map;
      }
      function d3_time_parseWeekdayNumber(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 1));
        return n ? (date.w = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseWeekNumberSunday(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i));
        return n ? (date.U = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseWeekNumberMonday(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i));
        return n ? (date.W = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseFullYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 4));
        return n ? (date.y = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
      }
      function d3_time_parseZone(date, string, i) {
        return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, i + 5) : -1;
      }
      function d3_time_expandYear(d) {
        return d + (d > 68 ? 1900 : 2e3);
      }
      function d3_time_parseMonthNumber(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
      }
      function d3_time_parseDay(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.d = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseDayOfYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 3));
        return n ? (date.j = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseHour24(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.H = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseMinutes(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.M = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseSeconds(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.S = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseMilliseconds(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 3));
        return n ? (date.L = +n[0], i + n[0].length) : -1;
      }
      function d3_time_zone(d) {
        var z = d.getTimezoneOffset(),
            zs = z > 0 ? "-" : "+",
            zh = abs(z) / 60 | 0,
            zm = abs(z) % 60;
        return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
      }
      function d3_time_parseLiteralPercent(date, string, i) {
        d3_time_percentRe.lastIndex = 0;
        var n = d3_time_percentRe.exec(string.slice(i, i + 1));
        return n ? i + n[0].length : -1;
      }
      function d3_time_formatMulti(formats) {
        var n = formats.length,
            i = -1;
        while (++i < n)
          formats[i][0] = this(formats[i][0]);
        return function(date) {
          var i = 0,
              f = formats[i];
          while (!f[1](date))
            f = formats[++i];
          return f[0](date);
        };
      }
      d3.locale = function(locale) {
        return {
          numberFormat: d3_locale_numberFormat(locale),
          timeFormat: d3_locale_timeFormat(locale)
        };
      };
      var d3_locale_enUS = d3.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      });
      d3.format = d3_locale_enUS.numberFormat;
      d3.geo = {};
      function d3_adder() {}
      d3_adder.prototype = {
        s: 0,
        t: 0,
        add: function(y) {
          d3_adderSum(y, this.t, d3_adderTemp);
          d3_adderSum(d3_adderTemp.s, this.s, this);
          if (this.s)
            this.t += d3_adderTemp.t;
          else
            this.s = d3_adderTemp.t;
        },
        reset: function() {
          this.s = this.t = 0;
        },
        valueOf: function() {
          return this.s;
        }
      };
      var d3_adderTemp = new d3_adder();
      function d3_adderSum(a, b, o) {
        var x = o.s = a + b,
            bv = x - a,
            av = x - bv;
        o.t = a - av + (b - bv);
      }
      d3.geo.stream = function(object, listener) {
        if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
          d3_geo_streamObjectType[object.type](object, listener);
        } else {
          d3_geo_streamGeometry(object, listener);
        }
      };
      function d3_geo_streamGeometry(geometry, listener) {
        if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
          d3_geo_streamGeometryType[geometry.type](geometry, listener);
        }
      }
      var d3_geo_streamObjectType = {
        Feature: function(feature, listener) {
          d3_geo_streamGeometry(feature.geometry, listener);
        },
        FeatureCollection: function(object, listener) {
          var features = object.features,
              i = -1,
              n = features.length;
          while (++i < n)
            d3_geo_streamGeometry(features[i].geometry, listener);
        }
      };
      var d3_geo_streamGeometryType = {
        Sphere: function(object, listener) {
          listener.sphere();
        },
        Point: function(object, listener) {
          object = object.coordinates;
          listener.point(object[0], object[1], object[2]);
        },
        MultiPoint: function(object, listener) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n)
            object = coordinates[i], listener.point(object[0], object[1], object[2]);
        },
        LineString: function(object, listener) {
          d3_geo_streamLine(object.coordinates, listener, 0);
        },
        MultiLineString: function(object, listener) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n)
            d3_geo_streamLine(coordinates[i], listener, 0);
        },
        Polygon: function(object, listener) {
          d3_geo_streamPolygon(object.coordinates, listener);
        },
        MultiPolygon: function(object, listener) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n)
            d3_geo_streamPolygon(coordinates[i], listener);
        },
        GeometryCollection: function(object, listener) {
          var geometries = object.geometries,
              i = -1,
              n = geometries.length;
          while (++i < n)
            d3_geo_streamGeometry(geometries[i], listener);
        }
      };
      function d3_geo_streamLine(coordinates, listener, closed) {
        var i = -1,
            n = coordinates.length - closed,
            coordinate;
        listener.lineStart();
        while (++i < n)
          coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
        listener.lineEnd();
      }
      function d3_geo_streamPolygon(coordinates, listener) {
        var i = -1,
            n = coordinates.length;
        listener.polygonStart();
        while (++i < n)
          d3_geo_streamLine(coordinates[i], listener, 1);
        listener.polygonEnd();
      }
      d3.geo.area = function(object) {
        d3_geo_areaSum = 0;
        d3.geo.stream(object, d3_geo_area);
        return d3_geo_areaSum;
      };
      var d3_geo_areaSum,
          d3_geo_areaRingSum = new d3_adder();
      var d3_geo_area = {
        sphere: function() {
          d3_geo_areaSum += 4 * π;
        },
        point: d3_noop,
        lineStart: d3_noop,
        lineEnd: d3_noop,
        polygonStart: function() {
          d3_geo_areaRingSum.reset();
          d3_geo_area.lineStart = d3_geo_areaRingStart;
        },
        polygonEnd: function() {
          var area = 2 * d3_geo_areaRingSum;
          d3_geo_areaSum += area < 0 ? 4 * π + area : area;
          d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
        }
      };
      function d3_geo_areaRingStart() {
        var λ00,
            φ00,
            λ0,
            cosφ0,
            sinφ0;
        d3_geo_area.point = function(λ, φ) {
          d3_geo_area.point = nextPoint;
          λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), sinφ0 = Math.sin(φ);
        };
        function nextPoint(λ, φ) {
          λ *= d3_radians;
          φ = φ * d3_radians / 2 + π / 4;
          var dλ = λ - λ0,
              sdλ = dλ >= 0 ? 1 : -1,
              adλ = sdλ * dλ,
              cosφ = Math.cos(φ),
              sinφ = Math.sin(φ),
              k = sinφ0 * sinφ,
              u = cosφ0 * cosφ + k * Math.cos(adλ),
              v = k * sdλ * Math.sin(adλ);
          d3_geo_areaRingSum.add(Math.atan2(v, u));
          λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
        }
        d3_geo_area.lineEnd = function() {
          nextPoint(λ00, φ00);
        };
      }
      function d3_geo_cartesian(spherical) {
        var λ = spherical[0],
            φ = spherical[1],
            cosφ = Math.cos(φ);
        return [cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ)];
      }
      function d3_geo_cartesianDot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      }
      function d3_geo_cartesianCross(a, b) {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
      }
      function d3_geo_cartesianAdd(a, b) {
        a[0] += b[0];
        a[1] += b[1];
        a[2] += b[2];
      }
      function d3_geo_cartesianScale(vector, k) {
        return [vector[0] * k, vector[1] * k, vector[2] * k];
      }
      function d3_geo_cartesianNormalize(d) {
        var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
        d[0] /= l;
        d[1] /= l;
        d[2] /= l;
      }
      function d3_geo_spherical(cartesian) {
        return [Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2])];
      }
      function d3_geo_sphericalEqual(a, b) {
        return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
      }
      d3.geo.bounds = function() {
        var λ0,
            φ0,
            λ1,
            φ1,
            λ_,
            λ__,
            φ__,
            p0,
            dλSum,
            ranges,
            range;
        var bound = {
          point: point,
          lineStart: lineStart,
          lineEnd: lineEnd,
          polygonStart: function() {
            bound.point = ringPoint;
            bound.lineStart = ringStart;
            bound.lineEnd = ringEnd;
            dλSum = 0;
            d3_geo_area.polygonStart();
          },
          polygonEnd: function() {
            d3_geo_area.polygonEnd();
            bound.point = point;
            bound.lineStart = lineStart;
            bound.lineEnd = lineEnd;
            if (d3_geo_areaRingSum < 0)
              λ0 = -(λ1 = 180), φ0 = -(φ1 = 90);
            else if (dλSum > ε)
              φ1 = 90;
            else if (dλSum < -ε)
              φ0 = -90;
            range[0] = λ0, range[1] = λ1;
          }
        };
        function point(λ, φ) {
          ranges.push(range = [λ0 = λ, λ1 = λ]);
          if (φ < φ0)
            φ0 = φ;
          if (φ > φ1)
            φ1 = φ;
        }
        function linePoint(λ, φ) {
          var p = d3_geo_cartesian([λ * d3_radians, φ * d3_radians]);
          if (p0) {
            var normal = d3_geo_cartesianCross(p0, p),
                equatorial = [normal[1], -normal[0], 0],
                inflection = d3_geo_cartesianCross(equatorial, normal);
            d3_geo_cartesianNormalize(inflection);
            inflection = d3_geo_spherical(inflection);
            var dλ = λ - λ_,
                s = dλ > 0 ? 1 : -1,
                λi = inflection[0] * d3_degrees * s,
                antimeridian = abs(dλ) > 180;
            if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
              var φi = inflection[1] * d3_degrees;
              if (φi > φ1)
                φ1 = φi;
            } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
              var φi = -inflection[1] * d3_degrees;
              if (φi < φ0)
                φ0 = φi;
            } else {
              if (φ < φ0)
                φ0 = φ;
              if (φ > φ1)
                φ1 = φ;
            }
            if (antimeridian) {
              if (λ < λ_) {
                if (angle(λ0, λ) > angle(λ0, λ1))
                  λ1 = λ;
              } else {
                if (angle(λ, λ1) > angle(λ0, λ1))
                  λ0 = λ;
              }
            } else {
              if (λ1 >= λ0) {
                if (λ < λ0)
                  λ0 = λ;
                if (λ > λ1)
                  λ1 = λ;
              } else {
                if (λ > λ_) {
                  if (angle(λ0, λ) > angle(λ0, λ1))
                    λ1 = λ;
                } else {
                  if (angle(λ, λ1) > angle(λ0, λ1))
                    λ0 = λ;
                }
              }
            }
          } else {
            point(λ, φ);
          }
          p0 = p, λ_ = λ;
        }
        function lineStart() {
          bound.point = linePoint;
        }
        function lineEnd() {
          range[0] = λ0, range[1] = λ1;
          bound.point = point;
          p0 = null;
        }
        function ringPoint(λ, φ) {
          if (p0) {
            var dλ = λ - λ_;
            dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
          } else
            λ__ = λ, φ__ = φ;
          d3_geo_area.point(λ, φ);
          linePoint(λ, φ);
        }
        function ringStart() {
          d3_geo_area.lineStart();
        }
        function ringEnd() {
          ringPoint(λ__, φ__);
          d3_geo_area.lineEnd();
          if (abs(dλSum) > ε)
            λ0 = -(λ1 = 180);
          range[0] = λ0, range[1] = λ1;
          p0 = null;
        }
        function angle(λ0, λ1) {
          return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
        }
        function compareRanges(a, b) {
          return a[0] - b[0];
        }
        function withinRange(x, range) {
          return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
        }
        return function(feature) {
          φ1 = λ1 = -(λ0 = φ0 = Infinity);
          ranges = [];
          d3.geo.stream(feature, bound);
          var n = ranges.length;
          if (n) {
            ranges.sort(compareRanges);
            for (var i = 1,
                a = ranges[0],
                b,
                merged = [a]; i < n; ++i) {
              b = ranges[i];
              if (withinRange(b[0], a) || withinRange(b[1], a)) {
                if (angle(a[0], b[1]) > angle(a[0], a[1]))
                  a[1] = b[1];
                if (angle(b[0], a[1]) > angle(a[0], a[1]))
                  a[0] = b[0];
              } else {
                merged.push(a = b);
              }
            }
            var best = -Infinity,
                dλ;
            for (var n = merged.length - 1,
                i = 0,
                a = merged[n],
                b; i <= n; a = b, ++i) {
              b = merged[i];
              if ((dλ = angle(a[1], b[0])) > best)
                best = dλ, λ0 = b[0], λ1 = a[1];
            }
          }
          ranges = range = null;
          return λ0 === Infinity || φ0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[λ0, φ0], [λ1, φ1]];
        };
      }();
      d3.geo.centroid = function(object) {
        d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
        d3.geo.stream(object, d3_geo_centroid);
        var x = d3_geo_centroidX2,
            y = d3_geo_centroidY2,
            z = d3_geo_centroidZ2,
            m = x * x + y * y + z * z;
        if (m < ε2) {
          x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
          if (d3_geo_centroidW1 < ε)
            x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
          m = x * x + y * y + z * z;
          if (m < ε2)
            return [NaN, NaN];
        }
        return [Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees];
      };
      var d3_geo_centroidW0,
          d3_geo_centroidW1,
          d3_geo_centroidX0,
          d3_geo_centroidY0,
          d3_geo_centroidZ0,
          d3_geo_centroidX1,
          d3_geo_centroidY1,
          d3_geo_centroidZ1,
          d3_geo_centroidX2,
          d3_geo_centroidY2,
          d3_geo_centroidZ2;
      var d3_geo_centroid = {
        sphere: d3_noop,
        point: d3_geo_centroidPoint,
        lineStart: d3_geo_centroidLineStart,
        lineEnd: d3_geo_centroidLineEnd,
        polygonStart: function() {
          d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
        },
        polygonEnd: function() {
          d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
        }
      };
      function d3_geo_centroidPoint(λ, φ) {
        λ *= d3_radians;
        var cosφ = Math.cos(φ *= d3_radians);
        d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
      }
      function d3_geo_centroidPointXYZ(x, y, z) {
        ++d3_geo_centroidW0;
        d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
        d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
        d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
      }
      function d3_geo_centroidLineStart() {
        var x0,
            y0,
            z0;
        d3_geo_centroid.point = function(λ, φ) {
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians);
          x0 = cosφ * Math.cos(λ);
          y0 = cosφ * Math.sin(λ);
          z0 = Math.sin(φ);
          d3_geo_centroid.point = nextPoint;
          d3_geo_centroidPointXYZ(x0, y0, z0);
        };
        function nextPoint(λ, φ) {
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians),
              x = cosφ * Math.cos(λ),
              y = cosφ * Math.sin(λ),
              z = Math.sin(φ),
              w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
          d3_geo_centroidW1 += w;
          d3_geo_centroidX1 += w * (x0 + (x0 = x));
          d3_geo_centroidY1 += w * (y0 + (y0 = y));
          d3_geo_centroidZ1 += w * (z0 + (z0 = z));
          d3_geo_centroidPointXYZ(x0, y0, z0);
        }
      }
      function d3_geo_centroidLineEnd() {
        d3_geo_centroid.point = d3_geo_centroidPoint;
      }
      function d3_geo_centroidRingStart() {
        var λ00,
            φ00,
            x0,
            y0,
            z0;
        d3_geo_centroid.point = function(λ, φ) {
          λ00 = λ, φ00 = φ;
          d3_geo_centroid.point = nextPoint;
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians);
          x0 = cosφ * Math.cos(λ);
          y0 = cosφ * Math.sin(λ);
          z0 = Math.sin(φ);
          d3_geo_centroidPointXYZ(x0, y0, z0);
        };
        d3_geo_centroid.lineEnd = function() {
          nextPoint(λ00, φ00);
          d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
          d3_geo_centroid.point = d3_geo_centroidPoint;
        };
        function nextPoint(λ, φ) {
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians),
              x = cosφ * Math.cos(λ),
              y = cosφ * Math.sin(λ),
              z = Math.sin(φ),
              cx = y0 * z - z0 * y,
              cy = z0 * x - x0 * z,
              cz = x0 * y - y0 * x,
              m = Math.sqrt(cx * cx + cy * cy + cz * cz),
              u = x0 * x + y0 * y + z0 * z,
              v = m && -d3_acos(u) / m,
              w = Math.atan2(m, u);
          d3_geo_centroidX2 += v * cx;
          d3_geo_centroidY2 += v * cy;
          d3_geo_centroidZ2 += v * cz;
          d3_geo_centroidW1 += w;
          d3_geo_centroidX1 += w * (x0 + (x0 = x));
          d3_geo_centroidY1 += w * (y0 + (y0 = y));
          d3_geo_centroidZ1 += w * (z0 + (z0 = z));
          d3_geo_centroidPointXYZ(x0, y0, z0);
        }
      }
      function d3_geo_compose(a, b) {
        function compose(x, y) {
          return x = a(x, y), b(x[0], x[1]);
        }
        if (a.invert && b.invert)
          compose.invert = function(x, y) {
            return x = b.invert(x, y), x && a.invert(x[0], x[1]);
          };
        return compose;
      }
      function d3_true() {
        return true;
      }
      function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
        var subject = [],
            clip = [];
        segments.forEach(function(segment) {
          if ((n = segment.length - 1) <= 0)
            return ;
          var n,
              p0 = segment[0],
              p1 = segment[n];
          if (d3_geo_sphericalEqual(p0, p1)) {
            listener.lineStart();
            for (var i = 0; i < n; ++i)
              listener.point((p0 = segment[i])[0], p0[1]);
            listener.lineEnd();
            return ;
          }
          var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true),
              b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
          a.o = b;
          subject.push(a);
          clip.push(b);
          a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
          b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
          a.o = b;
          subject.push(a);
          clip.push(b);
        });
        clip.sort(compare);
        d3_geo_clipPolygonLinkCircular(subject);
        d3_geo_clipPolygonLinkCircular(clip);
        if (!subject.length)
          return ;
        for (var i = 0,
            entry = clipStartInside,
            n = clip.length; i < n; ++i) {
          clip[i].e = entry = !entry;
        }
        var start = subject[0],
            points,
            point;
        while (1) {
          var current = start,
              isSubject = true;
          while (current.v)
            if ((current = current.n) === start)
              return ;
          points = current.z;
          listener.lineStart();
          do {
            current.v = current.o.v = true;
            if (current.e) {
              if (isSubject) {
                for (var i = 0,
                    n = points.length; i < n; ++i)
                  listener.point((point = points[i])[0], point[1]);
              } else {
                interpolate(current.x, current.n.x, 1, listener);
              }
              current = current.n;
            } else {
              if (isSubject) {
                points = current.p.z;
                for (var i = points.length - 1; i >= 0; --i)
                  listener.point((point = points[i])[0], point[1]);
              } else {
                interpolate(current.x, current.p.x, -1, listener);
              }
              current = current.p;
            }
            current = current.o;
            points = current.z;
            isSubject = !isSubject;
          } while (!current.v);
          listener.lineEnd();
        }
      }
      function d3_geo_clipPolygonLinkCircular(array) {
        if (!(n = array.length))
          return ;
        var n,
            i = 0,
            a = array[0],
            b;
        while (++i < n) {
          a.n = b = array[i];
          b.p = a;
          a = b;
        }
        a.n = b = array[0];
        b.p = a;
      }
      function d3_geo_clipPolygonIntersection(point, points, other, entry) {
        this.x = point;
        this.z = points;
        this.o = other;
        this.e = entry;
        this.v = false;
        this.n = this.p = null;
      }
      function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
        return function(rotate, listener) {
          var line = clipLine(listener),
              rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
          var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
              clip.point = pointRing;
              clip.lineStart = ringStart;
              clip.lineEnd = ringEnd;
              segments = [];
              polygon = [];
            },
            polygonEnd: function() {
              clip.point = point;
              clip.lineStart = lineStart;
              clip.lineEnd = lineEnd;
              segments = d3.merge(segments);
              var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
              if (segments.length) {
                if (!polygonStarted)
                  listener.polygonStart(), polygonStarted = true;
                d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
              } else if (clipStartInside) {
                if (!polygonStarted)
                  listener.polygonStart(), polygonStarted = true;
                listener.lineStart();
                interpolate(null, null, 1, listener);
                listener.lineEnd();
              }
              if (polygonStarted)
                listener.polygonEnd(), polygonStarted = false;
              segments = polygon = null;
            },
            sphere: function() {
              listener.polygonStart();
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
              listener.polygonEnd();
            }
          };
          function point(λ, φ) {
            var point = rotate(λ, φ);
            if (pointVisible(λ = point[0], φ = point[1]))
              listener.point(λ, φ);
          }
          function pointLine(λ, φ) {
            var point = rotate(λ, φ);
            line.point(point[0], point[1]);
          }
          function lineStart() {
            clip.point = pointLine;
            line.lineStart();
          }
          function lineEnd() {
            clip.point = point;
            line.lineEnd();
          }
          var segments;
          var buffer = d3_geo_clipBufferListener(),
              ringListener = clipLine(buffer),
              polygonStarted = false,
              polygon,
              ring;
          function pointRing(λ, φ) {
            ring.push([λ, φ]);
            var point = rotate(λ, φ);
            ringListener.point(point[0], point[1]);
          }
          function ringStart() {
            ringListener.lineStart();
            ring = [];
          }
          function ringEnd() {
            pointRing(ring[0][0], ring[0][1]);
            ringListener.lineEnd();
            var clean = ringListener.clean(),
                ringSegments = buffer.buffer(),
                segment,
                n = ringSegments.length;
            ring.pop();
            polygon.push(ring);
            ring = null;
            if (!n)
              return ;
            if (clean & 1) {
              segment = ringSegments[0];
              var n = segment.length - 1,
                  i = -1,
                  point;
              if (n > 0) {
                if (!polygonStarted)
                  listener.polygonStart(), polygonStarted = true;
                listener.lineStart();
                while (++i < n)
                  listener.point((point = segment[i])[0], point[1]);
                listener.lineEnd();
              }
              return ;
            }
            if (n > 1 && clean & 2)
              ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
            segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
          }
          return clip;
        };
      }
      function d3_geo_clipSegmentLength1(segment) {
        return segment.length > 1;
      }
      function d3_geo_clipBufferListener() {
        var lines = [],
            line;
        return {
          lineStart: function() {
            lines.push(line = []);
          },
          point: function(λ, φ) {
            line.push([λ, φ]);
          },
          lineEnd: d3_noop,
          buffer: function() {
            var buffer = lines;
            lines = [];
            line = null;
            return buffer;
          },
          rejoin: function() {
            if (lines.length > 1)
              lines.push(lines.pop().concat(lines.shift()));
          }
        };
      }
      function d3_geo_clipSort(a, b) {
        return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
      }
      var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [-π, -π / 2]);
      function d3_geo_clipAntimeridianLine(listener) {
        var λ0 = NaN,
            φ0 = NaN,
            sλ0 = NaN,
            clean;
        return {
          lineStart: function() {
            listener.lineStart();
            clean = 1;
          },
          point: function(λ1, φ1) {
            var sλ1 = λ1 > 0 ? π : -π,
                dλ = abs(λ1 - λ0);
            if (abs(dλ - π) < ε) {
              listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
              listener.point(sλ0, φ0);
              listener.lineEnd();
              listener.lineStart();
              listener.point(sλ1, φ0);
              listener.point(λ1, φ0);
              clean = 0;
            } else if (sλ0 !== sλ1 && dλ >= π) {
              if (abs(λ0 - sλ0) < ε)
                λ0 -= sλ0 * ε;
              if (abs(λ1 - sλ1) < ε)
                λ1 -= sλ1 * ε;
              φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
              listener.point(sλ0, φ0);
              listener.lineEnd();
              listener.lineStart();
              listener.point(sλ1, φ0);
              clean = 0;
            }
            listener.point(λ0 = λ1, φ0 = φ1);
            sλ0 = sλ1;
          },
          lineEnd: function() {
            listener.lineEnd();
            λ0 = φ0 = NaN;
          },
          clean: function() {
            return 2 - clean;
          }
        };
      }
      function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
        var cosφ0,
            cosφ1,
            sinλ0_λ1 = Math.sin(λ0 - λ1);
        return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
      }
      function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
        var φ;
        if (from == null) {
          φ = direction * halfπ;
          listener.point(-π, φ);
          listener.point(0, φ);
          listener.point(π, φ);
          listener.point(π, 0);
          listener.point(π, -φ);
          listener.point(0, -φ);
          listener.point(-π, -φ);
          listener.point(-π, 0);
          listener.point(-π, φ);
        } else if (abs(from[0] - to[0]) > ε) {
          var s = from[0] < to[0] ? π : -π;
          φ = direction * s / 2;
          listener.point(-s, φ);
          listener.point(0, φ);
          listener.point(s, φ);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function d3_geo_pointInPolygon(point, polygon) {
        var meridian = point[0],
            parallel = point[1],
            meridianNormal = [Math.sin(meridian), -Math.cos(meridian), 0],
            polarAngle = 0,
            winding = 0;
        d3_geo_areaRingSum.reset();
        for (var i = 0,
            n = polygon.length; i < n; ++i) {
          var ring = polygon[i],
              m = ring.length;
          if (!m)
            continue;
          var point0 = ring[0],
              λ0 = point0[0],
              φ0 = point0[1] / 2 + π / 4,
              sinφ0 = Math.sin(φ0),
              cosφ0 = Math.cos(φ0),
              j = 1;
          while (true) {
            if (j === m)
              j = 0;
            point = ring[j];
            var λ = point[0],
                φ = point[1] / 2 + π / 4,
                sinφ = Math.sin(φ),
                cosφ = Math.cos(φ),
                dλ = λ - λ0,
                sdλ = dλ >= 0 ? 1 : -1,
                adλ = sdλ * dλ,
                antimeridian = adλ > π,
                k = sinφ0 * sinφ;
            d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
            polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
            if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
              var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
              d3_geo_cartesianNormalize(arc);
              var intersection = d3_geo_cartesianCross(meridianNormal, arc);
              d3_geo_cartesianNormalize(intersection);
              var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
              if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
                winding += antimeridian ^ dλ >= 0 ? 1 : -1;
              }
            }
            if (!j++)
              break;
            λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
          }
        }
        return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
      }
      function d3_geo_clipCircle(radius) {
        var cr = Math.cos(radius),
            smallRadius = cr > 0,
            notHemisphere = abs(cr) > ε,
            interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
        return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-π, radius - π]);
        function visible(λ, φ) {
          return Math.cos(λ) * Math.cos(φ) > cr;
        }
        function clipLine(listener) {
          var point0,
              c0,
              v0,
              v00,
              clean;
          return {
            lineStart: function() {
              v00 = v0 = false;
              clean = 1;
            },
            point: function(λ, φ) {
              var point1 = [λ, φ],
                  point2,
                  v = visible(λ, φ),
                  c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
              if (!point0 && (v00 = v0 = v))
                listener.lineStart();
              if (v !== v0) {
                point2 = intersect(point0, point1);
                if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
                  point1[0] += ε;
                  point1[1] += ε;
                  v = visible(point1[0], point1[1]);
                }
              }
              if (v !== v0) {
                clean = 0;
                if (v) {
                  listener.lineStart();
                  point2 = intersect(point1, point0);
                  listener.point(point2[0], point2[1]);
                } else {
                  point2 = intersect(point0, point1);
                  listener.point(point2[0], point2[1]);
                  listener.lineEnd();
                }
                point0 = point2;
              } else if (notHemisphere && point0 && smallRadius ^ v) {
                var t;
                if (!(c & c0) && (t = intersect(point1, point0, true))) {
                  clean = 0;
                  if (smallRadius) {
                    listener.lineStart();
                    listener.point(t[0][0], t[0][1]);
                    listener.point(t[1][0], t[1][1]);
                    listener.lineEnd();
                  } else {
                    listener.point(t[1][0], t[1][1]);
                    listener.lineEnd();
                    listener.lineStart();
                    listener.point(t[0][0], t[0][1]);
                  }
                }
              }
              if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
                listener.point(point1[0], point1[1]);
              }
              point0 = point1, v0 = v, c0 = c;
            },
            lineEnd: function() {
              if (v0)
                listener.lineEnd();
              point0 = null;
            },
            clean: function() {
              return clean | (v00 && v0) << 1;
            }
          };
        }
        function intersect(a, b, two) {
          var pa = d3_geo_cartesian(a),
              pb = d3_geo_cartesian(b);
          var n1 = [1, 0, 0],
              n2 = d3_geo_cartesianCross(pa, pb),
              n2n2 = d3_geo_cartesianDot(n2, n2),
              n1n2 = n2[0],
              determinant = n2n2 - n1n2 * n1n2;
          if (!determinant)
            return !two && a;
          var c1 = cr * n2n2 / determinant,
              c2 = -cr * n1n2 / determinant,
              n1xn2 = d3_geo_cartesianCross(n1, n2),
              A = d3_geo_cartesianScale(n1, c1),
              B = d3_geo_cartesianScale(n2, c2);
          d3_geo_cartesianAdd(A, B);
          var u = n1xn2,
              w = d3_geo_cartesianDot(A, u),
              uu = d3_geo_cartesianDot(u, u),
              t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
          if (t2 < 0)
            return ;
          var t = Math.sqrt(t2),
              q = d3_geo_cartesianScale(u, (-w - t) / uu);
          d3_geo_cartesianAdd(q, A);
          q = d3_geo_spherical(q);
          if (!two)
            return q;
          var λ0 = a[0],
              λ1 = b[0],
              φ0 = a[1],
              φ1 = b[1],
              z;
          if (λ1 < λ0)
            z = λ0, λ0 = λ1, λ1 = z;
          var δλ = λ1 - λ0,
              polar = abs(δλ - π) < ε,
              meridian = polar || δλ < ε;
          if (!polar && φ1 < φ0)
            z = φ0, φ0 = φ1, φ1 = z;
          if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
            var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
            d3_geo_cartesianAdd(q1, A);
            return [q, d3_geo_spherical(q1)];
          }
        }
        function code(λ, φ) {
          var r = smallRadius ? radius : π - radius,
              code = 0;
          if (λ < -r)
            code |= 1;
          else if (λ > r)
            code |= 2;
          if (φ < -r)
            code |= 4;
          else if (φ > r)
            code |= 8;
          return code;
        }
      }
      function d3_geom_clipLine(x0, y0, x1, y1) {
        return function(line) {
          var a = line.a,
              b = line.b,
              ax = a.x,
              ay = a.y,
              bx = b.x,
              by = b.y,
              t0 = 0,
              t1 = 1,
              dx = bx - ax,
              dy = by - ay,
              r;
          r = x0 - ax;
          if (!dx && r > 0)
            return ;
          r /= dx;
          if (dx < 0) {
            if (r < t0)
              return ;
            if (r < t1)
              t1 = r;
          } else if (dx > 0) {
            if (r > t1)
              return ;
            if (r > t0)
              t0 = r;
          }
          r = x1 - ax;
          if (!dx && r < 0)
            return ;
          r /= dx;
          if (dx < 0) {
            if (r > t1)
              return ;
            if (r > t0)
              t0 = r;
          } else if (dx > 0) {
            if (r < t0)
              return ;
            if (r < t1)
              t1 = r;
          }
          r = y0 - ay;
          if (!dy && r > 0)
            return ;
          r /= dy;
          if (dy < 0) {
            if (r < t0)
              return ;
            if (r < t1)
              t1 = r;
          } else if (dy > 0) {
            if (r > t1)
              return ;
            if (r > t0)
              t0 = r;
          }
          r = y1 - ay;
          if (!dy && r < 0)
            return ;
          r /= dy;
          if (dy < 0) {
            if (r > t1)
              return ;
            if (r > t0)
              t0 = r;
          } else if (dy > 0) {
            if (r < t0)
              return ;
            if (r < t1)
              t1 = r;
          }
          if (t0 > 0)
            line.a = {
              x: ax + t0 * dx,
              y: ay + t0 * dy
            };
          if (t1 < 1)
            line.b = {
              x: ax + t1 * dx,
              y: ay + t1 * dy
            };
          return line;
        };
      }
      var d3_geo_clipExtentMAX = 1e9;
      d3.geo.clipExtent = function() {
        var x0,
            y0,
            x1,
            y1,
            stream,
            clip,
            clipExtent = {
              stream: function(output) {
                if (stream)
                  stream.valid = false;
                stream = clip(output);
                stream.valid = true;
                return stream;
              },
              extent: function(_) {
                if (!arguments.length)
                  return [[x0, y0], [x1, y1]];
                clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
                if (stream)
                  stream.valid = false, stream = null;
                return clipExtent;
              }
            };
        return clipExtent.extent([[0, 0], [960, 500]]);
      };
      function d3_geo_clipExtent(x0, y0, x1, y1) {
        return function(listener) {
          var listener_ = listener,
              bufferListener = d3_geo_clipBufferListener(),
              clipLine = d3_geom_clipLine(x0, y0, x1, y1),
              segments,
              polygon,
              ring;
          var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
              listener = bufferListener;
              segments = [];
              polygon = [];
              clean = true;
            },
            polygonEnd: function() {
              listener = listener_;
              segments = d3.merge(segments);
              var clipStartInside = insidePolygon([x0, y1]),
                  inside = clean && clipStartInside,
                  visible = segments.length;
              if (inside || visible) {
                listener.polygonStart();
                if (inside) {
                  listener.lineStart();
                  interpolate(null, null, 1, listener);
                  listener.lineEnd();
                }
                if (visible) {
                  d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
                }
                listener.polygonEnd();
              }
              segments = polygon = ring = null;
            }
          };
          function insidePolygon(p) {
            var wn = 0,
                n = polygon.length,
                y = p[1];
            for (var i = 0; i < n; ++i) {
              for (var j = 1,
                  v = polygon[i],
                  m = v.length,
                  a = v[0],
                  b; j < m; ++j) {
                b = v[j];
                if (a[1] <= y) {
                  if (b[1] > y && d3_cross2d(a, b, p) > 0)
                    ++wn;
                } else {
                  if (b[1] <= y && d3_cross2d(a, b, p) < 0)
                    --wn;
                }
                a = b;
              }
            }
            return wn !== 0;
          }
          function interpolate(from, to, direction, listener) {
            var a = 0,
                a1 = 0;
            if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
              do {
                listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
              } while ((a = (a + direction + 4) % 4) !== a1);
            } else {
              listener.point(to[0], to[1]);
            }
          }
          function pointVisible(x, y) {
            return x0 <= x && x <= x1 && y0 <= y && y <= y1;
          }
          function point(x, y) {
            if (pointVisible(x, y))
              listener.point(x, y);
          }
          var x__,
              y__,
              v__,
              x_,
              y_,
              v_,
              first,
              clean;
          function lineStart() {
            clip.point = linePoint;
            if (polygon)
              polygon.push(ring = []);
            first = true;
            v_ = false;
            x_ = y_ = NaN;
          }
          function lineEnd() {
            if (segments) {
              linePoint(x__, y__);
              if (v__ && v_)
                bufferListener.rejoin();
              segments.push(bufferListener.buffer());
            }
            clip.point = point;
            if (v_)
              listener.lineEnd();
          }
          function linePoint(x, y) {
            x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
            y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
            var v = pointVisible(x, y);
            if (polygon)
              ring.push([x, y]);
            if (first) {
              x__ = x, y__ = y, v__ = v;
              first = false;
              if (v) {
                listener.lineStart();
                listener.point(x, y);
              }
            } else {
              if (v && v_)
                listener.point(x, y);
              else {
                var l = {
                  a: {
                    x: x_,
                    y: y_
                  },
                  b: {
                    x: x,
                    y: y
                  }
                };
                if (clipLine(l)) {
                  if (!v_) {
                    listener.lineStart();
                    listener.point(l.a.x, l.a.y);
                  }
                  listener.point(l.b.x, l.b.y);
                  if (!v)
                    listener.lineEnd();
                  clean = false;
                } else if (v) {
                  listener.lineStart();
                  listener.point(x, y);
                  clean = false;
                }
              }
            }
            x_ = x, y_ = y, v_ = v;
          }
          return clip;
        };
        function corner(p, direction) {
          return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
        }
        function compare(a, b) {
          return comparePoints(a.x, b.x);
        }
        function comparePoints(a, b) {
          var ca = corner(a, 1),
              cb = corner(b, 1);
          return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
        }
      }
      function d3_geo_conic(projectAt) {
        var φ0 = 0,
            φ1 = π / 3,
            m = d3_geo_projectionMutator(projectAt),
            p = m(φ0, φ1);
        p.parallels = function(_) {
          if (!arguments.length)
            return [φ0 / π * 180, φ1 / π * 180];
          return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
        };
        return p;
      }
      function d3_geo_conicEqualArea(φ0, φ1) {
        var sinφ0 = Math.sin(φ0),
            n = (sinφ0 + Math.sin(φ1)) / 2,
            C = 1 + sinφ0 * (2 * n - sinφ0),
            ρ0 = Math.sqrt(C) / n;
        function forward(λ, φ) {
          var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
          return [ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ)];
        }
        forward.invert = function(x, y) {
          var ρ0_y = ρ0 - y;
          return [Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n))];
        };
        return forward;
      }
      (d3.geo.conicEqualArea = function() {
        return d3_geo_conic(d3_geo_conicEqualArea);
      }).raw = d3_geo_conicEqualArea;
      d3.geo.albers = function() {
        return d3.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
      };
      d3.geo.albersUsa = function() {
        var lower48 = d3.geo.albers();
        var alaska = d3.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]);
        var hawaii = d3.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]);
        var point,
            pointStream = {point: function(x, y) {
                point = [x, y];
              }},
            lower48Point,
            alaskaPoint,
            hawaiiPoint;
        function albersUsa(coordinates) {
          var x = coordinates[0],
              y = coordinates[1];
          point = null;
          (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
          return point;
        }
        albersUsa.invert = function(coordinates) {
          var k = lower48.scale(),
              t = lower48.translate(),
              x = (coordinates[0] - t[0]) / k,
              y = (coordinates[1] - t[1]) / k;
          return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
        };
        albersUsa.stream = function(stream) {
          var lower48Stream = lower48.stream(stream),
              alaskaStream = alaska.stream(stream),
              hawaiiStream = hawaii.stream(stream);
          return {
            point: function(x, y) {
              lower48Stream.point(x, y);
              alaskaStream.point(x, y);
              hawaiiStream.point(x, y);
            },
            sphere: function() {
              lower48Stream.sphere();
              alaskaStream.sphere();
              hawaiiStream.sphere();
            },
            lineStart: function() {
              lower48Stream.lineStart();
              alaskaStream.lineStart();
              hawaiiStream.lineStart();
            },
            lineEnd: function() {
              lower48Stream.lineEnd();
              alaskaStream.lineEnd();
              hawaiiStream.lineEnd();
            },
            polygonStart: function() {
              lower48Stream.polygonStart();
              alaskaStream.polygonStart();
              hawaiiStream.polygonStart();
            },
            polygonEnd: function() {
              lower48Stream.polygonEnd();
              alaskaStream.polygonEnd();
              hawaiiStream.polygonEnd();
            }
          };
        };
        albersUsa.precision = function(_) {
          if (!arguments.length)
            return lower48.precision();
          lower48.precision(_);
          alaska.precision(_);
          hawaii.precision(_);
          return albersUsa;
        };
        albersUsa.scale = function(_) {
          if (!arguments.length)
            return lower48.scale();
          lower48.scale(_);
          alaska.scale(_ * .35);
          hawaii.scale(_);
          return albersUsa.translate(lower48.translate());
        };
        albersUsa.translate = function(_) {
          if (!arguments.length)
            return lower48.translate();
          var k = lower48.scale(),
              x = +_[0],
              y = +_[1];
          lower48Point = lower48.translate(_).clipExtent([[x - .455 * k, y - .238 * k], [x + .455 * k, y + .238 * k]]).stream(pointStream).point;
          alaskaPoint = alaska.translate([x - .307 * k, y + .201 * k]).clipExtent([[x - .425 * k + ε, y + .12 * k + ε], [x - .214 * k - ε, y + .234 * k - ε]]).stream(pointStream).point;
          hawaiiPoint = hawaii.translate([x - .205 * k, y + .212 * k]).clipExtent([[x - .214 * k + ε, y + .166 * k + ε], [x - .115 * k - ε, y + .234 * k - ε]]).stream(pointStream).point;
          return albersUsa;
        };
        return albersUsa.scale(1070);
      };
      var d3_geo_pathAreaSum,
          d3_geo_pathAreaPolygon,
          d3_geo_pathArea = {
            point: d3_noop,
            lineStart: d3_noop,
            lineEnd: d3_noop,
            polygonStart: function() {
              d3_geo_pathAreaPolygon = 0;
              d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
            },
            polygonEnd: function() {
              d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
              d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
            }
          };
      function d3_geo_pathAreaRingStart() {
        var x00,
            y00,
            x0,
            y0;
        d3_geo_pathArea.point = function(x, y) {
          d3_geo_pathArea.point = nextPoint;
          x00 = x0 = x, y00 = y0 = y;
        };
        function nextPoint(x, y) {
          d3_geo_pathAreaPolygon += y0 * x - x0 * y;
          x0 = x, y0 = y;
        }
        d3_geo_pathArea.lineEnd = function() {
          nextPoint(x00, y00);
        };
      }
      var d3_geo_pathBoundsX0,
          d3_geo_pathBoundsY0,
          d3_geo_pathBoundsX1,
          d3_geo_pathBoundsY1;
      var d3_geo_pathBounds = {
        point: d3_geo_pathBoundsPoint,
        lineStart: d3_noop,
        lineEnd: d3_noop,
        polygonStart: d3_noop,
        polygonEnd: d3_noop
      };
      function d3_geo_pathBoundsPoint(x, y) {
        if (x < d3_geo_pathBoundsX0)
          d3_geo_pathBoundsX0 = x;
        if (x > d3_geo_pathBoundsX1)
          d3_geo_pathBoundsX1 = x;
        if (y < d3_geo_pathBoundsY0)
          d3_geo_pathBoundsY0 = y;
        if (y > d3_geo_pathBoundsY1)
          d3_geo_pathBoundsY1 = y;
      }
      function d3_geo_pathBuffer() {
        var pointCircle = d3_geo_pathBufferCircle(4.5),
            buffer = [];
        var stream = {
          point: point,
          lineStart: function() {
            stream.point = pointLineStart;
          },
          lineEnd: lineEnd,
          polygonStart: function() {
            stream.lineEnd = lineEndPolygon;
          },
          polygonEnd: function() {
            stream.lineEnd = lineEnd;
            stream.point = point;
          },
          pointRadius: function(_) {
            pointCircle = d3_geo_pathBufferCircle(_);
            return stream;
          },
          result: function() {
            if (buffer.length) {
              var result = buffer.join("");
              buffer = [];
              return result;
            }
          }
        };
        function point(x, y) {
          buffer.push("M", x, ",", y, pointCircle);
        }
        function pointLineStart(x, y) {
          buffer.push("M", x, ",", y);
          stream.point = pointLine;
        }
        function pointLine(x, y) {
          buffer.push("L", x, ",", y);
        }
        function lineEnd() {
          stream.point = point;
        }
        function lineEndPolygon() {
          buffer.push("Z");
        }
        return stream;
      }
      function d3_geo_pathBufferCircle(radius) {
        return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
      }
      var d3_geo_pathCentroid = {
        point: d3_geo_pathCentroidPoint,
        lineStart: d3_geo_pathCentroidLineStart,
        lineEnd: d3_geo_pathCentroidLineEnd,
        polygonStart: function() {
          d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
        },
        polygonEnd: function() {
          d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
          d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
          d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
        }
      };
      function d3_geo_pathCentroidPoint(x, y) {
        d3_geo_centroidX0 += x;
        d3_geo_centroidY0 += y;
        ++d3_geo_centroidZ0;
      }
      function d3_geo_pathCentroidLineStart() {
        var x0,
            y0;
        d3_geo_pathCentroid.point = function(x, y) {
          d3_geo_pathCentroid.point = nextPoint;
          d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        };
        function nextPoint(x, y) {
          var dx = x - x0,
              dy = y - y0,
              z = Math.sqrt(dx * dx + dy * dy);
          d3_geo_centroidX1 += z * (x0 + x) / 2;
          d3_geo_centroidY1 += z * (y0 + y) / 2;
          d3_geo_centroidZ1 += z;
          d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        }
      }
      function d3_geo_pathCentroidLineEnd() {
        d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      }
      function d3_geo_pathCentroidRingStart() {
        var x00,
            y00,
            x0,
            y0;
        d3_geo_pathCentroid.point = function(x, y) {
          d3_geo_pathCentroid.point = nextPoint;
          d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
        };
        function nextPoint(x, y) {
          var dx = x - x0,
              dy = y - y0,
              z = Math.sqrt(dx * dx + dy * dy);
          d3_geo_centroidX1 += z * (x0 + x) / 2;
          d3_geo_centroidY1 += z * (y0 + y) / 2;
          d3_geo_centroidZ1 += z;
          z = y0 * x - x0 * y;
          d3_geo_centroidX2 += z * (x0 + x);
          d3_geo_centroidY2 += z * (y0 + y);
          d3_geo_centroidZ2 += z * 3;
          d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        }
        d3_geo_pathCentroid.lineEnd = function() {
          nextPoint(x00, y00);
        };
      }
      function d3_geo_pathContext(context) {
        var pointRadius = 4.5;
        var stream = {
          point: point,
          lineStart: function() {
            stream.point = pointLineStart;
          },
          lineEnd: lineEnd,
          polygonStart: function() {
            stream.lineEnd = lineEndPolygon;
          },
          polygonEnd: function() {
            stream.lineEnd = lineEnd;
            stream.point = point;
          },
          pointRadius: function(_) {
            pointRadius = _;
            return stream;
          },
          result: d3_noop
        };
        function point(x, y) {
          context.moveTo(x + pointRadius, y);
          context.arc(x, y, pointRadius, 0, τ);
        }
        function pointLineStart(x, y) {
          context.moveTo(x, y);
          stream.point = pointLine;
        }
        function pointLine(x, y) {
          context.lineTo(x, y);
        }
        function lineEnd() {
          stream.point = point;
        }
        function lineEndPolygon() {
          context.closePath();
        }
        return stream;
      }
      function d3_geo_resample(project) {
        var δ2 = .5,
            cosMinDistance = Math.cos(30 * d3_radians),
            maxDepth = 16;
        function resample(stream) {
          return (maxDepth ? resampleRecursive : resampleNone)(stream);
        }
        function resampleNone(stream) {
          return d3_geo_transformPoint(stream, function(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
          });
        }
        function resampleRecursive(stream) {
          var λ00,
              φ00,
              x00,
              y00,
              a00,
              b00,
              c00,
              λ0,
              x0,
              y0,
              a0,
              b0,
              c0;
          var resample = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
              stream.polygonStart();
              resample.lineStart = ringStart;
            },
            polygonEnd: function() {
              stream.polygonEnd();
              resample.lineStart = lineStart;
            }
          };
          function point(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
          }
          function lineStart() {
            x0 = NaN;
            resample.point = linePoint;
            stream.lineStart();
          }
          function linePoint(λ, φ) {
            var c = d3_geo_cartesian([λ, φ]),
                p = project(λ, φ);
            resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
            stream.point(x0, y0);
          }
          function lineEnd() {
            resample.point = point;
            stream.lineEnd();
          }
          function ringStart() {
            lineStart();
            resample.point = ringPoint;
            resample.lineEnd = ringEnd;
          }
          function ringPoint(λ, φ) {
            linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
            resample.point = linePoint;
          }
          function ringEnd() {
            resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
            resample.lineEnd = lineEnd;
            lineEnd();
          }
          return resample;
        }
        function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
          var dx = x1 - x0,
              dy = y1 - y0,
              d2 = dx * dx + dy * dy;
          if (d2 > 4 * δ2 && depth--) {
            var a = a0 + a1,
                b = b0 + b1,
                c = c0 + c1,
                m = Math.sqrt(a * a + b * b + c * c),
                φ2 = Math.asin(c /= m),
                λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a),
                p = project(λ2, φ2),
                x2 = p[0],
                y2 = p[1],
                dx2 = x2 - x0,
                dy2 = y2 - y0,
                dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
              resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
              stream.point(x2, y2);
              resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
            }
          }
        }
        resample.precision = function(_) {
          if (!arguments.length)
            return Math.sqrt(δ2);
          maxDepth = (δ2 = _ * _) > 0 && 16;
          return resample;
        };
        return resample;
      }
      d3.geo.path = function() {
        var pointRadius = 4.5,
            projection,
            context,
            projectStream,
            contextStream,
            cacheStream;
        function path(object) {
          if (object) {
            if (typeof pointRadius === "function")
              contextStream.pointRadius(+pointRadius.apply(this, arguments));
            if (!cacheStream || !cacheStream.valid)
              cacheStream = projectStream(contextStream);
            d3.geo.stream(object, cacheStream);
          }
          return contextStream.result();
        }
        path.area = function(object) {
          d3_geo_pathAreaSum = 0;
          d3.geo.stream(object, projectStream(d3_geo_pathArea));
          return d3_geo_pathAreaSum;
        };
        path.centroid = function(object) {
          d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
          d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
          return d3_geo_centroidZ2 ? [d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2] : d3_geo_centroidZ1 ? [d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1] : d3_geo_centroidZ0 ? [d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0] : [NaN, NaN];
        };
        path.bounds = function(object) {
          d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
          d3.geo.stream(object, projectStream(d3_geo_pathBounds));
          return [[d3_geo_pathBoundsX0, d3_geo_pathBoundsY0], [d3_geo_pathBoundsX1, d3_geo_pathBoundsY1]];
        };
        path.projection = function(_) {
          if (!arguments.length)
            return projection;
          projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
          return reset();
        };
        path.context = function(_) {
          if (!arguments.length)
            return context;
          contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
          if (typeof pointRadius !== "function")
            contextStream.pointRadius(pointRadius);
          return reset();
        };
        path.pointRadius = function(_) {
          if (!arguments.length)
            return pointRadius;
          pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
          return path;
        };
        function reset() {
          cacheStream = null;
          return path;
        }
        return path.projection(d3.geo.albersUsa()).context(null);
      };
      function d3_geo_pathProjectStream(project) {
        var resample = d3_geo_resample(function(x, y) {
          return project([x * d3_degrees, y * d3_degrees]);
        });
        return function(stream) {
          return d3_geo_projectionRadians(resample(stream));
        };
      }
      d3.geo.transform = function(methods) {
        return {stream: function(stream) {
            var transform = new d3_geo_transform(stream);
            for (var k in methods)
              transform[k] = methods[k];
            return transform;
          }};
      };
      function d3_geo_transform(stream) {
        this.stream = stream;
      }
      d3_geo_transform.prototype = {
        point: function(x, y) {
          this.stream.point(x, y);
        },
        sphere: function() {
          this.stream.sphere();
        },
        lineStart: function() {
          this.stream.lineStart();
        },
        lineEnd: function() {
          this.stream.lineEnd();
        },
        polygonStart: function() {
          this.stream.polygonStart();
        },
        polygonEnd: function() {
          this.stream.polygonEnd();
        }
      };
      function d3_geo_transformPoint(stream, point) {
        return {
          point: point,
          sphere: function() {
            stream.sphere();
          },
          lineStart: function() {
            stream.lineStart();
          },
          lineEnd: function() {
            stream.lineEnd();
          },
          polygonStart: function() {
            stream.polygonStart();
          },
          polygonEnd: function() {
            stream.polygonEnd();
          }
        };
      }
      d3.geo.projection = d3_geo_projection;
      d3.geo.projectionMutator = d3_geo_projectionMutator;
      function d3_geo_projection(project) {
        return d3_geo_projectionMutator(function() {
          return project;
        })();
      }
      function d3_geo_projectionMutator(projectAt) {
        var project,
            rotate,
            projectRotate,
            projectResample = d3_geo_resample(function(x, y) {
              x = project(x, y);
              return [x[0] * k + δx, δy - x[1] * k];
            }),
            k = 150,
            x = 480,
            y = 250,
            λ = 0,
            φ = 0,
            δλ = 0,
            δφ = 0,
            δγ = 0,
            δx,
            δy,
            preclip = d3_geo_clipAntimeridian,
            postclip = d3_identity,
            clipAngle = null,
            clipExtent = null,
            stream;
        function projection(point) {
          point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
          return [point[0] * k + δx, δy - point[1] * k];
        }
        function invert(point) {
          point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
          return point && [point[0] * d3_degrees, point[1] * d3_degrees];
        }
        projection.stream = function(output) {
          if (stream)
            stream.valid = false;
          stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
          stream.valid = true;
          return stream;
        };
        projection.clipAngle = function(_) {
          if (!arguments.length)
            return clipAngle;
          preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
          return invalidate();
        };
        projection.clipExtent = function(_) {
          if (!arguments.length)
            return clipExtent;
          clipExtent = _;
          postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
          return invalidate();
        };
        projection.scale = function(_) {
          if (!arguments.length)
            return k;
          k = +_;
          return reset();
        };
        projection.translate = function(_) {
          if (!arguments.length)
            return [x, y];
          x = +_[0];
          y = +_[1];
          return reset();
        };
        projection.center = function(_) {
          if (!arguments.length)
            return [λ * d3_degrees, φ * d3_degrees];
          λ = _[0] % 360 * d3_radians;
          φ = _[1] % 360 * d3_radians;
          return reset();
        };
        projection.rotate = function(_) {
          if (!arguments.length)
            return [δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees];
          δλ = _[0] % 360 * d3_radians;
          δφ = _[1] % 360 * d3_radians;
          δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
          return reset();
        };
        d3.rebind(projection, projectResample, "precision");
        function reset() {
          projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
          var center = project(λ, φ);
          δx = x - center[0] * k;
          δy = y + center[1] * k;
          return invalidate();
        }
        function invalidate() {
          if (stream)
            stream.valid = false, stream = null;
          return projection;
        }
        return function() {
          project = projectAt.apply(this, arguments);
          projection.invert = project.invert && invert;
          return reset();
        };
      }
      function d3_geo_projectionRadians(stream) {
        return d3_geo_transformPoint(stream, function(x, y) {
          stream.point(x * d3_radians, y * d3_radians);
        });
      }
      function d3_geo_equirectangular(λ, φ) {
        return [λ, φ];
      }
      (d3.geo.equirectangular = function() {
        return d3_geo_projection(d3_geo_equirectangular);
      }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
      d3.geo.rotation = function(rotate) {
        rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
        function forward(coordinates) {
          coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
          return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
        }
        forward.invert = function(coordinates) {
          coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
          return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
        };
        return forward;
      };
      function d3_geo_identityRotation(λ, φ) {
        return [λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ];
      }
      d3_geo_identityRotation.invert = d3_geo_equirectangular;
      function d3_geo_rotation(δλ, δφ, δγ) {
        return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
      }
      function d3_geo_forwardRotationλ(δλ) {
        return function(λ, φ) {
          return λ += δλ, [λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ];
        };
      }
      function d3_geo_rotationλ(δλ) {
        var rotation = d3_geo_forwardRotationλ(δλ);
        rotation.invert = d3_geo_forwardRotationλ(-δλ);
        return rotation;
      }
      function d3_geo_rotationφγ(δφ, δγ) {
        var cosδφ = Math.cos(δφ),
            sinδφ = Math.sin(δφ),
            cosδγ = Math.cos(δγ),
            sinδγ = Math.sin(δγ);
        function rotation(λ, φ) {
          var cosφ = Math.cos(φ),
              x = Math.cos(λ) * cosφ,
              y = Math.sin(λ) * cosφ,
              z = Math.sin(φ),
              k = z * cosδφ + x * sinδφ;
          return [Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ)];
        }
        rotation.invert = function(λ, φ) {
          var cosφ = Math.cos(φ),
              x = Math.cos(λ) * cosφ,
              y = Math.sin(λ) * cosφ,
              z = Math.sin(φ),
              k = z * cosδγ - y * sinδγ;
          return [Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ)];
        };
        return rotation;
      }
      d3.geo.circle = function() {
        var origin = [0, 0],
            angle,
            precision = 6,
            interpolate;
        function circle() {
          var center = typeof origin === "function" ? origin.apply(this, arguments) : origin,
              rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert,
              ring = [];
          interpolate(null, null, 1, {point: function(x, y) {
              ring.push(x = rotate(x, y));
              x[0] *= d3_degrees, x[1] *= d3_degrees;
            }});
          return {
            type: "Polygon",
            coordinates: [ring]
          };
        }
        circle.origin = function(x) {
          if (!arguments.length)
            return origin;
          origin = x;
          return circle;
        };
        circle.angle = function(x) {
          if (!arguments.length)
            return angle;
          interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
          return circle;
        };
        circle.precision = function(_) {
          if (!arguments.length)
            return precision;
          interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
          return circle;
        };
        return circle.angle(90);
      };
      function d3_geo_circleInterpolate(radius, precision) {
        var cr = Math.cos(radius),
            sr = Math.sin(radius);
        return function(from, to, direction, listener) {
          var step = direction * precision;
          if (from != null) {
            from = d3_geo_circleAngle(cr, from);
            to = d3_geo_circleAngle(cr, to);
            if (direction > 0 ? from < to : from > to)
              from += direction * τ;
          } else {
            from = radius + direction * τ;
            to = radius - .5 * step;
          }
          for (var point,
              t = from; direction > 0 ? t > to : t < to; t -= step) {
            listener.point((point = d3_geo_spherical([cr, -sr * Math.cos(t), -sr * Math.sin(t)]))[0], point[1]);
          }
        };
      }
      function d3_geo_circleAngle(cr, point) {
        var a = d3_geo_cartesian(point);
        a[0] -= cr;
        d3_geo_cartesianNormalize(a);
        var angle = d3_acos(-a[1]);
        return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
      }
      d3.geo.distance = function(a, b) {
        var Δλ = (b[0] - a[0]) * d3_radians,
            φ0 = a[1] * d3_radians,
            φ1 = b[1] * d3_radians,
            sinΔλ = Math.sin(Δλ),
            cosΔλ = Math.cos(Δλ),
            sinφ0 = Math.sin(φ0),
            cosφ0 = Math.cos(φ0),
            sinφ1 = Math.sin(φ1),
            cosφ1 = Math.cos(φ1),
            t;
        return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
      };
      d3.geo.graticule = function() {
        var x1,
            x0,
            X1,
            X0,
            y1,
            y0,
            Y1,
            Y0,
            dx = 10,
            dy = dx,
            DX = 90,
            DY = 360,
            x,
            y,
            X,
            Y,
            precision = 2.5;
        function graticule() {
          return {
            type: "MultiLineString",
            coordinates: lines()
          };
        }
        function lines() {
          return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
            return abs(x % DX) > ε;
          }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
            return abs(y % DY) > ε;
          }).map(y));
        }
        graticule.lines = function() {
          return lines().map(function(coordinates) {
            return {
              type: "LineString",
              coordinates: coordinates
            };
          });
        };
        graticule.outline = function() {
          return {
            type: "Polygon",
            coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
          };
        };
        graticule.extent = function(_) {
          if (!arguments.length)
            return graticule.minorExtent();
          return graticule.majorExtent(_).minorExtent(_);
        };
        graticule.majorExtent = function(_) {
          if (!arguments.length)
            return [[X0, Y0], [X1, Y1]];
          X0 = +_[0][0], X1 = +_[1][0];
          Y0 = +_[0][1], Y1 = +_[1][1];
          if (X0 > X1)
            _ = X0, X0 = X1, X1 = _;
          if (Y0 > Y1)
            _ = Y0, Y0 = Y1, Y1 = _;
          return graticule.precision(precision);
        };
        graticule.minorExtent = function(_) {
          if (!arguments.length)
            return [[x0, y0], [x1, y1]];
          x0 = +_[0][0], x1 = +_[1][0];
          y0 = +_[0][1], y1 = +_[1][1];
          if (x0 > x1)
            _ = x0, x0 = x1, x1 = _;
          if (y0 > y1)
            _ = y0, y0 = y1, y1 = _;
          return graticule.precision(precision);
        };
        graticule.step = function(_) {
          if (!arguments.length)
            return graticule.minorStep();
          return graticule.majorStep(_).minorStep(_);
        };
        graticule.majorStep = function(_) {
          if (!arguments.length)
            return [DX, DY];
          DX = +_[0], DY = +_[1];
          return graticule;
        };
        graticule.minorStep = function(_) {
          if (!arguments.length)
            return [dx, dy];
          dx = +_[0], dy = +_[1];
          return graticule;
        };
        graticule.precision = function(_) {
          if (!arguments.length)
            return precision;
          precision = +_;
          x = d3_geo_graticuleX(y0, y1, 90);
          y = d3_geo_graticuleY(x0, x1, precision);
          X = d3_geo_graticuleX(Y0, Y1, 90);
          Y = d3_geo_graticuleY(X0, X1, precision);
          return graticule;
        };
        return graticule.majorExtent([[-180, -90 + ε], [180, 90 - ε]]).minorExtent([[-180, -80 - ε], [180, 80 + ε]]);
      };
      function d3_geo_graticuleX(y0, y1, dy) {
        var y = d3.range(y0, y1 - ε, dy).concat(y1);
        return function(x) {
          return y.map(function(y) {
            return [x, y];
          });
        };
      }
      function d3_geo_graticuleY(x0, x1, dx) {
        var x = d3.range(x0, x1 - ε, dx).concat(x1);
        return function(y) {
          return x.map(function(x) {
            return [x, y];
          });
        };
      }
      function d3_source(d) {
        return d.source;
      }
      function d3_target(d) {
        return d.target;
      }
      d3.geo.greatArc = function() {
        var source = d3_source,
            source_,
            target = d3_target,
            target_;
        function greatArc() {
          return {
            type: "LineString",
            coordinates: [source_ || source.apply(this, arguments), target_ || target.apply(this, arguments)]
          };
        }
        greatArc.distance = function() {
          return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
        };
        greatArc.source = function(_) {
          if (!arguments.length)
            return source;
          source = _, source_ = typeof _ === "function" ? null : _;
          return greatArc;
        };
        greatArc.target = function(_) {
          if (!arguments.length)
            return target;
          target = _, target_ = typeof _ === "function" ? null : _;
          return greatArc;
        };
        greatArc.precision = function() {
          return arguments.length ? greatArc : 0;
        };
        return greatArc;
      };
      d3.geo.interpolate = function(source, target) {
        return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
      };
      function d3_geo_interpolate(x0, y0, x1, y1) {
        var cy0 = Math.cos(y0),
            sy0 = Math.sin(y0),
            cy1 = Math.cos(y1),
            sy1 = Math.sin(y1),
            kx0 = cy0 * Math.cos(x0),
            ky0 = cy0 * Math.sin(x0),
            kx1 = cy1 * Math.cos(x1),
            ky1 = cy1 * Math.sin(x1),
            d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))),
            k = 1 / Math.sin(d);
        var interpolate = d ? function(t) {
          var B = Math.sin(t *= d) * k,
              A = Math.sin(d - t) * k,
              x = A * kx0 + B * kx1,
              y = A * ky0 + B * ky1,
              z = A * sy0 + B * sy1;
          return [Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees];
        } : function() {
          return [x0 * d3_degrees, y0 * d3_degrees];
        };
        interpolate.distance = d;
        return interpolate;
      }
      d3.geo.length = function(object) {
        d3_geo_lengthSum = 0;
        d3.geo.stream(object, d3_geo_length);
        return d3_geo_lengthSum;
      };
      var d3_geo_lengthSum;
      var d3_geo_length = {
        sphere: d3_noop,
        point: d3_noop,
        lineStart: d3_geo_lengthLineStart,
        lineEnd: d3_noop,
        polygonStart: d3_noop,
        polygonEnd: d3_noop
      };
      function d3_geo_lengthLineStart() {
        var λ0,
            sinφ0,
            cosφ0;
        d3_geo_length.point = function(λ, φ) {
          λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
          d3_geo_length.point = nextPoint;
        };
        d3_geo_length.lineEnd = function() {
          d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
        };
        function nextPoint(λ, φ) {
          var sinφ = Math.sin(φ *= d3_radians),
              cosφ = Math.cos(φ),
              t = abs((λ *= d3_radians) - λ0),
              cosΔλ = Math.cos(t);
          d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
          λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
        }
      }
      function d3_geo_azimuthal(scale, angle) {
        function azimuthal(λ, φ) {
          var cosλ = Math.cos(λ),
              cosφ = Math.cos(φ),
              k = scale(cosλ * cosφ);
          return [k * cosφ * Math.sin(λ), k * Math.sin(φ)];
        }
        azimuthal.invert = function(x, y) {
          var ρ = Math.sqrt(x * x + y * y),
              c = angle(ρ),
              sinc = Math.sin(c),
              cosc = Math.cos(c);
          return [Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ)];
        };
        return azimuthal;
      }
      var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
        return Math.sqrt(2 / (1 + cosλcosφ));
      }, function(ρ) {
        return 2 * Math.asin(ρ / 2);
      });
      (d3.geo.azimuthalEqualArea = function() {
        return d3_geo_projection(d3_geo_azimuthalEqualArea);
      }).raw = d3_geo_azimuthalEqualArea;
      var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
        var c = Math.acos(cosλcosφ);
        return c && c / Math.sin(c);
      }, d3_identity);
      (d3.geo.azimuthalEquidistant = function() {
        return d3_geo_projection(d3_geo_azimuthalEquidistant);
      }).raw = d3_geo_azimuthalEquidistant;
      function d3_geo_conicConformal(φ0, φ1) {
        var cosφ0 = Math.cos(φ0),
            t = function(φ) {
              return Math.tan(π / 4 + φ / 2);
            },
            n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)),
            F = cosφ0 * Math.pow(t(φ0), n) / n;
        if (!n)
          return d3_geo_mercator;
        function forward(λ, φ) {
          if (F > 0) {
            if (φ < -halfπ + ε)
              φ = -halfπ + ε;
          } else {
            if (φ > halfπ - ε)
              φ = halfπ - ε;
          }
          var ρ = F / Math.pow(t(φ), n);
          return [ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ)];
        }
        forward.invert = function(x, y) {
          var ρ0_y = F - y,
              ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
          return [Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ];
        };
        return forward;
      }
      (d3.geo.conicConformal = function() {
        return d3_geo_conic(d3_geo_conicConformal);
      }).raw = d3_geo_conicConformal;
      function d3_geo_conicEquidistant(φ0, φ1) {
        var cosφ0 = Math.cos(φ0),
            n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0),
            G = cosφ0 / n + φ0;
        if (abs(n) < ε)
          return d3_geo_equirectangular;
        function forward(λ, φ) {
          var ρ = G - φ;
          return [ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ)];
        }
        forward.invert = function(x, y) {
          var ρ0_y = G - y;
          return [Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y)];
        };
        return forward;
      }
      (d3.geo.conicEquidistant = function() {
        return d3_geo_conic(d3_geo_conicEquidistant);
      }).raw = d3_geo_conicEquidistant;
      var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
        return 1 / cosλcosφ;
      }, Math.atan);
      (d3.geo.gnomonic = function() {
        return d3_geo_projection(d3_geo_gnomonic);
      }).raw = d3_geo_gnomonic;
      function d3_geo_mercator(λ, φ) {
        return [λ, Math.log(Math.tan(π / 4 + φ / 2))];
      }
      d3_geo_mercator.invert = function(x, y) {
        return [x, 2 * Math.atan(Math.exp(y)) - halfπ];
      };
      function d3_geo_mercatorProjection(project) {
        var m = d3_geo_projection(project),
            scale = m.scale,
            translate = m.translate,
            clipExtent = m.clipExtent,
            clipAuto;
        m.scale = function() {
          var v = scale.apply(m, arguments);
          return v === m ? clipAuto ? m.clipExtent(null) : m : v;
        };
        m.translate = function() {
          var v = translate.apply(m, arguments);
          return v === m ? clipAuto ? m.clipExtent(null) : m : v;
        };
        m.clipExtent = function(_) {
          var v = clipExtent.apply(m, arguments);
          if (v === m) {
            if (clipAuto = _ == null) {
              var k = π * scale(),
                  t = translate();
              clipExtent([[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]]);
            }
          } else if (clipAuto) {
            v = null;
          }
          return v;
        };
        return m.clipExtent(null);
      }
      (d3.geo.mercator = function() {
        return d3_geo_mercatorProjection(d3_geo_mercator);
      }).raw = d3_geo_mercator;
      var d3_geo_orthographic = d3_geo_azimuthal(function() {
        return 1;
      }, Math.asin);
      (d3.geo.orthographic = function() {
        return d3_geo_projection(d3_geo_orthographic);
      }).raw = d3_geo_orthographic;
      var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
        return 1 / (1 + cosλcosφ);
      }, function(ρ) {
        return 2 * Math.atan(ρ);
      });
      (d3.geo.stereographic = function() {
        return d3_geo_projection(d3_geo_stereographic);
      }).raw = d3_geo_stereographic;
      function d3_geo_transverseMercator(λ, φ) {
        return [Math.log(Math.tan(π / 4 + φ / 2)), -λ];
      }
      d3_geo_transverseMercator.invert = function(x, y) {
        return [-y, 2 * Math.atan(Math.exp(x)) - halfπ];
      };
      (d3.geo.transverseMercator = function() {
        var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator),
            center = projection.center,
            rotate = projection.rotate;
        projection.center = function(_) {
          return _ ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
        };
        projection.rotate = function(_) {
          return _ ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
        };
        return rotate([0, 0, 90]);
      }).raw = d3_geo_transverseMercator;
      d3.geom = {};
      function d3_geom_pointX(d) {
        return d[0];
      }
      function d3_geom_pointY(d) {
        return d[1];
      }
      d3.geom.hull = function(vertices) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY;
        if (arguments.length)
          return hull(vertices);
        function hull(data) {
          if (data.length < 3)
            return [];
          var fx = d3_functor(x),
              fy = d3_functor(y),
              i,
              n = data.length,
              points = [],
              flippedPoints = [];
          for (i = 0; i < n; i++) {
            points.push([+fx.call(this, data[i], i), +fy.call(this, data[i], i), i]);
          }
          points.sort(d3_geom_hullOrder);
          for (i = 0; i < n; i++)
            flippedPoints.push([points[i][0], -points[i][1]]);
          var upper = d3_geom_hullUpper(points),
              lower = d3_geom_hullUpper(flippedPoints);
          var skipLeft = lower[0] === upper[0],
              skipRight = lower[lower.length - 1] === upper[upper.length - 1],
              polygon = [];
          for (i = upper.length - 1; i >= 0; --i)
            polygon.push(data[points[upper[i]][2]]);
          for (i = +skipLeft; i < lower.length - skipRight; ++i)
            polygon.push(data[points[lower[i]][2]]);
          return polygon;
        }
        hull.x = function(_) {
          return arguments.length ? (x = _, hull) : x;
        };
        hull.y = function(_) {
          return arguments.length ? (y = _, hull) : y;
        };
        return hull;
      };
      function d3_geom_hullUpper(points) {
        var n = points.length,
            hull = [0, 1],
            hs = 2;
        for (var i = 2; i < n; i++) {
          while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0)
            --hs;
          hull[hs++] = i;
        }
        return hull.slice(0, hs);
      }
      function d3_geom_hullOrder(a, b) {
        return a[0] - b[0] || a[1] - b[1];
      }
      d3.geom.polygon = function(coordinates) {
        d3_subclass(coordinates, d3_geom_polygonPrototype);
        return coordinates;
      };
      var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
      d3_geom_polygonPrototype.area = function() {
        var i = -1,
            n = this.length,
            a,
            b = this[n - 1],
            area = 0;
        while (++i < n) {
          a = b;
          b = this[i];
          area += a[1] * b[0] - a[0] * b[1];
        }
        return area * .5;
      };
      d3_geom_polygonPrototype.centroid = function(k) {
        var i = -1,
            n = this.length,
            x = 0,
            y = 0,
            a,
            b = this[n - 1],
            c;
        if (!arguments.length)
          k = -1 / (6 * this.area());
        while (++i < n) {
          a = b;
          b = this[i];
          c = a[0] * b[1] - b[0] * a[1];
          x += (a[0] + b[0]) * c;
          y += (a[1] + b[1]) * c;
        }
        return [x * k, y * k];
      };
      d3_geom_polygonPrototype.clip = function(subject) {
        var input,
            closed = d3_geom_polygonClosed(subject),
            i = -1,
            n = this.length - d3_geom_polygonClosed(this),
            j,
            m,
            a = this[n - 1],
            b,
            c,
            d;
        while (++i < n) {
          input = subject.slice();
          subject.length = 0;
          b = this[i];
          c = input[(m = input.length - closed) - 1];
          j = -1;
          while (++j < m) {
            d = input[j];
            if (d3_geom_polygonInside(d, a, b)) {
              if (!d3_geom_polygonInside(c, a, b)) {
                subject.push(d3_geom_polygonIntersect(c, d, a, b));
              }
              subject.push(d);
            } else if (d3_geom_polygonInside(c, a, b)) {
              subject.push(d3_geom_polygonIntersect(c, d, a, b));
            }
            c = d;
          }
          if (closed)
            subject.push(subject[0]);
          a = b;
        }
        return subject;
      };
      function d3_geom_polygonInside(p, a, b) {
        return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
      }
      function d3_geom_polygonIntersect(c, d, a, b) {
        var x1 = c[0],
            x3 = a[0],
            x21 = d[0] - x1,
            x43 = b[0] - x3,
            y1 = c[1],
            y3 = a[1],
            y21 = d[1] - y1,
            y43 = b[1] - y3,
            ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
        return [x1 + ua * x21, y1 + ua * y21];
      }
      function d3_geom_polygonClosed(coordinates) {
        var a = coordinates[0],
            b = coordinates[coordinates.length - 1];
        return !(a[0] - b[0] || a[1] - b[1]);
      }
      var d3_geom_voronoiEdges,
          d3_geom_voronoiCells,
          d3_geom_voronoiBeaches,
          d3_geom_voronoiBeachPool = [],
          d3_geom_voronoiFirstCircle,
          d3_geom_voronoiCircles,
          d3_geom_voronoiCirclePool = [];
      function d3_geom_voronoiBeach() {
        d3_geom_voronoiRedBlackNode(this);
        this.edge = this.site = this.circle = null;
      }
      function d3_geom_voronoiCreateBeach(site) {
        var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
        beach.site = site;
        return beach;
      }
      function d3_geom_voronoiDetachBeach(beach) {
        d3_geom_voronoiDetachCircle(beach);
        d3_geom_voronoiBeaches.remove(beach);
        d3_geom_voronoiBeachPool.push(beach);
        d3_geom_voronoiRedBlackNode(beach);
      }
      function d3_geom_voronoiRemoveBeach(beach) {
        var circle = beach.circle,
            x = circle.x,
            y = circle.cy,
            vertex = {
              x: x,
              y: y
            },
            previous = beach.P,
            next = beach.N,
            disappearing = [beach];
        d3_geom_voronoiDetachBeach(beach);
        var lArc = previous;
        while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
          previous = lArc.P;
          disappearing.unshift(lArc);
          d3_geom_voronoiDetachBeach(lArc);
          lArc = previous;
        }
        disappearing.unshift(lArc);
        d3_geom_voronoiDetachCircle(lArc);
        var rArc = next;
        while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
          next = rArc.N;
          disappearing.push(rArc);
          d3_geom_voronoiDetachBeach(rArc);
          rArc = next;
        }
        disappearing.push(rArc);
        d3_geom_voronoiDetachCircle(rArc);
        var nArcs = disappearing.length,
            iArc;
        for (iArc = 1; iArc < nArcs; ++iArc) {
          rArc = disappearing[iArc];
          lArc = disappearing[iArc - 1];
          d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
        }
        lArc = disappearing[0];
        rArc = disappearing[nArcs - 1];
        rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
        d3_geom_voronoiAttachCircle(lArc);
        d3_geom_voronoiAttachCircle(rArc);
      }
      function d3_geom_voronoiAddBeach(site) {
        var x = site.x,
            directrix = site.y,
            lArc,
            rArc,
            dxl,
            dxr,
            node = d3_geom_voronoiBeaches._;
        while (node) {
          dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
          if (dxl > ε)
            node = node.L;
          else {
            dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
            if (dxr > ε) {
              if (!node.R) {
                lArc = node;
                break;
              }
              node = node.R;
            } else {
              if (dxl > -ε) {
                lArc = node.P;
                rArc = node;
              } else if (dxr > -ε) {
                lArc = node;
                rArc = node.N;
              } else {
                lArc = rArc = node;
              }
              break;
            }
          }
        }
        var newArc = d3_geom_voronoiCreateBeach(site);
        d3_geom_voronoiBeaches.insert(lArc, newArc);
        if (!lArc && !rArc)
          return ;
        if (lArc === rArc) {
          d3_geom_voronoiDetachCircle(lArc);
          rArc = d3_geom_voronoiCreateBeach(lArc.site);
          d3_geom_voronoiBeaches.insert(newArc, rArc);
          newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
          d3_geom_voronoiAttachCircle(lArc);
          d3_geom_voronoiAttachCircle(rArc);
          return ;
        }
        if (!rArc) {
          newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
          return ;
        }
        d3_geom_voronoiDetachCircle(lArc);
        d3_geom_voronoiDetachCircle(rArc);
        var lSite = lArc.site,
            ax = lSite.x,
            ay = lSite.y,
            bx = site.x - ax,
            by = site.y - ay,
            rSite = rArc.site,
            cx = rSite.x - ax,
            cy = rSite.y - ay,
            d = 2 * (bx * cy - by * cx),
            hb = bx * bx + by * by,
            hc = cx * cx + cy * cy,
            vertex = {
              x: (cy * hb - by * hc) / d + ax,
              y: (bx * hc - cx * hb) / d + ay
            };
        d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
        newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
        rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
        d3_geom_voronoiAttachCircle(lArc);
        d3_geom_voronoiAttachCircle(rArc);
      }
      function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
        var site = arc.site,
            rfocx = site.x,
            rfocy = site.y,
            pby2 = rfocy - directrix;
        if (!pby2)
          return rfocx;
        var lArc = arc.P;
        if (!lArc)
          return -Infinity;
        site = lArc.site;
        var lfocx = site.x,
            lfocy = site.y,
            plby2 = lfocy - directrix;
        if (!plby2)
          return lfocx;
        var hl = lfocx - rfocx,
            aby2 = 1 / pby2 - 1 / plby2,
            b = hl / plby2;
        if (aby2)
          return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
        return (rfocx + lfocx) / 2;
      }
      function d3_geom_voronoiRightBreakPoint(arc, directrix) {
        var rArc = arc.N;
        if (rArc)
          return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
        var site = arc.site;
        return site.y === directrix ? site.x : Infinity;
      }
      function d3_geom_voronoiCell(site) {
        this.site = site;
        this.edges = [];
      }
      d3_geom_voronoiCell.prototype.prepare = function() {
        var halfEdges = this.edges,
            iHalfEdge = halfEdges.length,
            edge;
        while (iHalfEdge--) {
          edge = halfEdges[iHalfEdge].edge;
          if (!edge.b || !edge.a)
            halfEdges.splice(iHalfEdge, 1);
        }
        halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
        return halfEdges.length;
      };
      function d3_geom_voronoiCloseCells(extent) {
        var x0 = extent[0][0],
            x1 = extent[1][0],
            y0 = extent[0][1],
            y1 = extent[1][1],
            x2,
            y2,
            x3,
            y3,
            cells = d3_geom_voronoiCells,
            iCell = cells.length,
            cell,
            iHalfEdge,
            halfEdges,
            nHalfEdges,
            start,
            end;
        while (iCell--) {
          cell = cells[iCell];
          if (!cell || !cell.prepare())
            continue;
          halfEdges = cell.edges;
          nHalfEdges = halfEdges.length;
          iHalfEdge = 0;
          while (iHalfEdge < nHalfEdges) {
            end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
            start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
            if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
              halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
                x: x0,
                y: abs(x2 - x0) < ε ? y2 : y1
              } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
                x: abs(y2 - y1) < ε ? x2 : x1,
                y: y1
              } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
                x: x1,
                y: abs(x2 - x1) < ε ? y2 : y0
              } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
                x: abs(y2 - y0) < ε ? x2 : x0,
                y: y0
              } : null), cell.site, null));
              ++nHalfEdges;
            }
          }
        }
      }
      function d3_geom_voronoiHalfEdgeOrder(a, b) {
        return b.angle - a.angle;
      }
      function d3_geom_voronoiCircle() {
        d3_geom_voronoiRedBlackNode(this);
        this.x = this.y = this.arc = this.site = this.cy = null;
      }
      function d3_geom_voronoiAttachCircle(arc) {
        var lArc = arc.P,
            rArc = arc.N;
        if (!lArc || !rArc)
          return ;
        var lSite = lArc.site,
            cSite = arc.site,
            rSite = rArc.site;
        if (lSite === rSite)
          return ;
        var bx = cSite.x,
            by = cSite.y,
            ax = lSite.x - bx,
            ay = lSite.y - by,
            cx = rSite.x - bx,
            cy = rSite.y - by;
        var d = 2 * (ax * cy - ay * cx);
        if (d >= -ε2)
          return ;
        var ha = ax * ax + ay * ay,
            hc = cx * cx + cy * cy,
            x = (cy * ha - ay * hc) / d,
            y = (ax * hc - cx * ha) / d,
            cy = y + by;
        var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
        circle.arc = arc;
        circle.site = cSite;
        circle.x = x + bx;
        circle.y = cy + Math.sqrt(x * x + y * y);
        circle.cy = cy;
        arc.circle = circle;
        var before = null,
            node = d3_geom_voronoiCircles._;
        while (node) {
          if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
            if (node.L)
              node = node.L;
            else {
              before = node.P;
              break;
            }
          } else {
            if (node.R)
              node = node.R;
            else {
              before = node;
              break;
            }
          }
        }
        d3_geom_voronoiCircles.insert(before, circle);
        if (!before)
          d3_geom_voronoiFirstCircle = circle;
      }
      function d3_geom_voronoiDetachCircle(arc) {
        var circle = arc.circle;
        if (circle) {
          if (!circle.P)
            d3_geom_voronoiFirstCircle = circle.N;
          d3_geom_voronoiCircles.remove(circle);
          d3_geom_voronoiCirclePool.push(circle);
          d3_geom_voronoiRedBlackNode(circle);
          arc.circle = null;
        }
      }
      function d3_geom_voronoiClipEdges(extent) {
        var edges = d3_geom_voronoiEdges,
            clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]),
            i = edges.length,
            e;
        while (i--) {
          e = edges[i];
          if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
            e.a = e.b = null;
            edges.splice(i, 1);
          }
        }
      }
      function d3_geom_voronoiConnectEdge(edge, extent) {
        var vb = edge.b;
        if (vb)
          return true;
        var va = edge.a,
            x0 = extent[0][0],
            x1 = extent[1][0],
            y0 = extent[0][1],
            y1 = extent[1][1],
            lSite = edge.l,
            rSite = edge.r,
            lx = lSite.x,
            ly = lSite.y,
            rx = rSite.x,
            ry = rSite.y,
            fx = (lx + rx) / 2,
            fy = (ly + ry) / 2,
            fm,
            fb;
        if (ry === ly) {
          if (fx < x0 || fx >= x1)
            return ;
          if (lx > rx) {
            if (!va)
              va = {
                x: fx,
                y: y0
              };
            else if (va.y >= y1)
              return ;
            vb = {
              x: fx,
              y: y1
            };
          } else {
            if (!va)
              va = {
                x: fx,
                y: y1
              };
            else if (va.y < y0)
              return ;
            vb = {
              x: fx,
              y: y0
            };
          }
        } else {
          fm = (lx - rx) / (ry - ly);
          fb = fy - fm * fx;
          if (fm < -1 || fm > 1) {
            if (lx > rx) {
              if (!va)
                va = {
                  x: (y0 - fb) / fm,
                  y: y0
                };
              else if (va.y >= y1)
                return ;
              vb = {
                x: (y1 - fb) / fm,
                y: y1
              };
            } else {
              if (!va)
                va = {
                  x: (y1 - fb) / fm,
                  y: y1
                };
              else if (va.y < y0)
                return ;
              vb = {
                x: (y0 - fb) / fm,
                y: y0
              };
            }
          } else {
            if (ly < ry) {
              if (!va)
                va = {
                  x: x0,
                  y: fm * x0 + fb
                };
              else if (va.x >= x1)
                return ;
              vb = {
                x: x1,
                y: fm * x1 + fb
              };
            } else {
              if (!va)
                va = {
                  x: x1,
                  y: fm * x1 + fb
                };
              else if (va.x < x0)
                return ;
              vb = {
                x: x0,
                y: fm * x0 + fb
              };
            }
          }
        }
        edge.a = va;
        edge.b = vb;
        return true;
      }
      function d3_geom_voronoiEdge(lSite, rSite) {
        this.l = lSite;
        this.r = rSite;
        this.a = this.b = null;
      }
      function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
        var edge = new d3_geom_voronoiEdge(lSite, rSite);
        d3_geom_voronoiEdges.push(edge);
        if (va)
          d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
        if (vb)
          d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
        d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
        d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
        return edge;
      }
      function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
        var edge = new d3_geom_voronoiEdge(lSite, null);
        edge.a = va;
        edge.b = vb;
        d3_geom_voronoiEdges.push(edge);
        return edge;
      }
      function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
        if (!edge.a && !edge.b) {
          edge.a = vertex;
          edge.l = lSite;
          edge.r = rSite;
        } else if (edge.l === rSite) {
          edge.b = vertex;
        } else {
          edge.a = vertex;
        }
      }
      function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
        var va = edge.a,
            vb = edge.b;
        this.edge = edge;
        this.site = lSite;
        this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
      }
      d3_geom_voronoiHalfEdge.prototype = {
        start: function() {
          return this.edge.l === this.site ? this.edge.a : this.edge.b;
        },
        end: function() {
          return this.edge.l === this.site ? this.edge.b : this.edge.a;
        }
      };
      function d3_geom_voronoiRedBlackTree() {
        this._ = null;
      }
      function d3_geom_voronoiRedBlackNode(node) {
        node.U = node.C = node.L = node.R = node.P = node.N = null;
      }
      d3_geom_voronoiRedBlackTree.prototype = {
        insert: function(after, node) {
          var parent,
              grandpa,
              uncle;
          if (after) {
            node.P = after;
            node.N = after.N;
            if (after.N)
              after.N.P = node;
            after.N = node;
            if (after.R) {
              after = after.R;
              while (after.L)
                after = after.L;
              after.L = node;
            } else {
              after.R = node;
            }
            parent = after;
          } else if (this._) {
            after = d3_geom_voronoiRedBlackFirst(this._);
            node.P = null;
            node.N = after;
            after.P = after.L = node;
            parent = after;
          } else {
            node.P = node.N = null;
            this._ = node;
            parent = null;
          }
          node.L = node.R = null;
          node.U = parent;
          node.C = true;
          after = node;
          while (parent && parent.C) {
            grandpa = parent.U;
            if (parent === grandpa.L) {
              uncle = grandpa.R;
              if (uncle && uncle.C) {
                parent.C = uncle.C = false;
                grandpa.C = true;
                after = grandpa;
              } else {
                if (after === parent.R) {
                  d3_geom_voronoiRedBlackRotateLeft(this, parent);
                  after = parent;
                  parent = after.U;
                }
                parent.C = false;
                grandpa.C = true;
                d3_geom_voronoiRedBlackRotateRight(this, grandpa);
              }
            } else {
              uncle = grandpa.L;
              if (uncle && uncle.C) {
                parent.C = uncle.C = false;
                grandpa.C = true;
                after = grandpa;
              } else {
                if (after === parent.L) {
                  d3_geom_voronoiRedBlackRotateRight(this, parent);
                  after = parent;
                  parent = after.U;
                }
                parent.C = false;
                grandpa.C = true;
                d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
              }
            }
            parent = after.U;
          }
          this._.C = false;
        },
        remove: function(node) {
          if (node.N)
            node.N.P = node.P;
          if (node.P)
            node.P.N = node.N;
          node.N = node.P = null;
          var parent = node.U,
              sibling,
              left = node.L,
              right = node.R,
              next,
              red;
          if (!left)
            next = right;
          else if (!right)
            next = left;
          else
            next = d3_geom_voronoiRedBlackFirst(right);
          if (parent) {
            if (parent.L === node)
              parent.L = next;
            else
              parent.R = next;
          } else {
            this._ = next;
          }
          if (left && right) {
            red = next.C;
            next.C = node.C;
            next.L = left;
            left.U = next;
            if (next !== right) {
              parent = next.U;
              next.U = node.U;
              node = next.R;
              parent.L = node;
              next.R = right;
              right.U = next;
            } else {
              next.U = parent;
              parent = next;
              node = next.R;
            }
          } else {
            red = node.C;
            node = next;
          }
          if (node)
            node.U = parent;
          if (red)
            return ;
          if (node && node.C) {
            node.C = false;
            return ;
          }
          do {
            if (node === this._)
              break;
            if (node === parent.L) {
              sibling = parent.R;
              if (sibling.C) {
                sibling.C = false;
                parent.C = true;
                d3_geom_voronoiRedBlackRotateLeft(this, parent);
                sibling = parent.R;
              }
              if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                if (!sibling.R || !sibling.R.C) {
                  sibling.L.C = false;
                  sibling.C = true;
                  d3_geom_voronoiRedBlackRotateRight(this, sibling);
                  sibling = parent.R;
                }
                sibling.C = parent.C;
                parent.C = sibling.R.C = false;
                d3_geom_voronoiRedBlackRotateLeft(this, parent);
                node = this._;
                break;
              }
            } else {
              sibling = parent.L;
              if (sibling.C) {
                sibling.C = false;
                parent.C = true;
                d3_geom_voronoiRedBlackRotateRight(this, parent);
                sibling = parent.L;
              }
              if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                if (!sibling.L || !sibling.L.C) {
                  sibling.R.C = false;
                  sibling.C = true;
                  d3_geom_voronoiRedBlackRotateLeft(this, sibling);
                  sibling = parent.L;
                }
                sibling.C = parent.C;
                parent.C = sibling.L.C = false;
                d3_geom_voronoiRedBlackRotateRight(this, parent);
                node = this._;
                break;
              }
            }
            sibling.C = true;
            node = parent;
            parent = parent.U;
          } while (!node.C);
          if (node)
            node.C = false;
        }
      };
      function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
        var p = node,
            q = node.R,
            parent = p.U;
        if (parent) {
          if (parent.L === p)
            parent.L = q;
          else
            parent.R = q;
        } else {
          tree._ = q;
        }
        q.U = parent;
        p.U = q;
        p.R = q.L;
        if (p.R)
          p.R.U = p;
        q.L = p;
      }
      function d3_geom_voronoiRedBlackRotateRight(tree, node) {
        var p = node,
            q = node.L,
            parent = p.U;
        if (parent) {
          if (parent.L === p)
            parent.L = q;
          else
            parent.R = q;
        } else {
          tree._ = q;
        }
        q.U = parent;
        p.U = q;
        p.L = q.R;
        if (p.L)
          p.L.U = p;
        q.R = p;
      }
      function d3_geom_voronoiRedBlackFirst(node) {
        while (node.L)
          node = node.L;
        return node;
      }
      function d3_geom_voronoi(sites, bbox) {
        var site = sites.sort(d3_geom_voronoiVertexOrder).pop(),
            x0,
            y0,
            circle;
        d3_geom_voronoiEdges = [];
        d3_geom_voronoiCells = new Array(sites.length);
        d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
        d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
        while (true) {
          circle = d3_geom_voronoiFirstCircle;
          if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
            if (site.x !== x0 || site.y !== y0) {
              d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
              d3_geom_voronoiAddBeach(site);
              x0 = site.x, y0 = site.y;
            }
            site = sites.pop();
          } else if (circle) {
            d3_geom_voronoiRemoveBeach(circle.arc);
          } else {
            break;
          }
        }
        if (bbox)
          d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
        var diagram = {
          cells: d3_geom_voronoiCells,
          edges: d3_geom_voronoiEdges
        };
        d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
        return diagram;
      }
      function d3_geom_voronoiVertexOrder(a, b) {
        return b.y - a.y || b.x - a.x;
      }
      d3.geom.voronoi = function(points) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY,
            fx = x,
            fy = y,
            clipExtent = d3_geom_voronoiClipExtent;
        if (points)
          return voronoi(points);
        function voronoi(data) {
          var polygons = new Array(data.length),
              x0 = clipExtent[0][0],
              y0 = clipExtent[0][1],
              x1 = clipExtent[1][0],
              y1 = clipExtent[1][1];
          d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
            var edges = cell.edges,
                site = cell.site,
                polygon = polygons[i] = edges.length ? edges.map(function(e) {
                  var s = e.start();
                  return [s.x, s.y];
                }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [[x0, y1], [x1, y1], [x1, y0], [x0, y0]] : [];
            polygon.point = data[i];
          });
          return polygons;
        }
        function sites(data) {
          return data.map(function(d, i) {
            return {
              x: Math.round(fx(d, i) / ε) * ε,
              y: Math.round(fy(d, i) / ε) * ε,
              i: i
            };
          });
        }
        voronoi.links = function(data) {
          return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
            return edge.l && edge.r;
          }).map(function(edge) {
            return {
              source: data[edge.l.i],
              target: data[edge.r.i]
            };
          });
        };
        voronoi.triangles = function(data) {
          var triangles = [];
          d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
            var site = cell.site,
                edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder),
                j = -1,
                m = edges.length,
                e0,
                s0,
                e1 = edges[m - 1].edge,
                s1 = e1.l === site ? e1.r : e1.l;
            while (++j < m) {
              e0 = e1;
              s0 = s1;
              e1 = edges[j].edge;
              s1 = e1.l === site ? e1.r : e1.l;
              if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
                triangles.push([data[i], data[s0.i], data[s1.i]]);
              }
            }
          });
          return triangles;
        };
        voronoi.x = function(_) {
          return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
        };
        voronoi.y = function(_) {
          return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
        };
        voronoi.clipExtent = function(_) {
          if (!arguments.length)
            return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
          clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
          return voronoi;
        };
        voronoi.size = function(_) {
          if (!arguments.length)
            return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
          return voronoi.clipExtent(_ && [[0, 0], _]);
        };
        return voronoi;
      };
      var d3_geom_voronoiClipExtent = [[-1e6, -1e6], [1e6, 1e6]];
      function d3_geom_voronoiTriangleArea(a, b, c) {
        return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
      }
      d3.geom.delaunay = function(vertices) {
        return d3.geom.voronoi().triangles(vertices);
      };
      d3.geom.quadtree = function(points, x1, y1, x2, y2) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY,
            compat;
        if (compat = arguments.length) {
          x = d3_geom_quadtreeCompatX;
          y = d3_geom_quadtreeCompatY;
          if (compat === 3) {
            y2 = y1;
            x2 = x1;
            y1 = x1 = 0;
          }
          return quadtree(points);
        }
        function quadtree(data) {
          var d,
              fx = d3_functor(x),
              fy = d3_functor(y),
              xs,
              ys,
              i,
              n,
              x1_,
              y1_,
              x2_,
              y2_;
          if (x1 != null) {
            x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
          } else {
            x2_ = y2_ = -(x1_ = y1_ = Infinity);
            xs = [], ys = [];
            n = data.length;
            if (compat)
              for (i = 0; i < n; ++i) {
                d = data[i];
                if (d.x < x1_)
                  x1_ = d.x;
                if (d.y < y1_)
                  y1_ = d.y;
                if (d.x > x2_)
                  x2_ = d.x;
                if (d.y > y2_)
                  y2_ = d.y;
                xs.push(d.x);
                ys.push(d.y);
              }
            else
              for (i = 0; i < n; ++i) {
                var x_ = +fx(d = data[i], i),
                    y_ = +fy(d, i);
                if (x_ < x1_)
                  x1_ = x_;
                if (y_ < y1_)
                  y1_ = y_;
                if (x_ > x2_)
                  x2_ = x_;
                if (y_ > y2_)
                  y2_ = y_;
                xs.push(x_);
                ys.push(y_);
              }
          }
          var dx = x2_ - x1_,
              dy = y2_ - y1_;
          if (dx > dy)
            y2_ = y1_ + dx;
          else
            x2_ = x1_ + dy;
          function insert(n, d, x, y, x1, y1, x2, y2) {
            if (isNaN(x) || isNaN(y))
              return ;
            if (n.leaf) {
              var nx = n.x,
                  ny = n.y;
              if (nx != null) {
                if (abs(nx - x) + abs(ny - y) < .01) {
                  insertChild(n, d, x, y, x1, y1, x2, y2);
                } else {
                  var nPoint = n.point;
                  n.x = n.y = n.point = null;
                  insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
                  insertChild(n, d, x, y, x1, y1, x2, y2);
                }
              } else {
                n.x = x, n.y = y, n.point = d;
              }
            } else {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          }
          function insertChild(n, d, x, y, x1, y1, x2, y2) {
            var xm = (x1 + x2) * .5,
                ym = (y1 + y2) * .5,
                right = x >= xm,
                below = y >= ym,
                i = below << 1 | right;
            n.leaf = false;
            n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
            if (right)
              x1 = xm;
            else
              x2 = xm;
            if (below)
              y1 = ym;
            else
              y2 = ym;
            insert(n, d, x, y, x1, y1, x2, y2);
          }
          var root = d3_geom_quadtreeNode();
          root.add = function(d) {
            insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
          };
          root.visit = function(f) {
            d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
          };
          root.find = function(point) {
            return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
          };
          i = -1;
          if (x1 == null) {
            while (++i < n) {
              insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
            }
            --i;
          } else
            data.forEach(root.add);
          xs = ys = data = d = null;
          return root;
        }
        quadtree.x = function(_) {
          return arguments.length ? (x = _, quadtree) : x;
        };
        quadtree.y = function(_) {
          return arguments.length ? (y = _, quadtree) : y;
        };
        quadtree.extent = function(_) {
          if (!arguments.length)
            return x1 == null ? null : [[x1, y1], [x2, y2]];
          if (_ == null)
            x1 = y1 = x2 = y2 = null;
          else
            x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], y2 = +_[1][1];
          return quadtree;
        };
        quadtree.size = function(_) {
          if (!arguments.length)
            return x1 == null ? null : [x2 - x1, y2 - y1];
          if (_ == null)
            x1 = y1 = x2 = y2 = null;
          else
            x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
          return quadtree;
        };
        return quadtree;
      };
      function d3_geom_quadtreeCompatX(d) {
        return d.x;
      }
      function d3_geom_quadtreeCompatY(d) {
        return d.y;
      }
      function d3_geom_quadtreeNode() {
        return {
          leaf: true,
          nodes: [],
          point: null,
          x: null,
          y: null
        };
      }
      function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
        if (!f(node, x1, y1, x2, y2)) {
          var sx = (x1 + x2) * .5,
              sy = (y1 + y2) * .5,
              children = node.nodes;
          if (children[0])
            d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
          if (children[1])
            d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
          if (children[2])
            d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
          if (children[3])
            d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
        }
      }
      function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
        var minDistance2 = Infinity,
            closestPoint;
        (function find(node, x1, y1, x2, y2) {
          if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0)
            return ;
          if (point = node.point) {
            var point,
                dx = x - node.x,
                dy = y - node.y,
                distance2 = dx * dx + dy * dy;
            if (distance2 < minDistance2) {
              var distance = Math.sqrt(minDistance2 = distance2);
              x0 = x - distance, y0 = y - distance;
              x3 = x + distance, y3 = y + distance;
              closestPoint = point;
            }
          }
          var children = node.nodes,
              xm = (x1 + x2) * .5,
              ym = (y1 + y2) * .5,
              right = x >= xm,
              below = y >= ym;
          for (var i = below << 1 | right,
              j = i + 4; i < j; ++i) {
            if (node = children[i & 3])
              switch (i & 3) {
                case 0:
                  find(node, x1, y1, xm, ym);
                  break;
                case 1:
                  find(node, xm, y1, x2, ym);
                  break;
                case 2:
                  find(node, x1, ym, xm, y2);
                  break;
                case 3:
                  find(node, xm, ym, x2, y2);
                  break;
              }
          }
        })(root, x0, y0, x3, y3);
        return closestPoint;
      }
      d3.interpolateRgb = d3_interpolateRgb;
      function d3_interpolateRgb(a, b) {
        a = d3.rgb(a);
        b = d3.rgb(b);
        var ar = a.r,
            ag = a.g,
            ab = a.b,
            br = b.r - ar,
            bg = b.g - ag,
            bb = b.b - ab;
        return function(t) {
          return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
        };
      }
      d3.interpolateObject = d3_interpolateObject;
      function d3_interpolateObject(a, b) {
        var i = {},
            c = {},
            k;
        for (k in a) {
          if (k in b) {
            i[k] = d3_interpolate(a[k], b[k]);
          } else {
            c[k] = a[k];
          }
        }
        for (k in b) {
          if (!(k in a)) {
            c[k] = b[k];
          }
        }
        return function(t) {
          for (k in i)
            c[k] = i[k](t);
          return c;
        };
      }
      d3.interpolateNumber = d3_interpolateNumber;
      function d3_interpolateNumber(a, b) {
        a = +a, b = +b;
        return function(t) {
          return a * (1 - t) + b * t;
        };
      }
      d3.interpolateString = d3_interpolateString;
      function d3_interpolateString(a, b) {
        var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0,
            am,
            bm,
            bs,
            i = -1,
            s = [],
            q = [];
        a = a + "", b = b + "";
        while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
          if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i])
              s[i] += bs;
            else
              s[++i] = bs;
          }
          if ((am = am[0]) === (bm = bm[0])) {
            if (s[i])
              s[i] += bm;
            else
              s[++i] = bm;
          } else {
            s[++i] = null;
            q.push({
              i: i,
              x: d3_interpolateNumber(am, bm)
            });
          }
          bi = d3_interpolate_numberB.lastIndex;
        }
        if (bi < b.length) {
          bs = b.slice(bi);
          if (s[i])
            s[i] += bs;
          else
            s[++i] = bs;
        }
        return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
          return b(t) + "";
        }) : function() {
          return b;
        } : (b = q.length, function(t) {
          for (var i = 0,
              o; i < b; ++i)
            s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
      }
      var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
      d3.interpolate = d3_interpolate;
      function d3_interpolate(a, b) {
        var i = d3.interpolators.length,
            f;
        while (--i >= 0 && !(f = d3.interpolators[i](a, b)))
          ;
        return f;
      }
      d3.interpolators = [function(a, b) {
        var t = typeof b;
        return (t === "string" ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
      }];
      d3.interpolateArray = d3_interpolateArray;
      function d3_interpolateArray(a, b) {
        var x = [],
            c = [],
            na = a.length,
            nb = b.length,
            n0 = Math.min(a.length, b.length),
            i;
        for (i = 0; i < n0; ++i)
          x.push(d3_interpolate(a[i], b[i]));
        for (; i < na; ++i)
          c[i] = a[i];
        for (; i < nb; ++i)
          c[i] = b[i];
        return function(t) {
          for (i = 0; i < n0; ++i)
            c[i] = x[i](t);
          return c;
        };
      }
      var d3_ease_default = function() {
        return d3_identity;
      };
      var d3_ease = d3.map({
        linear: d3_ease_default,
        poly: d3_ease_poly,
        quad: function() {
          return d3_ease_quad;
        },
        cubic: function() {
          return d3_ease_cubic;
        },
        sin: function() {
          return d3_ease_sin;
        },
        exp: function() {
          return d3_ease_exp;
        },
        circle: function() {
          return d3_ease_circle;
        },
        elastic: d3_ease_elastic,
        back: d3_ease_back,
        bounce: function() {
          return d3_ease_bounce;
        }
      });
      var d3_ease_mode = d3.map({
        "in": d3_identity,
        out: d3_ease_reverse,
        "in-out": d3_ease_reflect,
        "out-in": function(f) {
          return d3_ease_reflect(d3_ease_reverse(f));
        }
      });
      d3.ease = function(name) {
        var i = name.indexOf("-"),
            t = i >= 0 ? name.slice(0, i) : name,
            m = i >= 0 ? name.slice(i + 1) : "in";
        t = d3_ease.get(t) || d3_ease_default;
        m = d3_ease_mode.get(m) || d3_identity;
        return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
      };
      function d3_ease_clamp(f) {
        return function(t) {
          return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
        };
      }
      function d3_ease_reverse(f) {
        return function(t) {
          return 1 - f(1 - t);
        };
      }
      function d3_ease_reflect(f) {
        return function(t) {
          return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
        };
      }
      function d3_ease_quad(t) {
        return t * t;
      }
      function d3_ease_cubic(t) {
        return t * t * t;
      }
      function d3_ease_cubicInOut(t) {
        if (t <= 0)
          return 0;
        if (t >= 1)
          return 1;
        var t2 = t * t,
            t3 = t2 * t;
        return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
      }
      function d3_ease_poly(e) {
        return function(t) {
          return Math.pow(t, e);
        };
      }
      function d3_ease_sin(t) {
        return 1 - Math.cos(t * halfπ);
      }
      function d3_ease_exp(t) {
        return Math.pow(2, 10 * (t - 1));
      }
      function d3_ease_circle(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      function d3_ease_elastic(a, p) {
        var s;
        if (arguments.length < 2)
          p = .45;
        if (arguments.length)
          s = p / τ * Math.asin(1 / a);
        else
          a = 1, s = p / 4;
        return function(t) {
          return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
        };
      }
      function d3_ease_back(s) {
        if (!s)
          s = 1.70158;
        return function(t) {
          return t * t * ((s + 1) * t - s);
        };
      }
      function d3_ease_bounce(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
      }
      d3.interpolateHcl = d3_interpolateHcl;
      function d3_interpolateHcl(a, b) {
        a = d3.hcl(a);
        b = d3.hcl(b);
        var ah = a.h,
            ac = a.c,
            al = a.l,
            bh = b.h - ah,
            bc = b.c - ac,
            bl = b.l - al;
        if (isNaN(bc))
          bc = 0, ac = isNaN(ac) ? b.c : ac;
        if (isNaN(bh))
          bh = 0, ah = isNaN(ah) ? b.h : ah;
        else if (bh > 180)
          bh -= 360;
        else if (bh < -180)
          bh += 360;
        return function(t) {
          return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
        };
      }
      d3.interpolateHsl = d3_interpolateHsl;
      function d3_interpolateHsl(a, b) {
        a = d3.hsl(a);
        b = d3.hsl(b);
        var ah = a.h,
            as = a.s,
            al = a.l,
            bh = b.h - ah,
            bs = b.s - as,
            bl = b.l - al;
        if (isNaN(bs))
          bs = 0, as = isNaN(as) ? b.s : as;
        if (isNaN(bh))
          bh = 0, ah = isNaN(ah) ? b.h : ah;
        else if (bh > 180)
          bh -= 360;
        else if (bh < -180)
          bh += 360;
        return function(t) {
          return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
        };
      }
      d3.interpolateLab = d3_interpolateLab;
      function d3_interpolateLab(a, b) {
        a = d3.lab(a);
        b = d3.lab(b);
        var al = a.l,
            aa = a.a,
            ab = a.b,
            bl = b.l - al,
            ba = b.a - aa,
            bb = b.b - ab;
        return function(t) {
          return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
        };
      }
      d3.interpolateRound = d3_interpolateRound;
      function d3_interpolateRound(a, b) {
        b -= a;
        return function(t) {
          return Math.round(a + b * t);
        };
      }
      d3.transform = function(string) {
        var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
        return (d3.transform = function(string) {
          if (string != null) {
            g.setAttribute("transform", string);
            var t = g.transform.baseVal.consolidate();
          }
          return new d3_transform(t ? t.matrix : d3_transformIdentity);
        })(string);
      };
      function d3_transform(m) {
        var r0 = [m.a, m.b],
            r1 = [m.c, m.d],
            kx = d3_transformNormalize(r0),
            kz = d3_transformDot(r0, r1),
            ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
        if (r0[0] * r1[1] < r1[0] * r0[1]) {
          r0[0] *= -1;
          r0[1] *= -1;
          kx *= -1;
          kz *= -1;
        }
        this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
        this.translate = [m.e, m.f];
        this.scale = [kx, ky];
        this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
      }
      d3_transform.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
      };
      function d3_transformDot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
      }
      function d3_transformNormalize(a) {
        var k = Math.sqrt(d3_transformDot(a, a));
        if (k) {
          a[0] /= k;
          a[1] /= k;
        }
        return k;
      }
      function d3_transformCombine(a, b, k) {
        a[0] += k * b[0];
        a[1] += k * b[1];
        return a;
      }
      var d3_transformIdentity = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      };
      d3.interpolateTransform = d3_interpolateTransform;
      function d3_interpolateTransform(a, b) {
        var s = [],
            q = [],
            n,
            A = d3.transform(a),
            B = d3.transform(b),
            ta = A.translate,
            tb = B.translate,
            ra = A.rotate,
            rb = B.rotate,
            wa = A.skew,
            wb = B.skew,
            ka = A.scale,
            kb = B.scale;
        if (ta[0] != tb[0] || ta[1] != tb[1]) {
          s.push("translate(", null, ",", null, ")");
          q.push({
            i: 1,
            x: d3_interpolateNumber(ta[0], tb[0])
          }, {
            i: 3,
            x: d3_interpolateNumber(ta[1], tb[1])
          });
        } else if (tb[0] || tb[1]) {
          s.push("translate(" + tb + ")");
        } else {
          s.push("");
        }
        if (ra != rb) {
          if (ra - rb > 180)
            rb += 360;
          else if (rb - ra > 180)
            ra += 360;
          q.push({
            i: s.push(s.pop() + "rotate(", null, ")") - 2,
            x: d3_interpolateNumber(ra, rb)
          });
        } else if (rb) {
          s.push(s.pop() + "rotate(" + rb + ")");
        }
        if (wa != wb) {
          q.push({
            i: s.push(s.pop() + "skewX(", null, ")") - 2,
            x: d3_interpolateNumber(wa, wb)
          });
        } else if (wb) {
          s.push(s.pop() + "skewX(" + wb + ")");
        }
        if (ka[0] != kb[0] || ka[1] != kb[1]) {
          n = s.push(s.pop() + "scale(", null, ",", null, ")");
          q.push({
            i: n - 4,
            x: d3_interpolateNumber(ka[0], kb[0])
          }, {
            i: n - 2,
            x: d3_interpolateNumber(ka[1], kb[1])
          });
        } else if (kb[0] != 1 || kb[1] != 1) {
          s.push(s.pop() + "scale(" + kb + ")");
        }
        n = q.length;
        return function(t) {
          var i = -1,
              o;
          while (++i < n)
            s[(o = q[i]).i] = o.x(t);
          return s.join("");
        };
      }
      function d3_uninterpolateNumber(a, b) {
        b = (b -= a = +a) || 1 / b;
        return function(x) {
          return (x - a) / b;
        };
      }
      function d3_uninterpolateClamp(a, b) {
        b = (b -= a = +a) || 1 / b;
        return function(x) {
          return Math.max(0, Math.min(1, (x - a) / b));
        };
      }
      d3.layout = {};
      d3.layout.bundle = function() {
        return function(links) {
          var paths = [],
              i = -1,
              n = links.length;
          while (++i < n)
            paths.push(d3_layout_bundlePath(links[i]));
          return paths;
        };
      };
      function d3_layout_bundlePath(link) {
        var start = link.source,
            end = link.target,
            lca = d3_layout_bundleLeastCommonAncestor(start, end),
            points = [start];
        while (start !== lca) {
          start = start.parent;
          points.push(start);
        }
        var k = points.length;
        while (end !== lca) {
          points.splice(k, 0, end);
          end = end.parent;
        }
        return points;
      }
      function d3_layout_bundleAncestors(node) {
        var ancestors = [],
            parent = node.parent;
        while (parent != null) {
          ancestors.push(node);
          node = parent;
          parent = parent.parent;
        }
        ancestors.push(node);
        return ancestors;
      }
      function d3_layout_bundleLeastCommonAncestor(a, b) {
        if (a === b)
          return a;
        var aNodes = d3_layout_bundleAncestors(a),
            bNodes = d3_layout_bundleAncestors(b),
            aNode = aNodes.pop(),
            bNode = bNodes.pop(),
            sharedNode = null;
        while (aNode === bNode) {
          sharedNode = aNode;
          aNode = aNodes.pop();
          bNode = bNodes.pop();
        }
        return sharedNode;
      }
      d3.layout.chord = function() {
        var chord = {},
            chords,
            groups,
            matrix,
            n,
            padding = 0,
            sortGroups,
            sortSubgroups,
            sortChords;
        function relayout() {
          var subgroups = {},
              groupSums = [],
              groupIndex = d3.range(n),
              subgroupIndex = [],
              k,
              x,
              x0,
              i,
              j;
          chords = [];
          groups = [];
          k = 0, i = -1;
          while (++i < n) {
            x = 0, j = -1;
            while (++j < n) {
              x += matrix[i][j];
            }
            groupSums.push(x);
            subgroupIndex.push(d3.range(n));
            k += x;
          }
          if (sortGroups) {
            groupIndex.sort(function(a, b) {
              return sortGroups(groupSums[a], groupSums[b]);
            });
          }
          if (sortSubgroups) {
            subgroupIndex.forEach(function(d, i) {
              d.sort(function(a, b) {
                return sortSubgroups(matrix[i][a], matrix[i][b]);
              });
            });
          }
          k = (τ - padding * n) / k;
          x = 0, i = -1;
          while (++i < n) {
            x0 = x, j = -1;
            while (++j < n) {
              var di = groupIndex[i],
                  dj = subgroupIndex[di][j],
                  v = matrix[di][dj],
                  a0 = x,
                  a1 = x += v * k;
              subgroups[di + "-" + dj] = {
                index: di,
                subindex: dj,
                startAngle: a0,
                endAngle: a1,
                value: v
              };
            }
            groups[di] = {
              index: di,
              startAngle: x0,
              endAngle: x,
              value: (x - x0) / k
            };
            x += padding;
          }
          i = -1;
          while (++i < n) {
            j = i - 1;
            while (++j < n) {
              var source = subgroups[i + "-" + j],
                  target = subgroups[j + "-" + i];
              if (source.value || target.value) {
                chords.push(source.value < target.value ? {
                  source: target,
                  target: source
                } : {
                  source: source,
                  target: target
                });
              }
            }
          }
          if (sortChords)
            resort();
        }
        function resort() {
          chords.sort(function(a, b) {
            return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
          });
        }
        chord.matrix = function(x) {
          if (!arguments.length)
            return matrix;
          n = (matrix = x) && matrix.length;
          chords = groups = null;
          return chord;
        };
        chord.padding = function(x) {
          if (!arguments.length)
            return padding;
          padding = x;
          chords = groups = null;
          return chord;
        };
        chord.sortGroups = function(x) {
          if (!arguments.length)
            return sortGroups;
          sortGroups = x;
          chords = groups = null;
          return chord;
        };
        chord.sortSubgroups = function(x) {
          if (!arguments.length)
            return sortSubgroups;
          sortSubgroups = x;
          chords = null;
          return chord;
        };
        chord.sortChords = function(x) {
          if (!arguments.length)
            return sortChords;
          sortChords = x;
          if (chords)
            resort();
          return chord;
        };
        chord.chords = function() {
          if (!chords)
            relayout();
          return chords;
        };
        chord.groups = function() {
          if (!groups)
            relayout();
          return groups;
        };
        return chord;
      };
      d3.layout.force = function() {
        var force = {},
            event = d3.dispatch("start", "tick", "end"),
            size = [1, 1],
            drag,
            alpha,
            friction = .9,
            linkDistance = d3_layout_forceLinkDistance,
            linkStrength = d3_layout_forceLinkStrength,
            charge = -30,
            chargeDistance2 = d3_layout_forceChargeDistance2,
            gravity = .1,
            theta2 = .64,
            nodes = [],
            links = [],
            distances,
            strengths,
            charges;
        function repulse(node) {
          return function(quad, x1, _, x2) {
            if (quad.point !== node) {
              var dx = quad.cx - node.x,
                  dy = quad.cy - node.y,
                  dw = x2 - x1,
                  dn = dx * dx + dy * dy;
              if (dw * dw / theta2 < dn) {
                if (dn < chargeDistance2) {
                  var k = quad.charge / dn;
                  node.px -= dx * k;
                  node.py -= dy * k;
                }
                return true;
              }
              if (quad.point && dn && dn < chargeDistance2) {
                var k = quad.pointCharge / dn;
                node.px -= dx * k;
                node.py -= dy * k;
              }
            }
            return !quad.charge;
          };
        }
        force.tick = function() {
          if ((alpha *= .99) < .005) {
            event.end({
              type: "end",
              alpha: alpha = 0
            });
            return true;
          }
          var n = nodes.length,
              m = links.length,
              q,
              i,
              o,
              s,
              t,
              l,
              k,
              x,
              y;
          for (i = 0; i < m; ++i) {
            o = links[i];
            s = o.source;
            t = o.target;
            x = t.x - s.x;
            y = t.y - s.y;
            if (l = x * x + y * y) {
              l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
              x *= l;
              y *= l;
              t.x -= x * (k = s.weight / (t.weight + s.weight));
              t.y -= y * k;
              s.x += x * (k = 1 - k);
              s.y += y * k;
            }
          }
          if (k = alpha * gravity) {
            x = size[0] / 2;
            y = size[1] / 2;
            i = -1;
            if (k)
              while (++i < n) {
                o = nodes[i];
                o.x += (x - o.x) * k;
                o.y += (y - o.y) * k;
              }
          }
          if (charge) {
            d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
            i = -1;
            while (++i < n) {
              if (!(o = nodes[i]).fixed) {
                q.visit(repulse(o));
              }
            }
          }
          i = -1;
          while (++i < n) {
            o = nodes[i];
            if (o.fixed) {
              o.x = o.px;
              o.y = o.py;
            } else {
              o.x -= (o.px - (o.px = o.x)) * friction;
              o.y -= (o.py - (o.py = o.y)) * friction;
            }
          }
          event.tick({
            type: "tick",
            alpha: alpha
          });
        };
        force.nodes = function(x) {
          if (!arguments.length)
            return nodes;
          nodes = x;
          return force;
        };
        force.links = function(x) {
          if (!arguments.length)
            return links;
          links = x;
          return force;
        };
        force.size = function(x) {
          if (!arguments.length)
            return size;
          size = x;
          return force;
        };
        force.linkDistance = function(x) {
          if (!arguments.length)
            return linkDistance;
          linkDistance = typeof x === "function" ? x : +x;
          return force;
        };
        force.distance = force.linkDistance;
        force.linkStrength = function(x) {
          if (!arguments.length)
            return linkStrength;
          linkStrength = typeof x === "function" ? x : +x;
          return force;
        };
        force.friction = function(x) {
          if (!arguments.length)
            return friction;
          friction = +x;
          return force;
        };
        force.charge = function(x) {
          if (!arguments.length)
            return charge;
          charge = typeof x === "function" ? x : +x;
          return force;
        };
        force.chargeDistance = function(x) {
          if (!arguments.length)
            return Math.sqrt(chargeDistance2);
          chargeDistance2 = x * x;
          return force;
        };
        force.gravity = function(x) {
          if (!arguments.length)
            return gravity;
          gravity = +x;
          return force;
        };
        force.theta = function(x) {
          if (!arguments.length)
            return Math.sqrt(theta2);
          theta2 = x * x;
          return force;
        };
        force.alpha = function(x) {
          if (!arguments.length)
            return alpha;
          x = +x;
          if (alpha) {
            if (x > 0)
              alpha = x;
            else
              alpha = 0;
          } else if (x > 0) {
            event.start({
              type: "start",
              alpha: alpha = x
            });
            d3.timer(force.tick);
          }
          return force;
        };
        force.start = function() {
          var i,
              n = nodes.length,
              m = links.length,
              w = size[0],
              h = size[1],
              neighbors,
              o;
          for (i = 0; i < n; ++i) {
            (o = nodes[i]).index = i;
            o.weight = 0;
          }
          for (i = 0; i < m; ++i) {
            o = links[i];
            if (typeof o.source == "number")
              o.source = nodes[o.source];
            if (typeof o.target == "number")
              o.target = nodes[o.target];
            ++o.source.weight;
            ++o.target.weight;
          }
          for (i = 0; i < n; ++i) {
            o = nodes[i];
            if (isNaN(o.x))
              o.x = position("x", w);
            if (isNaN(o.y))
              o.y = position("y", h);
            if (isNaN(o.px))
              o.px = o.x;
            if (isNaN(o.py))
              o.py = o.y;
          }
          distances = [];
          if (typeof linkDistance === "function")
            for (i = 0; i < m; ++i)
              distances[i] = +linkDistance.call(this, links[i], i);
          else
            for (i = 0; i < m; ++i)
              distances[i] = linkDistance;
          strengths = [];
          if (typeof linkStrength === "function")
            for (i = 0; i < m; ++i)
              strengths[i] = +linkStrength.call(this, links[i], i);
          else
            for (i = 0; i < m; ++i)
              strengths[i] = linkStrength;
          charges = [];
          if (typeof charge === "function")
            for (i = 0; i < n; ++i)
              charges[i] = +charge.call(this, nodes[i], i);
          else
            for (i = 0; i < n; ++i)
              charges[i] = charge;
          function position(dimension, size) {
            if (!neighbors) {
              neighbors = new Array(n);
              for (j = 0; j < n; ++j) {
                neighbors[j] = [];
              }
              for (j = 0; j < m; ++j) {
                var o = links[j];
                neighbors[o.source.index].push(o.target);
                neighbors[o.target.index].push(o.source);
              }
            }
            var candidates = neighbors[i],
                j = -1,
                l = candidates.length,
                x;
            while (++j < l)
              if (!isNaN(x = candidates[j][dimension]))
                return x;
            return Math.random() * size;
          }
          return force.resume();
        };
        force.resume = function() {
          return force.alpha(.1);
        };
        force.stop = function() {
          return force.alpha(0);
        };
        force.drag = function() {
          if (!drag)
            drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
          if (!arguments.length)
            return drag;
          this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
        };
        function dragmove(d) {
          d.px = d3.event.x, d.py = d3.event.y;
          force.resume();
        }
        return d3.rebind(force, event, "on");
      };
      function d3_layout_forceDragstart(d) {
        d.fixed |= 2;
      }
      function d3_layout_forceDragend(d) {
        d.fixed &= ~6;
      }
      function d3_layout_forceMouseover(d) {
        d.fixed |= 4;
        d.px = d.x, d.py = d.y;
      }
      function d3_layout_forceMouseout(d) {
        d.fixed &= ~4;
      }
      function d3_layout_forceAccumulate(quad, alpha, charges) {
        var cx = 0,
            cy = 0;
        quad.charge = 0;
        if (!quad.leaf) {
          var nodes = quad.nodes,
              n = nodes.length,
              i = -1,
              c;
          while (++i < n) {
            c = nodes[i];
            if (c == null)
              continue;
            d3_layout_forceAccumulate(c, alpha, charges);
            quad.charge += c.charge;
            cx += c.charge * c.cx;
            cy += c.charge * c.cy;
          }
        }
        if (quad.point) {
          if (!quad.leaf) {
            quad.point.x += Math.random() - .5;
            quad.point.y += Math.random() - .5;
          }
          var k = alpha * charges[quad.point.index];
          quad.charge += quad.pointCharge = k;
          cx += k * quad.point.x;
          cy += k * quad.point.y;
        }
        quad.cx = cx / quad.charge;
        quad.cy = cy / quad.charge;
      }
      var d3_layout_forceLinkDistance = 20,
          d3_layout_forceLinkStrength = 1,
          d3_layout_forceChargeDistance2 = Infinity;
      d3.layout.hierarchy = function() {
        var sort = d3_layout_hierarchySort,
            children = d3_layout_hierarchyChildren,
            value = d3_layout_hierarchyValue;
        function hierarchy(root) {
          var stack = [root],
              nodes = [],
              node;
          root.depth = 0;
          while ((node = stack.pop()) != null) {
            nodes.push(node);
            if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
              var n,
                  childs,
                  child;
              while (--n >= 0) {
                stack.push(child = childs[n]);
                child.parent = node;
                child.depth = node.depth + 1;
              }
              if (value)
                node.value = 0;
              node.children = childs;
            } else {
              if (value)
                node.value = +value.call(hierarchy, node, node.depth) || 0;
              delete node.children;
            }
          }
          d3_layout_hierarchyVisitAfter(root, function(node) {
            var childs,
                parent;
            if (sort && (childs = node.children))
              childs.sort(sort);
            if (value && (parent = node.parent))
              parent.value += node.value;
          });
          return nodes;
        }
        hierarchy.sort = function(x) {
          if (!arguments.length)
            return sort;
          sort = x;
          return hierarchy;
        };
        hierarchy.children = function(x) {
          if (!arguments.length)
            return children;
          children = x;
          return hierarchy;
        };
        hierarchy.value = function(x) {
          if (!arguments.length)
            return value;
          value = x;
          return hierarchy;
        };
        hierarchy.revalue = function(root) {
          if (value) {
            d3_layout_hierarchyVisitBefore(root, function(node) {
              if (node.children)
                node.value = 0;
            });
            d3_layout_hierarchyVisitAfter(root, function(node) {
              var parent;
              if (!node.children)
                node.value = +value.call(hierarchy, node, node.depth) || 0;
              if (parent = node.parent)
                parent.value += node.value;
            });
          }
          return root;
        };
        return hierarchy;
      };
      function d3_layout_hierarchyRebind(object, hierarchy) {
        d3.rebind(object, hierarchy, "sort", "children", "value");
        object.nodes = object;
        object.links = d3_layout_hierarchyLinks;
        return object;
      }
      function d3_layout_hierarchyVisitBefore(node, callback) {
        var nodes = [node];
        while ((node = nodes.pop()) != null) {
          callback(node);
          if ((children = node.children) && (n = children.length)) {
            var n,
                children;
            while (--n >= 0)
              nodes.push(children[n]);
          }
        }
      }
      function d3_layout_hierarchyVisitAfter(node, callback) {
        var nodes = [node],
            nodes2 = [];
        while ((node = nodes.pop()) != null) {
          nodes2.push(node);
          if ((children = node.children) && (n = children.length)) {
            var i = -1,
                n,
                children;
            while (++i < n)
              nodes.push(children[i]);
          }
        }
        while ((node = nodes2.pop()) != null) {
          callback(node);
        }
      }
      function d3_layout_hierarchyChildren(d) {
        return d.children;
      }
      function d3_layout_hierarchyValue(d) {
        return d.value;
      }
      function d3_layout_hierarchySort(a, b) {
        return b.value - a.value;
      }
      function d3_layout_hierarchyLinks(nodes) {
        return d3.merge(nodes.map(function(parent) {
          return (parent.children || []).map(function(child) {
            return {
              source: parent,
              target: child
            };
          });
        }));
      }
      d3.layout.partition = function() {
        var hierarchy = d3.layout.hierarchy(),
            size = [1, 1];
        function position(node, x, dx, dy) {
          var children = node.children;
          node.x = x;
          node.y = node.depth * dy;
          node.dx = dx;
          node.dy = dy;
          if (children && (n = children.length)) {
            var i = -1,
                n,
                c,
                d;
            dx = node.value ? dx / node.value : 0;
            while (++i < n) {
              position(c = children[i], x, d = c.value * dx, dy);
              x += d;
            }
          }
        }
        function depth(node) {
          var children = node.children,
              d = 0;
          if (children && (n = children.length)) {
            var i = -1,
                n;
            while (++i < n)
              d = Math.max(d, depth(children[i]));
          }
          return 1 + d;
        }
        function partition(d, i) {
          var nodes = hierarchy.call(this, d, i);
          position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
          return nodes;
        }
        partition.size = function(x) {
          if (!arguments.length)
            return size;
          size = x;
          return partition;
        };
        return d3_layout_hierarchyRebind(partition, hierarchy);
      };
      d3.layout.pie = function() {
        var value = Number,
            sort = d3_layout_pieSortByValue,
            startAngle = 0,
            endAngle = τ,
            padAngle = 0;
        function pie(data) {
          var n = data.length,
              values = data.map(function(d, i) {
                return +value.call(pie, d, i);
              }),
              a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle),
              da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a,
              p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)),
              pa = p * (da < 0 ? -1 : 1),
              k = (da - n * pa) / d3.sum(values),
              index = d3.range(n),
              arcs = [],
              v;
          if (sort != null)
            index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
              return values[j] - values[i];
            } : function(i, j) {
              return sort(data[i], data[j]);
            });
          index.forEach(function(i) {
            arcs[i] = {
              data: data[i],
              value: v = values[i],
              startAngle: a,
              endAngle: a += v * k + pa,
              padAngle: p
            };
          });
          return arcs;
        }
        pie.value = function(_) {
          if (!arguments.length)
            return value;
          value = _;
          return pie;
        };
        pie.sort = function(_) {
          if (!arguments.length)
            return sort;
          sort = _;
          return pie;
        };
        pie.startAngle = function(_) {
          if (!arguments.length)
            return startAngle;
          startAngle = _;
          return pie;
        };
        pie.endAngle = function(_) {
          if (!arguments.length)
            return endAngle;
          endAngle = _;
          return pie;
        };
        pie.padAngle = function(_) {
          if (!arguments.length)
            return padAngle;
          padAngle = _;
          return pie;
        };
        return pie;
      };
      var d3_layout_pieSortByValue = {};
      d3.layout.stack = function() {
        var values = d3_identity,
            order = d3_layout_stackOrderDefault,
            offset = d3_layout_stackOffsetZero,
            out = d3_layout_stackOut,
            x = d3_layout_stackX,
            y = d3_layout_stackY;
        function stack(data, index) {
          if (!(n = data.length))
            return data;
          var series = data.map(function(d, i) {
            return values.call(stack, d, i);
          });
          var points = series.map(function(d) {
            return d.map(function(v, i) {
              return [x.call(stack, v, i), y.call(stack, v, i)];
            });
          });
          var orders = order.call(stack, points, index);
          series = d3.permute(series, orders);
          points = d3.permute(points, orders);
          var offsets = offset.call(stack, points, index);
          var m = series[0].length,
              n,
              i,
              j,
              o;
          for (j = 0; j < m; ++j) {
            out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
            for (i = 1; i < n; ++i) {
              out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
            }
          }
          return data;
        }
        stack.values = function(x) {
          if (!arguments.length)
            return values;
          values = x;
          return stack;
        };
        stack.order = function(x) {
          if (!arguments.length)
            return order;
          order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
          return stack;
        };
        stack.offset = function(x) {
          if (!arguments.length)
            return offset;
          offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
          return stack;
        };
        stack.x = function(z) {
          if (!arguments.length)
            return x;
          x = z;
          return stack;
        };
        stack.y = function(z) {
          if (!arguments.length)
            return y;
          y = z;
          return stack;
        };
        stack.out = function(z) {
          if (!arguments.length)
            return out;
          out = z;
          return stack;
        };
        return stack;
      };
      function d3_layout_stackX(d) {
        return d.x;
      }
      function d3_layout_stackY(d) {
        return d.y;
      }
      function d3_layout_stackOut(d, y0, y) {
        d.y0 = y0;
        d.y = y;
      }
      var d3_layout_stackOrders = d3.map({
        "inside-out": function(data) {
          var n = data.length,
              i,
              j,
              max = data.map(d3_layout_stackMaxIndex),
              sums = data.map(d3_layout_stackReduceSum),
              index = d3.range(n).sort(function(a, b) {
                return max[a] - max[b];
              }),
              top = 0,
              bottom = 0,
              tops = [],
              bottoms = [];
          for (i = 0; i < n; ++i) {
            j = index[i];
            if (top < bottom) {
              top += sums[j];
              tops.push(j);
            } else {
              bottom += sums[j];
              bottoms.push(j);
            }
          }
          return bottoms.reverse().concat(tops);
        },
        reverse: function(data) {
          return d3.range(data.length).reverse();
        },
        "default": d3_layout_stackOrderDefault
      });
      var d3_layout_stackOffsets = d3.map({
        silhouette: function(data) {
          var n = data.length,
              m = data[0].length,
              sums = [],
              max = 0,
              i,
              j,
              o,
              y0 = [];
          for (j = 0; j < m; ++j) {
            for (i = 0, o = 0; i < n; i++)
              o += data[i][j][1];
            if (o > max)
              max = o;
            sums.push(o);
          }
          for (j = 0; j < m; ++j) {
            y0[j] = (max - sums[j]) / 2;
          }
          return y0;
        },
        wiggle: function(data) {
          var n = data.length,
              x = data[0],
              m = x.length,
              i,
              j,
              k,
              s1,
              s2,
              s3,
              dx,
              o,
              o0,
              y0 = [];
          y0[0] = o = o0 = 0;
          for (j = 1; j < m; ++j) {
            for (i = 0, s1 = 0; i < n; ++i)
              s1 += data[i][j][1];
            for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
              for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
                s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
              }
              s2 += s3 * data[i][j][1];
            }
            y0[j] = o -= s1 ? s2 / s1 * dx : 0;
            if (o < o0)
              o0 = o;
          }
          for (j = 0; j < m; ++j)
            y0[j] -= o0;
          return y0;
        },
        expand: function(data) {
          var n = data.length,
              m = data[0].length,
              k = 1 / n,
              i,
              j,
              o,
              y0 = [];
          for (j = 0; j < m; ++j) {
            for (i = 0, o = 0; i < n; i++)
              o += data[i][j][1];
            if (o)
              for (i = 0; i < n; i++)
                data[i][j][1] /= o;
            else
              for (i = 0; i < n; i++)
                data[i][j][1] = k;
          }
          for (j = 0; j < m; ++j)
            y0[j] = 0;
          return y0;
        },
        zero: d3_layout_stackOffsetZero
      });
      function d3_layout_stackOrderDefault(data) {
        return d3.range(data.length);
      }
      function d3_layout_stackOffsetZero(data) {
        var j = -1,
            m = data[0].length,
            y0 = [];
        while (++j < m)
          y0[j] = 0;
        return y0;
      }
      function d3_layout_stackMaxIndex(array) {
        var i = 1,
            j = 0,
            v = array[0][1],
            k,
            n = array.length;
        for (; i < n; ++i) {
          if ((k = array[i][1]) > v) {
            j = i;
            v = k;
          }
        }
        return j;
      }
      function d3_layout_stackReduceSum(d) {
        return d.reduce(d3_layout_stackSum, 0);
      }
      function d3_layout_stackSum(p, d) {
        return p + d[1];
      }
      d3.layout.histogram = function() {
        var frequency = true,
            valuer = Number,
            ranger = d3_layout_histogramRange,
            binner = d3_layout_histogramBinSturges;
        function histogram(data, i) {
          var bins = [],
              values = data.map(valuer, this),
              range = ranger.call(this, values, i),
              thresholds = binner.call(this, range, values, i),
              bin,
              i = -1,
              n = values.length,
              m = thresholds.length - 1,
              k = frequency ? 1 : 1 / n,
              x;
          while (++i < m) {
            bin = bins[i] = [];
            bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
            bin.y = 0;
          }
          if (m > 0) {
            i = -1;
            while (++i < n) {
              x = values[i];
              if (x >= range[0] && x <= range[1]) {
                bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
                bin.y += k;
                bin.push(data[i]);
              }
            }
          }
          return bins;
        }
        histogram.value = function(x) {
          if (!arguments.length)
            return valuer;
          valuer = x;
          return histogram;
        };
        histogram.range = function(x) {
          if (!arguments.length)
            return ranger;
          ranger = d3_functor(x);
          return histogram;
        };
        histogram.bins = function(x) {
          if (!arguments.length)
            return binner;
          binner = typeof x === "number" ? function(range) {
            return d3_layout_histogramBinFixed(range, x);
          } : d3_functor(x);
          return histogram;
        };
        histogram.frequency = function(x) {
          if (!arguments.length)
            return frequency;
          frequency = !!x;
          return histogram;
        };
        return histogram;
      };
      function d3_layout_histogramBinSturges(range, values) {
        return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
      }
      function d3_layout_histogramBinFixed(range, n) {
        var x = -1,
            b = +range[0],
            m = (range[1] - b) / n,
            f = [];
        while (++x <= n)
          f[x] = m * x + b;
        return f;
      }
      function d3_layout_histogramRange(values) {
        return [d3.min(values), d3.max(values)];
      }
      d3.layout.pack = function() {
        var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort),
            padding = 0,
            size = [1, 1],
            radius;
        function pack(d, i) {
          var nodes = hierarchy.call(this, d, i),
              root = nodes[0],
              w = size[0],
              h = size[1],
              r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
                return radius;
              };
          root.x = root.y = 0;
          d3_layout_hierarchyVisitAfter(root, function(d) {
            d.r = +r(d.value);
          });
          d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
          if (padding) {
            var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
            d3_layout_hierarchyVisitAfter(root, function(d) {
              d.r += dr;
            });
            d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
            d3_layout_hierarchyVisitAfter(root, function(d) {
              d.r -= dr;
            });
          }
          d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
          return nodes;
        }
        pack.size = function(_) {
          if (!arguments.length)
            return size;
          size = _;
          return pack;
        };
        pack.radius = function(_) {
          if (!arguments.length)
            return radius;
          radius = _ == null || typeof _ === "function" ? _ : +_;
          return pack;
        };
        pack.padding = function(_) {
          if (!arguments.length)
            return padding;
          padding = +_;
          return pack;
        };
        return d3_layout_hierarchyRebind(pack, hierarchy);
      };
      function d3_layout_packSort(a, b) {
        return a.value - b.value;
      }
      function d3_layout_packInsert(a, b) {
        var c = a._pack_next;
        a._pack_next = b;
        b._pack_prev = a;
        b._pack_next = c;
        c._pack_prev = b;
      }
      function d3_layout_packSplice(a, b) {
        a._pack_next = b;
        b._pack_prev = a;
      }
      function d3_layout_packIntersects(a, b) {
        var dx = b.x - a.x,
            dy = b.y - a.y,
            dr = a.r + b.r;
        return .999 * dr * dr > dx * dx + dy * dy;
      }
      function d3_layout_packSiblings(node) {
        if (!(nodes = node.children) || !(n = nodes.length))
          return ;
        var nodes,
            xMin = Infinity,
            xMax = -Infinity,
            yMin = Infinity,
            yMax = -Infinity,
            a,
            b,
            c,
            i,
            j,
            k,
            n;
        function bound(node) {
          xMin = Math.min(node.x - node.r, xMin);
          xMax = Math.max(node.x + node.r, xMax);
          yMin = Math.min(node.y - node.r, yMin);
          yMax = Math.max(node.y + node.r, yMax);
        }
        nodes.forEach(d3_layout_packLink);
        a = nodes[0];
        a.x = -a.r;
        a.y = 0;
        bound(a);
        if (n > 1) {
          b = nodes[1];
          b.x = b.r;
          b.y = 0;
          bound(b);
          if (n > 2) {
            c = nodes[2];
            d3_layout_packPlace(a, b, c);
            bound(c);
            d3_layout_packInsert(a, c);
            a._pack_prev = c;
            d3_layout_packInsert(c, b);
            b = a._pack_next;
            for (i = 3; i < n; i++) {
              d3_layout_packPlace(a, b, c = nodes[i]);
              var isect = 0,
                  s1 = 1,
                  s2 = 1;
              for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
                if (d3_layout_packIntersects(j, c)) {
                  isect = 1;
                  break;
                }
              }
              if (isect == 1) {
                for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
                  if (d3_layout_packIntersects(k, c)) {
                    break;
                  }
                }
              }
              if (isect) {
                if (s1 < s2 || s1 == s2 && b.r < a.r)
                  d3_layout_packSplice(a, b = j);
                else
                  d3_layout_packSplice(a = k, b);
                i--;
              } else {
                d3_layout_packInsert(a, c);
                b = c;
                bound(c);
              }
            }
          }
        }
        var cx = (xMin + xMax) / 2,
            cy = (yMin + yMax) / 2,
            cr = 0;
        for (i = 0; i < n; i++) {
          c = nodes[i];
          c.x -= cx;
          c.y -= cy;
          cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
        }
        node.r = cr;
        nodes.forEach(d3_layout_packUnlink);
      }
      function d3_layout_packLink(node) {
        node._pack_next = node._pack_prev = node;
      }
      function d3_layout_packUnlink(node) {
        delete node._pack_next;
        delete node._pack_prev;
      }
      function d3_layout_packTransform(node, x, y, k) {
        var children = node.children;
        node.x = x += k * node.x;
        node.y = y += k * node.y;
        node.r *= k;
        if (children) {
          var i = -1,
              n = children.length;
          while (++i < n)
            d3_layout_packTransform(children[i], x, y, k);
        }
      }
      function d3_layout_packPlace(a, b, c) {
        var db = a.r + c.r,
            dx = b.x - a.x,
            dy = b.y - a.y;
        if (db && (dx || dy)) {
          var da = b.r + c.r,
              dc = dx * dx + dy * dy;
          da *= da;
          db *= db;
          var x = .5 + (db - da) / (2 * dc),
              y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
          c.x = a.x + x * dx + y * dy;
          c.y = a.y + x * dy - y * dx;
        } else {
          c.x = a.x + db;
          c.y = a.y;
        }
      }
      d3.layout.tree = function() {
        var hierarchy = d3.layout.hierarchy().sort(null).value(null),
            separation = d3_layout_treeSeparation,
            size = [1, 1],
            nodeSize = null;
        function tree(d, i) {
          var nodes = hierarchy.call(this, d, i),
              root0 = nodes[0],
              root1 = wrapTree(root0);
          d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
          d3_layout_hierarchyVisitBefore(root1, secondWalk);
          if (nodeSize)
            d3_layout_hierarchyVisitBefore(root0, sizeNode);
          else {
            var left = root0,
                right = root0,
                bottom = root0;
            d3_layout_hierarchyVisitBefore(root0, function(node) {
              if (node.x < left.x)
                left = node;
              if (node.x > right.x)
                right = node;
              if (node.depth > bottom.depth)
                bottom = node;
            });
            var tx = separation(left, right) / 2 - left.x,
                kx = size[0] / (right.x + separation(right, left) / 2 + tx),
                ky = size[1] / (bottom.depth || 1);
            d3_layout_hierarchyVisitBefore(root0, function(node) {
              node.x = (node.x + tx) * kx;
              node.y = node.depth * ky;
            });
          }
          return nodes;
        }
        function wrapTree(root0) {
          var root1 = {
            A: null,
            children: [root0]
          },
              queue = [root1],
              node1;
          while ((node1 = queue.pop()) != null) {
            for (var children = node1.children,
                child,
                i = 0,
                n = children.length; i < n; ++i) {
              queue.push((children[i] = child = {
                _: children[i],
                parent: node1,
                children: (child = children[i].children) && child.slice() || [],
                A: null,
                a: null,
                z: 0,
                m: 0,
                c: 0,
                s: 0,
                t: null,
                i: i
              }).a = child);
            }
          }
          return root1.children[0];
        }
        function firstWalk(v) {
          var children = v.children,
              siblings = v.parent.children,
              w = v.i ? siblings[v.i - 1] : null;
          if (children.length) {
            d3_layout_treeShift(v);
            var midpoint = (children[0].z + children[children.length - 1].z) / 2;
            if (w) {
              v.z = w.z + separation(v._, w._);
              v.m = v.z - midpoint;
            } else {
              v.z = midpoint;
            }
          } else if (w) {
            v.z = w.z + separation(v._, w._);
          }
          v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
        }
        function secondWalk(v) {
          v._.x = v.z + v.parent.m;
          v.m += v.parent.m;
        }
        function apportion(v, w, ancestor) {
          if (w) {
            var vip = v,
                vop = v,
                vim = w,
                vom = vip.parent.children[0],
                sip = vip.m,
                sop = vop.m,
                sim = vim.m,
                som = vom.m,
                shift;
            while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
              vom = d3_layout_treeLeft(vom);
              vop = d3_layout_treeRight(vop);
              vop.a = v;
              shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
              if (shift > 0) {
                d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
                sip += shift;
                sop += shift;
              }
              sim += vim.m;
              sip += vip.m;
              som += vom.m;
              sop += vop.m;
            }
            if (vim && !d3_layout_treeRight(vop)) {
              vop.t = vim;
              vop.m += sim - sop;
            }
            if (vip && !d3_layout_treeLeft(vom)) {
              vom.t = vip;
              vom.m += sip - som;
              ancestor = v;
            }
          }
          return ancestor;
        }
        function sizeNode(node) {
          node.x *= size[0];
          node.y = node.depth * size[1];
        }
        tree.separation = function(x) {
          if (!arguments.length)
            return separation;
          separation = x;
          return tree;
        };
        tree.size = function(x) {
          if (!arguments.length)
            return nodeSize ? null : size;
          nodeSize = (size = x) == null ? sizeNode : null;
          return tree;
        };
        tree.nodeSize = function(x) {
          if (!arguments.length)
            return nodeSize ? size : null;
          nodeSize = (size = x) == null ? null : sizeNode;
          return tree;
        };
        return d3_layout_hierarchyRebind(tree, hierarchy);
      };
      function d3_layout_treeSeparation(a, b) {
        return a.parent == b.parent ? 1 : 2;
      }
      function d3_layout_treeLeft(v) {
        var children = v.children;
        return children.length ? children[0] : v.t;
      }
      function d3_layout_treeRight(v) {
        var children = v.children,
            n;
        return (n = children.length) ? children[n - 1] : v.t;
      }
      function d3_layout_treeMove(wm, wp, shift) {
        var change = shift / (wp.i - wm.i);
        wp.c -= change;
        wp.s += shift;
        wm.c += change;
        wp.z += shift;
        wp.m += shift;
      }
      function d3_layout_treeShift(v) {
        var shift = 0,
            change = 0,
            children = v.children,
            i = children.length,
            w;
        while (--i >= 0) {
          w = children[i];
          w.z += shift;
          w.m += shift;
          shift += w.s + (change += w.c);
        }
      }
      function d3_layout_treeAncestor(vim, v, ancestor) {
        return vim.a.parent === v.parent ? vim.a : ancestor;
      }
      d3.layout.cluster = function() {
        var hierarchy = d3.layout.hierarchy().sort(null).value(null),
            separation = d3_layout_treeSeparation,
            size = [1, 1],
            nodeSize = false;
        function cluster(d, i) {
          var nodes = hierarchy.call(this, d, i),
              root = nodes[0],
              previousNode,
              x = 0;
          d3_layout_hierarchyVisitAfter(root, function(node) {
            var children = node.children;
            if (children && children.length) {
              node.x = d3_layout_clusterX(children);
              node.y = d3_layout_clusterY(children);
            } else {
              node.x = previousNode ? x += separation(node, previousNode) : 0;
              node.y = 0;
              previousNode = node;
            }
          });
          var left = d3_layout_clusterLeft(root),
              right = d3_layout_clusterRight(root),
              x0 = left.x - separation(left, right) / 2,
              x1 = right.x + separation(right, left) / 2;
          d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
            node.x = (node.x - root.x) * size[0];
            node.y = (root.y - node.y) * size[1];
          } : function(node) {
            node.x = (node.x - x0) / (x1 - x0) * size[0];
            node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
          });
          return nodes;
        }
        cluster.separation = function(x) {
          if (!arguments.length)
            return separation;
          separation = x;
          return cluster;
        };
        cluster.size = function(x) {
          if (!arguments.length)
            return nodeSize ? null : size;
          nodeSize = (size = x) == null;
          return cluster;
        };
        cluster.nodeSize = function(x) {
          if (!arguments.length)
            return nodeSize ? size : null;
          nodeSize = (size = x) != null;
          return cluster;
        };
        return d3_layout_hierarchyRebind(cluster, hierarchy);
      };
      function d3_layout_clusterY(children) {
        return 1 + d3.max(children, function(child) {
          return child.y;
        });
      }
      function d3_layout_clusterX(children) {
        return children.reduce(function(x, child) {
          return x + child.x;
        }, 0) / children.length;
      }
      function d3_layout_clusterLeft(node) {
        var children = node.children;
        return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
      }
      function d3_layout_clusterRight(node) {
        var children = node.children,
            n;
        return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
      }
      d3.layout.treemap = function() {
        var hierarchy = d3.layout.hierarchy(),
            round = Math.round,
            size = [1, 1],
            padding = null,
            pad = d3_layout_treemapPadNull,
            sticky = false,
            stickies,
            mode = "squarify",
            ratio = .5 * (1 + Math.sqrt(5));
        function scale(children, k) {
          var i = -1,
              n = children.length,
              child,
              area;
          while (++i < n) {
            area = (child = children[i]).value * (k < 0 ? 0 : k);
            child.area = isNaN(area) || area <= 0 ? 0 : area;
          }
        }
        function squarify(node) {
          var children = node.children;
          if (children && children.length) {
            var rect = pad(node),
                row = [],
                remaining = children.slice(),
                child,
                best = Infinity,
                score,
                u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy),
                n;
            scale(remaining, rect.dx * rect.dy / node.value);
            row.area = 0;
            while ((n = remaining.length) > 0) {
              row.push(child = remaining[n - 1]);
              row.area += child.area;
              if (mode !== "squarify" || (score = worst(row, u)) <= best) {
                remaining.pop();
                best = score;
              } else {
                row.area -= row.pop().area;
                position(row, u, rect, false);
                u = Math.min(rect.dx, rect.dy);
                row.length = row.area = 0;
                best = Infinity;
              }
            }
            if (row.length) {
              position(row, u, rect, true);
              row.length = row.area = 0;
            }
            children.forEach(squarify);
          }
        }
        function stickify(node) {
          var children = node.children;
          if (children && children.length) {
            var rect = pad(node),
                remaining = children.slice(),
                child,
                row = [];
            scale(remaining, rect.dx * rect.dy / node.value);
            row.area = 0;
            while (child = remaining.pop()) {
              row.push(child);
              row.area += child.area;
              if (child.z != null) {
                position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
                row.length = row.area = 0;
              }
            }
            children.forEach(stickify);
          }
        }
        function worst(row, u) {
          var s = row.area,
              r,
              rmax = 0,
              rmin = Infinity,
              i = -1,
              n = row.length;
          while (++i < n) {
            if (!(r = row[i].area))
              continue;
            if (r < rmin)
              rmin = r;
            if (r > rmax)
              rmax = r;
          }
          s *= s;
          u *= u;
          return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
        }
        function position(row, u, rect, flush) {
          var i = -1,
              n = row.length,
              x = rect.x,
              y = rect.y,
              v = u ? round(row.area / u) : 0,
              o;
          if (u == rect.dx) {
            if (flush || v > rect.dy)
              v = rect.dy;
            while (++i < n) {
              o = row[i];
              o.x = x;
              o.y = y;
              o.dy = v;
              x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
            }
            o.z = true;
            o.dx += rect.x + rect.dx - x;
            rect.y += v;
            rect.dy -= v;
          } else {
            if (flush || v > rect.dx)
              v = rect.dx;
            while (++i < n) {
              o = row[i];
              o.x = x;
              o.y = y;
              o.dx = v;
              y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
            }
            o.z = false;
            o.dy += rect.y + rect.dy - y;
            rect.x += v;
            rect.dx -= v;
          }
        }
        function treemap(d) {
          var nodes = stickies || hierarchy(d),
              root = nodes[0];
          root.x = 0;
          root.y = 0;
          root.dx = size[0];
          root.dy = size[1];
          if (stickies)
            hierarchy.revalue(root);
          scale([root], root.dx * root.dy / root.value);
          (stickies ? stickify : squarify)(root);
          if (sticky)
            stickies = nodes;
          return nodes;
        }
        treemap.size = function(x) {
          if (!arguments.length)
            return size;
          size = x;
          return treemap;
        };
        treemap.padding = function(x) {
          if (!arguments.length)
            return padding;
          function padFunction(node) {
            var p = x.call(treemap, node, node.depth);
            return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [p, p, p, p] : p);
          }
          function padConstant(node) {
            return d3_layout_treemapPad(node, x);
          }
          var type;
          pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [x, x, x, x], padConstant) : padConstant;
          return treemap;
        };
        treemap.round = function(x) {
          if (!arguments.length)
            return round != Number;
          round = x ? Math.round : Number;
          return treemap;
        };
        treemap.sticky = function(x) {
          if (!arguments.length)
            return sticky;
          sticky = x;
          stickies = null;
          return treemap;
        };
        treemap.ratio = function(x) {
          if (!arguments.length)
            return ratio;
          ratio = x;
          return treemap;
        };
        treemap.mode = function(x) {
          if (!arguments.length)
            return mode;
          mode = x + "";
          return treemap;
        };
        return d3_layout_hierarchyRebind(treemap, hierarchy);
      };
      function d3_layout_treemapPadNull(node) {
        return {
          x: node.x,
          y: node.y,
          dx: node.dx,
          dy: node.dy
        };
      }
      function d3_layout_treemapPad(node, padding) {
        var x = node.x + padding[3],
            y = node.y + padding[0],
            dx = node.dx - padding[1] - padding[3],
            dy = node.dy - padding[0] - padding[2];
        if (dx < 0) {
          x += dx / 2;
          dx = 0;
        }
        if (dy < 0) {
          y += dy / 2;
          dy = 0;
        }
        return {
          x: x,
          y: y,
          dx: dx,
          dy: dy
        };
      }
      d3.random = {
        normal: function(µ, σ) {
          var n = arguments.length;
          if (n < 2)
            σ = 1;
          if (n < 1)
            µ = 0;
          return function() {
            var x,
                y,
                r;
            do {
              x = Math.random() * 2 - 1;
              y = Math.random() * 2 - 1;
              r = x * x + y * y;
            } while (!r || r > 1);
            return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
          };
        },
        logNormal: function() {
          var random = d3.random.normal.apply(d3, arguments);
          return function() {
            return Math.exp(random());
          };
        },
        bates: function(m) {
          var random = d3.random.irwinHall(m);
          return function() {
            return random() / m;
          };
        },
        irwinHall: function(m) {
          return function() {
            for (var s = 0,
                j = 0; j < m; j++)
              s += Math.random();
            return s;
          };
        }
      };
      d3.scale = {};
      function d3_scaleExtent(domain) {
        var start = domain[0],
            stop = domain[domain.length - 1];
        return start < stop ? [start, stop] : [stop, start];
      }
      function d3_scaleRange(scale) {
        return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
      }
      function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
        var u = uninterpolate(domain[0], domain[1]),
            i = interpolate(range[0], range[1]);
        return function(x) {
          return i(u(x));
        };
      }
      function d3_scale_nice(domain, nice) {
        var i0 = 0,
            i1 = domain.length - 1,
            x0 = domain[i0],
            x1 = domain[i1],
            dx;
        if (x1 < x0) {
          dx = i0, i0 = i1, i1 = dx;
          dx = x0, x0 = x1, x1 = dx;
        }
        domain[i0] = nice.floor(x0);
        domain[i1] = nice.ceil(x1);
        return domain;
      }
      function d3_scale_niceStep(step) {
        return step ? {
          floor: function(x) {
            return Math.floor(x / step) * step;
          },
          ceil: function(x) {
            return Math.ceil(x / step) * step;
          }
        } : d3_scale_niceIdentity;
      }
      var d3_scale_niceIdentity = {
        floor: d3_identity,
        ceil: d3_identity
      };
      function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
        var u = [],
            i = [],
            j = 0,
            k = Math.min(domain.length, range.length) - 1;
        if (domain[k] < domain[0]) {
          domain = domain.slice().reverse();
          range = range.slice().reverse();
        }
        while (++j <= k) {
          u.push(uninterpolate(domain[j - 1], domain[j]));
          i.push(interpolate(range[j - 1], range[j]));
        }
        return function(x) {
          var j = d3.bisect(domain, x, 1, k) - 1;
          return i[j](u[j](x));
        };
      }
      d3.scale.linear = function() {
        return d3_scale_linear([0, 1], [0, 1], d3_interpolate, false);
      };
      function d3_scale_linear(domain, range, interpolate, clamp) {
        var output,
            input;
        function rescale() {
          var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear,
              uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
          output = linear(domain, range, uninterpolate, interpolate);
          input = linear(range, domain, uninterpolate, d3_interpolate);
          return scale;
        }
        function scale(x) {
          return output(x);
        }
        scale.invert = function(y) {
          return input(y);
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          domain = x.map(Number);
          return rescale();
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          return rescale();
        };
        scale.rangeRound = function(x) {
          return scale.range(x).interpolate(d3_interpolateRound);
        };
        scale.clamp = function(x) {
          if (!arguments.length)
            return clamp;
          clamp = x;
          return rescale();
        };
        scale.interpolate = function(x) {
          if (!arguments.length)
            return interpolate;
          interpolate = x;
          return rescale();
        };
        scale.ticks = function(m) {
          return d3_scale_linearTicks(domain, m);
        };
        scale.tickFormat = function(m, format) {
          return d3_scale_linearTickFormat(domain, m, format);
        };
        scale.nice = function(m) {
          d3_scale_linearNice(domain, m);
          return rescale();
        };
        scale.copy = function() {
          return d3_scale_linear(domain, range, interpolate, clamp);
        };
        return rescale();
      }
      function d3_scale_linearRebind(scale, linear) {
        return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
      }
      function d3_scale_linearNice(domain, m) {
        return d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
      }
      function d3_scale_linearTickRange(domain, m) {
        if (m == null)
          m = 10;
        var extent = d3_scaleExtent(domain),
            span = extent[1] - extent[0],
            step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
            err = m / span * step;
        if (err <= .15)
          step *= 10;
        else if (err <= .35)
          step *= 5;
        else if (err <= .75)
          step *= 2;
        extent[0] = Math.ceil(extent[0] / step) * step;
        extent[1] = Math.floor(extent[1] / step) * step + step * .5;
        extent[2] = step;
        return extent;
      }
      function d3_scale_linearTicks(domain, m) {
        return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
      }
      function d3_scale_linearTickFormat(domain, m, format) {
        var range = d3_scale_linearTickRange(domain, m);
        if (format) {
          var match = d3_format_re.exec(format);
          match.shift();
          if (match[8] === "s") {
            var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
            if (!match[7])
              match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
            match[8] = "f";
            format = d3.format(match.join(""));
            return function(d) {
              return format(prefix.scale(d)) + prefix.symbol;
            };
          }
          if (!match[7])
            match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
          format = match.join("");
        } else {
          format = ",." + d3_scale_linearPrecision(range[2]) + "f";
        }
        return d3.format(format);
      }
      var d3_scale_linearFormatSignificant = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
      };
      function d3_scale_linearPrecision(value) {
        return -Math.floor(Math.log(value) / Math.LN10 + .01);
      }
      function d3_scale_linearFormatPrecision(type, range) {
        var p = d3_scale_linearPrecision(range[2]);
        return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
      }
      d3.scale.log = function() {
        return d3_scale_log(d3.scale.linear().domain([0, 1]), 10, true, [1, 10]);
      };
      function d3_scale_log(linear, base, positive, domain) {
        function log(x) {
          return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
        }
        function pow(x) {
          return positive ? Math.pow(base, x) : -Math.pow(base, -x);
        }
        function scale(x) {
          return linear(log(x));
        }
        scale.invert = function(x) {
          return pow(linear.invert(x));
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          positive = x[0] >= 0;
          linear.domain((domain = x.map(Number)).map(log));
          return scale;
        };
        scale.base = function(_) {
          if (!arguments.length)
            return base;
          base = +_;
          linear.domain(domain.map(log));
          return scale;
        };
        scale.nice = function() {
          var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
          linear.domain(niced);
          domain = niced.map(pow);
          return scale;
        };
        scale.ticks = function() {
          var extent = d3_scaleExtent(domain),
              ticks = [],
              u = extent[0],
              v = extent[1],
              i = Math.floor(log(u)),
              j = Math.ceil(log(v)),
              n = base % 1 ? 2 : base;
          if (isFinite(j - i)) {
            if (positive) {
              for (; i < j; i++)
                for (var k = 1; k < n; k++)
                  ticks.push(pow(i) * k);
              ticks.push(pow(i));
            } else {
              ticks.push(pow(i));
              for (; i++ < j; )
                for (var k = n - 1; k > 0; k--)
                  ticks.push(pow(i) * k);
            }
            for (i = 0; ticks[i] < u; i++) {}
            for (j = ticks.length; ticks[j - 1] > v; j--) {}
            ticks = ticks.slice(i, j);
          }
          return ticks;
        };
        scale.tickFormat = function(n, format) {
          if (!arguments.length)
            return d3_scale_logFormat;
          if (arguments.length < 2)
            format = d3_scale_logFormat;
          else if (typeof format !== "function")
            format = d3.format(format);
          var k = Math.max(.1, n / scale.ticks().length),
              f = positive ? (e = 1e-12, Math.ceil) : (e = -1e-12, Math.floor),
              e;
          return function(d) {
            return d / pow(f(log(d) + e)) <= k ? format(d) : "";
          };
        };
        scale.copy = function() {
          return d3_scale_log(linear.copy(), base, positive, domain);
        };
        return d3_scale_linearRebind(scale, linear);
      }
      var d3_scale_logFormat = d3.format(".0e"),
          d3_scale_logNiceNegative = {
            floor: function(x) {
              return -Math.ceil(-x);
            },
            ceil: function(x) {
              return -Math.floor(-x);
            }
          };
      d3.scale.pow = function() {
        return d3_scale_pow(d3.scale.linear(), 1, [0, 1]);
      };
      function d3_scale_pow(linear, exponent, domain) {
        var powp = d3_scale_powPow(exponent),
            powb = d3_scale_powPow(1 / exponent);
        function scale(x) {
          return linear(powp(x));
        }
        scale.invert = function(x) {
          return powb(linear.invert(x));
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          linear.domain((domain = x.map(Number)).map(powp));
          return scale;
        };
        scale.ticks = function(m) {
          return d3_scale_linearTicks(domain, m);
        };
        scale.tickFormat = function(m, format) {
          return d3_scale_linearTickFormat(domain, m, format);
        };
        scale.nice = function(m) {
          return scale.domain(d3_scale_linearNice(domain, m));
        };
        scale.exponent = function(x) {
          if (!arguments.length)
            return exponent;
          powp = d3_scale_powPow(exponent = x);
          powb = d3_scale_powPow(1 / exponent);
          linear.domain(domain.map(powp));
          return scale;
        };
        scale.copy = function() {
          return d3_scale_pow(linear.copy(), exponent, domain);
        };
        return d3_scale_linearRebind(scale, linear);
      }
      function d3_scale_powPow(e) {
        return function(x) {
          return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
        };
      }
      d3.scale.sqrt = function() {
        return d3.scale.pow().exponent(.5);
      };
      d3.scale.ordinal = function() {
        return d3_scale_ordinal([], {
          t: "range",
          a: [[]]
        });
      };
      function d3_scale_ordinal(domain, ranger) {
        var index,
            range,
            rangeBand;
        function scale(x) {
          return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
        }
        function steps(start, step) {
          return d3.range(domain.length).map(function(i) {
            return start + step * i;
          });
        }
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          domain = [];
          index = new d3_Map();
          var i = -1,
              n = x.length,
              xi;
          while (++i < n)
            if (!index.has(xi = x[i]))
              index.set(xi, domain.push(xi));
          return scale[ranger.t].apply(scale, ranger.a);
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          rangeBand = 0;
          ranger = {
            t: "range",
            a: arguments
          };
          return scale;
        };
        scale.rangePoints = function(x, padding) {
          if (arguments.length < 2)
            padding = 0;
          var start = x[0],
              stop = x[1],
              step = domain.length < 2 ? (start = (start + stop) / 2, 0) : (stop - start) / (domain.length - 1 + padding);
          range = steps(start + step * padding / 2, step);
          rangeBand = 0;
          ranger = {
            t: "rangePoints",
            a: arguments
          };
          return scale;
        };
        scale.rangeRoundPoints = function(x, padding) {
          if (arguments.length < 2)
            padding = 0;
          var start = x[0],
              stop = x[1],
              step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 0) : (stop - start) / (domain.length - 1 + padding) | 0;
          range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
          rangeBand = 0;
          ranger = {
            t: "rangeRoundPoints",
            a: arguments
          };
          return scale;
        };
        scale.rangeBands = function(x, padding, outerPadding) {
          if (arguments.length < 2)
            padding = 0;
          if (arguments.length < 3)
            outerPadding = padding;
          var reverse = x[1] < x[0],
              start = x[reverse - 0],
              stop = x[1 - reverse],
              step = (stop - start) / (domain.length - padding + 2 * outerPadding);
          range = steps(start + step * outerPadding, step);
          if (reverse)
            range.reverse();
          rangeBand = step * (1 - padding);
          ranger = {
            t: "rangeBands",
            a: arguments
          };
          return scale;
        };
        scale.rangeRoundBands = function(x, padding, outerPadding) {
          if (arguments.length < 2)
            padding = 0;
          if (arguments.length < 3)
            outerPadding = padding;
          var reverse = x[1] < x[0],
              start = x[reverse - 0],
              stop = x[1 - reverse],
              step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
          range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
          if (reverse)
            range.reverse();
          rangeBand = Math.round(step * (1 - padding));
          ranger = {
            t: "rangeRoundBands",
            a: arguments
          };
          return scale;
        };
        scale.rangeBand = function() {
          return rangeBand;
        };
        scale.rangeExtent = function() {
          return d3_scaleExtent(ranger.a[0]);
        };
        scale.copy = function() {
          return d3_scale_ordinal(domain, ranger);
        };
        return scale.domain(domain);
      }
      d3.scale.category10 = function() {
        return d3.scale.ordinal().range(d3_category10);
      };
      d3.scale.category20 = function() {
        return d3.scale.ordinal().range(d3_category20);
      };
      d3.scale.category20b = function() {
        return d3.scale.ordinal().range(d3_category20b);
      };
      d3.scale.category20c = function() {
        return d3.scale.ordinal().range(d3_category20c);
      };
      var d3_category10 = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(d3_rgbString);
      var d3_category20 = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(d3_rgbString);
      var d3_category20b = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(d3_rgbString);
      var d3_category20c = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(d3_rgbString);
      d3.scale.quantile = function() {
        return d3_scale_quantile([], []);
      };
      function d3_scale_quantile(domain, range) {
        var thresholds;
        function rescale() {
          var k = 0,
              q = range.length;
          thresholds = [];
          while (++k < q)
            thresholds[k - 1] = d3.quantile(domain, k / q);
          return scale;
        }
        function scale(x) {
          if (!isNaN(x = +x))
            return range[d3.bisect(thresholds, x)];
        }
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
          return rescale();
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          return rescale();
        };
        scale.quantiles = function() {
          return thresholds;
        };
        scale.invertExtent = function(y) {
          y = range.indexOf(y);
          return y < 0 ? [NaN, NaN] : [y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1]];
        };
        scale.copy = function() {
          return d3_scale_quantile(domain, range);
        };
        return rescale();
      }
      d3.scale.quantize = function() {
        return d3_scale_quantize(0, 1, [0, 1]);
      };
      function d3_scale_quantize(x0, x1, range) {
        var kx,
            i;
        function scale(x) {
          return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
        }
        function rescale() {
          kx = range.length / (x1 - x0);
          i = range.length - 1;
          return scale;
        }
        scale.domain = function(x) {
          if (!arguments.length)
            return [x0, x1];
          x0 = +x[0];
          x1 = +x[x.length - 1];
          return rescale();
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          return rescale();
        };
        scale.invertExtent = function(y) {
          y = range.indexOf(y);
          y = y < 0 ? NaN : y / kx + x0;
          return [y, y + 1 / kx];
        };
        scale.copy = function() {
          return d3_scale_quantize(x0, x1, range);
        };
        return rescale();
      }
      d3.scale.threshold = function() {
        return d3_scale_threshold([.5], [0, 1]);
      };
      function d3_scale_threshold(domain, range) {
        function scale(x) {
          if (x <= x)
            return range[d3.bisect(domain, x)];
        }
        scale.domain = function(_) {
          if (!arguments.length)
            return domain;
          domain = _;
          return scale;
        };
        scale.range = function(_) {
          if (!arguments.length)
            return range;
          range = _;
          return scale;
        };
        scale.invertExtent = function(y) {
          y = range.indexOf(y);
          return [domain[y - 1], domain[y]];
        };
        scale.copy = function() {
          return d3_scale_threshold(domain, range);
        };
        return scale;
      }
      d3.scale.identity = function() {
        return d3_scale_identity([0, 1]);
      };
      function d3_scale_identity(domain) {
        function identity(x) {
          return +x;
        }
        identity.invert = identity;
        identity.domain = identity.range = function(x) {
          if (!arguments.length)
            return domain;
          domain = x.map(identity);
          return identity;
        };
        identity.ticks = function(m) {
          return d3_scale_linearTicks(domain, m);
        };
        identity.tickFormat = function(m, format) {
          return d3_scale_linearTickFormat(domain, m, format);
        };
        identity.copy = function() {
          return d3_scale_identity(domain);
        };
        return identity;
      }
      d3.svg = {};
      function d3_zero() {
        return 0;
      }
      d3.svg.arc = function() {
        var innerRadius = d3_svg_arcInnerRadius,
            outerRadius = d3_svg_arcOuterRadius,
            cornerRadius = d3_zero,
            padRadius = d3_svg_arcAuto,
            startAngle = d3_svg_arcStartAngle,
            endAngle = d3_svg_arcEndAngle,
            padAngle = d3_svg_arcPadAngle;
        function arc() {
          var r0 = Math.max(0, +innerRadius.apply(this, arguments)),
              r1 = Math.max(0, +outerRadius.apply(this, arguments)),
              a0 = startAngle.apply(this, arguments) - halfπ,
              a1 = endAngle.apply(this, arguments) - halfπ,
              da = Math.abs(a1 - a0),
              cw = a0 > a1 ? 0 : 1;
          if (r1 < r0)
            rc = r1, r1 = r0, r0 = rc;
          if (da >= τε)
            return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
          var rc,
              cr,
              rp,
              ap,
              p0 = 0,
              p1 = 0,
              x0,
              y0,
              x1,
              y1,
              x2,
              y2,
              x3,
              y3,
              path = [];
          if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
            rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
            if (!cw)
              p1 *= -1;
            if (r1)
              p1 = d3_asin(rp / r1 * Math.sin(ap));
            if (r0)
              p0 = d3_asin(rp / r0 * Math.sin(ap));
          }
          if (r1) {
            x0 = r1 * Math.cos(a0 + p1);
            y0 = r1 * Math.sin(a0 + p1);
            x1 = r1 * Math.cos(a1 - p1);
            y1 = r1 * Math.sin(a1 - p1);
            var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
            if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
              var h1 = (a0 + a1) / 2;
              x0 = r1 * Math.cos(h1);
              y0 = r1 * Math.sin(h1);
              x1 = y1 = null;
            }
          } else {
            x0 = y0 = 0;
          }
          if (r0) {
            x2 = r0 * Math.cos(a1 - p0);
            y2 = r0 * Math.sin(a1 - p0);
            x3 = r0 * Math.cos(a0 + p0);
            y3 = r0 * Math.sin(a0 + p0);
            var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
            if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
              var h0 = (a0 + a1) / 2;
              x2 = r0 * Math.cos(h0);
              y2 = r0 * Math.sin(h0);
              x3 = y3 = null;
            }
          } else {
            x2 = y2 = 0;
          }
          if ((rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
            cr = r0 < r1 ^ cw ? 0 : 1;
            var oc = x3 == null ? [x2, y2] : x1 == null ? [x0, y0] : d3_geom_polygonIntersect([x0, y0], [x3, y3], [x1, y1], [x2, y2]),
                ax = x0 - oc[0],
                ay = y0 - oc[1],
                bx = x1 - oc[0],
                by = y1 - oc[1],
                kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
                lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
            if (x1 != null) {
              var rc1 = Math.min(rc, (r1 - lc) / (kc + 1)),
                  t30 = d3_svg_arcCornerTangents(x3 == null ? [x2, y2] : [x3, y3], [x0, y0], r1, rc1, cw),
                  t12 = d3_svg_arcCornerTangents([x1, y1], [x2, y2], r1, rc1, cw);
              if (rc === rc1) {
                path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
              } else {
                path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
              }
            } else {
              path.push("M", x0, ",", y0);
            }
            if (x3 != null) {
              var rc0 = Math.min(rc, (r0 - lc) / (kc - 1)),
                  t03 = d3_svg_arcCornerTangents([x0, y0], [x3, y3], r0, -rc0, cw),
                  t21 = d3_svg_arcCornerTangents([x2, y2], x1 == null ? [x0, y0] : [x1, y1], r0, -rc0, cw);
              if (rc === rc0) {
                path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
              } else {
                path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
              }
            } else {
              path.push("L", x2, ",", y2);
            }
          } else {
            path.push("M", x0, ",", y0);
            if (x1 != null)
              path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
            path.push("L", x2, ",", y2);
            if (x3 != null)
              path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
          }
          path.push("Z");
          return path.join("");
        }
        function circleSegment(r1, cw) {
          return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
        }
        arc.innerRadius = function(v) {
          if (!arguments.length)
            return innerRadius;
          innerRadius = d3_functor(v);
          return arc;
        };
        arc.outerRadius = function(v) {
          if (!arguments.length)
            return outerRadius;
          outerRadius = d3_functor(v);
          return arc;
        };
        arc.cornerRadius = function(v) {
          if (!arguments.length)
            return cornerRadius;
          cornerRadius = d3_functor(v);
          return arc;
        };
        arc.padRadius = function(v) {
          if (!arguments.length)
            return padRadius;
          padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
          return arc;
        };
        arc.startAngle = function(v) {
          if (!arguments.length)
            return startAngle;
          startAngle = d3_functor(v);
          return arc;
        };
        arc.endAngle = function(v) {
          if (!arguments.length)
            return endAngle;
          endAngle = d3_functor(v);
          return arc;
        };
        arc.padAngle = function(v) {
          if (!arguments.length)
            return padAngle;
          padAngle = d3_functor(v);
          return arc;
        };
        arc.centroid = function() {
          var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
              a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
          return [Math.cos(a) * r, Math.sin(a) * r];
        };
        return arc;
      };
      var d3_svg_arcAuto = "auto";
      function d3_svg_arcInnerRadius(d) {
        return d.innerRadius;
      }
      function d3_svg_arcOuterRadius(d) {
        return d.outerRadius;
      }
      function d3_svg_arcStartAngle(d) {
        return d.startAngle;
      }
      function d3_svg_arcEndAngle(d) {
        return d.endAngle;
      }
      function d3_svg_arcPadAngle(d) {
        return d && d.padAngle;
      }
      function d3_svg_arcSweep(x0, y0, x1, y1) {
        return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
      }
      function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
        var x01 = p0[0] - p1[0],
            y01 = p0[1] - p1[1],
            lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
            ox = lo * y01,
            oy = -lo * x01,
            x1 = p0[0] + ox,
            y1 = p0[1] + oy,
            x2 = p1[0] + ox,
            y2 = p1[1] + oy,
            x3 = (x1 + x2) / 2,
            y3 = (y1 + y2) / 2,
            dx = x2 - x1,
            dy = y2 - y1,
            d2 = dx * dx + dy * dy,
            r = r1 - rc,
            D = x1 * y2 - x2 * y1,
            d = (dy < 0 ? -1 : 1) * Math.sqrt(r * r * d2 - D * D),
            cx0 = (D * dy - dx * d) / d2,
            cy0 = (-D * dx - dy * d) / d2,
            cx1 = (D * dy + dx * d) / d2,
            cy1 = (-D * dx + dy * d) / d2,
            dx0 = cx0 - x3,
            dy0 = cy0 - y3,
            dx1 = cx1 - x3,
            dy1 = cy1 - y3;
        if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
          cx0 = cx1, cy0 = cy1;
        return [[cx0 - ox, cy0 - oy], [cx0 * r1 / r, cy0 * r1 / r]];
      }
      function d3_svg_line(projection) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY,
            defined = d3_true,
            interpolate = d3_svg_lineLinear,
            interpolateKey = interpolate.key,
            tension = .7;
        function line(data) {
          var segments = [],
              points = [],
              i = -1,
              n = data.length,
              d,
              fx = d3_functor(x),
              fy = d3_functor(y);
          function segment() {
            segments.push("M", interpolate(projection(points), tension));
          }
          while (++i < n) {
            if (defined.call(this, d = data[i], i)) {
              points.push([+fx.call(this, d, i), +fy.call(this, d, i)]);
            } else if (points.length) {
              segment();
              points = [];
            }
          }
          if (points.length)
            segment();
          return segments.length ? segments.join("") : null;
        }
        line.x = function(_) {
          if (!arguments.length)
            return x;
          x = _;
          return line;
        };
        line.y = function(_) {
          if (!arguments.length)
            return y;
          y = _;
          return line;
        };
        line.defined = function(_) {
          if (!arguments.length)
            return defined;
          defined = _;
          return line;
        };
        line.interpolate = function(_) {
          if (!arguments.length)
            return interpolateKey;
          if (typeof _ === "function")
            interpolateKey = interpolate = _;
          else
            interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
          return line;
        };
        line.tension = function(_) {
          if (!arguments.length)
            return tension;
          tension = _;
          return line;
        };
        return line;
      }
      d3.svg.line = function() {
        return d3_svg_line(d3_identity);
      };
      var d3_svg_lineInterpolators = d3.map({
        linear: d3_svg_lineLinear,
        "linear-closed": d3_svg_lineLinearClosed,
        step: d3_svg_lineStep,
        "step-before": d3_svg_lineStepBefore,
        "step-after": d3_svg_lineStepAfter,
        basis: d3_svg_lineBasis,
        "basis-open": d3_svg_lineBasisOpen,
        "basis-closed": d3_svg_lineBasisClosed,
        bundle: d3_svg_lineBundle,
        cardinal: d3_svg_lineCardinal,
        "cardinal-open": d3_svg_lineCardinalOpen,
        "cardinal-closed": d3_svg_lineCardinalClosed,
        monotone: d3_svg_lineMonotone
      });
      d3_svg_lineInterpolators.forEach(function(key, value) {
        value.key = key;
        value.closed = /-closed$/.test(key);
      });
      function d3_svg_lineLinear(points) {
        return points.join("L");
      }
      function d3_svg_lineLinearClosed(points) {
        return d3_svg_lineLinear(points) + "Z";
      }
      function d3_svg_lineStep(points) {
        var i = 0,
            n = points.length,
            p = points[0],
            path = [p[0], ",", p[1]];
        while (++i < n)
          path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
        if (n > 1)
          path.push("H", p[0]);
        return path.join("");
      }
      function d3_svg_lineStepBefore(points) {
        var i = 0,
            n = points.length,
            p = points[0],
            path = [p[0], ",", p[1]];
        while (++i < n)
          path.push("V", (p = points[i])[1], "H", p[0]);
        return path.join("");
      }
      function d3_svg_lineStepAfter(points) {
        var i = 0,
            n = points.length,
            p = points[0],
            path = [p[0], ",", p[1]];
        while (++i < n)
          path.push("H", (p = points[i])[0], "V", p[1]);
        return path.join("");
      }
      function d3_svg_lineCardinalOpen(points, tension) {
        return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
      }
      function d3_svg_lineCardinalClosed(points, tension) {
        return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), points), d3_svg_lineCardinalTangents([points[points.length - 2]].concat(points, [points[1]]), tension));
      }
      function d3_svg_lineCardinal(points, tension) {
        return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
      }
      function d3_svg_lineHermite(points, tangents) {
        if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
          return d3_svg_lineLinear(points);
        }
        var quad = points.length != tangents.length,
            path = "",
            p0 = points[0],
            p = points[1],
            t0 = tangents[0],
            t = t0,
            pi = 1;
        if (quad) {
          path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
          p0 = points[1];
          pi = 2;
        }
        if (tangents.length > 1) {
          t = tangents[1];
          p = points[pi];
          pi++;
          path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
          for (var i = 2; i < tangents.length; i++, pi++) {
            p = points[pi];
            t = tangents[i];
            path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
          }
        }
        if (quad) {
          var lp = points[pi];
          path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
        }
        return path;
      }
      function d3_svg_lineCardinalTangents(points, tension) {
        var tangents = [],
            a = (1 - tension) / 2,
            p0,
            p1 = points[0],
            p2 = points[1],
            i = 1,
            n = points.length;
        while (++i < n) {
          p0 = p1;
          p1 = p2;
          p2 = points[i];
          tangents.push([a * (p2[0] - p0[0]), a * (p2[1] - p0[1])]);
        }
        return tangents;
      }
      function d3_svg_lineBasis(points) {
        if (points.length < 3)
          return d3_svg_lineLinear(points);
        var i = 1,
            n = points.length,
            pi = points[0],
            x0 = pi[0],
            y0 = pi[1],
            px = [x0, x0, x0, (pi = points[1])[0]],
            py = [y0, y0, y0, pi[1]],
            path = [x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
        points.push(points[n - 1]);
        while (++i <= n) {
          pi = points[i];
          px.shift();
          px.push(pi[0]);
          py.shift();
          py.push(pi[1]);
          d3_svg_lineBasisBezier(path, px, py);
        }
        points.pop();
        path.push("L", pi);
        return path.join("");
      }
      function d3_svg_lineBasisOpen(points) {
        if (points.length < 4)
          return d3_svg_lineLinear(points);
        var path = [],
            i = -1,
            n = points.length,
            pi,
            px = [0],
            py = [0];
        while (++i < 3) {
          pi = points[i];
          px.push(pi[0]);
          py.push(pi[1]);
        }
        path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
        --i;
        while (++i < n) {
          pi = points[i];
          px.shift();
          px.push(pi[0]);
          py.shift();
          py.push(pi[1]);
          d3_svg_lineBasisBezier(path, px, py);
        }
        return path.join("");
      }
      function d3_svg_lineBasisClosed(points) {
        var path,
            i = -1,
            n = points.length,
            m = n + 4,
            pi,
            px = [],
            py = [];
        while (++i < 4) {
          pi = points[i % n];
          px.push(pi[0]);
          py.push(pi[1]);
        }
        path = [d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
        --i;
        while (++i < m) {
          pi = points[i % n];
          px.shift();
          px.push(pi[0]);
          py.shift();
          py.push(pi[1]);
          d3_svg_lineBasisBezier(path, px, py);
        }
        return path.join("");
      }
      function d3_svg_lineBundle(points, tension) {
        var n = points.length - 1;
        if (n) {
          var x0 = points[0][0],
              y0 = points[0][1],
              dx = points[n][0] - x0,
              dy = points[n][1] - y0,
              i = -1,
              p,
              t;
          while (++i <= n) {
            p = points[i];
            t = i / n;
            p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
            p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
          }
        }
        return d3_svg_lineBasis(points);
      }
      function d3_svg_lineDot4(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
      }
      var d3_svg_lineBasisBezier1 = [0, 2 / 3, 1 / 3, 0],
          d3_svg_lineBasisBezier2 = [0, 1 / 3, 2 / 3, 0],
          d3_svg_lineBasisBezier3 = [0, 1 / 6, 2 / 3, 1 / 6];
      function d3_svg_lineBasisBezier(path, x, y) {
        path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
      }
      function d3_svg_lineSlope(p0, p1) {
        return (p1[1] - p0[1]) / (p1[0] - p0[0]);
      }
      function d3_svg_lineFiniteDifferences(points) {
        var i = 0,
            j = points.length - 1,
            m = [],
            p0 = points[0],
            p1 = points[1],
            d = m[0] = d3_svg_lineSlope(p0, p1);
        while (++i < j) {
          m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
        }
        m[i] = d;
        return m;
      }
      function d3_svg_lineMonotoneTangents(points) {
        var tangents = [],
            d,
            a,
            b,
            s,
            m = d3_svg_lineFiniteDifferences(points),
            i = -1,
            j = points.length - 1;
        while (++i < j) {
          d = d3_svg_lineSlope(points[i], points[i + 1]);
          if (abs(d) < ε) {
            m[i] = m[i + 1] = 0;
          } else {
            a = m[i] / d;
            b = m[i + 1] / d;
            s = a * a + b * b;
            if (s > 9) {
              s = d * 3 / Math.sqrt(s);
              m[i] = s * a;
              m[i + 1] = s * b;
            }
          }
        }
        i = -1;
        while (++i <= j) {
          s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
          tangents.push([s || 0, m[i] * s || 0]);
        }
        return tangents;
      }
      function d3_svg_lineMonotone(points) {
        return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
      }
      d3.svg.line.radial = function() {
        var line = d3_svg_line(d3_svg_lineRadial);
        line.radius = line.x, delete line.x;
        line.angle = line.y, delete line.y;
        return line;
      };
      function d3_svg_lineRadial(points) {
        var point,
            i = -1,
            n = points.length,
            r,
            a;
        while (++i < n) {
          point = points[i];
          r = point[0];
          a = point[1] - halfπ;
          point[0] = r * Math.cos(a);
          point[1] = r * Math.sin(a);
        }
        return points;
      }
      function d3_svg_area(projection) {
        var x0 = d3_geom_pointX,
            x1 = d3_geom_pointX,
            y0 = 0,
            y1 = d3_geom_pointY,
            defined = d3_true,
            interpolate = d3_svg_lineLinear,
            interpolateKey = interpolate.key,
            interpolateReverse = interpolate,
            L = "L",
            tension = .7;
        function area(data) {
          var segments = [],
              points0 = [],
              points1 = [],
              i = -1,
              n = data.length,
              d,
              fx0 = d3_functor(x0),
              fy0 = d3_functor(y0),
              fx1 = x0 === x1 ? function() {
                return x;
              } : d3_functor(x1),
              fy1 = y0 === y1 ? function() {
                return y;
              } : d3_functor(y1),
              x,
              y;
          function segment() {
            segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
          }
          while (++i < n) {
            if (defined.call(this, d = data[i], i)) {
              points0.push([x = +fx0.call(this, d, i), y = +fy0.call(this, d, i)]);
              points1.push([+fx1.call(this, d, i), +fy1.call(this, d, i)]);
            } else if (points0.length) {
              segment();
              points0 = [];
              points1 = [];
            }
          }
          if (points0.length)
            segment();
          return segments.length ? segments.join("") : null;
        }
        area.x = function(_) {
          if (!arguments.length)
            return x1;
          x0 = x1 = _;
          return area;
        };
        area.x0 = function(_) {
          if (!arguments.length)
            return x0;
          x0 = _;
          return area;
        };
        area.x1 = function(_) {
          if (!arguments.length)
            return x1;
          x1 = _;
          return area;
        };
        area.y = function(_) {
          if (!arguments.length)
            return y1;
          y0 = y1 = _;
          return area;
        };
        area.y0 = function(_) {
          if (!arguments.length)
            return y0;
          y0 = _;
          return area;
        };
        area.y1 = function(_) {
          if (!arguments.length)
            return y1;
          y1 = _;
          return area;
        };
        area.defined = function(_) {
          if (!arguments.length)
            return defined;
          defined = _;
          return area;
        };
        area.interpolate = function(_) {
          if (!arguments.length)
            return interpolateKey;
          if (typeof _ === "function")
            interpolateKey = interpolate = _;
          else
            interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
          interpolateReverse = interpolate.reverse || interpolate;
          L = interpolate.closed ? "M" : "L";
          return area;
        };
        area.tension = function(_) {
          if (!arguments.length)
            return tension;
          tension = _;
          return area;
        };
        return area;
      }
      d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
      d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
      d3.svg.area = function() {
        return d3_svg_area(d3_identity);
      };
      d3.svg.area.radial = function() {
        var area = d3_svg_area(d3_svg_lineRadial);
        area.radius = area.x, delete area.x;
        area.innerRadius = area.x0, delete area.x0;
        area.outerRadius = area.x1, delete area.x1;
        area.angle = area.y, delete area.y;
        area.startAngle = area.y0, delete area.y0;
        area.endAngle = area.y1, delete area.y1;
        return area;
      };
      d3.svg.chord = function() {
        var source = d3_source,
            target = d3_target,
            radius = d3_svg_chordRadius,
            startAngle = d3_svg_arcStartAngle,
            endAngle = d3_svg_arcEndAngle;
        function chord(d, i) {
          var s = subgroup(this, source, d, i),
              t = subgroup(this, target, d, i);
          return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
        }
        function subgroup(self, f, d, i) {
          var subgroup = f.call(self, d, i),
              r = radius.call(self, subgroup, i),
              a0 = startAngle.call(self, subgroup, i) - halfπ,
              a1 = endAngle.call(self, subgroup, i) - halfπ;
          return {
            r: r,
            a0: a0,
            a1: a1,
            p0: [r * Math.cos(a0), r * Math.sin(a0)],
            p1: [r * Math.cos(a1), r * Math.sin(a1)]
          };
        }
        function equals(a, b) {
          return a.a0 == b.a0 && a.a1 == b.a1;
        }
        function arc(r, p, a) {
          return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
        }
        function curve(r0, p0, r1, p1) {
          return "Q 0,0 " + p1;
        }
        chord.radius = function(v) {
          if (!arguments.length)
            return radius;
          radius = d3_functor(v);
          return chord;
        };
        chord.source = function(v) {
          if (!arguments.length)
            return source;
          source = d3_functor(v);
          return chord;
        };
        chord.target = function(v) {
          if (!arguments.length)
            return target;
          target = d3_functor(v);
          return chord;
        };
        chord.startAngle = function(v) {
          if (!arguments.length)
            return startAngle;
          startAngle = d3_functor(v);
          return chord;
        };
        chord.endAngle = function(v) {
          if (!arguments.length)
            return endAngle;
          endAngle = d3_functor(v);
          return chord;
        };
        return chord;
      };
      function d3_svg_chordRadius(d) {
        return d.radius;
      }
      d3.svg.diagonal = function() {
        var source = d3_source,
            target = d3_target,
            projection = d3_svg_diagonalProjection;
        function diagonal(d, i) {
          var p0 = source.call(this, d, i),
              p3 = target.call(this, d, i),
              m = (p0.y + p3.y) / 2,
              p = [p0, {
                x: p0.x,
                y: m
              }, {
                x: p3.x,
                y: m
              }, p3];
          p = p.map(projection);
          return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
        }
        diagonal.source = function(x) {
          if (!arguments.length)
            return source;
          source = d3_functor(x);
          return diagonal;
        };
        diagonal.target = function(x) {
          if (!arguments.length)
            return target;
          target = d3_functor(x);
          return diagonal;
        };
        diagonal.projection = function(x) {
          if (!arguments.length)
            return projection;
          projection = x;
          return diagonal;
        };
        return diagonal;
      };
      function d3_svg_diagonalProjection(d) {
        return [d.x, d.y];
      }
      d3.svg.diagonal.radial = function() {
        var diagonal = d3.svg.diagonal(),
            projection = d3_svg_diagonalProjection,
            projection_ = diagonal.projection;
        diagonal.projection = function(x) {
          return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
        };
        return diagonal;
      };
      function d3_svg_diagonalRadialProjection(projection) {
        return function() {
          var d = projection.apply(this, arguments),
              r = d[0],
              a = d[1] - halfπ;
          return [r * Math.cos(a), r * Math.sin(a)];
        };
      }
      d3.svg.symbol = function() {
        var type = d3_svg_symbolType,
            size = d3_svg_symbolSize;
        function symbol(d, i) {
          return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
        }
        symbol.type = function(x) {
          if (!arguments.length)
            return type;
          type = d3_functor(x);
          return symbol;
        };
        symbol.size = function(x) {
          if (!arguments.length)
            return size;
          size = d3_functor(x);
          return symbol;
        };
        return symbol;
      };
      function d3_svg_symbolSize() {
        return 64;
      }
      function d3_svg_symbolType() {
        return "circle";
      }
      function d3_svg_symbolCircle(size) {
        var r = Math.sqrt(size / π);
        return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
      }
      var d3_svg_symbols = d3.map({
        circle: d3_svg_symbolCircle,
        cross: function(size) {
          var r = Math.sqrt(size / 5) / 2;
          return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
        },
        diamond: function(size) {
          var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)),
              rx = ry * d3_svg_symbolTan30;
          return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
        },
        square: function(size) {
          var r = Math.sqrt(size) / 2;
          return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
        },
        "triangle-down": function(size) {
          var rx = Math.sqrt(size / d3_svg_symbolSqrt3),
              ry = rx * d3_svg_symbolSqrt3 / 2;
          return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
        },
        "triangle-up": function(size) {
          var rx = Math.sqrt(size / d3_svg_symbolSqrt3),
              ry = rx * d3_svg_symbolSqrt3 / 2;
          return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
        }
      });
      d3.svg.symbolTypes = d3_svg_symbols.keys();
      var d3_svg_symbolSqrt3 = Math.sqrt(3),
          d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
      d3_selectionPrototype.transition = function(name) {
        var id = d3_transitionInheritId || ++d3_transitionId,
            ns = d3_transitionNamespace(name),
            subgroups = [],
            subgroup,
            node,
            transition = d3_transitionInherit || {
              time: Date.now(),
              ease: d3_ease_cubicInOut,
              delay: 0,
              duration: 250
            };
        for (var j = -1,
            m = this.length; ++j < m; ) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i])
              d3_transitionNode(node, i, ns, id, transition);
            subgroup.push(node);
          }
        }
        return d3_transition(subgroups, ns, id);
      };
      d3_selectionPrototype.interrupt = function(name) {
        return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
      };
      var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
      function d3_selection_interruptNS(ns) {
        return function() {
          var lock,
              active;
          if ((lock = this[ns]) && (active = lock[lock.active])) {
            if (--lock.count)
              delete lock[lock.active];
            else
              delete this[ns];
            lock.active += .5;
            active.event && active.event.interrupt.call(this, this.__data__, active.index);
          }
        };
      }
      function d3_transition(groups, ns, id) {
        d3_subclass(groups, d3_transitionPrototype);
        groups.namespace = ns;
        groups.id = id;
        return groups;
      }
      var d3_transitionPrototype = [],
          d3_transitionId = 0,
          d3_transitionInheritId,
          d3_transitionInherit;
      d3_transitionPrototype.call = d3_selectionPrototype.call;
      d3_transitionPrototype.empty = d3_selectionPrototype.empty;
      d3_transitionPrototype.node = d3_selectionPrototype.node;
      d3_transitionPrototype.size = d3_selectionPrototype.size;
      d3.transition = function(selection, name) {
        return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
      };
      d3.transition.prototype = d3_transitionPrototype;
      d3_transitionPrototype.select = function(selector) {
        var id = this.id,
            ns = this.namespace,
            subgroups = [],
            subgroup,
            subnode,
            node;
        selector = d3_selection_selector(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
              if ("__data__" in node)
                subnode.__data__ = node.__data__;
              d3_transitionNode(subnode, i, ns, id, node[ns][id]);
              subgroup.push(subnode);
            } else {
              subgroup.push(null);
            }
          }
        }
        return d3_transition(subgroups, ns, id);
      };
      d3_transitionPrototype.selectAll = function(selector) {
        var id = this.id,
            ns = this.namespace,
            subgroups = [],
            subgroup,
            subnodes,
            node,
            subnode,
            transition;
        selector = d3_selection_selectorAll(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              transition = node[ns][id];
              subnodes = selector.call(node, node.__data__, i, j);
              subgroups.push(subgroup = []);
              for (var k = -1,
                  o = subnodes.length; ++k < o; ) {
                if (subnode = subnodes[k])
                  d3_transitionNode(subnode, k, ns, id, transition);
                subgroup.push(subnode);
              }
            }
          }
        }
        return d3_transition(subgroups, ns, id);
      };
      d3_transitionPrototype.filter = function(filter) {
        var subgroups = [],
            subgroup,
            group,
            node;
        if (typeof filter !== "function")
          filter = d3_selection_filter(filter);
        for (var j = 0,
            m = this.length; j < m; j++) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = 0,
              n = group.length; i < n; i++) {
            if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
              subgroup.push(node);
            }
          }
        }
        return d3_transition(subgroups, this.namespace, this.id);
      };
      d3_transitionPrototype.tween = function(name, tween) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 2)
          return this.node()[ns][id].tween.get(name);
        return d3_selection_each(this, tween == null ? function(node) {
          node[ns][id].tween.remove(name);
        } : function(node) {
          node[ns][id].tween.set(name, tween);
        });
      };
      function d3_transition_tween(groups, name, value, tween) {
        var id = groups.id,
            ns = groups.namespace;
        return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
          node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
        } : (value = tween(value), function(node) {
          node[ns][id].tween.set(name, value);
        }));
      }
      d3_transitionPrototype.attr = function(nameNS, value) {
        if (arguments.length < 2) {
          for (value in nameNS)
            this.attr(value, nameNS[value]);
          return this;
        }
        var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate,
            name = d3.ns.qualify(nameNS);
        function attrNull() {
          this.removeAttribute(name);
        }
        function attrNullNS() {
          this.removeAttributeNS(name.space, name.local);
        }
        function attrTween(b) {
          return b == null ? attrNull : (b += "", function() {
            var a = this.getAttribute(name),
                i;
            return a !== b && (i = interpolate(a, b), function(t) {
              this.setAttribute(name, i(t));
            });
          });
        }
        function attrTweenNS(b) {
          return b == null ? attrNullNS : (b += "", function() {
            var a = this.getAttributeNS(name.space, name.local),
                i;
            return a !== b && (i = interpolate(a, b), function(t) {
              this.setAttributeNS(name.space, name.local, i(t));
            });
          });
        }
        return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
      };
      d3_transitionPrototype.attrTween = function(nameNS, tween) {
        var name = d3.ns.qualify(nameNS);
        function attrTween(d, i) {
          var f = tween.call(this, d, i, this.getAttribute(name));
          return f && function(t) {
            this.setAttribute(name, f(t));
          };
        }
        function attrTweenNS(d, i) {
          var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
          return f && function(t) {
            this.setAttributeNS(name.space, name.local, f(t));
          };
        }
        return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
      };
      d3_transitionPrototype.style = function(name, value, priority) {
        var n = arguments.length;
        if (n < 3) {
          if (typeof name !== "string") {
            if (n < 2)
              value = "";
            for (priority in name)
              this.style(priority, name[priority], value);
            return this;
          }
          priority = "";
        }
        function styleNull() {
          this.style.removeProperty(name);
        }
        function styleString(b) {
          return b == null ? styleNull : (b += "", function() {
            var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name),
                i;
            return a !== b && (i = d3_interpolate(a, b), function(t) {
              this.style.setProperty(name, i(t), priority);
            });
          });
        }
        return d3_transition_tween(this, "style." + name, value, styleString);
      };
      d3_transitionPrototype.styleTween = function(name, tween, priority) {
        if (arguments.length < 3)
          priority = "";
        function styleTween(d, i) {
          var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
          return f && function(t) {
            this.style.setProperty(name, f(t), priority);
          };
        }
        return this.tween("style." + name, styleTween);
      };
      d3_transitionPrototype.text = function(value) {
        return d3_transition_tween(this, "text", value, d3_transition_text);
      };
      function d3_transition_text(b) {
        if (b == null)
          b = "";
        return function() {
          this.textContent = b;
        };
      }
      d3_transitionPrototype.remove = function() {
        var ns = this.namespace;
        return this.each("end.transition", function() {
          var p;
          if (this[ns].count < 2 && (p = this.parentNode))
            p.removeChild(this);
        });
      };
      d3_transitionPrototype.ease = function(value) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 1)
          return this.node()[ns][id].ease;
        if (typeof value !== "function")
          value = d3.ease.apply(d3, arguments);
        return d3_selection_each(this, function(node) {
          node[ns][id].ease = value;
        });
      };
      d3_transitionPrototype.delay = function(value) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 1)
          return this.node()[ns][id].delay;
        return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
          node[ns][id].delay = +value.call(node, node.__data__, i, j);
        } : (value = +value, function(node) {
          node[ns][id].delay = value;
        }));
      };
      d3_transitionPrototype.duration = function(value) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 1)
          return this.node()[ns][id].duration;
        return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
          node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
        } : (value = Math.max(1, value), function(node) {
          node[ns][id].duration = value;
        }));
      };
      d3_transitionPrototype.each = function(type, listener) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 2) {
          var inherit = d3_transitionInherit,
              inheritId = d3_transitionInheritId;
          try {
            d3_transitionInheritId = id;
            d3_selection_each(this, function(node, i, j) {
              d3_transitionInherit = node[ns][id];
              type.call(node, node.__data__, i, j);
            });
          } finally {
            d3_transitionInherit = inherit;
            d3_transitionInheritId = inheritId;
          }
        } else {
          d3_selection_each(this, function(node) {
            var transition = node[ns][id];
            (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
          });
        }
        return this;
      };
      d3_transitionPrototype.transition = function() {
        var id0 = this.id,
            id1 = ++d3_transitionId,
            ns = this.namespace,
            subgroups = [],
            subgroup,
            group,
            node,
            transition;
        for (var j = 0,
            m = this.length; j < m; j++) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = 0,
              n = group.length; i < n; i++) {
            if (node = group[i]) {
              transition = node[ns][id0];
              d3_transitionNode(node, i, ns, id1, {
                time: transition.time,
                ease: transition.ease,
                delay: transition.delay + transition.duration,
                duration: transition.duration
              });
            }
            subgroup.push(node);
          }
        }
        return d3_transition(subgroups, ns, id1);
      };
      function d3_transitionNamespace(name) {
        return name == null ? "__transition__" : "__transition_" + name + "__";
      }
      function d3_transitionNode(node, i, ns, id, inherit) {
        var lock = node[ns] || (node[ns] = {
          active: 0,
          count: 0
        }),
            transition = lock[id];
        if (!transition) {
          var time = inherit.time;
          transition = lock[id] = {
            tween: new d3_Map(),
            time: time,
            delay: inherit.delay,
            duration: inherit.duration,
            ease: inherit.ease,
            index: i
          };
          inherit = null;
          ++lock.count;
          d3.timer(function(elapsed) {
            var delay = transition.delay,
                duration,
                ease,
                timer = d3_timer_active,
                tweened = [];
            timer.t = delay + time;
            if (delay <= elapsed)
              return start(elapsed - delay);
            timer.c = start;
            function start(elapsed) {
              if (lock.active > id)
                return stop();
              var active = lock[lock.active];
              if (active) {
                --lock.count;
                delete lock[lock.active];
                active.event && active.event.interrupt.call(node, node.__data__, active.index);
              }
              lock.active = id;
              transition.event && transition.event.start.call(node, node.__data__, i);
              transition.tween.forEach(function(key, value) {
                if (value = value.call(node, node.__data__, i)) {
                  tweened.push(value);
                }
              });
              ease = transition.ease;
              duration = transition.duration;
              d3.timer(function() {
                timer.c = tick(elapsed || 1) ? d3_true : tick;
                return 1;
              }, 0, time);
            }
            function tick(elapsed) {
              if (lock.active !== id)
                return 1;
              var t = elapsed / duration,
                  e = ease(t),
                  n = tweened.length;
              while (n > 0) {
                tweened[--n].call(node, e);
              }
              if (t >= 1) {
                transition.event && transition.event.end.call(node, node.__data__, i);
                return stop();
              }
            }
            function stop() {
              if (--lock.count)
                delete lock[id];
              else
                delete node[ns];
              return 1;
            }
          }, 0, time);
        }
      }
      d3.svg.axis = function() {
        var scale = d3.scale.linear(),
            orient = d3_svg_axisDefaultOrient,
            innerTickSize = 6,
            outerTickSize = 6,
            tickPadding = 3,
            tickArguments_ = [10],
            tickValues = null,
            tickFormat_;
        function axis(g) {
          g.each(function() {
            var g = d3.select(this);
            var scale0 = this.__chart__ || scale,
                scale1 = this.__chart__ = scale.copy();
            var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues,
                tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_,
                tick = g.selectAll(".tick").data(ticks, scale1),
                tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε),
                tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(),
                tickUpdate = d3.transition(tick.order()).style("opacity", 1),
                tickSpacing = Math.max(innerTickSize, 0) + tickPadding,
                tickTransform;
            var range = d3_scaleRange(scale1),
                path = g.selectAll(".domain").data([0]),
                pathUpdate = (path.enter().append("path").attr("class", "domain"), d3.transition(path));
            tickEnter.append("line");
            tickEnter.append("text");
            var lineEnter = tickEnter.select("line"),
                lineUpdate = tickUpdate.select("line"),
                text = tick.select("text").text(tickFormat),
                textEnter = tickEnter.select("text"),
                textUpdate = tickUpdate.select("text"),
                sign = orient === "top" || orient === "left" ? -1 : 1,
                x1,
                x2,
                y1,
                y2;
            if (orient === "bottom" || orient === "top") {
              tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
              text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
              pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
            } else {
              tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
              text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
              pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
            }
            lineEnter.attr(y2, sign * innerTickSize);
            textEnter.attr(y1, sign * tickSpacing);
            lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
            textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
            if (scale1.rangeBand) {
              var x = scale1,
                  dx = x.rangeBand() / 2;
              scale0 = scale1 = function(d) {
                return x(d) + dx;
              };
            } else if (scale0.rangeBand) {
              scale0 = scale1;
            } else {
              tickExit.call(tickTransform, scale1, scale0);
            }
            tickEnter.call(tickTransform, scale0, scale1);
            tickUpdate.call(tickTransform, scale1, scale1);
          });
        }
        axis.scale = function(x) {
          if (!arguments.length)
            return scale;
          scale = x;
          return axis;
        };
        axis.orient = function(x) {
          if (!arguments.length)
            return orient;
          orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
          return axis;
        };
        axis.ticks = function() {
          if (!arguments.length)
            return tickArguments_;
          tickArguments_ = arguments;
          return axis;
        };
        axis.tickValues = function(x) {
          if (!arguments.length)
            return tickValues;
          tickValues = x;
          return axis;
        };
        axis.tickFormat = function(x) {
          if (!arguments.length)
            return tickFormat_;
          tickFormat_ = x;
          return axis;
        };
        axis.tickSize = function(x) {
          var n = arguments.length;
          if (!n)
            return innerTickSize;
          innerTickSize = +x;
          outerTickSize = +arguments[n - 1];
          return axis;
        };
        axis.innerTickSize = function(x) {
          if (!arguments.length)
            return innerTickSize;
          innerTickSize = +x;
          return axis;
        };
        axis.outerTickSize = function(x) {
          if (!arguments.length)
            return outerTickSize;
          outerTickSize = +x;
          return axis;
        };
        axis.tickPadding = function(x) {
          if (!arguments.length)
            return tickPadding;
          tickPadding = +x;
          return axis;
        };
        axis.tickSubdivide = function() {
          return arguments.length && axis;
        };
        return axis;
      };
      var d3_svg_axisDefaultOrient = "bottom",
          d3_svg_axisOrients = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
          };
      function d3_svg_axisX(selection, x0, x1) {
        selection.attr("transform", function(d) {
          var v0 = x0(d);
          return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
        });
      }
      function d3_svg_axisY(selection, y0, y1) {
        selection.attr("transform", function(d) {
          var v0 = y0(d);
          return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
        });
      }
      d3.svg.brush = function() {
        var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"),
            x = null,
            y = null,
            xExtent = [0, 0],
            yExtent = [0, 0],
            xExtentDomain,
            yExtentDomain,
            xClamp = true,
            yClamp = true,
            resizes = d3_svg_brushResizes[0];
        function brush(g) {
          g.each(function() {
            var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
            var background = g.selectAll(".background").data([0]);
            background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
            g.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
            var resize = g.selectAll(".resize").data(resizes, d3_identity);
            resize.exit().remove();
            resize.enter().append("g").attr("class", function(d) {
              return "resize " + d;
            }).style("cursor", function(d) {
              return d3_svg_brushCursor[d];
            }).append("rect").attr("x", function(d) {
              return /[ew]$/.test(d) ? -3 : null;
            }).attr("y", function(d) {
              return /^[ns]/.test(d) ? -3 : null;
            }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
            resize.style("display", brush.empty() ? "none" : null);
            var gUpdate = d3.transition(g),
                backgroundUpdate = d3.transition(background),
                range;
            if (x) {
              range = d3_scaleRange(x);
              backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
              redrawX(gUpdate);
            }
            if (y) {
              range = d3_scaleRange(y);
              backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
              redrawY(gUpdate);
            }
            redraw(gUpdate);
          });
        }
        brush.event = function(g) {
          g.each(function() {
            var event_ = event.of(this, arguments),
                extent1 = {
                  x: xExtent,
                  y: yExtent,
                  i: xExtentDomain,
                  j: yExtentDomain
                },
                extent0 = this.__chart__ || extent1;
            this.__chart__ = extent1;
            if (d3_transitionInheritId) {
              d3.select(this).transition().each("start.brush", function() {
                xExtentDomain = extent0.i;
                yExtentDomain = extent0.j;
                xExtent = extent0.x;
                yExtent = extent0.y;
                event_({type: "brushstart"});
              }).tween("brush:brush", function() {
                var xi = d3_interpolateArray(xExtent, extent1.x),
                    yi = d3_interpolateArray(yExtent, extent1.y);
                xExtentDomain = yExtentDomain = null;
                return function(t) {
                  xExtent = extent1.x = xi(t);
                  yExtent = extent1.y = yi(t);
                  event_({
                    type: "brush",
                    mode: "resize"
                  });
                };
              }).each("end.brush", function() {
                xExtentDomain = extent1.i;
                yExtentDomain = extent1.j;
                event_({
                  type: "brush",
                  mode: "resize"
                });
                event_({type: "brushend"});
              });
            } else {
              event_({type: "brushstart"});
              event_({
                type: "brush",
                mode: "resize"
              });
              event_({type: "brushend"});
            }
          });
        };
        function redraw(g) {
          g.selectAll(".resize").attr("transform", function(d) {
            return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
          });
        }
        function redrawX(g) {
          g.select(".extent").attr("x", xExtent[0]);
          g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
        }
        function redrawY(g) {
          g.select(".extent").attr("y", yExtent[0]);
          g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
        }
        function brushstart() {
          var target = this,
              eventTarget = d3.select(d3.event.target),
              event_ = event.of(target, arguments),
              g = d3.select(target),
              resizing = eventTarget.datum(),
              resizingX = !/^(n|s)$/.test(resizing) && x,
              resizingY = !/^(e|w)$/.test(resizing) && y,
              dragging = eventTarget.classed("extent"),
              dragRestore = d3_event_dragSuppress(target),
              center,
              origin = d3.mouse(target),
              offset;
          var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
          if (d3.event.changedTouches) {
            w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
          } else {
            w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
          }
          g.interrupt().selectAll("*").interrupt();
          if (dragging) {
            origin[0] = xExtent[0] - origin[0];
            origin[1] = yExtent[0] - origin[1];
          } else if (resizing) {
            var ex = +/w$/.test(resizing),
                ey = +/^n/.test(resizing);
            offset = [xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1]];
            origin[0] = xExtent[ex];
            origin[1] = yExtent[ey];
          } else if (d3.event.altKey)
            center = origin.slice();
          g.style("pointer-events", "none").selectAll(".resize").style("display", null);
          d3.select("body").style("cursor", eventTarget.style("cursor"));
          event_({type: "brushstart"});
          brushmove();
          function keydown() {
            if (d3.event.keyCode == 32) {
              if (!dragging) {
                center = null;
                origin[0] -= xExtent[1];
                origin[1] -= yExtent[1];
                dragging = 2;
              }
              d3_eventPreventDefault();
            }
          }
          function keyup() {
            if (d3.event.keyCode == 32 && dragging == 2) {
              origin[0] += xExtent[1];
              origin[1] += yExtent[1];
              dragging = 0;
              d3_eventPreventDefault();
            }
          }
          function brushmove() {
            var point = d3.mouse(target),
                moved = false;
            if (offset) {
              point[0] += offset[0];
              point[1] += offset[1];
            }
            if (!dragging) {
              if (d3.event.altKey) {
                if (!center)
                  center = [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2];
                origin[0] = xExtent[+(point[0] < center[0])];
                origin[1] = yExtent[+(point[1] < center[1])];
              } else
                center = null;
            }
            if (resizingX && move1(point, x, 0)) {
              redrawX(g);
              moved = true;
            }
            if (resizingY && move1(point, y, 1)) {
              redrawY(g);
              moved = true;
            }
            if (moved) {
              redraw(g);
              event_({
                type: "brush",
                mode: dragging ? "move" : "resize"
              });
            }
          }
          function move1(point, scale, i) {
            var range = d3_scaleRange(scale),
                r0 = range[0],
                r1 = range[1],
                position = origin[i],
                extent = i ? yExtent : xExtent,
                size = extent[1] - extent[0],
                min,
                max;
            if (dragging) {
              r0 -= position;
              r1 -= size + position;
            }
            min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
            if (dragging) {
              max = (min += position) + size;
            } else {
              if (center)
                position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
              if (position < min) {
                max = min;
                min = position;
              } else {
                max = position;
              }
            }
            if (extent[0] != min || extent[1] != max) {
              if (i)
                yExtentDomain = null;
              else
                xExtentDomain = null;
              extent[0] = min;
              extent[1] = max;
              return true;
            }
          }
          function brushend() {
            brushmove();
            g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
            d3.select("body").style("cursor", null);
            w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
            dragRestore();
            event_({type: "brushend"});
          }
        }
        brush.x = function(z) {
          if (!arguments.length)
            return x;
          x = z;
          resizes = d3_svg_brushResizes[!x << 1 | !y];
          return brush;
        };
        brush.y = function(z) {
          if (!arguments.length)
            return y;
          y = z;
          resizes = d3_svg_brushResizes[!x << 1 | !y];
          return brush;
        };
        brush.clamp = function(z) {
          if (!arguments.length)
            return x && y ? [xClamp, yClamp] : x ? xClamp : y ? yClamp : null;
          if (x && y)
            xClamp = !!z[0], yClamp = !!z[1];
          else if (x)
            xClamp = !!z;
          else if (y)
            yClamp = !!z;
          return brush;
        };
        brush.extent = function(z) {
          var x0,
              x1,
              y0,
              y1,
              t;
          if (!arguments.length) {
            if (x) {
              if (xExtentDomain) {
                x0 = xExtentDomain[0], x1 = xExtentDomain[1];
              } else {
                x0 = xExtent[0], x1 = xExtent[1];
                if (x.invert)
                  x0 = x.invert(x0), x1 = x.invert(x1);
                if (x1 < x0)
                  t = x0, x0 = x1, x1 = t;
              }
            }
            if (y) {
              if (yExtentDomain) {
                y0 = yExtentDomain[0], y1 = yExtentDomain[1];
              } else {
                y0 = yExtent[0], y1 = yExtent[1];
                if (y.invert)
                  y0 = y.invert(y0), y1 = y.invert(y1);
                if (y1 < y0)
                  t = y0, y0 = y1, y1 = t;
              }
            }
            return x && y ? [[x0, y0], [x1, y1]] : x ? [x0, x1] : y && [y0, y1];
          }
          if (x) {
            x0 = z[0], x1 = z[1];
            if (y)
              x0 = x0[0], x1 = x1[0];
            xExtentDomain = [x0, x1];
            if (x.invert)
              x0 = x(x0), x1 = x(x1);
            if (x1 < x0)
              t = x0, x0 = x1, x1 = t;
            if (x0 != xExtent[0] || x1 != xExtent[1])
              xExtent = [x0, x1];
          }
          if (y) {
            y0 = z[0], y1 = z[1];
            if (x)
              y0 = y0[1], y1 = y1[1];
            yExtentDomain = [y0, y1];
            if (y.invert)
              y0 = y(y0), y1 = y(y1);
            if (y1 < y0)
              t = y0, y0 = y1, y1 = t;
            if (y0 != yExtent[0] || y1 != yExtent[1])
              yExtent = [y0, y1];
          }
          return brush;
        };
        brush.clear = function() {
          if (!brush.empty()) {
            xExtent = [0, 0], yExtent = [0, 0];
            xExtentDomain = yExtentDomain = null;
          }
          return brush;
        };
        brush.empty = function() {
          return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
        };
        return d3.rebind(brush, event, "on");
      };
      var d3_svg_brushCursor = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
      };
      var d3_svg_brushResizes = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
      var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
      var d3_time_formatUtc = d3_time_format.utc;
      var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
      d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
      function d3_time_formatIsoNative(date) {
        return date.toISOString();
      }
      d3_time_formatIsoNative.parse = function(string) {
        var date = new Date(string);
        return isNaN(date) ? null : date;
      };
      d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
      d3_time.second = d3_time_interval(function(date) {
        return new d3_date(Math.floor(date / 1e3) * 1e3);
      }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 1e3);
      }, function(date) {
        return date.getSeconds();
      });
      d3_time.seconds = d3_time.second.range;
      d3_time.seconds.utc = d3_time.second.utc.range;
      d3_time.minute = d3_time_interval(function(date) {
        return new d3_date(Math.floor(date / 6e4) * 6e4);
      }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 6e4);
      }, function(date) {
        return date.getMinutes();
      });
      d3_time.minutes = d3_time.minute.range;
      d3_time.minutes.utc = d3_time.minute.utc.range;
      d3_time.hour = d3_time_interval(function(date) {
        var timezone = date.getTimezoneOffset() / 60;
        return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
      }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 36e5);
      }, function(date) {
        return date.getHours();
      });
      d3_time.hours = d3_time.hour.range;
      d3_time.hours.utc = d3_time.hour.utc.range;
      d3_time.month = d3_time_interval(function(date) {
        date = d3_time.day(date);
        date.setDate(1);
        return date;
      }, function(date, offset) {
        date.setMonth(date.getMonth() + offset);
      }, function(date) {
        return date.getMonth();
      });
      d3_time.months = d3_time.month.range;
      d3_time.months.utc = d3_time.month.utc.range;
      function d3_time_scale(linear, methods, format) {
        function scale(x) {
          return linear(x);
        }
        scale.invert = function(x) {
          return d3_time_scaleDate(linear.invert(x));
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return linear.domain().map(d3_time_scaleDate);
          linear.domain(x);
          return scale;
        };
        function tickMethod(extent, count) {
          var span = extent[1] - extent[0],
              target = span / count,
              i = d3.bisect(d3_time_scaleSteps, target);
          return i == d3_time_scaleSteps.length ? [methods.year, d3_scale_linearTickRange(extent.map(function(d) {
            return d / 31536e6;
          }), count)[2]] : !i ? [d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2]] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
        }
        scale.nice = function(interval, skip) {
          var domain = scale.domain(),
              extent = d3_scaleExtent(domain),
              method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
          if (method)
            interval = method[0], skip = method[1];
          function skipped(date) {
            return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
          }
          return scale.domain(d3_scale_nice(domain, skip > 1 ? {
            floor: function(date) {
              while (skipped(date = interval.floor(date)))
                date = d3_time_scaleDate(date - 1);
              return date;
            },
            ceil: function(date) {
              while (skipped(date = interval.ceil(date)))
                date = d3_time_scaleDate(+date + 1);
              return date;
            }
          } : interval));
        };
        scale.ticks = function(interval, skip) {
          var extent = d3_scaleExtent(scale.domain()),
              method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [{range: interval}, skip];
          if (method)
            interval = method[0], skip = method[1];
          return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
        };
        scale.tickFormat = function() {
          return format;
        };
        scale.copy = function() {
          return d3_time_scale(linear.copy(), methods, format);
        };
        return d3_scale_linearRebind(scale, linear);
      }
      function d3_time_scaleDate(t) {
        return new Date(t);
      }
      var d3_time_scaleSteps = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];
      var d3_time_scaleLocalMethods = [[d3_time.second, 1], [d3_time.second, 5], [d3_time.second, 15], [d3_time.second, 30], [d3_time.minute, 1], [d3_time.minute, 5], [d3_time.minute, 15], [d3_time.minute, 30], [d3_time.hour, 1], [d3_time.hour, 3], [d3_time.hour, 6], [d3_time.hour, 12], [d3_time.day, 1], [d3_time.day, 2], [d3_time.week, 1], [d3_time.month, 1], [d3_time.month, 3], [d3_time.year, 1]];
      var d3_time_scaleLocalFormat = d3_time_format.multi([[".%L", function(d) {
        return d.getMilliseconds();
      }], [":%S", function(d) {
        return d.getSeconds();
      }], ["%I:%M", function(d) {
        return d.getMinutes();
      }], ["%I %p", function(d) {
        return d.getHours();
      }], ["%a %d", function(d) {
        return d.getDay() && d.getDate() != 1;
      }], ["%b %d", function(d) {
        return d.getDate() != 1;
      }], ["%B", function(d) {
        return d.getMonth();
      }], ["%Y", d3_true]]);
      var d3_time_scaleMilliseconds = {
        range: function(start, stop, step) {
          return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
        },
        floor: d3_identity,
        ceil: d3_identity
      };
      d3_time_scaleLocalMethods.year = d3_time.year;
      d3_time.scale = function() {
        return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
      };
      var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
        return [m[0].utc, m[1]];
      });
      var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([[".%L", function(d) {
        return d.getUTCMilliseconds();
      }], [":%S", function(d) {
        return d.getUTCSeconds();
      }], ["%I:%M", function(d) {
        return d.getUTCMinutes();
      }], ["%I %p", function(d) {
        return d.getUTCHours();
      }], ["%a %d", function(d) {
        return d.getUTCDay() && d.getUTCDate() != 1;
      }], ["%b %d", function(d) {
        return d.getUTCDate() != 1;
      }], ["%B", function(d) {
        return d.getUTCMonth();
      }], ["%Y", d3_true]]);
      d3_time_scaleUtcMethods.year = d3_time.year.utc;
      d3_time.scale.utc = function() {
        return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
      };
      d3.text = d3_xhrType(function(request) {
        return request.responseText;
      });
      d3.json = function(url, callback) {
        return d3_xhr(url, "application/json", d3_json, callback);
      };
      function d3_json(request) {
        return JSON.parse(request.responseText);
      }
      d3.html = function(url, callback) {
        return d3_xhr(url, "text/html", d3_html, callback);
      };
      function d3_html(request) {
        var range = d3_document.createRange();
        range.selectNode(d3_document.body);
        return range.createContextualFragment(request.responseText);
      }
      d3.xml = d3_xhrType(function(request) {
        return request.responseXML;
      });
      if (typeof define === "function" && define.amd)
        define(d3);
      else if (typeof module === "object" && module.exports)
        module.exports = d3;
      this.d3 = d3;
    }();
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, "d3");
});

System.register("github:novus/nvd3@1.7.1/build/nv.d3", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    (function() {
      var nv = window.nv || {};
      window.nv = nv;
      nv.dev = false;
      nv.tooltip = nv.tooltip || {};
      nv.utils = nv.utils || {};
      nv.models = nv.models || {};
      nv.charts = {};
      nv.graphs = [];
      nv.logs = {};
      nv.dispatch = d3.dispatch('render_start', 'render_end');
      if (!Function.prototype.bind) {
        Function.prototype.bind = function(oThis) {
          if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
          }
          var aArgs = Array.prototype.slice.call(arguments, 1),
              fToBind = this,
              fNOP = function() {},
              fBound = function() {
                return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
              };
          fNOP.prototype = this.prototype;
          fBound.prototype = new fNOP();
          return fBound;
        };
      }
      if (nv.dev) {
        nv.dispatch.on('render_start', function(e) {
          nv.logs.startTime = +new Date();
        });
        nv.dispatch.on('render_end', function(e) {
          nv.logs.endTime = +new Date();
          nv.logs.totalTime = nv.logs.endTime - nv.logs.startTime;
          nv.log('total', nv.logs.totalTime);
        });
      }
      nv.log = function() {
        if (nv.dev && window.console && console.log && console.log.apply)
          console.log.apply(console, arguments);
        else if (nv.dev && window.console && typeof console.log == "function" && Function.prototype.bind) {
          var log = Function.prototype.bind.call(console.log, console);
          log.apply(console, arguments);
        }
        return arguments[arguments.length - 1];
      };
      nv.deprecated = function(name) {
        if (nv.dev && console && console.warn) {
          console.warn('`' + name + '` has been deprecated.');
        }
      };
      nv.render = function render(step) {
        step = step || 1;
        nv.render.active = true;
        nv.dispatch.render_start();
        setTimeout(function() {
          var chart,
              graph;
          for (var i = 0; i < step && (graph = nv.render.queue[i]); i++) {
            chart = graph.generate();
            if (typeof graph.callback == typeof(Function))
              graph.callback(chart);
            nv.graphs.push(chart);
          }
          nv.render.queue.splice(0, i);
          if (nv.render.queue.length)
            setTimeout(arguments.callee, 0);
          else {
            nv.dispatch.render_end();
            nv.render.active = false;
          }
        }, 0);
      };
      nv.render.active = false;
      nv.render.queue = [];
      nv.addGraph = function(obj) {
        if (typeof arguments[0] === typeof(Function)) {
          obj = {
            generate: arguments[0],
            callback: arguments[1]
          };
        }
        nv.render.queue.push(obj);
        if (!nv.render.active) {
          nv.render();
        }
      };
      nv.interactiveGuideline = function() {
        "use strict";
        var tooltip = nv.models.tooltip();
        var width = null;
        var height = null;
        var margin = {
          left: 0,
          top: 0
        },
            xScale = d3.scale.linear(),
            yScale = d3.scale.linear(),
            dispatch = d3.dispatch('elementMousemove', 'elementMouseout', 'elementClick', 'elementDblclick'),
            showGuideLine = true;
        var svgContainer = null;
        var isMSIE = "ActiveXObject" in window;
        function layer(selection) {
          selection.each(function(data) {
            var container = d3.select(this);
            var availableWidth = (width || 960),
                availableHeight = (height || 400);
            var wrap = container.selectAll("g.nv-wrap.nv-interactiveLineLayer").data([data]);
            var wrapEnter = wrap.enter().append("g").attr("class", " nv-wrap nv-interactiveLineLayer");
            wrapEnter.append("g").attr("class", "nv-interactiveGuideLine");
            if (!svgContainer) {
              return ;
            }
            function mouseHandler() {
              var d3mouse = d3.mouse(this);
              var mouseX = d3mouse[0];
              var mouseY = d3mouse[1];
              var subtractMargin = true;
              var mouseOutAnyReason = false;
              if (isMSIE) {
                mouseX = d3.event.offsetX;
                mouseY = d3.event.offsetY;
                if (d3.event.target.tagName !== "svg") {
                  subtractMargin = false;
                }
                if (d3.event.target.className.baseVal.match("nv-legend")) {
                  mouseOutAnyReason = true;
                }
              }
              if (subtractMargin) {
                mouseX -= margin.left;
                mouseY -= margin.top;
              }
              if (mouseX < 0 || mouseY < 0 || mouseX > availableWidth || mouseY > availableHeight || (d3.event.relatedTarget && d3.event.relatedTarget.ownerSVGElement === undefined) || mouseOutAnyReason) {
                if (isMSIE) {
                  if (d3.event.relatedTarget && d3.event.relatedTarget.ownerSVGElement === undefined && d3.event.relatedTarget.className.match(tooltip.nvPointerEventsClass)) {
                    return ;
                  }
                }
                dispatch.elementMouseout({
                  mouseX: mouseX,
                  mouseY: mouseY
                });
                layer.renderGuideLine(null);
                return ;
              }
              var pointXValue = xScale.invert(mouseX);
              dispatch.elementMousemove({
                mouseX: mouseX,
                mouseY: mouseY,
                pointXValue: pointXValue
              });
              if (d3.event.type === "dblclick") {
                dispatch.elementDblclick({
                  mouseX: mouseX,
                  mouseY: mouseY,
                  pointXValue: pointXValue
                });
              }
              if (d3.event.type === 'click') {
                dispatch.elementClick({
                  mouseX: mouseX,
                  mouseY: mouseY,
                  pointXValue: pointXValue
                });
              }
            }
            svgContainer.on("mousemove", mouseHandler, true).on("mouseout", mouseHandler, true).on("dblclick", mouseHandler).on("click", mouseHandler);
            ;
            layer.renderGuideLine = function(x) {
              if (!showGuideLine)
                return ;
              var line = wrap.select(".nv-interactiveGuideLine").selectAll("line").data((x != null) ? [nv.utils.NaNtoZero(x)] : [], String);
              line.enter().append("line").attr("class", "nv-guideline").attr("x1", function(d) {
                return d;
              }).attr("x2", function(d) {
                return d;
              }).attr("y1", availableHeight).attr("y2", 0);
              ;
              line.exit().remove();
            };
          });
        }
        layer.dispatch = dispatch;
        layer.tooltip = tooltip;
        layer.margin = function(_) {
          if (!arguments.length)
            return margin;
          margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
          margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
          return layer;
        };
        layer.width = function(_) {
          if (!arguments.length)
            return width;
          width = _;
          return layer;
        };
        layer.height = function(_) {
          if (!arguments.length)
            return height;
          height = _;
          return layer;
        };
        layer.xScale = function(_) {
          if (!arguments.length)
            return xScale;
          xScale = _;
          return layer;
        };
        layer.showGuideLine = function(_) {
          if (!arguments.length)
            return showGuideLine;
          showGuideLine = _;
          return layer;
        };
        layer.svgContainer = function(_) {
          if (!arguments.length)
            return svgContainer;
          svgContainer = _;
          return layer;
        };
        return layer;
      };
      nv.interactiveBisect = function(values, searchVal, xAccessor) {
        "use strict";
        if (!(values instanceof Array)) {
          return null;
        }
        if (typeof xAccessor !== 'function') {
          xAccessor = function(d, i) {
            return d.x;
          };
        }
        var bisect = d3.bisector(xAccessor).left;
        var index = d3.max([0, bisect(values, searchVal) - 1]);
        var currentValue = xAccessor(values[index], index);
        if (typeof currentValue === 'undefined') {
          currentValue = index;
        }
        if (currentValue === searchVal) {
          return index;
        }
        var nextIndex = d3.min([index + 1, values.length - 1]);
        var nextValue = xAccessor(values[nextIndex], nextIndex);
        if (typeof nextValue === 'undefined') {
          nextValue = nextIndex;
        }
        if (Math.abs(nextValue - searchVal) >= Math.abs(currentValue - searchVal)) {
          return index;
        } else {
          return nextIndex;
        }
      };
      nv.nearestValueIndex = function(values, searchVal, threshold) {
        "use strict";
        var yDistMax = Infinity,
            indexToHighlight = null;
        values.forEach(function(d, i) {
          var delta = Math.abs(searchVal - d);
          if (delta <= yDistMax && delta < threshold) {
            yDistMax = delta;
            indexToHighlight = i;
          }
        });
        return indexToHighlight;
      };
      (function() {
        "use strict";
        window.nv.tooltip = {};
        window.nv.models.tooltip = function() {
          var content = null;
          var data = null;
          var gravity = 'w',
              distance = 50,
              snapDistance = 25,
              fixedTop = null,
              classes = null,
              chartContainer = null,
              tooltipElem = null,
              position = {
                left: null,
                top: null
              },
              enabled = true;
          var id = "nvtooltip-" + Math.floor(Math.random() * 100000);
          var nvPointerEventsClass = "nv-pointer-events-none";
          var valueFormatter = function(d, i) {
            return d;
          };
          var headerFormatter = function(d) {
            return d;
          };
          var contentGenerator = function(d) {
            if (content != null) {
              return content;
            }
            if (d == null) {
              return '';
            }
            var table = d3.select(document.createElement("table"));
            var theadEnter = table.selectAll("thead").data([d]).enter().append("thead");
            theadEnter.append("tr").append("td").attr("colspan", 3).append("strong").classed("x-value", true).html(headerFormatter(d.value));
            var tbodyEnter = table.selectAll("tbody").data([d]).enter().append("tbody");
            var trowEnter = tbodyEnter.selectAll("tr").data(function(p) {
              return p.series;
            }).enter().append("tr").classed("highlight", function(p) {
              return p.highlight;
            });
            trowEnter.append("td").classed("legend-color-guide", true).append("div").style("background-color", function(p) {
              return p.color;
            });
            trowEnter.append("td").classed("key", true).html(function(p) {
              return p.key;
            });
            trowEnter.append("td").classed("value", true).html(function(p, i) {
              return valueFormatter(p.value, i);
            });
            trowEnter.selectAll("td").each(function(p) {
              if (p.highlight) {
                var opacityScale = d3.scale.linear().domain([0, 1]).range(["#fff", p.color]);
                var opacity = 0.6;
                d3.select(this).style("border-bottom-color", opacityScale(opacity)).style("border-top-color", opacityScale(opacity));
                ;
              }
            });
            var html = table.node().outerHTML;
            if (d.footer !== undefined)
              html += "<div class='footer'>" + d.footer + "</div>";
            return html;
          };
          var dataSeriesExists = function(d) {
            if (d && d.series && d.series.length > 0) {
              return true;
            }
            return false;
          };
          function convertViewBoxRatio() {
            if (chartContainer) {
              var svg = d3.select(chartContainer);
              if (svg.node().tagName !== "svg") {
                svg = svg.select("svg");
              }
              var viewBox = (svg.node()) ? svg.attr('viewBox') : null;
              if (viewBox) {
                viewBox = viewBox.split(' ');
                var ratio = parseInt(svg.style('width')) / viewBox[2];
                position.left = position.left * ratio;
                position.top = position.top * ratio;
              }
            }
          }
          function getTooltipContainer(newContent) {
            var body;
            if (chartContainer) {
              body = d3.select(chartContainer);
            } else {
              body = d3.select("body");
            }
            var container = body.select(".nvtooltip");
            if (container.node() === null) {
              container = body.append("div").attr("class", "nvtooltip " + (classes ? classes : "xy-tooltip")).attr("id", id);
              ;
            }
            container.node().innerHTML = newContent;
            container.style("top", 0).style("left", 0).style("opacity", 0);
            container.selectAll("div, table, td, tr").classed(nvPointerEventsClass, true);
            container.classed(nvPointerEventsClass, true);
            return container.node();
          }
          function nvtooltip() {
            if (!enabled)
              return ;
            if (!dataSeriesExists(data))
              return ;
            convertViewBoxRatio();
            var left = position.left;
            var top = (fixedTop != null) ? fixedTop : position.top;
            var container = getTooltipContainer(contentGenerator(data));
            tooltipElem = container;
            if (chartContainer) {
              var svgComp = chartContainer.getElementsByTagName("svg")[0];
              var boundRect = (svgComp) ? svgComp.getBoundingClientRect() : chartContainer.getBoundingClientRect();
              var svgOffset = {
                left: 0,
                top: 0
              };
              if (svgComp) {
                var svgBound = svgComp.getBoundingClientRect();
                var chartBound = chartContainer.getBoundingClientRect();
                var svgBoundTop = svgBound.top;
                if (svgBoundTop < 0) {
                  var containerBound = chartContainer.getBoundingClientRect();
                  svgBoundTop = (Math.abs(svgBoundTop) > containerBound.height) ? 0 : svgBoundTop;
                }
                svgOffset.top = Math.abs(svgBoundTop - chartBound.top);
                svgOffset.left = Math.abs(svgBound.left - chartBound.left);
              }
              left += chartContainer.offsetLeft + svgOffset.left - 2 * chartContainer.scrollLeft;
              top += chartContainer.offsetTop + svgOffset.top - 2 * chartContainer.scrollTop;
            }
            if (snapDistance && snapDistance > 0) {
              top = Math.floor(top / snapDistance) * snapDistance;
            }
            nv.tooltip.calcTooltipPosition([left, top], gravity, distance, container);
            return nvtooltip;
          }
          nvtooltip.nvPointerEventsClass = nvPointerEventsClass;
          nvtooltip.content = function(_) {
            if (!arguments.length)
              return content;
            content = _;
            return nvtooltip;
          };
          nvtooltip.tooltipElem = function() {
            return tooltipElem;
          };
          nvtooltip.contentGenerator = function(_) {
            if (!arguments.length)
              return contentGenerator;
            if (typeof _ === 'function') {
              contentGenerator = _;
            }
            return nvtooltip;
          };
          nvtooltip.data = function(_) {
            if (!arguments.length)
              return data;
            data = _;
            return nvtooltip;
          };
          nvtooltip.gravity = function(_) {
            if (!arguments.length)
              return gravity;
            gravity = _;
            return nvtooltip;
          };
          nvtooltip.distance = function(_) {
            if (!arguments.length)
              return distance;
            distance = _;
            return nvtooltip;
          };
          nvtooltip.snapDistance = function(_) {
            if (!arguments.length)
              return snapDistance;
            snapDistance = _;
            return nvtooltip;
          };
          nvtooltip.classes = function(_) {
            if (!arguments.length)
              return classes;
            classes = _;
            return nvtooltip;
          };
          nvtooltip.chartContainer = function(_) {
            if (!arguments.length)
              return chartContainer;
            chartContainer = _;
            return nvtooltip;
          };
          nvtooltip.position = function(_) {
            if (!arguments.length)
              return position;
            position.left = (typeof _.left !== 'undefined') ? _.left : position.left;
            position.top = (typeof _.top !== 'undefined') ? _.top : position.top;
            return nvtooltip;
          };
          nvtooltip.fixedTop = function(_) {
            if (!arguments.length)
              return fixedTop;
            fixedTop = _;
            return nvtooltip;
          };
          nvtooltip.enabled = function(_) {
            if (!arguments.length)
              return enabled;
            enabled = _;
            return nvtooltip;
          };
          nvtooltip.valueFormatter = function(_) {
            if (!arguments.length)
              return valueFormatter;
            if (typeof _ === 'function') {
              valueFormatter = _;
            }
            return nvtooltip;
          };
          nvtooltip.headerFormatter = function(_) {
            if (!arguments.length)
              return headerFormatter;
            if (typeof _ === 'function') {
              headerFormatter = _;
            }
            return nvtooltip;
          };
          nvtooltip.id = function() {
            return id;
          };
          return nvtooltip;
        };
        nv.tooltip.show = function(pos, content, gravity, dist, parentContainer, classes) {
          var container = document.createElement('div');
          container.className = 'nvtooltip ' + (classes ? classes : 'xy-tooltip');
          var body = parentContainer;
          if (!parentContainer || parentContainer.tagName.match(/g|svg/i)) {
            body = document.getElementsByTagName('body')[0];
          }
          container.style.left = 0;
          container.style.top = 0;
          container.style.opacity = 0;
          if (typeof content !== 'string')
            container.appendChild(content);
          else
            container.innerHTML = content;
          body.appendChild(container);
          if (parentContainer) {
            pos[0] = pos[0] - parentContainer.scrollLeft;
            pos[1] = pos[1] - parentContainer.scrollTop;
          }
          nv.tooltip.calcTooltipPosition(pos, gravity, dist, container);
        };
        nv.tooltip.findFirstNonSVGParent = function(Elem) {
          while (Elem.tagName.match(/^g|svg$/i) !== null) {
            Elem = Elem.parentNode;
          }
          return Elem;
        };
        nv.tooltip.findTotalOffsetTop = function(Elem, initialTop) {
          var offsetTop = initialTop;
          do {
            if (!isNaN(Elem.offsetTop)) {
              offsetTop += (Elem.offsetTop);
            }
          } while (Elem = Elem.offsetParent);
          return offsetTop;
        };
        nv.tooltip.findTotalOffsetLeft = function(Elem, initialLeft) {
          var offsetLeft = initialLeft;
          do {
            if (!isNaN(Elem.offsetLeft)) {
              offsetLeft += (Elem.offsetLeft);
            }
          } while (Elem = Elem.offsetParent);
          return offsetLeft;
        };
        nv.tooltip.calcTooltipPosition = function(pos, gravity, dist, container) {
          var height = parseInt(container.offsetHeight),
              width = parseInt(container.offsetWidth),
              windowWidth = nv.utils.windowSize().width,
              windowHeight = nv.utils.windowSize().height,
              scrollTop = window.pageYOffset,
              scrollLeft = window.pageXOffset,
              left,
              top;
          windowHeight = window.innerWidth >= document.body.scrollWidth ? windowHeight : windowHeight - 16;
          windowWidth = window.innerHeight >= document.body.scrollHeight ? windowWidth : windowWidth - 16;
          gravity = gravity || 's';
          dist = dist || 20;
          var tooltipTop = function(Elem) {
            return nv.tooltip.findTotalOffsetTop(Elem, top);
          };
          var tooltipLeft = function(Elem) {
            return nv.tooltip.findTotalOffsetLeft(Elem, left);
          };
          switch (gravity) {
            case 'e':
              left = pos[0] - width - dist;
              top = pos[1] - (height / 2);
              var tLeft = tooltipLeft(container);
              var tTop = tooltipTop(container);
              if (tLeft < scrollLeft)
                left = pos[0] + dist > scrollLeft ? pos[0] + dist : scrollLeft - tLeft + left;
              if (tTop < scrollTop)
                top = scrollTop - tTop + top;
              if (tTop + height > scrollTop + windowHeight)
                top = scrollTop + windowHeight - tTop + top - height;
              break;
            case 'w':
              left = pos[0] + dist;
              top = pos[1] - (height / 2);
              var tLeft = tooltipLeft(container);
              var tTop = tooltipTop(container);
              if (tLeft + width > windowWidth)
                left = pos[0] - width - dist;
              if (tTop < scrollTop)
                top = scrollTop + 5;
              if (tTop + height > scrollTop + windowHeight)
                top = scrollTop + windowHeight - tTop + top - height;
              break;
            case 'n':
              left = pos[0] - (width / 2) - 5;
              top = pos[1] + dist;
              var tLeft = tooltipLeft(container);
              var tTop = tooltipTop(container);
              if (tLeft < scrollLeft)
                left = scrollLeft + 5;
              if (tLeft + width > windowWidth)
                left = left - width / 2 + 5;
              if (tTop + height > scrollTop + windowHeight)
                top = scrollTop + windowHeight - tTop + top - height;
              break;
            case 's':
              left = pos[0] - (width / 2);
              top = pos[1] - height - dist;
              var tLeft = tooltipLeft(container);
              var tTop = tooltipTop(container);
              if (tLeft < scrollLeft)
                left = scrollLeft + 5;
              if (tLeft + width > windowWidth)
                left = left - width / 2 + 5;
              if (scrollTop > tTop)
                top = scrollTop;
              break;
            case 'none':
              left = pos[0];
              top = pos[1] - dist;
              var tLeft = tooltipLeft(container);
              var tTop = tooltipTop(container);
              break;
          }
          container.style.left = left + 'px';
          container.style.top = top + 'px';
          container.style.opacity = 1;
          container.style.position = 'absolute';
          return container;
        };
        nv.tooltip.cleanup = function() {
          var tooltips = document.getElementsByClassName('nvtooltip');
          var purging = [];
          while (tooltips.length) {
            purging.push(tooltips[0]);
            tooltips[0].style.transitionDelay = '0 !important';
            tooltips[0].style.opacity = 0;
            tooltips[0].className = 'nvtooltip-pending-removal';
          }
          setTimeout(function() {
            while (purging.length) {
              var removeMe = purging.pop();
              removeMe.parentNode.removeChild(removeMe);
            }
          }, 500);
        };
      })();
      nv.utils.windowSize = function() {
        var size = {
          width: 640,
          height: 480
        };
        if (document.body && document.body.offsetWidth) {
          size.width = document.body.offsetWidth;
          size.height = document.body.offsetHeight;
        }
        if (document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
          size.width = document.documentElement.offsetWidth;
          size.height = document.documentElement.offsetHeight;
        }
        if (window.innerWidth && window.innerHeight) {
          size.width = window.innerWidth;
          size.height = window.innerHeight;
        }
        return (size);
      };
      nv.utils.windowResize = function(handler) {
        if (window.addEventListener) {
          window.addEventListener('resize', handler);
        } else {
          nv.log("ERROR: Failed to bind to window.resize with: ", handler);
        }
        return {
          callback: handler,
          clear: function() {
            window.removeEventListener('resize', handler);
          }
        };
      };
      nv.utils.getColor = function(color) {
        if (!arguments.length) {
          return nv.utils.defaultColor();
        } else if (color instanceof Array) {
          return function(d, i) {
            return d.color || color[i % color.length];
          };
        } else {
          return color;
        }
      };
      nv.utils.defaultColor = function() {
        var colors = d3.scale.category20().range();
        return function(d, i) {
          return d.color || colors[i % colors.length];
        };
      };
      nv.utils.customTheme = function(dictionary, getKey, defaultColors) {
        getKey = getKey || function(series) {
          return series.key;
        };
        defaultColors = defaultColors || d3.scale.category20().range();
        var defIndex = defaultColors.length;
        return function(series, index) {
          var key = getKey(series);
          if (typeof dictionary[key] === 'function') {
            return dictionary[key]();
          } else if (dictionary[key] !== undefined) {
            return dictionary[key];
          } else {
            if (!defIndex) {
              defIndex = defaultColors.length;
            }
            defIndex = defIndex - 1;
            return defaultColors[defIndex];
          }
        };
      };
      nv.utils.pjax = function(links, content) {
        var load = function(href) {
          d3.html(href, function(fragment) {
            var target = d3.select(content).node();
            target.parentNode.replaceChild(d3.select(fragment).select(content).node(), target);
            nv.utils.pjax(links, content);
          });
        };
        d3.selectAll(links).on("click", function() {
          history.pushState(this.href, this.textContent, this.href);
          load(this.href);
          d3.event.preventDefault();
        });
        d3.select(window).on("popstate", function() {
          if (d3.event.state) {
            load(d3.event.state);
          }
        });
      };
      nv.utils.calcApproxTextWidth = function(svgTextElem) {
        if (typeof svgTextElem.style === 'function' && typeof svgTextElem.text === 'function') {
          var fontSize = parseInt(svgTextElem.style("font-size").replace("px", ""));
          var textLength = svgTextElem.text().length;
          return textLength * fontSize * 0.5;
        }
        return 0;
      };
      nv.utils.NaNtoZero = function(n) {
        if (typeof n !== 'number' || isNaN(n) || n === null || n === Infinity || n === -Infinity) {
          return 0;
        }
        return n;
      };
      d3.selection.prototype.watchTransition = function(renderWatch) {
        var args = [this].concat([].slice.call(arguments, 1));
        return renderWatch.transition.apply(renderWatch, args);
      };
      nv.utils.renderWatch = function(dispatch, duration) {
        if (!(this instanceof nv.utils.renderWatch)) {
          return new nv.utils.renderWatch(dispatch, duration);
        }
        var _duration = duration !== undefined ? duration : 250;
        var renderStack = [];
        var self = this;
        this.models = function(models) {
          models = [].slice.call(arguments, 0);
          models.forEach(function(model) {
            model.__rendered = false;
            (function(m) {
              m.dispatch.on('renderEnd', function(arg) {
                m.__rendered = true;
                self.renderEnd('model');
              });
            })(model);
            if (renderStack.indexOf(model) < 0) {
              renderStack.push(model);
            }
          });
          return this;
        };
        this.reset = function(duration) {
          if (duration !== undefined) {
            _duration = duration;
          }
          renderStack = [];
        };
        this.transition = function(selection, args, duration) {
          args = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
          if (args.length > 1) {
            duration = args.pop();
          } else {
            duration = _duration !== undefined ? _duration : 250;
          }
          selection.__rendered = false;
          if (renderStack.indexOf(selection) < 0) {
            renderStack.push(selection);
          }
          if (duration === 0) {
            selection.__rendered = true;
            selection.delay = function() {
              return this;
            };
            selection.duration = function() {
              return this;
            };
            return selection;
          } else {
            if (selection.length === 0) {
              selection.__rendered = true;
            } else if (selection.every(function(d) {
              return !d.length;
            })) {
              selection.__rendered = true;
            } else {
              selection.__rendered = false;
            }
            var n = 0;
            return selection.transition().duration(duration).each(function() {
              ++n;
            }).each('end', function(d, i) {
              if (--n === 0) {
                selection.__rendered = true;
                self.renderEnd.apply(this, args);
              }
            });
          }
        };
        this.renderEnd = function() {
          if (renderStack.every(function(d) {
            return d.__rendered;
          })) {
            renderStack.forEach(function(d) {
              d.__rendered = false;
            });
            dispatch.renderEnd.apply(this, arguments);
          }
        };
      };
      nv.utils.deepExtend = function(dst) {
        var sources = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
        sources.forEach(function(source) {
          for (key in source) {
            var isArray = dst[key] instanceof Array;
            var isObject = typeof dst[key] === 'object';
            var srcObj = typeof source[key] === 'object';
            if (isObject && !isArray && srcObj) {
              nv.utils.deepExtend(dst[key], source[key]);
            } else {
              dst[key] = source[key];
            }
          }
        });
      };
      nv.utils.state = function() {
        if (!(this instanceof nv.utils.state)) {
          return new nv.utils.state();
        }
        var state = {};
        var _self = this;
        var _setState = function() {};
        var _getState = function() {
          return {};
        };
        var init = null;
        var changed = null;
        this.dispatch = d3.dispatch('change', 'set');
        this.dispatch.on('set', function(state) {
          _setState(state, true);
        });
        this.getter = function(fn) {
          _getState = fn;
          return this;
        };
        this.setter = function(fn, callback) {
          if (!callback) {
            callback = function() {};
          }
          _setState = function(state, update) {
            fn(state);
            if (update) {
              callback();
            }
          };
          return this;
        };
        this.init = function(state) {
          init = init || {};
          nv.utils.deepExtend(init, state);
        };
        var _set = function() {
          var settings = _getState();
          if (JSON.stringify(settings) === JSON.stringify(state)) {
            return false;
          }
          for (var key in settings) {
            if (state[key] === undefined) {
              state[key] = {};
            }
            state[key] = settings[key];
            changed = true;
          }
          return true;
        };
        this.update = function() {
          if (init) {
            _setState(init, false);
            init = null;
          }
          if (_set.call(this)) {
            this.dispatch.change(state);
          }
        };
      };
      nv.utils.optionsFunc = function(args) {
        nv.deprecated('nv.utils.optionsFunc');
        if (args) {
          d3.map(args).forEach((function(key, value) {
            if (typeof this[key] === "function") {
              this[key](value);
            }
          }).bind(this));
        }
        return this;
      };
      nv.utils.calcTicksX = function(numTicks, data) {
        var numValues = 1;
        var i = 0;
        for (i; i < data.length; i += 1) {
          var stream_len = data[i] && data[i].values ? data[i].values.length : 0;
          numValues = stream_len > numValues ? stream_len : numValues;
        }
        nv.log("Requested number of ticks: ", numTicks);
        nv.log("Calculated max values to be: ", numValues);
        numTicks = numTicks > numValues ? numTicks = numValues - 1 : numTicks;
        numTicks = numTicks < 1 ? 1 : numTicks;
        numTicks = Math.floor(numTicks);
        nv.log("Calculating tick count as: ", numTicks);
        return numTicks;
      };
      nv.utils.calcTicksY = function(numTicks, data) {
        return nv.utils.calcTicksX(numTicks, data);
      };
      nv.utils.initOption = function(chart, name) {
        if (chart._calls && chart._calls[name]) {
          chart[name] = chart._calls[name];
        } else {
          chart[name] = function(_) {
            if (!arguments.length)
              return chart._options[name];
            chart._options[name] = _;
            return chart;
          };
        }
      };
      nv.utils.initOptions = function(chart) {
        var ops = Object.getOwnPropertyNames(chart._options || {});
        var calls = Object.getOwnPropertyNames(chart._calls || {});
        ops = ops.concat(calls);
        for (var i in ops) {
          nv.utils.initOption(chart, ops[i]);
        }
      };
      nv.utils.inheritOptionsD3 = function(target, d3_source, oplist) {
        target._d3options = oplist.concat(target._d3options || []);
        oplist.unshift(d3_source);
        oplist.unshift(target);
        d3.rebind.apply(this, oplist);
      };
      nv.utils.arrayUnique = function(a) {
        return a.sort().filter(function(item, pos) {
          return !pos || item != a[pos - 1];
        });
      };
      nv.utils.symbolMap = d3.map();
      nv.utils.symbol = function() {
        var type,
            size = 64;
        function symbol(d, i) {
          var t = type.call(this, d, i);
          var s = size.call(this, d, i);
          if (d3.svg.symbolTypes.indexOf(t) !== -1) {
            return d3.svg.symbol().type(t).size(s)();
          } else {
            return nv.utils.symbolMap.get(t)(s);
          }
        }
        symbol.type = function(_) {
          if (!arguments.length)
            return type;
          type = d3.functor(_);
          return symbol;
        };
        symbol.size = function(_) {
          if (!arguments.length)
            return size;
          size = d3.functor(_);
          return symbol;
        };
        return symbol;
      };
      nv.utils.inheritOptions = function(target, source) {
        var ops = Object.getOwnPropertyNames(source._options || {});
        var calls = Object.getOwnPropertyNames(source._calls || {});
        var inherited = source._inherited || [];
        var d3ops = source._d3options || [];
        var args = ops.concat(calls).concat(inherited).concat(d3ops);
        args.unshift(source);
        args.unshift(target);
        d3.rebind.apply(this, args);
        target._inherited = nv.utils.arrayUnique(ops.concat(calls).concat(inherited).concat(ops).concat(target._inherited || []));
        target._d3options = nv.utils.arrayUnique(d3ops.concat(target._d3options || []));
      };
      nv.utils.initSVG = function(svg) {
        svg.classed({'nvd3-svg': true});
      };
      nv.models.axis = function() {
        "use strict";
        var axis = d3.svg.axis();
        var scale = d3.scale.linear();
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = 75,
            height = 60,
            axisLabelText = null,
            showMaxMin = true,
            highlightZero = true,
            rotateLabels = 0,
            rotateYLabel = true,
            staggerLabels = false,
            isOrdinal = false,
            ticks = null,
            axisLabelDistance = 0,
            duration = 250,
            dispatch = d3.dispatch('renderEnd'),
            axisRendered = false,
            maxMinRendered = false;
        ;
        axis.scale(scale).orient('bottom').tickFormat(function(d) {
          return d;
        });
        ;
        var scale0;
        var renderWatch = nv.utils.renderWatch(dispatch, duration);
        function chart(selection) {
          renderWatch.reset();
          selection.each(function(data) {
            var container = d3.select(this);
            nv.utils.initSVG(container);
            var wrap = container.selectAll('g.nv-wrap.nv-axis').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-axis');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            if (ticks !== null)
              axis.ticks(ticks);
            else if (axis.orient() == 'top' || axis.orient() == 'bottom')
              axis.ticks(Math.abs(scale.range()[1] - scale.range()[0]) / 100);
            g.watchTransition(renderWatch, 'axis').call(axis);
            scale0 = scale0 || axis.scale();
            var fmt = axis.tickFormat();
            if (fmt == null) {
              fmt = scale0.tickFormat();
            }
            var axisLabel = g.selectAll('text.nv-axislabel').data([axisLabelText || null]);
            axisLabel.exit().remove();
            switch (axis.orient()) {
              case 'top':
                axisLabel.enter().append('text').attr('class', 'nv-axislabel');
                var w;
                if (scale.range().length < 2) {
                  w = 0;
                } else if (scale.range().length === 2) {
                  w = scale.range()[1];
                } else {
                  w = scale.range()[scale.range().length - 1] + (scale.range()[1] - scale.range()[0]);
                }
                axisLabel.attr('text-anchor', 'middle').attr('y', 0).attr('x', w / 2);
                if (showMaxMin) {
                  var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin').data(scale.domain());
                  axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text');
                  axisMaxMin.exit().remove();
                  axisMaxMin.attr('transform', function(d, i) {
                    return 'translate(' + nv.utils.NaNtoZero(scale(d)) + ',0)';
                  }).select('text').attr('dy', '-0.5em').attr('y', -axis.tickPadding()).attr('text-anchor', 'middle').text(function(d, i) {
                    var v = fmt(d);
                    return ('' + v).match('NaN') ? '' : v;
                  });
                  axisMaxMin.watchTransition(renderWatch, 'min-max top').attr('transform', function(d, i) {
                    return 'translate(' + nv.utils.NaNtoZero(scale.range()[i]) + ',0)';
                  });
                }
                break;
              case 'bottom':
                var xLabelMargin = axisLabelDistance + 36;
                var maxTextWidth = 30;
                var xTicks = g.selectAll('g').select("text");
                if (rotateLabels % 360) {
                  xTicks.each(function(d, i) {
                    var width = this.getBoundingClientRect().width;
                    if (width > maxTextWidth)
                      maxTextWidth = width;
                  });
                  var sin = Math.abs(Math.sin(rotateLabels * Math.PI / 180));
                  var xLabelMargin = (sin ? sin * maxTextWidth : maxTextWidth) + 30;
                  xTicks.attr('transform', function(d, i, j) {
                    return 'rotate(' + rotateLabels + ' 0,0)';
                  }).style('text-anchor', rotateLabels % 360 > 0 ? 'start' : 'end');
                }
                axisLabel.enter().append('text').attr('class', 'nv-axislabel');
                var w;
                if (scale.range().length < 2) {
                  w = 0;
                } else if (scale.range().length === 2) {
                  w = scale.range()[1];
                } else {
                  w = scale.range()[scale.range().length - 1] + (scale.range()[1] - scale.range()[0]);
                }
                axisLabel.attr('text-anchor', 'middle').attr('y', xLabelMargin).attr('x', w / 2);
                if (showMaxMin) {
                  var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin').data([scale.domain()[0], scale.domain()[scale.domain().length - 1]]);
                  axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text');
                  axisMaxMin.exit().remove();
                  axisMaxMin.attr('transform', function(d, i) {
                    return 'translate(' + nv.utils.NaNtoZero((scale(d) + (isOrdinal ? scale.rangeBand() / 2 : 0))) + ',0)';
                  }).select('text').attr('dy', '.71em').attr('y', axis.tickPadding()).attr('transform', function(d, i, j) {
                    return 'rotate(' + rotateLabels + ' 0,0)';
                  }).style('text-anchor', rotateLabels ? (rotateLabels % 360 > 0 ? 'start' : 'end') : 'middle').text(function(d, i) {
                    var v = fmt(d);
                    return ('' + v).match('NaN') ? '' : v;
                  });
                  axisMaxMin.watchTransition(renderWatch, 'min-max bottom').attr('transform', function(d, i) {
                    return 'translate(' + nv.utils.NaNtoZero((scale(d) + (isOrdinal ? scale.rangeBand() / 2 : 0))) + ',0)';
                  });
                }
                if (staggerLabels)
                  xTicks.attr('transform', function(d, i) {
                    return 'translate(0,' + (i % 2 == 0 ? '0' : '12') + ')';
                  });
                break;
              case 'right':
                axisLabel.enter().append('text').attr('class', 'nv-axislabel');
                axisLabel.style('text-anchor', rotateYLabel ? 'middle' : 'begin').attr('transform', rotateYLabel ? 'rotate(90)' : '').attr('y', rotateYLabel ? (-Math.max(margin.right, width) + 12) : -10).attr('x', rotateYLabel ? (scale.range()[0] / 2) : axis.tickPadding());
                if (showMaxMin) {
                  var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin').data(scale.domain());
                  axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text').style('opacity', 0);
                  axisMaxMin.exit().remove();
                  axisMaxMin.attr('transform', function(d, i) {
                    return 'translate(0,' + nv.utils.NaNtoZero(scale(d)) + ')';
                  }).select('text').attr('dy', '.32em').attr('y', 0).attr('x', axis.tickPadding()).style('text-anchor', 'start').text(function(d, i) {
                    var v = fmt(d);
                    return ('' + v).match('NaN') ? '' : v;
                  });
                  axisMaxMin.watchTransition(renderWatch, 'min-max right').attr('transform', function(d, i) {
                    return 'translate(0,' + nv.utils.NaNtoZero(scale.range()[i]) + ')';
                  }).select('text').style('opacity', 1);
                }
                break;
              case 'left':
                axisLabel.enter().append('text').attr('class', 'nv-axislabel');
                axisLabel.style('text-anchor', rotateYLabel ? 'middle' : 'end').attr('transform', rotateYLabel ? 'rotate(-90)' : '').attr('y', rotateYLabel ? (-Math.max(margin.left, width) + 25 - (axisLabelDistance || 0)) : -10).attr('x', rotateYLabel ? (-scale.range()[0] / 2) : -axis.tickPadding());
                if (showMaxMin) {
                  var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin').data(scale.domain());
                  axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text').style('opacity', 0);
                  axisMaxMin.exit().remove();
                  axisMaxMin.attr('transform', function(d, i) {
                    return 'translate(0,' + nv.utils.NaNtoZero(scale0(d)) + ')';
                  }).select('text').attr('dy', '.32em').attr('y', 0).attr('x', -axis.tickPadding()).attr('text-anchor', 'end').text(function(d, i) {
                    var v = fmt(d);
                    return ('' + v).match('NaN') ? '' : v;
                  });
                  axisMaxMin.watchTransition(renderWatch, 'min-max right').attr('transform', function(d, i) {
                    return 'translate(0,' + nv.utils.NaNtoZero(scale.range()[i]) + ')';
                  }).select('text').style('opacity', 1);
                }
                break;
            }
            axisLabel.text(function(d) {
              return d;
            });
            if (showMaxMin && (axis.orient() === 'left' || axis.orient() === 'right')) {
              g.selectAll('g').each(function(d, i) {
                d3.select(this).select('text').attr('opacity', 1);
                if (scale(d) < scale.range()[1] + 10 || scale(d) > scale.range()[0] - 10) {
                  if (d > 1e-10 || d < -1e-10)
                    d3.select(this).attr('opacity', 0);
                  d3.select(this).select('text').attr('opacity', 0);
                }
              });
              if (scale.domain()[0] == scale.domain()[1] && scale.domain()[0] == 0) {
                wrap.selectAll('g.nv-axisMaxMin').style('opacity', function(d, i) {
                  return !i ? 1 : 0;
                });
              }
            }
            if (showMaxMin && (axis.orient() === 'top' || axis.orient() === 'bottom')) {
              var maxMinRange = [];
              wrap.selectAll('g.nv-axisMaxMin').each(function(d, i) {
                try {
                  if (i)
                    maxMinRange.push(scale(d) - this.getBoundingClientRect().width - 4);
                  else
                    maxMinRange.push(scale(d) + this.getBoundingClientRect().width + 4);
                } catch (err) {
                  if (i)
                    maxMinRange.push(scale(d) - 4);
                  else
                    maxMinRange.push(scale(d) + 4);
                }
              });
              g.selectAll('g').each(function(d, i) {
                if (scale(d) < maxMinRange[0] || scale(d) > maxMinRange[1]) {
                  if (d > 1e-10 || d < -1e-10)
                    d3.select(this).remove();
                  else
                    d3.select(this).select('text').remove();
                }
              });
            }
            if (highlightZero) {
              g.selectAll('.tick').filter(function(d) {
                return !parseFloat(Math.round(this.__data__ * 100000) / 1000000) && (this.__data__ !== undefined);
              }).classed('zero', true);
            }
            scale0 = scale.copy();
          });
          renderWatch.renderEnd('axis immediate');
          return chart;
        }
        chart.axis = axis;
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          axisLabelDistance: {
            get: function() {
              return axisLabelDistance;
            },
            set: function(_) {
              axisLabelDistance = _;
            }
          },
          staggerLabels: {
            get: function() {
              return staggerLabels;
            },
            set: function(_) {
              staggerLabels = _;
            }
          },
          rotateLabels: {
            get: function() {
              return rotateLabels;
            },
            set: function(_) {
              rotateLabels = _;
            }
          },
          rotateYLabel: {
            get: function() {
              return rotateYLabel;
            },
            set: function(_) {
              rotateYLabel = _;
            }
          },
          highlightZero: {
            get: function() {
              return highlightZero;
            },
            set: function(_) {
              highlightZero = _;
            }
          },
          showMaxMin: {
            get: function() {
              return showMaxMin;
            },
            set: function(_) {
              showMaxMin = _;
            }
          },
          axisLabel: {
            get: function() {
              return axisLabelText;
            },
            set: function(_) {
              axisLabelText = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          ticks: {
            get: function() {
              return ticks;
            },
            set: function(_) {
              ticks = _;
            }
          },
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
            }
          },
          scale: {
            get: function() {
              return scale;
            },
            set: function(_) {
              scale = _;
              axis.scale(scale);
              isOrdinal = typeof scale.rangeBands === 'function';
              nv.utils.inheritOptionsD3(chart, scale, ['domain', 'range', 'rangeBand', 'rangeBands']);
            }
          }
        });
        nv.utils.initOptions(chart);
        nv.utils.inheritOptionsD3(chart, axis, ['orient', 'tickValues', 'tickSubdivide', 'tickSize', 'tickPadding', 'tickFormat']);
        nv.utils.inheritOptionsD3(chart, scale, ['domain', 'range', 'rangeBand', 'rangeBands']);
        return chart;
      };
      nv.models.bullet = function() {
        "use strict";
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            orient = 'left',
            reverse = false,
            ranges = function(d) {
              return d.ranges;
            },
            markers = function(d) {
              return d.markers ? d.markers : [0];
            },
            measures = function(d) {
              return d.measures;
            },
            rangeLabels = function(d) {
              return d.rangeLabels ? d.rangeLabels : [];
            },
            markerLabels = function(d) {
              return d.markerLabels ? d.markerLabels : [];
            },
            measureLabels = function(d) {
              return d.measureLabels ? d.measureLabels : [];
            },
            forceX = [0],
            width = 380,
            height = 30,
            tickFormat = null,
            color = nv.utils.getColor(['#1f77b4']),
            dispatch = d3.dispatch('elementMouseover', 'elementMouseout');
        ;
        function chart(selection) {
          selection.each(function(d, i) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom,
                container = d3.select(this);
            nv.utils.initSVG(container);
            var rangez = ranges.call(this, d, i).slice().sort(d3.descending),
                markerz = markers.call(this, d, i).slice().sort(d3.descending),
                measurez = measures.call(this, d, i).slice().sort(d3.descending),
                rangeLabelz = rangeLabels.call(this, d, i).slice(),
                markerLabelz = markerLabels.call(this, d, i).slice(),
                measureLabelz = measureLabels.call(this, d, i).slice();
            var x1 = d3.scale.linear().domain(d3.extent(d3.merge([forceX, rangez]))).range(reverse ? [availableWidth, 0] : [0, availableWidth]);
            var x0 = this.__chart__ || d3.scale.linear().domain([0, Infinity]).range(x1.range());
            this.__chart__ = x1;
            var rangeMin = d3.min(rangez),
                rangeMax = d3.max(rangez),
                rangeAvg = rangez[1];
            var wrap = container.selectAll('g.nv-wrap.nv-bullet').data([d]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-bullet');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('rect').attr('class', 'nv-range nv-rangeMax');
            gEnter.append('rect').attr('class', 'nv-range nv-rangeAvg');
            gEnter.append('rect').attr('class', 'nv-range nv-rangeMin');
            gEnter.append('rect').attr('class', 'nv-measure');
            gEnter.append('path').attr('class', 'nv-markerTriangle');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var w0 = function(d) {
              return Math.abs(x0(d) - x0(0));
            },
                w1 = function(d) {
                  return Math.abs(x1(d) - x1(0));
                };
            var xp0 = function(d) {
              return d < 0 ? x0(d) : x0(0);
            },
                xp1 = function(d) {
                  return d < 0 ? x1(d) : x1(0);
                };
            g.select('rect.nv-rangeMax').attr('height', availableHeight).attr('width', w1(rangeMax > 0 ? rangeMax : rangeMin)).attr('x', xp1(rangeMax > 0 ? rangeMax : rangeMin)).datum(rangeMax > 0 ? rangeMax : rangeMin);
            g.select('rect.nv-rangeAvg').attr('height', availableHeight).attr('width', w1(rangeAvg)).attr('x', xp1(rangeAvg)).datum(rangeAvg);
            g.select('rect.nv-rangeMin').attr('height', availableHeight).attr('width', w1(rangeMax)).attr('x', xp1(rangeMax)).attr('width', w1(rangeMax > 0 ? rangeMin : rangeMax)).attr('x', xp1(rangeMax > 0 ? rangeMin : rangeMax)).datum(rangeMax > 0 ? rangeMin : rangeMax);
            g.select('rect.nv-measure').style('fill', color).attr('height', availableHeight / 3).attr('y', availableHeight / 3).attr('width', measurez < 0 ? x1(0) - x1(measurez[0]) : x1(measurez[0]) - x1(0)).attr('x', xp1(measurez)).on('mouseover', function() {
              dispatch.elementMouseover({
                value: measurez[0],
                label: measureLabelz[0] || 'Current',
                pos: [x1(measurez[0]), availableHeight / 2]
              });
            }).on('mouseout', function() {
              dispatch.elementMouseout({
                value: measurez[0],
                label: measureLabelz[0] || 'Current'
              });
            });
            var h3 = availableHeight / 6;
            if (markerz[0]) {
              g.selectAll('path.nv-markerTriangle').attr('transform', function(d) {
                return 'translate(' + x1(markerz[0]) + ',' + (availableHeight / 2) + ')';
              }).attr('d', 'M0,' + h3 + 'L' + h3 + ',' + (-h3) + ' ' + (-h3) + ',' + (-h3) + 'Z').on('mouseover', function() {
                dispatch.elementMouseover({
                  value: markerz[0],
                  label: markerLabelz[0] || 'Previous',
                  pos: [x1(markerz[0]), availableHeight / 2]
                });
              }).on('mouseout', function() {
                dispatch.elementMouseout({
                  value: markerz[0],
                  label: markerLabelz[0] || 'Previous'
                });
              });
            } else {
              g.selectAll('path.nv-markerTriangle').remove();
            }
            wrap.selectAll('.nv-range').on('mouseover', function(d, i) {
              var label = rangeLabelz[i] || (!i ? "Maximum" : i == 1 ? "Mean" : "Minimum");
              dispatch.elementMouseover({
                value: d,
                label: label,
                pos: [x1(d), availableHeight / 2]
              });
            }).on('mouseout', function(d, i) {
              var label = rangeLabelz[i] || (!i ? "Maximum" : i == 1 ? "Mean" : "Minimum");
              dispatch.elementMouseout({
                value: d,
                label: label
              });
            });
          });
          return chart;
        }
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          ranges: {
            get: function() {
              return ranges;
            },
            set: function(_) {
              ranges = _;
            }
          },
          markers: {
            get: function() {
              return markers;
            },
            set: function(_) {
              markers = _;
            }
          },
          measures: {
            get: function() {
              return measures;
            },
            set: function(_) {
              measures = _;
            }
          },
          forceX: {
            get: function() {
              return forceX;
            },
            set: function(_) {
              forceX = _;
            }
          },
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          tickFormat: {
            get: function() {
              return tickFormat;
            },
            set: function(_) {
              tickFormat = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          orient: {
            get: function() {
              return orient;
            },
            set: function(_) {
              orient = _;
              reverse = orient == 'right' || orient == 'bottom';
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.bulletChart = function() {
        "use strict";
        var bullet = nv.models.bullet();
        ;
        var orient = 'left',
            reverse = false,
            margin = {
              top: 5,
              right: 40,
              bottom: 20,
              left: 120
            },
            ranges = function(d) {
              return d.ranges;
            },
            markers = function(d) {
              return d.markers ? d.markers : [0];
            },
            measures = function(d) {
              return d.measures;
            },
            width = null,
            height = 55,
            tickFormat = null,
            tooltips = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + x + '</h3>' + '<p>' + y + '</p>';
            },
            noData = 'No Data Available.',
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide');
        ;
        var showTooltip = function(e, offsetElement) {
          var left = e.pos[0] + (offsetElement.offsetLeft || 0) + margin.left,
              top = e.pos[1] + (offsetElement.offsetTop || 0) + margin.top,
              content = tooltip(e.key, e.label, e.value, e, chart);
          nv.tooltip.show([left, top], content, e.value < 0 ? 'e' : 'w', null, offsetElement);
        };
        function chart(selection) {
          selection.each(function(d, i) {
            var container = d3.select(this);
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom,
                that = this;
            chart.update = function() {
              chart(selection);
            };
            chart.container = this;
            if (!d || !ranges.call(this, d, i)) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', 18 + margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            var rangez = ranges.call(this, d, i).slice().sort(d3.descending),
                markerz = markers.call(this, d, i).slice().sort(d3.descending),
                measurez = measures.call(this, d, i).slice().sort(d3.descending);
            var wrap = container.selectAll('g.nv-wrap.nv-bulletChart').data([d]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-bulletChart');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-bulletWrap');
            gEnter.append('g').attr('class', 'nv-titles');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var x1 = d3.scale.linear().domain([0, Math.max(rangez[0], markerz[0], measurez[0])]).range(reverse ? [availableWidth, 0] : [0, availableWidth]);
            var x0 = this.__chart__ || d3.scale.linear().domain([0, Infinity]).range(x1.range());
            this.__chart__ = x1;
            var w0 = function(d) {
              return Math.abs(x0(d) - x0(0));
            },
                w1 = function(d) {
                  return Math.abs(x1(d) - x1(0));
                };
            var title = gEnter.select('.nv-titles').append('g').attr('text-anchor', 'end').attr('transform', 'translate(-6,' + (height - margin.top - margin.bottom) / 2 + ')');
            title.append('text').attr('class', 'nv-title').text(function(d) {
              return d.title;
            });
            title.append('text').attr('class', 'nv-subtitle').attr('dy', '1em').text(function(d) {
              return d.subtitle;
            });
            bullet.width(availableWidth).height(availableHeight);
            var bulletWrap = g.select('.nv-bulletWrap');
            d3.transition(bulletWrap).call(bullet);
            var format = tickFormat || x1.tickFormat(availableWidth / 100);
            var tick = g.selectAll('g.nv-tick').data(x1.ticks(availableWidth / 50), function(d) {
              return this.textContent || format(d);
            });
            var tickEnter = tick.enter().append('g').attr('class', 'nv-tick').attr('transform', function(d) {
              return 'translate(' + x0(d) + ',0)';
            }).style('opacity', 1e-6);
            tickEnter.append('line').attr('y1', availableHeight).attr('y2', availableHeight * 7 / 6);
            tickEnter.append('text').attr('text-anchor', 'middle').attr('dy', '1em').attr('y', availableHeight * 7 / 6).text(format);
            var tickUpdate = d3.transition(tick).attr('transform', function(d) {
              return 'translate(' + x1(d) + ',0)';
            }).style('opacity', 1);
            tickUpdate.select('line').attr('y1', availableHeight).attr('y2', availableHeight * 7 / 6);
            tickUpdate.select('text').attr('y', availableHeight * 7 / 6);
            d3.transition(tick.exit()).attr('transform', function(d) {
              return 'translate(' + x1(d) + ',0)';
            }).style('opacity', 1e-6).remove();
            dispatch.on('tooltipShow', function(e) {
              e.key = d.title;
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
          });
          d3.timer.flush();
          return chart;
        }
        bullet.dispatch.on('elementMouseover.tooltip', function(e) {
          dispatch.tooltipShow(e);
        });
        bullet.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.bullet = bullet;
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          ranges: {
            get: function() {
              return ranges;
            },
            set: function(_) {
              ranges = _;
            }
          },
          markers: {
            get: function() {
              return markers;
            },
            set: function(_) {
              markers = _;
            }
          },
          measures: {
            get: function() {
              return measures;
            },
            set: function(_) {
              measures = _;
            }
          },
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          tickFormat: {
            get: function() {
              return tickFormat;
            },
            set: function(_) {
              tickFormat = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          orient: {
            get: function() {
              return orient;
            },
            set: function(_) {
              orient = _;
              reverse = orient == 'right' || orient == 'bottom';
            }
          }
        });
        nv.utils.inheritOptions(chart, bullet);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.cumulativeLineChart = function() {
        "use strict";
        var lines = nv.models.line(),
            xAxis = nv.models.axis(),
            yAxis = nv.models.axis(),
            legend = nv.models.legend(),
            controls = nv.models.legend(),
            interactiveLayer = nv.interactiveGuideline();
        ;
        var margin = {
          top: 30,
          right: 30,
          bottom: 50,
          left: 60
        },
            color = nv.utils.defaultColor(),
            width = null,
            height = null,
            showLegend = true,
            showXAxis = true,
            showYAxis = true,
            rightAlignYAxis = false,
            tooltips = true,
            showControls = true,
            useInteractiveGuideline = false,
            rescaleY = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
            },
            x,
            y,
            id = lines.id(),
            state = nv.utils.state(),
            defaultState = null,
            noData = 'No Data Available.',
            average = function(d) {
              return d.average;
            },
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState', 'renderEnd'),
            transitionDuration = 250,
            duration = 250,
            noErrorCheck = false;
        ;
        state.index = 0;
        state.rescaleY = rescaleY;
        xAxis.orient('bottom').tickPadding(7);
        ;
        yAxis.orient((rightAlignYAxis) ? 'right' : 'left');
        ;
        controls.updateState(false);
        var dx = d3.scale.linear(),
            index = {
              i: 0,
              x: 0
            },
            renderWatch = nv.utils.renderWatch(dispatch, duration);
        ;
        var showTooltip = function(e, offsetElement) {
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
              y = yAxis.tickFormat()(lines.y()(e.point, e.pointIndex)),
              content = tooltip(e.series.key, x, y, e, chart);
          nv.tooltip.show([left, top], content, null, null, offsetElement);
        };
        var stateGetter = function(data) {
          return function() {
            return {
              active: data.map(function(d) {
                return !d.disabled;
              }),
              index: index.i,
              rescaleY: rescaleY
            };
          };
        };
        var stateSetter = function(data) {
          return function(state) {
            if (state.index !== undefined)
              index.i = state.index;
            if (state.rescaleY !== undefined)
              rescaleY = state.rescaleY;
            if (state.active !== undefined)
              data.forEach(function(series, i) {
                series.disabled = !state.active[i];
              });
          };
        };
        function chart(selection) {
          renderWatch.reset();
          renderWatch.models(lines);
          if (showXAxis)
            renderWatch.models(xAxis);
          if (showYAxis)
            renderWatch.models(yAxis);
          selection.each(function(data) {
            var container = d3.select(this);
            nv.utils.initSVG(container);
            container.classed('nv-chart-' + id, true);
            var that = this;
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            chart.update = function() {
              if (duration === 0)
                container.call(chart);
              else
                container.transition().duration(duration).call(chart);
            };
            chart.container = this;
            state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();
            state.disabled = data.map(function(d) {
              return !!d.disabled;
            });
            if (!defaultState) {
              var key;
              defaultState = {};
              for (key in state) {
                if (state[key] instanceof Array)
                  defaultState[key] = state[key].slice(0);
                else
                  defaultState[key] = state[key];
              }
            }
            var indexDrag = d3.behavior.drag().on('dragstart', dragStart).on('drag', dragMove).on('dragend', dragEnd);
            function dragStart(d, i) {
              d3.select(chart.container).style('cursor', 'ew-resize');
            }
            function dragMove(d, i) {
              index.x = d3.event.x;
              index.i = Math.round(dx.invert(index.x));
              updateZero();
            }
            function dragEnd(d, i) {
              d3.select(chart.container).style('cursor', 'auto');
              state.index = index.i;
              dispatch.stateChange(state);
            }
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            x = lines.xScale();
            y = lines.yScale();
            if (!rescaleY) {
              var seriesDomains = data.filter(function(series) {
                return !series.disabled;
              }).map(function(series, i) {
                var initialDomain = d3.extent(series.values, lines.y());
                if (initialDomain[0] < -.95)
                  initialDomain[0] = -.95;
                return [(initialDomain[0] - initialDomain[1]) / (1 + initialDomain[1]), (initialDomain[1] - initialDomain[0]) / (1 + initialDomain[0])];
              });
              var completeDomain = [d3.min(seriesDomains, function(d) {
                return d[0];
              }), d3.max(seriesDomains, function(d) {
                return d[1];
              })];
              lines.yDomain(completeDomain);
            } else {
              lines.yDomain(null);
            }
            dx.domain([0, data[0].values.length - 1]).range([0, availableWidth]).clamp(true);
            var data = indexify(index.i, data);
            var interactivePointerEvents = (useInteractiveGuideline) ? "none" : "all";
            var wrap = container.selectAll('g.nv-wrap.nv-cumulativeLine').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-cumulativeLine').append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-interactive');
            gEnter.append('g').attr('class', 'nv-x nv-axis').style("pointer-events", "none");
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-background');
            gEnter.append('g').attr('class', 'nv-linesWrap').style("pointer-events", interactivePointerEvents);
            gEnter.append('g').attr('class', 'nv-avgLinesWrap').style("pointer-events", "none");
            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-controlsWrap');
            if (showLegend) {
              legend.width(availableWidth);
              g.select('.nv-legendWrap').datum(data).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
              }
              g.select('.nv-legendWrap').attr('transform', 'translate(0,' + (-margin.top) + ')');
            }
            if (showControls) {
              var controlsData = [{
                key: 'Re-scale y-axis',
                disabled: !rescaleY
              }];
              controls.width(140).color(['#444', '#444', '#444']).rightAlign(false).margin({
                top: 5,
                right: 0,
                bottom: 5,
                left: 20
              });
              ;
              g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + (-margin.top) + ')').call(controls);
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            if (rightAlignYAxis) {
              g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
            }
            var tempDisabled = data.filter(function(d) {
              return d.tempDisabled;
            });
            wrap.select('.tempDisabled').remove();
            if (tempDisabled.length) {
              wrap.append('text').attr('class', 'tempDisabled').attr('x', availableWidth / 2).attr('y', '-.71em').style('text-anchor', 'end').text(tempDisabled.map(function(d) {
                return d.key;
              }).join(', ') + ' values cannot be calculated for this time period.');
            }
            if (useInteractiveGuideline) {
              interactiveLayer.width(availableWidth).height(availableHeight).margin({
                left: margin.left,
                top: margin.top
              }).svgContainer(container).xScale(x);
              wrap.select(".nv-interactive").call(interactiveLayer);
            }
            gEnter.select('.nv-background').append('rect');
            g.select('.nv-background rect').attr('width', availableWidth).attr('height', availableHeight);
            lines.y(function(d) {
              return d.display.y;
            }).width(availableWidth).height(availableHeight).color(data.map(function(d, i) {
              return d.color || color(d, i);
            }).filter(function(d, i) {
              return !data[i].disabled && !data[i].tempDisabled;
            }));
            var linesWrap = g.select('.nv-linesWrap').datum(data.filter(function(d) {
              return !d.disabled && !d.tempDisabled;
            }));
            linesWrap.call(lines);
            data.forEach(function(d, i) {
              d.seriesIndex = i;
            });
            var avgLineData = data.filter(function(d) {
              return !d.disabled && !!average(d);
            });
            var avgLines = g.select(".nv-avgLinesWrap").selectAll("line").data(avgLineData, function(d) {
              return d.key;
            });
            var getAvgLineY = function(d) {
              var yVal = y(average(d));
              if (yVal < 0)
                return 0;
              if (yVal > availableHeight)
                return availableHeight;
              return yVal;
            };
            avgLines.enter().append('line').style('stroke-width', 2).style('stroke-dasharray', '10,10').style('stroke', function(d, i) {
              return lines.color()(d, d.seriesIndex);
            }).attr('x1', 0).attr('x2', availableWidth).attr('y1', getAvgLineY).attr('y2', getAvgLineY);
            avgLines.style('stroke-opacity', function(d) {
              var yVal = y(average(d));
              if (yVal < 0 || yVal > availableHeight)
                return 0;
              return 1;
            }).attr('x1', 0).attr('x2', availableWidth).attr('y1', getAvgLineY).attr('y2', getAvgLineY);
            avgLines.exit().remove();
            var indexLine = linesWrap.selectAll('.nv-indexLine').data([index]);
            indexLine.enter().append('rect').attr('class', 'nv-indexLine').attr('width', 3).attr('x', -2).attr('fill', 'red').attr('fill-opacity', .5).style("pointer-events", "all").call(indexDrag);
            indexLine.attr('transform', function(d) {
              return 'translate(' + dx(d.i) + ',0)';
            }).attr('height', availableHeight);
            if (showXAxis) {
              xAxis.scale(x).ticks(nv.utils.calcTicksX(availableWidth / 70, data)).tickSize(-availableHeight, 0);
              g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')');
              g.select('.nv-x.nv-axis').call(xAxis);
            }
            if (showYAxis) {
              yAxis.scale(y).ticks(nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);
              g.select('.nv-y.nv-axis').call(yAxis);
            }
            function updateZero() {
              indexLine.data([index]);
              var oldDuration = chart.duration();
              chart.duration(0);
              chart.update();
              chart.duration(oldDuration);
            }
            g.select('.nv-background rect').on('click', function() {
              index.x = d3.mouse(this)[0];
              index.i = Math.round(dx.invert(index.x));
              state.index = index.i;
              dispatch.stateChange(state);
              updateZero();
            });
            lines.dispatch.on('elementClick', function(e) {
              index.i = e.pointIndex;
              index.x = dx(index.i);
              state.index = index.i;
              dispatch.stateChange(state);
              updateZero();
            });
            controls.dispatch.on('legendClick', function(d, i) {
              d.disabled = !d.disabled;
              rescaleY = !d.disabled;
              state.rescaleY = rescaleY;
              dispatch.stateChange(state);
              chart.update();
            });
            legend.dispatch.on('stateChange', function(newState) {
              for (var key in newState)
                state[key] = newState[key];
              dispatch.stateChange(state);
              chart.update();
            });
            interactiveLayer.dispatch.on('elementMousemove', function(e) {
              lines.clearHighlights();
              var singlePoint,
                  pointIndex,
                  pointXLocation,
                  allData = [];
              data.filter(function(series, i) {
                series.seriesIndex = i;
                return !series.disabled;
              }).forEach(function(series, i) {
                pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
                lines.highlightPoint(i, pointIndex, true);
                var point = series.values[pointIndex];
                if (typeof point === 'undefined')
                  return ;
                if (typeof singlePoint === 'undefined')
                  singlePoint = point;
                if (typeof pointXLocation === 'undefined')
                  pointXLocation = chart.xScale()(chart.x()(point, pointIndex));
                allData.push({
                  key: series.key,
                  value: chart.y()(point, pointIndex),
                  color: color(series, series.seriesIndex)
                });
              });
              if (allData.length > 2) {
                var yValue = chart.yScale().invert(e.mouseY);
                var domainExtent = Math.abs(chart.yScale().domain()[0] - chart.yScale().domain()[1]);
                var threshold = 0.03 * domainExtent;
                var indexToHighlight = nv.nearestValueIndex(allData.map(function(d) {
                  return d.value;
                }), yValue, threshold);
                if (indexToHighlight !== null)
                  allData[indexToHighlight].highlight = true;
              }
              var xValue = xAxis.tickFormat()(chart.x()(singlePoint, pointIndex), pointIndex);
              interactiveLayer.tooltip.position({
                left: pointXLocation + margin.left,
                top: e.mouseY + margin.top
              }).chartContainer(that.parentNode).enabled(tooltips).valueFormatter(function(d, i) {
                return yAxis.tickFormat()(d);
              }).data({
                value: xValue,
                series: allData
              })();
              interactiveLayer.renderGuideLine(pointXLocation);
            });
            interactiveLayer.dispatch.on("elementMouseout", function(e) {
              dispatch.tooltipHide();
              lines.clearHighlights();
            });
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
            dispatch.on('changeState', function(e) {
              if (typeof e.disabled !== 'undefined') {
                data.forEach(function(series, i) {
                  series.disabled = e.disabled[i];
                });
                state.disabled = e.disabled;
              }
              if (typeof e.index !== 'undefined') {
                index.i = e.index;
                index.x = dx(index.i);
                state.index = e.index;
                indexLine.data([index]);
              }
              if (typeof e.rescaleY !== 'undefined') {
                rescaleY = e.rescaleY;
              }
              chart.update();
            });
          });
          renderWatch.renderEnd('cumulativeLineChart immediate');
          return chart;
        }
        lines.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        lines.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        var indexifyYGetter = null;
        function indexify(idx, data) {
          if (!indexifyYGetter)
            indexifyYGetter = lines.y();
          return data.map(function(line, i) {
            if (!line.values) {
              return line;
            }
            var indexValue = line.values[idx];
            if (indexValue == null) {
              return line;
            }
            var v = indexifyYGetter(indexValue, idx);
            if (v < -.95 && !noErrorCheck) {
              line.tempDisabled = true;
              return line;
            }
            line.tempDisabled = false;
            line.values = line.values.map(function(point, pointIndex) {
              point.display = {'y': (indexifyYGetter(point, pointIndex) - v) / (1 + v)};
              return point;
            });
            return line;
          });
        }
        chart.dispatch = dispatch;
        chart.lines = lines;
        chart.legend = legend;
        chart.xAxis = xAxis;
        chart.yAxis = yAxis;
        chart.interactiveLayer = interactiveLayer;
        chart.state = state;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          rescaleY: {
            get: function() {
              return rescaleY;
            },
            set: function(_) {
              rescaleY = _;
            }
          },
          showControls: {
            get: function() {
              return showControls;
            },
            set: function(_) {
              showControls = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          average: {
            get: function() {
              return average;
            },
            set: function(_) {
              average = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          defaultState: {
            get: function() {
              return defaultState;
            },
            set: function(_) {
              defaultState = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          showXAxis: {
            get: function() {
              return showXAxis;
            },
            set: function(_) {
              showXAxis = _;
            }
          },
          showYAxis: {
            get: function() {
              return showYAxis;
            },
            set: function(_) {
              showYAxis = _;
            }
          },
          noErrorCheck: {
            get: function() {
              return noErrorCheck;
            },
            set: function(_) {
              noErrorCheck = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              legend.color(color);
            }
          },
          useInteractiveGuideline: {
            get: function() {
              return useInteractiveGuideline;
            },
            set: function(_) {
              useInteractiveGuideline = _;
              if (_ === true) {
                chart.interactive(false);
                chart.useVoronoi(false);
              }
            }
          },
          rightAlignYAxis: {
            get: function() {
              return rightAlignYAxis;
            },
            set: function(_) {
              rightAlignYAxis = _;
              yAxis.orient((_) ? 'right' : 'left');
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              lines.duration(duration);
              xAxis.duration(duration);
              yAxis.duration(duration);
              renderWatch.reset(duration);
            }
          }
        });
        nv.utils.inheritOptions(chart, lines);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.discreteBar = function() {
        "use strict";
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = 960,
            height = 500,
            id = Math.floor(Math.random() * 10000),
            x = d3.scale.ordinal(),
            y = d3.scale.linear(),
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            forceY = [0],
            color = nv.utils.defaultColor(),
            showValues = false,
            valueFormat = d3.format(',.2f'),
            xDomain,
            yDomain,
            xRange,
            yRange,
            dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'renderEnd'),
            rectClass = 'discreteBar',
            duration = 250;
        ;
        var x0,
            y0;
        var renderWatch = nv.utils.renderWatch(dispatch, duration);
        function chart(selection) {
          renderWatch.reset();
          selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom,
                container = d3.select(this);
            nv.utils.initSVG(container);
            data.forEach(function(series, i) {
              series.values.forEach(function(point) {
                point.series = i;
              });
            });
            var seriesData = (xDomain && yDomain) ? [] : data.map(function(d) {
              return d.values.map(function(d, i) {
                return {
                  x: getX(d, i),
                  y: getY(d, i),
                  y0: d.y0
                };
              });
            });
            x.domain(xDomain || d3.merge(seriesData).map(function(d) {
              return d.x;
            })).rangeBands(xRange || [0, availableWidth], .1);
            y.domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) {
              return d.y;
            }).concat(forceY)));
            if (showValues)
              y.range(yRange || [availableHeight - (y.domain()[0] < 0 ? 12 : 0), y.domain()[1] > 0 ? 12 : 0]);
            else
              y.range(yRange || [availableHeight, 0]);
            x0 = x0 || x;
            y0 = y0 || y.copy().range([y(0), y(0)]);
            var wrap = container.selectAll('g.nv-wrap.nv-discretebar').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discretebar');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-groups');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var groups = wrap.select('.nv-groups').selectAll('.nv-group').data(function(d) {
              return d;
            }, function(d) {
              return d.key;
            });
            groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
            groups.exit().watchTransition(renderWatch, 'discreteBar: exit groups').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6).remove();
            groups.attr('class', function(d, i) {
              return 'nv-group nv-series-' + i;
            }).classed('hover', function(d) {
              return d.hover;
            });
            groups.watchTransition(renderWatch, 'discreteBar: groups').style('stroke-opacity', 1).style('fill-opacity', .75);
            var bars = groups.selectAll('g.nv-bar').data(function(d) {
              return d.values;
            });
            bars.exit().remove();
            var barsEnter = bars.enter().append('g').attr('transform', function(d, i, j) {
              return 'translate(' + (x(getX(d, i)) + x.rangeBand() * .05) + ', ' + y(0) + ')';
            }).on('mouseover', function(d, i) {
              d3.select(this).classed('hover', true);
              dispatch.elementMouseover({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pos: [x(getX(d, i)) + (x.rangeBand() * (d.series + .5) / data.length), y(getY(d, i))],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
            }).on('mouseout', function(d, i) {
              d3.select(this).classed('hover', false);
              dispatch.elementMouseout({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
            }).on('click', function(d, i) {
              dispatch.elementClick({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pos: [x(getX(d, i)) + (x.rangeBand() * (d.series + .5) / data.length), y(getY(d, i))],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
              d3.event.stopPropagation();
            }).on('dblclick', function(d, i) {
              dispatch.elementDblClick({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pos: [x(getX(d, i)) + (x.rangeBand() * (d.series + .5) / data.length), y(getY(d, i))],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
              d3.event.stopPropagation();
            });
            barsEnter.append('rect').attr('height', 0).attr('width', x.rangeBand() * .9 / data.length);
            if (showValues) {
              barsEnter.append('text').attr('text-anchor', 'middle');
              ;
              bars.select('text').text(function(d, i) {
                return valueFormat(getY(d, i));
              }).watchTransition(renderWatch, 'discreteBar: bars text').attr('x', x.rangeBand() * .9 / 2).attr('y', function(d, i) {
                return getY(d, i) < 0 ? y(getY(d, i)) - y(0) + 12 : -4;
              });
              ;
            } else {
              bars.selectAll('text').remove();
            }
            bars.attr('class', function(d, i) {
              return getY(d, i) < 0 ? 'nv-bar negative' : 'nv-bar positive';
            }).style('fill', function(d, i) {
              return d.color || color(d, i);
            }).style('stroke', function(d, i) {
              return d.color || color(d, i);
            }).select('rect').attr('class', rectClass).watchTransition(renderWatch, 'discreteBar: bars rect').attr('width', x.rangeBand() * .9 / data.length);
            bars.watchTransition(renderWatch, 'discreteBar: bars').attr('transform', function(d, i) {
              var left = x(getX(d, i)) + x.rangeBand() * .05,
                  top = getY(d, i) < 0 ? y(0) : y(0) - y(getY(d, i)) < 1 ? y(0) - 1 : y(getY(d, i));
              return 'translate(' + left + ', ' + top + ')';
            }).select('rect').attr('height', function(d, i) {
              return Math.max(Math.abs(y(getY(d, i)) - y((yDomain && yDomain[0]) || 0)) || 1);
            });
            x0 = x.copy();
            y0 = y.copy();
          });
          renderWatch.renderEnd('discreteBar immediate');
          return chart;
        }
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          forceY: {
            get: function() {
              return forceY;
            },
            set: function(_) {
              forceY = _;
            }
          },
          showValues: {
            get: function() {
              return showValues;
            },
            set: function(_) {
              showValues = _;
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = _;
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = _;
            }
          },
          xScale: {
            get: function() {
              return x;
            },
            set: function(_) {
              x = _;
            }
          },
          yScale: {
            get: function() {
              return y;
            },
            set: function(_) {
              y = _;
            }
          },
          xDomain: {
            get: function() {
              return xDomain;
            },
            set: function(_) {
              xDomain = _;
            }
          },
          yDomain: {
            get: function() {
              return yDomain;
            },
            set: function(_) {
              yDomain = _;
            }
          },
          xRange: {
            get: function() {
              return xRange;
            },
            set: function(_) {
              xRange = _;
            }
          },
          yRange: {
            get: function() {
              return yRange;
            },
            set: function(_) {
              yRange = _;
            }
          },
          valueFormat: {
            get: function() {
              return valueFormat;
            },
            set: function(_) {
              valueFormat = _;
            }
          },
          id: {
            get: function() {
              return id;
            },
            set: function(_) {
              id = _;
            }
          },
          rectClass: {
            get: function() {
              return rectClass;
            },
            set: function(_) {
              rectClass = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.discreteBarChart = function() {
        "use strict";
        var discretebar = nv.models.discreteBar(),
            xAxis = nv.models.axis(),
            yAxis = nv.models.axis();
        ;
        var margin = {
          top: 15,
          right: 10,
          bottom: 50,
          left: 60
        },
            width = null,
            height = null,
            color = nv.utils.getColor(),
            showXAxis = true,
            showYAxis = true,
            rightAlignYAxis = false,
            staggerLabels = false,
            tooltips = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + x + '</h3>' + '<p>' + y + '</p>';
            },
            x,
            y,
            noData = "No Data Available.",
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'beforeUpdate', 'renderEnd'),
            duration = 250;
        ;
        xAxis.orient('bottom').highlightZero(false).showMaxMin(false).tickFormat(function(d) {
          return d;
        });
        ;
        yAxis.orient((rightAlignYAxis) ? 'right' : 'left').tickFormat(d3.format(',.1f'));
        ;
        var showTooltip = function(e, offsetElement) {
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              x = xAxis.tickFormat()(discretebar.x()(e.point, e.pointIndex)),
              y = yAxis.tickFormat()(discretebar.y()(e.point, e.pointIndex)),
              content = tooltip(e.series.key, x, y, e, chart);
          nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
        };
        var renderWatch = nv.utils.renderWatch(dispatch, duration);
        function chart(selection) {
          renderWatch.reset();
          renderWatch.models(discretebar);
          if (showXAxis)
            renderWatch.models(xAxis);
          if (showYAxis)
            renderWatch.models(yAxis);
          selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            chart.update = function() {
              dispatch.beforeUpdate();
              container.transition().duration(duration).call(chart);
            };
            chart.container = this;
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            x = discretebar.xScale();
            y = discretebar.yScale().clamp(true);
            var wrap = container.selectAll('g.nv-wrap.nv-discreteBarWithAxes').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discreteBarWithAxes').append('g');
            var defsEnter = gEnter.append('defs');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis').append('g').attr('class', 'nv-zeroLine').append('line');
            gEnter.append('g').attr('class', 'nv-barsWrap');
            g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            if (rightAlignYAxis) {
              g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
            }
            discretebar.width(availableWidth).height(availableHeight);
            var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function(d) {
              return !d.disabled;
            }));
            barsWrap.transition().call(discretebar);
            defsEnter.append('clipPath').attr('id', 'nv-x-label-clip-' + discretebar.id()).append('rect');
            g.select('#nv-x-label-clip-' + discretebar.id() + ' rect').attr('width', x.rangeBand() * (staggerLabels ? 2 : 1)).attr('height', 16).attr('x', -x.rangeBand() / (staggerLabels ? 1 : 2));
            if (showXAxis) {
              xAxis.scale(x).ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);
              g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + (y.range()[0] + ((discretebar.showValues() && y.domain()[0] < 0) ? 16 : 0)) + ')');
              g.select('.nv-x.nv-axis').call(xAxis);
              var xTicks = g.select('.nv-x.nv-axis').selectAll('g');
              if (staggerLabels) {
                xTicks.selectAll('text').attr('transform', function(d, i, j) {
                  return 'translate(0,' + (j % 2 == 0 ? '5' : '17') + ')';
                });
              }
            }
            if (showYAxis) {
              yAxis.scale(y).ticks(nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);
              g.select('.nv-y.nv-axis').call(yAxis);
            }
            g.select(".nv-zeroLine line").attr("x1", 0).attr("x2", availableWidth).attr("y1", y(0)).attr("y2", y(0));
            ;
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
          });
          renderWatch.renderEnd('discreteBar chart immediate');
          return chart;
        }
        discretebar.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        discretebar.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.dispatch = dispatch;
        chart.discretebar = discretebar;
        chart.xAxis = xAxis;
        chart.yAxis = yAxis;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          staggerLabels: {
            get: function() {
              return staggerLabels;
            },
            set: function(_) {
              staggerLabels = _;
            }
          },
          showXAxis: {
            get: function() {
              return showXAxis;
            },
            set: function(_) {
              showXAxis = _;
            }
          },
          showYAxis: {
            get: function() {
              return showYAxis;
            },
            set: function(_) {
              showYAxis = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
              discretebar.duration(duration);
              xAxis.duration(duration);
              yAxis.duration(duration);
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              discretebar.color(color);
            }
          },
          rightAlignYAxis: {
            get: function() {
              return rightAlignYAxis;
            },
            set: function(_) {
              rightAlignYAxis = _;
              yAxis.orient((_) ? 'right' : 'left');
            }
          }
        });
        nv.utils.inheritOptions(chart, discretebar);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.distribution = function() {
        "use strict";
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = 400,
            size = 8,
            axis = 'x',
            getData = function(d) {
              return d[axis];
            },
            color = nv.utils.defaultColor(),
            scale = d3.scale.linear(),
            domain,
            duration = 250,
            dispatch = d3.dispatch('renderEnd');
        ;
        var scale0;
        var renderWatch = nv.utils.renderWatch(dispatch, duration);
        function chart(selection) {
          renderWatch.reset();
          selection.each(function(data) {
            var availableLength = width - (axis === 'x' ? margin.left + margin.right : margin.top + margin.bottom),
                naxis = axis == 'x' ? 'y' : 'x',
                container = d3.select(this);
            nv.utils.initSVG(container);
            scale0 = scale0 || scale;
            var wrap = container.selectAll('g.nv-distribution').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-distribution');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var distWrap = g.selectAll('g.nv-dist').data(function(d) {
              return d;
            }, function(d) {
              return d.key;
            });
            distWrap.enter().append('g');
            distWrap.attr('class', function(d, i) {
              return 'nv-dist nv-series-' + i;
            }).style('stroke', function(d, i) {
              return color(d, i);
            });
            var dist = distWrap.selectAll('line.nv-dist' + axis).data(function(d) {
              return d.values;
            });
            dist.enter().append('line').attr(axis + '1', function(d, i) {
              return scale0(getData(d, i));
            }).attr(axis + '2', function(d, i) {
              return scale0(getData(d, i));
            });
            renderWatch.transition(distWrap.exit().selectAll('line.nv-dist' + axis), 'dist exit').attr(axis + '1', function(d, i) {
              return scale(getData(d, i));
            }).attr(axis + '2', function(d, i) {
              return scale(getData(d, i));
            }).style('stroke-opacity', 0).remove();
            dist.attr('class', function(d, i) {
              return 'nv-dist' + axis + ' nv-dist' + axis + '-' + i;
            }).attr(naxis + '1', 0).attr(naxis + '2', size);
            renderWatch.transition(dist, 'dist').attr(axis + '1', function(d, i) {
              return scale(getData(d, i));
            }).attr(axis + '2', function(d, i) {
              return scale(getData(d, i));
            });
            scale0 = scale.copy();
          });
          renderWatch.renderEnd('distribution immediate');
          return chart;
        }
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart.dispatch = dispatch;
        chart.margin = function(_) {
          if (!arguments.length)
            return margin;
          margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
          margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
          margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
          margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
          return chart;
        };
        chart.width = function(_) {
          if (!arguments.length)
            return width;
          width = _;
          return chart;
        };
        chart.axis = function(_) {
          if (!arguments.length)
            return axis;
          axis = _;
          return chart;
        };
        chart.size = function(_) {
          if (!arguments.length)
            return size;
          size = _;
          return chart;
        };
        chart.getData = function(_) {
          if (!arguments.length)
            return getData;
          getData = d3.functor(_);
          return chart;
        };
        chart.scale = function(_) {
          if (!arguments.length)
            return scale;
          scale = _;
          return chart;
        };
        chart.color = function(_) {
          if (!arguments.length)
            return color;
          color = nv.utils.getColor(_);
          return chart;
        };
        chart.duration = function(_) {
          if (!arguments.length)
            return duration;
          duration = _;
          renderWatch.reset(duration);
          return chart;
        };
        return chart;
      };
      nv.models.historicalBar = function() {
        "use strict";
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = null,
            height = null,
            id = Math.floor(Math.random() * 10000),
            x = d3.scale.linear(),
            y = d3.scale.linear(),
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            forceX = [],
            forceY = [0],
            padData = false,
            clipEdge = true,
            color = nv.utils.defaultColor(),
            xDomain,
            yDomain,
            xRange,
            yRange,
            dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'renderEnd'),
            interactive = true;
        ;
        var renderWatch = nv.utils.renderWatch(dispatch, 0);
        function chart(selection) {
          selection.each(function(data) {
            renderWatch.reset();
            var container = d3.select(this);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right;
            var availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            nv.utils.initSVG(container);
            x.domain(xDomain || d3.extent(data[0].values.map(getX).concat(forceX)));
            if (padData)
              x.range(xRange || [availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5) / data[0].values.length]);
            else
              x.range(xRange || [0, availableWidth]);
            y.domain(yDomain || d3.extent(data[0].values.map(getY).concat(forceY))).range(yRange || [availableHeight, 0]);
            if (x.domain()[0] === x.domain()[1])
              x.domain()[0] ? x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01]) : x.domain([-1, 1]);
            if (y.domain()[0] === y.domain()[1])
              y.domain()[0] ? y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01]) : y.domain([-1, 1]);
            var wrap = container.selectAll('g.nv-wrap.nv-historicalBar-' + id).data([data[0].values]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-historicalBar-' + id);
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-bars');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            container.on('click', function(d, i) {
              dispatch.chartClick({
                data: d,
                index: i,
                pos: d3.event,
                id: id
              });
            });
            defsEnter.append('clipPath').attr('id', 'nv-chart-clip-path-' + id).append('rect');
            wrap.select('#nv-chart-clip-path-' + id + ' rect').attr('width', availableWidth).attr('height', availableHeight);
            g.attr('clip-path', clipEdge ? 'url(#nv-chart-clip-path-' + id + ')' : '');
            var bars = wrap.select('.nv-bars').selectAll('.nv-bar').data(function(d) {
              return d;
            }, function(d, i) {
              return getX(d, i);
            });
            bars.exit().remove();
            var barsEnter = bars.enter().append('rect').attr('x', 0).attr('y', function(d, i) {
              return nv.utils.NaNtoZero(y(Math.max(0, getY(d, i))));
            }).attr('height', function(d, i) {
              return nv.utils.NaNtoZero(Math.abs(y(getY(d, i)) - y(0)));
            }).attr('transform', function(d, i) {
              return 'translate(' + (x(getX(d, i)) - availableWidth / data[0].values.length * .45) + ',0)';
            }).on('mouseover', function(d, i) {
              if (!interactive)
                return ;
              d3.select(this).classed('hover', true);
              dispatch.elementMouseover({
                point: d,
                series: data[0],
                pos: [x(getX(d, i)), y(getY(d, i))],
                pointIndex: i,
                seriesIndex: 0,
                e: d3.event
              });
            }).on('mouseout', function(d, i) {
              if (!interactive)
                return ;
              d3.select(this).classed('hover', false);
              dispatch.elementMouseout({
                point: d,
                series: data[0],
                pointIndex: i,
                seriesIndex: 0,
                e: d3.event
              });
            }).on('click', function(d, i) {
              if (!interactive)
                return ;
              dispatch.elementClick({
                value: getY(d, i),
                data: d,
                index: i,
                pos: [x(getX(d, i)), y(getY(d, i))],
                e: d3.event,
                id: id
              });
              d3.event.stopPropagation();
            }).on('dblclick', function(d, i) {
              if (!interactive)
                return ;
              dispatch.elementDblClick({
                value: getY(d, i),
                data: d,
                index: i,
                pos: [x(getX(d, i)), y(getY(d, i))],
                e: d3.event,
                id: id
              });
              d3.event.stopPropagation();
            });
            bars.attr('fill', function(d, i) {
              return color(d, i);
            }).attr('class', function(d, i, j) {
              return (getY(d, i) < 0 ? 'nv-bar negative' : 'nv-bar positive') + ' nv-bar-' + j + '-' + i;
            }).watchTransition(renderWatch, 'bars').attr('transform', function(d, i) {
              return 'translate(' + (x(getX(d, i)) - availableWidth / data[0].values.length * .45) + ',0)';
            }).attr('width', (availableWidth / data[0].values.length) * .9);
            bars.watchTransition(renderWatch, 'bars').attr('y', function(d, i) {
              var rval = getY(d, i) < 0 ? y(0) : y(0) - y(getY(d, i)) < 1 ? y(0) - 1 : y(getY(d, i));
              return nv.utils.NaNtoZero(rval);
            }).attr('height', function(d, i) {
              return nv.utils.NaNtoZero(Math.max(Math.abs(y(getY(d, i)) - y(0)), 1));
            });
          });
          renderWatch.renderEnd('historicalBar immediate');
          return chart;
        }
        chart.highlightPoint = function(pointIndex, isHoverOver) {
          d3.select(".nv-historicalBar-" + id).select(".nv-bars .nv-bar-0-" + pointIndex).classed("hover", isHoverOver);
          ;
        };
        chart.clearHighlights = function() {
          d3.select(".nv-historicalBar-" + id).select(".nv-bars .nv-bar.hover").classed("hover", false);
          ;
        };
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          forceX: {
            get: function() {
              return forceX;
            },
            set: function(_) {
              forceX = _;
            }
          },
          forceY: {
            get: function() {
              return forceY;
            },
            set: function(_) {
              forceY = _;
            }
          },
          padData: {
            get: function() {
              return padData;
            },
            set: function(_) {
              padData = _;
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = _;
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = _;
            }
          },
          xScale: {
            get: function() {
              return x;
            },
            set: function(_) {
              x = _;
            }
          },
          yScale: {
            get: function() {
              return y;
            },
            set: function(_) {
              y = _;
            }
          },
          xDomain: {
            get: function() {
              return xDomain;
            },
            set: function(_) {
              xDomain = _;
            }
          },
          yDomain: {
            get: function() {
              return yDomain;
            },
            set: function(_) {
              yDomain = _;
            }
          },
          xRange: {
            get: function() {
              return xRange;
            },
            set: function(_) {
              xRange = _;
            }
          },
          yRange: {
            get: function() {
              return yRange;
            },
            set: function(_) {
              yRange = _;
            }
          },
          clipEdge: {
            get: function() {
              return clipEdge;
            },
            set: function(_) {
              clipEdge = _;
            }
          },
          id: {
            get: function() {
              return id;
            },
            set: function(_) {
              id = _;
            }
          },
          interactive: {
            get: function() {
              return interactive;
            },
            set: function(_) {
              interactive = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.historicalBarChart = function(bar_model) {
        "use strict";
        var bars = bar_model || nv.models.historicalBar(),
            xAxis = nv.models.axis(),
            yAxis = nv.models.axis(),
            legend = nv.models.legend(),
            interactiveLayer = nv.interactiveGuideline();
        ;
        var margin = {
          top: 30,
          right: 90,
          bottom: 50,
          left: 90
        },
            color = nv.utils.defaultColor(),
            width = null,
            height = null,
            showLegend = false,
            showXAxis = true,
            showYAxis = true,
            rightAlignYAxis = false,
            useInteractiveGuideline = false,
            tooltips = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
            },
            x,
            y,
            state = {},
            defaultState = null,
            noData = 'No Data Available.',
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState', 'renderEnd'),
            transitionDuration = 250;
        ;
        xAxis.orient('bottom').tickPadding(7);
        ;
        yAxis.orient((rightAlignYAxis) ? 'right' : 'left');
        ;
        var showTooltip = function(e, offsetElement) {
          if (offsetElement) {
            var svg = d3.select(offsetElement).select('svg');
            var viewBox = (svg.node()) ? svg.attr('viewBox') : null;
            if (viewBox) {
              viewBox = viewBox.split(' ');
              var ratio = parseInt(svg.style('width')) / viewBox[2];
              e.pos[0] = e.pos[0] * ratio;
              e.pos[1] = e.pos[1] * ratio;
            }
          }
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              x = xAxis.tickFormat()(bars.x()(e.point, e.pointIndex)),
              y = yAxis.tickFormat()(bars.y()(e.point, e.pointIndex)),
              content = tooltip(e.series.key, x, y, e, chart);
          nv.tooltip.show([left, top], content, null, null, offsetElement);
        };
        var renderWatch = nv.utils.renderWatch(dispatch, 0);
        function chart(selection) {
          selection.each(function(data) {
            renderWatch.reset();
            renderWatch.models(bars);
            if (showXAxis)
              renderWatch.models(xAxis);
            if (showYAxis)
              renderWatch.models(yAxis);
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            chart.update = function() {
              container.transition().duration(transitionDuration).call(chart);
            };
            chart.container = this;
            state.disabled = data.map(function(d) {
              return !!d.disabled;
            });
            if (!defaultState) {
              var key;
              defaultState = {};
              for (key in state) {
                if (state[key] instanceof Array)
                  defaultState[key] = state[key].slice(0);
                else
                  defaultState[key] = state[key];
              }
            }
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            x = bars.xScale();
            y = bars.yScale();
            var wrap = container.selectAll('g.nv-wrap.nv-historicalBarChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-historicalBarChart').append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-barsWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-interactive');
            if (showLegend) {
              legend.width(availableWidth);
              g.select('.nv-legendWrap').datum(data).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
              }
              wrap.select('.nv-legendWrap').attr('transform', 'translate(0,' + (-margin.top) + ')');
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            if (rightAlignYAxis) {
              g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
            }
            if (useInteractiveGuideline) {
              interactiveLayer.width(availableWidth).height(availableHeight).margin({
                left: margin.left,
                top: margin.top
              }).svgContainer(container).xScale(x);
              wrap.select(".nv-interactive").call(interactiveLayer);
            }
            bars.width(availableWidth).height(availableHeight).color(data.map(function(d, i) {
              return d.color || color(d, i);
            }).filter(function(d, i) {
              return !data[i].disabled;
            }));
            var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function(d) {
              return !d.disabled;
            }));
            barsWrap.transition().call(bars);
            if (showXAxis) {
              xAxis.scale(x).tickSize(-availableHeight, 0);
              g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')');
              g.select('.nv-x.nv-axis').transition().call(xAxis);
            }
            if (showYAxis) {
              yAxis.scale(y).ticks(nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);
              g.select('.nv-y.nv-axis').transition().call(yAxis);
            }
            interactiveLayer.dispatch.on('elementMousemove', function(e) {
              bars.clearHighlights();
              var singlePoint,
                  pointIndex,
                  pointXLocation,
                  allData = [];
              data.filter(function(series, i) {
                series.seriesIndex = i;
                return !series.disabled;
              }).forEach(function(series, i) {
                pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
                bars.highlightPoint(pointIndex, true);
                var point = series.values[pointIndex];
                if (typeof point === 'undefined')
                  return ;
                if (typeof singlePoint === 'undefined')
                  singlePoint = point;
                if (typeof pointXLocation === 'undefined')
                  pointXLocation = chart.xScale()(chart.x()(point, pointIndex));
                allData.push({
                  key: series.key,
                  value: chart.y()(point, pointIndex),
                  color: color(series, series.seriesIndex),
                  data: series.values[pointIndex]
                });
              });
              var xValue = xAxis.tickFormat()(chart.x()(singlePoint, pointIndex));
              interactiveLayer.tooltip.position({
                left: pointXLocation + margin.left,
                top: e.mouseY + margin.top
              }).chartContainer(that.parentNode).enabled(tooltips).valueFormatter(function(d, i) {
                return yAxis.tickFormat()(d);
              }).data({
                value: xValue,
                series: allData
              })();
              interactiveLayer.renderGuideLine(pointXLocation);
            });
            interactiveLayer.dispatch.on("elementMouseout", function(e) {
              dispatch.tooltipHide();
              bars.clearHighlights();
            });
            legend.dispatch.on('legendClick', function(d, i) {
              d.disabled = !d.disabled;
              if (!data.filter(function(d) {
                return !d.disabled;
              }).length) {
                data.map(function(d) {
                  d.disabled = false;
                  wrap.selectAll('.nv-series').classed('disabled', false);
                  return d;
                });
              }
              state.disabled = data.map(function(d) {
                return !!d.disabled;
              });
              dispatch.stateChange(state);
              selection.transition().call(chart);
            });
            legend.dispatch.on('legendDblclick', function(d) {
              data.forEach(function(d) {
                d.disabled = true;
              });
              d.disabled = false;
              state.disabled = data.map(function(d) {
                return !!d.disabled;
              });
              dispatch.stateChange(state);
              chart.update();
            });
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
            dispatch.on('changeState', function(e) {
              if (typeof e.disabled !== 'undefined') {
                data.forEach(function(series, i) {
                  series.disabled = e.disabled[i];
                });
                state.disabled = e.disabled;
              }
              chart.update();
            });
          });
          renderWatch.renderEnd('historicalBarChart immediate');
          return chart;
        }
        bars.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        bars.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.dispatch = dispatch;
        chart.bars = bars;
        chart.legend = legend;
        chart.xAxis = xAxis;
        chart.yAxis = yAxis;
        chart.interactiveLayer = interactiveLayer;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          showXAxis: {
            get: function() {
              return showXAxis;
            },
            set: function(_) {
              showXAxis = _;
            }
          },
          showYAxis: {
            get: function() {
              return showYAxis;
            },
            set: function(_) {
              showYAxis = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          defaultState: {
            get: function() {
              return defaultState;
            },
            set: function(_) {
              defaultState = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              legend.color(color);
              bars.color(color);
            }
          },
          duration: {
            get: function() {
              return transitionDuration;
            },
            set: function(_) {
              transitionDuration = _;
              renderWatch.reset(transitionDuration);
              yAxis.duration(transitionDuration);
              xAxis.duration(transitionDuration);
            }
          },
          rightAlignYAxis: {
            get: function() {
              return rightAlignYAxis;
            },
            set: function(_) {
              rightAlignYAxis = _;
              yAxis.orient((_) ? 'right' : 'left');
            }
          },
          useInteractiveGuideline: {
            get: function() {
              return useInteractiveGuideline;
            },
            set: function(_) {
              useInteractiveGuideline = _;
              if (_ === true) {
                chart.interactive(false);
              }
            }
          }
        });
        nv.utils.inheritOptions(chart, bars);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.ohlcBarChart = function() {
        var chart = nv.models.historicalBarChart(nv.models.ohlcBar());
        chart.useInteractiveGuideline(true);
        chart.interactiveLayer.tooltip.contentGenerator(function(data) {
          var d = data.series[0].data;
          var color = d.open < d.close ? "2ca02c" : "d62728";
          return '' + '<h3 style="color: #' + color + '">' + data.value + '</h3>' + '<table>' + '<tr><td>open:</td><td>' + chart.yAxis.tickFormat()(d.open) + '</td></tr>' + '<tr><td>close:</td><td>' + chart.yAxis.tickFormat()(d.close) + '</td></tr>' + '<tr><td>high</td><td>' + chart.yAxis.tickFormat()(d.high) + '</td></tr>' + '<tr><td>low:</td><td>' + chart.yAxis.tickFormat()(d.low) + '</td></tr>' + '</table>';
        });
        return chart;
      };
      nv.models.legend = function() {
        "use strict";
        var margin = {
          top: 5,
          right: 0,
          bottom: 5,
          left: 0
        },
            width = 400,
            height = 20,
            getKey = function(d) {
              return d.key;
            },
            color = nv.utils.defaultColor(),
            align = true,
            rightAlign = true,
            updateState = true,
            radioButtonMode = false,
            dispatch = d3.dispatch('legendClick', 'legendDblclick', 'legendMouseover', 'legendMouseout', 'stateChange');
        ;
        function chart(selection) {
          selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                container = d3.select(this);
            nv.utils.initSVG(container);
            var wrap = container.selectAll('g.nv-legend').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-legend').append('g');
            var g = wrap.select('g');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var series = g.selectAll('.nv-series').data(function(d) {
              return d;
            });
            var seriesEnter = series.enter().append('g').attr('class', 'nv-series').on('mouseover', function(d, i) {
              dispatch.legendMouseover(d, i);
            }).on('mouseout', function(d, i) {
              dispatch.legendMouseout(d, i);
            }).on('click', function(d, i) {
              dispatch.legendClick(d, i);
              if (updateState) {
                if (radioButtonMode) {
                  data.forEach(function(series) {
                    series.disabled = true;
                  });
                  d.disabled = false;
                } else {
                  d.disabled = !d.disabled;
                  if (data.every(function(series) {
                    return series.disabled;
                  })) {
                    data.forEach(function(series) {
                      series.disabled = false;
                    });
                  }
                }
                dispatch.stateChange({disabled: data.map(function(d) {
                    return !!d.disabled;
                  })});
              }
            }).on('dblclick', function(d, i) {
              dispatch.legendDblclick(d, i);
              if (updateState) {
                data.forEach(function(series) {
                  series.disabled = true;
                });
                d.disabled = false;
                dispatch.stateChange({disabled: data.map(function(d) {
                    return !!d.disabled;
                  })});
              }
            });
            seriesEnter.append('circle').style('stroke-width', 2).attr('class', 'nv-legend-symbol').attr('r', 5);
            seriesEnter.append('text').attr('text-anchor', 'start').attr('class', 'nv-legend-text').attr('dy', '.32em').attr('dx', '8');
            series.classed('nv-disabled', function(d) {
              return d.disabled;
            });
            series.exit().remove();
            series.select('circle').style('fill', function(d, i) {
              return d.color || color(d, i);
            }).style('stroke', function(d, i) {
              return d.color || color(d, i);
            });
            series.select('text').text(getKey);
            if (align) {
              var seriesWidths = [];
              series.each(function(d, i) {
                var legendText = d3.select(this).select('text');
                var nodeTextLength;
                try {
                  nodeTextLength = legendText.node().getComputedTextLength();
                  if (nodeTextLength <= 0)
                    throw Error();
                } catch (e) {
                  nodeTextLength = nv.utils.calcApproxTextWidth(legendText);
                }
                seriesWidths.push(nodeTextLength + 28);
              });
              var seriesPerRow = 0;
              var legendWidth = 0;
              var columnWidths = [];
              while (legendWidth < availableWidth && seriesPerRow < seriesWidths.length) {
                columnWidths[seriesPerRow] = seriesWidths[seriesPerRow];
                legendWidth += seriesWidths[seriesPerRow++];
              }
              if (seriesPerRow === 0)
                seriesPerRow = 1;
              while (legendWidth > availableWidth && seriesPerRow > 1) {
                columnWidths = [];
                seriesPerRow--;
                for (var k = 0; k < seriesWidths.length; k++) {
                  if (seriesWidths[k] > (columnWidths[k % seriesPerRow] || 0))
                    columnWidths[k % seriesPerRow] = seriesWidths[k];
                }
                legendWidth = columnWidths.reduce(function(prev, cur, index, array) {
                  return prev + cur;
                });
              }
              var xPositions = [];
              for (var i = 0,
                  curX = 0; i < seriesPerRow; i++) {
                xPositions[i] = curX;
                curX += columnWidths[i];
              }
              series.attr('transform', function(d, i) {
                return 'translate(' + xPositions[i % seriesPerRow] + ',' + (5 + Math.floor(i / seriesPerRow) * 20) + ')';
              });
              if (rightAlign) {
                g.attr('transform', 'translate(' + (width - margin.right - legendWidth) + ',' + margin.top + ')');
              } else {
                g.attr('transform', 'translate(0' + ',' + margin.top + ')');
              }
              height = margin.top + margin.bottom + (Math.ceil(seriesWidths.length / seriesPerRow) * 20);
            } else {
              var ypos = 5,
                  newxpos = 5,
                  maxwidth = 0,
                  xpos;
              series.attr('transform', function(d, i) {
                var length = d3.select(this).select('text').node().getComputedTextLength() + 28;
                xpos = newxpos;
                if (width < margin.left + margin.right + xpos + length) {
                  newxpos = xpos = 5;
                  ypos += 20;
                }
                newxpos += length;
                if (newxpos > maxwidth)
                  maxwidth = newxpos;
                return 'translate(' + xpos + ',' + ypos + ')';
              });
              g.attr('transform', 'translate(' + (width - margin.right - maxwidth) + ',' + margin.top + ')');
              height = margin.top + margin.bottom + ypos + 15;
            }
          });
          return chart;
        }
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          key: {
            get: function() {
              return getKey;
            },
            set: function(_) {
              getKey = _;
            }
          },
          align: {
            get: function() {
              return align;
            },
            set: function(_) {
              align = _;
            }
          },
          rightAlign: {
            get: function() {
              return rightAlign;
            },
            set: function(_) {
              rightAlign = _;
            }
          },
          updateState: {
            get: function() {
              return updateState;
            },
            set: function(_) {
              updateState = _;
            }
          },
          radioButtonMode: {
            get: function() {
              return radioButtonMode;
            },
            set: function(_) {
              radioButtonMode = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.line = function() {
        "use strict";
        var scatter = nv.models.scatter();
        ;
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = 960,
            height = 500,
            color = nv.utils.defaultColor(),
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            defined = function(d, i) {
              return !isNaN(getY(d, i)) && getY(d, i) !== null;
            },
            isArea = function(d) {
              return d.area;
            },
            clipEdge = false,
            x,
            y,
            interpolate = "linear",
            duration = 250,
            dispatch = d3.dispatch('elementClick', 'elementMouseover', 'elementMouseout', 'renderEnd');
        ;
        scatter.pointSize(16).pointDomain([16, 256]);
        ;
        var x0,
            y0,
            renderWatch = nv.utils.renderWatch(dispatch, duration);
        ;
        function chart(selection) {
          renderWatch.reset();
          renderWatch.models(scatter);
          selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom,
                container = d3.select(this);
            nv.utils.initSVG(container);
            x = scatter.xScale();
            y = scatter.yScale();
            x0 = x0 || x;
            y0 = y0 || y;
            var wrap = container.selectAll('g.nv-wrap.nv-line').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-line');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-groups');
            gEnter.append('g').attr('class', 'nv-scatterWrap');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            scatter.width(availableWidth).height(availableHeight);
            var scatterWrap = wrap.select('.nv-scatterWrap');
            scatterWrap.call(scatter);
            defsEnter.append('clipPath').attr('id', 'nv-edge-clip-' + scatter.id()).append('rect');
            wrap.select('#nv-edge-clip-' + scatter.id() + ' rect').attr('width', availableWidth).attr('height', (availableHeight > 0) ? availableHeight : 0);
            g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + scatter.id() + ')' : '');
            scatterWrap.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + scatter.id() + ')' : '');
            var groups = wrap.select('.nv-groups').selectAll('.nv-group').data(function(d) {
              return d;
            }, function(d) {
              return d.key;
            });
            groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
            groups.exit().remove();
            groups.attr('class', function(d, i) {
              return 'nv-group nv-series-' + i;
            }).classed('hover', function(d) {
              return d.hover;
            }).style('fill', function(d, i) {
              return color(d, i);
            }).style('stroke', function(d, i) {
              return color(d, i);
            });
            groups.watchTransition(renderWatch, 'line: groups').style('stroke-opacity', 1).style('fill-opacity', .5);
            var areaPaths = groups.selectAll('path.nv-area').data(function(d) {
              return isArea(d) ? [d] : [];
            });
            areaPaths.enter().append('path').attr('class', 'nv-area').attr('d', function(d) {
              return d3.svg.area().interpolate(interpolate).defined(defined).x(function(d, i) {
                return nv.utils.NaNtoZero(x0(getX(d, i)));
              }).y0(function(d, i) {
                return nv.utils.NaNtoZero(y0(getY(d, i)));
              }).y1(function(d, i) {
                return y0(y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0]);
              }).apply(this, [d.values]);
            });
            groups.exit().selectAll('path.nv-area').remove();
            areaPaths.watchTransition(renderWatch, 'line: areaPaths').attr('d', function(d) {
              return d3.svg.area().interpolate(interpolate).defined(defined).x(function(d, i) {
                return nv.utils.NaNtoZero(x(getX(d, i)));
              }).y0(function(d, i) {
                return nv.utils.NaNtoZero(y(getY(d, i)));
              }).y1(function(d, i) {
                return y(y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0]);
              }).apply(this, [d.values]);
            });
            var linePaths = groups.selectAll('path.nv-line').data(function(d) {
              return [d.values];
            });
            linePaths.enter().append('path').attr('class', 'nv-line').attr('d', d3.svg.line().interpolate(interpolate).defined(defined).x(function(d, i) {
              return nv.utils.NaNtoZero(x0(getX(d, i)));
            }).y(function(d, i) {
              return nv.utils.NaNtoZero(y0(getY(d, i)));
            }));
            linePaths.watchTransition(renderWatch, 'line: linePaths').attr('d', d3.svg.line().interpolate(interpolate).defined(defined).x(function(d, i) {
              return nv.utils.NaNtoZero(x(getX(d, i)));
            }).y(function(d, i) {
              return nv.utils.NaNtoZero(y(getY(d, i)));
            }));
            x0 = x.copy();
            y0 = y.copy();
          });
          renderWatch.renderEnd('line immediate');
          return chart;
        }
        chart.dispatch = dispatch;
        chart.scatter = scatter;
        scatter.dispatch.on('elementClick', function() {
          dispatch.elementClick.apply(this, arguments);
        });
        scatter.dispatch.on('elementMouseover', function() {
          dispatch.elementMouseover.apply(this, arguments);
        });
        scatter.dispatch.on('elementMouseout', function() {
          dispatch.elementMouseout.apply(this, arguments);
        });
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          defined: {
            get: function() {
              return defined;
            },
            set: function(_) {
              defined = _;
            }
          },
          interpolate: {
            get: function() {
              return interpolate;
            },
            set: function(_) {
              interpolate = _;
            }
          },
          clipEdge: {
            get: function() {
              return clipEdge;
            },
            set: function(_) {
              clipEdge = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
              scatter.duration(duration);
            }
          },
          isArea: {
            get: function() {
              return isArea;
            },
            set: function(_) {
              isArea = d3.functor(_);
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = _;
              scatter.x(_);
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = _;
              scatter.y(_);
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              scatter.color(color);
            }
          }
        });
        nv.utils.inheritOptions(chart, scatter);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.lineChart = function() {
        "use strict";
        var lines = nv.models.line(),
            xAxis = nv.models.axis(),
            yAxis = nv.models.axis(),
            legend = nv.models.legend(),
            interactiveLayer = nv.interactiveGuideline();
        ;
        var margin = {
          top: 30,
          right: 20,
          bottom: 50,
          left: 60
        },
            color = nv.utils.defaultColor(),
            width = null,
            height = null,
            showLegend = true,
            showXAxis = true,
            showYAxis = true,
            rightAlignYAxis = false,
            useInteractiveGuideline = false,
            tooltips = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
            },
            x,
            y,
            state = nv.utils.state(),
            defaultState = null,
            noData = 'No Data Available.',
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState', 'renderEnd'),
            duration = 250;
        ;
        xAxis.orient('bottom').tickPadding(7);
        ;
        yAxis.orient((rightAlignYAxis) ? 'right' : 'left');
        ;
        var showTooltip = function(e, offsetElement) {
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
              y = yAxis.tickFormat()(lines.y()(e.point, e.pointIndex)),
              content = tooltip(e.series.key, x, y, e, chart);
          nv.tooltip.show([left, top], content, null, null, offsetElement);
        };
        var renderWatch = nv.utils.renderWatch(dispatch, duration);
        var stateGetter = function(data) {
          return function() {
            return {active: data.map(function(d) {
                return !d.disabled;
              })};
          };
        };
        var stateSetter = function(data) {
          return function(state) {
            if (state.active !== undefined)
              data.forEach(function(series, i) {
                series.disabled = !state.active[i];
              });
          };
        };
        function chart(selection) {
          renderWatch.reset();
          renderWatch.models(lines);
          if (showXAxis)
            renderWatch.models(xAxis);
          if (showYAxis)
            renderWatch.models(yAxis);
          selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            chart.update = function() {
              if (duration === 0)
                container.call(chart);
              else
                container.transition().duration(duration).call(chart);
            };
            chart.container = this;
            state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();
            state.disabled = data.map(function(d) {
              return !!d.disabled;
            });
            if (!defaultState) {
              var key;
              defaultState = {};
              for (key in state) {
                if (state[key] instanceof Array)
                  defaultState[key] = state[key].slice(0);
                else
                  defaultState[key] = state[key];
              }
            }
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            x = lines.xScale();
            y = lines.yScale();
            var wrap = container.selectAll('g.nv-wrap.nv-lineChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-lineChart').append('g');
            var g = wrap.select('g');
            gEnter.append("rect").style("opacity", 0);
            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-linesWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-interactive');
            g.select("rect").attr("width", availableWidth).attr("height", (availableHeight > 0) ? availableHeight : 0);
            if (showLegend) {
              legend.width(availableWidth);
              g.select('.nv-legendWrap').datum(data).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
              }
              wrap.select('.nv-legendWrap').attr('transform', 'translate(0,' + (-margin.top) + ')');
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            if (rightAlignYAxis) {
              g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
            }
            if (useInteractiveGuideline) {
              interactiveLayer.width(availableWidth).height(availableHeight).margin({
                left: margin.left,
                top: margin.top
              }).svgContainer(container).xScale(x);
              wrap.select(".nv-interactive").call(interactiveLayer);
            }
            lines.width(availableWidth).height(availableHeight).color(data.map(function(d, i) {
              return d.color || color(d, i);
            }).filter(function(d, i) {
              return !data[i].disabled;
            }));
            var linesWrap = g.select('.nv-linesWrap').datum(data.filter(function(d) {
              return !d.disabled;
            }));
            linesWrap.call(lines);
            if (showXAxis) {
              xAxis.scale(x).ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);
              g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')');
              g.select('.nv-x.nv-axis').call(xAxis);
            }
            if (showYAxis) {
              yAxis.scale(y).ticks(nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);
              g.select('.nv-y.nv-axis').call(yAxis);
            }
            legend.dispatch.on('stateChange', function(newState) {
              for (var key in newState)
                state[key] = newState[key];
              dispatch.stateChange(state);
              chart.update();
            });
            interactiveLayer.dispatch.on('elementMousemove', function(e) {
              lines.clearHighlights();
              var singlePoint,
                  pointIndex,
                  pointXLocation,
                  allData = [];
              data.filter(function(series, i) {
                series.seriesIndex = i;
                return !series.disabled;
              }).forEach(function(series, i) {
                pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
                lines.highlightPoint(i, pointIndex, true);
                var point = series.values[pointIndex];
                if (typeof point === 'undefined')
                  return ;
                if (typeof singlePoint === 'undefined')
                  singlePoint = point;
                if (typeof pointXLocation === 'undefined')
                  pointXLocation = chart.xScale()(chart.x()(point, pointIndex));
                allData.push({
                  key: series.key,
                  value: chart.y()(point, pointIndex),
                  color: color(series, series.seriesIndex)
                });
              });
              if (allData.length > 2) {
                var yValue = chart.yScale().invert(e.mouseY);
                var domainExtent = Math.abs(chart.yScale().domain()[0] - chart.yScale().domain()[1]);
                var threshold = 0.03 * domainExtent;
                var indexToHighlight = nv.nearestValueIndex(allData.map(function(d) {
                  return d.value;
                }), yValue, threshold);
                if (indexToHighlight !== null)
                  allData[indexToHighlight].highlight = true;
              }
              var xValue = xAxis.tickFormat()(chart.x()(singlePoint, pointIndex));
              interactiveLayer.tooltip.position({
                left: pointXLocation + margin.left,
                top: e.mouseY + margin.top
              }).chartContainer(that.parentNode).enabled(tooltips).valueFormatter(function(d, i) {
                return yAxis.tickFormat()(d);
              }).data({
                value: xValue,
                series: allData
              })();
              interactiveLayer.renderGuideLine(pointXLocation);
            });
            interactiveLayer.dispatch.on('elementClick', function(e) {
              var pointXLocation,
                  allData = [];
              data.filter(function(series, i) {
                series.seriesIndex = i;
                return !series.disabled;
              }).forEach(function(series) {
                var pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
                var point = series.values[pointIndex];
                if (typeof point === 'undefined')
                  return ;
                if (typeof pointXLocation === 'undefined')
                  pointXLocation = chart.xScale()(chart.x()(point, pointIndex));
                var yPos = chart.yScale()(chart.y()(point, pointIndex));
                allData.push({
                  point: point,
                  pointIndex: pointIndex,
                  pos: [pointXLocation, yPos],
                  seriesIndex: series.seriesIndex,
                  series: series
                });
              });
              lines.dispatch.elementClick(allData);
            });
            interactiveLayer.dispatch.on("elementMouseout", function(e) {
              dispatch.tooltipHide();
              lines.clearHighlights();
            });
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
            dispatch.on('changeState', function(e) {
              if (typeof e.disabled !== 'undefined' && data.length === e.disabled.length) {
                data.forEach(function(series, i) {
                  series.disabled = e.disabled[i];
                });
                state.disabled = e.disabled;
              }
              chart.update();
            });
          });
          renderWatch.renderEnd('lineChart immediate');
          return chart;
        }
        lines.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        lines.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.dispatch = dispatch;
        chart.lines = lines;
        chart.legend = legend;
        chart.xAxis = xAxis;
        chart.yAxis = yAxis;
        chart.interactiveLayer = interactiveLayer;
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          showXAxis: {
            get: function() {
              return showXAxis;
            },
            set: function(_) {
              showXAxis = _;
            }
          },
          showYAxis: {
            get: function() {
              return showYAxis;
            },
            set: function(_) {
              showYAxis = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          defaultState: {
            get: function() {
              return defaultState;
            },
            set: function(_) {
              defaultState = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
              lines.duration(duration);
              xAxis.duration(duration);
              yAxis.duration(duration);
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              legend.color(color);
              lines.color(color);
            }
          },
          rightAlignYAxis: {
            get: function() {
              return rightAlignYAxis;
            },
            set: function(_) {
              rightAlignYAxis = _;
              yAxis.orient(rightAlignYAxis ? 'right' : 'left');
            }
          },
          useInteractiveGuideline: {
            get: function() {
              return useInteractiveGuideline;
            },
            set: function(_) {
              useInteractiveGuideline = _;
              if (useInteractiveGuideline) {
                lines.interactive(false);
                lines.useVoronoi(false);
              }
            }
          }
        });
        nv.utils.inheritOptions(chart, lines);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.linePlusBarChart = function() {
        "use strict";
        var lines = nv.models.line(),
            lines2 = nv.models.line(),
            bars = nv.models.historicalBar(),
            bars2 = nv.models.historicalBar(),
            xAxis = nv.models.axis(),
            x2Axis = nv.models.axis(),
            y1Axis = nv.models.axis(),
            y2Axis = nv.models.axis(),
            y3Axis = nv.models.axis(),
            y4Axis = nv.models.axis(),
            legend = nv.models.legend(),
            brush = d3.svg.brush();
        ;
        var margin = {
          top: 30,
          right: 30,
          bottom: 30,
          left: 60
        },
            margin2 = {
              top: 0,
              right: 30,
              bottom: 20,
              left: 60
            },
            width = null,
            height = null,
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            color = nv.utils.defaultColor(),
            showLegend = true,
            focusEnable = true,
            focusShowAxisY = false,
            focusShowAxisX = true,
            focusHeight = 50,
            extent,
            brushExtent = null,
            tooltips = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
            },
            x,
            x2,
            y1,
            y2,
            y3,
            y4,
            noData = "No Data Available.",
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'brush', 'stateChange', 'changeState'),
            transitionDuration = 0,
            state = nv.utils.state(),
            defaultState = null,
            legendLeftAxisHint = ' (left axis)',
            legendRightAxisHint = ' (right axis)';
        ;
        lines.clipEdge(true);
        ;
        lines2.interactive(false);
        ;
        xAxis.orient('bottom').tickPadding(5);
        ;
        y1Axis.orient('left');
        ;
        y2Axis.orient('right');
        ;
        x2Axis.orient('bottom').tickPadding(5);
        ;
        y3Axis.orient('left');
        ;
        y4Axis.orient('right');
        ;
        var showTooltip = function(e, offsetElement) {
          if (extent) {
            e.pointIndex += Math.ceil(extent[0]);
          }
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
              y = (e.series.bar ? y1Axis : y2Axis).tickFormat()(lines.y()(e.point, e.pointIndex)),
              content = tooltip(e.series.key, x, y, e, chart);
          nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
        };
        var stateGetter = function(data) {
          return function() {
            return {active: data.map(function(d) {
                return !d.disabled;
              })};
          };
        };
        var stateSetter = function(data) {
          return function(state) {
            if (state.active !== undefined)
              data.forEach(function(series, i) {
                series.disabled = !state.active[i];
              });
          };
        };
        function chart(selection) {
          selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight1 = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom - (focusEnable ? focusHeight : 0),
                availableHeight2 = focusHeight - margin2.top - margin2.bottom;
            chart.update = function() {
              container.transition().duration(transitionDuration).call(chart);
            };
            chart.container = this;
            state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();
            state.disabled = data.map(function(d) {
              return !!d.disabled;
            });
            if (!defaultState) {
              var key;
              defaultState = {};
              for (key in state) {
                if (state[key] instanceof Array)
                  defaultState[key] = state[key].slice(0);
                else
                  defaultState[key] = state[key];
              }
            }
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight1 / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            var dataBars = data.filter(function(d) {
              return !d.disabled && d.bar;
            });
            var dataLines = data.filter(function(d) {
              return !d.bar;
            });
            x = bars.xScale();
            x2 = x2Axis.scale();
            y1 = bars.yScale();
            y2 = lines.yScale();
            y3 = bars2.yScale();
            y4 = lines2.yScale();
            var series1 = data.filter(function(d) {
              return !d.disabled && d.bar;
            }).map(function(d) {
              return d.values.map(function(d, i) {
                return {
                  x: getX(d, i),
                  y: getY(d, i)
                };
              });
            });
            var series2 = data.filter(function(d) {
              return !d.disabled && !d.bar;
            }).map(function(d) {
              return d.values.map(function(d, i) {
                return {
                  x: getX(d, i),
                  y: getY(d, i)
                };
              });
            });
            x.range([0, availableWidth]);
            x2.domain(d3.extent(d3.merge(series1.concat(series2)), function(d) {
              return d.x;
            })).range([0, availableWidth]);
            var wrap = container.selectAll('g.nv-wrap.nv-linePlusBar').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-linePlusBar').append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            var focusEnter = gEnter.append('g').attr('class', 'nv-focus');
            focusEnter.append('g').attr('class', 'nv-x nv-axis');
            focusEnter.append('g').attr('class', 'nv-y1 nv-axis');
            focusEnter.append('g').attr('class', 'nv-y2 nv-axis');
            focusEnter.append('g').attr('class', 'nv-barsWrap');
            focusEnter.append('g').attr('class', 'nv-linesWrap');
            var contextEnter = gEnter.append('g').attr('class', 'nv-context');
            contextEnter.append('g').attr('class', 'nv-x nv-axis');
            contextEnter.append('g').attr('class', 'nv-y1 nv-axis');
            contextEnter.append('g').attr('class', 'nv-y2 nv-axis');
            contextEnter.append('g').attr('class', 'nv-barsWrap');
            contextEnter.append('g').attr('class', 'nv-linesWrap');
            contextEnter.append('g').attr('class', 'nv-brushBackground');
            contextEnter.append('g').attr('class', 'nv-x nv-brush');
            if (showLegend) {
              legend.width(availableWidth / 2);
              g.select('.nv-legendWrap').datum(data.map(function(series) {
                series.originalKey = series.originalKey === undefined ? series.key : series.originalKey;
                series.key = series.originalKey + (series.bar ? legendLeftAxisHint : legendRightAxisHint);
                return series;
              })).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight1 = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom - focusHeight;
              }
              g.select('.nv-legendWrap').attr('transform', 'translate(' + (availableWidth / 2) + ',' + (-margin.top) + ')');
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            g.select('.nv-context').style('display', focusEnable ? 'initial' : 'none');
            bars2.width(availableWidth).height(availableHeight2).color(data.map(function(d, i) {
              return d.color || color(d, i);
            }).filter(function(d, i) {
              return !data[i].disabled && data[i].bar;
            }));
            lines2.width(availableWidth).height(availableHeight2).color(data.map(function(d, i) {
              return d.color || color(d, i);
            }).filter(function(d, i) {
              return !data[i].disabled && !data[i].bar;
            }));
            var bars2Wrap = g.select('.nv-context .nv-barsWrap').datum(dataBars.length ? dataBars : [{values: []}]);
            var lines2Wrap = g.select('.nv-context .nv-linesWrap').datum(!dataLines[0].disabled ? dataLines : [{values: []}]);
            g.select('.nv-context').attr('transform', 'translate(0,' + (availableHeight1 + margin.bottom + margin2.top) + ')');
            bars2Wrap.transition().call(bars2);
            lines2Wrap.transition().call(lines2);
            if (focusShowAxisX) {
              x2Axis.ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight2, 0);
              g.select('.nv-context .nv-x.nv-axis').attr('transform', 'translate(0,' + y3.range()[0] + ')');
              g.select('.nv-context .nv-x.nv-axis').transition().call(x2Axis);
            }
            if (focusShowAxisY) {
              y3Axis.scale(y3).ticks(availableHeight2 / 36).tickSize(-availableWidth, 0);
              y4Axis.scale(y4).ticks(availableHeight2 / 36).tickSize(dataBars.length ? 0 : -availableWidth, 0);
              g.select('.nv-context .nv-y3.nv-axis').style('opacity', dataBars.length ? 1 : 0).attr('transform', 'translate(0,' + x2.range()[0] + ')');
              g.select('.nv-context .nv-y2.nv-axis').style('opacity', dataLines.length ? 1 : 0).attr('transform', 'translate(' + x2.range()[1] + ',0)');
              g.select('.nv-context .nv-y1.nv-axis').transition().call(y3Axis);
              g.select('.nv-context .nv-y2.nv-axis').transition().call(y4Axis);
            }
            brush.x(x2).on('brush', onBrush);
            if (brushExtent)
              brush.extent(brushExtent);
            var brushBG = g.select('.nv-brushBackground').selectAll('g').data([brushExtent || brush.extent()]);
            var brushBGenter = brushBG.enter().append('g');
            brushBGenter.append('rect').attr('class', 'left').attr('x', 0).attr('y', 0).attr('height', availableHeight2);
            brushBGenter.append('rect').attr('class', 'right').attr('x', 0).attr('y', 0).attr('height', availableHeight2);
            var gBrush = g.select('.nv-x.nv-brush').call(brush);
            gBrush.selectAll('rect').attr('height', availableHeight2);
            gBrush.selectAll('.resize').append('path').attr('d', resizePath);
            legend.dispatch.on('stateChange', function(newState) {
              for (var key in newState)
                state[key] = newState[key];
              dispatch.stateChange(state);
              chart.update();
            });
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
            dispatch.on('changeState', function(e) {
              if (typeof e.disabled !== 'undefined') {
                data.forEach(function(series, i) {
                  series.disabled = e.disabled[i];
                });
                state.disabled = e.disabled;
              }
              chart.update();
            });
            function resizePath(d) {
              var e = +(d == 'e'),
                  x = e ? 1 : -1,
                  y = availableHeight2 / 3;
              return 'M' + (.5 * x) + ',' + y + 'A6,6 0 0 ' + e + ' ' + (6.5 * x) + ',' + (y + 6) + 'V' + (2 * y - 6) + 'A6,6 0 0 ' + e + ' ' + (.5 * x) + ',' + (2 * y) + 'Z' + 'M' + (2.5 * x) + ',' + (y + 8) + 'V' + (2 * y - 8) + 'M' + (4.5 * x) + ',' + (y + 8) + 'V' + (2 * y - 8);
            }
            function updateBrushBG() {
              if (!brush.empty())
                brush.extent(brushExtent);
              brushBG.data([brush.empty() ? x2.domain() : brushExtent]).each(function(d, i) {
                var leftWidth = x2(d[0]) - x2.range()[0],
                    rightWidth = x2.range()[1] - x2(d[1]);
                d3.select(this).select('.left').attr('width', leftWidth < 0 ? 0 : leftWidth);
                d3.select(this).select('.right').attr('x', x2(d[1])).attr('width', rightWidth < 0 ? 0 : rightWidth);
              });
            }
            function onBrush() {
              brushExtent = brush.empty() ? null : brush.extent();
              extent = brush.empty() ? x2.domain() : brush.extent();
              dispatch.brush({
                extent: extent,
                brush: brush
              });
              updateBrushBG();
              bars.width(availableWidth).height(availableHeight1).color(data.map(function(d, i) {
                return d.color || color(d, i);
              }).filter(function(d, i) {
                return !data[i].disabled && data[i].bar;
              }));
              lines.width(availableWidth).height(availableHeight1).color(data.map(function(d, i) {
                return d.color || color(d, i);
              }).filter(function(d, i) {
                return !data[i].disabled && !data[i].bar;
              }));
              var focusBarsWrap = g.select('.nv-focus .nv-barsWrap').datum(!dataBars.length ? [{values: []}] : dataBars.map(function(d, i) {
                return {
                  key: d.key,
                  values: d.values.filter(function(d, i) {
                    return bars.x()(d, i) >= extent[0] && bars.x()(d, i) <= extent[1];
                  })
                };
              }));
              var focusLinesWrap = g.select('.nv-focus .nv-linesWrap').datum(dataLines[0].disabled ? [{values: []}] : dataLines.map(function(d, i) {
                return {
                  key: d.key,
                  values: d.values.filter(function(d, i) {
                    return lines.x()(d, i) >= extent[0] && lines.x()(d, i) <= extent[1];
                  })
                };
              }));
              if (dataBars.length) {
                x = bars.xScale();
              } else {
                x = lines.xScale();
              }
              xAxis.scale(x).ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight1, 0);
              xAxis.domain([Math.ceil(extent[0]), Math.floor(extent[1])]);
              g.select('.nv-x.nv-axis').transition().duration(transitionDuration).call(xAxis);
              focusBarsWrap.transition().duration(transitionDuration).call(bars);
              focusLinesWrap.transition().duration(transitionDuration).call(lines);
              g.select('.nv-focus .nv-x.nv-axis').attr('transform', 'translate(0,' + y1.range()[0] + ')');
              y1Axis.scale(y1).ticks(nv.utils.calcTicksY(availableHeight1 / 36, data)).tickSize(-availableWidth, 0);
              y2Axis.scale(y2).ticks(nv.utils.calcTicksY(availableHeight1 / 36, data)).tickSize(dataBars.length ? 0 : -availableWidth, 0);
              g.select('.nv-focus .nv-y1.nv-axis').style('opacity', dataBars.length ? 1 : 0);
              g.select('.nv-focus .nv-y2.nv-axis').style('opacity', dataLines.length && !dataLines[0].disabled ? 1 : 0).attr('transform', 'translate(' + x.range()[1] + ',0)');
              g.select('.nv-focus .nv-y1.nv-axis').transition().duration(transitionDuration).call(y1Axis);
              g.select('.nv-focus .nv-y2.nv-axis').transition().duration(transitionDuration).call(y2Axis);
            }
            onBrush();
          });
          return chart;
        }
        lines.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        lines.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        bars.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        bars.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.dispatch = dispatch;
        chart.legend = legend;
        chart.lines = lines;
        chart.lines2 = lines2;
        chart.bars = bars;
        chart.bars2 = bars2;
        chart.xAxis = xAxis;
        chart.x2Axis = x2Axis;
        chart.y1Axis = y1Axis;
        chart.y2Axis = y2Axis;
        chart.y3Axis = y3Axis;
        chart.y4Axis = y4Axis;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          brushExtent: {
            get: function() {
              return brushExtent;
            },
            set: function(_) {
              brushExtent = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          focusEnable: {
            get: function() {
              return focusEnable;
            },
            set: function(_) {
              focusEnable = _;
            }
          },
          focusHeight: {
            get: function() {
              return focusHeight;
            },
            set: function(_) {
              focusHeight = _;
            }
          },
          focusShowAxisX: {
            get: function() {
              return focusShowAxisX;
            },
            set: function(_) {
              focusShowAxisX = _;
            }
          },
          focusShowAxisY: {
            get: function() {
              return focusShowAxisY;
            },
            set: function(_) {
              focusShowAxisY = _;
            }
          },
          legendLeftAxisHint: {
            get: function() {
              return legendLeftAxisHint;
            },
            set: function(_) {
              legendLeftAxisHint = _;
            }
          },
          legendRightAxisHint: {
            get: function() {
              return legendRightAxisHint;
            },
            set: function(_) {
              legendRightAxisHint = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return transitionDuration;
            },
            set: function(_) {
              transitionDuration = _;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              legend.color(color);
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = _;
              lines.x(_);
              lines2.x(_);
              bars.x(_);
              bars2.x(_);
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = _;
              lines.y(_);
              lines2.y(_);
              bars.y(_);
              bars2.y(_);
            }
          }
        });
        nv.utils.inheritOptions(chart, lines);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.lineWithFocusChart = function() {
        "use strict";
        var lines = nv.models.line(),
            lines2 = nv.models.line(),
            xAxis = nv.models.axis(),
            yAxis = nv.models.axis(),
            x2Axis = nv.models.axis(),
            y2Axis = nv.models.axis(),
            legend = nv.models.legend(),
            brush = d3.svg.brush();
        ;
        var margin = {
          top: 30,
          right: 30,
          bottom: 30,
          left: 60
        },
            margin2 = {
              top: 0,
              right: 30,
              bottom: 20,
              left: 60
            },
            color = nv.utils.defaultColor(),
            width = null,
            height = null,
            height2 = 100,
            x,
            y,
            x2,
            y2,
            showLegend = true,
            brushExtent = null,
            tooltips = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
            },
            noData = "No Data Available.",
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'brush', 'stateChange', 'changeState'),
            transitionDuration = 250,
            state = nv.utils.state(),
            defaultState = null;
        ;
        lines.clipEdge(true);
        ;
        lines2.interactive(false);
        ;
        xAxis.orient('bottom').tickPadding(5);
        ;
        yAxis.orient('left');
        ;
        x2Axis.orient('bottom').tickPadding(5);
        ;
        y2Axis.orient('left');
        ;
        var showTooltip = function(e, offsetElement) {
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
              y = yAxis.tickFormat()(lines.y()(e.point, e.pointIndex)),
              content = tooltip(e.series.key, x, y, e, chart);
          nv.tooltip.show([left, top], content, null, null, offsetElement);
        };
        var stateGetter = function(data) {
          return function() {
            return {active: data.map(function(d) {
                return !d.disabled;
              })};
          };
        };
        var stateSetter = function(data) {
          return function(state) {
            if (state.active !== undefined)
              data.forEach(function(series, i) {
                series.disabled = !state.active[i];
              });
          };
        };
        function chart(selection) {
          selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight1 = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom - height2,
                availableHeight2 = height2 - margin2.top - margin2.bottom;
            chart.update = function() {
              container.transition().duration(transitionDuration).call(chart);
            };
            chart.container = this;
            state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();
            state.disabled = data.map(function(d) {
              return !!d.disabled;
            });
            if (!defaultState) {
              var key;
              defaultState = {};
              for (key in state) {
                if (state[key] instanceof Array)
                  defaultState[key] = state[key].slice(0);
                else
                  defaultState[key] = state[key];
              }
            }
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight1 / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            x = lines.xScale();
            y = lines.yScale();
            x2 = lines2.xScale();
            y2 = lines2.yScale();
            var wrap = container.selectAll('g.nv-wrap.nv-lineWithFocusChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-lineWithFocusChart').append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            var focusEnter = gEnter.append('g').attr('class', 'nv-focus');
            focusEnter.append('g').attr('class', 'nv-x nv-axis');
            focusEnter.append('g').attr('class', 'nv-y nv-axis');
            focusEnter.append('g').attr('class', 'nv-linesWrap');
            var contextEnter = gEnter.append('g').attr('class', 'nv-context');
            contextEnter.append('g').attr('class', 'nv-x nv-axis');
            contextEnter.append('g').attr('class', 'nv-y nv-axis');
            contextEnter.append('g').attr('class', 'nv-linesWrap');
            contextEnter.append('g').attr('class', 'nv-brushBackground');
            contextEnter.append('g').attr('class', 'nv-x nv-brush');
            if (showLegend) {
              legend.width(availableWidth);
              g.select('.nv-legendWrap').datum(data).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight1 = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom - height2;
              }
              g.select('.nv-legendWrap').attr('transform', 'translate(0,' + (-margin.top) + ')');
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            lines.width(availableWidth).height(availableHeight1).color(data.map(function(d, i) {
              return d.color || color(d, i);
            }).filter(function(d, i) {
              return !data[i].disabled;
            }));
            lines2.defined(lines.defined()).width(availableWidth).height(availableHeight2).color(data.map(function(d, i) {
              return d.color || color(d, i);
            }).filter(function(d, i) {
              return !data[i].disabled;
            }));
            g.select('.nv-context').attr('transform', 'translate(0,' + (availableHeight1 + margin.bottom + margin2.top) + ')');
            var contextLinesWrap = g.select('.nv-context .nv-linesWrap').datum(data.filter(function(d) {
              return !d.disabled;
            }));
            d3.transition(contextLinesWrap).call(lines2);
            xAxis.scale(x).ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight1, 0);
            yAxis.scale(y).ticks(nv.utils.calcTicksY(availableHeight1 / 36, data)).tickSize(-availableWidth, 0);
            g.select('.nv-focus .nv-x.nv-axis').attr('transform', 'translate(0,' + availableHeight1 + ')');
            brush.x(x2).on('brush', function() {
              var oldTransition = chart.duration();
              chart.duration(0);
              onBrush();
              chart.duration(oldTransition);
            });
            if (brushExtent)
              brush.extent(brushExtent);
            var brushBG = g.select('.nv-brushBackground').selectAll('g').data([brushExtent || brush.extent()]);
            var brushBGenter = brushBG.enter().append('g');
            brushBGenter.append('rect').attr('class', 'left').attr('x', 0).attr('y', 0).attr('height', availableHeight2);
            brushBGenter.append('rect').attr('class', 'right').attr('x', 0).attr('y', 0).attr('height', availableHeight2);
            var gBrush = g.select('.nv-x.nv-brush').call(brush);
            gBrush.selectAll('rect').attr('height', availableHeight2);
            gBrush.selectAll('.resize').append('path').attr('d', resizePath);
            onBrush();
            x2Axis.scale(x2).ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight2, 0);
            g.select('.nv-context .nv-x.nv-axis').attr('transform', 'translate(0,' + y2.range()[0] + ')');
            d3.transition(g.select('.nv-context .nv-x.nv-axis')).call(x2Axis);
            y2Axis.scale(y2).ticks(nv.utils.calcTicksY(availableHeight2 / 36, data)).tickSize(-availableWidth, 0);
            d3.transition(g.select('.nv-context .nv-y.nv-axis')).call(y2Axis);
            g.select('.nv-context .nv-x.nv-axis').attr('transform', 'translate(0,' + y2.range()[0] + ')');
            legend.dispatch.on('stateChange', function(newState) {
              for (var key in newState)
                state[key] = newState[key];
              dispatch.stateChange(state);
              chart.update();
            });
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
            dispatch.on('changeState', function(e) {
              if (typeof e.disabled !== 'undefined') {
                data.forEach(function(series, i) {
                  series.disabled = e.disabled[i];
                });
              }
              chart.update();
            });
            function resizePath(d) {
              var e = +(d == 'e'),
                  x = e ? 1 : -1,
                  y = availableHeight2 / 3;
              return 'M' + (.5 * x) + ',' + y + 'A6,6 0 0 ' + e + ' ' + (6.5 * x) + ',' + (y + 6) + 'V' + (2 * y - 6) + 'A6,6 0 0 ' + e + ' ' + (.5 * x) + ',' + (2 * y) + 'Z' + 'M' + (2.5 * x) + ',' + (y + 8) + 'V' + (2 * y - 8) + 'M' + (4.5 * x) + ',' + (y + 8) + 'V' + (2 * y - 8);
            }
            function updateBrushBG() {
              if (!brush.empty())
                brush.extent(brushExtent);
              brushBG.data([brush.empty() ? x2.domain() : brushExtent]).each(function(d, i) {
                var leftWidth = x2(d[0]) - x.range()[0],
                    rightWidth = x.range()[1] - x2(d[1]);
                d3.select(this).select('.left').attr('width', leftWidth < 0 ? 0 : leftWidth);
                d3.select(this).select('.right').attr('x', x2(d[1])).attr('width', rightWidth < 0 ? 0 : rightWidth);
              });
            }
            function onBrush() {
              brushExtent = brush.empty() ? null : brush.extent();
              var extent = brush.empty() ? x2.domain() : brush.extent();
              if (Math.abs(extent[0] - extent[1]) <= 1) {
                return ;
              }
              dispatch.brush({
                extent: extent,
                brush: brush
              });
              updateBrushBG();
              var focusLinesWrap = g.select('.nv-focus .nv-linesWrap').datum(data.filter(function(d) {
                return !d.disabled;
              }).map(function(d, i) {
                return {
                  key: d.key,
                  area: d.area,
                  values: d.values.filter(function(d, i) {
                    return lines.x()(d, i) >= extent[0] && lines.x()(d, i) <= extent[1];
                  })
                };
              }));
              focusLinesWrap.transition().duration(transitionDuration).call(lines);
              g.select('.nv-focus .nv-x.nv-axis').transition().duration(transitionDuration).call(xAxis);
              g.select('.nv-focus .nv-y.nv-axis').transition().duration(transitionDuration).call(yAxis);
            }
          });
          return chart;
        }
        lines.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        lines.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.dispatch = dispatch;
        chart.legend = legend;
        chart.lines = lines;
        chart.lines2 = lines2;
        chart.xAxis = xAxis;
        chart.yAxis = yAxis;
        chart.x2Axis = x2Axis;
        chart.y2Axis = y2Axis;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          focusHeight: {
            get: function() {
              return height2;
            },
            set: function(_) {
              height2 = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          brushExtent: {
            get: function() {
              return brushExtent;
            },
            set: function(_) {
              brushExtent = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          defaultState: {
            get: function() {
              return defaultState;
            },
            set: function(_) {
              defaultState = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              legend.color(color);
            }
          },
          interpolate: {
            get: function() {
              return lines.interpolate();
            },
            set: function(_) {
              lines.interpolate(_);
              lines2.interpolate(_);
            }
          },
          xTickFormat: {
            get: function() {
              return xAxis.xTickFormat();
            },
            set: function(_) {
              xAxis.xTickFormat(_);
              x2Axis.xTickFormat(_);
            }
          },
          yTickFormat: {
            get: function() {
              return yAxis.yTickFormat();
            },
            set: function(_) {
              yAxis.yTickFormat(_);
              y2Axis.yTickFormat(_);
            }
          },
          duration: {
            get: function() {
              return transitionDuration;
            },
            set: function(_) {
              transitionDuration = _;
              yAxis.duration(transitionDuration);
              xAxis.duration(transitionDuration);
            }
          },
          x: {
            get: function() {
              return lines.x();
            },
            set: function(_) {
              lines.x(_);
              lines2.x(_);
            }
          },
          y: {
            get: function() {
              return lines.y();
            },
            set: function(_) {
              lines.y(_);
              lines2.y(_);
            }
          }
        });
        nv.utils.inheritOptions(chart, lines);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.multiBar = function() {
        "use strict";
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = 960,
            height = 500,
            x = d3.scale.ordinal(),
            y = d3.scale.linear(),
            id = Math.floor(Math.random() * 10000),
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            forceY = [0],
            clipEdge = true,
            stacked = false,
            stackOffset = 'zero',
            color = nv.utils.defaultColor(),
            hideable = false,
            barColor = null,
            disabled,
            duration = 500,
            xDomain,
            yDomain,
            xRange,
            yRange,
            groupSpacing = 0.1,
            dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'renderEnd');
        ;
        var x0,
            y0,
            renderWatch = nv.utils.renderWatch(dispatch, duration);
        ;
        var last_datalength = 0;
        function chart(selection) {
          renderWatch.reset();
          selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom,
                container = d3.select(this);
            nv.utils.initSVG(container);
            var endFn = function(d, i) {
              if (d.series === data.length - 1 && i === data[0].values.length - 1)
                return true;
              return false;
            };
            if (hideable && data.length)
              hideable = [{values: data[0].values.map(function(d) {
                  return {
                    x: d.x,
                    y: 0,
                    series: d.series,
                    size: 0.01
                  };
                })}];
            if (stacked)
              data = d3.layout.stack().offset(stackOffset).values(function(d) {
                return d.values;
              }).y(getY)(!data.length && hideable ? hideable : data);
            data.forEach(function(series, i) {
              series.values.forEach(function(point) {
                point.series = i;
              });
            });
            if (stacked)
              data[0].values.map(function(d, i) {
                var posBase = 0,
                    negBase = 0;
                data.map(function(d) {
                  var f = d.values[i];
                  f.size = Math.abs(f.y);
                  if (f.y < 0) {
                    f.y1 = negBase;
                    negBase = negBase - f.size;
                  } else {
                    f.y1 = f.size + posBase;
                    posBase = posBase + f.size;
                  }
                });
              });
            var seriesData = (xDomain && yDomain) ? [] : data.map(function(d) {
              return d.values.map(function(d, i) {
                return {
                  x: getX(d, i),
                  y: getY(d, i),
                  y0: d.y0,
                  y1: d.y1
                };
              });
            });
            x.domain(xDomain || d3.merge(seriesData).map(function(d) {
              return d.x;
            })).rangeBands(xRange || [0, availableWidth], groupSpacing);
            y.domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) {
              return stacked ? (d.y > 0 ? d.y1 : d.y1 + d.y) : d.y;
            }).concat(forceY))).range(yRange || [availableHeight, 0]);
            if (x.domain()[0] === x.domain()[1])
              x.domain()[0] ? x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01]) : x.domain([-1, 1]);
            if (y.domain()[0] === y.domain()[1])
              y.domain()[0] ? y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01]) : y.domain([-1, 1]);
            x0 = x0 || x;
            y0 = y0 || y;
            var wrap = container.selectAll('g.nv-wrap.nv-multibar').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multibar');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-groups');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            defsEnter.append('clipPath').attr('id', 'nv-edge-clip-' + id).append('rect');
            wrap.select('#nv-edge-clip-' + id + ' rect').attr('width', availableWidth).attr('height', availableHeight);
            g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');
            var groups = wrap.select('.nv-groups').selectAll('.nv-group').data(function(d) {
              return d;
            }, function(d, i) {
              return i;
            });
            groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
            var exitTransition = renderWatch.transition(groups.exit().selectAll('rect.nv-bar'), 'multibarExit', Math.min(100, duration)).attr('y', function(d) {
              return (stacked ? y0(d.y0) : y0(0)) || 0;
            }).attr('height', 0).remove();
            if (exitTransition.delay)
              exitTransition.delay(function(d, i) {
                var delay = i * (duration / (last_datalength + 1)) - i;
                return delay;
              });
            groups.attr('class', function(d, i) {
              return 'nv-group nv-series-' + i;
            }).classed('hover', function(d) {
              return d.hover;
            }).style('fill', function(d, i) {
              return color(d, i);
            }).style('stroke', function(d, i) {
              return color(d, i);
            });
            groups.style('stroke-opacity', 1).style('fill-opacity', 0.75);
            var bars = groups.selectAll('rect.nv-bar').data(function(d) {
              return (hideable && !data.length) ? hideable.values : d.values;
            });
            bars.exit().remove();
            var barsEnter = bars.enter().append('rect').attr('class', function(d, i) {
              return getY(d, i) < 0 ? 'nv-bar negative' : 'nv-bar positive';
            }).attr('x', function(d, i, j) {
              return stacked ? 0 : (j * x.rangeBand() / data.length);
            }).attr('y', function(d) {
              return y0(stacked ? d.y0 : 0) || 0;
            }).attr('height', 0).attr('width', x.rangeBand() / (stacked ? 1 : data.length)).attr('transform', function(d, i) {
              return 'translate(' + x(getX(d, i)) + ',0)';
            });
            ;
            bars.style('fill', function(d, i, j) {
              return color(d, j, i);
            }).style('stroke', function(d, i, j) {
              return color(d, j, i);
            }).on('mouseover', function(d, i) {
              d3.select(this).classed('hover', true);
              dispatch.elementMouseover({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pos: [x(getX(d, i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length), y(getY(d, i) + (stacked ? d.y0 : 0))],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
            }).on('mouseout', function(d, i) {
              d3.select(this).classed('hover', false);
              dispatch.elementMouseout({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
            }).on('click', function(d, i) {
              dispatch.elementClick({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pos: [x(getX(d, i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length), y(getY(d, i) + (stacked ? d.y0 : 0))],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
              d3.event.stopPropagation();
            }).on('dblclick', function(d, i) {
              dispatch.elementDblClick({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pos: [x(getX(d, i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length), y(getY(d, i) + (stacked ? d.y0 : 0))],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
              d3.event.stopPropagation();
            });
            bars.attr('class', function(d, i) {
              return getY(d, i) < 0 ? 'nv-bar negative' : 'nv-bar positive';
            }).attr('transform', function(d, i) {
              return 'translate(' + x(getX(d, i)) + ',0)';
            });
            if (barColor) {
              if (!disabled)
                disabled = data.map(function() {
                  return true;
                });
              bars.style('fill', function(d, i, j) {
                return d3.rgb(barColor(d, i)).darker(disabled.map(function(d, i) {
                  return i;
                }).filter(function(d, i) {
                  return !disabled[i];
                })[j]).toString();
              }).style('stroke', function(d, i, j) {
                return d3.rgb(barColor(d, i)).darker(disabled.map(function(d, i) {
                  return i;
                }).filter(function(d, i) {
                  return !disabled[i];
                })[j]).toString();
              });
            }
            var barSelection = bars.watchTransition(renderWatch, 'multibar', Math.min(250, duration)).delay(function(d, i) {
              return i * duration / data[0].values.length;
            });
            if (stacked)
              barSelection.attr('y', function(d, i) {
                return y((stacked ? d.y1 : 0));
              }).attr('height', function(d, i) {
                return Math.max(Math.abs(y(d.y + (stacked ? d.y0 : 0)) - y((stacked ? d.y0 : 0))), 1);
              }).attr('x', function(d, i) {
                return stacked ? 0 : (d.series * x.rangeBand() / data.length);
              }).attr('width', x.rangeBand() / (stacked ? 1 : data.length));
            else
              barSelection.attr('x', function(d, i) {
                return d.series * x.rangeBand() / data.length;
              }).attr('width', x.rangeBand() / data.length).attr('y', function(d, i) {
                return getY(d, i) < 0 ? y(0) : y(0) - y(getY(d, i)) < 1 ? y(0) - 1 : y(getY(d, i)) || 0;
              }).attr('height', function(d, i) {
                return Math.max(Math.abs(y(getY(d, i)) - y(0)), 1) || 0;
              });
            x0 = x.copy();
            y0 = y.copy();
            if (data[0] && data[0].values) {
              last_datalength = data[0].values.length;
            }
          });
          renderWatch.renderEnd('multibar immediate');
          return chart;
        }
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = _;
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = _;
            }
          },
          xScale: {
            get: function() {
              return x;
            },
            set: function(_) {
              x = _;
            }
          },
          yScale: {
            get: function() {
              return y;
            },
            set: function(_) {
              y = _;
            }
          },
          xDomain: {
            get: function() {
              return xDomain;
            },
            set: function(_) {
              xDomain = _;
            }
          },
          yDomain: {
            get: function() {
              return yDomain;
            },
            set: function(_) {
              yDomain = _;
            }
          },
          xRange: {
            get: function() {
              return xRange;
            },
            set: function(_) {
              xRange = _;
            }
          },
          yRange: {
            get: function() {
              return yRange;
            },
            set: function(_) {
              yRange = _;
            }
          },
          forceY: {
            get: function() {
              return forceY;
            },
            set: function(_) {
              forceY = _;
            }
          },
          stacked: {
            get: function() {
              return stacked;
            },
            set: function(_) {
              stacked = _;
            }
          },
          stackOffset: {
            get: function() {
              return stackOffset;
            },
            set: function(_) {
              stackOffset = _;
            }
          },
          clipEdge: {
            get: function() {
              return clipEdge;
            },
            set: function(_) {
              clipEdge = _;
            }
          },
          disabled: {
            get: function() {
              return disabled;
            },
            set: function(_) {
              disabled = _;
            }
          },
          id: {
            get: function() {
              return id;
            },
            set: function(_) {
              id = _;
            }
          },
          hideable: {
            get: function() {
              return hideable;
            },
            set: function(_) {
              hideable = _;
            }
          },
          groupSpacing: {
            get: function() {
              return groupSpacing;
            },
            set: function(_) {
              groupSpacing = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          },
          barColor: {
            get: function() {
              return barColor;
            },
            set: function(_) {
              barColor = nv.utils.getColor(_);
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.multiBarChart = function() {
        "use strict";
        var multibar = nv.models.multiBar(),
            xAxis = nv.models.axis(),
            yAxis = nv.models.axis(),
            legend = nv.models.legend(),
            controls = nv.models.legend();
        ;
        var margin = {
          top: 30,
          right: 20,
          bottom: 50,
          left: 60
        },
            width = null,
            height = null,
            color = nv.utils.defaultColor(),
            showControls = true,
            controlLabels = {},
            showLegend = true,
            showXAxis = true,
            showYAxis = true,
            rightAlignYAxis = false,
            reduceXTicks = true,
            staggerLabels = false,
            rotateLabels = 0,
            tooltips = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + key + '</h3>' + '<p>' + y + ' on ' + x + '</p>';
            },
            x,
            y,
            state = nv.utils.state(),
            defaultState = null,
            noData = "No Data Available.",
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState', 'renderEnd'),
            controlWidth = function() {
              return showControls ? 180 : 0;
            },
            duration = 250;
        ;
        state.stacked = false;
        multibar.stacked(false);
        ;
        xAxis.orient('bottom').tickPadding(7).highlightZero(true).showMaxMin(false).tickFormat(function(d) {
          return d;
        });
        ;
        yAxis.orient((rightAlignYAxis) ? 'right' : 'left').tickFormat(d3.format(',.1f'));
        ;
        controls.updateState(false);
        var renderWatch = nv.utils.renderWatch(dispatch);
        var stacked = false;
        var showTooltip = function(e, offsetElement) {
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              x = xAxis.tickFormat()(multibar.x()(e.point, e.pointIndex)),
              y = yAxis.tickFormat()(multibar.y()(e.point, e.pointIndex)),
              content = tooltip(e.series.key, x, y, e, chart);
          nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
        };
        var stateGetter = function(data) {
          return function() {
            return {
              active: data.map(function(d) {
                return !d.disabled;
              }),
              stacked: stacked
            };
          };
        };
        var stateSetter = function(data) {
          return function(state) {
            if (state.stacked !== undefined)
              stacked = state.stacked;
            if (state.active !== undefined)
              data.forEach(function(series, i) {
                series.disabled = !state.active[i];
              });
          };
        };
        function chart(selection) {
          renderWatch.reset();
          renderWatch.models(multibar);
          if (showXAxis)
            renderWatch.models(xAxis);
          if (showYAxis)
            renderWatch.models(yAxis);
          selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            chart.update = function() {
              if (duration === 0)
                container.call(chart);
              else
                container.transition().duration(duration).call(chart);
            };
            chart.container = this;
            state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();
            state.disabled = data.map(function(d) {
              return !!d.disabled;
            });
            if (!defaultState) {
              var key;
              defaultState = {};
              for (key in state) {
                if (state[key] instanceof Array)
                  defaultState[key] = state[key].slice(0);
                else
                  defaultState[key] = state[key];
              }
            }
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            x = multibar.xScale();
            y = multibar.yScale();
            var wrap = container.selectAll('g.nv-wrap.nv-multiBarWithLegend').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarWithLegend').append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-barsWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-controlsWrap');
            if (showLegend) {
              legend.width(availableWidth - controlWidth());
              if (multibar.barColor())
                data.forEach(function(series, i) {
                  series.color = d3.rgb('#ccc').darker(i * 1.5).toString();
                });
              g.select('.nv-legendWrap').datum(data).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
              }
              g.select('.nv-legendWrap').attr('transform', 'translate(' + controlWidth() + ',' + (-margin.top) + ')');
            }
            if (showControls) {
              var controlsData = [{
                key: controlLabels.grouped || 'Grouped',
                disabled: multibar.stacked()
              }, {
                key: controlLabels.stacked || 'Stacked',
                disabled: !multibar.stacked()
              }];
              controls.width(controlWidth()).color(['#444', '#444', '#444']);
              g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + (-margin.top) + ')').call(controls);
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            if (rightAlignYAxis) {
              g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
            }
            multibar.disabled(data.map(function(series) {
              return series.disabled;
            })).width(availableWidth).height(availableHeight).color(data.map(function(d, i) {
              return d.color || color(d, i);
            }).filter(function(d, i) {
              return !data[i].disabled;
            }));
            var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function(d) {
              return !d.disabled;
            }));
            barsWrap.call(multibar);
            if (showXAxis) {
              xAxis.scale(x).ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);
              g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')');
              g.select('.nv-x.nv-axis').call(xAxis);
              var xTicks = g.select('.nv-x.nv-axis > g').selectAll('g');
              xTicks.selectAll('line, text').style('opacity', 1);
              if (staggerLabels) {
                var getTranslate = function(x, y) {
                  return "translate(" + x + "," + y + ")";
                };
                var staggerUp = 5,
                    staggerDown = 17;
                xTicks.selectAll("text").attr('transform', function(d, i, j) {
                  return getTranslate(0, (j % 2 == 0 ? staggerUp : staggerDown));
                });
                var totalInBetweenTicks = d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;
                g.selectAll(".nv-x.nv-axis .nv-axisMaxMin text").attr("transform", function(d, i) {
                  return getTranslate(0, (i === 0 || totalInBetweenTicks % 2 !== 0) ? staggerDown : staggerUp);
                });
              }
              if (reduceXTicks)
                xTicks.filter(function(d, i) {
                  return i % Math.ceil(data[0].values.length / (availableWidth / 100)) !== 0;
                }).selectAll('text, line').style('opacity', 0);
              if (rotateLabels)
                xTicks.selectAll('.tick text').attr('transform', 'rotate(' + rotateLabels + ' 0,0)').style('text-anchor', rotateLabels > 0 ? 'start' : 'end');
              g.select('.nv-x.nv-axis').selectAll('g.nv-axisMaxMin text').style('opacity', 1);
            }
            if (showYAxis) {
              yAxis.scale(y).ticks(nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);
              g.select('.nv-y.nv-axis').call(yAxis);
            }
            legend.dispatch.on('stateChange', function(newState) {
              for (var key in newState)
                state[key] = newState[key];
              dispatch.stateChange(state);
              chart.update();
            });
            controls.dispatch.on('legendClick', function(d, i) {
              if (!d.disabled)
                return ;
              controlsData = controlsData.map(function(s) {
                s.disabled = true;
                return s;
              });
              d.disabled = false;
              switch (d.key) {
                case 'Grouped':
                  multibar.stacked(false);
                  break;
                case 'Stacked':
                  multibar.stacked(true);
                  break;
              }
              state.stacked = multibar.stacked();
              dispatch.stateChange(state);
              chart.update();
            });
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
            dispatch.on('changeState', function(e) {
              if (typeof e.disabled !== 'undefined') {
                data.forEach(function(series, i) {
                  series.disabled = e.disabled[i];
                });
                state.disabled = e.disabled;
              }
              if (typeof e.stacked !== 'undefined') {
                multibar.stacked(e.stacked);
                state.stacked = e.stacked;
                stacked = e.stacked;
              }
              chart.update();
            });
          });
          renderWatch.renderEnd('multibarchart immediate');
          return chart;
        }
        multibar.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        multibar.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.dispatch = dispatch;
        chart.multibar = multibar;
        chart.legend = legend;
        chart.xAxis = xAxis;
        chart.yAxis = yAxis;
        chart.state = state;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          showControls: {
            get: function() {
              return showControls;
            },
            set: function(_) {
              showControls = _;
            }
          },
          controlLabels: {
            get: function() {
              return controlLabels;
            },
            set: function(_) {
              controlLabels = _;
            }
          },
          showXAxis: {
            get: function() {
              return showXAxis;
            },
            set: function(_) {
              showXAxis = _;
            }
          },
          showYAxis: {
            get: function() {
              return showYAxis;
            },
            set: function(_) {
              showYAxis = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          defaultState: {
            get: function() {
              return defaultState;
            },
            set: function(_) {
              defaultState = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          reduceXTicks: {
            get: function() {
              return reduceXTicks;
            },
            set: function(_) {
              reduceXTicks = _;
            }
          },
          rotateLabels: {
            get: function() {
              return rotateLabels;
            },
            set: function(_) {
              rotateLabels = _;
            }
          },
          staggerLabels: {
            get: function() {
              return staggerLabels;
            },
            set: function(_) {
              staggerLabels = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              multibar.duration(duration);
              xAxis.duration(duration);
              yAxis.duration(duration);
              renderWatch.reset(duration);
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              legend.color(color);
            }
          },
          rightAlignYAxis: {
            get: function() {
              return rightAlignYAxis;
            },
            set: function(_) {
              rightAlignYAxis = _;
              yAxis.orient(rightAlignYAxis ? 'right' : 'left');
            }
          }
        });
        nv.utils.inheritOptions(chart, multibar);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.multiBarHorizontal = function() {
        "use strict";
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = 960,
            height = 500,
            id = Math.floor(Math.random() * 10000),
            x = d3.scale.ordinal(),
            y = d3.scale.linear(),
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            getYerr = function(d) {
              return d.yErr;
            },
            forceY = [0],
            color = nv.utils.defaultColor(),
            barColor = null,
            disabled,
            stacked = false,
            showValues = false,
            showBarLabels = false,
            valuePadding = 60,
            valueFormat = d3.format(',.2f'),
            delay = 1200,
            xDomain,
            yDomain,
            xRange,
            yRange,
            duration = 250,
            dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'renderEnd');
        ;
        var x0,
            y0;
        var renderWatch = nv.utils.renderWatch(dispatch, duration);
        function chart(selection) {
          renderWatch.reset();
          selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom,
                container = d3.select(this);
            nv.utils.initSVG(container);
            if (stacked)
              data = d3.layout.stack().offset('zero').values(function(d) {
                return d.values;
              }).y(getY)(data);
            data.forEach(function(series, i) {
              series.values.forEach(function(point) {
                point.series = i;
              });
            });
            if (stacked)
              data[0].values.map(function(d, i) {
                var posBase = 0,
                    negBase = 0;
                data.map(function(d) {
                  var f = d.values[i];
                  f.size = Math.abs(f.y);
                  if (f.y < 0) {
                    f.y1 = negBase - f.size;
                    negBase = negBase - f.size;
                  } else {
                    f.y1 = posBase;
                    posBase = posBase + f.size;
                  }
                });
              });
            var seriesData = (xDomain && yDomain) ? [] : data.map(function(d) {
              return d.values.map(function(d, i) {
                return {
                  x: getX(d, i),
                  y: getY(d, i),
                  y0: d.y0,
                  y1: d.y1
                };
              });
            });
            x.domain(xDomain || d3.merge(seriesData).map(function(d) {
              return d.x;
            })).rangeBands(xRange || [0, availableHeight], .1);
            y.domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) {
              return stacked ? (d.y > 0 ? d.y1 + d.y : d.y1) : d.y;
            }).concat(forceY)));
            if (showValues && !stacked)
              y.range(yRange || [(y.domain()[0] < 0 ? valuePadding : 0), availableWidth - (y.domain()[1] > 0 ? valuePadding : 0)]);
            else
              y.range(yRange || [0, availableWidth]);
            x0 = x0 || x;
            y0 = y0 || d3.scale.linear().domain(y.domain()).range([y(0), y(0)]);
            var wrap = d3.select(this).selectAll('g.nv-wrap.nv-multibarHorizontal').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multibarHorizontal');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-groups');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var groups = wrap.select('.nv-groups').selectAll('.nv-group').data(function(d) {
              return d;
            }, function(d, i) {
              return i;
            });
            groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
            groups.exit().watchTransition(renderWatch, 'multibarhorizontal: exit groups').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6).remove();
            groups.attr('class', function(d, i) {
              return 'nv-group nv-series-' + i;
            }).classed('hover', function(d) {
              return d.hover;
            }).style('fill', function(d, i) {
              return color(d, i);
            }).style('stroke', function(d, i) {
              return color(d, i);
            });
            groups.watchTransition(renderWatch, 'multibarhorizontal: groups').style('stroke-opacity', 1).style('fill-opacity', .75);
            var bars = groups.selectAll('g.nv-bar').data(function(d) {
              return d.values;
            });
            bars.exit().remove();
            var barsEnter = bars.enter().append('g').attr('transform', function(d, i, j) {
              return 'translate(' + y0(stacked ? d.y0 : 0) + ',' + (stacked ? 0 : (j * x.rangeBand() / data.length) + x(getX(d, i))) + ')';
            });
            barsEnter.append('rect').attr('width', 0).attr('height', x.rangeBand() / (stacked ? 1 : data.length));
            bars.on('mouseover', function(d, i) {
              d3.select(this).classed('hover', true);
              dispatch.elementMouseover({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pos: [y(getY(d, i) + (stacked ? d.y0 : 0)), x(getX(d, i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length)],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
            }).on('mouseout', function(d, i) {
              d3.select(this).classed('hover', false);
              dispatch.elementMouseout({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
            }).on('click', function(d, i) {
              dispatch.elementClick({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pos: [x(getX(d, i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length), y(getY(d, i) + (stacked ? d.y0 : 0))],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
              d3.event.stopPropagation();
            }).on('dblclick', function(d, i) {
              dispatch.elementDblClick({
                value: getY(d, i),
                point: d,
                series: data[d.series],
                pos: [x(getX(d, i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length), y(getY(d, i) + (stacked ? d.y0 : 0))],
                pointIndex: i,
                seriesIndex: d.series,
                e: d3.event
              });
              d3.event.stopPropagation();
            });
            if (getYerr(data[0], 0)) {
              barsEnter.append('polyline');
              bars.select('polyline').attr('fill', 'none').attr('points', function(d, i) {
                var xerr = getYerr(d, i),
                    mid = 0.8 * x.rangeBand() / ((stacked ? 1 : data.length) * 2);
                xerr = xerr.length ? xerr : [-Math.abs(xerr), Math.abs(xerr)];
                xerr = xerr.map(function(e) {
                  return y(e) - y(0);
                });
                var a = [[xerr[0], -mid], [xerr[0], mid], [xerr[0], 0], [xerr[1], 0], [xerr[1], -mid], [xerr[1], mid]];
                return a.map(function(path) {
                  return path.join(',');
                }).join(' ');
              }).attr('transform', function(d, i) {
                var mid = x.rangeBand() / ((stacked ? 1 : data.length) * 2);
                return 'translate(' + (getY(d, i) < 0 ? 0 : y(getY(d, i)) - y(0)) + ', ' + mid + ')';
              });
            }
            barsEnter.append('text');
            if (showValues && !stacked) {
              bars.select('text').attr('text-anchor', function(d, i) {
                return getY(d, i) < 0 ? 'end' : 'start';
              }).attr('y', x.rangeBand() / (data.length * 2)).attr('dy', '.32em').html(function(d, i) {
                var t = valueFormat(getY(d, i)),
                    yerr = getYerr(d, i);
                if (yerr === undefined)
                  return t;
                if (!yerr.length)
                  return t + '&plusmn;' + valueFormat(Math.abs(yerr));
                return t + '+' + valueFormat(Math.abs(yerr[1])) + '-' + valueFormat(Math.abs(yerr[0]));
              });
              bars.watchTransition(renderWatch, 'multibarhorizontal: bars').select('text').attr('x', function(d, i) {
                return getY(d, i) < 0 ? -4 : y(getY(d, i)) - y(0) + 4;
              });
            } else {
              bars.selectAll('text').text('');
            }
            if (showBarLabels && !stacked) {
              barsEnter.append('text').classed('nv-bar-label', true);
              bars.select('text.nv-bar-label').attr('text-anchor', function(d, i) {
                return getY(d, i) < 0 ? 'start' : 'end';
              }).attr('y', x.rangeBand() / (data.length * 2)).attr('dy', '.32em').text(function(d, i) {
                return getX(d, i);
              });
              bars.watchTransition(renderWatch, 'multibarhorizontal: bars').select('text.nv-bar-label').attr('x', function(d, i) {
                return getY(d, i) < 0 ? y(0) - y(getY(d, i)) + 4 : -4;
              });
            } else {
              bars.selectAll('text.nv-bar-label').text('');
            }
            bars.attr('class', function(d, i) {
              return getY(d, i) < 0 ? 'nv-bar negative' : 'nv-bar positive';
            });
            if (barColor) {
              if (!disabled)
                disabled = data.map(function() {
                  return true;
                });
              bars.style('fill', function(d, i, j) {
                return d3.rgb(barColor(d, i)).darker(disabled.map(function(d, i) {
                  return i;
                }).filter(function(d, i) {
                  return !disabled[i];
                })[j]).toString();
              }).style('stroke', function(d, i, j) {
                return d3.rgb(barColor(d, i)).darker(disabled.map(function(d, i) {
                  return i;
                }).filter(function(d, i) {
                  return !disabled[i];
                })[j]).toString();
              });
            }
            if (stacked)
              bars.watchTransition(renderWatch, 'multibarhorizontal: bars').attr('transform', function(d, i) {
                return 'translate(' + y(d.y1) + ',' + x(getX(d, i)) + ')';
              }).select('rect').attr('width', function(d, i) {
                return Math.abs(y(getY(d, i) + d.y0) - y(d.y0));
              }).attr('height', x.rangeBand());
            else
              bars.watchTransition(renderWatch, 'multibarhorizontal: bars').attr('transform', function(d, i) {
                return 'translate(' + (getY(d, i) < 0 ? y(getY(d, i)) : y(0)) + ',' + (d.series * x.rangeBand() / data.length + x(getX(d, i))) + ')';
              }).select('rect').attr('height', x.rangeBand() / data.length).attr('width', function(d, i) {
                return Math.max(Math.abs(y(getY(d, i)) - y(0)), 1);
              });
            x0 = x.copy();
            y0 = y.copy();
          });
          renderWatch.renderEnd('multibarHorizontal immediate');
          return chart;
        }
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = _;
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = _;
            }
          },
          yErr: {
            get: function() {
              return getYerr;
            },
            set: function(_) {
              getYerr = _;
            }
          },
          xScale: {
            get: function() {
              return x;
            },
            set: function(_) {
              x = _;
            }
          },
          yScale: {
            get: function() {
              return y;
            },
            set: function(_) {
              y = _;
            }
          },
          xDomain: {
            get: function() {
              return xDomain;
            },
            set: function(_) {
              xDomain = _;
            }
          },
          yDomain: {
            get: function() {
              return yDomain;
            },
            set: function(_) {
              yDomain = _;
            }
          },
          xRange: {
            get: function() {
              return xRange;
            },
            set: function(_) {
              xRange = _;
            }
          },
          yRange: {
            get: function() {
              return yRange;
            },
            set: function(_) {
              yRange = _;
            }
          },
          forceY: {
            get: function() {
              return forceY;
            },
            set: function(_) {
              forceY = _;
            }
          },
          stacked: {
            get: function() {
              return stacked;
            },
            set: function(_) {
              stacked = _;
            }
          },
          showValues: {
            get: function() {
              return showValues;
            },
            set: function(_) {
              showValues = _;
            }
          },
          disabled: {
            get: function() {
              return disabled;
            },
            set: function(_) {
              disabled = _;
            }
          },
          id: {
            get: function() {
              return id;
            },
            set: function(_) {
              id = _;
            }
          },
          valueFormat: {
            get: function() {
              return valueFormat;
            },
            set: function(_) {
              valueFormat = _;
            }
          },
          valuePadding: {
            get: function() {
              return valuePadding;
            },
            set: function(_) {
              valuePadding = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          },
          barColor: {
            get: function() {
              return color;
            },
            set: function(_) {
              barColor = nv.utils.getColor(_);
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.multiBarHorizontalChart = function() {
        "use strict";
        var multibar = nv.models.multiBarHorizontal(),
            xAxis = nv.models.axis(),
            yAxis = nv.models.axis(),
            legend = nv.models.legend().height(30),
            controls = nv.models.legend().height(30);
        ;
        var margin = {
          top: 30,
          right: 20,
          bottom: 50,
          left: 60
        },
            width = null,
            height = null,
            color = nv.utils.defaultColor(),
            showControls = true,
            controlLabels = {},
            showLegend = true,
            showXAxis = true,
            showYAxis = true,
            stacked = false,
            tooltips = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + key + ' - ' + x + '</h3>' + '<p>' + y + '</p>';
            },
            x,
            y,
            state = nv.utils.state(),
            defaultState = null,
            noData = 'No Data Available.',
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState', 'renderEnd'),
            controlWidth = function() {
              return showControls ? 180 : 0;
            },
            duration = 250;
        ;
        state.stacked = false;
        multibar.stacked(stacked);
        ;
        xAxis.orient('left').tickPadding(5).highlightZero(false).showMaxMin(false).tickFormat(function(d) {
          return d;
        });
        ;
        yAxis.orient('bottom').tickFormat(d3.format(',.1f'));
        ;
        controls.updateState(false);
        var showTooltip = function(e, offsetElement) {
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              x = xAxis.tickFormat()(multibar.x()(e.point, e.pointIndex)),
              y = yAxis.tickFormat()(multibar.y()(e.point, e.pointIndex)),
              content = tooltip(e.series.key, x, y, e, chart);
          nv.tooltip.show([left, top], content, e.value < 0 ? 'e' : 'w', null, offsetElement);
        };
        var stateGetter = function(data) {
          return function() {
            return {
              active: data.map(function(d) {
                return !d.disabled;
              }),
              stacked: stacked
            };
          };
        };
        var stateSetter = function(data) {
          return function(state) {
            if (state.stacked !== undefined)
              stacked = state.stacked;
            if (state.active !== undefined)
              data.forEach(function(series, i) {
                series.disabled = !state.active[i];
              });
          };
        };
        var renderWatch = nv.utils.renderWatch(dispatch, duration);
        function chart(selection) {
          renderWatch.reset();
          renderWatch.models(multibar);
          if (showXAxis)
            renderWatch.models(xAxis);
          if (showYAxis)
            renderWatch.models(yAxis);
          selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            chart.update = function() {
              container.transition().duration(duration).call(chart);
            };
            chart.container = this;
            stacked = multibar.stacked();
            state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();
            state.disabled = data.map(function(d) {
              return !!d.disabled;
            });
            if (!defaultState) {
              var key;
              defaultState = {};
              for (key in state) {
                if (state[key] instanceof Array)
                  defaultState[key] = state[key].slice(0);
                else
                  defaultState[key] = state[key];
              }
            }
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            x = multibar.xScale();
            y = multibar.yScale();
            var wrap = container.selectAll('g.nv-wrap.nv-multiBarHorizontalChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarHorizontalChart').append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis').append('g').attr('class', 'nv-zeroLine').append('line');
            gEnter.append('g').attr('class', 'nv-barsWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-controlsWrap');
            if (showLegend) {
              legend.width(availableWidth - controlWidth());
              if (multibar.barColor())
                data.forEach(function(series, i) {
                  series.color = d3.rgb('#ccc').darker(i * 1.5).toString();
                });
              g.select('.nv-legendWrap').datum(data).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
              }
              g.select('.nv-legendWrap').attr('transform', 'translate(' + controlWidth() + ',' + (-margin.top) + ')');
            }
            if (showControls) {
              var controlsData = [{
                key: controlLabels.grouped || 'Grouped',
                disabled: multibar.stacked()
              }, {
                key: controlLabels.stacked || 'Stacked',
                disabled: !multibar.stacked()
              }];
              controls.width(controlWidth()).color(['#444', '#444', '#444']);
              g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + (-margin.top) + ')').call(controls);
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            multibar.disabled(data.map(function(series) {
              return series.disabled;
            })).width(availableWidth).height(availableHeight).color(data.map(function(d, i) {
              return d.color || color(d, i);
            }).filter(function(d, i) {
              return !data[i].disabled;
            }));
            var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function(d) {
              return !d.disabled;
            }));
            barsWrap.transition().call(multibar);
            if (showXAxis) {
              xAxis.scale(x).ticks(nv.utils.calcTicksY(availableHeight / 24, data)).tickSize(-availableWidth, 0);
              g.select('.nv-x.nv-axis').call(xAxis);
              var xTicks = g.select('.nv-x.nv-axis').selectAll('g');
              xTicks.selectAll('line, text');
            }
            if (showYAxis) {
              yAxis.scale(y).ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);
              g.select('.nv-y.nv-axis').attr('transform', 'translate(0,' + availableHeight + ')');
              g.select('.nv-y.nv-axis').call(yAxis);
            }
            g.select(".nv-zeroLine line").attr("x1", y(0)).attr("x2", y(0)).attr("y1", 0).attr("y2", -availableHeight);
            ;
            legend.dispatch.on('stateChange', function(newState) {
              for (var key in newState)
                state[key] = newState[key];
              dispatch.stateChange(state);
              chart.update();
            });
            controls.dispatch.on('legendClick', function(d, i) {
              if (!d.disabled)
                return ;
              controlsData = controlsData.map(function(s) {
                s.disabled = true;
                return s;
              });
              d.disabled = false;
              switch (d.key) {
                case 'Grouped':
                  multibar.stacked(false);
                  break;
                case 'Stacked':
                  multibar.stacked(true);
                  break;
              }
              state.stacked = multibar.stacked();
              dispatch.stateChange(state);
              stacked = multibar.stacked();
              chart.update();
            });
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
            dispatch.on('changeState', function(e) {
              if (typeof e.disabled !== 'undefined') {
                data.forEach(function(series, i) {
                  series.disabled = e.disabled[i];
                });
                state.disabled = e.disabled;
              }
              if (typeof e.stacked !== 'undefined') {
                multibar.stacked(e.stacked);
                state.stacked = e.stacked;
                stacked = e.stacked;
              }
              chart.update();
            });
          });
          renderWatch.renderEnd('multibar horizontal chart immediate');
          return chart;
        }
        multibar.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        multibar.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.dispatch = dispatch;
        chart.multibar = multibar;
        chart.legend = legend;
        chart.xAxis = xAxis;
        chart.yAxis = yAxis;
        chart.state = state;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          showControls: {
            get: function() {
              return showControls;
            },
            set: function(_) {
              showControls = _;
            }
          },
          controlLabels: {
            get: function() {
              return controlLabels;
            },
            set: function(_) {
              controlLabels = _;
            }
          },
          showXAxis: {
            get: function() {
              return showXAxis;
            },
            set: function(_) {
              showXAxis = _;
            }
          },
          showYAxis: {
            get: function() {
              return showYAxis;
            },
            set: function(_) {
              showYAxis = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          defaultState: {
            get: function() {
              return defaultState;
            },
            set: function(_) {
              defaultState = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
              multibar.duration(duration);
              xAxis.duration(duration);
              yAxis.duration(duration);
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              legend.color(color);
            }
          }
        });
        nv.utils.inheritOptions(chart, multibar);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.multiChart = function() {
        "use strict";
        var margin = {
          top: 30,
          right: 20,
          bottom: 50,
          left: 60
        },
            color = nv.utils.defaultColor(),
            width = null,
            height = null,
            showLegend = true,
            tooltips = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + key + '</h3>' + '<p>' + y + ' at ' + x + '</p>';
            },
            x,
            y,
            noData = 'No Data Available.',
            yDomain1,
            yDomain2,
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            interpolate = 'monotone';
        ;
        var x = d3.scale.linear(),
            yScale1 = d3.scale.linear(),
            yScale2 = d3.scale.linear(),
            lines1 = nv.models.line().yScale(yScale1),
            lines2 = nv.models.line().yScale(yScale2),
            bars1 = nv.models.multiBar().stacked(false).yScale(yScale1),
            bars2 = nv.models.multiBar().stacked(false).yScale(yScale2),
            stack1 = nv.models.stackedArea().yScale(yScale1),
            stack2 = nv.models.stackedArea().yScale(yScale2),
            xAxis = nv.models.axis().scale(x).orient('bottom').tickPadding(5),
            yAxis1 = nv.models.axis().scale(yScale1).orient('left'),
            yAxis2 = nv.models.axis().scale(yScale2).orient('right'),
            legend = nv.models.legend().height(30),
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide');
        var showTooltip = function(e, offsetElement) {
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              x = xAxis.tickFormat()(lines1.x()(e.point, e.pointIndex)),
              y = ((e.series.yAxis == 2) ? yAxis2 : yAxis1).tickFormat()(lines1.y()(e.point, e.pointIndex)),
              content = tooltip(e.series.key, x, y, e, chart);
          nv.tooltip.show([left, top], content, undefined, undefined, offsetElement.offsetParent);
        };
        function chart(selection) {
          selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            chart.update = function() {
              container.transition().call(chart);
            };
            chart.container = this;
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            var dataLines1 = data.filter(function(d) {
              return d.type == 'line' && d.yAxis == 1;
            });
            var dataLines2 = data.filter(function(d) {
              return d.type == 'line' && d.yAxis == 2;
            });
            var dataBars1 = data.filter(function(d) {
              return d.type == 'bar' && d.yAxis == 1;
            });
            var dataBars2 = data.filter(function(d) {
              return d.type == 'bar' && d.yAxis == 2;
            });
            var dataStack1 = data.filter(function(d) {
              return d.type == 'area' && d.yAxis == 1;
            });
            var dataStack2 = data.filter(function(d) {
              return d.type == 'area' && d.yAxis == 2;
            });
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            var series1 = data.filter(function(d) {
              return !d.disabled && d.yAxis == 1;
            }).map(function(d) {
              return d.values.map(function(d, i) {
                return {
                  x: d.x,
                  y: d.y
                };
              });
            });
            var series2 = data.filter(function(d) {
              return !d.disabled && d.yAxis == 2;
            }).map(function(d) {
              return d.values.map(function(d, i) {
                return {
                  x: d.x,
                  y: d.y
                };
              });
            });
            x.domain(d3.extent(d3.merge(series1.concat(series2)), function(d) {
              return d.x;
            })).range([0, availableWidth]);
            var wrap = container.selectAll('g.wrap.multiChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'wrap nvd3 multiChart').append('g');
            gEnter.append('g').attr('class', 'x axis');
            gEnter.append('g').attr('class', 'y1 axis');
            gEnter.append('g').attr('class', 'y2 axis');
            gEnter.append('g').attr('class', 'lines1Wrap');
            gEnter.append('g').attr('class', 'lines2Wrap');
            gEnter.append('g').attr('class', 'bars1Wrap');
            gEnter.append('g').attr('class', 'bars2Wrap');
            gEnter.append('g').attr('class', 'stack1Wrap');
            gEnter.append('g').attr('class', 'stack2Wrap');
            gEnter.append('g').attr('class', 'legendWrap');
            var g = wrap.select('g');
            var color_array = data.map(function(d, i) {
              return data[i].color || color(d, i);
            });
            if (showLegend) {
              legend.color(color_array);
              legend.width(availableWidth / 2);
              g.select('.legendWrap').datum(data.map(function(series) {
                series.originalKey = series.originalKey === undefined ? series.key : series.originalKey;
                series.key = series.originalKey + (series.yAxis == 1 ? '' : ' (right axis)');
                return series;
              })).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
              }
              g.select('.legendWrap').attr('transform', 'translate(' + (availableWidth / 2) + ',' + (-margin.top) + ')');
            }
            lines1.width(availableWidth).height(availableHeight).interpolate(interpolate).color(color_array.filter(function(d, i) {
              return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'line';
            }));
            lines2.width(availableWidth).height(availableHeight).interpolate(interpolate).color(color_array.filter(function(d, i) {
              return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'line';
            }));
            bars1.width(availableWidth).height(availableHeight).color(color_array.filter(function(d, i) {
              return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'bar';
            }));
            bars2.width(availableWidth).height(availableHeight).color(color_array.filter(function(d, i) {
              return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'bar';
            }));
            stack1.width(availableWidth).height(availableHeight).color(color_array.filter(function(d, i) {
              return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'area';
            }));
            stack2.width(availableWidth).height(availableHeight).color(color_array.filter(function(d, i) {
              return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'area';
            }));
            g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var lines1Wrap = g.select('.lines1Wrap').datum(dataLines1.filter(function(d) {
              return !d.disabled;
            }));
            var bars1Wrap = g.select('.bars1Wrap').datum(dataBars1.filter(function(d) {
              return !d.disabled;
            }));
            var stack1Wrap = g.select('.stack1Wrap').datum(dataStack1.filter(function(d) {
              return !d.disabled;
            }));
            var lines2Wrap = g.select('.lines2Wrap').datum(dataLines2.filter(function(d) {
              return !d.disabled;
            }));
            var bars2Wrap = g.select('.bars2Wrap').datum(dataBars2.filter(function(d) {
              return !d.disabled;
            }));
            var stack2Wrap = g.select('.stack2Wrap').datum(dataStack2.filter(function(d) {
              return !d.disabled;
            }));
            var extraValue1 = dataStack1.length ? dataStack1.map(function(a) {
              return a.values;
            }).reduce(function(a, b) {
              return a.map(function(aVal, i) {
                return {
                  x: aVal.x,
                  y: aVal.y + b[i].y
                };
              });
            }).concat([{
              x: 0,
              y: 0
            }]) : [];
            var extraValue2 = dataStack2.length ? dataStack2.map(function(a) {
              return a.values;
            }).reduce(function(a, b) {
              return a.map(function(aVal, i) {
                return {
                  x: aVal.x,
                  y: aVal.y + b[i].y
                };
              });
            }).concat([{
              x: 0,
              y: 0
            }]) : [];
            yScale1.domain(yDomain1 || d3.extent(d3.merge(series1).concat(extraValue1), function(d) {
              return d.y;
            })).range([0, availableHeight]);
            yScale2.domain(yDomain2 || d3.extent(d3.merge(series2).concat(extraValue2), function(d) {
              return d.y;
            })).range([0, availableHeight]);
            lines1.yDomain(yScale1.domain());
            bars1.yDomain(yScale1.domain());
            stack1.yDomain(yScale1.domain());
            lines2.yDomain(yScale2.domain());
            bars2.yDomain(yScale2.domain());
            stack2.yDomain(yScale2.domain());
            if (dataStack1.length) {
              d3.transition(stack1Wrap).call(stack1);
            }
            if (dataStack2.length) {
              d3.transition(stack2Wrap).call(stack2);
            }
            if (dataBars1.length) {
              d3.transition(bars1Wrap).call(bars1);
            }
            if (dataBars2.length) {
              d3.transition(bars2Wrap).call(bars2);
            }
            if (dataLines1.length) {
              d3.transition(lines1Wrap).call(lines1);
            }
            if (dataLines2.length) {
              d3.transition(lines2Wrap).call(lines2);
            }
            xAxis.ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);
            g.select('.x.axis').attr('transform', 'translate(0,' + availableHeight + ')');
            d3.transition(g.select('.x.axis')).call(xAxis);
            yAxis1.ticks(nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);
            d3.transition(g.select('.y1.axis')).call(yAxis1);
            yAxis2.ticks(nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);
            d3.transition(g.select('.y2.axis')).call(yAxis2);
            g.select('.y1.axis').classed('nv-disabled', series1.length ? false : true).attr('transform', 'translate(' + x.range()[0] + ',0)');
            g.select('.y2.axis').classed('nv-disabled', series2.length ? false : true).attr('transform', 'translate(' + x.range()[1] + ',0)');
            legend.dispatch.on('stateChange', function(newState) {
              chart.update();
            });
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
          });
          return chart;
        }
        lines1.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        lines1.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        lines2.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        lines2.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        bars1.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        bars1.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        bars2.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        bars2.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        stack1.dispatch.on('tooltipShow', function(e) {
          if (!Math.round(stack1.y()(e.point) * 100)) {
            setTimeout(function() {
              d3.selectAll('.point.hover').classed('hover', false);
            }, 0);
            return false;
          }
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top], dispatch.tooltipShow(e);
        });
        stack1.dispatch.on('tooltipHide', function(e) {
          dispatch.tooltipHide(e);
        });
        stack2.dispatch.on('tooltipShow', function(e) {
          if (!Math.round(stack2.y()(e.point) * 100)) {
            setTimeout(function() {
              d3.selectAll('.point.hover').classed('hover', false);
            }, 0);
            return false;
          }
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top], dispatch.tooltipShow(e);
        });
        stack2.dispatch.on('tooltipHide', function(e) {
          dispatch.tooltipHide(e);
        });
        lines1.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        lines1.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        lines2.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        lines2.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.dispatch = dispatch;
        chart.lines1 = lines1;
        chart.lines2 = lines2;
        chart.bars1 = bars1;
        chart.bars2 = bars2;
        chart.stack1 = stack1;
        chart.stack2 = stack2;
        chart.xAxis = xAxis;
        chart.yAxis1 = yAxis1;
        chart.yAxis2 = yAxis2;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          yDomain1: {
            get: function() {
              return yDomain1;
            },
            set: function(_) {
              yDomain1 = _;
            }
          },
          yDomain2: {
            get: function() {
              return yDomain2;
            },
            set: function(_) {
              yDomain2 = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          interpolate: {
            get: function() {
              return interpolate;
            },
            set: function(_) {
              interpolate = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = _;
              lines1.x(_);
              bars1.x(_);
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = _;
              lines1.y(_);
              bars1.y(_);
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.ohlcBar = function() {
        "use strict";
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = null,
            height = null,
            id = Math.floor(Math.random() * 10000),
            x = d3.scale.linear(),
            y = d3.scale.linear(),
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            getOpen = function(d) {
              return d.open;
            },
            getClose = function(d) {
              return d.close;
            },
            getHigh = function(d) {
              return d.high;
            },
            getLow = function(d) {
              return d.low;
            },
            forceX = [],
            forceY = [],
            padData = false,
            clipEdge = true,
            color = nv.utils.defaultColor(),
            interactive = false,
            xDomain,
            yDomain,
            xRange,
            yRange,
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState', 'renderEnd', 'chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout');
        ;
        function chart(selection) {
          selection.each(function(data) {
            var container = d3.select(this);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right;
            var availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            nv.utils.initSVG(container);
            x.domain(xDomain || d3.extent(data[0].values.map(getX).concat(forceX)));
            if (padData)
              x.range(xRange || [availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5) / data[0].values.length]);
            else
              x.range(xRange || [0, availableWidth]);
            y.domain(yDomain || [d3.min(data[0].values.map(getLow).concat(forceY)), d3.max(data[0].values.map(getHigh).concat(forceY))]).range(yRange || [availableHeight, 0]);
            if (x.domain()[0] === x.domain()[1])
              x.domain()[0] ? x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01]) : x.domain([-1, 1]);
            if (y.domain()[0] === y.domain()[1])
              y.domain()[0] ? y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01]) : y.domain([-1, 1]);
            var wrap = d3.select(this).selectAll('g.nv-wrap.nv-ohlcBar').data([data[0].values]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-ohlcBar');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-ticks');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            container.on('click', function(d, i) {
              dispatch.chartClick({
                data: d,
                index: i,
                pos: d3.event,
                id: id
              });
            });
            defsEnter.append('clipPath').attr('id', 'nv-chart-clip-path-' + id).append('rect');
            wrap.select('#nv-chart-clip-path-' + id + ' rect').attr('width', availableWidth).attr('height', availableHeight);
            g.attr('clip-path', clipEdge ? 'url(#nv-chart-clip-path-' + id + ')' : '');
            var ticks = wrap.select('.nv-ticks').selectAll('.nv-tick').data(function(d) {
              return d;
            });
            ticks.exit().remove();
            var ticksEnter = ticks.enter().append('path').attr('class', function(d, i, j) {
              return (getOpen(d, i) > getClose(d, i) ? 'nv-tick negative' : 'nv-tick positive') + ' nv-tick-' + j + '-' + i;
            }).attr('d', function(d, i) {
              var w = (availableWidth / data[0].values.length) * .9;
              return 'm0,0l0,' + (y(getOpen(d, i)) - y(getHigh(d, i))) + 'l' + (-w / 2) + ',0l' + (w / 2) + ',0l0,' + (y(getLow(d, i)) - y(getOpen(d, i))) + 'l0,' + (y(getClose(d, i)) - y(getLow(d, i))) + 'l' + (w / 2) + ',0l' + (-w / 2) + ',0z';
            }).attr('transform', function(d, i) {
              return 'translate(' + x(getX(d, i)) + ',' + y(getHigh(d, i)) + ')';
            }).attr('fill', function(d, i) {
              return color[0];
            }).attr('stroke', function(d, i) {
              return color[0];
            }).attr('x', 0).attr('y', function(d, i) {
              return y(Math.max(0, getY(d, i)));
            }).attr('height', function(d, i) {
              return Math.abs(y(getY(d, i)) - y(0));
            });
            ticks.attr('class', function(d, i, j) {
              return (getOpen(d, i) > getClose(d, i) ? 'nv-tick negative' : 'nv-tick positive') + ' nv-tick-' + j + '-' + i;
            });
            d3.transition(ticks).attr('transform', function(d, i) {
              return 'translate(' + x(getX(d, i)) + ',' + y(getHigh(d, i)) + ')';
            }).attr('d', function(d, i) {
              var w = (availableWidth / data[0].values.length) * .9;
              return 'm0,0l0,' + (y(getOpen(d, i)) - y(getHigh(d, i))) + 'l' + (-w / 2) + ',0l' + (w / 2) + ',0l0,' + (y(getLow(d, i)) - y(getOpen(d, i))) + 'l0,' + (y(getClose(d, i)) - y(getLow(d, i))) + 'l' + (w / 2) + ',0l' + (-w / 2) + ',0z';
            });
          });
          return chart;
        }
        chart.highlightPoint = function(pointIndex, isHoverOver) {
          chart.clearHighlights();
          d3.select(".nv-ohlcBar .nv-tick-0-" + pointIndex).classed("hover", isHoverOver);
          ;
        };
        chart.clearHighlights = function() {
          d3.select(".nv-ohlcBar .nv-tick.hover").classed("hover", false);
          ;
        };
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          xScale: {
            get: function() {
              return x;
            },
            set: function(_) {
              x = _;
            }
          },
          yScale: {
            get: function() {
              return y;
            },
            set: function(_) {
              y = _;
            }
          },
          xDomain: {
            get: function() {
              return xDomain;
            },
            set: function(_) {
              xDomain = _;
            }
          },
          yDomain: {
            get: function() {
              return yDomain;
            },
            set: function(_) {
              yDomain = _;
            }
          },
          xRange: {
            get: function() {
              return xRange;
            },
            set: function(_) {
              xRange = _;
            }
          },
          yRange: {
            get: function() {
              return yRange;
            },
            set: function(_) {
              yRange = _;
            }
          },
          forceX: {
            get: function() {
              return forceX;
            },
            set: function(_) {
              forceX = _;
            }
          },
          forceY: {
            get: function() {
              return forceY;
            },
            set: function(_) {
              forceY = _;
            }
          },
          padData: {
            get: function() {
              return padData;
            },
            set: function(_) {
              padData = _;
            }
          },
          clipEdge: {
            get: function() {
              return clipEdge;
            },
            set: function(_) {
              clipEdge = _;
            }
          },
          id: {
            get: function() {
              return id;
            },
            set: function(_) {
              id = _;
            }
          },
          interactive: {
            get: function() {
              return interactive;
            },
            set: function(_) {
              interactive = _;
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = _;
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = _;
            }
          },
          open: {
            get: function() {
              return getOpen();
            },
            set: function(_) {
              getOpen = _;
            }
          },
          close: {
            get: function() {
              return getClose();
            },
            set: function(_) {
              getClose = _;
            }
          },
          high: {
            get: function() {
              return getHigh;
            },
            set: function(_) {
              getHigh = _;
            }
          },
          low: {
            get: function() {
              return getLow;
            },
            set: function(_) {
              getLow = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top != undefined ? _.top : margin.top;
              margin.right = _.right != undefined ? _.right : margin.right;
              margin.bottom = _.bottom != undefined ? _.bottom : margin.bottom;
              margin.left = _.left != undefined ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.parallelCoordinates = function() {
        "use strict";
        var margin = {
          top: 30,
          right: 10,
          bottom: 10,
          left: 10
        },
            width = null,
            height = null,
            x = d3.scale.ordinal(),
            y = {},
            dimensions = [],
            color = nv.utils.defaultColor(),
            filters = [],
            active = [],
            dispatch = d3.dispatch('brush');
        ;
        function chart(selection) {
          selection.each(function(data) {
            var container = d3.select(this);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right;
            var availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            nv.utils.initSVG(container);
            active = data;
            chart.update = function() {};
            x.rangePoints([0, availableWidth], 1).domain(dimensions);
            dimensions.forEach(function(d) {
              y[d] = d3.scale.linear().domain(d3.extent(data, function(p) {
                return +p[d];
              })).range([availableHeight, 0]);
              y[d].brush = d3.svg.brush().y(y[d]).on('brush', brush);
              return d != 'name';
            });
            var wrap = container.selectAll('g.nv-wrap.nv-parallelCoordinates').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-parallelCoordinates');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-parallelCoordinatesWrap');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var line = d3.svg.line(),
                axis = d3.svg.axis().orient('left'),
                background,
                foreground;
            background = gEnter.append('g').attr('class', 'background').selectAll('path').data(data).enter().append('path').attr('d', path);
            ;
            foreground = gEnter.append('g').attr('class', 'foreground').selectAll('path').data(data).enter().append('path').attr('d', path).attr('stroke', color);
            ;
            var dimension = g.selectAll('.dimension').data(dimensions).enter().append('g').attr('class', 'dimension').attr('transform', function(d) {
              return 'translate(' + x(d) + ',0)';
            });
            dimension.append('g').attr('class', 'axis').each(function(d) {
              d3.select(this).call(axis.scale(y[d]));
            }).append('text').attr('text-anchor', 'middle').attr('y', -9).text(String);
            dimension.append('g').attr('class', 'brush').each(function(d) {
              d3.select(this).call(y[d].brush);
            }).selectAll('rect').attr('x', -8).attr('width', 16);
            function path(d) {
              return line(dimensions.map(function(p) {
                return [x(p), y[p](d[p])];
              }));
            }
            function brush() {
              var actives = dimensions.filter(function(p) {
                return !y[p].brush.empty();
              }),
                  extents = actives.map(function(p) {
                    return y[p].brush.extent();
                  });
              filters = [];
              actives.forEach(function(d, i) {
                filters[i] = {
                  dimension: d,
                  extent: extents[i]
                };
              });
              active = [];
              foreground.style('display', function(d) {
                var isActive = actives.every(function(p, i) {
                  return extents[i][0] <= d[p] && d[p] <= extents[i][1];
                });
                if (isActive)
                  active.push(d);
                return isActive ? null : 'none';
              });
              dispatch.brush({
                filters: filters,
                active: active
              });
            }
          });
          return chart;
        }
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          dimensions: {
            get: function() {
              return dimensions;
            },
            set: function(_) {
              dimensions = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
              margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
              margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
              margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.pie = function() {
        "use strict";
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = 500,
            height = 500,
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            id = Math.floor(Math.random() * 10000),
            color = nv.utils.defaultColor(),
            valueFormat = d3.format(',.2f'),
            labelFormat = d3.format('%'),
            showLabels = true,
            pieLabelsOutside = true,
            donutLabelsOutside = false,
            labelType = "key",
            labelThreshold = .02,
            donut = false,
            title = false,
            growOnHover = true,
            titleOffset = 0,
            labelSunbeamLayout = false,
            startAngle = false,
            padAngle = false,
            endAngle = false,
            cornerRadius = 0,
            donutRatio = 0.5,
            duration = 250,
            dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'renderEnd');
        ;
        var renderWatch = nv.utils.renderWatch(dispatch);
        function chart(selection) {
          renderWatch.reset();
          selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom,
                radius = Math.min(availableWidth, availableHeight) / 2,
                arcRadius = radius - (radius / 5),
                container = d3.select(this);
            ;
            nv.utils.initSVG(container);
            var wrap = container.selectAll('.nv-wrap.nv-pie').data(data);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-pie nv-chart-' + id);
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            var g_pie = gEnter.append('g').attr('class', 'nv-pie');
            gEnter.append('g').attr('class', 'nv-pieLabels');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            g.select('.nv-pie').attr('transform', 'translate(' + availableWidth / 2 + ',' + availableHeight / 2 + ')');
            g.select('.nv-pieLabels').attr('transform', 'translate(' + availableWidth / 2 + ',' + availableHeight / 2 + ')');
            container.on('click', function(d, i) {
              dispatch.chartClick({
                data: d,
                index: i,
                pos: d3.event,
                id: id
              });
            });
            var arc = d3.svg.arc().outerRadius(arcRadius);
            var arcOver = d3.svg.arc().outerRadius(arcRadius + 5);
            if (startAngle) {
              arc.startAngle(startAngle);
              arcOver.startAngle(startAngle);
            }
            if (endAngle) {
              arc.endAngle(endAngle);
              arcOver.endAngle(endAngle);
            }
            if (donut) {
              arc.innerRadius(radius * donutRatio);
              arcOver.innerRadius(radius * donutRatio);
            }
            var pie = d3.layout.pie().sort(null).value(function(d) {
              return d.disabled ? 0 : getY(d);
            });
            if (pie.padAngle && padAngle) {
              pie.padAngle(padAngle);
            }
            if (arc.cornerRadius && cornerRadius) {
              arc.cornerRadius(cornerRadius);
              arcOver.cornerRadius(cornerRadius);
            }
            if (donut && title) {
              var title_g = g_pie.append('g').attr('class', 'nv-pie');
              title_g.append("text").style("text-anchor", "middle").attr('class', 'nv-pie-title').text(function(d) {
                return title;
              }).attr("dy", "0.35em").attr('transform', function(d, i) {
                return 'translate(0, ' + titleOffset + ')';
              });
            }
            var slices = wrap.select('.nv-pie').selectAll('.nv-slice').data(pie);
            var pieLabels = wrap.select('.nv-pieLabels').selectAll('.nv-label').data(pie);
            slices.exit().remove();
            pieLabels.exit().remove();
            var ae = slices.enter().append('g');
            ae.attr('class', 'nv-slice');
            ae.on('mouseover', function(d, i) {
              d3.select(this).classed('hover', true);
              if (growOnHover) {
                d3.select(this).select("path").transition().duration(70).attr("d", arcOver);
              }
              dispatch.elementMouseover({
                label: getX(d.data),
                value: getY(d.data),
                point: d.data,
                pointIndex: i,
                pos: [d3.event.pageX, d3.event.pageY],
                id: id,
                color: d3.select(this).style("fill")
              });
            });
            ae.on('mouseout', function(d, i) {
              d3.select(this).classed('hover', false);
              if (growOnHover) {
                d3.select(this).select("path").transition().duration(50).attr("d", arc);
              }
              dispatch.elementMouseout({
                label: getX(d.data),
                value: getY(d.data),
                point: d.data,
                index: i,
                id: id
              });
            });
            slices.attr('fill', function(d, i) {
              return color(d, i);
            });
            slices.attr('stroke', function(d, i) {
              return color(d, i);
            });
            var paths = ae.append('path').each(function(d) {
              this._current = d;
            });
            paths.on('click', function(d, i) {
              dispatch.elementClick({
                label: getX(d.data),
                value: getY(d.data),
                point: d.data,
                index: i,
                pos: d3.event,
                id: id
              });
              d3.event.stopPropagation();
            });
            paths.on('dblclick', function(d, i) {
              dispatch.elementDblClick({
                label: getX(d.data),
                value: getY(d.data),
                point: d.data,
                index: i,
                pos: d3.event,
                id: id
              });
              d3.event.stopPropagation();
            });
            slices.select('path').transition().attr('d', arc).attrTween('d', arcTween);
            if (showLabels) {
              var labelsArc = d3.svg.arc().innerRadius(0);
              if (pieLabelsOutside) {
                var labelsArc = arc;
              }
              if (donutLabelsOutside) {
                labelsArc = d3.svg.arc().outerRadius(arc.outerRadius());
              }
              pieLabels.enter().append("g").classed("nv-label", true).each(function(d, i) {
                var group = d3.select(this);
                group.attr('transform', function(d) {
                  if (labelSunbeamLayout) {
                    d.outerRadius = arcRadius + 10;
                    d.innerRadius = arcRadius + 15;
                    var rotateAngle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
                    if ((d.startAngle + d.endAngle) / 2 < Math.PI) {
                      rotateAngle -= 90;
                    } else {
                      rotateAngle += 90;
                    }
                    return 'translate(' + labelsArc.centroid(d) + ') rotate(' + rotateAngle + ')';
                  } else {
                    d.outerRadius = radius + 10;
                    d.innerRadius = radius + 15;
                    return 'translate(' + labelsArc.centroid(d) + ')';
                  }
                });
                group.append('rect').style('stroke', '#fff').style('fill', '#fff').attr("rx", 3).attr("ry", 3);
                group.append('text').style('text-anchor', labelSunbeamLayout ? ((d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end') : 'middle').style('fill', '#000');
              });
              var labelLocationHash = {};
              var avgHeight = 14;
              var avgWidth = 140;
              var createHashKey = function(coordinates) {
                return Math.floor(coordinates[0] / avgWidth) * avgWidth + ',' + Math.floor(coordinates[1] / avgHeight) * avgHeight;
              };
              pieLabels.watchTransition(renderWatch, 'pie labels').attr('transform', function(d) {
                if (labelSunbeamLayout) {
                  d.outerRadius = arcRadius + 10;
                  d.innerRadius = arcRadius + 15;
                  var rotateAngle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
                  if ((d.startAngle + d.endAngle) / 2 < Math.PI) {
                    rotateAngle -= 90;
                  } else {
                    rotateAngle += 90;
                  }
                  return 'translate(' + labelsArc.centroid(d) + ') rotate(' + rotateAngle + ')';
                } else {
                  d.outerRadius = radius + 10;
                  d.innerRadius = radius + 15;
                  var center = labelsArc.centroid(d);
                  if (d.value) {
                    var hashKey = createHashKey(center);
                    if (labelLocationHash[hashKey]) {
                      center[1] -= avgHeight;
                    }
                    labelLocationHash[createHashKey(center)] = true;
                  }
                  return 'translate(' + center + ')';
                }
              });
              pieLabels.select(".nv-label text").style('text-anchor', labelSunbeamLayout ? ((d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end') : 'middle').text(function(d, i) {
                var percent = (d.endAngle - d.startAngle) / (2 * Math.PI);
                var labelTypes = {
                  "key": getX(d.data),
                  "value": getY(d.data),
                  "percent": labelFormat(percent)
                };
                return (d.value && percent > labelThreshold) ? labelTypes[labelType] : '';
              });
              ;
            }
            function angle(d) {
              var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
              return a > 90 ? a - 180 : a;
            }
            function arcTween(a) {
              a.endAngle = isNaN(a.endAngle) ? 0 : a.endAngle;
              a.startAngle = isNaN(a.startAngle) ? 0 : a.startAngle;
              if (!donut)
                a.innerRadius = 0;
              var i = d3.interpolate(this._current, a);
              this._current = i(0);
              return function(t) {
                return arc(i(t));
              };
            }
          });
          renderWatch.renderEnd('pie immediate');
          return chart;
        }
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          showLabels: {
            get: function() {
              return showLabels;
            },
            set: function(_) {
              showLabels = _;
            }
          },
          title: {
            get: function() {
              return title;
            },
            set: function(_) {
              title = _;
            }
          },
          titleOffset: {
            get: function() {
              return titleOffset;
            },
            set: function(_) {
              titleOffset = _;
            }
          },
          labelThreshold: {
            get: function() {
              return labelThreshold;
            },
            set: function(_) {
              labelThreshold = _;
            }
          },
          labelFormat: {
            get: function() {
              return labelFormat;
            },
            set: function(_) {
              labelFormat = _;
            }
          },
          valueFormat: {
            get: function() {
              return valueFormat;
            },
            set: function(_) {
              valueFormat = _;
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = _;
            }
          },
          id: {
            get: function() {
              return id;
            },
            set: function(_) {
              id = _;
            }
          },
          endAngle: {
            get: function() {
              return endAngle;
            },
            set: function(_) {
              endAngle = _;
            }
          },
          startAngle: {
            get: function() {
              return startAngle;
            },
            set: function(_) {
              startAngle = _;
            }
          },
          padAngle: {
            get: function() {
              return padAngle;
            },
            set: function(_) {
              padAngle = _;
            }
          },
          cornerRadius: {
            get: function() {
              return cornerRadius;
            },
            set: function(_) {
              cornerRadius = _;
            }
          },
          donutRatio: {
            get: function() {
              return donutRatio;
            },
            set: function(_) {
              donutRatio = _;
            }
          },
          pieLabelsOutside: {
            get: function() {
              return pieLabelsOutside;
            },
            set: function(_) {
              pieLabelsOutside = _;
            }
          },
          donutLabelsOutside: {
            get: function() {
              return donutLabelsOutside;
            },
            set: function(_) {
              donutLabelsOutside = _;
            }
          },
          labelSunbeamLayout: {
            get: function() {
              return labelSunbeamLayout;
            },
            set: function(_) {
              labelSunbeamLayout = _;
            }
          },
          donut: {
            get: function() {
              return donut;
            },
            set: function(_) {
              donut = _;
            }
          },
          growOnHover: {
            get: function() {
              return growOnHover;
            },
            set: function(_) {
              growOnHover = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = typeof _.top != 'undefined' ? _.top : margin.top;
              margin.right = typeof _.right != 'undefined' ? _.right : margin.right;
              margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
              margin.left = typeof _.left != 'undefined' ? _.left : margin.left;
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = d3.functor(_);
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          },
          labelType: {
            get: function() {
              return labelType;
            },
            set: function(_) {
              labelType = _ || 'key';
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.pieChart = function() {
        "use strict";
        var pie = nv.models.pie();
        var legend = nv.models.legend();
        var margin = {
          top: 30,
          right: 20,
          bottom: 20,
          left: 20
        },
            width = null,
            height = null,
            showLegend = true,
            color = nv.utils.defaultColor(),
            tooltips = true,
            tooltip = function(key, y, e, graph) {
              return '<h3 style="background-color: ' + e.color + '">' + key + '</h3>' + '<p>' + y + '</p>';
            },
            state = nv.utils.state(),
            defaultState = null,
            noData = "No Data Available.",
            duration = 250,
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState', 'renderEnd');
        ;
        var showTooltip = function(e, offsetElement) {
          var tooltipLabel = pie.x()(e.point);
          var left = e.pos[0] + ((offsetElement && offsetElement.offsetLeft) || 0),
              top = e.pos[1] + ((offsetElement && offsetElement.offsetTop) || 0),
              y = pie.valueFormat()(pie.y()(e.point)),
              content = tooltip(tooltipLabel, y, e, chart);
          ;
          nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
        };
        var renderWatch = nv.utils.renderWatch(dispatch);
        var stateGetter = function(data) {
          return function() {
            return {active: data.map(function(d) {
                return !d.disabled;
              })};
          };
        };
        var stateSetter = function(data) {
          return function(state) {
            if (state.active !== undefined) {
              data.forEach(function(series, i) {
                series.disabled = !state.active[i];
              });
            }
          };
        };
        function chart(selection) {
          renderWatch.reset();
          renderWatch.models(pie);
          selection.each(function(data) {
            var container = d3.select(this);
            nv.utils.initSVG(container);
            var that = this;
            var availableWidth = (width || parseInt(container.style('width'), 10) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height'), 10) || 400) - margin.top - margin.bottom;
            ;
            chart.update = function() {
              container.transition().call(chart);
            };
            chart.container = this;
            state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();
            state.disabled = data.map(function(d) {
              return !!d.disabled;
            });
            if (!defaultState) {
              var key;
              defaultState = {};
              for (key in state) {
                if (state[key] instanceof Array)
                  defaultState[key] = state[key].slice(0);
                else
                  defaultState[key] = state[key];
              }
            }
            if (!data || !data.length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            var wrap = container.selectAll('g.nv-wrap.nv-pieChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-pieChart').append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-pieWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            if (showLegend) {
              legend.width(availableWidth).key(pie.x());
              wrap.select('.nv-legendWrap').datum(data).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
              }
              wrap.select('.nv-legendWrap').attr('transform', 'translate(0,' + (-margin.top) + ')');
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            pie.width(availableWidth).height(availableHeight);
            var pieWrap = g.select('.nv-pieWrap').datum([data]);
            d3.transition(pieWrap).call(pie);
            legend.dispatch.on('stateChange', function(newState) {
              for (var key in newState) {
                state[key] = newState[key];
              }
              dispatch.stateChange(state);
              chart.update();
            });
            pie.dispatch.on('elementMouseout.tooltip', function(e) {
              dispatch.tooltipHide(e);
            });
            dispatch.on('changeState', function(e) {
              if (typeof e.disabled !== 'undefined') {
                data.forEach(function(series, i) {
                  series.disabled = e.disabled[i];
                });
                state.disabled = e.disabled;
              }
              chart.update();
            });
          });
          renderWatch.renderEnd('pieChart immediate');
          return chart;
        }
        pie.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        dispatch.on('tooltipShow', function(e) {
          if (tooltips)
            showTooltip(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.legend = legend;
        chart.dispatch = dispatch;
        chart.pie = pie;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          defaultState: {
            get: function() {
              return defaultState;
            },
            set: function(_) {
              defaultState = _;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = _;
              legend.color(color);
              pie.color(color);
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
            }
          }
        });
        nv.utils.inheritOptions(chart, pie);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.scatter = function() {
        "use strict";
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = null,
            height = null,
            color = nv.utils.defaultColor(),
            id = Math.floor(Math.random() * 100000),
            x = d3.scale.linear(),
            y = d3.scale.linear(),
            z = d3.scale.linear(),
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            getSize = function(d) {
              return d.size || 1;
            },
            getShape = function(d) {
              return d.shape || 'circle';
            },
            forceX = [],
            forceY = [],
            forceSize = [],
            interactive = true,
            pointActive = function(d) {
              return !d.notActive;
            },
            padData = false,
            padDataOuter = .1,
            clipEdge = false,
            clipVoronoi = true,
            clipRadius = function() {
              return 25;
            },
            xDomain = null,
            yDomain = null,
            xRange = null,
            yRange = null,
            sizeDomain = null,
            sizeRange = null,
            singlePoint = false,
            dispatch = d3.dispatch('elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'renderEnd'),
            useVoronoi = true,
            duration = 250;
        ;
        var x0,
            y0,
            z0,
            timeoutID,
            needsUpdate = false,
            renderWatch = nv.utils.renderWatch(dispatch, duration);
        ;
        function chart(selection) {
          renderWatch.reset();
          selection.each(function(data) {
            var container = d3.select(this);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right;
            var availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            nv.utils.initSVG(container);
            data.forEach(function(series, i) {
              series.values.forEach(function(point) {
                point.series = i;
              });
            });
            var seriesData = (xDomain && yDomain && sizeDomain) ? [] : d3.merge(data.map(function(d) {
              return d.values.map(function(d, i) {
                return {
                  x: getX(d, i),
                  y: getY(d, i),
                  size: getSize(d, i)
                };
              });
            }));
            x.domain(xDomain || d3.extent(seriesData.map(function(d) {
              return d.x;
            }).concat(forceX)));
            if (padData && data[0])
              x.range(xRange || [(availableWidth * padDataOuter + availableWidth) / (2 * data[0].values.length), availableWidth - availableWidth * (1 + padDataOuter) / (2 * data[0].values.length)]);
            else
              x.range(xRange || [0, availableWidth]);
            y.domain(yDomain || d3.extent(seriesData.map(function(d) {
              return d.y;
            }).concat(forceY))).range(yRange || [availableHeight, 0]);
            z.domain(sizeDomain || d3.extent(seriesData.map(function(d) {
              return d.size;
            }).concat(forceSize))).range(sizeRange || [16, 256]);
            if (x.domain()[0] === x.domain()[1] || y.domain()[0] === y.domain()[1])
              singlePoint = true;
            if (x.domain()[0] === x.domain()[1])
              x.domain()[0] ? x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01]) : x.domain([-1, 1]);
            if (y.domain()[0] === y.domain()[1])
              y.domain()[0] ? y.domain([y.domain()[0] - y.domain()[0] * 0.01, y.domain()[1] + y.domain()[1] * 0.01]) : y.domain([-1, 1]);
            if (isNaN(x.domain()[0])) {
              x.domain([-1, 1]);
            }
            if (isNaN(y.domain()[0])) {
              y.domain([-1, 1]);
            }
            x0 = x0 || x;
            y0 = y0 || y;
            z0 = z0 || z;
            var wrap = container.selectAll('g.nv-wrap.nv-scatter').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatter nv-chart-' + id + (singlePoint ? ' nv-single-point' : ''));
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-groups');
            gEnter.append('g').attr('class', 'nv-point-paths');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            defsEnter.append('clipPath').attr('id', 'nv-edge-clip-' + id).append('rect');
            wrap.select('#nv-edge-clip-' + id + ' rect').attr('width', availableWidth).attr('height', (availableHeight > 0) ? availableHeight : 0);
            g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');
            function updateInteractiveLayer() {
              if (!interactive)
                return false;
              var eventElements;
              var vertices = d3.merge(data.map(function(group, groupIndex) {
                return group.values.map(function(point, pointIndex) {
                  var pX = getX(point, pointIndex);
                  var pY = getY(point, pointIndex);
                  return [x(pX) + Math.random() * 1e-7, y(pY) + Math.random() * 1e-7, groupIndex, pointIndex, point];
                }).filter(function(pointArray, pointIndex) {
                  return pointActive(pointArray[4], pointIndex);
                });
              }));
              if (useVoronoi === true) {
                if (vertices.length < 3) {
                  vertices.push([x.range()[0] - 20, y.range()[0] - 20, null, null]);
                  vertices.push([x.range()[1] + 20, y.range()[1] + 20, null, null]);
                  vertices.push([x.range()[0] - 20, y.range()[0] + 20, null, null]);
                  vertices.push([x.range()[1] + 20, y.range()[1] - 20, null, null]);
                }
                var bounds = d3.geom.polygon([[-10, -10], [-10, height + 10], [width + 10, height + 10], [width + 10, -10]]);
                var voronoi = d3.geom.voronoi(vertices).map(function(d, i) {
                  return {
                    'data': bounds.clip(d),
                    'series': vertices[i][2],
                    'point': vertices[i][3]
                  };
                });
                wrap.select('.nv-point-paths').selectAll('path').remove();
                var pointPaths = wrap.select('.nv-point-paths').selectAll('path').data(voronoi);
                pointPaths.enter().append("svg:path").attr("d", function(d) {
                  if (!d || !d.data || d.data.length === 0)
                    return 'M 0 0';
                  else
                    return "M" + d.data.join(",") + "Z";
                }).attr("id", function(d, i) {
                  return "nv-path-" + i;
                }).attr("clip-path", function(d, i) {
                  return "url(#nv-clip-" + i + ")";
                });
                ;
                if (clipVoronoi) {
                  var clips = wrap.append("svg:g").attr("id", "nv-point-clips");
                  clips.selectAll("clipPath").data(vertices).enter().append("svg:clipPath").attr("id", function(d, i) {
                    return "nv-clip-" + i;
                  }).append("svg:circle").attr('cx', function(d) {
                    return d[0];
                  }).attr('cy', function(d) {
                    return d[1];
                  }).attr('r', clipRadius);
                }
                var mouseEventCallback = function(d, mDispatch) {
                  if (needsUpdate)
                    return 0;
                  var series = data[d.series];
                  if (typeof series === 'undefined')
                    return ;
                  var point = series.values[d.point];
                  mDispatch({
                    point: point,
                    series: series,
                    pos: [x(getX(point, d.point)) + margin.left, y(getY(point, d.point)) + margin.top],
                    seriesIndex: d.series,
                    pointIndex: d.point
                  });
                };
                pointPaths.on('click', function(d) {
                  mouseEventCallback(d, dispatch.elementClick);
                }).on('dblclick', function(d) {
                  mouseEventCallback(d, dispatch.elementDblClick);
                }).on('mouseover', function(d) {
                  mouseEventCallback(d, dispatch.elementMouseover);
                }).on('mouseout', function(d, i) {
                  mouseEventCallback(d, dispatch.elementMouseout);
                });
              } else {
                wrap.select('.nv-groups').selectAll('.nv-group').selectAll('.nv-point').on('click', function(d, i) {
                  if (needsUpdate || !data[d.series])
                    return 0;
                  var series = data[d.series],
                      point = series.values[i];
                  dispatch.elementClick({
                    point: point,
                    series: series,
                    pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
                    seriesIndex: d.series,
                    pointIndex: i
                  });
                }).on('mouseover', function(d, i) {
                  if (needsUpdate || !data[d.series])
                    return 0;
                  var series = data[d.series],
                      point = series.values[i];
                  dispatch.elementMouseover({
                    point: point,
                    series: series,
                    pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
                    seriesIndex: d.series,
                    pointIndex: i
                  });
                }).on('mouseout', function(d, i) {
                  if (needsUpdate || !data[d.series])
                    return 0;
                  var series = data[d.series],
                      point = series.values[i];
                  dispatch.elementMouseout({
                    point: point,
                    series: series,
                    seriesIndex: d.series,
                    pointIndex: i
                  });
                });
              }
              needsUpdate = false;
            }
            needsUpdate = true;
            var groups = wrap.select('.nv-groups').selectAll('.nv-group').data(function(d) {
              return d;
            }, function(d) {
              return d.key;
            });
            groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
            groups.exit().remove();
            groups.attr('class', function(d, i) {
              return 'nv-group nv-series-' + i;
            }).classed('hover', function(d) {
              return d.hover;
            });
            groups.watchTransition(renderWatch, 'scatter: groups').style('fill', function(d, i) {
              return color(d, i);
            }).style('stroke', function(d, i) {
              return color(d, i);
            }).style('stroke-opacity', 1).style('fill-opacity', .5);
            var points = groups.selectAll('path.nv-point').data(function(d) {
              return d.values;
            });
            points.enter().append('path').style('fill', function(d, i) {
              return d.color;
            }).style('stroke', function(d, i) {
              return d.color;
            }).attr('transform', function(d, i) {
              return 'translate(' + x0(getX(d, i)) + ',' + y0(getY(d, i)) + ')';
            }).attr('d', nv.utils.symbol().type(getShape).size(function(d, i) {
              return z(getSize(d, i));
            }));
            points.exit().remove();
            groups.exit().selectAll('path.nv-point').watchTransition(renderWatch, 'scatter exit').attr('transform', function(d, i) {
              return 'translate(' + x(getX(d, i)) + ',' + y(getY(d, i)) + ')';
            }).remove();
            points.each(function(d, i) {
              d3.select(this).classed('nv-point', true).classed('nv-point-' + i, true).classed('hover', false);
              ;
            });
            points.watchTransition(renderWatch, 'scatter points').attr('transform', function(d, i) {
              return 'translate(' + x(getX(d, i)) + ',' + y(getY(d, i)) + ')';
            }).attr('d', nv.utils.symbol().type(getShape).size(function(d, i) {
              return z(getSize(d, i));
            }));
            clearTimeout(timeoutID);
            timeoutID = setTimeout(updateInteractiveLayer, 300);
            x0 = x.copy();
            y0 = y.copy();
            z0 = z.copy();
          });
          renderWatch.renderEnd('scatter immediate');
          return chart;
        }
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._calls = new function() {
          this.clearHighlights = function() {
            d3.selectAll(".nv-chart-" + id + " .nv-point.hover").classed("hover", false);
            return null;
          };
          this.highlightPoint = function(seriesIndex, pointIndex, isHoverOver) {
            d3.select(".nv-chart-" + id + " .nv-series-" + seriesIndex + " .nv-point-" + pointIndex).classed("hover", isHoverOver);
          };
        };
        dispatch.on('elementMouseover.point', function(d) {
          if (interactive)
            chart._calls.highlightPoint(d.seriesIndex, d.pointIndex, true);
        });
        dispatch.on('elementMouseout.point', function(d) {
          if (interactive)
            chart._calls.highlightPoint(d.seriesIndex, d.pointIndex, false);
        });
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          xScale: {
            get: function() {
              return x;
            },
            set: function(_) {
              x = _;
            }
          },
          yScale: {
            get: function() {
              return y;
            },
            set: function(_) {
              y = _;
            }
          },
          pointScale: {
            get: function() {
              return z;
            },
            set: function(_) {
              z = _;
            }
          },
          xDomain: {
            get: function() {
              return xDomain;
            },
            set: function(_) {
              xDomain = _;
            }
          },
          yDomain: {
            get: function() {
              return yDomain;
            },
            set: function(_) {
              yDomain = _;
            }
          },
          pointDomain: {
            get: function() {
              return sizeDomain;
            },
            set: function(_) {
              sizeDomain = _;
            }
          },
          xRange: {
            get: function() {
              return xRange;
            },
            set: function(_) {
              xRange = _;
            }
          },
          yRange: {
            get: function() {
              return yRange;
            },
            set: function(_) {
              yRange = _;
            }
          },
          pointRange: {
            get: function() {
              return sizeRange;
            },
            set: function(_) {
              sizeRange = _;
            }
          },
          forceX: {
            get: function() {
              return forceX;
            },
            set: function(_) {
              forceX = _;
            }
          },
          forceY: {
            get: function() {
              return forceY;
            },
            set: function(_) {
              forceY = _;
            }
          },
          forcePoint: {
            get: function() {
              return forceSize;
            },
            set: function(_) {
              forceSize = _;
            }
          },
          interactive: {
            get: function() {
              return interactive;
            },
            set: function(_) {
              interactive = _;
            }
          },
          pointActive: {
            get: function() {
              return pointActive;
            },
            set: function(_) {
              pointActive = _;
            }
          },
          padDataOuter: {
            get: function() {
              return padDataOuter;
            },
            set: function(_) {
              padDataOuter = _;
            }
          },
          padData: {
            get: function() {
              return padData;
            },
            set: function(_) {
              padData = _;
            }
          },
          clipEdge: {
            get: function() {
              return clipEdge;
            },
            set: function(_) {
              clipEdge = _;
            }
          },
          clipVoronoi: {
            get: function() {
              return clipVoronoi;
            },
            set: function(_) {
              clipVoronoi = _;
            }
          },
          clipRadius: {
            get: function() {
              return clipRadius;
            },
            set: function(_) {
              clipRadius = _;
            }
          },
          id: {
            get: function() {
              return id;
            },
            set: function(_) {
              id = _;
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = d3.functor(_);
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = d3.functor(_);
            }
          },
          pointSize: {
            get: function() {
              return getSize;
            },
            set: function(_) {
              getSize = d3.functor(_);
            }
          },
          pointShape: {
            get: function() {
              return getShape;
            },
            set: function(_) {
              getShape = d3.functor(_);
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          },
          useVoronoi: {
            get: function() {
              return useVoronoi;
            },
            set: function(_) {
              useVoronoi = _;
              if (useVoronoi === false) {
                clipVoronoi = false;
              }
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.scatterChart = function() {
        "use strict";
        var scatter = nv.models.scatter(),
            xAxis = nv.models.axis(),
            yAxis = nv.models.axis(),
            legend = nv.models.legend(),
            distX = nv.models.distribution(),
            distY = nv.models.distribution();
        ;
        var margin = {
          top: 30,
          right: 20,
          bottom: 50,
          left: 75
        },
            width = null,
            height = null,
            color = nv.utils.defaultColor(),
            x = scatter.xScale(),
            y = scatter.yScale(),
            showDistX = false,
            showDistY = false,
            showLegend = true,
            showXAxis = true,
            showYAxis = true,
            rightAlignYAxis = false,
            tooltips = true,
            tooltipX = function(key, x, y) {
              return '<strong>' + x + '</strong>';
            },
            tooltipY = function(key, x, y) {
              return '<strong>' + y + '</strong>';
            },
            tooltip = function(key, x, y, date) {
              return '<h3>' + key + '</h3>' + '<p>' + date + '</p>';
            },
            state = nv.utils.state(),
            defaultState = null,
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState', 'renderEnd'),
            noData = "No Data Available.",
            duration = 250;
        ;
        scatter.xScale(x).yScale(y);
        ;
        xAxis.orient('bottom').tickPadding(10);
        ;
        yAxis.orient((rightAlignYAxis) ? 'right' : 'left').tickPadding(10);
        ;
        distX.axis('x');
        ;
        distY.axis('y');
        ;
        var x0,
            y0,
            renderWatch = nv.utils.renderWatch(dispatch, duration);
        var showTooltip = function(e, offsetElement) {
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              leftX = e.pos[0] + (offsetElement.offsetLeft || 0),
              topX = y.range()[0] + margin.top + (offsetElement.offsetTop || 0),
              leftY = x.range()[0] + margin.left + (offsetElement.offsetLeft || 0),
              topY = e.pos[1] + (offsetElement.offsetTop || 0),
              xVal = xAxis.tickFormat()(scatter.x()(e.point, e.pointIndex)),
              yVal = yAxis.tickFormat()(scatter.y()(e.point, e.pointIndex));
          if (tooltipX != null)
            nv.tooltip.show([leftX, topX], tooltipX(e.series.key, xVal, yVal, e, chart), 'n', 1, offsetElement, 'x-nvtooltip');
          if (tooltipY != null)
            nv.tooltip.show([leftY, topY], tooltipY(e.series.key, xVal, yVal, e, chart), 'e', 1, offsetElement, 'y-nvtooltip');
          if (tooltip != null)
            nv.tooltip.show([left, top], tooltip(e.series.key, xVal, yVal, e.point.tooltip, e, chart), e.value < 0 ? 'n' : 's', null, offsetElement);
        };
        var stateGetter = function(data) {
          return function() {
            return {active: data.map(function(d) {
                return !d.disabled;
              })};
          };
        };
        var stateSetter = function(data) {
          return function(state) {
            if (state.active !== undefined)
              data.forEach(function(series, i) {
                series.disabled = !state.active[i];
              });
          };
        };
        function chart(selection) {
          renderWatch.reset();
          renderWatch.models(scatter);
          if (showXAxis)
            renderWatch.models(xAxis);
          if (showYAxis)
            renderWatch.models(yAxis);
          if (showDistX)
            renderWatch.models(distX);
          if (showDistY)
            renderWatch.models(distY);
          selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            chart.update = function() {
              if (duration === 0)
                container.call(chart);
              else
                container.transition().duration(duration).call(chart);
            };
            chart.container = this;
            state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();
            state.disabled = data.map(function(d) {
              return !!d.disabled;
            });
            if (!defaultState) {
              var key;
              defaultState = {};
              for (key in state) {
                if (state[key] instanceof Array)
                  defaultState[key] = state[key].slice(0);
                else
                  defaultState[key] = state[key];
              }
            }
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              renderWatch.renderEnd('scatter immediate');
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            x = scatter.xScale();
            y = scatter.yScale();
            var wrap = container.selectAll('g.nv-wrap.nv-scatterChart').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatterChart nv-chart-' + scatter.id());
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('rect').attr('class', 'nvd3 nv-background').style("pointer-events", "none");
            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-scatterWrap');
            gEnter.append('g').attr('class', 'nv-regressionLinesWrap');
            gEnter.append('g').attr('class', 'nv-distWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            if (rightAlignYAxis) {
              g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
            }
            if (showLegend) {
              legend.width(availableWidth / 2);
              wrap.select('.nv-legendWrap').datum(data).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
              }
              wrap.select('.nv-legendWrap').attr('transform', 'translate(' + (availableWidth / 2) + ',' + (-margin.top) + ')');
            }
            scatter.width(availableWidth).height(availableHeight).color(data.map(function(d, i) {
              return d.color || color(d, i);
            }).filter(function(d, i) {
              return !data[i].disabled;
            }));
            wrap.select('.nv-scatterWrap').datum(data.filter(function(d) {
              return !d.disabled;
            })).call(scatter);
            wrap.select('.nv-regressionLinesWrap').attr('clip-path', 'url(#nv-edge-clip-' + scatter.id() + ')');
            var regWrap = wrap.select('.nv-regressionLinesWrap').selectAll('.nv-regLines').data(function(d) {
              return d;
            });
            regWrap.enter().append('g').attr('class', 'nv-regLines');
            var regLine = regWrap.selectAll('.nv-regLine').data(function(d) {
              return [d];
            });
            regLine.enter().append('line').attr('class', 'nv-regLine').style('stroke-opacity', 0);
            regLine.filter(function(d) {
              return d.intercept && d.slope;
            }).watchTransition(renderWatch, 'scatterPlusLineChart: regline').attr('x1', x.range()[0]).attr('x2', x.range()[1]).attr('y1', function(d, i) {
              return y(x.domain()[0] * d.slope + d.intercept);
            }).attr('y2', function(d, i) {
              return y(x.domain()[1] * d.slope + d.intercept);
            }).style('stroke', function(d, i, j) {
              return color(d, j);
            }).style('stroke-opacity', function(d, i) {
              return (d.disabled || typeof d.slope === 'undefined' || typeof d.intercept === 'undefined') ? 0 : 1;
            });
            if (showXAxis) {
              xAxis.scale(x).ticks(xAxis.ticks() ? xAxis.ticks() : nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);
              g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')').call(xAxis);
            }
            if (showYAxis) {
              yAxis.scale(y).ticks(yAxis.ticks() ? yAxis.ticks() : nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);
              g.select('.nv-y.nv-axis').call(yAxis);
            }
            if (showDistX) {
              distX.getData(scatter.x()).scale(x).width(availableWidth).color(data.map(function(d, i) {
                return d.color || color(d, i);
              }).filter(function(d, i) {
                return !data[i].disabled;
              }));
              gEnter.select('.nv-distWrap').append('g').attr('class', 'nv-distributionX');
              g.select('.nv-distributionX').attr('transform', 'translate(0,' + y.range()[0] + ')').datum(data.filter(function(d) {
                return !d.disabled;
              })).call(distX);
            }
            if (showDistY) {
              distY.getData(scatter.y()).scale(y).width(availableHeight).color(data.map(function(d, i) {
                return d.color || color(d, i);
              }).filter(function(d, i) {
                return !data[i].disabled;
              }));
              gEnter.select('.nv-distWrap').append('g').attr('class', 'nv-distributionY');
              g.select('.nv-distributionY').attr('transform', 'translate(' + (rightAlignYAxis ? availableWidth : -distY.size()) + ',0)').datum(data.filter(function(d) {
                return !d.disabled;
              })).call(distY);
            }
            legend.dispatch.on('stateChange', function(newState) {
              for (var key in newState)
                state[key] = newState[key];
              dispatch.stateChange(state);
              chart.update();
            });
            scatter.dispatch.on('elementMouseover.tooltip', function(e) {
              d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-distx-' + e.pointIndex).attr('y1', e.pos[1] - availableHeight);
              d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-disty-' + e.pointIndex).attr('x2', e.pos[0] + distX.size());
              e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
              dispatch.tooltipShow(e);
            });
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
            dispatch.on('changeState', function(e) {
              if (typeof e.disabled !== 'undefined') {
                data.forEach(function(series, i) {
                  series.disabled = e.disabled[i];
                });
                state.disabled = e.disabled;
              }
              chart.update();
            });
            x0 = x.copy();
            y0 = y.copy();
          });
          renderWatch.renderEnd('scatter with line immediate');
          return chart;
        }
        scatter.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
          d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-distx-' + e.pointIndex).attr('y1', 0);
          d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-disty-' + e.pointIndex).attr('x2', distY.size());
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.dispatch = dispatch;
        chart.scatter = scatter;
        chart.legend = legend;
        chart.xAxis = xAxis;
        chart.yAxis = yAxis;
        chart.distX = distX;
        chart.distY = distY;
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          showDistX: {
            get: function() {
              return showDistX;
            },
            set: function(_) {
              showDistX = _;
            }
          },
          showDistY: {
            get: function() {
              return showDistY;
            },
            set: function(_) {
              showDistY = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          showXAxis: {
            get: function() {
              return showXAxis;
            },
            set: function(_) {
              showXAxis = _;
            }
          },
          showYAxis: {
            get: function() {
              return showYAxis;
            },
            set: function(_) {
              showYAxis = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          tooltipXContent: {
            get: function() {
              return tooltipX;
            },
            set: function(_) {
              tooltipX = _;
            }
          },
          tooltipYContent: {
            get: function() {
              return tooltipY;
            },
            set: function(_) {
              tooltipY = _;
            }
          },
          defaultState: {
            get: function() {
              return defaultState;
            },
            set: function(_) {
              defaultState = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          rightAlignYAxis: {
            get: function() {
              return rightAlignYAxis;
            },
            set: function(_) {
              rightAlignYAxis = _;
              yAxis.orient((_) ? 'right' : 'left');
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              legend.color(color);
              distX.color(color);
              distY.color(color);
            }
          }
        });
        nv.utils.inheritOptions(chart, scatter);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.sparkline = function() {
        "use strict";
        var margin = {
          top: 2,
          right: 0,
          bottom: 2,
          left: 0
        },
            width = 400,
            height = 32,
            animate = true,
            x = d3.scale.linear(),
            y = d3.scale.linear(),
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            color = nv.utils.getColor(['#000']),
            xDomain,
            yDomain,
            xRange,
            yRange;
        ;
        function chart(selection) {
          selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom,
                container = d3.select(this);
            nv.utils.initSVG(container);
            x.domain(xDomain || d3.extent(data, getX)).range(xRange || [0, availableWidth]);
            y.domain(yDomain || d3.extent(data, getY)).range(yRange || [availableHeight, 0]);
            var wrap = container.selectAll('g.nv-wrap.nv-sparkline').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-sparkline');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var paths = wrap.selectAll('path').data(function(d) {
              return [d];
            });
            paths.enter().append('path');
            paths.exit().remove();
            paths.style('stroke', function(d, i) {
              return d.color || color(d, i);
            }).attr('d', d3.svg.line().x(function(d, i) {
              return x(getX(d, i));
            }).y(function(d, i) {
              return y(getY(d, i));
            }));
            var points = wrap.selectAll('circle.nv-point').data(function(data) {
              var yValues = data.map(function(d, i) {
                return getY(d, i);
              });
              function pointIndex(index) {
                if (index != -1) {
                  var result = data[index];
                  result.pointIndex = index;
                  return result;
                } else {
                  return null;
                }
              }
              var maxPoint = pointIndex(yValues.lastIndexOf(y.domain()[1])),
                  minPoint = pointIndex(yValues.indexOf(y.domain()[0])),
                  currentPoint = pointIndex(yValues.length - 1);
              return [minPoint, maxPoint, currentPoint].filter(function(d) {
                return d != null;
              });
            });
            points.enter().append('circle');
            points.exit().remove();
            points.attr('cx', function(d, i) {
              return x(getX(d, d.pointIndex));
            }).attr('cy', function(d, i) {
              return y(getY(d, d.pointIndex));
            }).attr('r', 2).attr('class', function(d, i) {
              return getX(d, d.pointIndex) == x.domain()[1] ? 'nv-point nv-currentValue' : getY(d, d.pointIndex) == y.domain()[0] ? 'nv-point nv-minValue' : 'nv-point nv-maxValue';
            });
          });
          return chart;
        }
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          xDomain: {
            get: function() {
              return xDomain;
            },
            set: function(_) {
              xDomain = _;
            }
          },
          yDomain: {
            get: function() {
              return yDomain;
            },
            set: function(_) {
              yDomain = _;
            }
          },
          xRange: {
            get: function() {
              return xRange;
            },
            set: function(_) {
              xRange = _;
            }
          },
          yRange: {
            get: function() {
              return yRange;
            },
            set: function(_) {
              yRange = _;
            }
          },
          xScale: {
            get: function() {
              return x;
            },
            set: function(_) {
              x = _;
            }
          },
          yScale: {
            get: function() {
              return y;
            },
            set: function(_) {
              y = _;
            }
          },
          animate: {
            get: function() {
              return animate;
            },
            set: function(_) {
              animate = _;
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = d3.functor(_);
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = d3.functor(_);
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          }
        });
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.sparklinePlus = function() {
        "use strict";
        var sparkline = nv.models.sparkline();
        var margin = {
          top: 15,
          right: 100,
          bottom: 10,
          left: 50
        },
            width = null,
            height = null,
            x,
            y,
            index = [],
            paused = false,
            xTickFormat = d3.format(',r'),
            yTickFormat = d3.format(',.2f'),
            showValue = true,
            alignValue = true,
            rightAlignValue = false,
            noData = "No Data Available.";
        ;
        function chart(selection) {
          selection.each(function(data) {
            var container = d3.select(this);
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            chart.update = function() {
              chart(selection);
            };
            chart.container = this;
            if (!data || !data.length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            var currentValue = sparkline.y()(data[data.length - 1], data.length - 1);
            x = sparkline.xScale();
            y = sparkline.yScale();
            var wrap = container.selectAll('g.nv-wrap.nv-sparklineplus').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-sparklineplus');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-sparklineWrap');
            gEnter.append('g').attr('class', 'nv-valueWrap');
            gEnter.append('g').attr('class', 'nv-hoverArea');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var sparklineWrap = g.select('.nv-sparklineWrap');
            sparkline.width(availableWidth).height(availableHeight);
            sparklineWrap.call(sparkline);
            var valueWrap = g.select('.nv-valueWrap');
            var value = valueWrap.selectAll('.nv-currentValue').data([currentValue]);
            value.enter().append('text').attr('class', 'nv-currentValue').attr('dx', rightAlignValue ? -8 : 8).attr('dy', '.9em').style('text-anchor', rightAlignValue ? 'end' : 'start');
            value.attr('x', availableWidth + (rightAlignValue ? margin.right : 0)).attr('y', alignValue ? function(d) {
              return y(d);
            } : 0).style('fill', sparkline.color()(data[data.length - 1], data.length - 1)).text(yTickFormat(currentValue));
            gEnter.select('.nv-hoverArea').append('rect').on('mousemove', sparklineHover).on('click', function() {
              paused = !paused;
            }).on('mouseout', function() {
              index = [];
              updateValueLine();
            });
            g.select('.nv-hoverArea rect').attr('transform', function(d) {
              return 'translate(' + -margin.left + ',' + -margin.top + ')';
            }).attr('width', availableWidth + margin.left + margin.right).attr('height', availableHeight + margin.top);
            function updateValueLine() {
              if (paused)
                return ;
              var hoverValue = g.selectAll('.nv-hoverValue').data(index);
              var hoverEnter = hoverValue.enter().append('g').attr('class', 'nv-hoverValue').style('stroke-opacity', 0).style('fill-opacity', 0);
              hoverValue.exit().transition().duration(250).style('stroke-opacity', 0).style('fill-opacity', 0).remove();
              hoverValue.attr('transform', function(d) {
                return 'translate(' + x(sparkline.x()(data[d], d)) + ',0)';
              }).transition().duration(250).style('stroke-opacity', 1).style('fill-opacity', 1);
              if (!index.length)
                return ;
              hoverEnter.append('line').attr('x1', 0).attr('y1', -margin.top).attr('x2', 0).attr('y2', availableHeight);
              hoverEnter.append('text').attr('class', 'nv-xValue').attr('x', -6).attr('y', -margin.top).attr('text-anchor', 'end').attr('dy', '.9em');
              g.select('.nv-hoverValue .nv-xValue').text(xTickFormat(sparkline.x()(data[index[0]], index[0])));
              hoverEnter.append('text').attr('class', 'nv-yValue').attr('x', 6).attr('y', -margin.top).attr('text-anchor', 'start').attr('dy', '.9em');
              g.select('.nv-hoverValue .nv-yValue').text(yTickFormat(sparkline.y()(data[index[0]], index[0])));
            }
            function sparklineHover() {
              if (paused)
                return ;
              var pos = d3.mouse(this)[0] - margin.left;
              function getClosestIndex(data, x) {
                var distance = Math.abs(sparkline.x()(data[0], 0) - x);
                var closestIndex = 0;
                for (var i = 0; i < data.length; i++) {
                  if (Math.abs(sparkline.x()(data[i], i) - x) < distance) {
                    distance = Math.abs(sparkline.x()(data[i], i) - x);
                    closestIndex = i;
                  }
                }
                return closestIndex;
              }
              index = [getClosestIndex(data, Math.round(x.invert(pos)))];
              updateValueLine();
            }
          });
          return chart;
        }
        chart.sparkline = sparkline;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          xTickFormat: {
            get: function() {
              return xTickFormat;
            },
            set: function(_) {
              xTickFormat = _;
            }
          },
          yTickFormat: {
            get: function() {
              return yTickFormat;
            },
            set: function(_) {
              yTickFormat = _;
            }
          },
          showValue: {
            get: function() {
              return showValue;
            },
            set: function(_) {
              showValue = _;
            }
          },
          alignValue: {
            get: function() {
              return alignValue;
            },
            set: function(_) {
              alignValue = _;
            }
          },
          rightAlignValue: {
            get: function() {
              return rightAlignValue;
            },
            set: function(_) {
              rightAlignValue = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          }
        });
        nv.utils.inheritOptions(chart, sparkline);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.stackedArea = function() {
        "use strict";
        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
            width = 960,
            height = 500,
            color = nv.utils.defaultColor(),
            id = Math.floor(Math.random() * 100000),
            getX = function(d) {
              return d.x;
            },
            getY = function(d) {
              return d.y;
            },
            style = 'stack',
            offset = 'zero',
            order = 'default',
            interpolate = 'linear',
            clipEdge = false,
            x,
            y,
            scatter = nv.models.scatter(),
            duration = 250,
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'areaClick', 'areaMouseover', 'areaMouseout', 'renderEnd');
        ;
        scatter.interactive(false);
        scatter.pointSize(2.2).pointDomain([2.2, 2.2]);
        ;
        var renderWatch = nv.utils.renderWatch(dispatch, duration);
        function chart(selection) {
          renderWatch.reset();
          renderWatch.models(scatter);
          selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom,
                container = d3.select(this);
            nv.utils.initSVG(container);
            x = scatter.xScale();
            y = scatter.yScale();
            var dataRaw = data;
            data.forEach(function(aseries, i) {
              aseries.seriesIndex = i;
              aseries.values = aseries.values.map(function(d, j) {
                d.index = j;
                d.seriesIndex = i;
                return d;
              });
            });
            var dataFiltered = data.filter(function(series) {
              return !series.disabled;
            });
            data = d3.layout.stack().order(order).offset(offset).values(function(d) {
              return d.values;
            }).x(getX).y(getY).out(function(d, y0, y) {
              var yHeight = (getY(d) === 0) ? 0 : y;
              d.display = {
                y: yHeight,
                y0: y0
              };
            })(dataFiltered);
            var wrap = container.selectAll('g.nv-wrap.nv-stackedarea').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-stackedarea');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            gEnter.append('g').attr('class', 'nv-areaWrap');
            gEnter.append('g').attr('class', 'nv-scatterWrap');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            scatter.width(availableWidth).height(availableHeight).x(getX).y(function(d) {
              return d.display.y + d.display.y0;
            }).forceY([0]).color(data.map(function(d, i) {
              return d.color || color(d, d.seriesIndex);
            }));
            var scatterWrap = g.select('.nv-scatterWrap').datum(data);
            scatterWrap.call(scatter);
            defsEnter.append('clipPath').attr('id', 'nv-edge-clip-' + id).append('rect');
            wrap.select('#nv-edge-clip-' + id + ' rect').attr('width', availableWidth).attr('height', availableHeight);
            g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');
            var area = d3.svg.area().x(function(d, i) {
              return x(getX(d, i));
            }).y0(function(d) {
              return y(d.display.y0);
            }).y1(function(d) {
              return y(d.display.y + d.display.y0);
            }).interpolate(interpolate);
            var zeroArea = d3.svg.area().x(function(d, i) {
              return x(getX(d, i));
            }).y0(function(d) {
              return y(d.display.y0);
            }).y1(function(d) {
              return y(d.display.y0);
            });
            var path = g.select('.nv-areaWrap').selectAll('path.nv-area').data(function(d) {
              return d;
            });
            path.enter().append('path').attr('class', function(d, i) {
              return 'nv-area nv-area-' + i;
            }).attr('d', function(d, i) {
              return zeroArea(d.values, d.seriesIndex);
            }).on('mouseover', function(d, i) {
              d3.select(this).classed('hover', true);
              dispatch.areaMouseover({
                point: d,
                series: d.key,
                pos: [d3.event.pageX, d3.event.pageY],
                seriesIndex: d.seriesIndex
              });
            }).on('mouseout', function(d, i) {
              d3.select(this).classed('hover', false);
              dispatch.areaMouseout({
                point: d,
                series: d.key,
                pos: [d3.event.pageX, d3.event.pageY],
                seriesIndex: d.seriesIndex
              });
            }).on('click', function(d, i) {
              d3.select(this).classed('hover', false);
              dispatch.areaClick({
                point: d,
                series: d.key,
                pos: [d3.event.pageX, d3.event.pageY],
                seriesIndex: d.seriesIndex
              });
            });
            path.exit().remove();
            path.style('fill', function(d, i) {
              return d.color || color(d, d.seriesIndex);
            }).style('stroke', function(d, i) {
              return d.color || color(d, d.seriesIndex);
            });
            path.watchTransition(renderWatch, 'stackedArea path').attr('d', function(d, i) {
              return area(d.values, i);
            });
            scatter.dispatch.on('elementMouseover.area', function(e) {
              g.select('.nv-chart-' + id + ' .nv-area-' + e.seriesIndex).classed('hover', true);
            });
            scatter.dispatch.on('elementMouseout.area', function(e) {
              g.select('.nv-chart-' + id + ' .nv-area-' + e.seriesIndex).classed('hover', false);
            });
            chart.d3_stackedOffset_stackPercent = function(stackData) {
              var n = stackData.length,
                  m = stackData[0].length,
                  k = 1 / n,
                  i,
                  j,
                  o,
                  y0 = [];
              for (j = 0; j < m; ++j) {
                for (i = 0, o = 0; i < dataRaw.length; i++) {
                  o += getY(dataRaw[i].values[j]);
                }
                if (o)
                  for (i = 0; i < n; i++) {
                    stackData[i][j][1] /= o;
                  }
                else {
                  for (i = 0; i < n; i++) {
                    stackData[i][j][1] = k;
                  }
                }
              }
              for (j = 0; j < m; ++j)
                y0[j] = 0;
              return y0;
            };
          });
          renderWatch.renderEnd('stackedArea immediate');
          return chart;
        }
        scatter.dispatch.on('elementClick.area', function(e) {
          dispatch.areaClick(e);
        });
        scatter.dispatch.on('elementMouseover.tooltip', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top], dispatch.tooltipShow(e);
        });
        scatter.dispatch.on('elementMouseout.tooltip', function(e) {
          dispatch.tooltipHide(e);
        });
        chart.dispatch = dispatch;
        chart.scatter = scatter;
        chart.interpolate = function(_) {
          if (!arguments.length)
            return interpolate;
          interpolate = _;
          return chart;
        };
        chart.duration = function(_) {
          if (!arguments.length)
            return duration;
          duration = _;
          renderWatch.reset(duration);
          scatter.duration(duration);
          return chart;
        };
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          clipEdge: {
            get: function() {
              return clipEdge;
            },
            set: function(_) {
              clipEdge = _;
            }
          },
          offset: {
            get: function() {
              return offset;
            },
            set: function(_) {
              offset = _;
            }
          },
          order: {
            get: function() {
              return order;
            },
            set: function(_) {
              order = _;
            }
          },
          interpolate: {
            get: function() {
              return interpolate;
            },
            set: function(_) {
              interpolate = _;
            }
          },
          x: {
            get: function() {
              return getX;
            },
            set: function(_) {
              getX = d3.functor(_);
            }
          },
          y: {
            get: function() {
              return getY;
            },
            set: function(_) {
              getY = d3.functor(_);
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
            }
          },
          style: {
            get: function() {
              return style;
            },
            set: function(_) {
              style = _;
              switch (style) {
                case 'stack':
                  chart.offset('zero');
                  chart.order('default');
                  break;
                case 'stream':
                  chart.offset('wiggle');
                  chart.order('inside-out');
                  break;
                case 'stream-center':
                  chart.offset('silhouette');
                  chart.order('inside-out');
                  break;
                case 'expand':
                  chart.offset('expand');
                  chart.order('default');
                  break;
                case 'stack_percent':
                  chart.offset(chart.d3_stackedOffset_stackPercent);
                  chart.order('default');
                  break;
              }
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
              scatter.duration(duration);
            }
          }
        });
        nv.utils.inheritOptions(chart, scatter);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.models.stackedAreaChart = function() {
        "use strict";
        var stacked = nv.models.stackedArea(),
            xAxis = nv.models.axis(),
            yAxis = nv.models.axis(),
            legend = nv.models.legend(),
            controls = nv.models.legend(),
            interactiveLayer = nv.interactiveGuideline();
        ;
        var margin = {
          top: 30,
          right: 25,
          bottom: 50,
          left: 60
        },
            width = null,
            height = null,
            color = nv.utils.defaultColor(),
            showControls = true,
            showLegend = true,
            showXAxis = true,
            showYAxis = true,
            rightAlignYAxis = false,
            useInteractiveGuideline = false,
            tooltips = true,
            tooltip = function(key, x, y, e, graph) {
              return '<h3>' + key + '</h3>' + '<p>' + y + ' on ' + x + '</p>';
            },
            x,
            y,
            yAxisTickFormat = d3.format(',.2f'),
            state = nv.utils.state(),
            defaultState = null,
            noData = 'No Data Available.',
            dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState', 'renderEnd'),
            controlWidth = 250,
            cData = ['Stacked', 'Stream', 'Expanded'],
            controlLabels = {},
            duration = 250;
        ;
        state.style = stacked.style();
        xAxis.orient('bottom').tickPadding(7);
        yAxis.orient((rightAlignYAxis) ? 'right' : 'left');
        controls.updateState(false);
        var renderWatch = nv.utils.renderWatch(dispatch);
        var style = stacked.style();
        var showTooltip = function(e, offsetElement) {
          var left = e.pos[0] + (offsetElement.offsetLeft || 0),
              top = e.pos[1] + (offsetElement.offsetTop || 0),
              x = xAxis.tickFormat()(stacked.x()(e.point, e.pointIndex)),
              y = yAxis.tickFormat()(stacked.y()(e.point, e.pointIndex)),
              content = tooltip(e.series.key, x, y, e, chart);
          nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
        };
        var stateGetter = function(data) {
          return function() {
            return {
              active: data.map(function(d) {
                return !d.disabled;
              }),
              style: stacked.style()
            };
          };
        };
        var stateSetter = function(data) {
          return function(state) {
            if (state.style !== undefined)
              style = state.style;
            if (state.active !== undefined)
              data.forEach(function(series, i) {
                series.disabled = !state.active[i];
              });
          };
        };
        function chart(selection) {
          renderWatch.reset();
          renderWatch.models(stacked);
          if (showXAxis)
            renderWatch.models(xAxis);
          if (showYAxis)
            renderWatch.models(yAxis);
          selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = (width || parseInt(container.style('width')) || 960) - margin.left - margin.right,
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
            chart.update = function() {
              container.transition().duration(duration).call(chart);
            };
            chart.container = this;
            state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();
            state.disabled = data.map(function(d) {
              return !!d.disabled;
            });
            if (!defaultState) {
              var key;
              defaultState = {};
              for (key in state) {
                if (state[key] instanceof Array)
                  defaultState[key] = state[key].slice(0);
                else
                  defaultState[key] = state[key];
              }
            }
            if (!data || !data.length || !data.filter(function(d) {
              return d.values.length;
            }).length) {
              var noDataText = container.selectAll('.nv-noData').data([noData]);
              noDataText.enter().append('text').attr('class', 'nvd3 nv-noData').attr('dy', '-.7em').style('text-anchor', 'middle');
              noDataText.attr('x', margin.left + availableWidth / 2).attr('y', margin.top + availableHeight / 2).text(function(d) {
                return d;
              });
              return chart;
            } else {
              container.selectAll('.nv-noData').remove();
            }
            x = stacked.xScale();
            y = stacked.yScale();
            var wrap = container.selectAll('g.nv-wrap.nv-stackedAreaChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-stackedAreaChart').append('g');
            var g = wrap.select('g');
            gEnter.append("rect").style("opacity", 0);
            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-stackedWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-controlsWrap');
            gEnter.append('g').attr('class', 'nv-interactive');
            g.select("rect").attr("width", availableWidth).attr("height", availableHeight);
            if (showLegend) {
              var legendWidth = (showControls) ? availableWidth - controlWidth : availableWidth;
              legend.width(legendWidth);
              g.select('.nv-legendWrap').datum(data).call(legend);
              if (margin.top != legend.height()) {
                margin.top = legend.height();
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
              }
              g.select('.nv-legendWrap').attr('transform', 'translate(' + (availableWidth - legendWidth) + ',' + (-margin.top) + ')');
            }
            if (showControls) {
              var controlsData = [{
                key: controlLabels.stacked || 'Stacked',
                metaKey: 'Stacked',
                disabled: stacked.style() != 'stack',
                style: 'stack'
              }, {
                key: controlLabels.stream || 'Stream',
                metaKey: 'Stream',
                disabled: stacked.style() != 'stream',
                style: 'stream'
              }, {
                key: controlLabels.expanded || 'Expanded',
                metaKey: 'Expanded',
                disabled: stacked.style() != 'expand',
                style: 'expand'
              }, {
                key: controlLabels.stack_percent || 'Stack %',
                metaKey: 'Stack_Percent',
                disabled: stacked.style() != 'stack_percent',
                style: 'stack_percent'
              }];
              controlWidth = (cData.length / 3) * 260;
              controlsData = controlsData.filter(function(d) {
                return cData.indexOf(d.metaKey) !== -1;
              });
              controls.width(controlWidth).color(['#444', '#444', '#444']);
              g.select('.nv-controlsWrap').datum(controlsData).call(controls);
              if (margin.top != Math.max(controls.height(), legend.height())) {
                margin.top = Math.max(controls.height(), legend.height());
                availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;
              }
              g.select('.nv-controlsWrap').attr('transform', 'translate(0,' + (-margin.top) + ')');
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            if (rightAlignYAxis) {
              g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
            }
            if (useInteractiveGuideline) {
              interactiveLayer.width(availableWidth).height(availableHeight).margin({
                left: margin.left,
                top: margin.top
              }).svgContainer(container).xScale(x);
              wrap.select(".nv-interactive").call(interactiveLayer);
            }
            stacked.width(availableWidth).height(availableHeight);
            var stackedWrap = g.select('.nv-stackedWrap').datum(data);
            stackedWrap.transition().call(stacked);
            if (showXAxis) {
              xAxis.scale(x).ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);
              g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + availableHeight + ')');
              g.select('.nv-x.nv-axis').transition().duration(0).call(xAxis);
            }
            if (showYAxis) {
              yAxis.scale(y).ticks(stacked.offset() == 'wiggle' ? 0 : nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0).setTickFormat((stacked.style() == 'expand' || stacked.style() == 'stack_percent') ? d3.format('%') : yAxisTickFormat);
              g.select('.nv-y.nv-axis').transition().duration(0).call(yAxis);
            }
            stacked.dispatch.on('areaClick.toggle', function(e) {
              if (data.filter(function(d) {
                return !d.disabled;
              }).length === 1)
                data.forEach(function(d) {
                  d.disabled = false;
                });
              else
                data.forEach(function(d, i) {
                  d.disabled = (i != e.seriesIndex);
                });
              state.disabled = data.map(function(d) {
                return !!d.disabled;
              });
              dispatch.stateChange(state);
              chart.update();
            });
            legend.dispatch.on('stateChange', function(newState) {
              for (var key in newState)
                state[key] = newState[key];
              dispatch.stateChange(state);
              chart.update();
            });
            controls.dispatch.on('legendClick', function(d, i) {
              if (!d.disabled)
                return ;
              controlsData = controlsData.map(function(s) {
                s.disabled = true;
                return s;
              });
              d.disabled = false;
              stacked.style(d.style);
              state.style = stacked.style();
              dispatch.stateChange(state);
              chart.update();
            });
            interactiveLayer.dispatch.on('elementMousemove', function(e) {
              stacked.clearHighlights();
              var singlePoint,
                  pointIndex,
                  pointXLocation,
                  allData = [];
              data.filter(function(series, i) {
                series.seriesIndex = i;
                return !series.disabled;
              }).forEach(function(series, i) {
                pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
                stacked.highlightPoint(i, pointIndex, true);
                var point = series.values[pointIndex];
                if (typeof point === 'undefined')
                  return ;
                if (typeof singlePoint === 'undefined')
                  singlePoint = point;
                if (typeof pointXLocation === 'undefined')
                  pointXLocation = chart.xScale()(chart.x()(point, pointIndex));
                var tooltipValue = (stacked.style() == 'expand') ? point.display.y : chart.y()(point, pointIndex);
                allData.push({
                  key: series.key,
                  value: tooltipValue,
                  color: color(series, series.seriesIndex),
                  stackedValue: point.display
                });
              });
              allData.reverse();
              if (allData.length > 2) {
                var yValue = chart.yScale().invert(e.mouseY);
                var yDistMax = Infinity,
                    indexToHighlight = null;
                allData.forEach(function(series, i) {
                  yValue = Math.abs(yValue);
                  var stackedY0 = Math.abs(series.stackedValue.y0);
                  var stackedY = Math.abs(series.stackedValue.y);
                  if (yValue >= stackedY0 && yValue <= (stackedY + stackedY0)) {
                    indexToHighlight = i;
                    return ;
                  }
                });
                if (indexToHighlight != null)
                  allData[indexToHighlight].highlight = true;
              }
              var xValue = xAxis.tickFormat()(chart.x()(singlePoint, pointIndex));
              var valueFormatter = (stacked.style() == 'expand') ? function(d, i) {
                return d3.format(".1%")(d);
              } : function(d, i) {
                return yAxis.tickFormat()(d);
              };
              interactiveLayer.tooltip.position({
                left: pointXLocation + margin.left,
                top: e.mouseY + margin.top
              }).chartContainer(that.parentNode).enabled(tooltips).valueFormatter(valueFormatter).data({
                value: xValue,
                series: allData
              })();
              interactiveLayer.renderGuideLine(pointXLocation);
            });
            interactiveLayer.dispatch.on("elementMouseout", function(e) {
              dispatch.tooltipHide();
              stacked.clearHighlights();
            });
            dispatch.on('tooltipShow', function(e) {
              if (tooltips)
                showTooltip(e, that.parentNode);
            });
            dispatch.on('changeState', function(e) {
              if (typeof e.disabled !== 'undefined' && data.length === e.disabled.length) {
                data.forEach(function(series, i) {
                  series.disabled = e.disabled[i];
                });
                state.disabled = e.disabled;
              }
              if (typeof e.style !== 'undefined') {
                stacked.style(e.style);
                style = e.style;
              }
              chart.update();
            });
          });
          renderWatch.renderEnd('stacked Area chart immediate');
          return chart;
        }
        stacked.dispatch.on('tooltipShow', function(e) {
          e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
          dispatch.tooltipShow(e);
        });
        stacked.dispatch.on('tooltipHide', function(e) {
          dispatch.tooltipHide(e);
        });
        dispatch.on('tooltipHide', function() {
          if (tooltips)
            nv.tooltip.cleanup();
        });
        chart.dispatch = dispatch;
        chart.stacked = stacked;
        chart.legend = legend;
        chart.controls = controls;
        chart.xAxis = xAxis;
        chart.yAxis = yAxis;
        chart.interactiveLayer = interactiveLayer;
        yAxis.setTickFormat = yAxis.tickFormat;
        chart.dispatch = dispatch;
        chart.options = nv.utils.optionsFunc.bind(chart);
        chart._options = Object.create({}, {
          width: {
            get: function() {
              return width;
            },
            set: function(_) {
              width = _;
            }
          },
          height: {
            get: function() {
              return height;
            },
            set: function(_) {
              height = _;
            }
          },
          showLegend: {
            get: function() {
              return showLegend;
            },
            set: function(_) {
              showLegend = _;
            }
          },
          showXAxis: {
            get: function() {
              return showXAxis;
            },
            set: function(_) {
              showXAxis = _;
            }
          },
          showYAxis: {
            get: function() {
              return showYAxis;
            },
            set: function(_) {
              showYAxis = _;
            }
          },
          tooltips: {
            get: function() {
              return tooltips;
            },
            set: function(_) {
              tooltips = _;
            }
          },
          tooltipContent: {
            get: function() {
              return tooltip;
            },
            set: function(_) {
              tooltip = _;
            }
          },
          defaultState: {
            get: function() {
              return defaultState;
            },
            set: function(_) {
              defaultState = _;
            }
          },
          noData: {
            get: function() {
              return noData;
            },
            set: function(_) {
              noData = _;
            }
          },
          showControls: {
            get: function() {
              return showControls;
            },
            set: function(_) {
              showControls = _;
            }
          },
          controlLabels: {
            get: function() {
              return controlLabels;
            },
            set: function(_) {
              controlLabels = _;
            }
          },
          yAxisTickFormat: {
            get: function() {
              return yAxisTickFormat;
            },
            set: function(_) {
              yAxisTickFormat = _;
            }
          },
          margin: {
            get: function() {
              return margin;
            },
            set: function(_) {
              margin.top = _.top !== undefined ? _.top : margin.top;
              margin.right = _.right !== undefined ? _.right : margin.right;
              margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
              margin.left = _.left !== undefined ? _.left : margin.left;
            }
          },
          duration: {
            get: function() {
              return duration;
            },
            set: function(_) {
              duration = _;
              renderWatch.reset(duration);
              stacked.duration(duration);
              xAxis.duration(duration);
              yAxis.duration(duration);
            }
          },
          color: {
            get: function() {
              return color;
            },
            set: function(_) {
              color = nv.utils.getColor(_);
              legend.color(color);
              stacked.color(color);
            }
          },
          rightAlignYAxis: {
            get: function() {
              return rightAlignYAxis;
            },
            set: function(_) {
              rightAlignYAxis = _;
              yAxis.orient(rightAlignYAxis ? 'right' : 'left');
            }
          },
          useInteractiveGuideline: {
            get: function() {
              return useInteractiveGuideline;
            },
            set: function(_) {
              useInteractiveGuideline = !!_;
              if (_) {
                chart.interactive(false);
                chart.useVoronoi(false);
              }
            }
          }
        });
        nv.utils.inheritOptions(chart, stacked);
        nv.utils.initOptions(chart);
        return chart;
      };
      nv.version = "1.7.1";
    })();
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});

System.register("github:mbostock/d3@3.5.5", ["github:mbostock/d3@3.5.5/d3"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:mbostock/d3@3.5.5/d3");
  global.define = __define;
  return module.exports;
});

System.register("github:novus/nvd3@1.7.1", ["github:novus/nvd3@1.7.1/build/nv.d3"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:novus/nvd3@1.7.1/build/nv.d3");
  global.define = __define;
  return module.exports;
});

System.register("app/dictionary", [], function($__export) {
  "use strict";
  var __moduleName = "app/dictionary";
  var Dictionary,
      CumulativeDictionary;
  return {
    setters: [],
    execute: function() {
      Dictionary = (function() {
        function Dictionary() {}
        return ($traceurRuntime.createClass)(Dictionary, {
          map: function(fn) {
            var $__0 = this;
            return Object.keys(this).map((function(name) {
              return fn(name, $__0[name]);
            }));
          },
          push: function(person, date, value) {
            if (!this.hasOwnProperty(person)) {
              this[person] = [];
            }
            this[person].push({
              date: date,
              value: value
            });
          },
          toArray: function() {
            return this.map((function(person, personData) {
              return personData;
            }));
          },
          toD3Array: function() {
            return this.map((function(person, personData) {
              return {
                key: person,
                values: personData.map((function(p) {
                  return [p.date, p.value];
                }))
              };
            }));
          }
        }, {});
      }());
      $__export("Dictionary", Dictionary);
      CumulativeDictionary = (function($__super) {
        function CumulativeDictionary() {
          $traceurRuntime.superConstructor(CumulativeDictionary).apply(this, arguments);
        }
        return ($traceurRuntime.createClass)(CumulativeDictionary, {push: function(person, date, value) {
            var p = this[person],
                prev = (p && p.length) ? p[p.length - 1].value : 0;
            $traceurRuntime.superGet(this, CumulativeDictionary.prototype, "push").call(this, person, date, prev + value);
          }}, {}, $__super);
      }(Dictionary));
      $__export("CumulativeDictionary", CumulativeDictionary);
    }
  };
});

System.register("app/listoperations", [], function($__export) {
  "use strict";
  var __moduleName = "app/listoperations";
  function sum(a, b) {
    return a + b;
  }
  $__export("sum", sum);
  return {
    setters: [],
    execute: function() {
    }
  };
});

System.register("app/vis", ["github:mbostock/d3@3.5.5"], function($__export) {
  "use strict";
  var __moduleName = "app/vis";
  var d3,
      timeFormat,
      xSelector,
      ySelector;
  function tickFormat(d) {
    return timeFormat(new Date(d));
  }
  function timeline(element, data, yLabel) {
    var yTickFormat = arguments[3] !== (void 0) ? arguments[3] : d3.format('.1f');
    nv.addGraph(function() {
      var chart = nv.models.lineChart().showLegend(false).useInteractiveGuideline(true).x(xSelector).y(ySelector);
      chart.xAxis.tickFormat(tickFormat);
      chart.yAxis.axisLabel(yLabel).tickFormat(yTickFormat);
      d3.select(element).datum(data.toD3Array()).call(chart);
      nv.utils.windowResize(chart.update);
      return chart;
    });
  }
  $__export("tickFormat", tickFormat);
  $__export("timeline", timeline);
  return {
    setters: [function($__m) {
      d3 = $__m.default;
    }],
    execute: function() {
      timeFormat = d3.time.format('%-d.%-m');
      $__export("timeFormat", timeFormat);
      xSelector = (function(d) {
        return d[0];
      });
      $__export("xSelector", xSelector);
      ySelector = (function(d) {
        return d[1];
      });
      $__export("ySelector", ySelector);
    }
  };
});

System.register("app/vis.kmtimeline", ["github:mbostock/d3@3.5.5", "github:novus/nvd3@1.7.1", "app/vis"], function($__export) {
  "use strict";
  var __moduleName = "app/vis.kmtimeline";
  var d3,
      nv,
      tickFormat,
      xSelector,
      ySelector;
  function kmTimeline(element, data) {
    nv.addGraph(function() {
      var chart = nv.models.stackedAreaChart().options({transitionDuration: 500}).showLegend(false).useInteractiveGuideline(true).yAxisTickFormat(d3.format('.0f')).x(xSelector).y(ySelector);
      chart.xAxis.tickFormat(tickFormat);
      chart.yAxis.axisLabel('km');
      d3.select(element).datum(data.toD3Array()).call(chart);
      nv.utils.windowResize(chart.update);
      return chart;
    });
  }
  $__export("default", kmTimeline);
  return {
    setters: [function($__m) {
      d3 = $__m.default;
    }, function($__m) {
      nv = $__m.default;
    }, function($__m) {
      tickFormat = $__m.tickFormat;
      xSelector = $__m.xSelector;
      ySelector = $__m.ySelector;
    }],
    execute: function() {
    }
  };
});

System.register("app/vis.totalKMDistribution", ["app/listoperations", "github:mbostock/d3@3.5.5", "github:novus/nvd3@1.7.1"], function($__export) {
  "use strict";
  var __moduleName = "app/vis.totalKMDistribution";
  var sum,
      d3,
      nv;
  function totalKMDistribution(element, data) {
    var kmdata = data.map((function(person, personData) {
      return {
        person: person,
        kms: personData.map((function(_) {
          return _.value;
        })).reduce(sum)
      };
    }));
    var totalKms = kmdata.map((function(_) {
      return _.kms;
    })).reduce(sum);
    nv.addGraph(function() {
      var chart = nv.models.pieChart().donut(true).title(totalKms + " km").showLabels(false).x((function(d) {
        return d.person;
      })).y((function(d) {
        return d.kms;
      })).valueFormat((function(d) {
        return d + " km";
      })).id('kmdistribution');
      d3.select(element).datum(kmdata).call(chart);
      nv.utils.windowResize(chart.update);
      return chart;
    });
  }
  $__export("default", totalKMDistribution);
  return {
    setters: [function($__m) {
      sum = $__m.sum;
    }, function($__m) {
      d3 = $__m.default;
    }, function($__m) {
      nv = $__m.default;
    }],
    execute: function() {
    }
  };
});

System.register("app/app", ["app/dictionary", "github:mbostock/d3@3.5.5", "app/vis.totalKMDistribution", "app/vis.kmtimeline", "app/vis"], function($__export) {
  "use strict";
  var __moduleName = "app/app";
  var Dictionary,
      CumulativeDictionary,
      d3,
      visualizeTotalKMDistribution,
      visualizeKMTimeline,
      timeline;
  function iterateProps(obj, fn) {
    Object.keys(obj).forEach((function(propName) {
      fn(propName, obj[propName]);
    }));
  }
  return {
    setters: [function($__m) {
      Dictionary = $__m.Dictionary;
      CumulativeDictionary = $__m.CumulativeDictionary;
    }, function($__m) {
      d3 = $__m.default;
    }, function($__m) {
      visualizeTotalKMDistribution = $__m.default;
    }, function($__m) {
      visualizeKMTimeline = $__m.default;
    }, function($__m) {
      timeline = $__m.timeline;
    }],
    execute: function() {
      d3.json("data/data.json", (function(data) {
        var kms = new Dictionary(),
            kms_cumulative = new CumulativeDictionary(),
            weights = new Dictionary(),
            waists = new Dictionary(),
            thighs = new Dictionary(),
            calfs = new Dictionary(),
            dateFormatter = d3.time.format("%Y-%m-%d");
        iterateProps(data, (function(dateProp, dateData) {
          var date = dateFormatter.parse(dateProp);
          iterateProps(dateData, (function(personProp, person) {
            kms.push(personProp, date, person[0]);
            weights.push(personProp, date, person[1]);
            waists.push(personProp, date, person[2]);
            thighs.push(personProp, date, person[3]);
            calfs.push(personProp, date, person[4]);
            kms_cumulative.push(personProp, date, person[0]);
          }));
        }));
        visualizeTotalKMDistribution("#vis-total-distribution", kms);
        visualizeKMTimeline("#vis-km", kms);
        timeline("#vis-weight", weights, "kg");
        timeline("#vis-waist", waists, "cm");
        timeline("#vis-thigh", thighs, "cm");
        timeline("#vis-calf", calfs, "cm");
      }));
    }
  };
});

//# sourceMappingURL=build.js.map