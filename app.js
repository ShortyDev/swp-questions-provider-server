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

    new Question("Welche Schreibweise ist richtig?",
    new Answer("parralel", false), new Answer("parrallel", false), 
    new Answer("paralell", false), new Answer("parallel", true))

    new Question("Welches Land ist nicht in der EU? (2021/05)",
    new Answer("Österreich", false), new Answer("Slowenien", false), 
    new Answer("Türkei", true), new Answer("Weißrussland", false))

    new Question("Welche dieser Schulformen gibt es in Deutschland nicht?",
    new Answer("HTL", true), new Answer("Gymansium", false), 
    new Answer("Mittelschule/Hauptschule", false), new Answer("Realschule", false))

    new Question("Welche Steuer gibt es nicht?",
    new Answer("Zusteuer", true), new Answer("Einkommenssteuer", false), 
    new Answer("Alkoholsteuer", false), new Answer("Umsatzsteuer", false))

    new Question("Welches Porsche-Modell ist am bekanntesten?",
    new Answer("918", false), new Answer("911", true), 
    new Answer("Boxter", false), new Answer("Speedster", false))

    new Question("Wer hat am meisten Handys im Q4 in 2020 verkauft?",
    new Answer("Samsung", false), new Answer("Apple", true), 
    new Answer("Xiaomi", false), new Answer("OnePlus", false))

    new Question("Wie viele Einwohner hat Österreich in etwa?",
    new Answer("etwa 10 Millionen", false), new Answer("etwa 8 Millionen", true), 
    new Answer("etwa 9 Millionen", false), new Answer("etwa 7 Millionen", false))

    new Question("Was ist die meistbenutzte Programmiersprache?",
    new Answer("JavaScript", false), new Answer("Python", true), 
    new Answer("Swift", false), new Answer("Java", false))

    new Question("Welche Programmiersprache wird hauptsächlich für iOS-Applikationen verwendet?",
    new Answer("HTML", false), new Answer("Swift", true), 
    new Answer("Go", false), new Answer("Java", false))
}

app.get("/new/random", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    randomQuestion = getRandomQuestion()
    res.send(JSON.stringify(randomQuestion))
    console.log("A random question was fetched")
})

app.listen(process.env.PORT || 5000, () => {})