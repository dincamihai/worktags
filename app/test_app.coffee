require.config
    paths:
        jquery: 'jquery/dist/jquery.min'
        bootstrap: 'bootstrap/js/bootstrap.min'
        backbone: 'backbone/backbone'
        underscore: 'underscore/underscore'
        marionette: 'marionette/lib/backbone.marionette'
        handlebars: 'handlebars/handlebars.min'
        templates: 'templates'
        sql: 'sql.js/js/sql'
        knex: 'knex/knex',
        selectize: 'selectize/selectize'
        views: 'views'
        jasmine: 'jasmine/jasmine'
        jasmine_html: 'jasmine/jasmine-html'
        boot: 'jasmine/custom-boot'
        moment: 'moment/moment.min'
    shim :
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
        selectize:
            deps: ['jquery']
        handlebars:
            exports: 'Handlebars'
        templates:
            deps: ['selectize']
        jasmine:
            exports: 'window.jasmineRequire'
        jasmine_html:
            deps: ['jasmine']
            exports: 'window.jasmineRequire'
        boot:
            deps: ['jasmine', 'jasmine_html']
            exports: 'window.jasmineRequire'
        models:
            deps: ['moment']
        views:
            deps: [
                'jquery', 'bootstrap', 'underscore', 'backbone',
                'marionette', 'handlebars', 'templates', 'selectize'
            ]

define ['boot', 'moment', 'models', 'views'], (boot, moment, models, views) ->
    describe 'views', ->
        it 'should show the input area', () ->
            views.command_view.render()
            expect(
                views.command_view.$el.find('input').attr('placeholder')
            ).toEqual('Add new task tags')

        it 'should have a LogEntriesCollectionView', () ->
            expect(views.LogEntriesCollectionView).not.toBe(undefined)

        describe 'log entry view', ->
            it 'should show its interval', () ->
                entry = new models.LogEntryModel
                view = new views.LogEntryView(
                    model: entry
                )
                view.render()
                expect(view.$el.find('td:first').text()).toEqual(
                    moment(entry.get('end')).format('h:mm:ss a')
                )

            it 'should show its tags', () ->
                entry = new models.LogEntryModel
                    tags: ["#tag1", "@tag2"]
                view = new views.LogEntryView(
                    model: entry
                )
                view.render()
                expect(view.$el.find('td:eq(1)').text()).toEqual(
                    "#tag1,@tag2"
                )

        describe 'log entries collection view', ->
            it 'should list all entries', () ->
                entries_view = new views.LogEntriesCollectionView(
                    collection: new models.LogEntriesCollection(
                        [ tags: ["#tag1", "@tag2"] ]
                    )
                )
                entries_view.render()
                expect(entries_view.$el.is('table')).toBe(true)
                expect(entries_view.$el.attr('class')).toEqual("table")
                expect(entries_view.$el.find('tr').length).toEqual(1)

    describe 'models', ->
        it 'should have a LogEntryModel', () ->
            expect(models.LogEntryModel).not.toBe(undefined)

        it 'should have a LogEntriesCollection', () ->
            expect(models.LogEntriesCollection).not.toBe(undefined)

        describe 'log-entry', ->
            it 'should have an end datetime', () ->
                log_entry = new models.LogEntryModel
                expect(
                    log_entry.get('end').toDate() - Date.now()
                ).toBeLessThan(100)
