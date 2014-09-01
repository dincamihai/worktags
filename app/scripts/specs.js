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
      views: 'views',
      jasmine: 'jasmine/jasmine',
      jasmine_html: 'jasmine/jasmine-html',
      boot: 'jasmine/custom-boot',
      moment: 'moment/moment.min'
    },
    shim: {
      jquery: {
        exports: 'jQuery'
      },
      bootstrap: {
        deps: ['jquery']
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
      },
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
      },
      models: {
        deps: ['moment']
      },
      views: {
        deps: ['jquery', 'bootstrap', 'underscore', 'backbone', 'marionette', 'handlebars', 'templates', 'selectize']
      }
    }
  });

  define(['boot', 'moment', 'models', 'views'], function(boot, moment, models, views) {
    describe('views', function() {
      it('should have a LogEntriesCollectionView', function() {
        return expect(views.LogEntriesCollectionView).not.toBe(void 0);
      });
      describe('log entry view', function() {
        it('should show its interval', function() {
          var entry, view;
          entry = new models.LogEntryModel;
          view = new views.LogEntryView({
            model: entry
          });
          view.render();
          return expect(view.$el.find('td:first').text()).toEqual(moment(entry.get('end')).format('h:mm:ss a'));
        });
        return it('should show its tags', function() {
          var entry, view;
          entry = new models.LogEntryModel({
            tags: ["#tag1", "@tag2"]
          });
          view = new views.LogEntryView({
            model: entry
          });
          view.render();
          return expect(view.$el.find('td:eq(1)').text()).toEqual("#tag1,@tag2");
        });
      });
      describe('log entries collection view', function() {
        return it('should list all entries', function() {
          var entries_view;
          entries_view = new views.LogEntriesCollectionView({
            collection: new models.LogEntriesCollection([
              {
                tags: ["#tag1", "@tag2"]
              }
            ])
          });
          entries_view.render();
          expect(entries_view.$el.is('table')).toBe(true);
          expect(entries_view.$el.attr('class')).toEqual("table");
          return expect(entries_view.$el.find('tr').length).toEqual(1);
        });
      });
      return describe('command view', function() {
        it('should show the input area', function() {
          views.command_view.render();
          return expect(views.command_view.$el.find('input').attr('placeholder')).toEqual('Add new task tags');
        });
        return it('should add a new entry', function() {
          views.command_view.render();
          views.command_view.selectize.createItem('#tag1');
          views.command_view.$el.find('#add-log-entry').click();
          return expect(views.entries_view.$el.find('tr').length).toEqual(1);
        });
      });
    });
    return describe('models', function() {
      it('should have a LogEntryModel', function() {
        return expect(models.LogEntryModel).not.toBe(void 0);
      });
      it('should have a LogEntriesCollection', function() {
        return expect(models.LogEntriesCollection).not.toBe(void 0);
      });
      return describe('log-entry', function() {
        return it('should have an end datetime', function() {
          var log_entry;
          log_entry = new models.LogEntryModel();
          return expect(log_entry.get('end').toDate() - Date.now()).toBeLessThan(100);
        });
      });
    });
  });

}).call(this);
