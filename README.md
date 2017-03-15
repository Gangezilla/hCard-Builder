# hCard-Builder

A hCard Builder built using React/Redux, and styled with SASS.

Feel free to compile in your local environment, or download the working app from the 'compiled-app' folder.

or, hit up http://www.scottgangemi.com/hcard to see it up and running right now.

All up took about 6 - 6.5 hours to complete.

Note:

I unfortunately don't have a Windows machine to test on, so haven't been able to check what it looks like on IE10/IE11. Judging by my love of flexbox, some of the positioning might look a bit off on them, but the rest of the elements should look okay. 

## Setup Instructions: 

1. Download zip of project and unzip, or, clone the repo into your favourite directory.
2. If you're in a rush, you can just head straight into the compiled-app directory and open index.html and it should be up and running locally right away. If you want to set it up, you're going to need to do a few things first.
3. Navigate to the main directory in your terminal and run 'npm install'. If this doesn't work for you, you're probably going to need to install Node.js and NPM. If you run npm -v and you don't see a version number popup, head [here](https://nodejs.org/en/) to download Node and get it installed.
4. Assuming node now works on your machine, run `npm install`
5. Now the project packages are all installed, next thing to do is to compile the SASS for the project. Best tool for this is one called Compass. In your terminal run `gem install compass`, which you'll probably need admin privileges to do. After this is all installed, run `compass compile` in the same top level directory to compile the SASS.
6. Final step is to compile our JS, which is done using Webpack. Webpack should have been installed when you installed your other node packages, but if it wasn't it may need to be installed globally. If this is the case, run `npm install webpack` to make sure it's installed.
7. After this, run `webpack -d` to compile the Javascript.
8. Head into the src folder and open up this index.html and everything should be up and running. 
