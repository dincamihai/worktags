(function() {
  require.config({
    paths: {
      jquery: 'jquery/dist/jquery.min',
      bootstrap: 'bootstrap/dist/js/bootstrap.min',
      backbone: 'backbone/backbone',
      underscore: 'underscore/underscore',
      marionette: 'marionette/lib/backbone.marionette',
      handlebars: 'handlebars/handlebars.min',
      templates: 'templates',
      sql: 'sql.js/js/sql',
      knex: 'knex/knex',
      selectize: 'selectize/selectize',
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
      views: {
        deps: ['jquery', 'bootstrap', 'underscore', 'backbone', 'marionette', 'handlebars', 'templates', 'selectize']
      }
    }
  });

  define(['main', 'views'], function(create_app, views) {
    var app, options;
    options = {
      regions: {
        content: '#content'
      },
      initializers: [
        function() {
          this.content.show(views.layout);
          return views.layout.command.show(views.command_view);
        }
      ]
    };
    app = create_app(options);
    return app.start();
  });

}).call(this);
