function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );
  xhr.onload = () => {
    const data = JSON.parse(xhr.response).query.pages[21721040].extract;
    callback(data);
  };
  xhr.send();
}

queryWikipedia(createElement);
