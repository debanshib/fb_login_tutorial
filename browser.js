function statusChangeCallback(response){
	console.log('statusChangeCallback');
	console.log(response);

	if (response.status === 'connected') {
		testAPI();
	} else if (response.status === 'not_authorized') {
		document.getElementById('status').innerHTML = 'Please log ' + 'into this app' 
	} else {
		document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.'	
	}
}


function checkLoginState(){
	FB.getLoginStatus(function(response){
		statusChangeCallback(response);
	});
}


window.fbAsyncInit = function(){
	FB.init({
		appId : '1846914455582478',
		cookie : true,
		xfbml : true,
		version : 'v2.8'
	});
}

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }


// FB.getLoginStatus(function(response) {
//   if (response.status === 'connected') {
//     console.log('Logged in.');
//   }
//   else {
//     FB.login(function(response){
//     	if (response.status === 'connected') console.log('logged in and connected')
//     	else if (response.status === 'not_authorized') console.log('person logged into FB but not my app')
//     	else console.log('not logged into fb')
//     }, {scope: 'public_profile, email'});
//   }
// });

// FB.logout(function(response){
// 	console.log('person is now logged out')
// })