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
mongoose.connect(
	String(
		"mongodb+srv://Piyush:ginniferpep123@cluster0.ewfh1.mongodb.net/psycho"
	),
	{ useNewUrlParser: true, useUnifiedTopology: true }
);
// mongoose.set('useCreateIndex', true);

// const userSchema = new mongoose.Schema(
// 	{
//         username : {type : String, unique:false},
// 		name: { type: String },
// 		email: { type: String },
// 		age: { type: String },
// 		gender: { type: String },
// 		hle: { type: String },
// 		duration: { type: String },
// 		selections: { type: String },
// 		primary_score: { type: String },
// 		secondary_right: { type: String },
// 		secondary_wrong: { type: String },
// 	},
// 	{ typeKey: "$type" }
// );
const userSchema = new mongoose.Schema({
	name: {type : String},
	email: {type:String},
	age: {type : String},
	gender: {type : String},
	hle: {type : String},
	duration: {type:String, default:" . "},
	selections: {type:String, default:" . "},
	primary_score: {type:String, default:" . "},
	secondary_right: {type:String, default:" . "},
	secondary_wrong: {type:String, default:" . "},
    attempt : {
        type:Number,
        default : 0
    }
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
	var body = req.body;
	var found = 0;
	User.find({ email: body.email }, function (err, u) {
		if (err) {
			res.redirect("/");
		} else {
            var size = u.length;
            if(size == 0){
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
                res.render("trial", { email: body.email });
            }
			else if (u[0].attempt==1) {
				res.send("You have previously attempted the survey!");
			}
            else{
                res.render("trial", { email: body.email });
            }
		}
	});
});

app.post("/dummytrial", function (req, res) {
	User.find({}, function (err, u) {
		if (err) {
			console.log(err);
			res.redirect("/");
		} else {
			var size = u.length;
			if (size % 2 == 0) {
				res.render("questions", { email: req.body.email });
			} else {
				res.render("questions2", { email: req.body.email });
			}
		}
	});
});

app.post("/dummy", function (req, res) {
	var body = req.body;
	var email = body.email;
	User.findOne({ email: email }, function (err, event) {
		if (err) {
			console.log(err);
		} else {
			event.duration = String(body.dur);
			event.selections = String(body.sel);
			event.primary_score = String(body.p_score);
			event.secondary_right = String(body.sec_right);
			event.secondary_wrong = String(body.sec_wrong);
            event.attempt = 1;
			event.save();
		}
	});
	res.send(
		"Thank you for attending this survey and giving us your valuable time!"
	);
});

app.listen(process.env.PORT || 5000, function () {
	console.log("Server running on port 5000.");
});
