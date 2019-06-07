const getJSON = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      const data = JSON.parse(request.responseText);
      callback(null, data);
    } else {
      // We reached our target server, but it returned an error
      callback(request.responseText, null);
    }
  };

  request.onerror = function() {
    callback(request.responseText, null);
  };

  request.send();
}

export default getJSON
