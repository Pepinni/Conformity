primary_q = ["Select the odd one out","Select the odd one out","Select the odd one out","Select the odd one out","Select the odd one out","Select the odd one out"];


primary_q_options = [['A','B','C','D'],['A','B','C','D'],['A','B','C','D'],['A','B','C','D'],['A','B','C','D'],['A','B','C','D'],['A','B','C','D'],['A','B','C','D']];

primary_q_ans = ['C','C','D','D','B','B'];

primary_q_priors = [[20,20,40,20],[20,20,40,20],[25,15,10,50],[25,15,10,50],[10,39,40,9],[10,39,40,9]];

primary_q_images = ["image7_trial.png","image7_trial.png","image13_trial.png","image13_trial.png","image16_trial.png","image16_trial.png"];

primary_score = 0;

primary_q_sel = [];

primary_q_dur = [];

curr_prim_q_no = 1;

function submitData() {
	$(".dummy-form-trial").submit();
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
            //     console.log("Time is up because curr_prim_q_no = ", curr_prim_q_no ,"and primary_q.length = ", primary_q.length);
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
    if(curr_prim_q_no>=primary_q.length) submitData();
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
	} else if (e.key == "p") {
		if (sn>1 && pees[sn - 1] == "P" && pees[sn-2] == "M") correct_p++;
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
