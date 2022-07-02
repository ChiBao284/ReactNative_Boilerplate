import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Switch} from 'react-native-paper';
import * as themeActions from 'app/store/actions/themeActions';
import {IThemeState} from 'app/models/reducers/theme';
import {changeLanguage} from '@store/reducers/languageSlice';
import i18n from 'app/i18n/i18n';
import {useTranslation} from 'react-i18next';
interface IState {
  themeReducer: IThemeState;
}
import {useAppDispatch, useAppSelector} from '../utils/hook';
const ChangeLanguageController: React.FC = () => {
  const {t} = useTranslation();
  const isDark = useAppSelector(state => state.themeReducer.isDark);

  const dispatch = useAppDispatch();
  const onToggleTheme = () => {
    dispatch(changeLanguage('en'));
    console.log('vao');
  };
  const iconName = isDark ? 'weather-night' : 'white-balance-sunny';
  const iconColor = isDark ? 'white' : 'black';
  console.log('isDark', isDark);

  return (
    <View style={styles.container}>
      <Switch value={true} onValueChange={onToggleTheme} />
      <Icon name={iconName} size={20} style={styles.icon} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 12,
  },
  icon: {marginLeft: 4},
});

export default ChangeLanguageController;
