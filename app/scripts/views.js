(function() {
  define(['moment', 'models'], function(moment, models) {
    var CommandView, LogEntriesCollectionView, LogEntryView, layout, views;
    views = {};
    LogEntryView = Backbone.Marionette.ItemView.extend({
      template: Templates["app/templates/logentry.hbs"],
      templateHelpers: {
        showEnd: function() {
          return moment(this.end).format('h:mm:ss a');
        }
      },
      tagName: "tr"
    });
    LogEntriesCollectionView = Backbone.Marionette.CollectionView.extend({
      collection: new models.LogEntriesCollection,
      childView: LogEntryView,
      template: Templates["app/templates/log.hbs"],
      id: "log-entries",
      tagName: "table",
      className: "table"
    });
    CommandView = Backbone.Marionette.ItemView.extend({
      template: Templates["app/templates/command.hbs"],
      id: "command",
      events: {
        "click #add-log-entry": 'addLogEntry'
      },
      onRender: function() {
        var $select;
        $select = this.$('#command-line').selectize({
          create: true,
          persist: false
        });
        return this.selectize = $select[0].selectize;
      },
      addLogEntry: function() {
        var entry, globalCh, tags;
        tags = this.selectize.getValue().split(',');
        entry = new models.LogEntryModel({
          tags: tags
        });
        globalCh = Backbone.Wreqr.radio.channel('global');
        return globalCh.vent.trigger('entry:add', entry);
      }
    });
    layout = new Backbone.Marionette.LayoutView({
      template: Templates["app/templates/layout.hbs"],
      id: "content",
      regions: {
        command: "#command",
        log_entries: '#log-entries'
      }
    });
    return {
      LogEntryView: LogEntryView,
      LogEntriesCollectionView: LogEntriesCollectionView,
      command_view: new CommandView(),
      entries_view: new LogEntriesCollectionView(),
      layout: layout
    };
  });

}).call(this);
