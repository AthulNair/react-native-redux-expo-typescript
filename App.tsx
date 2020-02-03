import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/states/store";
import Base from "./src/pages/ConnectedBase";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default class App extends React.Component<{}> {
  public render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Base />
        </Provider>
      </View>
    );
  }
}
