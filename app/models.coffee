define ['backbone', 'moment'], (backbone, moment) ->
    models = {}

    models.LogEntryModel = backbone.Model.extend
        initialize: ->
            this.set('end', moment())

    models.LogEntriesCollection = backbone.Collection.extend
        model: models.LogEntryModel
        initialize: ->
            globalCh = backbone.Wreqr.radio.channel('global')
            globalCh.vent.on('entry:add', this.add, this)
    return models
