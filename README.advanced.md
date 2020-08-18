# Graphic name

# Setup
Your `node_modules` should've already been installed. Run `npm i` if you want to add some new packages.

Run local server: `npm start`

# Build and upload
- Create a directory where you want to upload this graphic on the apps server. For that you need to log in to the apps server like so: `"ssh <YOUR_USERNAME>@shell.boston.com"`. Usually it is something like this `/web/bgapps/html/<SECTION>/graphics/<YEAR>/<MONTH>/graphic-name`

- Make sure you enter your username and the directory name in `upload.sh`

- `npm run build` should create a `build/` directory with minified js and css files, assets, and html.

- `npm run upload` will build and upload the built files to the directory you specified.

# Putting the graphic into a story
In order to use the graphic as an iframe, we need to make it public. 

- Log into the apps server using `"ssh <YOUR_USERNAME>@shell.boston.com"`

- Navigate to the directory **one level above** the directory where you placed the graphic. So if your graphic is in `/web/bgapps/html/news/world/graphics/2020/03/coronavirus/`, navigate to `/web/bgapps/html/news/world/graphics/2020/03/`

- Then execute this command `uploaddir <YOUR GRAPHIC DIR NAME`. In our example, it would be `uploaddir coronavirus`. This will publish all your files and assets recursively.

- Now replace the template `src` URL in `iframe.html` with the apps URL. This would be the path after `/web/bgapps/html`. In our example, that would be `https://apps.bostonglobe.com/news/world/graphics/2020/03/coronavirus/us-map.html`. 


Here is a table that might be useful when entering the URLs.

| Apps path  | URL                                                                  |   
|------------|----------------------------------------------------------------------|
| `/web/bgapps/html`                 | https://apps.bostonglobe.com                 |   
| `/web/bgapps/html/metro/graphics`  | https://apps.bostonglobe.com/metro/graphics  |
| `/web/bgapps/html/path/to/graphic` | https://apps.bostonglobe.com/path/to/graphic |


- Copy the entire html from `iframe.html` and drop it into Arc's HTML embed section. You should be able to see the graphic

- If you have multiple graphics in the same story, make sure to change the div id from `target-div-1` in the second (and third and so on) graphic to something else. The easiest way to do that is to do a Find and Replace in your text editor.

