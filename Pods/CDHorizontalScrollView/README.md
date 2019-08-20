# CDHorizontalScrollView

- CDHorizontalScrollView 支持UICollectionView, UITableView等控件添加横向滚动的视图

<div>
<img src="/images/horizontal.gif" width = "302" height = "644" alt="展示图" />
</div>

## Requirements
* Xcode 7 or higher
* iOS 8.0 or higher
* ARC

```ruby
pod 'CDHorizontalScrollView'
```

### 使用方法

```objc

#import "CDHorizontalScrollView.h"

@property (nonatomic, strong) CDHorizontalScrollView *horizontalScrollView;
@property (nonatomic, strong) NSArray *array;

- (void)setupView {

    [self.contentView addSubview:self.horizontalScrollView];

    self.array = @[@"text1", @"text2", @"text3", @"text4", @"text5", @"text6", @"text7", @"text8", @"text9"];
    [self.horizontalScrollView reloadData];
}


#pragma mark - CDHorizontalScrollViewDelegate
- (NSArray *)numberOfColumnsInCollectionView:(CDHorizontalScrollView *)collectionView {

    return [self.array copy];
}

//每个item大小
- (CGSize)cellSizeForItemAtIndexPath:(NSIndexPath *)indexPath {

    return CGSizeMake(floor(CDREALVALUE_WIDTH(160.0)), floor(CDREALVALUE_HEIGHT(216.0)));
}
//上左下右
- (UIEdgeInsets)collectionViewInsetForSectionAtIndex:(NSInteger)section {
    return UIEdgeInsetsMake(CDREALVALUE_HEIGHT(8), CDREALVALUE_WIDTH(16), CDREALVALUE_HEIGHT(8), CDREALVALUE_WIDTH(16));
}
//每个item之间的间距
- (CGFloat)collectionViewMinimumInteritemSpacingForSectionAtIndex:(NSInteger)section {
    return CDREALVALUE_WIDTH(16);
}

- (void)didselectItemAtIndexPath:(NSIndexPath *)indexPath {

}

#pragma mark - Setter Getter Methods
- (CDHorizontalScrollView *)horizontalScrollView {
    if (!_horizontalScrollView) {
        _horizontalScrollView = [[CDHorizontalScrollView alloc] initWithFrame:CGRectMake(0, 0, [UIScreen mainScreen].bounds.size.width, CGRectGetHeight(self.frame)) withClassCell:[HomeHorizontalCollectionViewCell class] withDelegate:self];
    }
    return _horizontalScrollView;
}

```


## License

CDHorizontalScrollView is available under the MIT license. See the LICENSE file for more info.
