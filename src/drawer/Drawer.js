import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native';
import MyText from '../../components/MyText';
import MyIcon from '../../components/MyIcon';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight + 40,
    paddingHorizontal: 20,
  },
  profileWrapper: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#999999',
  },
  userWrapper: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  drawerContentWrapper: {
    paddingTop: 30,
  },
  drawerContentRow: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerContentText: {
    fontSize: 16,
  },
});

const drawerContentData = [
  {
    title: 'Screen 1',
    navigate: 'Screen1',
  },
  {
    title: 'Screen 2',
    navigate: 'Screen2',
  },
  {
    title: 'Screen 3',
    navigate: 'Screen3',
  },
  {
    title: 'Screen 4',
    navigate: 'Screen4',
  },
];

const DrawerContent = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <View style={styles.profileImage} />
          <View style={styles.userWrapper}>
            <MyText text="Username" />
            <MyText
              text="username@email.com"
              fontType="light"
              color="#979797"
            />
          </View>
        </View>
        <View style={styles.drawerContentWrapper}>
          {drawerContentData.map(({title, navigate}) => (
            <TouchableOpacity
              key={title}
              style={styles.drawerContentRow}
              onPress={() => {
                navigation.navigate(navigate);
              }}>
              <MyText text={title} style={styles.drawerContentText} />
              <MyIcon name="arrow-forward" size={26} color="#666666" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
