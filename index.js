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

// const listContacts = require("./contacts");

console.log("START");

const contactsPath = path.join(__dirname, "db/contacts.json");

// const listContacts = async qwe => {
function listContacts(qwe) {
  console.log("FUNCTION-1");

  async () => {
    console.log("FUNCTION-2");
    const data = await fs.readFile(contactsPath);
    console.log("FUNCTION-3");

    console.log("data:", data);
    console.log("qwe:", qwe);

    const contacts = JSON.parse(data);
    console.log("contact-10:", contacts[9]);
    return contacts;
  };
}
// console.log("listContacts:", listContacts());
console.log("END");

listContacts("!!!qwerty");
