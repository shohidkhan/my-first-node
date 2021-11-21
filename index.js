const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const users = [
    {
        id: 0,
        name: "Shohid",
        email: "shohid@gmail.com",
    },
    {
        id: 1,
        name: "Shakil",
        email: "Shakil@gmail.com",
    },
    {
        id: 2,
        name: "Sahin",
        email: "Sahin@gmail.com",
    },
]

const fruits = [
    {
        id: 0,
        name: "Mango",
        price: 23,
    },
    {
        id: 1,
        name: "Orange",
        price: 230,
    },
    {
        id: 2,
        name: "Apple",
        price: 300,
    },
]

app.get('/', (req, res) => {
    res.send("hello from my second node server");
})
app.get("/users", (req, res) => {

    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

})
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    const user = users[id];
    res.send(user);
});

app.get("/fruits", (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = fruits.filter(fruit => fruit.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(fruits)
    }
});
app.get("/fruits/:id", (req, res) => {
    const fruit = fruits[req.params.id];
    res.send(fruit)
})
app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.send(newUser);
})
app.listen(port, () => {
    console.log("To Port", port);
})