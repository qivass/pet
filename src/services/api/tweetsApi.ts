import axios from "axios";
import { Tweet } from "../../store/ducks/tweets/contracts/state";

export async function fetchTweets():Promise<Tweet[]> {
  const response = await axios.get('/tweets/?_sort=id&_order=desc');
  return response.data;
}

export async function fetchTweetData(id:string):Promise<Tweet> {
  const response = await axios.get(`/tweets/${id}`);
  return response.data;
}

export async function addTweet(payload:Tweet):Promise<Tweet> {
  const response = await axios.post(`/tweets/`, payload);
  return response.data;
}

export const TWEETS_API = {
  fetchTweets,
  fetchTweetData,
  addTweet,
}