import axios from 'axios';
import { API_URL } from '../constants/api-url.js';

export default async function getAllTasks() {
  try {
    const response = await axios.get(`${API_URL}/tasks`);

    if (response.status === 200) {
      const tasks = response.data;
      return tasks;
    }

    console.error(response.status, 'Error fetching tasks');
    alert('STATUS: Error fetching tasks');
  } catch (e) {
    console.error(e);
    alert('CATCH: Error fetching tasks');
  }
}
