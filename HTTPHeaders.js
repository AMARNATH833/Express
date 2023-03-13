var request = new XMLHttpRequest ();
request.open ('GET', document.location, false);
request.setRequestHeader ('Accept', 'text / plain');
request.setRequestHeader ('Content-Type', 'text / plain');
request.setRequestHeader ('Content-Language', 'en-US');
request.send (null);
request.getAllResponseHeaders (). toLowerCase ();