const express = require("express");
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "A", mobileno: 8978735498, address: "ABC", age: 20 },
    { id: 2, name: "B", mobileno: 7873547890, address: "BCd", age: 25 },
];

// ===== CREATE =====
app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        mobileno: req.body.mobileno,
        address: req.body.address,
        age: req.body.age
    };
    students.push(newStudent);
    res.send(newStudent);
});

// ===== READ ALL =====
app.get("/students", (req, res) => {
    res.send(students);
});

// ===== MAP =====
//Extract only names
app.get("/students/names", (req, res) => {
    const names = students.map(student => student.name);
    res.send(names);
});

// ===== FILTER =====
//Get students above age 21
app.get("/students/above21", (req, res) => {
    const above21 = students.filter(student => student.age > 21);
    res.send(above21);
});

// ===== FIND (specific) =====
//Find student with id
app.get("/students/find/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));
    if (!student) return res.status(404).send("Student not found");
    res.send(student);
});

// ===== GET BY ID (generic dynamic route – KEEP LAST) =====
app.get("/students/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));
    if (!student) return res.status(404).send("Student not found");
    res.send(student);
});

// ===== UPDATE =====
app.put("/students/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));
    if (!student) return res.status(404).send("student not found");

    student.name = req.body.name;
    student.mobileno = req.body.mobileno;
    student.address = req.body.address;
    student.age = req.body.age;

    res.send(student);
});

// ===== DELETE =====
app.delete("/students/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));
    if (!student) return res.status(404).send("student not found");

    students = students.filter(s => s.id !== Number(req.params.id));
    res.send("student deleted");
});

app.listen(5000, () => {
    console.log("server running on the port 5000");
});
