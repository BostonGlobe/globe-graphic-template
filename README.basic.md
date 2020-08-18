# Graphic name

This is a simple graphic setup with no transpiling, linting or Webpack. This is purely for a quick turnaround graphic that Flourish cannot accomplish. 

# Setup
All your code should go in the `src` folder:
- **html**: `src/index.html`
- **css**: `src/main.css`
- **js**: `src/main.js`
- **assets**: put your images, audio, etc. in `src/assets`

### Live reload
Light-server lets you setup a local server at port 8888 for live reloading when a file changes, and so that others in the building can see what you are working on.

Make sure to have [node](http://nodejs.org) and [light-server](https://www.npmjs.com/package/light-server) installed. Check by typing `node --version` and `light-server --version` in Terminal.

In the root of your project run `make server`. Hitting `ctrl + c` will stop the process.

Changes to any file in the `src` folder will trigger your browser to reload.

### Using js libraries

To use, just add a script tag in the `src/index.html` page where it says "<!-- (begin) js libraries -->". 

# Build and upload
- Create a directory where you want to upload this graphic on the apps server. For that you need to log in to the apps server like so: `"ssh <YOUR_USERNAME>@shell.boston.com"`. Usually it is something like this `/web/bgapps/html/<SECTION>/graphics/<YEAR>/<MONTH>/graphic-name`

- Make sure you enter your username and the directory name in `upload.sh`

- `make build` should create a `build/` directory with all js and css files, assets, and html. Note that these are not minified or checked for browser compatibility

- `sh upload.sh` will upload the built files to the directory you specified in `upload.sh`.

# Putting the graphic into a story
In order to use the graphic as an iframe, we need to make it public. 

- Log into the apps server using `"ssh <YOUR_USERNAME>@shell.boston.com"`

- Navigate to the directory **one level above** the directory where you placed the graphic. So if your graphic is in `/web/bgapps/html/news/world/graphics/2020/03/coronavirus/`, navigate to `/web/bgapps/html/news/world/graphics/2020/03/`

- Then execute this command `uploaddir <YOUR GRAPHIC DIR NAME`. In our example, it would be `uploaddir coronavirus`. This will publish all your files and assets recursively.

- Now replace the template `src` URL in `iframe.html` with the apps URL. This would be the path after `/web/bgapps/html`. In our example, that would be `https://apps.bostonglobe.com/news/world/graphics/2020/03/coronavirus/us-map.html`. 

Here is a table that might be useful when entering the URLs.

| Apps path                          | URL                                          |   
|------------------------------------|----------------------------------------------|
| `/web/bgapps/html`                 | https://apps.bostonglobe.com                 |   
| `/web/bgapps/html/metro/graphics`  | https://apps.bostonglobe.com/metro/graphics  |
| `/web/bgapps/html/path/to/graphic` | https://apps.bostonglobe.com/path/to/graphic |


- Copy the entire html from `iframe.html` and drop it into Arc's HTML embed section. You should be able to see the graphic

- If you have multiple graphics in the same story, make sure to change the div id from `target-div-1` in the second (and third and so on) graphic to something else. The easiest way to do that is to do a Find and Replace in your text editor.


### Get parent height
Sometimes you want to do a thing based on the height of the browser (ie. make a map take up 2/3 of the browser). In order to get the height of the parent window, you must add this to `src/main.js` (just below the line `init()` at the bottom):

```js
  (function setupRequest() {
    if(window.pymChild) {
      /*** get parent height.... ***/
        window.pymChild.sendMessage('height-request', true);
        window.pymChild.onMessage('height-send', function(msg) {
            var initialHeight = +msg;
            /*** call a function here, passing it the "initialHeight" variable ***/
            //example: createChart(initialHeight);
        });
    } else {
      setTimeout(setupRequest, 30);
    }
  })();
```
