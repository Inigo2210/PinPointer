

const scoreList = {
		"Ceasy": "country_easy_high_score",
		"Cinter": "country_intermediate_high_score",
		"Chard": "country_hard_high_score",
		"Cexpert": "country_expert_high_score",
		"Cnight": "country_nightmare_high_score",
		"Fnorm": "flag_normal_high_score",
		"Fhard": "flag_hard_high_score",
		"Fexpert": "flag_expert_high_score",
		"Fnight": "flag_nightmare_high_score",
	};

	
	var id = Object.keys(scoreList);
	var game = Object.values(scoreList);
	var num = Object.keys(scoreList).length;
	
	window.addEventListener('load', function() {
		for (i = 0; i < num; ++i) {
			var score = localStorage.getItem(game[i]);
			if (score == null) {
				document.getElementById(id[i]).innerHTML = "None";
			}
			else {
				document.getElementById(id[i]).innerHTML = score;
			}
		}
	});
	
	function resetHighScores() {
		for (i = 0; i < num; ++i) {
			localStorage.removeItem(game[i]);
		}
		for (i = 0; i < num; ++i) {
			var score = localStorage.getItem(game[i]);
			if (score == null) {
				document.getElementById(id[i]).innerHTML = "None";
			}
			else {
				document.getElementById(id[i]).innerHTML = score;
			}
		}
	}