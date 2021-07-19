import {TagsState} from "./contracts/state";
import {RootState} from "../../rootReducer";
import {createSelector} from "reselect";
import { LoadingState } from "../common/constants";

export const selectTags = (state: RootState):TagsState => state.tags

export const selectTagsItems = createSelector(selectTags, tags => tags.items);
export const selectTagsLoadingState = createSelector(selectTags, status => status.loadingState);

export const selectIsTagsLoading = (state: RootState):boolean =>
  selectTags(state).loadingState === LoadingState.LOADING;
export const selectIsTagsLoaded = (state: RootState):boolean =>
  selectTags(state).loadingState === LoadingState.LOADED;