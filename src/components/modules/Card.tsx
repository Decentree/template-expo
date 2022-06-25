import React from "react";
import { View, Text, Linking } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Button from "../elements/Button";

interface CardProps {
  text: string;
  buttonText: string;
  onPress: () => void;
  isAbout?: boolean;
}

const Card = (
  {
    text,
    buttonText,
    onPress,
    isAbout
  }: CardProps
) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ paddingBottom: 20, fontSize: 18, fontWeight: "500", textAlign: "center", color: "#fff" }}>
        {text}
      </Text>
      {isAbout && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 20,
            width: 120,
          }}>
          <Ionicons
            size={36}
            name="logo-github"
            style={{ color: "#fff" }}
            onPress={() => Linking.openURL("https://github.com/Decentree")}
          />
          <Ionicons
            size={36}
            name="logo-linkedin"
            style={{ color: "#fff" }}
            onPress={() => Linking.openURL("https://www.linkedin.com/company/decentree")}
          />
        </View>
      )}
      <Button onPress={onPress} text={buttonText} />
    </View>
  );
};

export default Card;
