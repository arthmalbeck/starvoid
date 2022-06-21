import { takeLatest, put, call } from 'redux-saga/effects';

import { listCharacter } from '../service';
import {
    LIST_CHARACTER,
    LIST_CHARACTER_PENDING,
    LIST_CHARACTER_SUCCESS,
    LIST_CHARACTER_FAILURE
} from '../actionTypes';

function* sagaListCharacter(action) {
  yield put({ type: LIST_CHARACTER_PENDING })

  try {
    const page = ("?" + action.page);
    const list = yield call(listCharacter, page)
    yield put({ 
      type: LIST_CHARACTER_SUCCESS, 
      list: list,
    })
  } catch (error) {
    yield put({ type: LIST_CHARACTER_FAILURE })
  }
}

export default function* watchListCharacter() {
  yield takeLatest(LIST_CHARACTER, sagaListCharacter)
}