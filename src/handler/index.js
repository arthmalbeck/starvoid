import { all } from 'redux-saga/effects';

import { characterSaga, characterReducer } from './character';


export default function* rootSaga() {
  yield all([
    ...characterSaga,
  ])
}

export const rootReducer = {
    characterReducer,
}

export * from './character';
