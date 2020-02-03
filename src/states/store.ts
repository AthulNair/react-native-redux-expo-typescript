import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "remote-redux-devtools";
import { SampleState, sampleReducer } from "./sample/SampleStore";
let middleware = [thunk];
const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));

export interface AppState {
  samples: SampleState;
}

export const store = createStore(
  combineReducers<AppState>({
    samples: sampleReducer,
  }),
  composeEnhancers
);

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => AppState): void;
}

export interface AppThunkActionAsync<TAction, TResult> {
  (dispatch: (action: TAction) => void, getState: () => AppState): Promise<TResult>;
}
// sagaMiddleware.run(sagaFunctions);
