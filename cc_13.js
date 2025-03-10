// Task 2
function createEmployeeCard(name, position) {
    // Select the container where employee cards will be added
    const container = document.getElementById("employeeContainer");

    // Create the card element
    const card = document.createElement("div");
    card.classList.add("employee-card");

    // Create and set up the employee name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Create and set up the employee position paragraph
    const positionPara = document.createElement("p");
    positionPara.textContent = position;

    // Create the remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add an event listener to remove the card when the button is clicked
    removeButton.addEventListener("click", function () {
        container.removeChild(card);
    });

    // Append elements to the card
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);

    // Append the card to the container
    container.appendChild(card);
}

// Example usage:
createEmployeeCard("John Doe", "Software Engineer");
createEmployeeCard("Jane Smith", "Project Manager");

// Task 3
function highlightAllEmployees() {
    // Select all employee cards
    const employeeCards = document.querySelectorAll(".employee-card");

    // Convert NodeList to an array
    const cardsArray = Array.from(employeeCards);

    // Apply a style update to highlight each card
    cardsArray.forEach(card => {
        card.classList.add("highlight");
    });
}

// Task 4
// Function to create an employee card
function createEmployeeCard(name, position) {
    // Select the container where employee cards will be added
    const container = document.getElementById("employeeContainer");

    // Create the card element
    const card = document.createElement("div");
    card.classList.add("employee-card");

    // Create and set up the employee name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Create and set up the employee position paragraph
    const positionPara = document.createElement("p");
    positionPara.textContent = position;

    // Create the remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add an event listener to remove the card when the button is clicked
    removeButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent bubbling up to the container
        container.removeChild(card);
    });

    // Append elements to the card
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);

    // Append the card to the container
    container.appendChild(card);
}

// Attach an event listener to the employeeContainer to log messages when a card is clicked
document.getElementById("employeeContainer").addEventListener("click", function (event) {
    // Ensure only clicks on employee cards trigger the log
    if (event.target.classList.contains("employee-card") || event.target.closest(".employee-card")) {
        console.log("An employee card was clicked.");
    }
});

// Example employee cards
createEmployeeCard("John Doe", "Software Engineer");
createEmployeeCard("Jane Smith", "Project Manager");

// Task 5
// Function to create an employee card
function createEmployeeCard(name, position) {
    // Select the container where employee cards will be added
    const container = document.getElementById("employeeContainer");

    // Create the card element
    const card = document.createElement("div");
    card.classList.add("employee-card");

    // Create and set up the employee name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Create and set up the employee position paragraph
    const positionPara = document.createElement("p");
    positionPara.textContent = position;

    // Create the edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    // Create the remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Event listener to enable editing
    editButton.addEventListener("click", function () {
        enableEditing(card, nameHeading, positionPara, editButton);
    });

    // Event listener to remove the card
    removeButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent event bubbling
        container.removeChild(card);
    });

    // Append elements to the card
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(editButton);
    card.appendChild(removeButton);

    // Append the card to the container
    container.appendChild(card);
}

// Function to enable inline editing
function enableEditing(card, nameHeading, positionPara, editButton) {
    // Create input fields
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = nameHeading.textContent;

    const positionInput = document.createElement("input");
    positionInput.type = "text";
    positionInput.value = positionPara.textContent;

    // Create a save button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("save-btn");

    // Event listener to save changes
    saveButton.addEventListener("click", function () {
        nameHeading.textContent = nameInput.value;
        positionPara.textContent = positionInput.value;

        // Restore original elements
        card.replaceChild(nameHeading, nameInput);
        card.replaceChild(positionPara, positionInput);
        card.replaceChild(editButton, saveButton);
    });

    // Replace static content with input fields
    card.replaceChild(nameInput, nameHeading);
    card.replaceChild(positionInput, positionPara);
    card.replaceChild(saveButton, editButton);
}

// Example employee cards
createEmployeeCard("John Doe", "Software Engineer");
createEmployeeCard("Jane Smith", "Project Manager");
