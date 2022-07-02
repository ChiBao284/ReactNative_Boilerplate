/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
import {
  PaperThemeDefault,
  PaperThemeDark,
  CombinedDefaultTheme,
  CombinedDarkTheme,
} from '@config/theme-config';
import Navigator from '@navigation/index';
import store, {persistor} from './store';
import {IThemeState} from '@models/reducers/theme';
import './i18n/i18n';
import i18n from './i18n/i18n';
import {ILanguageState} from '@models/reducers/language';
import {useAppSelector} from './utils/hook';

interface IState {
  themeReducer: IThemeState;
  languageReducer: ILanguageState;
}

const RootNavigation: React.FC = () => {
  //   const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const isDark = true;
  const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;
  const language = useAppSelector(state => state.languageReducer);

  console.log('language', language);

  useEffect(() => {
    i18n.changeLanguage('vi');
  }, []);
  return (
    <PaperProvider theme={paperTheme}>
      <Navigator theme={combinedTheme} />
    </PaperProvider>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
