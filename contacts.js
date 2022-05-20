const fs = require("fs/promises");

const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");
// console.log("__dirname:", __dirname);
// console.log("contactsPath:", contactsPath);

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
// const listContacts = async () => {
async function listContacts() {
  const data = await fs.readFile(contactsPath);

  const contacts = JSON.parse(data);
  // console.log("contact-10:", contacts[9]);
  return contacts;
}

async function getContactById(contactId) {
  const contactsArray = await listContacts();
  const result = contactsArray.find(contact => contact.id === contactId);
  if (!result) {
    return null;
  }
  return result;
}

// async function removeContact(contactId) {
//   // ...твой код
// }

async function addContact(data) {
  // name, email, phone
  const contactsArray = await listContacts();
  const newContact = { ...data, id: nanoid() };
  console.log("ID of newContact:", newContact.id);
}

module.exports = { listContacts, getContactById, addContact };
