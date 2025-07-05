import fs from 'fs';
import path from 'path';

export async function getTable(search: String) {

  
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

      return data;
  } catch (error) {
      console.error('Error:', error);
  } 
}


// export async function getTable(search: String) {
    
//     var data = [({'target_use_years': '2-3 years use', 'productURL': 'https://www.amazon.com/dp/B0C5X7QCPP', 'category_id': '71', 'asin': 'B0C5X7QCPP', 'processed': 'True', 'category_name': 'Headphones & Earbuds', 'isBestSeller': 'False', 'carbon_to_manufacture': '5.0', 'reviews': '11', 'imgUrl': 'https://m.media-amazon.com/images/I/51T61IqFS7L._AC_UL320_.jpg', 'carbon_one_year': '0.5 - 1', 'boughtInLastMonth': '0', 'listPrice': '29.99', 'price': '19.99', 'id': '71', 'stars': '4.9', 'title': 'Fulgivate Wireless Earbuds, Premium Sound Bluetooth 5.3 Earbuds 48H Playtime, IPX5 Waterproof Sports in-Ear Headphones for Android iPhone Samsung (Black)', 'carbon_break_even_use_years': '0.75 years use'}), (100, {'target_use_years': '2-3 years use', 'productURL': 'https://www.amazon.com/dp/B0BYNYFTZB', 'category_id': '76', 'asin': 'B0BYNYFTZB', 'processed': 'True', 'category_name': 'Accessories & Supplies', 'isBestSeller': 'False', 'carbon_to_manufacture': '20.0', 'reviews': '0', 'imgUrl': 'https://m.media-amazon.com/images/I/615QMYtuU3L._AC_UL320_.jpg', 'carbon_one_year': '2 - 4', 'boughtInLastMonth': '0', 'listPrice': '0.0', 'price': '0.0', 'id': '76', 'stars': '4.5', 'title': 'Eettvekd 5Pack(3/3/6/6/10FT) Lightning Cable Fast Charging Cable MFi Certified Original iPhone Charger Cord Compatible for iPhone 14/13 mini/13/12/11 Pro MAX/XR/XS/8/7/Plus/6S/SE/iPad-White', 'carbon_break_even_use_years': '1 year use'}), (100, {'target_use_years': '3 years use', 'productURL': 'https://www.amazon.com/dp/B09JM8BYMY', 'category_id': '73', 'asin': 'B09JM8BYMY', 'processed': 'True', 'category_name': 'Portable Audio & Video', 'isBestSeller': 'False', 'carbon_to_manufacture': '20.0', 'reviews': '0', 'imgUrl': 'https://m.media-amazon.com/images/I/61-FKTk5PeL._AC_UL320_.jpg', 'carbon_one_year': '2 - 5', 'boughtInLastMonth': '300', 'listPrice': '0.0', 'price': '17.99', 'id': '73', 'stars': '4.5', 'title': '(Apple MFi Certified)iphone charger 10ft,2Pack 10 Foot Long Data Syncing Charging Lightning Cord Cable with 2Pack USB Wall Charger Travel Plug Adapter Box Compatible with iPhone 12/11 Pro/11/X/Xs/8/7', 'carbon_break_even_use_years': '1 year use'}), (100, {'target_use_years': '3-7 years use', 'productURL': 'https://www.amazon.com/dp/B071NDT5Q3', 'category_id': '165', 'asin': 'B071NDT5Q3', 'processed': 'True', 'category_name': 'Home Décor Products', 'isBestSeller': 'False', 'carbon_to_manufacture': '25.0', 'reviews': '7416', 'imgUrl': 'https://m.media-amazon.com/images/I/61hccMLVY1L._AC_UL320_.jpg', 'carbon_one_year': '2 - 5', 'boughtInLastMonth': '0', 'listPrice': '39.99', 'price': '31.78', 'id': '165', 'stars': '4.3', 'title': 'Emerson SmartSet Dual Alarm Clock Radio with Bluetooth Speaker, Charging Station/Phone Chargers with USB port for iPhone/iPad/iPod/Android and Tablets, ER100301', 'carbon_break_even_use_years': '1 year use'}), (100, {'target_use_years': '3 years use', 'productURL': 'https://www.amazon.com/dp/B0BWMP17F6', 'category_id': '73', 'asin': 'B0BWMP17F6', 'processed': 'True', 'category_name': 'Portable Audio & Video', 'isBestSeller': 'False', 'carbon_to_manufacture': '20.0', 'reviews': '0', 'imgUrl': 'https://m.media-amazon.com/images/I/51mmCq3o4KL._AC_UL320_.jpg', 'carbon_one_year': '2 - 5', 'boughtInLastMonth': '0', 'listPrice': '0.0', 'price': '24.99', 'id': '73', 'stars': '4.4', 'title': 'VRURC Power Bank 2 Pack 10000mAh, Portable Phone Charger, 3 Output 2 Inputs LED Display External Battery Pack- Slim cargador portatil for iPhone/Samsung Smart Devices and Cell Phones, Black & White', 'carbon_break_even_use_years': '1 year use'})]

//     return data

// }