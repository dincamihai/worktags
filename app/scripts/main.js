(function() {
  require.config({
    paths: {
      backbone: 'backbone/backbone',
      underscore: 'underscore/underscore',
      jquery: 'jquery/dist/jquery.min',
      marionette: 'marionette/lib/backbone.marionette',
      sql: 'sql.js/js/sql',
      knex: 'knex/knex',
      select2: 'select2/select2.min'
    },
    shim: {
      jquery: {
        exports: 'jQuery'
      },
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },
      marionette: {
        deps: ['jquery', 'underscore', 'backbone'],
        exports: 'Marionette'
      }
    }
  });

  define(['backbone', 'marionette', 'sql'], function() {
    window.jlog = {};
    jlog.create_app = function() {
      var App;
      App = new Backbone.Marionette.Application;
      App.addRegions({
        command: '#command',
        hints: '#hints',
        log: '#log'
      });
      return App;
    };
    return jlog.app = jlog.create_app();
  });

}).call(this);
