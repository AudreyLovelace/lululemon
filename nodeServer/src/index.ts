import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {User} from "./entity/User";
import routes from "./routes";

const SERVER_PORT = 8001
createConnection().then(async connection => {

    const app = express();
    app.use(bodyParser.json());




    app.use('/',routes)


    app.listen(SERVER_PORT);


    console.log(`Express server has started on port ${SERVER_PORT}. Open http://localhost:${SERVER_PORT}`);

}).catch(error => console.log(error));
