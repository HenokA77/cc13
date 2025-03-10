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
