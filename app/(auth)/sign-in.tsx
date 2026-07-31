import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function SignIn() {
    return (
        <View className="flex-1 items-center justify-center bg-white p-4 gap-4">
            <Text className="text-2xl font-bold text-slate-800">
                Welcome to Sign In!
            </Text>

            <Link href="/(auth)/sign-up" asChild>
                <View className="w-64 bg-indigo-600 py-3 rounded-xl items-center">
                    <Text className="text-white font-semibold">Create your Account</Text>
                </View>
            </Link>
        </View>
    );
}   