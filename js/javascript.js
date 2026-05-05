let name = document.querySelector(".name");
let message = document.querySelector("textarea");
let btnone = document.querySelector(".btnone");
let postone = document.querySelector(".postone");
let errorone = document.querySelector(".errorone");
let errortwo = document.querySelector(".errortwo");

let arr = []
function display() {
    arr.map((item) => {
        postone.innerHTML += `<div class="card-body card-1">
               <h5>${item.name}</h5>
               <p>${item.message}</p>
               <button class="btntwo">post</button>
               <button class="btntwo">delete</button>
            </div>
            `
    })
}

btnone.addEventListener("click", () => {
    errorone.textContent = "";
    errortwo.textContent = "";

    if (!name.value) {
        errorone.textContent = "Please enter your name";
        return;
    }

    if (!message.value) {
        errortwo.textContent = "Please enter a caption";
        return;
    }

    arr.push({
        name: name.value,
        message: message.value
    })
    postone.innerHTML = "";
    display();
    name.value = "";
    message.value = "";

})

