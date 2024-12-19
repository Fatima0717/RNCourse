import {StyleSheet} from 'react-native';

function GoalItem(props) {
 return (
  <View style={styles.goalItem}>
    <Text style={styles.goalText}>{itemData.item.text}</Text>
  </View>
 );
}

export default GoalItem;

const styles = StyleSheet.create({
 goalItem: {
  padding: 16,
  margin: 8,
  padding: 8,
  borderRadius: 6,
  backgroundColor: 1,
 },
 goalText: {
  color: 'white',
 },
});