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

function bindCounterToFriend(idNumber) {
	var friend = "#friend" + idNumber
	$(friend).click(function() {
		var count = $(friend + " > .counter").text();
		count = parseInt(count) + 1;
		$(friend + " > .counter").text(count);
	})
}

for (var i = 1; i <= friends.length; i++) {
	bindCounterToFriend(i);
}
