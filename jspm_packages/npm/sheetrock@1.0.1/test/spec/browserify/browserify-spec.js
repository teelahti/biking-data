/* */ 
'use strict';
var sheetrock = require('../../../src/sheetrock');
describe('Sheetrock via Browserify', function() {
  it('exposes a CommonJS environment flag', function() {
    expect(sheetrock.environment.commonjs).toBe(true);
  });
  it('loads the module', function() {
    expect(typeof sheetrock).toEqual('function');
  });
  it('doesn\'t expose a global', function() {
    expect(window.sheetrock).not.toBeDefined();
  });
});
