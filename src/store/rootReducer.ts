import { combineReducers } from 'redux';
import {tweetsReducer} from "./ducks/tweets/reducer";
import {TweetsState} from "./ducks/tweets/contracts/state";
import {TweetState} from "./ducks/tweet/contracts/state";
import {TagsState} from "./ducks/tags/contracts/state";
import {tagsReducer} from "./ducks/tags/reducer";
import {tweetReducer} from "./ducks/tweet/reducer";

export interface RootState {
  tweets: TweetsState;
  tweet: TweetState;
  tags: TagsState;
}

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  tags: tagsReducer,
})