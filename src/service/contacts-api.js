import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

axios.defaults.baseURL = 'https://616dadc8a83a850017caa68d.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function saveContact(value) {
  const { data } = await axios.post('/contacts', {
    id: uuidv4(),
    name: value.name,
    number: value.number,
  });
  return data;
}

export async function deleteContact(value) {
  await axios.delete(`/contacts/${value.id}`);

  return value.id;
}
