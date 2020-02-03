import { Reducer, Action } from "redux";
import { AppThunkAction } from "../store";

export interface SampleState {
  text: string;
}

export enum Actions {
  FETCHSAMPLESASYNC = "FETCH_SAMPLES_ASYNC",
  FETCHSAMPLESSYNC = "FETCH_SAMPLES_SYNC"
}

interface IFETCHSAMPLESASYNC {
  type: Actions.FETCHSAMPLESASYNC;
  payload: string;
}

interface IFETCHSAMPLESSYNC {
  type: Actions.FETCHSAMPLESSYNC;
  payload: string;
}
export type KnownAction = IFETCHSAMPLESASYNC | IFETCHSAMPLESSYNC;


export const sampleActions = {
  fetchSamplesAsync: (): AppThunkAction<KnownAction> => async (dispatch, getState) => {
    dispatch({ type: Actions.FETCHSAMPLESASYNC, payload: "async" });
    return;
  },
  fetchSamplesSync: (): AppThunkAction<KnownAction> => (dispatch, getState, ) => {
    dispatch({ type: Actions.FETCHSAMPLESSYNC, payload: "sync" });
  }
}



export const initialState: SampleState = {
  text: "initial value",
};



export const sampleReducer: Reducer<SampleState> = (currentState: SampleState, incomingAction: Action) => {
  const action = incomingAction as KnownAction;

  switch (action.type) {
    case Actions.FETCHSAMPLESASYNC:
      return { ...currentState, text: action.payload };
    case Actions.FETCHSAMPLESSYNC:
      return { ...currentState, text: action.payload };
    default:
      //return initialState;
      // The following line guarantees that every action in the KnownAction union has been covered by a case above
      const exhaustiveCheck: never = action;
  }

  return currentState || initialState;
};