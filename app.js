const express = require("express")
const app = express()
const questions = []

class Question {
    constructor(question, ...answers) {
        this.question = question
        this.answers = answers
        questions.push(this)
    }
    addAnswer(name, correct) {
        this.answers.push(
            new Answer(name, correct)
        )
    }
    addAnswer(answer) {
        this.answers.push(answer)
    }
}
class Answer {
    constructor(name, correct) {
        this.name = name
        this.correct = correct
    }
}

const getRandomQuestion = () => {
    return questions[questions.length * Math.random() | 0];
}

{
    new Question("Was ist keine Programmiersprache?",
    new Answer("CSS", true), new Answer("Java", false), 
    new Answer("Python", false), new Answer("Go", false))

    new Question("In welchem Jahr ist die Corona-Pandemie in Wuhan ausgebrochen?",
    new Answer("2019", true), new Answer("2020", false), 
    new Answer("2021", false), new Answer("2018", false))

    new Question("Wer war der US-Präsident in 2016-2020?",
    new Answer("Donald Trump", true), new Answer("Barack Obama", false), 
    new Answer("Hillary Clinton", false), new Answer("Joe Biden", false))

    new Question("In welcher Zeitzone liegt Österreich?",
    new Answer("MEZ", true), new Answer("MET", false), 
    new Answer("GMT", false), new Answer("MLZ", false))
}

app.get("/new/random", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    randomQuestion = getRandomQuestion()
    res.send(JSON.stringify(randomQuestion))
    console.log("A random question was fetched")
})

app.listen(process.env.PORT || 5000, () => {})