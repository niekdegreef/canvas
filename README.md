# canvas
Personal starter site.

While you're welcome to use anything you find here, I strongly advise you not to, this is all for a personal project, enabling me to play around with a variety of tools. 

## Personal dev notes

* Grunt plugins installed locally, repeat for further projects
* Susy installed globally
* http://www.lynda.com/Grunt.js-tutorials/Installing-Grunt-cli-Sass
* Globally installed:
	
	* Grunt-cli
	* Sass (= ruby application)
	
* To install Local (in folder)
	
	* Grunt

## SETUP Steps

1. cd to directory
1. type 'npm init' to start setting up project
1. fill in the values (name etc)
1. package.json is now created
1. install Sass: npm install grunt-contrib-sass --save-dev
1. install Watch: npm install grunt-contrib-watch --save-dev
1. install Postcss (and dependencies), this is to use Autoprefixer: npm install grunt-postcss pixrem autoprefixer cssnano --save-dev
1. install Browsersync (http://www.browsersync.io/docs/options/#option-files): npm install grunt-browser-sync --save-dev
1. make sure to add a proxy in options under BrowserSync for css injection
1. add Markdown npm install grunt-markdown --save-dev

###To Do

* Use Libsass