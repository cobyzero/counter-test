// src/app/services/storage.service.ts
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class CacheStorageService {
  constructor() {}

  async saveOrUpdateItem<T>(key: string, newValue: T) {
    const { value } = await Preferences.get({ key });

    await Preferences.set({
      key,
      value: JSON.stringify(newValue),
    });

    if (value) {
      console.log(`Item actualizado: ${JSON.stringify(newValue)}`);
    } else {
      console.log(`Item insertado: ${JSON.stringify(newValue)}`);
    }
  }
}
