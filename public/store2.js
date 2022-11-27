primary_q = [
	"Count total no. of figures in the above image.",
	"Count total no. of figures in the above image.",
	"Which horse is different?",
	"Which horse is different?",
	"Which one is different?",
	"Which one is different?",
	"Which colors are the same ?",
	"Which colors are the same ?",
	"How many squares are there ?",
	"How many squares are there ?",
	"Which one is different",
	"Which one is different",
	"How many triangles are present in the above figure ?",
	"How many triangles are present in the above figure ?",
	"Which of the above figures is different?",
	"Which of the above figures is different?",
	"Count the number of differences in the above images.",
	"Count the number of differences in the above images.",
	"How many rectangles are there in the figure?",
	"How many rectangles are there in the figure?",
	"Which one is different",
	"Which one is different",
	"Which one is different",
	"Which one is different",
	"Which one is different",
	"Which one is different",
	"Count no. of difference for above two images",
	"Count no. of difference for above two images",
	"Count no. of difference for above two images",
	"Count no. of difference for above two images",
	"Count no. of difference for above two images",
	"Count no. of difference for above two images",
	"How many differences are there between the above two images?",
	"How many differences are there between the above two images?",
	"Choose a figure which is different from the rest.",
	"Choose a figure which is different from the rest.",
	"Choose a figure which is different from the rest.",
	"Choose a figure which is different from the rest.",
	"How many differences are there between the above two images?",
	"How many differences are there between the above two images?",
	"Choose the correct spelling",
	"Choose the correct spelling",
	"Select the word with correct spelling",
	"Select the word with correct spelling",
	"Which is the top view?",
	"Which is the top view?",
	"Can you find the mistake?",
	"Can you find the mistake?",
	"Select the image different from the rest",
	"Select the image different from the rest",
	"Find the missing number.",
	"Find the missing number.",
	"Which path takes you out of the maze?",
	"Which path takes you out of the maze?",
	"How many colors can you see?",
	"How many colors can you see?",
	"Which square looks different?",
	"Which square looks different?",
	"How many 9’s can you see in the above picture?",
	"How many 9’s can you see in the above picture?",
];

primary_q_options = [
	["5", "7", "9", "8"],
	["5", "7", "9", "8"],
	["1", "2", "3", "All are same"],
	["1", "2", "3", "All are same"],
	["1", "2", "3", "All are same"],
	["1", "2", "3", "All are same"],
	["2 and 3", "1 and 2", "3 and 4", "None of the options"],
	["2 and 3", "1 and 2", "3 and 4", "None of the options"],
	["30", "35", "40", "45"],
	["30", "35", "40", "45"],
	["P", "Q", "R", "S"],
	["P", "Q", "R", "S"],
	["20", "24", "21", "23"],
	["20", "24", "21", "23"],
	["A", "B", "C", "D"],
	["A", "B", "C", "D"],
	["15", "5", "10", "20"],
	["15", "5", "10", "20"],
	["8", "9", "10", "7"],
	["8", "9", "10", "7"],
	["A", "B", "C", "D"],
	["A", "B", "C", "D"],
	["A", "B", "C", "D"],
	["A", "B", "C", "D"],
	["A", "B", "C", "D"],
	["A", "B", "C", "D"],
	["10", "11", "12", "14"],
	["10", "11", "12", "14"],
	["3", "5", "7", "9"],
	["3", "5", "7", "9"],
	["10", "11", "9", "5"],
	["10", "11", "9", "5"],
	["7", "9", "6", "13"],
	["7", "9", "6", "13"],
	["1", "3", "4", "5"],
	["1", "3", "4", "5"],
	["1", "2", "3", "5"],
	["1", "2", "3", "5"],
	["13", "10", "9", "11"],
	["13", "10", "9", "11"],
	["C", "A", "D", "B"],
	["C", "A", "D", "B"],
	["D", "C", "A", "B"],
	["D", "C", "A", "B"],
	["C", "D", "B", "A"],
	["C", "D", "B", "A"],
	["2,4,8", "5,9", "1,3,5,7", "3,7"],
	["2,4,8", "5,9", "1,3,5,7", "3,7"],
	["A", "B", "C", "None"],
	["A", "B", "C", "None"],
	["22", "13", "31", "24"],
	["22", "13", "31", "24"],
	["C", "A", "B", "None"],
	["C", "A", "B", "None"],
	["5", "7", "4", "6"],
	["5", "7", "4", "6"],
	["B", "D", "A", "C"],
	["B", "D", "A", "C"],
	["8", "7", "11", "9"],
	["8", "7", "11", "9"],
];

