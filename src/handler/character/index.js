import watchListCharacter from './saga/listCharacter';

export const characterSaga = [
  watchListCharacter(),
]

export * from './actionTypes';
export * from './reducer';
export * from './service';
