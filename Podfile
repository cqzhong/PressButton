# Uncomment the next line to define a global platform for your project
 platform :ios, '9.0'
 inhibit_all_warnings!

target 'CDScrollBackground' do
  # Comment the next line if you don't want to use dynamic frameworks
  # use_frameworks!

  # Pods for CDScrollBackground

#架构
#pod 'QMUIKit', '~> 2.9.2'
pod 'QMUIKit', '~> 3.2.1'

# Model
pod 'YYModel', '~> 1.0.4'
pod 'YYCache', '~> 1.0.4'
pod 'YYCategories', '~> 1.0.4'

pod 'CDHorizontalScrollView'

#富文本
#pod 'RTLabel', '~> 1.0.1'
#pod 'YYText', '~> 1.0.7'
pod 'DTCoreText', '~> 1.6.21',:inhibit_warnings => true

pod 'WebViewJavascriptBridge', '~> 6.0.3'

#阿里推流
#pod 'AlivcLivePusher', '~> 3.4.0'
#pod 'AlivcLivePusherWithPlayer', '~> 3.4.0'
#阿里高级播放器
#pod 'AliyunPlayer_iOS/AliyunVodPlayerSDK', '~> 3.4.9'

end


post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      if config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'].to_f < 9.0
        config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '9.0'
      end
    end
  end
end
