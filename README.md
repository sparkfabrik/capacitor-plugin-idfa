# Capacitor plugin for getting Advertising ID (IDFA)

[![npm version](https://badge.fury.io/js/%40sparkfabrik%2Fcapacitor-plugin-idfa.svg)](https://badge.fury.io/js/%40sparkfabrik%2Fcapacitor-plugin-idfa)

## Index

- [Supported platform](#supported-platform)
- [Installation](#installation)
- [Android configuration](#android-configuration)
- [Ionic configuration](#ionic-configuration)

## Supported platform

- Android
- iOS
- Web (the value is always null)

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