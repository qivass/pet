import {TweetsState} from "./contracts/state";
import {RootState} from "../../rootReducer";
import {createSelector} from "reselect";
import { LoadingState } from "../common/constants";

export const selectTweets = (state: RootState):TweetsState => state.tweets

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items);
export const selectLoadingState = createSelector(selectTweets, status => status.loadingState);

export const selectIsTweetsLoading = (state: RootState):boolean =>
  selectTweets(state).loadingState === LoadingState.LOADING;
export const selectIsTweetsLoaded = (state: RootState):boolean =>
  selectTweets(state).loadingState === LoadingState.LOADED;