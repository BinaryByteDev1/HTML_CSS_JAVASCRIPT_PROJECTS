// Function to display the time
function showTime() {

	// Using Date object to get
	// today's date and time
	var date = new Date();

	// getHOurs() function is used
	// to get hours ones
	var h = date.getHours(); // 0 - 23

	// getMinutes() function is
	// used to get minutes ones
	var m = date.getMinutes(); // 0 - 59

	// getSecond() function is
	// used to get seconds ones
	var s = date.getSeconds(); // 0 - 59


	// To show am or pm
	var session = "AM";

	
	// Condition to check that if hours
	// reaches to 12 then it again start
	// with 12
	if (h == 0) {
		h = 12;
	}

	// If hour exceeds 12 than it will
	// be subtract from 12 and make
	// session as pm
	if (h > 12) {
		h = h - 12;
		session = "PM";
	}

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	var time = h + ":" + m + ":"
			+ s + " " + session;

	// Using DOM element to display
	// elements on screen
	document.getElementById("MyClockDisplay")
				.innerText = time;

	document.getElementById("MyClockDisplay")
				.textContent = time;

	// Call the function every second use
	// setInterval() method and set time-interval
	// as 1000ms which is equal to 1s
	setTimeout(showTime, 1000);
}

showTime();
