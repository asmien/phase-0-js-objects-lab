// Declare and Initialize an Attendee Object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Create a Function to Log Attendee Name
function logAttendeeName(att) {
  console.log(att.name);
}

// Create a Function to Log Ticket Price
function logTicketPrice(att) {
  console.log(att.ticketPrice);
}

// Create a Function to Update Ticket Type
function updateTicketType(att, newType) {
  att.ticketType = newType;
}

// Create a Function to Update Ticket Price
function updateTicketPrice(att, newPrice) {
  att.ticketPrice = newPrice;
}

// Create a Function to Remove the Event Property
function removeEventProperty(att) {
  delete att.event;
}

// Create a Function to Add a Checked-In Property
function addCheckedInProperty(att) {
  att.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};