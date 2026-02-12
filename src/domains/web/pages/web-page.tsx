import { useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import WebView from 'react-native-webview';
import { SafeAreaView } from '@/src/domains/app/components/safe-area-view';
import { tw } from '@/src/domains/app/tw';

const DOMAIN = 'https://app.trustedhealth.com';

export const WebPage = () => {
  const ref = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (canGoBack && ref.current) {
          ref.current.goBack();

          return true;
        }

        return false;
      },
    );
    return () => subscription.remove();
  }, [canGoBack]);

  return (
    <SafeAreaView style={[tw.flex1, tw.bgWhite]}>
      <WebView
        ref={ref}
        allowsBackForwardNavigationGestures
        startInLoadingState
        sharedCookiesEnabled
        pullToRefreshEnabled
        source={{ uri: `${DOMAIN}/explorer` }}
        onHttpError={(event) => {
          __DEV__ && console.log('[web-page] http error', event.nativeEvent);
        }}
        originWhitelist={[DOMAIN]}
        allowsLinkPreview={false}
        setBuiltInZoomControls={false}
        keyboardDisplayRequiresUserAction={false}
        webviewDebuggingEnabled={__DEV__}
        onNavigationStateChange={({ url, canGoBack }) => {
          __DEV__ && console.log('[web-page] navigation', url);
          setCanGoBack(canGoBack);
        }}
      />
    </SafeAreaView>
  );
};
