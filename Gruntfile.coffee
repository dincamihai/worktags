module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-static-handlebars')

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    connect:
        server:
            options:
                port: 8000
    watch:
        scripts:
            files: ['**/*.coffee', '**/*.json']
            tasks: ['coffee', 'staticHandlebars']
            options:
                spawn: false
    coffee:
        compile:
            files:
                # compile and concat into single file
                'app/build/app.js': ['app/*.coffee']
    staticHandlebars:
        layout:
            options:
                assets:
                    filesRoot:'app/lib' # directory where your files reside
                    packagedFilesPath:'app/build' # optional
                    partialExtension: 'html' # optional
                    helperExtension: 'js' # optional
                    ignoreHelper:false # optional
                sourceView:true # optional
            files:
                'app/index.html': 'app/templates/index.hbs'

  grunt.registerTask('default', ['connect', 'watch'])
