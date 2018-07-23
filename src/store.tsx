import { createStore } from 'redux';

import enthusiasm from './ducks/reducer';

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

const store = createStore<StoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

export default store;
