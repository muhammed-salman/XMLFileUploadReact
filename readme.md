# A Vehicle Identifier App (File Upload Demo)

## Run MongodB service
1. Open terminal and type `mongod`. Ensure that the service is installed.
2. You can see the database graphically using Robo3T. Please go to https://robomongo.org/download

## Instruction for running app on localhost

1. Open another terminal and clone the app using command `git clone https://github.com/muhammed-salman/.......` or create a directory `fileuploder` and unzip/copy the project files in it.
2. Type `cd fileuploader/server` to get inside the directory.
3. Now type `npm install`
4. After the installation of required node_modules type `npm run dev`
5. Now the server is running on `localhost:3090`
6. Open another terminal and navigate to `client` directory of `fileuploder`
9. Now type `npm install`
10. After the installation of required node_modules type `npm run start`
11. Now the application can be accessed on `localhost:3050`

## Following scripts are available in the client project

### usage: `npm run <script_name>`

1. `start`: To run project on localhost:3050
2. `test`: To test the App using mocha
3. `test:watch`: To continously run the test while modifying files.
4. `clean`: To remove the production build code
5. `build`: To create a production build for deployment

## Following scripts are available in the server project

### usage: `npm run <script_name>`

1. `dev`: To run server on localhost:3090
2. `test`: To test server (Currently no test cases)

## What can be done with more time
- App can be made responsive
- Detailed test cases can be written for each component
- UX can be improved
- Lot of code refactoring can be done (destructuring, reducing number of variables, minimizing code redundancy etc)
- Network request can be minimized
- Unnecessary state stored in certain components can be removed or reduce
- Authentication can be implemented

** I'will update if I get more ideas **
