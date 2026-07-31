import { Link, useLocalSearchParams } from "expo-router";
import React from 'react';
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <View className="flex-1 items-center justify-center bg-white p-4 gap-4">
            <Text className="text-xl font-bold text-slate-800">
                Subscription Details : {id}
            </Text>
            <Link href="/" className="text-blue-500 font-semibold">
                Go Back
            </Link>
        </View>
    );
};

export default SubscriptionDetails;