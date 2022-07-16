import { StyleSheet, View, FlatList, Button, StatusBar } from "react-native";
import { useState } from "react";
import GoalItem from "./components/goalitem";
import GoalInput from "./components/goalinput";
import Delete from "./components/Deleteitem";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalvisible, setvisible] = useState(false);
  function startaddgoalhandler() {
    setvisible(true);
  }
  function deleteall() {
    alert("Following will delete all your goals !");
    setCourseGoals([]);
  }
  function endaddgoalhandler() {
    setvisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endaddgoalhandler();
  }
  function deletehandler(id) {
    setCourseGoals((curr) => {
      return curr.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="add new goal"
          color="red"
          onPress={startaddgoalhandler}
        />
        <GoalInput
          visible={modalvisible}
          onAddGoal={addGoalHandler}
          oncancel={endaddgoalhandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <>
                  <View style={styles.view}>
                    <GoalItem
                      id={itemData.item.id}
                      ondelete={deletehandler}
                      text={itemData.item.text}
                    />
                    <View style={styles.op}>
                      <Delete
                        id={itemData.item.id}
                        ondelete={deletehandler}
                        text="Delete goal"
                      />
                    </View>
                  </View>
                </>
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
        <Button title="clear all goals" color="green" onPress={deleteall} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "lightblue",
  },

  goalsContainer: {
    flex: 5,
    padding: 5,
    borderRadius: 3,
  },
  op: {
    width: "40%",
    marginHorizontal: 8,
    flexDirection: "column-reverse",
    alignContent: "center",

    backgroundColor: "",
  },
  view: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
});
