import {call, put, takeLatest} from 'redux-saga/effects'
import { TWEETS_API } from '../../../services/api/tweetsApi';
import { LoadingState } from '../common/constants';
import { Tweet } from '../tweets/contracts/state';
import {FetchTweetDataActionInterface, TweetActions, TweetActionsType} from "./actions";

function* fetchTweetDataSaga({payload}:FetchTweetDataActionInterface){
  try {
    const data: Tweet = yield call(TWEETS_API.fetchTweetData, payload);
    yield put(TweetActions.setTweetData(data));
  }catch (error) {
    yield put(TweetActions.setTweetLoadingState(LoadingState.ERROR));
  }
 }

export default function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataSaga);
}