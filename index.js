// const fs = require("fs").promises;

// fs.readdir(__dirname)
//   .then(files => {
//     return Promise.all(
//       files.map(async filename => {
//         console.log("filename:", filename);
//         const stats = await fs.stat(filename);
//         return {
//           Name: filename,
//           Size: stats.size,
//           Date: stats.mtime.toLocaleDateString(),
//         };
//       }),
//     );
//   })
//   .then(result => {
//     console.log("result:", result);
//     console.table(result);
//   });
/*
const fs = require("fs/promises");

fs.readFile("db/contacts.json", "utf-8")
  // .then(data => console.log(data.toString()))
  .then(data => console.log(data))
  .catch(error => console.log(error.message));
*/

const fs = require("fs/promises");
const path = require("path");

const { listContacts, getContactById, addContact } = require("./contacts");

// console.log("START");
/*
const contactsPath = path.join(__dirname, "db/contacts.json");

// const listContacts = async qwe => {
function listContacts(qwe) {
  console.log("FUNCTION-1");

  // async () => {
  console.log("FUNCTION-2");
  // const data = await fs.readFile(contactsPath);
  const data = fs
    .readFile(contactsPath)
    .then(data => {
      console.log("data:", data);
      JSON.parse(data);
    })
    .catch(error => console.log("ERROR", error.message));

  console.log("FUNCTION-3");

  console.log("data:", data);
  console.log("qwe:", qwe);

  const contacts = JSON.parse(data);
  console.log("contact-10:", contacts[9]);
  return contacts;
  // };
}
// console.log("listContacts:", listContacts());
*/
// console.log("END");

// listContacts("!!!qwerty");

// ======= Get all contacts ===========
// let getAll = async () => {
//   const contacts = await listContacts();
//   console.log(contacts[0]);
// };
// getAll();

// listContacts().then(data => console.log(data[1]));

// ======= Get contact by ID ===========
// let contactById = async id => {
//   const rez = await getContactById(id);
//   if (!rez) {
//     throw new Error(`Contact with ID=${id} not found!`);
//   }
//   console.log(rez);
// };
// contactById("9");
// contactById(8); // must be a String

// ======= Add new contact ===========
const newContact = {
  name: "Michael Jackson",
  email: "jackson@gmail.com",
  phone: "(111) 111-1111",
};

let addNew = async data => {
  const contacts = await addContact(data);
  console.log(contacts);
};
addNew(newContact);
