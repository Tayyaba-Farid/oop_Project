#! /usr/bin/env node

import inquirer from "inquirer";

class Person {
    private personality: string
    constructor(){
        this.personality = "Mystery"
    }

    public askQuestion(ans: number): void{
        if(ans === 1){
            this.personality = "Extrovert"
        }
       else if(ans === 2){
        this.personality = "Introvert"
       } 
    }

    public getPrsonality(): string{
        return this.personality
    }
}

class Student extends Person{
    private personName : string = ""


    public setName(name: string) {
        this.personName = name
    }
    public getName(){
        return this.personName
    }

}

async function userInput(){
    let {answer} = await inquirer.prompt([{
        name: "answer",
        type: "input",
        message: "Type 1 if you like to talk to others and type 2 if you would rather keep to yourself",
validate: (input) => {
    if(isNaN(input)){
        return "Please enter correct value"
    }
    else{
        return true
    }
}
    }])
    let ans = parseInt(answer)
    let newPerson = new Person()
newPerson.askQuestion(ans)
console.log(`You are ${newPerson.getPrsonality()}`)

let {username} = await inquirer.prompt([{
    name: "username",
    type: "input",
    message: "Please enter your name: "
}])
let personName = username
let myStudent = new Student()
myStudent.setName(personName)
console.log(`Hi, ${myStudent.getName()}! Your personality type is ${newPerson.getPrsonality()}`)
}

userInput()


