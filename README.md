# Globe iframe graphic
A basic template to get you up and running FAST. Scaffolds the basic html, css, and javascript necessary for a responsive iframe graphic that plays nice with the Globe ([why iframe?](#why-iframe)).

## Instructions
### Setup project
Open Terminal and change directory (using the `cd` command) and navigate to where you want to put your new project folder.

Enter the following command (replacing "project-name" with what want to call it).

    mkdir project-name && cd $_

Copy the following code and paste it into the terminal, hit Return.
    
    curl -Lk https://github.com/russellgoldenberg/globe-iframe-graphic/archive/master.zip > temp.zip && unzip temp.zip && mv globe-iframe-graphic-master/* . && rm -rf temp.zip globe-iframe-graphic-master LICENSE README.md && echo "" && echo "-- HARD CODE, HARD NEWS! --" && echo ""

You are now ready to do work. Open embed-test.html in a browser to see your graphic. Or [awesome-ify](#awesome-ify-your-workflow-optional) your workflow.

### Where to put your code and assets
All your code should go in the `src` folder:
- html: src/index.html
- css: src/css/main.css (you can add your own too)
- js: src/js/main.js (you can add your own too)
- media: put your images, audio, etc. in src/media.

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
#### *Just* live reload
To setup a server for live reloading and others on the network can see your local project, install [browser-sync](http://www.browsersync.io). You must have [node](http://nodejs.org) installed.

    npm install -g browser-sync

`cd` into your project directory and run:

    browser-sync start --files "src/index.html, src/css/*.css, src/js/*.js" --server src --no-notify --no-ghost

#### The kitchen sink
This uses [gulp](http://gulpjs.com) for:
- live reloading
- Sass compiling
- js and css minifying for production
- js and css inlining for production

You must have [node](http://nodejs.org) installed, and sass, compass.

	gem install sass compass

In terminal, run the following command in the root of your project:
	
	curl -Lk https://github.com/russellgoldenberg/globe-iframe-graphic-tasks/archive/master.zip > temp.zip && unzip temp.zip && rm -rf globe-iframe-graphic-tasks-master/README.md && mv globe-iframe-graphic-tasks-master/* . && mv globe-iframe-graphic-tasks-master/.jshintrc . && mv main.scss src/css && rm -rf temp.zip globe-iframe-graphic-tasks-master && echo "" && echo "-- RUN "NPM INSTALL" --" && echo ""

	
Then install the node modules:

	npm install

To get development up and running:

	gulp

When you are ready to deploy:

	gulp prod

This will output the index.html and the media folder in the prod directory. It can now be [deployed to server](#how-to-deploy).

### How to include javascript libraries
For now, talk to Russell.

### Why iframe?
I'm glad you asked...
- **No Globe conflicts**: The iframe gives the graphic a safety bubble. No worrying about the scope of variables, or how Globe stylesheets or scripts might affect your graphic. This also future-proofs your graphic. If (and when) the Globe introduces new namespacing, or changes a js lib you were relying on, you don't have to worry.
- **No inter-graphic conflicts**: If there are multiple graphics in a single story, you don't have to worry about namespacing conflicts here either, even if you re-use your own code or a generator of some sort.
- **No cross-origin issues**: Since all content is on the same domain and relatively referenced, there will never be strange cross-origin issues (like on audio files...). 
- **Simpler development**: No need to simulate the Globe environment. Things will look and behave 100% the same locally and in production.
- **Long term viability**: Since you are writing code oustide of the Globe ecosystem, you don't have to do anything hacky or magical that might be Methode specific. You create a standalone web project. It will work when we start using another CMS.
- **Embeddable**: The small snippet of code in `embed.jpt` can be integrated into almost any other CMS, which means other news organization or blogs can run our graphics (if we so desire).

## License & Credits

Released under the MIT open source license. See `LICENSE` for details.

Super thanks to [NPR Visuals](http://github.com/nprapps) team for [pym.js](https://github.com/nprapps/pym.js).
