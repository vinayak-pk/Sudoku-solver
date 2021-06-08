const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.use(express.json());
const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/test",{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
}

const movieSchema = mongoose.Schema({
    "movie_name":String,
    "movie_genre":String,
    "production_year":Number,
    "budget":Number
},
{
    versionKey:false,
    timestamps:true
}
)

const Moviemd = mongoose.model("movie",movieSchema)

app.get("/movies",async (req,res)=>{
    const movies = await Moviemd.find({}).lean().exec();
    res.status(200).json({data:movies})
})

async function start(){
    await connect()
    app.listen(8000,()=>{
        console.log("Listening to port 8000")
    });
}

start();
