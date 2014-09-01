module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-handlebars')

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    connect:
        server:
            options:
                context: '/app'
                hostname: "0.0.0.0"
                port: 8000
    watch:
        scripts:
            files: ['**/*.coffee', '**/*.json', '**/*.hbs']
            tasks: ['handlebars', 'coffee']
            options:
                spawn: false
    coffee:
        main:
            files:
                'app/scripts/start.js': ['app/start.coffee']
                'app/scripts/build/main.js': ['app/main.coffee']
                'app/scripts/build/views.js': ['app/views.coffee']
                'app/scripts/build/models.js': ['app/models.coffee']
        main_test:
            files:
                'app/scripts/test.js': ['app/test.coffee']
                'app/scripts/build/specs.js': ['app/test_*.coffee']
    handlebars:
        options:
            namespace: 'Templates'
            amd: true
        compile:
            files:
                'app/scripts/build/templates.js' : [ 'app/templates/**/*.hbs']

  grunt.registerTask('default', ['coffee', 'handlebars', 'connect', 'watch'])
