import axios from "axios";
import {Tag} from "../../store/ducks/tags/contracts/state";

export async function fetchTags():Promise<Tag[]> {
  const response = await axios.get('/tags');
  return response.data;
}

export const TAGS_API = {
  fetchTags,
}