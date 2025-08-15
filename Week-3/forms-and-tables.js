const form = document.getElementById("userForm");

const tableBody = document.querySelector("#userTable tbody");
document.getElementById("emailError")

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  //create a new row
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${age}</td>`;
//attach to table
  tableBody.appendChild(newRow);
  form.reset(); // clears the form to go back to normal
}

