//
//  CDTestViewController.m
//  CDScrollBackground
//
//  Created by cqz on 2019/7/8.
//  Copyright © 2019 cqz. All rights reserved.
//

#import "CDTestViewController.h"
#import "CDUIBigButton.h"

@interface CDTestViewController ()

@property (nonatomic, strong) CDUIBigButton *bigButton;
@end

@implementation CDTestViewController

#pragma mark - Life Cycle Methods
- (void)viewDidLoad {
    [super viewDidLoad];
    
    [self initSubviews];
}
#pragma mark - Intial Methods
- (void)initSubviews {
    
    [self.view addSubview:self.bigButton];
    
}

#pragma mark - Target Methods
- (void)bigButtonEvent {
    
    CDDLog(@"按钮被点击了");
}
#pragma mark - Public Methods

#pragma mark - Private Method

#pragma mark - External Delegate

#pragma mark - Setter Getter Methods

- (CDUIBigButton *)bigButton {
    if (!_bigButton) {
        _bigButton = [[CDUIBigButton alloc] qmui_initWithImage:nil title:@"按钮"];
        _bigButton.frame = CGRectMake(CDREALVALUE_WIDTH(16), 200, SCREEN_WIDTH - CDREALVALUE_WIDTH(32), CDREALVALUE_HEIGHT(44));
//        _bigButton.contentHorizontalAlignment = UIControlContentHorizontalAlignmentLeft;
//        _bigButton.contentVerticalAlignment = UIControlContentVerticalAlignmentBottom;
        [_bigButton addTarget:self action:@selector(bigButtonEvent) forControlEvents:UIControlEventTouchUpInside];
        [_bigButton setBackgroundColor:UIColorMakeWithHex(@"#FF8820")];
        [_bigButton setTitleColor:UIColorMakeWithHex(@"#FFFFFF") forState:UIControlStateNormal];
//        _bigButton.layer.masksToBounds = true;
        _bigButton.layer.cornerRadius = CGRectGetHeight(_bigButton.bounds)/2.0;
//        [_bigButton setImage:[UIImage read_book] forState:UIControlStateNormal];
//        _bigButton.spacingBetweenImageAndTitle = CDREALVALUE_WIDTH(5);
//        _bigButton.imagePosition = QMUIButtonImagePositionLeft;
    }
    return _bigButton;
}
@end

