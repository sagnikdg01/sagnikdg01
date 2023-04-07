import AwesomeHierarchyGraph from 'react-native-d3-tree-graph';
import {View,StyleSheet} from 'react-native';

var root = {
  name: '',
  id: 1,
  hidden: true,
  children: [
    {
      name: 'Q',
      id: 16,
      no_parent: true,
    },
  ],
};

var siblings = [
  {
    source: {
      id: 3,
      name: 'C',
    },
    target: {
      id: 11,
      name: 'K',
    },
  },
];

const influencing_tree = () => {
  return (
    <View style={styles.container}>
      <AwesomeHierarchyGraph root={root} siblings={siblings} />
    </View>
  );
};
export default influencing_tree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
