# apptest2

Backend apptest2 application

### Install

NodeJS version 6.5.0
NPM version 3.10.3

```sh
git clone git@github.com/yuriy1teslenko/apptest2.git
cd apptest2
npm install
npm start
```

### Configuration

Use
```sh
npm run filldb
```
and
```sh
npm run purgedb
```
to fill database with test data and drop it

You can set up port, database endpoint, car dealer API endpoint and schedule of upload function in in configApp.json file
PORT and MONGODB environment variables will override config file settings.


