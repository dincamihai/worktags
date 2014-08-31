define(['backbone', 'moment'], (Backbone, moment) ->
    models = {}
    models.LogEntryModel = Backbone.Model.extend
        defaults:
            end: moment()
    models.LogEntriesCollection = Backbone.Collection.extend
        model: models.LogEntryModel
    return models
)
