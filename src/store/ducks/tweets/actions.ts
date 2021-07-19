import { Action } from "redux";
import { LoadingState } from "../common/constants";
import {Tweet, TweetsState} from "./contracts/state";

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  ADD_TWEET = 'tweets/ADD_TWEET',
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: string;
}

export interface AddTweetActionInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.ADD_TWEET;
  payload: Tweet;
}


const fetchTweets = ():FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})

const setTweets = (payload: TweetsState['items']):SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})

const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
})

const fetchAddTweet = (payload: string):FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
})

const addTweet = (payload: Tweet):AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
})


export const TweetsActions = {
  setTweets,
  fetchTweets,
  setTweetsLoadingState,
  fetchAddTweet,
  addTweet,
}

export type ITweetsActions = FetchTweetsActionInterface |
  SetTweetsActionInterface |
  SetTweetsLoadingStateActionInterface |
  FetchAddTweetActionInterface |
  AddTweetActionInterface;