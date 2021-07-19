import {TweetState} from './contracts/state';
import produce, {Draft} from "immer";
import {ITweetActions, TweetActionsType} from './actions';
import { LoadingState } from '../common/constants';

const initialTweetState:TweetState = {
  data: null,
  loadingState: LoadingState.NEVER
}

export const tweetReducer = produce((draft:Draft<TweetState>, action : ITweetActions) => {
  switch (action.type) {
    case TweetActionsType.FETCH_TWEET_DATA:
      draft.data = null;
      draft.loadingState = LoadingState.LOADING;
      break;
    case TweetActionsType.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    case  TweetActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
    case TweetActionsType.RESET_TWEET_DATA:
      draft = initialTweetState;
      break;
    default:
      return draft;
  }
}, initialTweetState)