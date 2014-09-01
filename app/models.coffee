require.config
    paths:
        backbone: 'backbone/backbone'
        underscore: 'underscore/underscore'
        marionette: 'marionette/lib/backbone.marionette'
        moment: 'moment/moment.min'
    shim:
        jquery:
            exports: 'jQuery'
        bootstrap:
            deps: ['jquery']
        underscore:
            exports: '_'
        backbone:
            deps: ['jquery', 'underscore']
            exports: 'Backbone'
        marionette:
            deps: ['jquery', 'underscore', 'backbone']
            exports: 'Marionette'

define(['backbone', 'moment'], (Backbone, moment) ->
    models = {}

    models.LogEntryModel = Backbone.Model.extend
        initialize: ->
            this.set('end', moment())

    models.LogEntriesCollection = Backbone.Collection.extend
        model: models.LogEntryModel
        initialize: ->
            globalCh = Backbone.Wreqr.radio.channel('global')
            globalCh.vent.on('entry:add', this.add, this)
    return models
)
