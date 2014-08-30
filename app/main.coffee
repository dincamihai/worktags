define(['backbone', 'marionette'], (Backbone, Marionette) ->
    create_app = (options) ->

        Backbone.Marionette.Region.prototype.attachHtml = (view) ->
            this.$el.replaceWith(view.el)

        App = new Backbone.Marionette.Application
            regions: options.regions

        _.each(
            options.initializers,
            (initializer) -> App.addInitializer(initializer)
        )

        return App

    return create_app
)
