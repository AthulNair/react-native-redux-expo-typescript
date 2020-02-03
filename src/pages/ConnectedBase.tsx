import * as React from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../states/store";
import { sampleActions, SampleState } from "../states/sample/SampleStore";

type Props = typeof sampleActions & SampleState;

class Base extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    public render() {
        return (
            <View
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                        padding: 10,
                    }}
                >
                    <Text>Thank you for trying </Text>
                    <Text>react-native-redux-expo-boilerplate</Text>
                    <Text> with TypeScript!</Text>
                    <Text />
                </View>
                <Button title="Async" onPress={() => this.props.fetchSamplesAsync()} />
                <Button title="Sync" onPress={() => this.props.fetchSamplesSync()} />
                <View
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                        padding: 10,
                        borderColor: "blue",
                        borderWidth: 1,
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ color: "grey" }}>Value of State</Text>
                    <Text style={{ fontWeight: "bold" }}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}


var component = connect(
    (state: AppState) => Object.assign({}, state.samples), // Selects which state properties are merged into the component's props
    {
        ...sampleActions,
    } // Selects which action creators are merged into the component's props
)(Base as any);

export default ((component as any) as any as typeof Base);