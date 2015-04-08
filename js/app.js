var friends = $('.friend');
var buttons = $('button');

friends.hide();
$('#friend1').show();


function bindButtonToFriend(idNumber) {
	$( "#button" + idNumber ).click(function() {
		friends.hide();
		$('#friend' + idNumber).show();
	})
}

for (var i=1; i <= buttons.length; i++) {
	bindButtonToFriend(i);
}

$( "#friend1" ).click(function() {
	var count = $('#counter1').text();
	count = parseInt(count) + 1;
	$('#counter1').text(count);
});

$( "#friend2" ).click(function() {
	var count = $('#counter2').text();
	count = parseInt(count) + 1;
	$('#counter2').text(count);
});

$( "#friend3" ).click(function() {
	var count = $('#counter3').text();
	count = parseInt(count) + 1;
	$('#counter3').text(count);
});

$( "#friend4" ).click(function() {
	var count = $('#counter4').text();
	count = parseInt(count) + 1;
	$('#counter4').text(count);
});

$( "#friend5" ).click(function() {
	var count = $('#counter5').text();
	count = parseInt(count) + 1;
	$('#counter5').text(count);
});