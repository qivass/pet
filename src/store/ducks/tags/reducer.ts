import {TagsState } from './contracts/state';
import produce, {Draft} from "immer";
import {ITagsActions, TagsActionsType} from './actions';
import { LoadingState } from '../common/constants';

const initialTagsState:TagsState = {
  items:[],
  loadingState: LoadingState.NEVER
}

export const tagsReducer = produce((draft:Draft<TagsState>, action : ITagsActions) => {
  switch (action.type) {
    case TagsActionsType.FETCH_TAGS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;
    case TagsActionsType.SET_TAGS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
    break;
    case  TagsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
    break;
    default:
      return draft;
  }
}, initialTagsState)