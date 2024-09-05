import { StyleSheet } from 'react-native'
import { Drawer } from 'expo-router/drawer'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function MainLayout() {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: "Home Screen",
                        title: "Home"
                    }}
                />
                <Drawer.Screen
                    name='about'
                    options={{
                        drawerLabel: "About Screen",
                        title: "Who We Are"
                    }}
                />
                <Drawer.Screen
                    name="user/[id]"
                    options={{
                        drawerLabel: "Details Screen",
                        title: "User Details"
                    }}
                />
                <Drawer.Screen
                    name="(tabs)/settings"
                    options={{
                        drawerLabel: "Settings Screen",
                        title: "Customization Options"
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({})