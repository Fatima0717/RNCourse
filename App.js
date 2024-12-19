import { 
  StyleSheet,
  View, 
  Button, 
  TextInput, 
  FlatList 
} from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Your Task goal"
          onChangeText={goalInputHandler} 
        />
        <Button title="Submit" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem />
            )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        alwaysBounceVertical={false}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  }
});