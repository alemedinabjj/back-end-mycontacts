/* eslint-disable no-promise-executor-return */
/* eslint-disable no-unused-vars */
const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Alexandre',
    email: 'alesurf13@gmail.com',
    phone: '11999999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@gmail.com',
    phone: '11999999999',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => {
      const contact = contacts.find((c) => c.id === id);

      resolve(contact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
