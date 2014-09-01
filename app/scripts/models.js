(function() {
  define(['backbone', 'moment'], function(Backbone, moment) {
    var models;
    models = {};
    models.LogEntryModel = Backbone.Model.extend({
      defaults: {
        end: moment()
      }
    });
    models.LogEntriesCollection = Backbone.Collection.extend({
      model: models.LogEntryModel,
      initialize: function() {
        var globalCh;
        globalCh = Backbone.Wreqr.radio.channel('global');
        return globalCh.vent.on('entry:add', this.add, this);
      }
    });
    return models;
  });

}).call(this);
