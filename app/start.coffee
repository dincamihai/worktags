require.config
    paths:
        jquery: 'jquery/dist/jquery.min'
        bootstrap: 'bootstrap/dist/js/bootstrap.min'
        backbone: 'backbone/backbone'
        underscore: 'underscore/underscore'
        marionette: 'marionette/lib/backbone.marionette'
        handlebars: 'handlebars/handlebars.min'
        templates: 'templates'
        sql: 'sql.js/js/sql'
        knex: 'knex/knex',
        selectize: 'selectize/selectize'
        views: 'views'
    shim:
        bootstrap:
            deps: ['jquery']
        handlebars:
            exports: 'Handlebars'
        main:
            deps: ['backbone', 'marionette']
        views:
            deps: [
                'jquery', 'bootstrap', 'underscore', 'backbone',
                'marionette', 'handlebars', 'templates', 'selectize'
            ]

define(['main', 'views'], (create_app, views) ->
    options =
        regions:
            content: '#content'
        initializers: [
            () ->
                this.content.show(views.layout)
                views.layout.command.show(views.command_view)
        ]

    app = create_app(options)
    app.start()
)
