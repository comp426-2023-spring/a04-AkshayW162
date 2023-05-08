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
