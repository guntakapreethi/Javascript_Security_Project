const express =require("express");
const app = express();

app.use(express.json()); // to read JSON body

let users =[
    {id:1,name: "preethi", age: 21},
    {id:2,name: "chinnu", age: 22},
];
//=====CREATE=====
// POST
app.post("/users",(req,res)=>{
    const newUser ={
        id: users.length +1,
        name: req.body.name,
        age: req.body.age
    };
users.push(newUser);
res.send(newUser);
});
//======READ======
//Get
app.get("/users",(req,res)=>{
    res.send(users);
});
//GET/users/:id
app.get("/users/:id",(req,res)=>{
    const user =users.find(u => u.id ==req.params.id);
    if(!user) return res.status(404).send("user not found");
    res.send(user);
});

//=====UPDATE=====
//Put /users/:id
app.put("/users/:id",(req,res)=>{
    const user = users.find(u => u.id == req.params.id);
    if(!user) return res.status(404).send("user not found");
    user.name = req.body.name;
    user.age = req.body.age;

    res.send(user);
});
//====DELETE====
//Delete /users/:id
app.delete("/users/:id",(req,res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send("user deleted")
});

app.listen(3000, () => {
    console.log("server running on the port 3000");
});