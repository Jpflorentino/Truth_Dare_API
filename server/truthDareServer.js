"use strict";

const express = require("express");
const app = express();

const port = 8080;

const router = require("./router.js")();

app.use(router); //Pedidos

app.listen(port, () => console.log(`Listening api on ${port}`));
