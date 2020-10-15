package com.sparkfabrik.capacitor.idfa;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import com.google.android.gms.ads.identifier.AdvertisingIdClient;

import java.util.Objects;

@NativePlugin
public class Idfa extends Plugin {

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod
    public void getAdvertisingInfo(PluginCall call) {
        JSObject ret = new JSObject();

        try {
            AdvertisingIdClient.Info info = AdvertisingIdClient.getAdvertisingIdInfo(getContext());
            ret.put("id", info.getId());
            ret.put("isAdTrackingLimited", info.isLimitAdTrackingEnabled());
        } catch (Exception e) {
            Log.e("Idfa", Objects.requireNonNull(e.getMessage()));
            call.reject("Error getting aaid.", e);
        }
        call.success(ret);
    }
}
