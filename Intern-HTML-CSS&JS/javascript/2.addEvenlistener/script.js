let btn = document.getElementById("btn")
let text = document.getElementById("text")

btn.addEventListener("click", myFunction)
function myFunction(){
    text.innerHTML = "I am here!"
}