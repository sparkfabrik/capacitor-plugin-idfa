import { WebPlugin } from '@capacitor/core';

import type { AdvertisingInfoResponse, IdfaPlugin } from './definitions';

export class IdfaWeb extends WebPlugin implements IdfaPlugin {
  constructor() {
    super({
      name: 'Idfa',
      platforms: ['web'],
    });
  }

  async getAdvertisingInfo(): Promise<AdvertisingInfoResponse> {
    return { id: null, isAdTrackingLimited: true };
  }
}
