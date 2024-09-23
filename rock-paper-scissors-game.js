'use strict'

const choices = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0
let drawCount = 0

function getComputerChoice() {
    const index = Math.floor(Math.random()*3)
    return choices[index]
}

function getHumanChoice(){
    let humanInput = prompt("What is your choice: Rock, Paper or Scissors")
    let choice = humanInput.toLowerCase().trim()
    while(choices.indexOf(choice)===-1){
        prompt("Invalid Input, Please Input rock, paper or scissors")
    }
    return choice
}

function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1)
}

function playRound(computerChoice, humanChoice){
    if(computerChoice===humanChoice){
        drawCount++
        return "Draw!"
    }
    if(humanChoice==='paper'){
        if(computerChoice==='rock'){
            humanScore++
            return `You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`
        }else{
            computerScore++
            return `You Lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
        }
    }else if(humanChoice==='rock'){
        if(computerChoice==='scissors'){
            humanScore++
            return `You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`
        }else{
            computerScore++
            return `You Lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
        }
    }else{
        if(computerChoice==='paper'){
            humanScore++
            return `You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`
        }else{
            computerScore++
            return `You Lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
        }
    }
}

const humanSection = getHumanChoice()
const computerSection = getComputerChoice()

console.log(playRound(computerSection, humanSection))
