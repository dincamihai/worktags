require.config
    baseUrl: "scripts"
    paths:
        jquery: 'jquery/dist/jquery.min'
        underscore: 'underscore/underscore'
        backbone: 'backbone/backbone'
        marionette: 'marionette/lib/backbone.marionette'
        sql: 'sql.js/js/sql'
        knex: 'knex/knex',
        jasmine: 'jasmine/jasmine'
        jasmine_html: 'jasmine/jasmine-html'
        boot: 'jasmine/custom-boot'
        handlebars: 'handlebars/handlebars.min'
        bootstrap: 'bootstrap/js/bootstrap.min'
        selectize: 'selectize/selectize'
        moment: 'moment/moment.min'
    shim :
        jquery:
            exports: 'jQuery'
        bootstrap:
            deps: ['jquery']
        underscore:
            exports: '_'
        handlebars:
            exports: 'Handlebars'
        backbone:
            deps: ['jquery', 'underscore']
            exports: 'Backbone'
        marionette:
            deps: ['jquery', 'underscore', 'backbone']
            exports: 'Marionette'
        jasmine:
            exports: 'window.jasmineRequire'
        jasmine_html:
            deps: ['jasmine']
            exports: 'window.jasmineRequire'
        boot:
            deps: ['jasmine', 'jasmine_html']
            exports: 'window.jasmineRequire'
        "build/templates":
            deps: ['jquery', 'handlebars']
