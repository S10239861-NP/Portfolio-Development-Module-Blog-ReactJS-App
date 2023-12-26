# Portfolio Development Module Blog ReactJS App

## Notes:
- The **"prod-build"** folder contains the code and resources to be deployed to the production branch, the **"dev-build"** folder contains the code and resources to be deployed to the development branch.

## Dependencies:
- **webpack** was used to resolve imports in the JS files of the project and to bundle the JS files together into 1 or more JS files (currently just 1 JS file named "index.js" containing all of the code to be executed for the landing page of the blog, which is the only page that the blog currently has), "webpack-cli" requires that "webpack" be installed as a dependency in the project too.
- **webpack-cli** was used to allow for the execution of commands for bundling and compiling.
- **webpack-dev-server** was used for the sake of convenience, mainly to allow me to view the blog as part of the development and testing process.
- **babel** was used to allow modern JS code that was written for the project to be executed on older browsers as well as modern browsers, it was also used to transpile JSX to regular JS that can be executed by the browser.
- **babel-loader** was used to allow "webpack" to transpile JS and JSX files during the compilation process.
- **style-loader** and **css-loader** were both used to allow "webpack" to resolve CSS imports in JS files and apply the imported CSS to the webpage. "css-loader" resolves CSS imports and returns CSS code while "style-loader" takes CSS code (as a string) and wraps it in \<style> tags which are then inserted into the webpage's HTML code.
- **html-webpack-plugin** was used to generate HTML files for each of the webpages with the script containing the JS code for the webpage being inserted into the HTML code for the webpage.
