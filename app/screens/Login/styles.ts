import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from "react-native-paper";
type Styles = {
  container: ViewStyle,
  login: ViewStyle,
  forgot: ViewStyle,
  labelStyle: TextStyle,
}
const styles = (colors: ThemeColors): Styles => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundGlobal
  },
  login: {
    padding: 8,
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
});

export default styles;
