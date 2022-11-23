require('dotenv').config();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const express = require("express");
const ejs = require("ejs")
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express()

app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs');

app.use(session({
    secret : "Our little secret.",
    resave : false,
    saveUninitialized : false
}));

app.use(passport.initialize()); 
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/Psycho", {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.set('useCreateIndex', true);

const questionSchema = new mongoose.Schema({
    duration : Number,
    secPerf : Number, 
});
// pqs = ["Q1", "Q2", "q3"];
// pqsans = ['a', 'c', 'd'];
// pqssubans = [['a', 'b', 'd'], ['a'], ['d', 'a']];
// p_sub_time = [['t1', 't2', 't3']];


// total_sec_corr = 0;
// total_attempt = 0;
// sqs ['q'];
// sqa = ['anss'];
// total_attempts_for_prim = [3,2,1,0,1]
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    duration : String,
    selections : String,
    num_sec_correct : Number
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});

app.get('/', function(req,res){
    res.render('home');
})

app.get('/sde', function(req,res){
    res.render("sde");
})

app.post("/newuser", function(req,res){
    console.log("I was here")
    var body = req.body;
    const newUser = new User({
        name : body.name,
        email : body.email
    })
    // newUser.save(function(err){
    //     if(err){
    //       console.log(err);
    //     }
    //     else{
    //       console.log("New User Added");
    //     }
    //   })
    res.render("questions", {name:body.name, email:body.email});
})

app.get("/q", function(req,res){
    res.render("questions")
})


app.post('/test', function(req,res){
    console.log(req.body);
    res.redirect('/');
})

app.post('/tip', function(req,res){
    console.log(req.body);
    res.redirect('/');
})

app.listen(3000, function(){
    console.log("Server running on port 3000.");
})