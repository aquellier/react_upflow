** Datagrid reusable component in React**

This project is built with node.js and React. The backend API is built with an express server in the `server.js` file. In order to have some data to play with and because I have little experience with node/react, I converted the CSV file from the first scraping exercise (growth challenge) into a json file and fetched the data to the server through a simple get route.

The React application is in the client folder and calls the api in `src/components/App.js`.

The datagrid is built with two main components. `Datagrid.js` defines headers and uses `Datarow.js` to iterate over the data fetched from the API. The data can be reordered by clicking on one of the headers and the columns can be resized by dragging the tiny line between them (cursor changes to a double-edged arrow). I used a package called `react-column-resizer` to complete this last part.

You can launch the express server by running `node server.js` from the root directory and the react application by running `yarn start` or `npm start` from the `client` directory .

Thanks for this exercise, the main challenges here have been:
- understanding how to build a separated abstracted backend from the react application
- finding a correct architecture to store each record in a row
- reordering the data by clicking on any header



