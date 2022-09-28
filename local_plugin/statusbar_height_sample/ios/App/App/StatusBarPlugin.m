//
//  StatusBarPlugin.m
//  App
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(StatusBarPlugin, "MyStatusBar",
           CAP_PLUGIN_METHOD(getHeight, CAPPluginReturnPromise);
)
