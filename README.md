# Capacitor plugin for getting Advertising ID (IDFA)

[![npm version](https://badge.fury.io/js/%40sparkfabrik%2Fcapacitor-plugin-idfa.svg)](https://badge.fury.io/js/%40sparkfabrik%2Fcapacitor-plugin-idfa)

## Index

- [Intro](#intro)
- [Supported platform](#supported-platform)
- [Installation](#installation)
- [Android configuration](#android-configuration)
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

## Supported platform

- Android
- iOS

*Note: the web version always returns null*

## Installation
`npm install @sparkfabrik/capacitor-plugin-idfa`

or

`yarn add @sparkfabrik/capacitor-plugin-idfa`

## Android configuration

In file `android/app/src/main/java/**/**/MainActivity.java`, add the plugin to the initialization list:
```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  [...]
  add(com.sparkfabrik.capacitor.idfa.Idfa.class);
  [...]
}});
```

## Ionic configuration
```ts
import { Plugins } from '@capacitor/core';
import { AdvertisingInfoResponse } from '@sparkfabrik/capacitor-plugin-idfa';

const { Idfa } = Plugins;

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