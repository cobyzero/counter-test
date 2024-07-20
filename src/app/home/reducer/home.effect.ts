import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SaveAction, SyncAction } from './home.action';
import { from, map, switchMap } from 'rxjs';
import { CacheStorageService } from 'src/app/services/cache.service';

@Injectable({
  providedIn: 'root',
})
export class HomeEffect {
  constructor(
    public actions$: Actions,
    public cacheService: CacheStorageService
  ) {}

  sync$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SyncAction),
      switchMap((state) => {
        return from(
          this.cacheService.saveOrUpdateItem('time', state.time)
        ).pipe(map(() => SaveAction(state.time)));
      })
    )
  );
}
