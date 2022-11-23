primary_q = [
	"Count total no. of figures in the below image",
	"Which horse is different ?",
	"Which one is different?",
	"Which colors are the same ?",
	"How many squares are there ?",
	"How many triangles are present in the below figure ?",
	"Which of the below figures is different?",
	"Count the number of differences in the below images",
	"How many rectangles are there in the figure?",
	"How many differences are there between the above two images?",
]; // hard

primary_q_options = [
	["5", "7", "9", "8"],
	["1", "2", "3", "None"],
	["1", "2", "3", "None"],
	["2 and 3", "1 and 2", "3 and 4", "None"],
	["30", "35", "40", "45"],
	["20", "24", "21", "23"],
	[, "A", "B", "C", "D"],
	["15", "5", "10", "20"],
	["8", "9", "10", "7"],
	["7", "9", "6", "13"],
];

primary_q_ans = ["B", "C", "B", "D", "B", "B", "C", "C", "C", "B"]; // hard

primary_q_images = [
	"q1.png",
	"q2.png",
	"q3.png",
	"q4.jpeg",
	"q5.png",
	"q6.png",
	"q7.png",
	"q8.jpeg",
	"q9.png",
	"q10.png",
];

primary_score = 0;

primary_q_sel = [];

primary_q_dur = [];

curr_prim_q_no = 1;

sec_q_attempt_for_prim = [];

sec_q = [
	"Choose the box that comes next in the sequence",
	"Choose the box that comes next in the sequence ",
	"Choose the box that comes next in the sequence",
	"Choose the box that comes next in the sequence",
	"Find the word Red",
	"Find the word Red",
	"Find the word Red",
	"Find the word Red",
	"Find the word Red",
	"Find the word Red",
]; // hard

sec_q_ans = ["C", "D", "B", "A", "C", "B", "B", "C", "A", "A"]; // hard

sec_q_images = [
	"Q 1.jpg",
	"Q 2.jpg",
	"Q 3.jpg",
	"Q 4.jpg",
	"Q 5.jpg",
	"Q 6.jpg",
	"Q 7.jpg",
	"Q 8.jpg",
	"Q 9.jpg",
	"Q 10.jpg",
];

cur_sec_q_no = 1;


no_of_sec_correct = 0;

// Timer
var prevTime = new Date();
let countdown;
function resetTimer() {
	let startDate = new Date();
	let endDate = new Date();
	endDate.setSeconds(endDate.getSeconds() + 90);
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const weekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let ed = new Date(endDate);

	const futureTime = ed.getTime();

	function getRemainingTime() {
		const today = new Date().getTime();

		const t = futureTime - today;
		const oneHour = 60 * 60 * 1000;
		const oneMinute = 60 * 1000;
		let hours = Math.floor(t / oneHour);
		let minutes = Math.floor((t % oneHour) / oneMinute);
		let seconds = Math.floor((t % oneMinute) / 1000);

		// Changing the values in DOM
		const hrs = $(".hours");
		const mins = $(".mins");
		const secs = $(".secs");
		const items = [hrs, mins, secs];
		const values = [hours, minutes, seconds];
		function format(item) {
			if (item < 10) {
				return (item = `0${item}`);
			}
			return item;
		}
		items.forEach(function (item, index) {
			item.html(format(values[index]));
		});

		if (t < 0) {
			updateDuration();
			primary_q_sel.push("N");
			if (curr_prim_q_no > primary_q.length) {
				clearInterval(countdown);
				return;
			}
			nextQ();
			clearInterval(countdown);
			resetTimer();
			// $(".quiz-form").submit();
		}
	}
	countdown = setInterval(getRemainingTime, 1000);

	getRemainingTime();
}

window.onload = function () {
	resetTimer();
	// nextQ();
    addToPrimaryCard(curr_prim_q_no-1);
};

function addToPrimaryCard(i) {
	let primary_task = `<div class="card">
    <img class="p-task-img" src="/Images/primary_img/${primary_q_images[i]}" width="350" height="350">
    <form action="'/none" method="POST">
        <div class="card-body">
            <div class = "qs"> ${primary_q[i]}</div>
            <input type="radio" name = "option" class="p_op_a option">${primary_q_options[i][0]}<br>
            <input type="radio" name = "option" class="p_op_b option">${primary_q_options[i][1]}<br>
            <input type="radio" name = "option" class="p_op_c option">${primary_q_options[i][2]}<br>
            <input type="radio" name = "option" class="p_op_d option">${primary_q_options[i][3]}<br>
        </div>
    </form>
</div>`;
	$("#primary-task").append(primary_task);
}

//Insert the next question into the html dom and update the variables
function nextQ() {
	$("#primary-task").empty();

	if (curr_prim_q_no == 1) {
		sec_q_attempt_for_prim.push(no_of_sec_correct);
	} else {
		sec_q_attempt_for_prim.push(
			no_of_sec_correct -
				sec_q_attempt_for_prim[sec_q_attempt_for_prim.length - 1]
		);
	}
	addToPrimaryCard(curr_prim_q_no);
	curr_prim_q_no += 1;
	clearInterval(countdown);
	resetTimer();
}

// When a checkbox is selected
function updateDuration() {
	var curTime = new Date();
	var duration = (curTime.getTime() - prevTime.getTime()) / 1000;
	primary_q_dur.push(duration);
	prevTime = curTime;
}

$("#primary-task").on("click", ".option", function () {
	if ($(".p_op_a").is(":checked") == true) {
		console.log("You selected A");
		primary_q_sel.push("A");
		if (primary_q_ans[curr_prim_q_no - 1] === "A") primary_score++;
		updateDuration();
		nextQ();
	} else if ($(".p_op_b").is(":checked") == true) {
		console.log("You selected B");
		primary_q_sel.push("B");
		if (primary_q_ans[curr_prim_q_no - 1] === "B") primary_score++;
		updateDuration();
		nextQ();
	} else if ($(".p_op_c").is(":checked") == true) {
		console.log("You selected C");
		primary_q_sel.push("C");
		if (primary_q_ans[curr_prim_q_no - 1] === "C") primary_score++;
		updateDuration();
		nextQ();
	} else if ($(".p_op_d").is(":checked") == true) {
		console.log("You selected D");
		primary_q_sel.push("D");
		if (primary_q_ans[curr_prim_q_no - 1] === "D") primary_score++;
		updateDuration();
		nextQ();
	}
});

// Pressing Space to move to the next question
document.body.onkeyup = function (e) {
	$("#primary_task").empty();
	if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
		primary_q_sel.push("N");
		updateDuration();
		nextQ();
	}
};
