import express, { Router } from "express"
import cors from "cors"
import cassandra from 'cassandra-driver'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// cassandra connection setup
var authProvider = new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra');
var contactPoints = ['127.0.0.1'];
var localDataCenter = 'datacenter1'; 
var user = new cassandra.Client({contactPoints: contactPoints, authProvider: authProvider, localDataCenter: localDataCenter, keyspace:'people'});

app.post("/login", (req, res)=> {
    var getPassword = 'SELECT * FROM people.students WHERE email = ?'
    console.log("ravi is here: ") 
    console.log('jsonobjdesc -->'+req.body.email);
    user.execute(getPassword, [req.body.email], function(err, result){
     if(err){
        console.log("not working")
        res.status(404).send({msg : err});
     }else{
            
            console.log('result' + result)

            console.log(req.body.password)
            const json1 = req.body.password;
            
            if (json1 === result.rows[0].password){
                console.log("login successful")
                res.send({message: "Login Successful", user : result})

            } else{
                res.send({message: "incorrect password or ID"})
            }
    }
    })
})

app.post("/register", (req, res)=>{
    console.log('req ' + req)
    console.log('jsonobjtitle -->'+req.body.name)
    console.log('jsonobjdesc -->'+req.body.email)
// querry to insert data into the database
    var upsertuser = 'INSERT INTO people.students(email, first_name, password, course, degree, description, gpa, projects, skills, university, work_ex ) VALUES(?,?,?,?,?,?,?,?,?,?,?)';
    console.log(req.body);
    user.execute(upsertuser, [ req.body.email, req.body.name, req.body.password, req.body.course,req.body.degree, req.body.description, req.body.gpa, req.body.projects, req.body.skills, req.body.university, req.body.work_ex],
        function(err, result){
            if(err){
                console.log(err)
                res.status(404).send({msg: err});
                
            } else {
                res.send({message: 'successfully Registered'})
            }
        })
})

app.listen(9002,()=>{
    console.log("Be started at port 9002")
})


