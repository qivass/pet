import { Action } from "redux";
import {TagsState} from "./contracts/state";
import {LoadingState} from "../common/constants";

export enum TagsActionsType {
  SET_TAGS= 'tags/SET_TAGS',
  FETCH_TAGS= 'tags/FETCH_TAGS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE'
}

export interface FetchTagsActionInterface extends Action<TagsActionsType>{
  type: TagsActionsType.FETCH_TAGS,
}


export interface SetTagsActionInterface extends Action<TagsActionsType>{
  type: TagsActionsType.SET_TAGS,
  payload: TagsState['items'];
}

export interface SetTagsLoadingStateActionInterface extends Action<TagsActionsType>{
  type: TagsActionsType.SET_LOADING_STATE,
  payload: LoadingState,
}

const fetchTags = ():FetchTagsActionInterface => ({
  type: TagsActionsType.FETCH_TAGS,
})

const setTags = (payload: TagsState['items']):SetTagsActionInterface => ({
  type: TagsActionsType.SET_TAGS,
  payload,
})

const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateActionInterface => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
})

export const TagsActions = {
  setTags,
  fetchTags,
  setTagsLoadingState,
}

export type ITagsActions = FetchTagsActionInterface |
                             SetTagsActionInterface |
                             SetTagsLoadingStateActionInterface;
