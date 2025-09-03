document.getElementById("myH1").textContent = `Welcome`;

document.getElementById("myP").textContent = `I am taking a JavaScript course, and this my first webpage.`;

document.getElementById("myH2")


let fullName = "Nkauza Mc";
let age = 21;

document.getElementById("p1").textContent = `My name is ${fullName}.`;
document.getElementById("p2").textContent =  `I am ${age} years old.`;
document.getElementById("p3").textContent = `I am not registered in any Computer Science Degree.`;


let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("mySp").textContent = `Hello ${username}. Welcome once again. I just learned how to accept user input. Ke thabile 😂😂❤️.`
}