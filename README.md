# Capacitor plugin for getting Advertising ID (IDFA)

[![npm version](https://badge.fury.io/js/%40sparkfabrik%2Fcapacitor-plugin-idfa.svg)](https://badge.fury.io/js/%40sparkfabrik%2Fcapacitor-plugin-idfa)

## Index

- [Intro](#intro)
- [Supported platform](#supported-platform)
- [Installation](#installation)
- [Android configuration](#android-configuration)
- [iOS configuration](#ios-configuration)
- [Ionic configuration](#ionic-configuration)

## Intro

[Capacitor](https://capacitorjs.com/) provides a native mobile runtime and API layer for web apps. It allows mobile frontend frameworks (such as [Ionic Framework](https://ionicframework.com)) to access native device features.

The **Advertising Identifier** ([IDFA](https://developer.apple.com/documentation/adsupport/asidentifiermanager) on iOS, [AAID](https://developer.android.com/training/articles/ad-id) on Android) is a device-specific, unique, resettable ID for advertising that allows ddevelopers and marketers to track activity for advertising purposes.

This npm module allows any mobile application that uses Capacitor to access the Advertising ID, following the OS specific definition and user permissions.

The module output in the javascript framework is the following:

```ts
interface AdvertisingInfoResponse {
  id: string; // the Advertising ID (or null if not defined/permitted)
  isAdTrackingLimited: boolean; // the user defined permission to track
}
```

### Note

In version 2.0 we switched to Capacitor 3.0 and there are breaking changes, so if you are on Capacitor 2.x don't upgrade or just use version 1.x

## Supported platform

- Android
- iOS

_Note: the web version always returns null_

## Installation

`npm install @sparkfabrik/capacitor-plugin-idfa`

or

`yarn add @sparkfabrik/capacitor-plugin-idfa`

## Android configuration

_Nothing to add_

## iOS configuration

In `info.plist` make sure to add a description for the user permission request:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>...</string>
```

## Ionic app implementation

### How to use the module in your own Ionic app

```ts
import {
  Idfa,
  AdvertisingInfoResponse,
} from '@sparkfabrik/capacitor-plugin-idfa';

// Get advertising id.
Idfa.getAdvertisingInfo()
  .then((response: AdvertisingInfoResponse) => {
    if (response.isAdTrackingLimited === true) {
      console.error('Ads tracking not allowed by user.');
    }
    console.log(response.id);
  })
  .catch((err: Error) => {
    console.error(err);
  });
```
