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
        info.innerHTML =  "<h4>"+id+"</h4> <p>"+text+"</p>";
      });
    });
  }


const home = document.getElementsByClassName("nav-logo");
if(home){
home.addEventListener('click', ()=>{
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
})
}

const consortium_btn = document.getElementById("consortium_btn");

consortium_btn.addEventListener('click', ()=>{
  console.log("hello");
  var element = document.getElementById('consortium');
  var headerOffset = 45;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
})
