newText = [];
var urlParameters = require('../../../js/third-party/url-parameters.js');

$('#crackButton').click(function() {
	crack();
});

window.onload = function() {
  var request = new XMLHttpRequest();
  request.open('get', words_file_location, 'false');
  request.onreadystatechange = function ()
  {
    if(request.readyState === 4)
    {
      if(request.status === 200 || request.status == 0)
      {
        var allText = request.responseText;
        newText = allText.split(/\r?\n/);
	  }
    }
  }
  request.send(null);
  if (urlParameters.getUrlParameter('hide-link') == 'true') {
    document.getElementById("linkToBrute").style.visibility = 'hidden';
  }
};


function crack() {
  var input = document.getElementById("psw").value;
  if (newText.includes(input)) {
    document.getElementById("timeToCrack").innerHTML = "Cracked";
  }	
  else {
	document.getElementById("timeToCrack").innerHTML = "This password isn't in our dictionary";
  }
}