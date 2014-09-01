(function() {
  require.config({
    paths: {
      jquery: 'jquery/dist/jquery.min',
      bootstrap: 'bootstrap/js/bootstrap.min',
      backbone: 'backbone/backbone',
      underscore: 'underscore/underscore',
      marionette: 'marionette/lib/backbone.marionette',
      handlebars: 'handlebars/handlebars.min',
      templates: 'templates',
      sql: 'sql.js/js/sql',
      knex: 'knex/knex',
      selectize: 'selectize/selectize',
      moment: 'moment/moment.min',
      models: 'build/models',
      views: 'build/views'
    },
    shim: {
      bootstrap: {
        deps: ['jquery']
      },
      handlebars: {
        exports: 'Handlebars'
      },
      main: {
        deps: ['backbone', 'marionette']
      },
      "build/models": {
        deps: ['moment']
      },
      "build/views": {
        deps: ['jquery', 'bootstrap', 'underscore', 'backbone', 'marionette', 'handlebars', 'build/templates', 'build/models', 'selectize', 'moment']
      }
    }
  });

  define(['build/main', 'build/models', 'build/views'], function(main, models, views) {
    var app, options;
    options = {
      regions: {
        content: '#content'
      },
      initializers: [
        function() {
          this.command_view = views.command_view;
          this.content.show(views.layout);
          views.layout.command.show(views.command_view);
          return views.layout.log_entries.show(views.entries_view);
        }
      ]
    };
    app = main.create_app(options);
    return app.start();
  });

}).call(this);
