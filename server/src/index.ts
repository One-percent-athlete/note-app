import express from 'express'; //server
import "./db"; //database
import noteRouter from "./routers/note"; //router
import cors from 'cors'; //middle wear

// create a server
const app = express();

//create a middle wear
app.use(cors());

// this will parse post request coming from fetch.post() method
app.use(express.json());
// this will parse post request coming from html form
app.use(express.urlencoded({ extended: false }));

// middle wear works behind the scaen instead of above use method
// app.use((req, res, next) => {
//     req.on("data", (chunk) => {
//         req.body = JSON.parse(chunk);
//         next();
//     });
// })

// connet to router
// localhost:3000/note/create
// localhost:3000/note
// localhost:3000/note/noteId
// localhost:3000/note/noteId
app.use("/note", noteRouter);

// listen to some port 
app.listen(3000, () => {
    console.log("listening on 3000");
})