// Selecting elements
let add = document.querySelector(".submit");
let button = document.querySelector(".text");
let listItem = document.querySelector(".list");

// Add click event listener to the submit button
add.onclick = function(e){
  e.preventDefault();
  AddList(button.value);
}

// Function to add a new list item
function AddList(value){
  // Create a new list item
  let liList = document.createElement("li");
  liList.innerHTML = `<input class="mal" type="checkbox"><span>${value}</span>`;
  listItem.appendChild(liList);
}

// Add change event listener to checkboxes
document.addEventListener('change', function(event) {
  if (event.target.classList.contains('mal')) {
    let liList = event.target.parentElement;
    if (event.target.checked) {
      liList.classList.add("taskCheckbox");
    } else {
      liList.classList.remove("taskCheckbox");
    }
  }
});