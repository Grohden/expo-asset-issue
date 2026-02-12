import { View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SafeAreaView = ({
  right = true,
  top = true,
  left = true,
  bottom = true,
  children,
  style,
  ...props
}: {
  right?: boolean;
  top?: boolean;
  left?: boolean;
  bottom?: boolean;
} & ViewProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...props}
      style={[
        style,
        {
          paddingTop: top ? insets.top : 0,
          paddingRight: right ? insets.right : 0,
          paddingBottom: bottom ? insets.bottom : 0,
          paddingLeft: left ? insets.left : 0,
        },
      ]}
    >
      {children}
    </View>
  );
};
