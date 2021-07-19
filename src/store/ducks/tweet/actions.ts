import { Action } from "redux";
import { LoadingState } from "../common/constants";
import {TweetState} from "./contracts/state";

export enum TweetActionsType {
  SET_TWEET_DATA= 'tweet/SET_TWEET_DATA',
  FETCH_TWEET_DATA= 'tweet/FETCH_TWEET_DATA',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
  RESET_TWEET_DATA = 'tweet/RESET_TWEET_DATA',
}

export interface FetchTweetDataActionInterface extends Action<TweetActionsType>{
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload: string;
}


export interface SetTweetDataActionInterface extends Action<TweetActionsType>{
  type: TweetActionsType.SET_TWEET_DATA,
  payload: TweetState['data'];
}

export interface ResetTweetDataActionInterface extends Action<TweetActionsType>{
  type: TweetActionsType.RESET_TWEET_DATA,
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType>{
  type: TweetActionsType.SET_LOADING_STATE,
  payload: LoadingState,
}


const fetchTweetData = (payload: string):FetchTweetDataActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload,
})

const setTweetData = (payload: TweetState['data']):SetTweetDataActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
})

const resetTweetData = (): ResetTweetDataActionInterface => ({
  type: TweetActionsType.RESET_TWEET_DATA,
})

const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
})


export const TweetActions = {
  fetchTweetData,
  setTweetData,
  setTweetLoadingState,
  resetTweetData
}

export type ITweetActions = FetchTweetDataActionInterface |
  SetTweetDataActionInterface |
  SetTweetLoadingStateActionInterface |
  ResetTweetDataActionInterface;

