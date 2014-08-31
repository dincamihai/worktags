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
      views: 'views'
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
      models: {
        deps: ['moment']
      },
      views: {
        deps: ['jquery', 'bootstrap', 'underscore', 'backbone', 'marionette', 'handlebars', 'templates', 'models', 'selectize', 'moment']
      }
    }
  });

  define(['main', 'models', 'views'], function(main, models, views) {
    var app, options;
    options = {
      regions: {
        content: '#content'
      },
      initializers: [
        function() {
          var entries_view;
          entries_view = new views.LogEntriesCollectionView();
          this.content.show(views.layout);
          views.layout.command.show(views.command_view);
          return views.layout.log_entries.show(entries_view);
        }
      ]
    };
    app = main.create_app(options);
    return app.start();
  });

}).call(this);
