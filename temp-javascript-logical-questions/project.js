let istatus = document.querySelector("h5")

let btn = document.querySelector("#add")
let check = 0;
// let removeFriend = document.querySelector("#remove")

btn.addEventListener("click",function(){
   if(check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    btn.innerHTML = "Remove friend"
    check = 1;
   }else{
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
    btn.innerHTML = "Add friend"
    check = 0;
   }
})


// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
// })

