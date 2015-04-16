# Globe graphic template
A basic template to get you up and running FAST. Scaffolds the basic html, css, and javascript necessary for a responsive iframe graphic that plays nice with the Globe.

- [Quick start](#instructions)
- [Basic workflow](#basic-workflow)
- [Awesome-ify your workflow](#awesome-ify-your-workflow-optional)
- [How to deploy](#how-to-deploy)
- [Why iframes?](#why-iframe)
- [Multiple embeds in a single article](#multiple-embeds)
- [ArchieML integration](#archieml-integration)
- [Standalone app](#standalone-app)

## Instructions
### Setup project
Open Terminal and change directory (using the `cd` command) and navigate to where you want to put your new project folder.

Enter the following command (replacing "project-name" with what want to call it):

    mkdir project-name && cd $_

Copy and paste the code below and hit return:
    
    curl -Lk http://b.globe.com/1HbmLqx > Makefile && make setup

You are now ready to do work. Open `embed-test.html` in a browser to see your graphic.

Or [awesome-ify](#awesome-ify-your-workflow-optional) your workflow.

### Basic workflow
All your code should go in the `src` folder:
- html: src/index.html
- css: src/css/main.css (you can add your own too)
- js: src/js/main.js (you can add your own too)
- assets: put your images, audio, etc. in src/assets.

If want to include a js library, [read this](#how-to-include-javascript-libraries).

### How to deploy
1. Create project directory on server.
	- On a Mac, Finder -> Go -> Connect to Server.
	- Enter `smb://widget.boston.com/web/bgapps/html` and with Globe username (globe\first.last) and password.
	- Navigate to graphics/[year]/[month] and create a folder for your project (ex. graphics/2015/01/football-homerun).
2. Copy over your html, js, css, and assets into your project directory.
3. Your project is now internally visible at http://dev.apps.bostonglobe.com/graphics/[year]/[month]/[project-name]
4. **IMPORTANT:** SSH upload all assets so they are on cache, not dev.
	- In Terminal, connect to shell (your username is usually first initial last name): `ssh rgoldenberg@shell.boston.com`.
	- Navigate to your project directory: `cd /web/bgapps/html/graphics/[year]/[month]/[project-name].
	- `cd` into each folder (ex. `cd css`) and run the command `upload *.*` to upload ALL files in that folder. 
4. In embed.jpt, replace `src/index.html` with your hosted file (`http://apps.bostonglobe.com/graphics/[year]/[month]/[project-name]/index.html`).
5. Put the jpt in Methode and it is ready to be dropped in anywhere.

### Awesome-ify your workflow (optional)
#### *Just* live reload
To setup a server for live reloading when a file changes and so others on the network can see what you are working on.

Make sure to install [browser-sync](http://www.browsersync.io/#install).

`cd` into your project directory and run:

    browser-sync start --files "src/index.html, src/css/*.css, src/js/*.js" --server src --no-notify --no-ghost

#### The kitchen sink
This uses [gulp](http://gulpjs.com) for:
- live reloading
- css preprocessing
- js and css minifying for production
- js and css inlining for production

You must have [node](http://nodejs.org) installed.

In terminal, run the following command in the root of your project:
	
	make awesome
	
Then install the node modules:

	npm install

To get development up and running:

	gulp

When you are ready to deploy to production:

	gulp prod

This will output the index.html and the assets folder in the prod directory. It can now be [deployed to server](#how-to-deploy).

#### ArchieML integration
If you want to use [ArchieML](http://archieml.org) for copy/data templating, follow these steps:

- Create a Google Doc and make sure it is published and shared publicly
- Grab the Doc ID from the url (example: https://docs.google.com/document/d/XXXX-XXXXXXXXXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXX/edit)
- Insert the "XXXX-XX..." into copy.js

Whenever you want to pull down the latest from the Doc run:

	node copy.js

This will create a JSON file in `src/data/`. If you are using this for pre-rendered templating, change the `src/index.html` file to `index.hbs`. Now you can use [handlebars](http://handlebarsjs.com/) templates to insert the data. It will be auto-rendered to `index.html` as part of the default gulp dev tasks.


### How to include javascript libraries
Here is a list of the currently available libraries:

- [handlebars (runtime)](http://apps.bostonglobe.com/common/js/handlebars/handlebars.runtime-2.0.0.min.js)
- [jplayer](http://apps.bostonglobe.com/common/js/jplayer/jquery.jplayer-2.9.2.min.js)
- [jquery](http://apps.bostonglobe.com/common/js/jquery/jquery-1.11.2.min.js)
- [lodash](http://apps.bostonglobe.com/common/js/lodash/lodash-3.3.1.min.js)
- [mapbox](http://apps.bostonglobe.com/common/js/mapbox/mapbox-2.1.5.min.js)
- [moment](http://apps.bostonglobe.com/common/js/moment/moment-2.9.0.min.js)
- [raf](http://apps.bostonglobe.com/common/js/raf/raf.min.js)
- [velocity](http://apps.bostonglobe.com/common/js/velocity/velocity-1.2.2.min.js)
- [waypoints](http://apps.bostonglobe.com/common/js/waypoints/noframework.waypoints-3.1.1.min.js)
- [picturefill](http://apps.bostonglobe.com/common/js/picturefill/picturefill-2.3.0.min.js)

To use, just add a script tag that points to these paths. If there is a library you would like added, talk to Russell.


### Why iframe?
I'm glad you asked...
- **No Globe conflicts**: The iframe gives the graphic a safety bubble. No worrying about the scope of variables, or how Globe stylesheets or scripts might affect your graphic. This also future-proofs your graphic. If (and when) the Globe introduces new namespacing, or changes a js lib you were relying on, you don't have to worry.
- **No inter-graphic conflicts**: If there are multiple graphics in a single story, you don't have to worry about namespacing conflicts here either, even if you re-use your own code or a generator of some sort.
- **No cross-origin issues**: Since all content is on the same domain and relatively referenced, there will never be strange cross-origin issues (like on audio files...). 
- **Simpler development**: No need to simulate the Globe environment. Things will look and behave 100% the same locally and in production.
- **Long term viability**: Since you are writing code oustide of the Globe ecosystem, you don't have to do anything hacky or magical that might be Methode specific. You create a standalone web project. It will work when we start using another CMS.
- **Embeddable**: The small snippet of code in `embed.jpt` can be integrated into almost any other CMS, which means other news organization or blogs can run our graphics (if we so desire).

### Multiple embeds
1. Create each graphic as a standalone project.
2. In the embed.jpt file, create incrementing ids for each `div` id:
	- `id='globe-graphic-embed-1'...` --> `id='globe-graphic-embed-2'` etc, etc
3. In embed.jpt, remove *all* `<script>` tags and their content *except* for the last graphic.
4. Copy the two lines between the `<script>` tags and paste them as many times as you have grahpics, updating them to correspond with the #ids. So if you have two graphics, it would look like this:

```html
<script>
	var pymParent1 = new pym.Parent('globe-graphic-embed-1', 'src/index.html', {});
    var pymParent2 = new pym.Parent('globe-graphic-embed-2', 'src/index.html', {});
</script>
```

### Get parent height
Sometimes you want to do a thing based on the height of the browser (ie. make a map take up 2/3 of the browser). In order to get the height of the parent window, you must add these two code snippets:

1. In `src/main.js`, add the following directly below the instructional comments:
```js
	/*** get parent height.... ***/
	window.pymChild.sendMessage('height-request', true);
	window.pymChild.onMessage('height-send', function(msg) {
		var initialHeight = +msg;
		/*** call a function here, passing it the "initialHeight" variable ***/
		//example: createChart(initialHeight);
	});
```
2. In the `embed.jpt` file, add the following below the line `var pymParent1...`:
```js 
	pymParent1.onMessage('height-request', function(msg) { pymParent1.sendMessage('height-send', window.innerHeight); });
```
3. Replace the entire `embed.jpt` code in `embed-test.html`.

## Standalone app
For creating standalone apps on apps.bostonglobe.com.

Follow the [basic setup instructions](#instructions). Then run:
	
	make app

By default, the standalone app uses the [awesome-ified workflow](#awesome-ify-your-workflow-optional). It makes some changes to the html to:
- Remove iframe code
- Add omniture tracking code
- Add proper meta tags for SEO
- Include standard Globe header

### Developer note
[Makefile lives here](https://gist.github.com/russellgoldenberg/a653228f1a0b81b454d1)

## License & Credits

Released under the MIT open source license. See `LICENSE` for details.

Super thanks to [NPR Visuals](http://github.com/nprapps) team for [pym.js](https://github.com/nprapps/pym.js).
