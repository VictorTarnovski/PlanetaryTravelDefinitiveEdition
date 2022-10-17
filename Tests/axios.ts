import axios from "axios";

let namepromise: any;

export default async function axiosGet(url: string) {
  namepromise = await axios.get(url);
  console.log(namepromise);
  return namepromise;
}
