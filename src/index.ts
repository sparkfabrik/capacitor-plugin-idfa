import { registerPlugin } from '@capacitor/core';

import type { IdfaPlugin } from './definitions';

const Idfa = registerPlugin<IdfaPlugin>('Idfa', {
  web: () => import('./web').then(m => new m.IdfaWeb()),
});

export * from './definitions';
export { Idfa };
