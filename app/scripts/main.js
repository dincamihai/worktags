(function() {
  require.config({
    paths: {
      bootstrap: 'bootstrap/dist/js/bootstrap.min',
      backbone: 'backbone/backbone',
      underscore: 'underscore/underscore',
      jquery: 'jquery/dist/jquery.min',
      marionette: 'marionette/lib/backbone.marionette',
      handlebars: 'handlebars/handlebars.min',
      templates: 'templates',
      sql: 'sql.js/js/sql',
      knex: 'knex/knex',
      selectize: 'selectize/selectize'
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
      },
      selectize: {
        deps: ['jquery']
      },
      handlebars: {
        exports: 'Handlebars'
      },
      templates: {
        deps: ['selectize']
      }
    }
  });

  define(['backbone', 'marionette', 'templates', 'sql'], function(Backbone, Marionette, Templates, Sql) {
    var App, CommandView;
    Backbone.Marionette.Region.prototype.attachHtml = function(view) {
      return this.$el.replaceWith(view.el);
    };
    CommandView = Backbone.Marionette.ItemView.extend({
      template: Templates["app/templates/command.hbs"],
      className: "span8",
      id: "command",
      onRender: function() {
        return this.$('#command-line').selectize({
          create: true,
          persist: false
        });
      }
    });
    App = new Backbone.Marionette.Application;
    App.addRegions({
      content: '#content'
    });
    App.addInitializer(function(options) {
      var command_view, layout, log_view;
      layout = new Backbone.Marionette.LayoutView({
        template: Templates["app/templates/layout.hbs"],
        className: "container-fluid",
        id: "content",
        regions: {
          command: "#command",
          log: "#log"
        }
      });
      command_view = new CommandView();
      log_view = new Backbone.Marionette.ItemView({
        template: Templates["app/templates/log.hbs"],
        className: "span8",
        id: "log"
      });
      this.content.show(layout);
      return layout.command.show(command_view);
    });
    return App;
  });

}).call(this);
