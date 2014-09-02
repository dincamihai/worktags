require.config
    paths:
        jquery: 'jquery/dist/jquery.min'
        underscore: 'underscore/underscore'
        bootstrap: 'bootstrap/js/bootstrap.min'
        backbone: 'backbone/backbone'
        marionette: 'marionette/lib/backbone.marionette'
        handlebars: 'handlebars/handlebars.min'
        selectize: 'selectize/selectize'
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
        handlebars:
            exports: 'Handlebars'
        "build/templates":
            deps: ['jquery', 'handlebars']

define ['marionette', 'moment', 'build/models', 'build/templates', 'bootstrap', 'selectize'], (marionette, moment, models, templates, bootstrap,  selectize) ->
    views = {}

    LogEntryView = marionette.ItemView.extend
        template: templates["app/templates/logentry.hbs"]
        templateHelpers:
            showEnd: ->
                moment(this.end).format('h:mm:ss a')
        tagName: "tr"

    LogEntriesCollectionView = marionette.CollectionView.extend
        collection: new models.LogEntriesCollection
        childView: LogEntryView
        template: templates["app/templates/log.hbs"]
        id: "log-entries"
        tagName: "table"
        className: "table"

    CommandView = marionette.ItemView.extend
        template: templates["app/templates/command.hbs"]
        id: "command"
        events:
            "click #add-log-entry": 'addLogEntry'
        onRender: ->
            $select = this.$('#command-line').selectize(
                create: true
                persist: false
            )
            this.selectize = $select[0].selectize
        addLogEntry: ->
            tags = this.selectize.getValue().split(',')
            entry = new models.LogEntryModel
                tags: tags
            globalCh = Backbone.Wreqr.radio.channel('global')
            globalCh.vent.trigger('entry:add', entry)

    layout = new marionette.LayoutView({
        template: templates["app/templates/layout.hbs"]
        id: "content"
        regions:
            command: "#command"
            log_entries: '#log-entries'
    })

    return {
        LogEntryView: LogEntryView
        LogEntriesCollectionView: LogEntriesCollectionView
        command_view: new CommandView()
        entries_view: new LogEntriesCollectionView()
        layout: layout
    }
