import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import { styles, bootstrap } from "./styles";

export const Input = ({
  title = "",
  value = "",
  type = "default",
  extraStyle = {}
}) => {
  const [, setVal] = useState(value);
  const handleChange = (input: string) => {
    setVal(input);
  };
  return (
    <View style={styles.formGroup}>
      <Text style={[styles.formLabel, bootstrap.textBold]}>{title}</Text>
      <TextInput
        keyboardType={type as any}
        style={[styles.formControl, bootstrap.fontLight, extraStyle]}
        value={value}
        onChangeText={handleChange}
      />
    </View>
  );
};
