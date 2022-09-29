let ids = document.getElementsByClassName("position_component");
$(document).ready(function () {
  for (i = 0; i < 10; i++) {
    if (window.location.href.indexOf(ids[i].getAttribute("id")) != -1) {
      var elementPosition = ids[i].getBoundingClientRect().top;
      var headerOffset = -100;
      var offsetPosition = elementPosition + window.pageYOffset + headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      content = ids[i].getElementsByClassName("position_description")[0];
      content.style.maxHeight = content.scrollHeight + "px";
      ids[i].getElementsByClassName("plus_icon")[0].innerHTML = "-";
      console.log(content);
    }
  }
});

const selected_button = Array.from(document.getElementsByClassName("map_button"))
const info = document.getElementById("info_container");

selected_button.forEach(element => {
  element.addEventListener('mouseenter', () => {
    info.style.display = 'block';
    getText(element.id)
  })
})

var coll = document.getElementsByClassName("position_head");
var plus = document.getElementsByClassName("plus_icon");
var i;
var j;
if (plus) {
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function (e) {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        e.currentTarget.getElementsByClassName("plus_icon")[0].innerHTML = "+";
      } else {
        /*for (j = 0; j < 10; j++) {
          if (coll[j] != e.currentTarget) {
            coll[j].nextElementSibling.style.maxHeight = null;
            coll[j].getElementsByClassName("plus_icon")[0].innerHTML = "+";
          }
        }*/
        content.style.maxHeight = content.scrollHeight + "px";
        e.currentTarget.getElementsByClassName("plus_icon")[0].innerHTML = "-";
      }
    });
  }
}

function getText(id) {
  console.log(id);
  var myRequest = new Request(id + '.txt');
  fetch(myRequest).then(function (response) {
    return response.text().then(function (text) {
      info.innerHTML = "<h4>" + id + "</h4> <p>" + text + "</p>";
    });
  });
}


const home = document.getElementsByClassName("nav-logo");
if (home) {
  home.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
}

const consortium_btn = document.getElementById("consortium_btn");

consortium_btn.addEventListener('click', () => {
  var element = document.getElementById('consortium');
  var headerOffset = 45;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
})
