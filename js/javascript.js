let headingone = document.querySelector(".headingone");
let name = document.querySelector(".name");
let message = document.querySelector("textarea");
let btnone = document.querySelector(".btnone");
let postone = document.querySelector(".postone");

let arr = [
    {
        name: "sakib",
        message: "this is a simple caption lo"
    }
]


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
    display();
})

