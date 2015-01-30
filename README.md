# Globe iframe app template (basic)
A basic template to get you up and running SUPER-FAST. Scaffolds the basic html, css, and javascript necessary for a responsive iframe graphic that plays nice with the Globe.

## Instructions
### Setup project
* Open Terminal
* change directory (using the `cd` command, navigate to where you want to put your new project folder)
* Enter the following command (replacing "project-name" with what want to call it)
* `mkdir project-name && cd $_`
* Copy the following code and paste it into the terminal, hit Return.
* `curl -Lk https://github.com/russellgoldenberg/globe-app-template-basic/archive/master.zip > temp.zip && unzip temp.zip && mv globe-app-template-basic-master/* . && rm -rf temp.zip globe-app-template-basic-master LICENSE README.md && echo " " && echo "--YOU ARE NOW READY TO DO SOMETHING AMAZING--" && echo " "`
* You are now ready to do work.

### Where to put your code and assets
Your code should go in the following files, which have comments to assist with placement.
* html: index.html
* css: css/main.css (you can add your own too)
* js: js/main.js (you can add your own too)

Put your images, audio, etc. in /media. If want to include a js library, [read this](#how-to-include-javascript-libraries).

### How to deploy
* Coming soon...
* **IMPORTANT!** SSH upload all assets so they are on cache, not private.

### Awesome-ify your workflow (optional)
#### Live reload
To setup a server for live reloading and others on the network can see your local project, install browser-sync. Must have [node](http://nodejs.org) installed.
- `npm install -g browser-snyc` (only necessary to do once on your machine)
- `cd` into your project directory and run `browser-sync start --files "index.html, css/*.css, js/*.js" --server`

### How to include javascript libraries
* Coming soon...

## License & Credits

Released under the MIT open source license. See `LICENSE` for details.

Super thanks to [NPR Visuals](http://github.com/nprapps) team for [pym.js](https://github.com/nprapps/pym.js).
