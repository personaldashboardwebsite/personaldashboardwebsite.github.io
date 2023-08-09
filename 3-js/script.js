
var loginForm = document.getElementById("login-form");
var addresourcelistbtn = document.getElementById('add-resource-list-btn');
var resourceListContainer = document.getElementById('resource-lists-container');
var plusbtn = document.getElementById('add-resource-list-btn');
var header = document.getElementById('header');
var menubar = document.querySelector('#menubar');
var todo = document.querySelector('.todo');


addresourcelistbtn.style.display = "block";
resourceListContainer.style.display = "block";
plusbtn.style.display = "flex";
header.style.display = "flex";
menubar.style.display = "block";
todo.style.display = "block"
// Retrieve the necessary elements from the DOM
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");



// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target;
  taskItem.parentNode.removeChild(taskItem);
}

// Add click event listener to the add button
addButton.addEventListener("click", addTask);

// Add form submit event listener


// Menu bar
const element1 = document.getElementById('hamburger');
const element2 = document.getElementById('menubar');

// Add a change event listener to element1 (assumed to be a checkbox)
element1.addEventListener('change', () => {
  if (element1.checked) {
    // Move element2 to the left when checkbox is checked
    element2.style.transform = 'translateX(305px)';
  } else {
    // Bring element2 back to its original position when checkbox is unchecked
    element2.style.transform = 'translateX(0)';
  }
});

function createResourceList() {
  const resourceListNameInput = document.getElementById("resource-list-name-input");
  const resourceListName = resourceListNameInput.value.trim();

  if (resourceListName === "") {
    return;
  }

  const resourceListContainer = document.createElement("div");
  resourceListContainer.className = "resource-list-container";

  const resourceListTitle = document.createElement("h1");
  resourceListTitle.className = "resource-list-title";
  resourceListTitle.textContent = resourceListName;

  const resourceList = document.createElement("div");
  resourceList.className = "resource-list";

  const addResourceBtn = document.createElement("button");
  addResourceBtn.className = "add-resource-btn";
  addResourceBtn.textContent = "Add Resource";

  const addResource = function () {
    const headingInput = document.getElementById("heading-input");
    const linkInput = document.getElementById("link-input");
    const faviconInput = document.getElementById("favicon-input");

    const heading = headingInput.value.trim();
    const link = linkInput.value.trim();
    const favicon = faviconInput.files[0];

    if (heading === "" || link === "") {
      return;
    }

    const resourceCard = document.createElement("div");
    resourceCard.className = "resource-card";

    const faviconImg = document.createElement("img");
    faviconImg.src = URL.createObjectURL(favicon);
    faviconImg.alt = "Favicon";

    const resourceLink = document.createElement("a");
    resourceLink.href = link;
    resourceLink.target = "_blank";
    resourceLink.textContent = heading;

    resourceCard.appendChild(faviconImg);
    resourceCard.appendChild(resourceLink);

    resourceList.appendChild(resourceCard);

    hideAddResourceModal();
  };

  const cancelAddResource = function () {
    hideAddResourceModal();
  };



  function hideAddResourceModal() {
    const resourceContainer = document.getElementById("resource-container");
    const overlay = document.querySelector(".overlay");
    resourceContainer.classList.remove("visible");
    overlay.style.display = "none";
    document.body.style.backgroundColor = "#ffffff";

    document.getElementById("heading-input").value = "";
    document.getElementById("link-input").value = "";
    document.getElementById("favicon-input").value = "";
  }


  addResourceBtn.addEventListener("click", function () {
    // showAddResourceModal();
    let resourcecontainer = document.getElementById('resource-container');
    resourcecontainer.style.display = "block";
  });


  document.getElementById("add-resource-btn").onclick = addResource;
  document.getElementById("cancel-add-resource-btn").onclick = cancelAddResource;

  resourceListContainer.appendChild(resourceListTitle);
  resourceListContainer.appendChild(addResourceBtn);
  resourceListContainer.appendChild(resourceList);

  document.getElementById("resource-lists-container").appendChild(resourceListContainer);

  hideCreateResourceListModal();
}

function hideCreateResourceListModal() {
  const createResourceListModal = document.getElementById("create-resource-list-modal");
  const overlay = document.querySelector(".overlay");
  createResourceListModal.classList.remove("visible");
  overlay.style.display = "none";
  document.body.style.backgroundColor = "#ffffff";
  document.getElementById("resource-list-name-input").value = "";
}



function showCreateResourceListModal() {
  const createResourceListModal = document.getElementById("create-resource-list-modal");
  const overlay = document.querySelector(".overlay");
  createResourceListModal.classList.add("visible");
  overlay.style.display = "block";
  document.body.style.backgroundColor = "rgba(255, 255, 255, 0.7)";

}
document.querySelector(".add-resource-btn").onclick = showAddResource;
function showAddResource() {
  const resourceContainer = document.getElementById("resource-container");
  const overlay = document.querySelector(".overlay");
  resourceContainer.classList.add("visible");
  overlay.style.display = "block";
  document.body.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
}
document.getElementById('add-resource-list-btn').addEventListener("click", function () {
  showCreateResourceListModal();
});

//Todo
// Function to create a new task and add it to the task list
function addTask() {
  const taskText = taskInput.value;

  // Create a new list item
  const listItem = document.createElement("li");

  // Create a text node and append it to the list item
  const taskTextNode = document.createTextNode(taskText);
  listItem.appendChild(taskTextNode);

  // Add click event listener to the list item for deletion
  listItem.addEventListener("click", deleteTask);

  // Append the list item to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";

  listItem.classList.add("todoli");
}

var todoH1 = document.getElementById('todoH1');
var todoli = document.querySelector('.todoli');
var todoli = 0;

addButton.addEventListener("click", function () {
  todoli++;
  console.log(todoli);
  if (todoli < 1) {
    todoH1.style.display = "block"
  } else {
    todoH1.style.display = "none"
  }
  var listItem = document.querySelector('.todoli');
  listItem.addEventListener("click", function () {
    todoli--;
    console.log(todoli);
    if (todoli < 1) {
      todoH1.style.display = "block"
    } else {
      todoH1.style.display = "none"
    }
  });
});

let body = document.getElementById('body')
window.addEventListener("load", function () {
  body.style.overflow = "scroll"
})