primary_q_ans = [
	"B",
	"B",
	"D",
	"D",
	"B",
	"B",
	"D",
	"D",
	"B",
	"B",
	"S",
	"S",
	"C",
	"C",
	"C",
	"C",
	"C",
	"C",
	"B",
	"B",
	"A",
	"A",
	"D",
	"D",
	"C",
	"C",
	"C",
	"C",
	"B",
	"B",
	"A",
	"A",
	"B",
	"B",
	"D",
	"D",
	"A",
	"A",
	"C",
	"C",
	"C",
	"C",
	"C",
	"C",
	"C",
	"C",
	"B",
	"B",
	"D",
	"D",
	"A",
	"A",
	"C",
	"C",
	"A",
	"A",
	"A",
	"A",
	"D",
	"D",
];

primary_q_priors = [
	[3, 62, 7, 28],
	[3, 62, 7, 28],
	[70, 10, 12, 8],
	[70, 10, 12, 8],
	[11, 69, 10, 10],
	[11, 69, 10, 10],
	[12, 18, 57, 13],
	[12, 18, 57, 13],
	[7, 73, 11, 9],
	[7, 73, 11, 9],
	[25, 55, 8, 12],
	[25, 55, 8, 12],
	[25, 3, 65, 7],
	[25, 3, 65, 7],
	[70, 15, 5, 10],
	[70, 15, 5, 10],
	[13, 13, 67, 7],
	[13, 13, 67, 7],
	[7, 17, 73, 3],
	[7, 17, 73, 3],
	[80, 7, 11, 2],
	[80, 7, 11, 2],
	[61, 19, 15, 5],
	[61, 19, 15, 5],
	[14, 6, 76, 4],
	[14, 6, 76, 4],
	[57, 23, 16, 4],
	[57, 23, 16, 4],
	[14, 66, 11, 9],
	[14, 66, 11, 9],
	[13, 77, 6, 4],
	[13, 77, 6, 4],
	[8, 82, 2, 8],
	[8, 82, 2, 8],
	[71, 9, 10, 10],
	[71, 9, 10, 10],
	[76, 4, 11, 9],
	[76, 4, 11, 9],
	[12, 68, 13, 7],
	[12, 68, 13, 7],
	[13, 15, 65, 7],
	[13, 15, 65, 7],
	[77, 3, 1, 19],
	[77, 3, 1, 19],
	[7, 2, 88, 3],
	[7, 2, 88, 3],
	[12, 3, 78, 8],
	[12, 3, 78, 8],
	[5, 5, 14, 76],
	[5, 5, 14, 76],
	[17, 3, 16, 64],
	[17, 3, 16, 64],
	[11, 5, 79, 5],
	[11, 5, 79, 5],
	[7, 16, 3, 74],
	[7, 16, 3, 74],
	[80, 4, 5, 11],
	[80, 4, 5, 11],
	[72, 8, 13, 7],
	[72, 8, 13, 7],
];

primary_q_images = [
	"1.png",
	"1.png",
	"2.png",
	"2.png",
	"3.png",
	"3.png",
	"4.png",
	"4.png",
	"5.png",
	"5.png",
	"6.png",
	"6.png",
	"7.png",
	"7.png",
	"8.png",
	"8.png",
	"9.png",
	"9.png",
	"10.png",
	"10.png",
	"11.png",
	"11.png",
	"12.png",
	"12.png",
	"13.png",
	"13.png",
	"14.png",
	"14.png",
	"15.png",
	"15.png",
	"16.png",
	"16.png",
	"image15.png",
	"image15.png",
	"image16.png",
	"image16.png",
	"image17.png",
	"image17.png",
	"image18.png",
	"image18.png",
	"image19.png",
	"image19.png",
	"image20.png",
	"image20.png",
	"image21.png",
	"image21.png",
	"image22.png",
	"image22.png",
	"image23.png",
	"image23.png",
	"image24.png",
	"image24.png",
	"image25.png",
	"image25.png",
	"image27.png",
	"image27.png",
	"image28.png",
	"image28.png",
	"image29.png",
	"image29.png",
];

primary_score = 0;

primary_q_sel = [];

primary_q_dur = [];

curr_prim_q_no = 1;

