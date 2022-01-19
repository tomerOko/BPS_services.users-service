import {app} from './app' // app is being exported

// start the express server
app.listen( 3000, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:3000` );
} );
