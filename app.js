const website = document.querySelector("#website");

const posts = [
    {title: "Title #1", body: "post body #1"},
    {title: "Title #2", body: "post body #2"},
];

//getting data from the DB
function getPosts() {
    setTimeout(() => {
       let output = "";
       for(const post of posts) {
        output += "<li>" + post.title + ": " + post.body + "</li>";
    }
    website.innerHTML = output;
}, 1000);
}

function createPost(title, body) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         var error = false;
         posts.push({title, body});

         if (error) {
           reject(`we could not find that post...`);
         } else {
           resolve ();
         }
      }, 1000);
});
}

//browser support & it doesn't work with some async operations
async function asynFunc() {
    await createPost("title#3", "body#3");
    getPosts();
}

asyncFunc();

/*
createPost("title #3", "body #3")
   .then(() => {
      getPosts();
})
.catch((err) => {
    website.innerHTML = err;
});

const promise1 = createPost("title #3", "body#3");
const promise2 = createPost("title #4", "body#4");

Promise.all([promise1, promise2]).then(() => {
    getPosts();
});
*/