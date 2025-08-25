     ////// simple example of bulb or whatever clicking on the same button /////

// let bulb = document.querySelector("#bulb")
// let btn = document.querySelector("button")

// let flag = 0;


// btn.addEventListener("click",function(){
//   if(flag == 0){
//     bulb.style.backgroundColor = "yellow"
//     console.log("cliocked")
//     flag = 1;
//   } else{
//     bulb.style.backgroundColor = "transparent"
//     console.log("Again clieckedf")
//     flag = 0;
//   }
// })




         ////// Multiple events ///////


         //// Selecting multiple elements at a same time ///
  // let h = document.querySelectorAll("h1")
  // console.log(h)   
  // h.forEach(function(e){
  //   console.log(e)
  // })    
  
  // let a = document.querySelector("#box")
  // a.innerHTML = "<h1>Hello</h1>"

  let a = document.querySelector("#box")
  a.textContent = "<h1>Hello</h1>"


