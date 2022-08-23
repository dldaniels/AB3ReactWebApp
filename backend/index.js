const express = require('express');
const mysql = require('mysql')
const cors = require('cors');
const bodyParser = require('body-parser');

//Create mysql database connection
const db =mysql.createPool({
    host: '127.0.0.1',
    user: 'dinosaur_user',
    password: 'dinosaur',
    database: 'dinosaur_db'
});

const app = express();
const PORT= 4040;

app.use(express(bodyParser.urlencoded({ extended: false })));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('API Running'));

app.getDinosaurs('/dinosaurs', (req, res) => {
    async function fetchDinosaurs(){
        try {
    const result = db.query('SELECT * FROM dinosaur_table');
    return result;
} catch(error) {
    return error;
}
}

// fetchDinosaurs()
// .then(dbRes => {
//     res.send(dbRes);
// }) 


});
    
    
    

app.post("/create-dinosaur", (req, res) => {
    var response = "";
    try{
        console.log(req.body);
        console.log (req.body.name);
        console.log (req.body.type);
        var added = controller.addDinosaur(req.body.name,req.body.type);
    }catch (err){
        res.json({ message: 'something is wrong', error : err.message});
    }

    }

    db.query( "INSERT INTO dinosaur_table (name, type) VALUES (?,?)",
     [name, type], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Dinosaur added");
        }
    });
});

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


    
        



app.listen(PORT, () => console.log('Server started on port ${PORT}'));