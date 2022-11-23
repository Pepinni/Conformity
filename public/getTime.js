
function showTime() {
  // alert(my_time);
  t1 = new Date();
  var test = (document.getElementById("time").value = t1);
  console.log("On first click the time is : ", t1);
  submitTimer = setTimeout(() => {
      t2 = new Date();
      console.log("After 1 seconds the time is", t2);
      // console.log(t1);
      // console.log(t2);
      console.log("The time difference is ", t2 - t1);
    }, 1000);
}

function getTimeStamp() {
    var now = new Date();
    return (
        now.getMonth() +
        1 +
        "/" +
        now.getDate() +
        "/" +
        now.getFullYear() +
        " " +
        now.getHours() +
        ":" +
    (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) +
    ":" +
    (now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds())
    );
}


function resetTimer() {
    let startDate = new Date();
    let endDate = startDate.getTime() + 1500;
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
        $(".quiz-form").submit();
    }
}

  let countdown = setInterval(getRemainingTime, 1000);
  
  getRemainingTime();
};

window.onload = resetTimer();