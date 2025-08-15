const form = document.getElementById("userForm");
let table = document.getElementById("userTable");

// Check if tbody exists, if not, create it
let tableBody = table.querySelector("tbody");
if (!tableBody) {
  tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
}

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();

  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${age}</td>`;

  tableBody.appendChild(newRow);
  form.reset();
}
