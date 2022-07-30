import axios from 'axios';
import { API_URL } from '../constants/api-url.js';

export default async function postTask(task) {
  try {
    const response = await axios.post(`${API_URL}/tasks`, task);

    if (response.status === 201) {
      const newTask = response.data;
      return newTask;
    }

    console.error(response.status, 'Error fetching tasks');
    alert('STATUS: Error fetching tasks');
  } catch (e) {
    console.error(e);
    alert('CATCH: Error posting task');
  }
}
