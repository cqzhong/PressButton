//
//  CDMacroDefine.h
//  CDProgramme
//
//  Created by 庆中 on 2018/7/2.
//  Copyright © 2018年 ChangDao. All rights reserved.
//

#ifndef CDMacroDefine_h
#define CDMacroDefine_h

#ifdef __OBJC__


/**
 * 本地化文件名
 */
#define CDLocalizeName @"CDLocalizeStrings"

/**
 * 获取本地化文件所在的Bundle
 */
#define CDLocalizeBundle \
({NSBundle *bundle;\
for (NSBundle *tempBundle in [NSBundle allBundles])\
{\
if ([tempBundle pathForResource:CDLocalizeName ofType:@"strings"])\
{\
bundle = tempBundle;\
break;\
}\
}\
bundle;\
})\

#define CDLocalize(str) NSLocalizedStringFromTableInBundle(str, CDLocalizeName, CDLocalizeBundle, nil)


/**
 * 空字符串判断
 */
#define CDNULLString(string) ((string == nil) || ([string isKindOfClass:[NSNull class]]) || (![string isKindOfClass:[NSString class]])||[string isEqualToString:@""] || [string isEqualToString:@"<null>"] || [[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]] length]== 0 )


#define CDNULLObject(obj) (obj == nil || obj == [NSNull null] || ([obj isKindOfClass:[NSString class]] && CDNULLString((NSString *)obj)))

#define CDERROR_DES(des) [NSError errorWithDomain:NSURLErrorDomain code:-1 userInfo:@{NSLocalizedDescriptionKey : des}]

#define CDINTEGRE_TO_STRING(A)             [NSString stringWithFormat:@"%ld",(long)(A)]
#define CDUINTEGRE_TO_STRING(A)            [NSString stringWithFormat:@"%lu",(unsigned long)(A)]
#define CDINT_TO_STRING(A)                 [NSString stringWithFormat:@"%d",(int)(A)]
#define CDFLOAT_TO_STR(A)                  [NSString stringWithFormat:@"%.2f",(double)(A)]
#define CDNUM_TO_STR(A)                    [NSString stringWithFormat:@"%@",CDNULLString(A) ? @(0) : A]
#define CDNONNULL_STR(A)                   [NSString stringWithFormat:@"%@",CDNULLString(A) ? @"" : A]
#define CDNONNULL_STR_DEFAULT(A,D)         [NSString stringWithFormat:@"%@",CDNULLString(A) ? D : A]

#define CDCOMBAIN_STRING(A,B) [NSString stringWithFormat:@"%@%@",A,B]
#define CDINSERT_FIRST(A,B) CDCOMBAIN_STRING((A),(B))
#define CDFORMAT_STR(fmt,...) [NSString stringWithFormat:fmt,##__VA_ARGS__]
#define CDNO_ZERO(A) MAX((A),0)

#define CDEXCHANGE_STRING(str, default) (CDNULLString(str)?default:str)
#define CDREPLACE_NULL_STRING(str) CDEXCHANGE_STRING(str,@"")

#define GET(str)                                          (str ? str : @"")

#if defined(DEBUG) || defined(CDTEST)
#define CDString [NSString stringWithFormat:@"%s", __FILE__].lastPathComponent
#define CDDLog(...) printf("\n\n[文件名:%s] [函数名:%s] [第%d行: %s]\n\n", [CDString UTF8String] ,__FUNCTION__, __LINE__, [[NSString stringWithFormat:__VA_ARGS__] UTF8String]);

#else
#define CDDLog(...)
#endif

#define CDSHOW_ALERT(msg)   QMUIAlertController *alertController = [QMUIAlertController alertControllerWithTitle:@"温馨提示" message:msg preferredStyle:QMUIAlertControllerStyleAlert];\
[alertController addAction:[QMUIAlertAction actionWithTitle:@"确定" style:QMUIAlertActionStyleCancel handler:nil]];\
[alertController showWithAnimated:YES];\


#define __MAIN_SCREEN_HEIGHT__      MAX([UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height)
#define __MAIN_SCREEN_WIDTH__       MIN([UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height)
#define __MAIN_SCREEN_BOUNDS__      [[UIScreen mainScreen] bounds]

#define  CDSCALE_W                 (IS_IPHONE ? (__MAIN_SCREEN_WIDTH__ / 375.0) : (__MAIN_SCREEN_WIDTH__ / 768.0))
#define  CDSCALE_H                 (IS_IPHONE ? (__MAIN_SCREEN_WIDTH__ / 375.0) : (__MAIN_SCREEN_HEIGHT__ / 1024.0))

#define  CDREALVALUE_WIDTH(w)      (CDSCALE_W * w)
#define  CDREALVALUE_HEIGHT(h)     (CDSCALE_H * h)

