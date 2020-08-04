# Setup

## How to start the server

1. Go in the backend folder with `cd Stammtisch-backend`
2. Install the node packages `npm install`
3. (optional) create a `config.js` (copy and rename `defaultConfig.js` and set your port and other values)
4. Start the server with `node index.js`

## How to start the client

1. Go to the frontend folder with `cd Stammtisch-app`
2. Install ionic `npm install -g @ionic/cli`
3. create a `config.js` (copy and rename `defaultConfig.js` and set your server ip address and other values)
4. Start the client with `ionic serve`

## Set up Prettier

1. Install the Prettier extention
2. Set "Use Editor Config" to false `"prettier.useEditorConfig": false`

## Set up database

1. Install mysql
2. create database `stammtisch`
3. run `mysql -u <username> -p`
4. run `source /path/to/stammtisch-backend/sql/database-structure.sql`
5. add to your `Staammtisch-backend/config.js` file:

```javascript

database: {
	host: "localhost",
	user: "<user>",
	password: "<password>",
	databaseName: "stammtisch",
}
```
