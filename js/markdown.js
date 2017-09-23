

function _get(url) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function(req) { 
    console.log(req.target.status);
    console.log(self); 
    console.log(req.target.response); 
  };
  xhr.open("get", url);
  xhr.send();
  return xhr.response;
}

_get("pages/home_meetup.md");
