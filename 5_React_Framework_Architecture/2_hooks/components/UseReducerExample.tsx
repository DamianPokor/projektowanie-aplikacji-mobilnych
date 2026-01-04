import React, { useReducer } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//Dodałem Math.floor, aby obsłużyć liczby dziesiętne po pierwiastkowaniu

function factorialize(num: number): number {
  const n = Math.floor(num);
  if (n < 0) return 0;
  else if (n === 0) return 1;
  else {
    return n * factorialize(n - 1);
  }
}

const initialValue = 1;
const init = (val: number) => ({ result: val });

type State = { result: number };
type Action =
    | { type: "FACTORIAL" }
    | { type: "SQRT" }
    | { type: "ADD" }
    | { type: "RESET"; payload: number };

const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(
      (state: State, action: Action): State => {
        switch (action.type) {
          case "FACTORIAL":
            return { result: factorialize(state.result) };
          case "SQRT":
            return { result: Math.sqrt(state.result) };
          case "ADD":
            return { result: state.result + 1 };
          case "RESET":
            return init(action.payload);
          default:
            return state;
        }
      },
      initialValue,
      init
  );

  return (
      <View style={styles.container}>
        <Text style={styles.title}>UseReducer Example</Text>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Current Result:</Text>
          <Text style={styles.result}>{state.result.toFixed(2).replace(/\.00$/, "")}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.factorialButton]} onPress={() => dispatch({ type: "FACTORIAL" })}>
            <Text style={styles.buttonText}>Factorial (!)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.addButton]} onPress={() => dispatch({ type: "ADD" })}>
            <Text style={styles.buttonText}>Add 1 (+1)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.sqrtButton]} onPress={() => dispatch({ type: "SQRT" })}>
            <Text style={styles.buttonText}>Square Root (√)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={() => dispatch({ type: "RESET", payload: initialValue })}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 30 },
  resultContainer: { backgroundColor: "white", padding: 20, borderRadius: 12, marginBottom: 30, alignItems: "center", elevation: 3 },
  resultLabel: { fontSize: 16, color: "#666", marginBottom: 10 },
  result: { fontSize: 32, fontWeight: "bold", color: "#007AFF" },
  buttonContainer: { gap: 15 },
  button: { padding: 15, borderRadius: 8, alignItems: "center" },
  factorialButton: { backgroundColor: "#FF3B30" },
  addButton: { backgroundColor: "#34C759" },
  sqrtButton: { backgroundColor: "#FF9500" },
  resetButton: { backgroundColor: "#8E8E93" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default UseReducerExample;