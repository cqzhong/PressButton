//
//  CDUIBigButton.m
//  CDScrollBackground
//
//  Created by cqz on 2019/7/8.
//  Copyright © 2019 cqz. All rights reserved.
//

#import "CDUIBigButton.h"

#import <AudioToolbox/AudioToolbox.h>

#define CDBUTTONSHADOWLENGTH     CDREALVALUE_HEIGHT(6)

@interface CDUIBigButton ()

@property (nonatomic, strong) CALayer *bottomLayer;
@property (nonatomic, strong) CALayer *bottomShadowLayer;

@end

@implementation CDUIBigButton

#pragma mark - Intial Methods

- (void)didInitialize {
    [super didInitialize];
    
    [self initUI];
}

- (void)initUI {
    
    [self.layer insertSublayer:self.bottomShadowLayer atIndex:0];
    [self.layer insertSublayer:self.bottomLayer above:self.bottomShadowLayer];
}

#pragma mark - Public Methods

#pragma mark - Private Method
- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    [super touchesBegan:touches withEvent:event];
    
    [CATransaction begin];
    [CATransaction setDisableActions:true];
    
    [self.superview.layer insertSublayer:self.bottomShadowLayer below:self.layer];
    CGRect newValueRect = self.frame;
    newValueRect.origin.y = self.frame.origin.y + CDBUTTONSHADOWLENGTH;
    self.bottomShadowLayer.frame = newValueRect;

    [CATransaction commit];

    self.qmui_top = self.qmui_top + CDBUTTONSHADOWLENGTH;
}
- (void)touchesEnded:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    [super touchesEnded:touches withEvent:event];
    
    self.qmui_top = self.qmui_top - CDBUTTONSHADOWLENGTH;
    AudioServicesPlaySystemSound(1520);//默认震动效果
}

//- (CGRect)titleRectForContentRect:(CGRect)contentRect {
//
//    CGRect newValueRect = contentRect;
//    newValueRect.origin.y = contentRect.origin.y - 3;
//    return newValueRect;
//}

- (void)layoutSubviews {
    [super layoutSubviews];
    
    self.bottomLayer.frame = self.bounds;
    self.bottomLayer.cornerRadius = CGRectGetHeight(self.bounds)/2.0;
    
    if (CGRectGetWidth(self.bottomShadowLayer.frame) <= 0) {
        
        self.bottomShadowLayer.frame = CGRectMake(0, CDBUTTONSHADOWLENGTH, CGRectGetWidth(self.bounds), CGRectGetHeight(self.bounds));
        self.bottomShadowLayer.cornerRadius = CGRectGetHeight(self.bottomShadowLayer.bounds)/2.0;
    }
}

#pragma mark - Setter Getter Methods

- (void)setHighlighted:(BOOL)highlighted {
    //    [super setHighlighted:highlighted];
    
}

- (void)setBackgroundColor:(UIColor *)backgroundColor {
    [super setBackgroundColor:backgroundColor];
    
    self.bottomLayer.backgroundColor = backgroundColor.CGColor;
}

- (CALayer *)bottomLayer {
    if (!_bottomLayer) {
        _bottomLayer = [CALayer layer];
        _bottomLayer.masksToBounds = true;
    }
    return _bottomLayer;
}

- (CALayer *)bottomShadowLayer {
    if (!_bottomShadowLayer) {
        _bottomShadowLayer = [CALayer layer];
        _bottomShadowLayer.backgroundColor = UIColorMakeWithHex(@"#D76F15").CGColor;
        _bottomShadowLayer.masksToBounds = true;
    }
    return _bottomShadowLayer;
}

@end
