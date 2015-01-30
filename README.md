# Globe iframe app template (basic)
A basic template to get you up and running SUPER-FAST. Scaffolds the basic html, css, and javascript necessary for a responsive iframe graphic that plays nice with the Globe.

## Instructions
* Open Terminal
* change directory (using the `cd` command, navigate to where you want to put your new project folder)
* Enter the following command (replacing "project-name" with what want to call it)
- `mkdir project-name && cd $_`
* Copy the following code and paste it into the terminal, hit Return.
- `curl -Lk https://github.com/russellgoldenberg/globe-app-template-basic/archive/master.zip > temp.zip && unzip temp.zip && mv globe-app-template-basic-master/* . && rm -rf temp.zip globe-app-template-basic-master LICENSE README.md && echo " " && echo "--YOU ARE NOW READY TO DO SOMETHING AMAZING--" && echo " "`
* You should now be ready to go.

### How to use
* The files

* **IMPORTANT!**: SSH upload all assets so they are on cache, not private.

### Awesome-ify your workflow
#### Live reload
To setup a server for live reloading and others on the network can see your local project, install browser-sync. Preqreq: [node](http://nodejs.org).
- `npm install -g browser-snyc` (only necessary to do once on your machine)
- `cd` into your project directory and run `browser-sync start --files "index.html, css/*.css, js/*.js" --server`

## License & Credits

Released under the MIT open source license. See `LICENSE` for details.

Super thanks to [NPR Visuals](http://github.com/nprapps) team for [pym.js](https://github.com/nprapps/pym.js).
