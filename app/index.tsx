import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Page() {
    return (
        <>
            <View style={styles.container}>
                <Text style={{ fontSize: 24 }}>Index page of Home Drawer</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})