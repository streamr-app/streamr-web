// @flow

export type Action =
    { type: 'CREATE_USER_REQUEST', payload: Object }
  | { type: 'CREATE_USER_SUCCESS', payload: Object }
  | { type: 'CREATE_USER_FAILURE', payload: Object }

export type Dispatch = (action: Action | ThunkAction | PromiseAction | APIAction | Array<Action>) => any
export type GetState = () => Object
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
export type PromiseAction = Promise<Action>
export type APIAction = Object
