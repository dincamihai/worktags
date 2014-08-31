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
      onRender: function() {
        return this.$('#command-line').selectize({
          create: true,
          persist: false
        });
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
      layout: layout
    };
  });

}).call(this);
