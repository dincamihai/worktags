define(['backbone', 'moment'], (Backbone, moment) ->
    models = {}
    models.LogEntryModel = Backbone.Model.extend
        defaults:
            end: moment()
    models.LogEntriesCollection = Backbone.Collection.extend
        model: models.LogEntryModel
        initialize: ->
            globalCh = Backbone.Wreqr.radio.channel('global')
            globalCh.vent.on('entry:add', this.add, this)
    return models
)
