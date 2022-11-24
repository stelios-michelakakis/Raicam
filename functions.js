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


const array_institutes = ["Technical University of Munich", "Technical University of Munich", "Universidad De Seville", "Tampere University", "Karlsruhe Institute of Technology", "University of Turku", "Istituto Italiano Di Technologia", "École nationale supérieure de techniques avancées Paris", "The University of West of England", "The University of Manchester"];
var selection1 = document.getElementById("institute1");
var selection2 = document.getElementById("institute2");
var selection3 = document.getElementById("institute3");

var select = document.getElementById("example-select");


selection1.addEventListener('change', function() {
if(selection1.value==selection2.value || selection1.value==selection3.value){
  selection1.value=selection1.options[1];
  alert("You can't enter the same institute twice.");
}
})

selection2.addEventListener('change', function() {
if(selection2.value==selection1.value || selection2.value==selection3.value){
  selection2.value=selection2.options[1];
  alert("You can't enter the same institute twice.");
}
})

selection3.addEventListener('change', function() {
if(selection3.value==selection1.value || selection2.value==selection3.value){
  selection3.value=selection3.options[1];
  alert("You can't enter the same institute twice.");
}
})

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



const submit_btn = document.getElementById("submit");

submit_btn.addEventListener('click', () => {

  if (selection1 == selection2 || selection2 == selection3 || selection3 == selection1) {
    alert("Institutes of preference must be unique in each selection!");
    console.log("Same");
  }
}
)