import { StyleSheet, View, Text, Pressable } from "react-native";
function Delete(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={props.ondelete.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default Delete;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "grey",
  },
  goalText: {
    color: "white",
    padding: 2,
  },
});
