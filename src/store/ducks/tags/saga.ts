import {call, put, takeLatest} from 'redux-saga/effects'
import {TAGS_API} from '../../../services/api/tagsApi';
import {Tag} from './contracts/state';
import {TagsActions, TagsActionsType} from "./actions";
import { LoadingState } from '../common/constants';

function* fetchTagsSaga(){
  try {
    const items: Tag[] = yield call(TAGS_API.fetchTags);
    yield put(TagsActions.setTags(items));
  }catch (error) {
    yield put( TagsActions.setTagsLoadingState(LoadingState.ERROR));
  }
 }


export default function* tagsSaga() {
  yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsSaga);
}