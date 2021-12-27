let displayxyz = document.getElementById("display");

// let buttonxyz= Array.from(document.getElementsByClassName("btn"))

// function clickingxyz(btnxyz){
//     btnxyz.addEventListener("click",(xyz)=>{
//         switch(xyz.target.innerText){
//             case 'C':
//                 displayxyz.innerText=""
//                 break
//             case '←':
//                 displayxyz.innerText= displayxyz.innerText.slice(0,-1)
//                 break
//             case '=':
//                 displayxyz.innerText= eval(displayxyz.innerText)
//                 break
//             default:
//                 displayxyz.innerText = display.innerText + xyz.target.innerText
//             break
//         }
//     })

// }

// buttonxyz.map(abcxyz=>clickingxyz(abcxyz))

function clickonbutton(value) {
  displayxyz.innerText = displayxyz.innerText + value;
}

function clearxyz(){
    displayxyz.innerText=""
}

function backxyz(){
    displayxyz.innerText=displayxyz.innerText.slice(0,-1)
}

function equalxyz(){
    displayxyz.innerText=eval(displayxyz.innerText)
}