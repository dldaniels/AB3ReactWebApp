const express = require('express');
const mysql = require('mysql')
const cors = require('cors');
const bodyParser = require('body-parser');

//Create mysql database connection
const db =mysql.createPool({
    host: '127.0.0.1',
    user: 'dinosaur_user',
    password: 'dinosaur',
    database: 'dinosaur'
});

const app = express();
const PORT= 4040;

app.use(express(bodyParser.urlencoded({ extended: false })));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('API Running'));


app.get('/get', (req, res) => {
    const SelectQuery = " SELECT * FROM dinosaur_table";
    db.query(SelectQuery, (err, result) => {
        res.send("Display complete")
    })
})

// app.post("/create-dinosaur", (req, res) => {
//     const name = req.body.name;
//     const type = req.body.type;
    // dinosaurs.push(dinosaur);

    // res.send('Dinosaur is added to the database');
    // const { name } = req.body.setDinosaurName;
    // const { type } = req.body.setType;
    // db.query( "INSERT INTO dinosaur_table (name, type) VALUES (?,?)",
    //  [name, type], (err, result) => {
    //     if(err){
    //         console.log(err);
    //     }else{
    //         res.send("Dinosaur added");
    //     }
    // });
    
    // let sql = "INSERT INTO dinosaur (name, type) VALUES (?,?)"
    // db.query(sql, [name, type], (err,result) =>{
    

    // if(err){
    //     console.log(err);
    // }else{
    //     res.send(result);
    // }
// })
// });

app.get("/display", (req, res) => {

    db.query("SELECT * FROM dinosaur_table",
     (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Display complete");
        }
     })
    });


    app.post("/insert", (req, res) => {
        const name = req.body.setDinosaurName;
        const type = req.body.setType;
        const InsertQuery = "INSERT INTO dinosaur_table (name, type) VALUES (?, ?)";
        db.query(InsertQuery, [name, type], (err, result) => {
          console.log(result)
        })
      })
        



app.listen(PORT, () => console.log('Server started on port ${PORT}'));