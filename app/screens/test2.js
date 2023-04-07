import React, {Component, StyleSheet, View} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Ionicons';


const test2 = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {/*Rest of App come ABOVE the action button component!*/}
      <ActionButton
        buttonColor="rgba(231,90,67,0)"
        btnOutRange="transparent"
        position="right">
        <ActionButton.Item
          buttonColor="transparent"
          title="New Task"
          onPress={() => console.log('notes tapped!')}>
          <Icon name="picture" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="transparent"
          title="New Task"
          onPress={() => console.log('notes tapped!')}>
          <Icon2
            name="video"
            style={{fontSize: 23, height: 22, color: 'white'}}
          />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="transparent"
          title="New Task"
          onPress={() => console.log('notes tapped!')}>
          <Icon name="camera" style={{fontSize: 23, height: 22, color: 'white'}} />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="transparent"
          title="Notifications"
          onPress={() => {}}>
          <Icon3
            name="md-document-outline"
            style={{fontSize: 23, height: 22, color: 'white'}}
          />
        </ActionButton.Item>

      </ActionButton>
    </View>
  );
};
export default test2;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
