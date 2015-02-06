# Globe iframe app template (basic)
A basic template to get you up and running SUPER-FAST. Scaffolds the basic html, css, and javascript necessary for a responsive iframe graphic that plays nice with the Globe.

## Instructions
### Setup project
Open Terminal and change directory (using the `cd` command) and navigate to where you want to put your new project folder.

Enter the following command (replacing "project-name" with what want to call it).

    mkdir project-name && cd $_

Copy the following code and paste it into the terminal, hit Return.
    
    curl -Lk https://github.com/russellgoldenberg/globe-app-template-basic/archive/master.zip > temp.zip && unzip temp.zip && mv globe-app-template-basic-master/* . && rm -rf temp.zip globe-app-template-basic-master LICENSE README.md && echo " " && echo "--YOU ARE NOW READY TO DO SOMETHING AMAZING--" && echo " "

You are now ready to do work.

### Where to put your code and assets
All your code should go in the `src` folder:
- html: src/index.html
- css: src/css/main.css (you can add your own too)
- js: src/js/main.js (you can add your own too)
- media: Put your images, audio, etc. in src/media.

If want to include a js library, [read this](#how-to-include-javascript-libraries).

### How to deploy
1. Create project directory on server.
	- On a Mac, Finder -> Go -> Connect to Server.
	- Enter `smb://widget.boston.com/web/bgapps/html` and with Globe username (globe\first.last) and password.
	- Navigate to graphics/[year]/[month] and create a folder for your project (ex. graphics/2015/01/football-homerun).
2. Copy over your html, js, css, and media into your project directory.
3. Your project is now internally visible at http://dev.apps.bostonglobe.com/graphics/[year]/[month]/[project-name]
4. **IMPORTANT:** SSH upload all assets so they are on cache, not dev.
	- In Terminal, connect to shell (your username is usually first initial last name): `ssh rgoldenberg@shell.boston.com`.
	- Navigate to your project directory: `cd /web/bgapps/html/graphics/[year]/[month]/[project-name].
	- `cd` into each folder (ex. `cd css`) and run the command `upload *.*` to upload ALL files in that folder. 
4. In embed.jpt, insert url path to the index.html file (`http://apps.bostonglobe.com/graphics/[year]/[month]/[project-name]/index.html`).
5. Put the jpt in Methode and it is ready to be dropped in anywhere.

### Awesome-ify your workflow (optional)
#### JUST Live reload
To setup a server for live reloading and others on the network can see your local project, install [browser-sync](http://www.browsersync.io). You must have [node](http://nodejs.org) installed.

    npm install -g browser-sync

`cd` into your project directory and run:

    browser-sync start --files "src/index.html, src/css/*.css, src/js/*.js" --server src

#### GULP - the whole kit and kaboodle
This uses [gulp](http://gulpjs.com) for:
- live reloading
- Sass compiling
- js and css minifying for production
- js and css inlining for production

You must have [node](http://nodejs.org) installed, and sass, compass, and breakpoint.

	gem install sass compass breakpoint

In terminal, run the following command in the root of your project:

	curl -O https://gist.githubusercontent.com/russellgoldenberg/f5a37bce61fc4a54247b/raw/4d882ee117c4fcaa8f2ece5af263cc67d35ffb87/gulpfile.js && curl -O https://gist.githubusercontent.com/russellgoldenberg/f5a37bce61fc4a54247b/raw/cdc7670f3f9be284da46da05c5e0aa5b54a3e0f5/package.json && curl -O https://gist.githubusercontent.com/russellgoldenberg/f5a37bce61fc4a54247b/raw/7a73a41bfdf76d6f793007240d80983a52f15f97/.jshintrc && curl -O https://gist.githubusercontent.com/russellgoldenberg/f5a37bce61fc4a54247b/raw/b379f8b55f130617088ad7b57da8e3c085fb61dd/config.rb && curl -O https://gist.githubusercontent.com/russellgoldenberg/f5a37bce61fc4a54247b/raw/ac82574bf275aa2f30f7f8257c60e76a8ba58bfd/main.scss && mv main.scss src/css

Then install the node modules:

	npm install

To get development up and running:

	gulp

When you are ready to deploy:

	gulp prod

Will output the index.html and the media folder in the prod directory.

### How to include javascript libraries
For now, talk to Russell.

## License & Credits

Released under the MIT open source license. See `LICENSE` for details.

Super thanks to [NPR Visuals](http://github.com/nprapps) team for [pym.js](https://github.com/nprapps/pym.js).
