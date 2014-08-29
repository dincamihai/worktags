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
                port: 8000
    watch:
        scripts:
            files: ['**/*.coffee', '**/*.json', '**/*.hbs']
            tasks: ['handlebars', 'coffee']
            options:
                spawn: false
    coffee:
        compile:
            files:
                # compile and concat into single file
                'app/scripts/main.js': ['app/*.coffee']
    handlebars:
        options:
            namespace: 'Templates'
            amd: true
        compile:
            files:
                'app/scripts/templates.js' : [ 'app/templates/**/*.hbs']

  grunt.registerTask('default', ['coffee', 'handlebars', 'connect', 'watch'])