function submitData() {
	var dur = `<input type="text" name = "dur" value = "${primary_q_dur.toString()}">`;
	var sels = `<input type="text" name = "sel" value = "${primary_q_sel.toString()}">`;
	var p_score = `<input type="text" name = "p_score" value = "${primary_score}">`;
	var sec_right = `<input type="text" name = "sec_right" value = "${correct_p}">`;
	var sec_wrong = `<input type="text" name = "sec_wrong" value = "${wrong_p}">`;
	$(".dummy-form").append(dur);
	$(".dummy-form").append(sels);
	$(".dummy-form").append(p_score);
	$(".dummy-form").append(sec_right);
	$(".dummy-form").append(sec_wrong);
	$(".dummy-form").submit();
}

// Timer for primary
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
		if (curr_prim_q_no > primary_q.length) {
			clearInterval(countdown);
			submitData();
		}
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
			// if (curr_prim_q_no > primary_q.length) {
			// 	console.log(
			// 		"Time is up because curr_prim_q_no = ",
			// 		curr_prim_q_no,
			// 		"and primary_q.length = ",
			// 		primary_q.length
			// 	);
			// 	clearInterval(countdown);
			// 	submitData();
			// 	return;
			// }
			nextQ();
			clearInterval(countdown);
			resetTimer();
		}
	}
	countdown = setInterval(getRemainingTime, 1000);

	getRemainingTime();
}

function startSurvey() {
	$(".cts").hide();
	$(".instructions").hide();
	resetTimer();
	addToPrimaryCard(curr_prim_q_no - 1);
	setInterval(function () {
		var audio = new Audio(`audios/${pees[sn]}.mp3`);
		audio.play();
		sn += 1;
	}, 2000);
}

function addToPrimaryCard(i) {
	let primary_task = `<div class="card border-0">
    <img class="p-task-img" src="/Images/compress/${primary_q_images[i]}" width="600" height="350">
    <div class="card-body">
    <div class = "qs"> ${primary_q[i]}</div>
    <input type="radio" name = "option" class="p_op_a option">${primary_q_options[i][0]}<br>
            <input type="radio" name = "option" class="p_op_b option">${primary_q_options[i][1]}<br>
            <input type="radio" name = "option" class="p_op_c option">${primary_q_options[i][2]}<br>
            <input type="radio" name = "option" class="p_op_d option">${primary_q_options[i][3]}<br>
            </div>
            </div>`;
	if (i % 2 == 1)
		$("#primary-task").append(
			`<div class="change">DO YOU WISH TO CHANGE YOUR ANSWER?</div>`
		);
	$("#primary-task").append(primary_task);
}

//Insert the next question into the html dom and update the variables
function nextQ() {
	$("#primary-task").empty();
	curr_prim_q_no += 1;
	if (curr_prim_q_no >= primary_q.length) submitData();
	addToPrimaryCard(curr_prim_q_no - 1);
	makeGraph(curr_prim_q_no - 1);
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
		primary_q_sel.push("A");
		if (primary_q_ans[curr_prim_q_no - 1] === "A") primary_score++;
		updateDuration();
		nextQ();
	} else if ($(".p_op_b").is(":checked") == true) {
		primary_q_sel.push("B");
		if (primary_q_ans[curr_prim_q_no - 1] === "B") primary_score++;
		updateDuration();
		nextQ();
	} else if ($(".p_op_c").is(":checked") == true) {
		primary_q_sel.push("C");
		if (primary_q_ans[curr_prim_q_no - 1] === "C") primary_score++;
		updateDuration();
		nextQ();
	} else if ($(".p_op_d").is(":checked") == true) {
		primary_q_sel.push("D");
		if (primary_q_ans[curr_prim_q_no - 1] === "D") primary_score++;
		updateDuration();
		nextQ();
	}
});

// Pressing Space to move to the next question
document.body.onkeyup = function (e) {
	if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
		$("#primary_task").empty();
		primary_q_sel.push("N");
		updateDuration();
		nextQ();
	} else if (e.key == "p" || e.key == "P") {
		if (sn > 1 && pees[sn - 1] == "P" && pees[sn - 2] == "M") correct_p++;
		else wrong_p++;
	}
};

