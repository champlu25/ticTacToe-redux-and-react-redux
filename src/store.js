import { initialState, reducer } from "./reducer";

const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];

  return {
    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    getState: () => state,
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
  };
};

export const store = createStore(reducer, initialState);
