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

// mongoose.connect("mongodb://localhost:27017/Psycho", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(String("mongodb+srv://Piyush:ginniferpep123@cluster0.ewfh1.mongodb.net/psycho"),{ useNewUrlParser: true , useUnifiedTopology: true});
// mongoose.set('useCreateIndex', true);

const questionSchema = new mongoose.Schema({
    duration : Number,
    secPerf : Number, 
});

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    duration : String,
    selections : String,
    primary_score : Number,
    secondary_right : Number,
    secondary_wrong : Number,
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

app.post("/newuser", function(req,res){
    console.log(req.body)
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

app.post("/dummy", function(req,res){
    console.log(req.body);
    res.redirect("/q");
})

app.post('/test', function(req,res){
    console.log(req.body);
    res.redirect('/');
})

app.post('/tip', function(req,res){
    console.log(req.body);
    res.redirect('/');
})

app.listen(process.env.PORT || 5000, function(){
    console.log("Server running on port 5000.");
})