const selected_button = Array.from(document.getElementsByClassName("map_button"))
const info = document.getElementById("info_container");

selected_button.forEach(element => {
    element.addEventListener('mouseenter', () => {
        info.style.display = 'block';
        getText(element.id)
    })
})

function getText(id) {
    console.log(id);
    var myRequest = new Request(id + '.txt');
    fetch(myRequest).then(function(response) {
      return response.text().then(function(text) {
        info.innerHTML = text;
      });
    });
  }