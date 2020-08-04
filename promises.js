//get data from html
const resolve = document.querySelector("#output");

//create a timer that outputs a message at compeltion
function wait() {
    document.getElementById("output").innerHTML = "Wait for it...";
}
setTimeout(wait, 1000);

function roasted() {
    document.getElementById("output").innerHTML = "Boom Roasted!";
}
setTimeout(roasted, 2000);

//promise waits for timer to finish
const waitForRoast = timeoutms => new Promise((resolve, reject) => {  
    let condition;  
    
    if(resolve.innerHTML == "Boom Roasted!") {    
        resolve('Promise is resolved successfully.');  
        } else if((timeoutms -= 3000) < 0) {
        resolve('Promise is resolved successfully.');
        } else {    
        reject('Promise is rejected');  
    }
});

waitForRoast.then((message) => { 
    console.log(message);
}).catch((message) => { 
    console.log(message);
});

