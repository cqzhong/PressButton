//
//  QMUIButton+Normalize.m
//  CDScrollBackground
//
//  Created by cqz on 2019/7/9.
//  Copyright © 2019 cqz. All rights reserved.
//

#import "QMUIButton+Normalize.h"

@implementation QMUIButton (Normalize)


//- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
//
//    if (CGColorEqualToColor(self.backgroundColor.CGColor, [UIColor whiteColor].CGColor)) {
//
//        self.backgroundColor = [];
//    }
//}

//- (void)adjustsButtonHighlighted {
//    if (self.highlightedBackgroundColor) {
//        if (!self.highlightedBackgroundLayer) {
//            self.highlightedBackgroundLayer = [CALayer layer];
//            [self.highlightedBackgroundLayer qmui_removeDefaultAnimations];
//            [self.layer insertSublayer:self.highlightedBackgroundLayer atIndex:0];
//        }
//        self.highlightedBackgroundLayer.frame = self.bounds;
//        self.highlightedBackgroundLayer.cornerRadius = self.layer.cornerRadius;
//        self.highlightedBackgroundLayer.backgroundColor = self.highlighted ? self.highlightedBackgroundColor.CGColor : UIColorClear.CGColor;
//    }
//
//    if (self.highlightedBorderColor) {
//        self.layer.borderColor = self.highlighted ? self.highlightedBorderColor.CGColor : self.originBorderColor.CGColor;
//    }
//}


- (void)setBackgroundColor:(UIColor *)backgroundColor {
    [super setBackgroundColor:backgroundColor];
    
    self.highlightedBackgroundColor = [UIColor qmui_colorWithBackendColor:backgroundColor frontColor:[UIColorMakeWithHex(@"#000000") colorWithAlphaComponent:0.1]];
}

@end
