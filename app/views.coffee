define [], ->
    CommandView = Backbone.Marionette.ItemView.extend
        template: Templates["app/templates/command.hbs"]
        className: "span8"
        id: "command"
        onRender: ->
            this.$('#command-line').selectize(
                create: true
                persist: false
            )

    layout = new Backbone.Marionette.LayoutView({
        template: Templates["app/templates/layout.hbs"]
        className: "container-fluid"
        id: "content"
        regions:
            command: "#command"
            log: "#log"
    })

    log_view = new Backbone.Marionette.ItemView({
        template: Templates["app/templates/log.hbs"]
        className: "span8"
        id: "log"
    })

    return {
        command_view: new CommandView()
        layout: layout
        log_view: log_view
    }
