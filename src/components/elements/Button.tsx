import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = (
  {
    text,
    onPress
  }: ButtonProps
) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ padding: 20, backgroundColor: "#5C997A", borderRadius: 8, width: 200, alignItems: "center" }}>
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
