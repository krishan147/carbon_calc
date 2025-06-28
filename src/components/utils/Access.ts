import fs from 'fs';
import path from 'path';

export async function get_table(search: String) {

  
  const url = 'https://sidwswpe72.execute-api.eu-west-1.amazonaws.com/production/todayssums';

  const headers = {
      'Content-Type': 'application/json'
  };

  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: headers
      });

      if (!response.ok) {
         return "no data found";
      }

      const data = await response.json();

      return data;
  } catch (error) {
      console.error('Error:', error);
  } 
}