const waitForRoast = document.querySelector("#wait");

const words = [
   {title: "Wait for it..."},
];

//getting info from somewhere
function getWords() {
  setTimeout(() => {
    let output = "";
    for (const word of words) {
       output += `<p>${word.title}</p>`;  
    }
    waitForRoast.innerHTML = output;
  }, 1000); 
}

function hereItComes (msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var error = false;
      words.push({ title: "Boom Roasted!"});
      
      if (error) {
        reject("Fail");
      } else {
        resolve();
      }
    }, 3000);
  });
}
getWords();

hereItComes("Boom Roasted!")
  .then(() => {
     getWords();
})
  .catch((err) => {
    waitForRoast.innerHTML = err;
});

/*const promise1 = hereItComes("Boom Roasted!");

Promise.all([promise1]).then(() => {
  getWords();
});
*/