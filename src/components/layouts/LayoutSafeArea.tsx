import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LayoutSafeArea = (props: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...props}
      style={{
        ...props.style,
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: props.ignoreBottom ? 0 : insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: "#191919",
      }}>
      {props.children}
    </View>
  );
};

export default LayoutSafeArea;
