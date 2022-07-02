import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {Text, Button, useTheme} from 'react-native-paper';

import style from './styles';
import {ILoginState} from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import ChangeLanguageController from '@components/ChangeLanguageController';
import {useAppDispatch, useAppSelector} from '@utils/hook';
import {loginSuccess} from '@store/reducers/loginSlice';
import {getDogRequest} from '@store/reducers/dogSlice';
interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  //   const id = useSelector((state: IState) => state.loginReducer.id);
  const id = 1;
  const dispatch = useAppDispatch();
  //   const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onLogin = () => dispatch(loginSuccess());
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [dataDog, setDataDog] = useState<any>(null);
  const getDog = () => {
    dispatch(getDogRequest());
  };
  const isLoadingDog = useAppSelector(state => state.dogReducer.isLoading);
  const dataDogReducer = useAppSelector(state => state.dogReducer.dataDog);
  useEffect(() => {
    if (!isLoadingDog && dataDogReducer) {
      setDataDog(dataDogReducer);
    }
  }, [isLoadingDog]);
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.container}>
      <ChangeLanguageController />
      <View style={styles.container}>
        <Text style={styles.login}>Login Status : {id}</Text>
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Login
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
        <Button
          mode="contained"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={() => getDog()}>
          GET DOG
        </Button>
        {dataDog != null && (
          <Image
            style={{width: 300, height: 300, resizeMode: 'cover'}}
            source={{uri: dataDog[0].image}}
          />
        )}
      </View>
    </View>
  );
};

export default Login;
