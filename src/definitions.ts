declare module '@capacitor/core' {
  interface PluginRegistry {
    Idfa: IdfaPlugin;
  }
}

export interface AdvertisingInfoResponse {
  id: string | null;
  isAdTrackingLimited: boolean;
}

export interface IdfaPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getAdvertisingInfo(): Promise<AdvertisingInfoResponse>;
}
