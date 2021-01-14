import {Users} from "./database" 

const express = require('express');
const cors = require("cors");
const shortid = require('shortid');

const server = express();
server.use(express.json());
server.use(cors());


server.get('/', (req, res) =>
{
    res.send('Heck yeah, heck yeah');

}) // READ data

server.post('/', (req, res) =>
{
    res.send('Heck yeah, heck yeah');

}) // CREATE data


server.listen(5000, ( ) =>{
    console.log('Heck yeah, we are up and running on local host 5000')
})

