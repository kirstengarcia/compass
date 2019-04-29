import { Action } from '@ngrx/store';

export enum DashboardStateActionTypes {
  LOAD_DATA = '[Dashboard] load data',
  UPDATE_STATE  = '[Dashboard] update state',
  CLEANUP = '[Dashboard] cleanup'
}

/** Action for loading required DB data. */
export class LoadData implements Action {
  readonly type = DashboardStateActionTypes.LOAD_DATA;

  constructor() { }
}

/** Action for updating local state. */
export class UpdateState implements Action {
  readonly type = DashboardStateActionTypes.UPDATE_STATE;
  constructor(
    public stateVar: string,
    public newVal: any
  ) { }
}

/** Action for cleaning up loading subscriptions. */
export class Cleanup implements Action {
  readonly type = DashboardStateActionTypes.CLEANUP;
  constructor() { }
}

export type DashboardStateActions =
  LoadData |
  UpdateState |
  Cleanup;