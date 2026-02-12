import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { Text, TouchableOpacity, View } from 'react-native';
import { tw } from '@/src/domains/app/tw';
import type { BooleanController } from '@/src/domains/forms/hooks/use-boolean-controller';

export const FormSectionTitle = ({
  title,
  openController,
}: {
  title: string;
  openController: BooleanController;
}) => (
  <TouchableOpacity
    style={[tw.flexRow, tw.gap16, tw.itemsCenter]}
    onPress={openController.toggle}
  >
    <View style={[tw.gap8, tw.flexRow, tw.itemsCenter]}>
      <FontAwesome6
        style={[tw.textCenter, tw.square20]}
        name={openController.value ? 'chevron-down' : 'chevron-right'}
        iconStyle="solid"
        size={tw.font16.fontSize}
        color={tw.textBlack.color}
      />
      <Text style={[tw.flex1, tw.font24]}>{title}</Text>
    </View>
  </TouchableOpacity>
);
