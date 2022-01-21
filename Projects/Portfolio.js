// const companyname = document.querySelectorAll(".NEO");

// //  companyname.forEach((highlight) => {
// //    highlight.addEventListener("click", () => colour(highlight));
// //  })

// function colour(highlight){
//     companyname.forEach((highlight)=>{
//         highlight.classList.remove('clicked')
//     })
//     highlight.classList.add('clicked')
// }

// function active(abc){
//     highlight.classList.add('clicked')
//     let x=document.getElementsByClassName(abc)
//     for(let i=0 ;i<x.length;i++){
//         var s = x[i].style;
//       s.display = s.display === 'none' ? 'block' : 'none';
//     }
// }

var divs = ["Section1", "Section2", "Section3", "Section4", "Section5"];
var visibleId = null;
function show(id) {
  if (visibleId !== id) {
    visibleId = id;
  }
  hide();
}
function hide() {
  var div, i, id;
  for (i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if (visibleId === id) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

var colourdivs = ["Section6", "Section7", "Section8", "Section9", "Section10"];
var colourId = null;
function colour(id2) {
  if (colourId !== id2) {
    colourId = id2;
  }
  remove();
}
function remove() {
  var div, i, id2;
  for (i = 0; i < colourdivs.length; i++) {
    id2 = colourdivs[i];
    divcolour = document.getElementById(id2);
    if (colourId === id2) {
      divcolour.style.backgroundColor = "#64ffda";
      divcolour.style.color = "black";
      console.log(id2);
    } else {
      divcolour.style.backgroundColor = "black";
      divcolour.style.color = "white";
    }
  }
}

// function toggle_visibility(cl){
//    var els = document.getElementsByClassName(cl);
//    for (var i = 0; i < els.length; i++){
//       var s = els[i].style;
//       s.display = s.display === 'none' ? 'block' : 'none';
//    }
// }
// toggle_visibility('a');

// allexperiences
// function colour(highlight){
//     highlight.classList.toggle('clicked')

//     if(highlight.classList.conatins("clicked")) {
//         highlight.classList.togg('clicked')
//     }
//     else{
//         highlight.classList.remove('clicked')
//     }
// }