#define TextLine_Space  CDREALVALUE_WIDTH(5)

#define CD_IS_IPHONE_X ((IOS_VERSION >= 11.f) && IS_IPHONE && (MIN([UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height) >= 375 && MAX([UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height) >= 812))

//底部Tabbar高度
#define CDTABBAR_HEIGHT  (CD_IS_IPHONE_X ? 83.0 : 50.0)

// iPhone X 系类安全区域适配
#define SafeAreaTopHeight (CD_IS_IPHONE_X ? 88 : 64)
#define SafeAreaBottomHeight (CD_IS_IPHONE_X ? 34 : 0)
#define SafeAreaStatusHeight (CD_IS_IPHONE_X ? 24 : 0)

// 查询 bundle文件
#define CDMYBUNDLE_NAME @"MyBundle.bundle"
#define CDMYBUNDLE_PATH [[[NSBundle mainBundle] resourcePath] stringByAppendingPathComponent: CDMYBUNDLE_NAME]
#define CDMYBUNDLE [NSBundle bundleWithPath: CDMYBUNDLE_PATH]

#define SHOW_ALERT(msg)   QMUIAlertController *alertController = [QMUIAlertController alertControllerWithTitle:@"温馨提示" message:msg preferredStyle:QMUIAlertControllerStyleAlert];\
[alertController addAction:[QMUIAlertAction actionWithTitle:@"确定" style:QMUIAlertActionStyleCancel handler:nil]];\
[alertController showWithAnimated:YES];\

//判断是否安装了QQ Wechat
#define IS_INSTALL_WX     [[UIApplication sharedApplication]canOpenURL:[NSURL URLWithString:@"weixin://"]]
#define IS_INSTALL_QQ     [[UIApplication sharedApplication]canOpenURL:[NSURL URLWithString:@"mqqapi://"]]


// 首页双圆角半径
#define CDDoubleRadiusValue  CDREALVALUE_HEIGHT(6.0)

// 设置 view 圆角和边框
#define CDViewBorderRadius(View, Radius, Width, Color)\
\
[View.layer setCornerRadius:(Radius)];\
[View.layer setMasksToBounds:YES];\
[View.layer setBorderWidth:(Width)];\
[View.layer setBorderColor:[Color CGColor]]


// 设置 view 圆角
#define CDViewRadius(View, Radius)\
\
[View.layer setCornerRadius:(Radius)];\
[View.layer setMasksToBounds:YES]

/**
 *  把是NSNull 类型的值替换成nil
 *  使用方法：contact.contactPhone = VerifyValue(contactDic[@"send_ContactPhone"]);
 */
#define CDVerifyValue(value)\
({id tmp;\
if ([value isKindOfClass:[NSNull class]])\
tmp = nil;\
else\
tmp = value;\
tmp;\
})\


#define CD_RELEASE_SAFELY(__REF) \
{\
if (nil != (__REF)) \
{\
__REF = nil;\
}\
}

//view安全释放
#define CDVIEW_RELEASE_SAFELY(__REF) \
{\
if (nil != (__REF))\
{\
[__REF removeFromSuperview];\
__REF = nil;\
}\
}

//释放定时器
#define CD_INVALIDATE_TIMER(__TIMER) \
{\
[__TIMER invalidate];\
__TIMER = nil;\
}


typedef void(^CDBlock)(void);
typedef void(^CDBlockBlock)(CDBlock block);
typedef void(^CDObjectBlock)(id obj);
typedef void(^CDBooLBlock)(BOOL isObj);
typedef void(^CDArrayBlock)(NSArray *array);
typedef void(^CDMutableArrayBlock)(NSMutableArray *array);
typedef void(^CDDictionaryBlock)(NSDictionary *dic);
typedef void(^CDErrorBlock)(NSError *error);
typedef void(^CDIndexBlock)(NSInteger index);
typedef void(^CDFloatBlock)(CGFloat afloat);
typedef void(^CDStringBlock)(NSString *string);
typedef void(^CDCancelBlock)(id viewController);
typedef void(^CDFinishedBlock)(id viewController, id object);
typedef void(^CDSendRequestAndResendRequestBlock)(id sendBlock, id resendBlock);
typedef void(^CDEmptyHandle)(BOOL isEditing, BOOL emptyShowing);

//直播课件下载
static NSString *const kLiveCoursePlist = @"LiveCourse.plist";

#define CDLIVE_COURSEWARE [[NSSearchPathForDirectoriesInDomains(NSLibraryDirectory, NSUserDomainMask, true) firstObject] stringByAppendingPathComponent:@"LiveCourseware"]

#define LIVE_COURSE_PLIST [CDLIVE_COURSEWARE stringByAppendingPathComponent:@"CDLiveCourseware.plist"]


#endif
#endif /* CDMacroDefine_h */
