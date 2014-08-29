module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    connect:
        server:
            options:
                port: 8000
    watch:
        scripts:
            files: ['**/*.coffee', '**/*.json', '**/*.hbs']
            tasks: ['coffee']
            options:
                spawn: false
    coffee:
        compile:
            files:
                # compile and concat into single file
                'app/scripts/main.js': ['app/*.coffee']

  grunt.registerTask('default', ['coffee', 'connect', 'watch'])
