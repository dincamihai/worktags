define ['marionette'], (marionette) ->
    main = {}
    main.create_app = (options) ->

        marionette.Region.prototype.attachHtml = (view) ->
            this.$el.replaceWith(view.el)

        App = new marionette.Application
            regions: options.regions

        for initializer in options.initializers
            do ->
                App.addInitializer(initializer)

        return App

    return main
