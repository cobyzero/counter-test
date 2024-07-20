import { createAction } from '@ngrx/store';

export enum SyncType {
  Sync = '[Home Component] Sync',
  Save = '[Home Component] Save',
}

export const SyncAction = createAction(SyncType.Sync, (time: number) => ({
  time,
}));

export const SaveAction = createAction(SyncType.Save, (time: number) => ({
  time,
}));
