const url = "https://api.adviceslip.com/advice";
let adviseID = document.getElementById("adviseID");
let quote = document.getElementById("quote");
const button = document.getElementById("button");

const fetchAdvise = async () =>{
    const result = await fetch(url);
    const data = await result.json();

    adviseID.innerHTML = `ADVICE #${data.slip.id}`;
    quote.innerHTML = data.slip.advice ;
    
}   

button.addEventListener('click', fetchAdvise)

window.onload = () => fetchAdvise()