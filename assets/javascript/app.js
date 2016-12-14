// Start button starts clock. Stop in 30 seconds go to next question
$('#displayTriviaQ').html('Press START. You will have 30 seconds for each trivia question');
	var startClick = $('#start').on('click', start);	
	var triviaQnA = [
		{	question: 'Baltimore',
			teamChoices: ['Ravens', 'Bengals', 'Browns', 'Steelers'],
			correctTeam: 0
		},
		{	question: 'Texans',
			teamChoices: ['Jaguars', 'Texans', 'Titans', 'Colts'],
			correctTeam: 1
		},
		{	question: 'New York',
			teamChoices: ['Dolphins', 'Bills', 'Jets', 'Patriots'],
			correctTeam: 2
		},
		{	question: 'Oakland',
			teamChoices: ['Chargers', 'Broncos', 'Raiders',  'Chiefs'],
			correctTeam: 2
		},
		{	question: 'Detroit',
			teamChoices: ['Bears', 'Lions', 'Packers', 'Vikings'],
			correctTeam: 1
		},
		{	question: 'Atlanta',
			teamChoices: ['Pathers', 'Saints', 'Falcons', 'Buccaneers'],
			correctTeam: 2
		},
		{	question: 'New York',
			teamChoices: ['Cowboys', 'Giants', 'Eagles', 'Redskins'],
			correctTeam: 1
		},
		{	question: 'Seattle',
			teamChoices: ['Cardinals', 'Rams', '49ers', 'Seahawks'],
			correctTeam: 3
		}
		];

setTimeout(ThirtySeconds, 1000 * 30);
 var time = 0;
 var initialQuestion = 0;
 var t = '';
 var triviaQ = triviaQnA[initialQuestion];
 console.log(triviaQ);
	// var stopWatch;
	function start() {
		var disableb = $(this).prop('disabled', true);
		console.log (disableb);
		console.log('started clock!');
		console.log(triviaQnA[0].question);
			$('#displayTriviaQ').text('What NFL Team Plays in ' + triviaQnA.question);
		
		for (var i=0; i<triviaQ.teamChoices.length; i++) {
			$('#displayTriviaQ').text('What NFL Team plays in ' + triviaQ.question + '?');
			var choice = $('<input/>').attr(
							{type: 'button', 
							id: ''+i, 
							value: (triviaQ.teamChoices[i])
							});
			$('#choices').append(choice);
	
			$('#choices').on('click', function(){
				var val = $('#choices').val();
				console.log(t);
			});
		};	
			
			// $('button').on('click', function(){
		 //        if ($(this).data('val') == triviaQnA[initialQuestion].question.correctTeam){
		 //            console.log('correct');
		 //        }else{
		 //            console.log('loser');
					
		 		timeout = setTimeout(ThirtySeconds, 1000 * 30);

		  		// stopWatch = setInterval(count, 1000);
	};	  

	// Fill in the blanks to these functions.
	function ThirtySeconds() {

	    console.log('time is up going to next question 0 seconds left');
	}


	function reset() {
	  time = 0;
	  $("#displayTime").html("00 seconds");
	}

