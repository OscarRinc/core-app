import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeView({ navigation }) {
    return (
        <View style={style.container}>
            <Text>Primera vista</Text>
            <Button
                title="Next Screen"
                onPress={() => 
                    navigation.navigate('NextT')
                }
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