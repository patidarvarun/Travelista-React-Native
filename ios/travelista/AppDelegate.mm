#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import "React/RCTI18nUtil.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"travelista";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  NSString *language = [[NSLocale preferredLanguages] objectAtIndex:0];
    
    NSLog(@"Detected language: %@", language);

    // Set the default language
    NSString *defaultLanguage = @"he"; // Default to English if language detection fails
    
    // Check if the language is Hebrew
    if ([language isEqualToString:@"he"]) {
        defaultLanguage = @"he";
       
    } else {
       defaultLanguage = @"en";
    }
    
    // Pass the default language to React Native as initial props
    self.initialProps = @{@"language": defaultLanguage};
    
    [[RCTI18nUtil sharedInstance] allowRTL:YES];
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
