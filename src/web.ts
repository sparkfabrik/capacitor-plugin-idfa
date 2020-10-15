import { WebPlugin } from '@capacitor/core';
import { AdvertisingInfoResponse, IdfaPlugin } from './definitions';

export class IdfaWeb extends WebPlugin implements IdfaPlugin {
  constructor() {
    super({
      name: 'Idfa',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getAdvertisingInfo(): Promise<AdvertisingInfoResponse> {
    return { id: null, isAdTrackingLimited: true };
  }
}

const Idfa = new IdfaWeb();

export { Idfa };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Idfa);
