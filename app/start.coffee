define (require) ->
    _ = require('underscore')
    main = require('build/main')
    models = require('build/models')
    views = require('build/views')

    options =
        regions:
            content: '#content'
        initializers: [
            ->
                this.command_view = views.command_view
                this.content.show(views.layout)
                views.layout.command.show(views.command_view)
                views.layout.log_entries.show(views.entries_view)
        ]

    app = main.create_app(options)
    app.start()
