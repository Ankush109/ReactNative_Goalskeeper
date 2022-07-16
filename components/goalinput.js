import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Text,
  Image,
  Alert,
} from "react-native";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    if (enteredGoalText === "") {
      alert("Please write something :)");
    } else {
      props.onAddGoal(enteredGoalText);
    }
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/z.jpg")} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goals!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttoncon}>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.oncancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="green" />
          </View>
        </View>
        <View></View>
        <View style={styles.dev}>
          <Text>Developed by Ankush Banerjee</Text>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    color: "black",

    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    padding: 16,
    borderBottomColor: "green",
    backgroundColor: "grey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    color: "white",
    borderRadius: 6,
    marginRight: 8,
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 50,
  },
  buttoncon: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  dev: {
    padding: 10,
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 13,
  },
});
