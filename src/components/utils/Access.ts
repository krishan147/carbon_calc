import fs from 'fs';
import path from 'path';

export async function getTable(search: String) {

  console.log("getTable loading")
  const url = `https://advl8wt1sk.execute-api.eu-west-1.amazonaws.com/prod/use_openrouter_93824932vj32jcvuhinf9014vu120x1?query=${search}`;

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

      return data["results"];
  } catch (error) {
      console.error('Error:', error);
  } 
}