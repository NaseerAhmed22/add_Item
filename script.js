const input = document.getElementById("input");
const listItem = document.getElementById("list-item");
const box = document.querySelector(".box")

const addItem = () => {

    if (input.value === '') {

        alert("Please provide value")

    } else {

        let li = document.createElement('li');
        li.innerHTML = input.value;
        listItem.appendChild(li);
        let button = document.createElement('button');
        button.innerHTML = "Delete";
        li.appendChild(button);
        loading();
    }

    input.value = '';
 

};


listItem.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("complete");
    }
    else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
})

function loading() {

    setTimeout(() => {
        box.style.display = "block"
    }, 0);

    setTimeout(() => {
        box.style.display = "none"
    }, 1000);
  

}





