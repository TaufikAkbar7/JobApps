import { Alert } from 'react-native';

const createTwoButtonAlert = () =>
    Alert.alert(
        "Alert",
        "On Progress...",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );

export default createTwoButtonAlert