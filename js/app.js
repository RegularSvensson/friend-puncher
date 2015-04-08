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