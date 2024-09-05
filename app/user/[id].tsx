import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>user/[id] route</Text>
            <Text style={{ fontSize: 24 }}>DETAIL SCREEN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})