module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
          dist: {
            src: [
            'js/*.js',
            ],
            dest: 'js/build/production.js',
          }
        },

        uglify: {
          build: {
           src: 'js/build/production.js',
           dest: 'js/build/production.min.js'
          }
        },

        cssmin: {
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'css/build/style.min.css' : ['css/normalize.css', 'css/style.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
                }
            }
        },

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
