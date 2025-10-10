// Generate a dummy data in this format in a collection called Employees in a db called company


// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked

// Create an express app with mongoose to achieve it

// Everytime the button is clicked you should clear the collection

import express from "express";
import mongoose from "mongoose";
import { Dummy } from "./models/Dummy.js"
let conn = await mongoose.connect('mongodb://localhost:27017/dummy_data');
const app = express();
const port = 3000;
const names = ['Harry', 'Larry', 'Barry', 'Carry', 'Jerry'];
const salaries = [450000, 55000, 67000, 58000];
const languages = ['Python', 'C++', 'C', 'Java', 'Go'];
const cities = ['New York', 'Delhi', 'Chicago', 'Sarasota', 'Bradenton'];
const manger = [true, false];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/done', async (req, res) => {
    for (let index = 0; index < 10; index++) {
        let dummy = new Dummy({name: names[Math.floor(Math.random() * 5) + 1], salary: salaries[Math.floor(Math.random() * 5) + 1], language: languages[Math.floor(Math.random() * 5) + 1], city: cities[Math.floor(Math.random() * 5) + 1], isManager: manger[Math.floor(Math.random() * 2) + 1]});
        dummy.save();
    }
    res.render('generated');
})

app.get('/erased', async (req, res) => {
    let delete_data = await Dummy.deleteMany({});
    res.render('erased');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})