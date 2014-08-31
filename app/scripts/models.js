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
      model: models.LogEntryModel
    });
    return models;
  });

}).call(this);
