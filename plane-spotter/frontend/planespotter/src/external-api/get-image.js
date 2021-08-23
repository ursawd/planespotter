import axios from "axios";
import avatar from "../images/avatar.jpg";
//getImage -- returns image of aircraft having registration number of regNum.
//If no image available returns avatar image placeholder
async function getImage(regNum) {
  let URL = `https://api.planespotters.net/pub/photos/reg/${regNum}`;
  const result = await axios.get(URL);
  if (result.data.photos.length === 0) return avatar;
  return result.data.photos[0].thumbnail_large.src;
}
export default getImage;

// RESPONSE
// The API returns a JSON object. In case of a successful request, the response will contain a "photos" property with an array of photo objects. If no photos were found, the array will be empty.

// {
//     photos: [
//         {
//             id:"000001",
//             thumbnail:{
//                 src:"https:\/\/cdn.planespotters.net\/33130\/b-hoy-cathay-pacific-boeing-747-467_PlanespottersNet_000001_63e19431c7_t.jpg",
//                 size:{
//                     width:200,
//                     height:133
//                 }
//             },
//             thumbnail_large:{
//                 src:"https:\/\/cdn.planespotters.net\/33130\/b-hoy-cathay-pacific-boeing-747-467_PlanespottersNet_000001_63e19431c7_280.jpg",
//                 size:{
//                     width:420,
//                     height:280
//                 }
//             },
//             link:"https:\/\/www.planespotters.net\/photo\/000001\/b-hoy-cathay-pacific-boeing-747-467",
//             photographer:"Thomas Noack"
//         }
//     ]
// }
// In case an error occurred, an "error" property will be present.

// {
//     error: "message"
