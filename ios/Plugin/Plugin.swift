import Foundation
import Capacitor
import AdSupport
import AppTrackingTransparency

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(Idfa)
public class Idfa: CAPPlugin {

    @objc func getAdvertisingInfo(_ call: CAPPluginCall) {
        if #available(iOS 14, *) {
            ATTrackingManager.requestTrackingAuthorization { status in
                switch status {
                    case .authorized:
                        // Tracking authorization dialog was shown
                        // and we are authorized
                        call.resolve([
                            "id": ASIdentifierManager.shared().advertisingIdentifier.uuidString,
                            "isAdTrackingLimited": false
                        ])
                    case .denied:
                        // Tracking authorization dialog was
                        // shown and permission is denied
                        call.reject("Tracking denied")
                    case .notDetermined:
                        // Tracking authorization dialog has not been shown
                        call.reject("Not Determined")
                    case .restricted:
                        call.reject("Restricted")
                    @unknown default:
                        call.reject("Unknown")
                }
            }
        } else {
            call.resolve([
                "id": ASIdentifierManager.shared().advertisingIdentifier.uuidString,
                "isAdTrackingLimited": false
            ])
        }
    }    
}
