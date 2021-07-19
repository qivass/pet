import {TweetState} from "./contracts/state";
import {RootState} from "../../rootReducer";
import {createSelector} from "reselect";
import { LoadingState } from "../common/constants";

export const selectTweet = (state: RootState):TweetState => state.tweet

export const selectTweetData = createSelector(selectTweet, (tweet):TweetState['data'] => tweet.data);
export const selectLoadingState = createSelector(selectTweet, (tweet):LoadingState => tweet.loadingState);

export const selectIsTweetLoading = (state: RootState):boolean =>
  selectTweet(state).loadingState === LoadingState.LOADING;
export const selectIsTweetLoaded = (state: RootState):boolean =>
  selectTweet(state).loadingState === LoadingState.LOADED;