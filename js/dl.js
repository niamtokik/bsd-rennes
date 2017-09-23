function _get(url, tag) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = "text";
  xhr.onload = function(req) {
    if (req.target.status === 200) {
      tag.innerHTML = marked(req.target.response);
    }
  };
  xhr.open("get", url);
  xhr.send();
}

_get("pages/home_meetup.md", document.getElementById("meetups"));
_get("pages/home_event.md", document.getElementById("events"));
_get("pages/home_project.md", document.getElementById("projects"));

/* here the JSON:

  { "meetups": "pages/home_meetup.md"
  , "events": "pages/home_event.md"
  , "projects": "pages/home_project"
  }

*/
