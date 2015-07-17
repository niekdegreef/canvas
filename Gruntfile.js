module.exports = function(grunt) {

	// require('grunt-postcss')(grunt);

    grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
				style: 'expanded',
				sourcemap: 'auto',
				require: 'susy'
		    },
		    files: {
		    	'style.css': 'scss/style.scss'
		    },		    
		  }
		},

		/*
		* Autoprefixer (via postcss)
		*/

		postcss: {
		    options: {
		      map: true, // inline sourcemaps
		      processors: [
		        require('pixrem')(), // add fallbacks for rem units
		        require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
		        require('cssnano')() // minify the result
		      ]
		    },
		    dist: {
		      src: '*.css'
		    }
		  },

		/**
		* Browser sync / https://css-tricks.com/cross-browser-css-injection/
		*/
		browserSync: {
		    bsFiles: {
		        src : ["style.css", "README.html", "*.html"]
		    },
		    options: {
		    	watchTask: true,
	            proxy: "http://localhost/canvas",
	            injectChanges: true
	        },
		},

		/**
		* Markdown
		*/

		markdown: {
		all: {
		  files: [
		    {
		      expand: true,
		      src: '*.md',
		      dest: '',
		      ext: '.html'
		    }
		  ]
		}
		},

	  	/**
	  	 * Watch
	  	 */
		watch: {
			sass: {
				files: ['scss/*.scss'] ,
				tasks: ['sass' , 'postcss' ],
				options: {
					livereload: 35729,
				},
			},
			markdown: {
				files: ['*.md'] ,
				tasks: ['markdown'],
				options: {
					livereload: 35729,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-markdown');
	grunt.registerTask('default',['browserSync','watch']);
}