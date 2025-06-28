import fs from 'fs';
import path from 'path';
import { fetchAuthSession } from 'aws-amplify/auth';


export async function get_token() {

  const session = await fetchAuthSession({ forceRefresh: true }); 
  const idToken = session.tokens.idToken.toString();

  return { idToken };
}


export async function get_table(search) {

  const { idToken } = await get_token()
  
  const url = 'https://sidwswpe72.execute-api.eu-west-1.amazonaws.com/production/todayssums';

  const headers = {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${idToken}`
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
      throw error;
  } 
}