function makeGraph(i) {
	$(".stats-div").empty();
	if (curr_prim_q_no % 2 === 1) return;
	$(".stats-div").append(`<canvas class="stats"></canvas>`);
	const labels = ["A", "B", "C", "D"];
	const data = {
		labels: labels,
		datasets: [
			{
				label: "Majority Votes",
				data: [
					primary_q_priors[i][0],
					primary_q_priors[i][1],
					primary_q_priors[i][2],
					primary_q_priors[i][3],
				],
				backgroundColor: "rgb(255,99, 132, 0.4)", //Utils.CHART_COLORS.red,
				borderColor: "rgb(255,99,132)",
				stack: "Stack 0",
			},
		],
	};
	const config = {
		type: "bar",
		data: data,
		options: {
			plugins: {
				title: {
					display: true,
					text: "",
					color: "#000000",
				},
				legend: {
					labels: {
						color: "#000000",
					},
				},
				scales: {
					y: {
						ticks: {
							color: "#000000",
						},
					},
				},
			},
			responsive: true,
			interaction: {
				intersect: false,
			},
			scales: {
				x: {
					stacked: true,
					ticks: {
						color: "#000000",
					},
				},
				y: {
					stacked: true,
					ticks: {
						color: "#000000",
					},
				},
			},
			aspectRatio: 1,
		},
	};
	var myChart = new Chart(document.querySelector(".stats"), config);
}

var correct_p = 0;
var wrong_p = 0;
let pees =
	"MPJZEMQPMYEPAVCXMPAHPPOSGIKWMWQMSGVMVQKPAMTPPPMJJXMPPPVMPEXMFZMUPHPPPBPPPPQRPGQPRPPGPXEBMUMMDDMYQDGMLXMNDYPGBPDMMQUMZPLPPMPGMRDUPWPCPPUHOCTMKSPPJIJZZTMPMRBHIQQMPXVKAHPPMNMPFKPNPTCPRSPZJBQPTPLPPPHMDEYTFPFKGJMQPQMVPPXPJPJXZDPDPZMPMWMACMMEPPPPMGPWGRPDEJPGBMCPNFFPDDPPPFPKMMTFBPSWMMPCPPPAAAZCMQQARJMPPAIPLMWUTMEFEFDIPMPMSPUEEXZPPPJPPEPPPPPEIPMCPNPRDPPJMXDMIOPPUEMMIPPUMYDTNUVPOIUPPPNKBPWMPWPPPSXUEPEVMUPTVLEMWKUMUVMMGYBLEPCENGBGBMRQHYMGOQMBPKZFPMLMBEHPIPUCHAOHDEHMYRXWAPMOTPPPMHVVTZTMZMGYZLDMPPSPYHMHGPMQDQMOKLMMRPPCPXPRPORMGFPPWPPPPMSUPPXVQPXMMGIWMOUMPERPJPGPPPMPXPYEIMGPMSTWCDPPPZPPGXOZUIMYTERNPCPIMMPKSLIGSPMPYJPMUAPPNMWHOXMFGZPPGMPVAPUJTPPUEMPPMPLXMDKQPFCPCDPRMPPGUUPJOCZYAPZPBSPPJPPMMMOJPEDMJQROQGLSKMKMIMZMMPAPLPRPPMPPNAPPMLLXWMMKPJYRZMMPTPPVXEXNEMMPCPIMGXPZWMLPPAUJPCPMMMRGQMJDPNTMHPJDGWPMTSTPWMLPPNMKFRLABRAPPCFPPMPPFKAPPPQPDMCZEHVXNUJAJIMXDYTTMQRMMEMDDMPMELZIPMFMQKPSPVPHPURUAQJRPPPPPMIHMVPPFLCVOPIMPPQPIJMPPPQJPBVLMBHOMPMMEKLPFZKSPYCEPVPKBCMGYPRPSYRFTPMJPAPYPTGIPPBQMQMIFHTILPPMPAWXPMPMMPBPTMPSMJQGZPPDXSPPRPPPPHPPPRMBGPPQJPPMMMXUPLULPEMPPMIPPIMCPMSQGALHPMRVGDPPPMPMRBPJQBVYMPZKSPMOLPRCZPPMOBVPCLPEEMQMPRPDGCMPPPPULPPEWPPPPPMCYLDPEJPNMJUPOPQOKFCPUTDYKHVVGMJNYKXLEPFPMMUMXPMDKUOPUEMMXBFOMZGBFPFMPMPPTJEMBMPGTFPPIPOBMLIMWVCPPMMPMEMPEPHPMPVKGOPMUPDJBPPDMQPMIPMPPTJPPVMPMMIPYMMOPZMBVPDLPPXPPTPPPPMTOVPWMMPPDCPAAPSCMLOGPPPMMMQDMJPPSWMMYMPSBSSXPLPMYUMP";

let sn = 0;

// setInterval(function () {
// 	var audio = new Audio(`audios/${pees[sn]}.mp3`);
// 	audio.play();
// 	sn += 1;
// }, 2000);
