const fs = require("fs/promises");

const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");
console.log("__dirname:", __dirname);
console.log("contactsPath:", contactsPath);

// ==== get all contacts ====
// function listContacts() {
//   async () => {
//     const data = await fs.readFile(contactsPath);

//     console.log("data:", data);
//     const contacts = JSON.parse(data);
//     console.log("contacts:", contacts);
//     return contacts;
//   };
// }
const listContacts = async qwe => {
  const data = await fs.readFile(contactsPath);
  console.log("data:", data);
  console.log("qwe:", qwe);

  const contacts = JSON.parse(data);
  console.log("contact-10:", contacts[9]);
  return contacts;
};

module.exports = listContacts;
/*
function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
*/
