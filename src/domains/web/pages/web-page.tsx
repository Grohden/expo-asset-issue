import CookieManager from '@preeternal/react-native-cookie-manager';
import { useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import WebView from 'react-native-webview';
import { SafeAreaView } from '@/src/domains/app/components/safe-area-view';
import { tw } from '@/src/domains/app/tw';

const HOST = 'https://app.trustedhealth.com';
const DOMAIN = '.trustedhealth.com';

type Extract<U> = U extends Promise<infer V> ? V : never;

const logCookies = (
  tag: string,
  cookies: Extract<ReturnType<typeof CookieManager.getAll>>,
) => {
  for (const entry of Object.entries(cookies).map(([k, v]) => [k, v.value])) {
    console.log(tag, entry);
  }
};

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

  useEffect(() => {
    const interval = setInterval(async () => {
      await CookieManager.set(
        HOST,
        { name: 'foo', value: 'bar', domain: DOMAIN, path: '/' },
        true,
      ).catch((e) => console.error('[web-page][set webkit cookie error]', e));
      await CookieManager.set(
        HOST,
        { name: 'foo', value: 'bazz', domain: DOMAIN, path: '/' },
        false,
      ).catch((e) => console.error('[web-page][set cookie error]', e));

      console.log('========');
      logCookies('[web-page][cookies]', await CookieManager.getAll(false));
      console.log('========');
      logCookies(
        '[web-page][webkit cookies]',
        await CookieManager.getAll(true),
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={[tw.flex1, tw.bgWhite]}>
      <WebView
        ref={ref}
        allowsBackForwardNavigationGestures
        startInLoadingState
        sharedCookiesEnabled
        pullToRefreshEnabled
        source={{ uri: `${HOST}/explorer` }}
        onHttpError={(event) => {
          __DEV__ && console.log('[web-page] http error', event.nativeEvent);
        }}
        originWhitelist={[HOST, 'https://bid.g.doubleclick.net']}
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
