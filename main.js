var request = require('request');

request("http://content.warframe.com/dynamic/worldState.php", function(error, response, body) {
    if(error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);
    console.log(JSON.parse(body));
});
