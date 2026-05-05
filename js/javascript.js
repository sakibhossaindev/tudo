let name = document.querySelector(".name");
let message = document.querySelector("textarea");
let btnone = document.querySelector(".btnone");
let postone = document.querySelector(".postone");
let errorone = document.querySelector(".errorone");
let errortwo = document.querySelector(".errortwo");

let arr = []

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

function display() {
    arr.map((item) => {
        postone.innerHTML += `<div class="card-body card-1">
               <h5>${item.name}</h5>
               <p>${item.message}</p>
               <button class="btntwo ">post</button>
               <button class="btnthree delete">delete</button>
            </div>
           `
    });
    let deletebtn = document.querySelectorAll(".delete");
    let dlt = Array.from(deletebtn);
    dlt.map((item, index) => {
        item.addEventListener("click", () => {
            arr.splice(index, 1);
            postone.innerHTML = "";
            display();
            console.log("Clicked delete button for item at index:", index);
        })
    })


}
