//
//  StatusBarPlugin.swift
//  App
//

import Foundation
import Capacitor

@objc(StatusBarPlugin)
public class StatusBarPlugin: CAPPlugin {
    
    @objc func getHeight(_ call: CAPPluginCall) {
        var statusBarHeight: CGFloat = 0
        if #available(iOS 13.0, *) {
            let scenes = UIApplication.shared.connectedScenes
            let windowScene = scenes.first as? UIWindowScene
            let window = windowScene?.windows.first
            statusBarHeight = window?.windowScene?.statusBarManager?.statusBarFrame.height ?? 0
        } else {
            statusBarHeight = UIApplication.shared.statusBarFrame.height
        }
        
        if statusBarHeight > 0 {
            call.resolve([
                "height": statusBarHeight
            ])
        } else {
            call.reject("Status bar height not obtained")
        }
    }
}
