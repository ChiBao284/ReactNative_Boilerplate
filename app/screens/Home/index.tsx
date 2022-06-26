import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

import {useDispatch} from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
const Home: React.FC = () => {
  // const dispatch = useDispatch();
  // const onLogout = () => dispatch(loginActions.logOut());

  // return (
  //   <View style={styles.container}>
  //     <Button icon="logout" mode="outlined" onPress={onLogout}>
  //       Logout
  //     </Button>
  //   </View>
  // );
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          paddingVertical: 25,
        }}>
        <Text>Header</Text>
      </View>
      {/* <WebView
        source={{uri: 'https://nasanax.com/vi/'}}
        style={{flex: 1, height: 600}}
      /> */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'green',
          paddingVertical: 25,
        }}>
        <Text>Footer</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
