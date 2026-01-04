import React, { useDeferredValue, useState, useTransition, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";

const UseDeferredValueExample: React.FC = () => {
  const [input, setInput] = useState<number>(100);
  const [listCount, setListCount] = useState<number>(100);
  const [isPending, startTransition] = useTransition();

  // useDeferredValue pozwala odroczyć aktualizację wartości używanej do ciężkich obliczeń
  const deferredListCount = useDeferredValue(listCount);

  const generateElements = (number: number) => {
    const elements = [];
    // Ograniczenie dla wydajności mobilnej do 5000
    const safeNumber = Math.min(number, 5000);
    for (let i = 0; i < safeNumber; i++) {
      elements.push(
          <View key={i} style={styles.listItem}>
            <Text style={styles.listItemText}>Item #{i + 1}</Text>
            <Text style={styles.listItemSubtext}>Generated item with index {i}</Text>
          </View>
      );
    }
    return elements;
  };

  // Memoizacja listy, aby nie renderować jej przy każdym ruchu kursora,
  // a jedynie gdy deferredListCount ulegnie zmianie.
  const memoizedList = useMemo(() => generateElements(deferredListCount), [deferredListCount]);

  const handleInputChange = (text: string) => {
    const number = parseInt(text) || 0;
    setInput(number); // Natychmiastowa aktualizacja pola tekstowego

    // useTransition informuje Reacta, że zmiana liczby elementów na liście ma niższy priorytet
    startTransition(() => {
      setListCount(number);
    });
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>UseDeferredValue & UseTransition</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Number of items to generate:</Text>
          <TextInput
              style={styles.input}
              value={input.toString()}
              onChangeText={handleInputChange}
              keyboardType="numeric"
              placeholder="Enter a number (0-5000)"
          />
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Input value: {input}</Text>
          <Text style={styles.statusText}>Deferred value: {deferredListCount}</Text>

          {isPending && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#007AFF" />
                <Text style={styles.loadingText}>Updating list...</Text>
              </View>
          )}
        </View>

        <Text style={styles.sectionTitle}>Generated List:</Text>

        <ScrollView style={styles.scrollView}>
          {memoizedList}
        </ScrollView>

        <Text style={styles.explanation}>
          Notice how the input stays responsive while the list updates are deferred.
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  inputContainer: { marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 8, fontWeight: "500" },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 12, backgroundColor: "white" },
  statusContainer: { backgroundColor: "white", padding: 15, borderRadius: 8, marginBottom: 15, elevation: 2 },
  statusText: { fontSize: 14, marginBottom: 5 },
  loadingContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  loadingText: { marginLeft: 8, fontSize: 14, color: "#007AFF" },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  scrollView: { flex: 1, backgroundColor: "white", borderRadius: 8 },
  listItem: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#f0f0f0" },
  listItemText: { fontSize: 16, fontWeight: "500" },
  listItemSubtext: { fontSize: 12, color: "#666" },
  explanation: { fontSize: 12, color: "#666", textAlign: "center", marginTop: 10 },
});

export default UseDeferredValueExample;