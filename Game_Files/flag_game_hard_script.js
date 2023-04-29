//Script for flag guesser hard mode with timer:

//List of countries initialized in object
const countryList = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AD": "Andorra",
    "AR": "Argentina",
    "AM": "Armenia",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BY": "Belarus",
    "BE": "Belgium",
    "BO": "Bolivia",
    "BR": "Brazil",
    "BG": "Bulgaria",
    "KH": "Cambodia",
    "CA": "Canada",
    "CL": "Chile",
    "CN": "China",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CZ": "Czech Republic",
    "DK": "Denmark",
	"DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GE": "Georgia",
    "DE": "Germany",
    "GR": "Greece",
    "GL": "Greenland",
    "GT": "Guatemala",
    "HT": "Haiti",
    "VA": "The Vatican",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KP": "North Korea",
    "KR": "South Korea",
    "KW": "Kuwait",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LR": "Liberia",
    "LY": "Libya",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MY": "Malaysia",
    "MT": "Malta",
    "MX": "Mexico",
    "MD": "Moldova",
    "MN": "Mongolia",
    "MA": "Morocco",
    "NL": "Netherlands",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NG": "Nigeria",
    "NO": "Norway",
    "PK": "Pakistan",
    "PA": "Panama",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RO": "Romania",
    "RU": "Russian",
    "SA": "Saudi Arabia",
    "RS": "Serbia",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SO": "Somalia",
    "ZA": "South Africa",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan",
    "TH": "Thailand",
    "TN": "Tunisia",
    "TR": "Turkey",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States of America",
    "UY": "Uruguay",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "ZW": "Zimbabwe","AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AD": "Andorra",
    "AR": "Argentina",
    "AM": "Armenia",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BY": "Belarus",
    "BE": "Belgium",
    "BO": "Bolivia",
    "BR": "Brazil",
    "BG": "Bulgaria",
    "KH": "Cambodia",
    "CA": "Canada",
    "CL": "Chile",
    "CN": "China",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CZ": "Czechia",
    "DK": "Denmark",
	"DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GE": "Georgia",
    "DE": "Germany",
    "GR": "Greece",
    "GL": "Greenland",
    "GT": "Guatemala",
    "HT": "Haiti",
    "VA": "The Vatican",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KP": "North Korea",
    "KR": "South Korea",
    "KW": "Kuwait",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LR": "Liberia",
    "LY": "Libya",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MY": "Malaysia",
    "MT": "Malta",
    "MX": "Mexico",
    "MD": "Moldova",
    "MN": "Mongolia",
    "MA": "Morocco",
    "NL": "Netherlands",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NG": "Nigeria",
    "NO": "Norway",
    "PK": "Pakistan",
    "PA": "Panama",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RO": "Romania",
    "RU": "Russian",
    "SA": "Saudi Arabia",
    "RS": "Serbia",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SO": "Somalia",
    "ZA": "South Africa",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan",
    "TH": "Thailand",
    "TN": "Tunisia",
    "TR": "Turkey",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States of America",
    "UY": "Uruguay",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "ZW": "Zimbabwe",
	};
	
	//initialize variables 	
	var countryFetch;
	var randomCountry;
	var randomCountryName;
	var source;
	var difficulty = "flags/"; 
	var picValue; 
	var country = Object.keys(countryList);
	var countryName = Object.values(countryList);
	let chosen_options = [];
	let chosen_countries = [];
	let chosen_country_options = [];
	var correctID;
	var counter = 1;
	var round; 
	var points = 0;
	var randomValue; 
	var numCountries = Object.keys(countryList).length;
	var time = 20;
	var remainingTime = time;
	var selectedID;
	var highScore;
	var pinPointsStr = localStorage.getItem("pinBucks");
	var pinPoints = parseInt(pinPointsStr);
	//var pinPoints = 200;
	var hint = false;
	var audio = new Audio('timer.mp3');
	var timeBonus = 0;
	
	//fetch user selection
	document.getElementById("countrySelect").onchange = function(){
		selectedID = document.getElementById("countrySelect").value;
		answerTest(selectedID);
	};
	
	//call image for random country and options (executes onload and onclick of next)
	function getCountry() {
		document.getElementById("timeBonus").innerHTML = "Time Bonus: " + timeBonus;
		audio.pause();
		audio.currentTime = 0;
		hint = false;
		document.getElementById("pinPoints").innerHTML = "Pin Bucks: " + pinPoints;
		highScore = localStorage.getItem("flag_hard_high_score");
		if (highScore == null) {
			document.getElementById("highScore").innerHTML = "Your Best Score: none";
		}
		else {
			document.getElementById("highScore").innerHTML = "Your Best Score: " + highScore; 
		}
		document.getElementById("correctCountry").innerHTML = "";
		document.getElementById("countrySelect").selectedIndex = 0;
		document.getElementById("countrySelect").disabled = false;
		clearInterval(timer);
		myTimer();
		randomValue = -1; 
		countryFetch = "";
		document.getElementById("timer").style.color = "black";
		document.getElementById("powerUp1").disabled = false;
		document.getElementById("powerUp2").disabled = false;
		document.getElementById("answer").style.backgroundColor = "white";
		document.getElementById("answer").innerHTML = "";
		document.getElementById("round").innerHTML = "Round: " + counter;
		document.getElementById("nextBtn").disabled = true;
		correctID = ""; 
		chosen_options = [];
		chosen_country_options = [];
		randomValue = countryShown();
		randomCountryName = countryName[randomValue];
		randomCountry = country[randomValue];
		correctID = randomCountry;
		countryFetch = difficulty + randomCountry + ".jpg";
		document.getElementById("picture").src = countryFetch.toLowerCase();
		//window.alert(correctID);
	}
	//function to choose unique random country for image 	
	function countryShown() {
		var randomNum = Math.floor(Math.random() * numCountries);
		while (chosen_countries.includes(randomNum)) {
			randomNum = Math.floor(Math.random() * numCountries);
		}
		chosen_countries.push(randomNum);
		return randomNum;
	}
	
	//determine if user selection is correct and provide feedback
	function answerTest(ID) {
		document.getElementById("powerUp1").disabled = true;
		document.getElementById("powerUp2").disabled = true;
		document.getElementById("powerUp2").innerHTML = "Get Different Flag <br> 40PB";
		document.getElementById("powerUp1").innerHTML = "Get Hint+Stop Timer <br> 25PB";
		document.getElementById("powerUp1").style.backgroundColor = "white";
		document.getElementById("powerUp2").style.backgroundColor = "white";
		clearInterval(timer);
		document.getElementById("nextBtn").disabled = false;
		document.getElementById("countrySelect").disabled = true;
		if (ID == correctID) {
			if (hint == false) {
				timeBonus = timeBonus + parseInt(document.getElementById("timer").innerHTML);
			}
			document.getElementById("timeBonus").innerHTML = "Time Bonus: " + timeBonus;
			audio.pause();
			audio.currentTime = 0;
			points = points + 1;
			document.getElementById("answer").style.backgroundColor = "green";
			document.getElementById("answer").innerHTML = "Correct";
		}
		else if (ID == "wrong") {
			document.getElementById("answer").style.backgroundColor = "red";
			document.getElementById("answer").innerHTML = "Time up!";
			document.getElementById("countrySelect").selectedIndex = 0;
			document.getElementById("correctCountry").innerHTML = "Correct country is <br>" + randomCountryName;
		}	
		else {
			audio.pause();
			audio.currentTime = 0;
			document.getElementById("answer").style.backgroundColor = "red";
			document.getElementById("answer").innerHTML = "Incorrect";
			document.getElementById("correctCountry").innerHTML = "Correct country is <br>" + randomCountryName;
		}
		counter = counter + 1;		
		if (counter == 11) {
			document.getElementById("nextBtn").disabled = true;
			document.getElementById("points").innerHTML = "Final score: " + points;
			document.getElementById("restartBtn").innerHTML = "Play Again";
			if (points > 0) {
				pinPoints = pinPoints + points + timeBonus;
				var newPin = pinPoints.toString(10);
				localStorage.setItem("pinBucks", newPin);
				document.getElementById("pinPoints").innerHTML = "Pin Bucks: " + pinPoints;
			}
			if ((points > parseInt(localStorage.getItem("flag_hard_high_score"))) || (localStorage.getItem("flag_hard_high_score") == null)) {
				var newRecord = points.toString(10);
				localStorage.setItem("flag_hard_high_score", newRecord);
				document.getElementById("highScore").innerHTML = "Your Best Score: " + localStorage.getItem("flag_hard_high_score"); 
			}
		}
		else {
			document.getElementById("points").innerHTML = "Points: " + points;
		}
		
	}
	//restart game onclick of restart button 
	function restart() {
		timeBonus = 0;
		counter = 1;
		points = 0;
		document.getElementById("points").innerHTML = "Points: " + points;
		document.getElementById("restartBtn").innerHTML = "Restart";
		chosen_countries = [];
		getCountry();
	}
	
	//function to start timer
	function myTimer() {
		remainingTime = time;
		document.getElementById("timer").innerHTML = remainingTime;
		timer = setInterval(countDown, 1000);
	}
	//function to countdown timer
	function countDown() {
		if (hint == false) {
			remainingTime = remainingTime - 1;
		}
		if (remainingTime == 5) {
			audio.play();
		}
		if (remainingTime == 3) {
			document.getElementById("timer").style.color = "orange";
		}
		if (remainingTime == 2) {
			document.getElementById("timer").style.color = "orange";
		}
		if (remainingTime == 1) {
			document.getElementById("timer").style.color = "red";
		}
		if (remainingTime == 0) {
			document.getElementById("timer").style.color = "red";
			clearInterval(timer);
			answerTest("wrong");
		}
		document.getElementById("timer").innerHTML = remainingTime;
	}
	
	//Power-Up to get hint and stop timer
	function powerUp1() {
		if ((pinPoints - 25 ) >= 0) {
			pinPoints = pinPoints - 25;
			var newPin = pinPoints.toString(10);
			localStorage.setItem("pinBucks", newPin);
			document.getElementById("pinPoints").innerHTML = "Pin Bucks: " + pinPoints;
			var hintType = Math.floor(Math.random() * 3);
			hint = true;
			audio.pause();
			audio.currentTime = 0;
			if (hintType == 0) {
				var firstChar = randomCountryName.charAt(0)
				var lastChar = randomCountryName.slice(-1);
				window.alert("The correct country starts with '" + firstChar + "' and ends with '" + lastChar + "'."); 
			}
			else if (hintType == 1) {
				window.alert("The correct country has a country code of " + randomCountry +".");
			}
			else if (hintType == 2) {
				var firstChar = randomCountryName.charAt(0)
				var secondChar = randomCountryName.charAt(1)
				var thirdChar = randomCountryName.charAt(2)
				window.alert("The first three letters of the correct country are '" + firstChar + secondChar + thirdChar + "'.");
			}
			document.getElementById("powerUp1").disabled = true;
		}
		else {
			document.getElementById("powerUp1").innerHTML = "Not enough Pin Bucks";
			document.getElementById("powerUp1").style.backgroundColor = "red";
		}
	}
	
	//Power-Up to get different image
	function powerUp2() {
		if ((pinPoints - 40 ) >= 0) {
			pinPoints = pinPoints - 40;
			var newPin = pinPoints.toString(10);
			localStorage.setItem("pinBucks", newPin);
			getCountry();
		}
		else {
			document.getElementById("powerUp2").innerHTML = "Not enough Pin Bucks";
			document.getElementById("powerUp2").style.backgroundColor = "red";
		}
	}
	