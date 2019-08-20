# 模仿按钮的按压效果

<div>
<img src="/images/img0001.gif" width = "328" height = "677" alt="展示图" />
</div>

## Requirements
* Xcode 7 or higher
* iOS 8.0 or higher
* ARC


### 使用方法

```objc

#import "CDUIBigButton.h"

@property (nonatomic, strong) CDUIBigButton *bigButton;

[self.view addSubview:self.bigButton];

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

```


## License

CDHorizontalScrollView is available under the MIT license. See the LICENSE file for more info.
