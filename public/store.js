primary_q = ["Q1", "Q2", "q3"]; // hard

primary_q_ans = ["a", "c", "d"]; // hard

primary_q_sel = [];

primary_q_dur = [];

// total_prim_attempt = 0;

curr_prim_q_no = 1;

sec_q = ["q1", "q2", "q3"]; // hard

sec_q_ans = ["a", "c", "d"]; // hard

// cur_sec_q_no = 1;

sec_q_attempt_for_prim = [];

no_of_sec_correct = 0;


// Pressing Space to move to the next question
document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    var ele = document.getElementsByClassName("radio");

    for (var i = 0; i < ele.length; i++) {
      ele[i].checked = false;
    }

    if (curr_prim_q_no == 1) {
      sec_q_attempt_for_prim.push(no_of_sec_correct);
    } else {
      sec_q_attempt_for_prim.push(
        no_of_sec_correct -
          sec_q_attempt_for_prim[sec_q_attempt_for_prim.length - 1]
      );
    }

    curr_prim_q_no += 1;

    clearInterval(countdown);
    resetTimer();    
  }
};

// When a checkbox is selected
$(document).ready(function () {
  $('input[type=radio][name="fav_language"]').change(function () {
    if ($(".p_op_a").is(":checked") == true) {
      primary_q_sel.push("a");
    }
    if ($(".p_op_b").is(":checked") == true) {
      primary_q_sel.push("b");
    }
    if ($(".p_op_c").is(":checked") == true) {
      primary_q_sel.push("c");
    }
    if ($(".p_op_d").is(":checked") == true) {
      primary_q_sel.push("d");
    }
  });
});

// When time is up
// const myCarousel = document.getElementById("carouselExampleSlidesOnly");
// myCarousel.addEventListener("slide.bs.carousel", (event) => {
//   var ele = document.getElementsByClassName("radio");
//   for (var i = 0; i < ele.length; i++) {
//     ele[i].checked = false;
//   }

//   if (curr_prim_q_no == 1) {
//     sec_q_attempt_for_prim.push(no_of_sec_correct);
//   } else {
//     sec_q_attempt_for_prim.push(
//       no_of_sec_correct -
//         sec_q_attempt_for_prim[sec_q_attempt_for_prim.length - 1]
//     );
//   }

//   curr_prim_q_no += 1;
// });

// Timer

function resetTimer() {
    console.log("timer");
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
      clearInterval(countdown);
      resetTimer();
      // $(".quiz-form").submit();
    }
  }

  let countdown = setInterval(getRemainingTime, 1000);

  getRemainingTime();
}

window.onload = resetTimer();
