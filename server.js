#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import { rps, rpsls } from './lib/rpsls.js';

//Args, app, and port
let args = minimist(process.argv.slice(2));
let app = express();
let port = args.port || 5000;

//App use
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Get the root endpoint of your app

//Call a nonexistent endpoint

//Play RPS

//Play RPSLS

//Play RPS against an opponent (URLEncoded data body)

//Play RPSLS against an opponent (URLEncoded data body)

//Play RPS against an opponent (JSON data body)

//Play RPSLS against an opponent (JSON data body)

//Play RPS against an opponent (parameter endpoint)

//Play RPSLS against an opponent (parameter endpoint)

//Look at the package.json file

//Get the headers