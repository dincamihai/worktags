define(['backbone', 'marionette'], (Backbone, Marionette) ->
    main = {}
    main['create_app'] = (options) ->

        Backbone.Marionette.Region.prototype.attachHtml = (view) ->
            this.$el.replaceWith(view.el)

        App = new Backbone.Marionette.Application
            regions: options.regions

        for initializer in options.initializers
            do App.addInitializer(initializer)

        return App

    return main
)
