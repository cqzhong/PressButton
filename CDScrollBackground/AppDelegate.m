//
//  AppDelegate.m
//  CDScrollBackground
//
//  Created by cqz on 2019/6/4.
//  Copyright © 2019 cqz. All rights reserved.
//

#import "AppDelegate.h"
#import "QMUIConfigurationTemplate.h"

#import "CDTestViewController.h"


@interface AppDelegate ()


@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    [self.window setBackgroundColor:UIColorMakeWithHex(@"#FFFFFF")];
    self.window.rootViewController = [[QMUINavigationController alloc] initWithRootViewController:[CDTestViewController new]];
    [self.window makeKeyAndVisible];

    [self configurationQMUITemplate];
    return true;
}

//MARK: configurationQMUITemplate
- (void)configurationQMUITemplate {
    
    [QDThemeManager sharedInstance].currentTheme = [QMUIConfigurationTemplate new];
    //    [QMUIHelper renderStatusBarStyleDark];
    /*
     //    [QDThemeManager sharedInstance].currentTheme.themeTintColor;
     //    可以设置多张配置表，这里只写一个。
     //    [[NSUserDefaults standardUserDefaults] setObject:NSStringFromClass(self.themes[themeIndex].class) forKey:QDSelectedThemeClassName];
     */
}
@end
