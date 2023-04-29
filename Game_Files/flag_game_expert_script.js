//Script for flag guesser expert mode with timer:

//List of countries initialized in object
const countryList = {
	"AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BQ": "Bonaire",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CD": "Congo (Democratic Republic of the)",
    "CG": "Congo",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "CI": "Ivory Coast",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
	"DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
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
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "North Korea",
    "KR": "South Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Laos",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "North Macedonia",
    "RO": "Romania",
    "RU": "Russian",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States of America",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
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
	var time = 10;
	var remainingTime = time;
	var highScore;
	var pinPointsStr = localStorage.getItem("pinBucks");
	var pinPoints = parseInt(pinPointsStr);
	//var pinPoints = 200;
	var hint = false;
	var audio = new Audio('timer.mp3');
	var timeBonus = 0;
	
	
	//call image for random country and options (executes onload and onclick of next)
	function getCountry() {
		document.getElementById("timeBonus").innerHTML = "Time Bonus: " + timeBonus;
		audio.pause();
		audio.currentTime = 0;
		hint = false;
		document.getElementById("pinPoints").innerHTML = "Pin Bucks: " + pinPoints;
		highScore = localStorage.getItem("flag_expert_high_score");
		if (highScore == null) {
			document.getElementById("highScore").innerHTML = "Your Best Score: none";
		}
		else {
			document.getElementById("highScore").innerHTML = "Your Best Score: " + highScore; 
		}
		clearInterval(timer);
		myTimer();
		randomValue = -1; 
		countryFetch = "";
		document.getElementById("timer").style.color = "black";
		document.getElementById("answer").style.backgroundColor = "white";
		document.getElementById("answer").innerHTML = "";
		document.getElementById("round").innerHTML = "Round: " + counter;
		document.getElementById("option0").disabled = false;
		document.getElementById("option1").disabled = false;
		document.getElementById("option2").disabled = false;
		document.getElementById("option3").disabled = false;
		document.getElementById("nextBtn").disabled = true;
		document.getElementById("powerUp1").disabled = false;
		document.getElementById("powerUp2").disabled = false;
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
		countryFetch = difficulty + randomCountry + ".jpg";
		document.getElementById("picture").src = countryFetch.toLowerCase();
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
		document.getElementById("powerUp2").innerHTML = "Get Different Flag <br> 40PB";
		document.getElementById("powerUp1").innerHTML = "Eliminate 2 Choices <br> & Stop time  30PB";
		document.getElementById("powerUp1").style.backgroundColor = "white";
		document.getElementById("powerUp2").style.backgroundColor = "white";
		clearInterval(timer);
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
			points = points - 2;
		}	
		else {
			audio.pause();
			audio.currentTime = 0;
			document.getElementById("answer").style.backgroundColor = "red";
			document.getElementById("answer").innerHTML = "Incorrect";
			points = points - 1;
		}
		counter = counter + 1;		
		if (counter == 11) {
			document.getElementById("nextBtn").disabled = true;
			document.getElementById("points").innerHTML = "Final score: " + points;
			if (points > 0) {
				pinPoints = pinPoints + (points * 2) + timeBonus;
				var newPin = pinPoints.toString(10);
				localStorage.setItem("pinBucks", newPin);
				document.getElementById("pinPoints").innerHTML = "Pin Bucks: " + pinPoints;
			}
			document.getElementById("restartBtn").innerHTML = "Play Again";
			if ((points > parseInt(localStorage.getItem("flag_expert_high_score"))) || (localStorage.getItem("flag_expert_high_score") == null)) {
				var newRecord = points.toString(10);
				localStorage.setItem("flag_expert_high_score", newRecord);
				document.getElementById("highScore").innerHTML = "Your Best Score: " + localStorage.getItem("flag_expert_high_score"); 
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
	
	//Power-Up to eliminate two choices and stop time
	function powerUp1() {
		if ((pinPoints - 30) >= 0) {
			pinPoints = pinPoints - 30;
			var newPin = pinPoints.toString(10);
			hint = true;
			localStorage.setItem("pinBucks", newPin);
			document.getElementById("pinPoints").innerHTML = "Pin Bucks: " + pinPoints;
			document.getElementById("powerUp1").disabled = true;
			document.getElementById("powerUp2").disabled = true;
			audio.pause();
			audio.currentTime = 0;
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