//Script for country image guesser easy mode:

//List of countries initialized in object
const countryList = {
		"AR": "Argentina",
		"AU": "Australia",
		"AT": "Austria",
		"BS": "The Bahamas",
		"BD": "Bangladesh",
		"BE": "Belgium",
		"BW": "Botswana",
		"BR": "Brazil",
		"CA": "Canada",
		"CL": "Chile",
		"CN": "China",
		"CO": "Colombia",
		"CR": "Costa Rica",
		"CU": "Cuba",
		"CZ": "Czech Republic",
		"DK": "Denmark",
		"DO": "Dominican Republic",
		"EC": "Ecuador",
		"EG": "Egypt",
		"FJ": "Fiji",
		"FI": "Finland",
		"FR": "France",
		"DE": "Germany",
		"GR": "Greece",
		"GL": "Greenland",
		"GT": "Guatemala",
		"VA": "Vatican",
		"HK": "Hong Kong",
		"IS": "Iceland",
		"IN": "India",
		"ID": "Indonesia",
		"IE": "Ireland",
		"IL": "Israel",
		"IT": "Italy",
		"JP": "Japan",
		"KE": "Kenya",
		"KR": "South Korea",
		"LU": "Luxembourg",
		"MY": "Malaysia",
		"MV": "Maldives",
		"MX": "Mexico",
		"MN": "Mongolia",
		"NP": "Nepal",
		"NL": "Netherlands",
		"NZ": "New Zealand",
		"NO": "Norway",
		"PA": "Panama",
		"PE": "Peru",
		"PH": "Philippines",
		"PL": "Poland",
		"PT": "Portugal",
		"QA": "Qatar",
		"RO": "Romania",
		"SA": "Saudi Arabia",
		"SG": "Singapore",
		"ZA": "South Africa",
		"ES": "Spain",
		"SE": "Sweden",
		"CH": "Switzerland",
		"TW": "Taiwan",
		"TZ": "Tanzania",
		"TH": "Thailand",
		"TR": "Turkey",
		"UA": "Ukraine",
		"AE": "UAE",
		"GB": "United Kingdom",
		"US": "USA",
	};
	
	//initialize variables 	
	var countryFetch;
	var randomCountry;
	var randomCountryName;
	var source;
	var difficulty = "easy"; 
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
	var highScore;
	var pinPointsStr = localStorage.getItem("pinBucks");
	var pinPoints = parseInt(pinPointsStr);
	//var pinPoints = 200;
	
	//call image for random country and options (executes onload and onclick of next)
	function getCountry() {
		document.getElementById("pinPoints").innerHTML = "Pin Bucks: " + pinPoints;
		highScore = localStorage.getItem("country_easy_high_score");
		if (highScore == null) {
			document.getElementById("highScore").innerHTML = "Your Best Score: none";
		}
		else {
			document.getElementById("highScore").innerHTML = "Your Best Score: " + highScore; 
		}
		var variation;
		randomValue = -1; 
		countryFetch = "";
		document.getElementById("answer").style.backgroundColor = "white";
		document.getElementById("answer").innerHTML = "";
		document.getElementById("round").innerHTML = "Round: " + counter;
		document.getElementById("powerUp1").disabled = false;
		document.getElementById("powerUp2").disabled = false;
		document.getElementById("option0").disabled = false;
		document.getElementById("option1").disabled = false;
		document.getElementById("option2").disabled = false;
		document.getElementById("option3").disabled = false;
		document.getElementById("nextBtn").disabled = true;
		document.getElementById("option0").style.backgroundColor = "white";
		document.getElementById("option1").style.backgroundColor = "white";
		document.getElementById("option2").style.backgroundColor = "white";
		document.getElementById("option3").style.backgroundColor = "white";
		correctID = ""; 
		chosen_options = [];
		chosen_country_options = [];
		randomValue = countryShown();
		var option1 = randomCountryOptions();
		var option2 = randomCountryOptions();
		var option3 = randomCountryOptions();
		randomCountryName = countryName[randomValue];
		randomCountry = country[randomValue];
		var ID1 = randomizeOptions();
		var ID2 = randomizeOptions();
		var ID3 = randomizeOptions();
		var ID4 = randomizeOptions();
		document.getElementById(ID1).innerHTML = countryName[option1];
		document.getElementById(ID2).innerHTML = countryName[option2];
		document.getElementById(ID3).innerHTML = countryName[option3];
		document.getElementById(ID4).innerHTML = randomCountryName;
		correctID = ID4;
		variation = Math.floor(Math.random() * 5);
		countryFetch = difficulty + "_photos/" + randomCountry + variation + ".jpg";
		document.getElementById("picture").src = countryFetch;
		//window.alert(countryFetch);
	}
	//function to randomize placement of correct answer
	function randomizeOptions() {
		var randomNum = Math.floor(Math.random() * 4);
		while (chosen_options.includes(randomNum)) {
			randomNum = Math.floor(Math.random() * 4);
		}
		chosen_options.push(randomNum);
		return "option" + randomNum.toString(10)
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
	//function to choose random countries for incorrect options
	function randomCountryOptions() {
		var randomNum = Math.floor(Math.random() * numCountries);
		while ((chosen_country_options.includes(randomNum)) || (randomNum == randomValue)) {
			randomNum = Math.floor(Math.random() * numCountries);
		}
		chosen_country_options.push(randomNum);
		return randomNum;
	}
	//determine if user selection is correct and provide feedback
	function answerTest(ID) {
		document.getElementById("powerUp1").disabled = true;
		document.getElementById("powerUp2").disabled = true;
		document.getElementById("powerUp2").innerHTML = "Get Different Image <br> 30PB";
		document.getElementById("powerUp1").innerHTML = "Eliminate 2 Choices <br> 20PB";
		document.getElementById("powerUp1").style.backgroundColor = "white";
		document.getElementById("powerUp2").style.backgroundColor = "white";
		document.getElementById("option0").style.backgroundColor = "red";
		document.getElementById("option1").style.backgroundColor = "red";
		document.getElementById("option2").style.backgroundColor = "red";
		document.getElementById("option3").style.backgroundColor = "red";
		document.getElementById(correctID).style.backgroundColor = "green";
		document.getElementById("option0").disabled = true;
		document.getElementById("option1").disabled = true;
		document.getElementById("option2").disabled = true;
		document.getElementById("option3").disabled = true;
		document.getElementById("nextBtn").disabled = false;
		if (ID == correctID) {
			points = points + 1;
			document.getElementById("answer").style.backgroundColor = "green";
			document.getElementById("answer").innerHTML = "Correct";
		}
		else {
			document.getElementById("answer").style.backgroundColor = "red";
			document.getElementById("answer").innerHTML = "Incorrect";
		}
		counter = counter + 1;		
		if (counter == 11) {
			document.getElementById("nextBtn").disabled = true;
			document.getElementById("points").innerHTML = "Final score: " + points;
			pinPoints = pinPoints + points;
			var newPin = pinPoints.toString(10);
			localStorage.setItem("pinBucks", newPin);
			document.getElementById("pinPoints").innerHTML = "Pin Bucks: " + pinPoints;
			document.getElementById("restartBtn").innerHTML = "Play Again";
			if ((points > parseInt(localStorage.getItem("country_easy_high_score"))) || (localStorage.getItem("country_easy_high_score") == null)) {
				var newRecord = points.toString(10);
				localStorage.setItem("country_easy_high_score", newRecord);
				document.getElementById("highScore").innerHTML = "Your Best Score: " + localStorage.getItem("country_easy_high_score"); 
			}
		}
		else {
			document.getElementById("points").innerHTML = "Points: " + points;
		}
		
	}
	//restart game onclick of restart button 
	function restart() {
		counter = 1;
		points = 0;
		document.getElementById("points").innerHTML = "Points: " + points;
		document.getElementById("restartBtn").innerHTML = "Restart";
		chosen_countries = [];
		getCountry();
	}
	//Power-Up to eliminate two choices
	function powerUp1() {
		if ((pinPoints - 20) >= 0) {
			pinPoints = pinPoints - 20;
			var newPin = pinPoints.toString(10);
			localStorage.setItem("pinBucks", newPin);
			document.getElementById("pinPoints").innerHTML = "Pin Bucks: " + pinPoints;
			document.getElementById("powerUp1").disabled = true;
			document.getElementById("powerUp2").disabled = true;
			var ran1 = Math.floor(Math.random() * 4);
			while (("option" + ran1) == correctID) {
				ran1 = Math.floor(Math.random() * 4);
			}
			var ran2 = Math.floor(Math.random() * 4);
			while ((("option" + ran2) == correctID) || (ran2 == ran1)) {
				ran2 = Math.floor(Math.random() * 4);
			}
			document.getElementById("option"+ ran1).style.backgroundColor = "red";
			document.getElementById("option"+ ran2).style.backgroundColor = "red";
			}
		else {
			document.getElementById("powerUp1").innerHTML = "Not enough Pin Bucks";
			document.getElementById("powerUp1").style.backgroundColor = "red";
		}
	}
	//Power-Up to get different image
	function powerUp2() {
		if ((pinPoints - 30 ) >= 0) {
			pinPoints = pinPoints - 30;
			var newPin = pinPoints.toString(10);
			localStorage.setItem("pinBucks", newPin);
			getCountry();
		}
		else {
			document.getElementById("powerUp2").innerHTML = "Not enough Pin Bucks";
			document.getElementById("powerUp2").style.backgroundColor = "red";
		}
	}