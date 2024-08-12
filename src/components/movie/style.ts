import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#476fbf',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
    },
});
