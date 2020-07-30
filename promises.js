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
//resolve with message (console.log("resolved")) 


var resolve = document.querySelector("#output")
  
  var waitForRoast = timeoutms => new Promise((yes, no)=>{
    var check = () => {
      console.log("resolved")
      if(resolve.innerHTML == "Boom Roasted!") 
        yes()
      else if((timeoutms -= 3000) < 0)
        no("Rejected!")
      else
        setTimeout(check, 3000)
    }
    setTimeout(check, 3000)
  })
