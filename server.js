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
app.get('/app', (req, res) => {	res.status(200).send("200 OK"); });

//Call a nonexistent endpoint
app.get('*', (req, res) => { res.status(400).send("404 NOT FOUND"); });

//Play RPS
app.get('/app/rps', (req, res) => { res.status(200).send(rps()); });

//Play RPSLS
app.get('/app/rpsls', (req, res) => { res.status(200).send(rpsls()); });

//Play RPS against an opponent (URLEncoded data body)
app.get('/app/rps/play', (req, res) => { res.status(200).send(rps(req.query.shot)); });

//Play RPSLS against an opponent (URLEncoded data body)
app.get('/app/rpsls/play', (req, res) => { res.status(200).send(rpsls(req.query.shot)); });

//Play RPS against an opponent (JSON data body)
app.post('/app/rps/play', (req, res) => { res.status(200).send(rps(req.body.shot)); });

//Play RPSLS against an opponent (JSON data body)
app.post('/app/rpsls/play', (req, res) => { res.status(200).send(rpsls(req.body.shot)); });

//Play RPS against an opponent (parameter endpoint)
app.get('/app/rps/play/:shot', (req, res) => { res.status(200).send(rps(req.params.shot)); });

//Play RPSLS against an opponent (parameter endpoint)

//Look at the package.json file

//Get the headers
