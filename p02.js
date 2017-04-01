// Kelly Grager

//declare score to count total correct answers
var totalScore = 0;

//define function to clear score cookie at start of game
function clearScore() {
	setCookie("correctAnswers", 0, 1);
}

//define function to check each answer, taking the correct answer as argument
function checkAnswer(solution) {
//declare var to take answer from user
	var answer = document.getElementById("answer").value;
//if answer isn't a number, tell the user to fix it
	if(isNaN(answer)) {
		document.getElementById("correctOrNot").innerHTML="Please enter your answer as a number.";
		document.getElementById("correctOrNot").classList.remove("hidden-message");
		document.getElementById("correctOrNot").classList.add("shown-message");
  }	
//if answer = solution, tell user they're correct and add a point to score
	if (answer == solution) {
		totalScore = Number(getCookie("correctAnswers"));
		totalScore+=1;
		setCookie("correctAnswers", totalScore, 1);
		document.getElementById("correctOrNot").innerHTML="That is correct.";
		document.getElementById("correctOrNot").classList.remove("hidden-message");
		document.getElementById("correctOrNot").classList.add("shown-message");
	}
//otherwise the answer is incorrect
	else {
		document.getElementById("correctOrNot").innerHTML="That is incorrect.";
		document.getElementById("correctOrNot").classList.remove("hidden-message");
	}
}

//define function to calculate and show percentage result
function calculateResults() {
	var result = Number(getCookie("correctAnswers")) * 100 / 3.0;
	document.getElementById("results").innerHTML=result + " % Correct";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}