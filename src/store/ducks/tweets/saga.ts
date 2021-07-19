import {call, put, select, takeLatest} from 'redux-saga/effects'
import {TWEETS_API} from '../../../services/api/tweetsApi';
import {LoadingState} from '../common/constants';
import {AddTweetActionInterface, FetchAddTweetActionInterface, TweetsActions, TweetsActionsType} from "./actions";
import {Tweet} from './contracts/state';
import {selectTweets} from "./selectors";

function* fetchTweetsSaga(){
  try {
    const items: Tweet[] = yield call(TWEETS_API.fetchTweets);
    yield put(TweetsActions.setTweets(items));
  }catch (error) {
    yield put(TweetsActions.setTweetsLoadingState(LoadingState.ERROR));
  }
 }

function* addTweetSaga({payload}: FetchAddTweetActionInterface) {
  try {
    const data:Tweet = {
      _id: Math.random().toString(36).slice(2),
      text: payload,
      user: {
        "fullname": "Alexey Polyanskiy",
        "username": "qivass",
        "avatarUrl": "https://source.unsplash.com/random/200x200" + window.performance.now(),
      }
    }
    const tweet:Tweet = yield call(TWEETS_API.addTweet, data);
    yield put(TweetsActions.addTweet(tweet));
  } catch (error) {
    yield put(TweetsActions.setTweetsLoadingState(LoadingState.ERROR));
  }
}


export default function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsSaga);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, addTweetSaga);
}