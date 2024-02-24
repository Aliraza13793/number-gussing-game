#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const systmgenratednum = Math.floor(Math.random() * 10);
const answer = await inquirer_1.default.prompt([
    { type: 'number',
        name: "userguess",
        message: 'Write your guess:'
    }
]);
const { userguess } = answer;
console.log(userguess, "userguess", systmgenratednum, 'Sys genrated num');
if (userguess === systmgenratednum) {
    console.log("Your answer is correct ");
}
else {
    console.log("Your answer is wrong");
}
