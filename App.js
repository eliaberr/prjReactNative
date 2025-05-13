import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [number, setNumber] = useState("");
  const [numberConvertBinary, setNumberConvertBinary] = useState("")

  const convertDecimalToBinari = () => {
    let resultNumber = number
    let binary = ''

    do {
      const sobraNumber = resultNumber % 2;
      binary = sobraNumber + binary
      resultNumber = Math.floor(resultNumber / 2)
    } while (resultNumber > 0);

    setNumberConvertBinary(binary)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conversor</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o numero que Deseja Converter"
        onChangeText={setNumber}
        keyboardType="numeric"
      />
      <View style={styles.containerBtn}>
        <Button
          title="Converter para Binário"
          color="#841584"
          onPress={convertDecimalToBinari}
        />
        <Button
          title="Converter para Decimal"
          color="#841584"
          onPress={() => alert("ai que dor!!!")}
        />
      </View>
      <View style={styles.result}>
        <Text style={styles.resultText}>Resultado Decimal Para Binario</Text>
        <TextInput
          value={numberConvertBinary}
          editable={false}
          style={{color: 'black', textAlign:'center', backgroundColor:'#f1f1f1', borderRadius: 10, marginTop: 30}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f24533",
    alignItems: "center",
    paddingTop: 100
  },

  text: {
    color: "white",
    fontSize: 30
  },

  resultText: {
    color: "white",
    fontSize: 25,
    marginTop: 50
  },

  input: {
    marginTop: 20,
    height: 40,
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },
  
  containerBtn: {
    grid:1,
    gap: 50,
    marginTop: 50
  },

  result: {
    marginTop: 30,
    justifyContent: 'center'
    
  }
});
