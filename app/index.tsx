import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4 gap-4">
      <Text className="text-2xl font-bold text-emerald-600 mb-2">
        Welcome to NativeWind!
      </Text>

      <Link href="/onboarding" asChild>
        <View className="w-64 bg-emerald-500 py-3 rounded-xl items-center">
          <Text className="text-white font-semibold">Go to OnBoarding</Text>
        </View>
      </Link>

      <Link href="/(auth)/sign-in" asChild>
        <View className="w-64 bg-blue-500 py-3 rounded-xl items-center">
          <Text className="text-white font-semibold">Go to Sign In</Text>
        </View>
      </Link>

      <Link href="/(auth)/sign-up" asChild>
        <View className="w-64 bg-slate-800 py-3 rounded-xl items-center">
          <Text className="text-white font-semibold">Go to Sign Up</Text>
        </View>
      </Link>

      <Link href="/subscriptions/spotify" asChild>
        <View className="w-64 bg-green-400 py-3 rounded-xl items-center">
          <Text className="text-white font-semibold">Spotify Subscription</Text>
        </View>
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        asChild
      >
        <View className="w-64 bg-amber-600 py-3 rounded-xl items-center">
          <Text className="text-white font-semibold">Claude Max Subscription</Text>
        </View>
      </Link>
    </View>
  );
}