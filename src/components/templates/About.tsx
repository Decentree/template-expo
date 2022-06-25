import React from "react";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../screens/RootStackParams";

import Card from "../modules/Card";

import i18n from "../../i18n";

type AboutScreenProp = StackNavigationProp<RootStackParamList, "About">;

const About = () => {
  const navigation = useNavigation<AboutScreenProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Card text={i18n.t("about")} buttonText={i18n.t("back")} onPress={() => navigation.goBack()} isAbout />
    </View>
  );
};

export default About;
