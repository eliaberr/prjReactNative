import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [number, setNumber] = useState("");
  const [numberConvertBinary, setNumberConvertBinary] = useState("");
  const [showTable, setShowTable] = useState(false);

  const convertDecimalToBinari = () => {
    let resultNumber = number;
    let binary = "";

    do {
      const sobraNumber = resultNumber % 2;
      binary = sobraNumber + binary;
      resultNumber = Math.floor(resultNumber / 2);
    } while (resultNumber > 0);

    setNumberConvertBinary(binary);
  };

  const convertBinariToDecimal = () => {
    const binary = number;
    const resultNumber = parseInt(binary, 2);
    setNumberConvertBinary(resultNumber);
    setShowTable(true)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conversor</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o numero que Deseja Converter"
        onChangeText={setNumber}
        keyboardType="numeric"
      />
      <Text
        style={{
          color: "white",
          fontSize: 10,
          width: 250,
          textAlign: "center",
        }}
      >
        Para converter binário para decimal, digite três ou mais caracteres.
      </Text>
      <View style={styles.containerBtn}>
        <Button
          title="Converter para Binário"
          color="#841584"
          onPress={convertDecimalToBinari}
          disabled={number.length > 2 ? true : false}
        />

        <Button
          title="Converter para Decimal"
          color="#841584"
          onPress={convertBinariToDecimal}
          disabled={number.length > 2 ? false : true}
        />
      </View>
      <View style={styles.result}>
        {number.length <= 2 ? (
          <View>
            <Text style={styles.resultText}>
              Resultado Decimal Para Binario
            </Text>
            <TextInput
              value={numberConvertBinary}
              editable={false}
              style={{
                color: "black",
                textAlign: "center",
                backgroundColor: "#f1f1f1",
                borderRadius: 10,
                marginTop: 30,
              }}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.resultText}>
              Resultado Binario Para Decimal: {numberConvertBinary}
            </Text>
            {showTable ? (
              <View style={styles.table}>
                <View style={styles.row}>
                  {number.split("").map((_, index) => {
                    const length = number.length;
                    const peso = Math.pow(2, length - index - 1);
                    return (
                      <Text key={index} style={styles.colum}>
                        {peso}
                      </Text>
                    );
                  })}
                </View>
                <View style={styles.row}>
                  {number.split("").map((item, index) => {
                    return <Text key={index}>{item}</Text>;
                  })}
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f24533",
    alignItems: "center",
    paddingTop: 100,
  },

  table: {
    backgroundColor: "white",
    height: 70,
    flexDirection: "colum",
    justifyContent: "space-around",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  colum: {
    textAlign: "center",
    width: 25,
    border: 1,
  },

  text: {
    color: "white",
    fontSize: 30,
  },

  resultText: {
    color: "white",
    fontSize: 23,
    marginTop: 50,
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
    grid: 1,
    gap: 50,
    marginTop: 50,
  },

  result: {
    marginTop: 30,
    justifyContent: "center",
  },
});
