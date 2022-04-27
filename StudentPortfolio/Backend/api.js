import express, { Router } from "express"
import cors from "cors"
import cassandra from 'cassandra-driver'

const app = express()
//const router = express.Router()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
    
// Replace 'Username' and 'Password' with the username and password from your cluster settings
var authProvider = new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra');
// Replace the PublicIPs with the IP addresses of your clusters
var contactPoints = ['127.0.0.1'];
var localDataCenter = 'datacenter1';

var user = new cassandra.Client({contactPoints: contactPoints, authProvider: authProvider, localDataCenter: localDataCenter, keyspace:'people'});


app.get('/:event_id', (request, response) => {
    const event_id = request.params.event_id;
    try {
        dbConnectionPool.query(`SELECT * from event_information WHERE event_id=${event_id}`, (error, result) => {
            if (error) {
                console.log(error);
                return response.status(500).send('Server Error');
            }
            console.log(result);
            response.status(200).json({result});
        });
    } catch (error) {
      console.log(error);
      response.status(500).send('Server Error');
    }
});