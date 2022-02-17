console.log("connected")
let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", function() {
const url="https://type.fit/api/quotes"

fetch(url)
.then(res => res.json())
.then(function(data){
    
    const indx = Math.floor(Math.random()* data.length)
    const quote = data[indx].text;
    const author = data[indx].author;
    output.innerHTML=quote;

})
.catch(error => console.log("Error"))
})