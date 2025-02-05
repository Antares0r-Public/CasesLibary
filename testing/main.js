"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cases_1 = require("../Cases");
var case1 = new Cases_1.Case([{ name: "e", percentage: 50, model: "e" }, { name: "ea", percentage: 25, model: "14" }, { name: "aa", percentage: 30, model: "eee" }, { name: "as", percentage: 70, model: "142" }], [0, 100]);
case1.openCase();
console.log(case1);
