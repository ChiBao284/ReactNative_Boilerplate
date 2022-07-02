import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';
import {useAppDispatch} from '@utils/hook';
import {logOut} from '@store/reducers/loginSlice';
const Home = () => {
  const dispatch = useAppDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;
