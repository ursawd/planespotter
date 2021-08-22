import axios from "axios";
import avatar from "../images/avatar.jpg";
async function getImage(regNum) {
  let URL = `https://api.planespotters.net/pub/photos/reg/${regNum}`;
  const result = await axios.get(URL);
  console.log(result);
  if (result.data.photos.length === 0) return avatar;
  return result.data.photos[0].thumbnail_large.src;
}
export default getImage;
