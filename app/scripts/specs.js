(function() {
  require.config({
    paths: {
      jasmine: 'jasmine/jasmine',
      jasmine_html: 'jasmine/jasmine-html',
      boot: 'jasmine/custom-boot'
    },
    shim: {
      jasmine: {
        exports: 'window.jasmineRequire'
      },
      jasmine_html: {
        deps: ['jasmine'],
        exports: 'window.jasmineRequire'
      },
      boot: {
        deps: ['jasmine', 'jasmine_html'],
        exports: 'window.jasmineRequire'
      }
    }
  });

  define(['boot', 'main'], function(boot, app) {
    return describe('app', function() {
      return it('should show the input area', function() {
        debugger;
      });
    });
  });

}).call(this);
