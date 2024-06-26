const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send('my app ')
})


app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  app.get('/Emeril', (req, res) => {
    res.send('Bam!')
  })
  
  app.get('/homer- simpson', (req, res) => {
    res.send('d"oh')
  })
  
  app.get('/fraiser', (req, res) => {
    res.send('im listing ')
  })
 
  app.get('/pops', (req, res) => {
    res.send('bang-bang')
  })
  
  app.get('/zeus', (req, res) => {
    res.send('Release the krake')
  })
  
  app.get('/rocky', (req, res) => {
    res.send('yo, adren')
  })

  
  app.get('/gollum', (req, res) => {
    res.send('My precious')
  })
  
  app.get('/young jezzy', (req, res) => {
    res.send('aahhhhhhh')
  })
  
  app.get('/terence', (req, res) => {
    res.send('Queen get the money ')
  })



  const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  
  ]

 
   app.get('/magic8', (req, res) => {

    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
   
    res.send(`<h1>${ magic8Responses[randomIndex]}</h1>`);
});




  module.exports = app;