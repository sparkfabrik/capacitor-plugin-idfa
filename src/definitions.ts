export interface AdvertisingInfoResponse {
  id: string | null;
  isAdTrackingLimited: boolean;
}

export interface IdfaPlugin {
  getAdvertisingInfo(): Promise<AdvertisingInfoResponse>;
}
