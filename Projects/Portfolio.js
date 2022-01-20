const companyname = document.querySelectorAll(".NEO");

companyname.forEach((highlight) => {
  highlight.addEventListener("click", () => colour(highlight));
});

function colour(highlight){
    companyname.forEach((highlight)=>{
        highlight.classList.remove('clicked')
    })
    highlight.addEventListener("click", () => active('allexperiences') );
}

function active(abc){
    highlight.classList.add('clicked')
    let x=document.getElementsByClassName(abc)
    for(let i=0 ;i<x.length;i++){
        var s = x[i].style;
      s.display = s.display === 'none' ? 'block' : 'none';
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


