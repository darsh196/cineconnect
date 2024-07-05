import express from 'express';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


dotenv.config(); // Initialize dotenv to read .env variables

const app = express();
const port = process.env.PORT || 8080;

// To correctly handle __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/M00919790/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Connection details
const password = "zRAcxxmM6WJBUV0H";//Should be stored in a separate file!
const userName = "dg774";
const server =  "cst2120.yuxc4k9.mongodb.net";

//Encode special characters
const encodedUsername = encodeURIComponent(userName);
const encodedPassword = encodeURIComponent(password);

//Create connection URI
const connectionURI = `mongodb+srv://${encodedUsername}:${encodedPassword}@${server}/?retryWrites=true&w=majority`;
console.log(connectionURI);

//Set up client
const client = new MongoClient(connectionURI, { 
    serverApi: {
      version: ServerApiVersion.v1,
      strict: false,//Setting this to true breaks text index queries.
      deprecationErrors: true,
    }
}); 

//Use client to create database and collection
const database = client.db("cst2120");
const collection = database.collection("signup");

// Handle POST request
app.post('/M00919790/', async (req, res) => {
    try {
        const db = client.db('cst2120');
        const collection = db.collection('signup');
        const result = await collection.insertOne(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

app.get('/M00919790/data', async (req, res) => {
    try {
        const db = client.db('cst2120'); // Use your actual database name
        const collection = db.collection('signup'); // Use your actual collection name
        const data = await collection.find({}).toArray(); // Retrieve all documents
        res.json(data); // Send data in JSON format
    } catch (err) {
        console.error("Failed to retrieve data:", err);
        res.status(500).json({ error: err.message });
    }
});