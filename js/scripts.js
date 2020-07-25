////////////////// MENU SCROLLING ////////////////////////////

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("menu").style.marginTop = "0em";
    document.getElementById("logo").style.marginTop = "0em";
    document.getElementById("logo").style.height = "30px";
    document.getElementById("nav").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    document.getElementById("nav").style.height = "55px";
  } else {
    document.getElementById("menu").style.marginTop = "3em";
    document.getElementById("logo").style.marginTop = "4em";
    document.getElementById("logo").style.height = "60px";
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.getElementById("nav").style.height = "70px";
  }
}

////////////////////////// FANCY TYPING HEADER ///////////////////////////

let wrapper
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function writingAll (stringTarget, container){
  wrapper = document.querySelector('['+container+']')
  const stringsContainer = document.getElementsByClassName(stringTarget)
     
  while(wrapper){
    for (i=0; i <  stringsContainer.length ; i++){
      const string = stringsContainer[i].textContent
      await write(string)
      await sleep(1000)
      await erase()
      await sleep(1000)
    };
  }
};

async function write(text){    
  let index = 0
  while(index < text.length){
    const timeout = 100
    await sleep(timeout)
    index++
    wrapper.innerHTML = text.substring(0, index)
  }
};


async function erase() {
  while(wrapper.textContent.length){
    const timeout = 100
    await sleep(timeout)
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2)
  }
};

writingAll('itemh', 'data-text');



///////////////////////////////ACORDION///////////////////////////


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}