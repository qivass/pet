import {TweetsState} from './contracts/state';
import produce, {Draft} from "immer";
import {ITweetsActions, TweetsActionsType} from './actions';
import {LoadingState} from '../common/constants';

const initialTweetsState:TweetsState = {
  items:[],
  loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft:Draft<TweetsState>, action : ITweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.FETCH_TWEETS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    case TweetsActionsType.FETCH_ADD_TWEET:
      draft.loadingState = LoadingState.LOADING
      break;
    case TweetsActionsType.ADD_TWEET:
      draft.items = [action.payload, ...draft.items];
      draft.loadingState = LoadingState.LOADED;
      break;
    case  TweetsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
    default:
      return draft;
  }
}, initialTweetsState)