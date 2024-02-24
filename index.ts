#! /usr/bin/env node
import inquirer, { Answers } from "inquirer";
type anstype={
    userguess:number,
}
const systmgenratednum=Math.floor(Math.random()*10);

const answer:anstype=await inquirer.prompt([
   { type:'number',
    name:"userguess",
    message:'Write your guess:'
   }
])

const {userguess}=answer;
console.log(userguess,"userguess",systmgenratednum,'Sys genrated num')
if (userguess===systmgenratednum){
    console.log("Your answer is correct ")
}else{
    console.log("Your answer is wrong")
  }

