const lib = require('./lib');
const express = require('express');
const app = express();

// console.log(lib);

app.get('/', (req,res) => {
    res.send("HELLO WORLD");
})

app.get('/students', (req,res) => {
    lib.getStudents().then(data => {
        res.json({students: data})
    })
})


app.listen( 8080, () => "Server is on!!!");

// lib.getStudents().then(data => {
//     console.log("inside of main js line 6");
//     console.log(data);
// });


// lib.getStudent(1).then(data => {
//     console.log("the student is");
//     console.log(data);
// })

// lib.getMarkForStudent('4 OR 1 = 1').then(data => {
//     console.log('DONE');
//     console.log(data);
// })
// FORM
// Enter your users id to see your mark
// 454657578DFdf34


// app.get('/getMark/:id', (req,res) => {
//     //...
// })