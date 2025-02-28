import {StyleSheet} from 'react-native';

export const tw = StyleSheet.create({
  flex1: {flex: 1},

  flexRow: {flexDirection: 'row'},
  flexColumn: {flexDirection: 'column'},

  wrap: {flexWrap: 'wrap'},

  alignCenter: {alignItems: 'center'},
  justifyCenter: {justifyContent: 'center'},

  itemsCenter: {alignItems: 'center'},

  pv6: {paddingVertical: 6},
  pv24: {paddingVertical: 24},

  ph12: {paddingHorizontal: 12},
  ph16: {paddingHorizontal: 16},

  pt12: {paddingTop: 12},

  rounded4: {borderRadius: 4},
  rounded8: {borderRadius: 8},
  rounded16: {borderRadius: 16},

  border1: {borderWidth: 1},

  borderNeutral: {borderColor: '#E4E2DE'},

  bgWhite: {backgroundColor: '#FFFFFF'},
  bgNeutralHigher: {backgroundColor: '#F9F8F7'},

  textNeutralHigh: {color: '#5E5C5C'},

  gap8: {gap: 8},
  gap16: {gap: 16},
  gap32: {gap: 32},

  square100: {width: 100, height: 100},
  minHeight48: {minHeight: 48},
});
