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
