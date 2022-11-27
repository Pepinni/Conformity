require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(
	session({
		secret: "Our little secret.",
		resave: false,
		saveUninitialized: false,
	})
);

app.use(passport.initialize());
app.use(passport.session());

// mongoose.connect("mongodb://localhost:27017/Psycho", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });
mongoose.connect(String("mongodb+srv://Piyush:ginniferpep123@cluster0.ewfh1.mongodb.net/psycho"),{ useNewUrlParser: true , useUnifiedTopology: true});
// mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema({
	name: String,
	email: {type:String, unique:true},
	age: String,
	gender: String,
	hle: String,
	duration: {type:String, default:" . "},
	selections: {type:String, default:" . "},
	primary_score: {type:String, default:" . "},
	secondary_right: {type:String, default:" . "},
	secondary_wrong: {type:String, default:" . "},
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});

app.get("/", function (req, res) {
	res.render("home");
});

app.post("/newuser", function (req, res) {
    console.log(req.body);
	var body = req.body;
    User.find({email : body.email}, function(err,u){
        if(err){
            console.log(err);
            res.redirect("/");
        }
        else{
            console.log(u);
            var size = Object.keys(u).length;
            if(size==1){
                res.send("You have previously attempted the survey!");
            }
        }
    })
	const newUser = new User({
		name: body.name,
		email: body.email,
		age: body.age,
		hle: body.hle,
		gender: body.gender,
	});
	newUser.save(function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("New User Added");
		}
	});
    res.render("trial", {email : body.email});
    
});

app.post("/dummytrial", function(req,res){
    User.find({}, function(err,u){
        if(err){
            console.log(err);
            res.redirect("/");
        }
        else{
            console.log(u);
            var size = Object.keys(u).length;
            console.log("Size is ", size);
            if(size%2==0){
                res.render("questions", { email: req.body.email});
            }
            else{
                res.render("questions2", { email: req.body.email});
            }
        }
    })
})
app.post("/dummy", function (req, res) {
	var body = req.body;
	var email = body.email;
	User.findOne({ email: email }, function (err, event) {
		if (err) {
			console.log(err);
		} else {
            event.duration = body.dur;
            event.selections = body.sel;
            event.primary_score = body.p_score;
            event.secondary_right = body.sec_right;
            event.secondary_wrong = body.sec_wrong;
            event.save();
        }
	});
	console.log(req.body);
	res.send("Thank you for attending this survey and giving us your valuable time!");
});

app.post("/test", function (req, res) {
	console.log(req.body);
	res.redirect("/");
});

app.post("/tip", function (req, res) {
	console.log(req.body);
	res.redirect("/");
});

app.listen(process.env.PORT || 5000, function () {
	console.log("Server running on port 5000.");
});