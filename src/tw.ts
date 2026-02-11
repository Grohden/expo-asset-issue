import { StyleSheet } from 'react-native';

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  neutralHigher: '#3A3A3A',
  neutralHigh: '#5E5C5C',
  neutral: '#E4E2DE',
  neutralLow: '#EDEDED',
  neutralLower: '#F9F9F9',
  error: '#C92A2A',
};

export const tw = StyleSheet.create({
  debugOutline: { borderColor: 'red', borderWidth: 1 },

  flex1: { flex: 1 },

  flexRow: { flexDirection: 'row' },
  flexColumn: { flexDirection: 'column' },

  wrap: { flexWrap: 'wrap' },

  justifyCenter: { justifyContent: 'center' },

  itemsCenter: { alignItems: 'center' },

  selfCenter: { alignSelf: 'center' },

  pv6: { paddingVertical: 6 },
  pv24: { paddingVertical: 24 },

  pl12: { paddingLeft: 12 },
  pl16: { paddingLeft: 16 },

  pr12: { paddingRight: 12 },

  ph12: { paddingHorizontal: 12 },
  ph16: { paddingHorizontal: 16 },

  pt12: { paddingTop: 12 },

  rounded4: { borderRadius: 4 },
  rounded8: { borderRadius: 8 },
  rounded16: { borderRadius: 16 },

  border1: { borderWidth: 1 },

  borderNeutral: { borderColor: colors.neutral },
  borderError: { borderColor: colors.error },

  bgWhite: { backgroundColor: colors.white },
  bgLighter: { backgroundColor: colors.white },
  bgDark: { backgroundColor: colors.black },
  bgNeutralHigher: { backgroundColor: colors.neutralHigher },
  bgNeutralLow: { backgroundColor: colors.neutralLow },
  bgNeutralLower: { backgroundColor: colors.neutralLower },

  textNeutralHigher: { color: colors.neutralHigher },
  textNeutralHigh: { color: colors.neutralHigh },
  textNeutral: { color: colors.neutral },
  textError: { color: colors.error },
  textBlack: { color: colors.black },
  textWhite: { color: colors.white },

  textCenter: { textAlign: 'center' },

  gap8: { gap: 8 },
  gap16: { gap: 16 },
  gap32: { gap: 32 },

  font14: { fontSize: 14 },
  font16: { fontSize: 16 },
  font18: { fontSize: 18 },
  font24: { fontSize: 24 },
  font32: { fontSize: 32 },

  square16: { width: 16, height: 16 },
  square20: { width: 20, height: 20 },
  square24: { width: 24, height: 24 },
  square100: { width: 100, height: 100 },

  minHeight48: { minHeight: 48 },
});
