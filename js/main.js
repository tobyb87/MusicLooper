$(document).ready(function(){
	var cNote = document.getElementById('cAudio');
	var dNote = document.getElementById('dAudio');
	var eNote = document.getElementById('eAudio');
	var fNote = document.getElementById('fAudio');
	var gNote = document.getElementById('gAudio');
	var hNote = document.getElementById('hAudio');
	var iNote = document.getElementById('iAudio');
	var jNote = document.getElementById('jAudio');

	$('#c').mousedown(function(){
		playbackSound('#c', cNote);
	});
	$('#d').mousedown(function(){
		playbackSound('#d', dNote);
	});
	$('#e').mousedown(function(){
		playbackSound('#e', eNote);
	});
	$('#f').mousedown(function(){
		playbackSound('#f', fNote);
	});
	$('#g').mousedown(function(){
		playbackSound('#g', gNote);
	});

	$('#h').mousedown(function(){
		playbackSound('#h', hNote);
	});
	$('#i').mousedown(function(){
		playbackSound('#i', iNote);
	});

	$('#j').mousedown(function(){
		playbackSound('#j', jNote);
	});

	$('.box').on('click',function(){
		$(this).toggleClass('active');
	});

	function playbackSound(box, note){
		if ($(box).hasClass('active')){
			note.pause();
			note.currentTime = '0';
			} else {
				if ($('#c').hasClass('active')){
					var playTime = cNote.currentTime;
				} else if ($('#d').hasClass('active')){
					var playTime = dNote.currentTime
				} else if ($('#e').hasClass('active')){
					var playTime = eNote.currentTime
				} else if ($('#f').hasClass('active')){
					var playTime = fNote.currentTime
				} else if ($('#g').hasClass('active')){
					var playTime = gNote.currentTime
				} else if ($('#h').hasClass('active')){
					var playTime = hNote.currentTime;
				} else if ($('#i').hasClass('active')){
					var playTime = iNote.currentTime;
				} else {
					var playTime = 0;
				}
			note.currentTime = playTime;
			note.play();
		}
	}
	
})