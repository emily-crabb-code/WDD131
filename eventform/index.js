
const form = document.querySelector("#ticketForm");
const tickettype = document.querySelector("#tickettype");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const passwordContainer = document.querySelector("#passwordContainer");
const guestPassword = document.querySelector("#guestPassword");


function updateNotesField() {
  const value = tickettype.value;

  if(value === "many") {
    notesContainer.hidden = false;
    notes.required = true;
  } else {
    notesContainer.hidden = true;
    notes.required=false;
  }


}

tickettype.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}



form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.tickettype.value;
  const eventDate = form.eventDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();

 
  if(type === "one" && selectedCampuses.length == 0) {
    output.textContent = "You said you'd show up to a campus D: Which one? Please select at least one campus."
  }  
  

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p> Ticket Type: ${type === "one" ? "Student" : "Guest"}</p>
  <p>Event Date: ${eventDate}</p>
  ${note ? `<p>Student ID: ${note}</p>` : ""}
  `;

  form.reset();
  updateNotesField();
});
          