const argv = require("yargs").argv;
const contactOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactOperations.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactOperations.getContactById(id);
      console.log(contact ?? `Contact with id: ${id} was not found`);
      break;

    case "add":
      const addedContact = await contactOperations.addContact(
        name,
        email,
        phone
      );
      console.log(addedContact);
      break;

    case "remove":
      const removedContact = await contactOperations.removeContact(id);
      console.log(removedContact ?? `Contact with id: ${id} was not found`);
      break;

    default:
      console.warn(`Unknown action Type: ${action}`);
  }
};

invokeAction(argv);
