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

function updateOutput(result) {
    const container = document.querySelector(".output")
    const content = document.createElement("div")
    content.textContent = result
    container.appendChild(content)
}

function updateScore(humanScore, computerScore) {
    const humanScoreElement = document.querySelector("#human-score")
    humanScoreElement.textContent=humanScore
    const computerScoreElement = document.querySelector("#computer-score")
    computerScoreElement.textContent=computerScore
}

function announceWinner() {
    if(humanScore===5){
        alert("You Win!")
    }else{
        alert("You Lose!")
    }
}

function reset() {
    const container=document.querySelector(".output")
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    humanScore = 0
    computerScore=0
    drawCount=0
    updateScore(0,0)
}

function playGame(playSelection) {
    const humanSection = playSelection
    const computerSection = getComputerChoice()

    const result = playRound(computerSection, humanSection)
    updateOutput(result)
    updateScore(humanScore, computerScore)
    if(humanScore===5||computerScore===5){
        setTimeout(()=>announceWinner(), 200)
        setTimeout(()=>reset(), 500)
    }
}

