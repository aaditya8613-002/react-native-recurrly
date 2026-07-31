import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function SignUp() {
    return (
        <View className="flex-1 items-center justify-center bg-white p-4 gap-4">
            <Text className="text-2xl font-bold text-slate-800">
                Welcome to Sign Up!
            </Text>

            <Link href="/(auth)/sign-in" asChild>
                <View className="w-64 bg-slate-800 py-3 rounded-xl items-center">
                    <Text className="text-white font-semibold">Already have an Account? Sign In</Text>
                </View>
            </Link>
        </View>
    );
}   