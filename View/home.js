import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeView({ navigation, route }) {
    return (
        <View style={style.container}>
            <Text>Primera vista</Text>
            <Button
                title="Next Screen"
                onPress={() => {
                    route.params.setSign(false);
                    navigation.navigate('NextT')
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});