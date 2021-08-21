import axios from "axios";
async function getImage() {
  let URL = "https://api.planespotters.net/pub/photos/reg/N522AX";
  const result = await axios.get(URL);
  console.log("getImage", result.data.photos[0].thumbnail.src);
  if (result.data.photos === []) return [];
  return result.data.photos[0].thumbnail.src;
}
export default getImage;
