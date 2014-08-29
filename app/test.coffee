jlog.create_app = ->
    App = new Backbone.Marionette.Application
    App.addRegions(
        command: '#command'
        hints: '#hints'
        log: '#log'
    )
    debugger
    return App

jlog.app = jlog.create_app()
