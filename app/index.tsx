import { View, Text, TouchableOpacity } from "react-native";

const Home = () => {

  return (
    <View className="flex-1 items-center w-fit h-fit justify-center rounded-lg">
      <TouchableOpacity>
        <Text className="text-2xl font-bold text-center text-black bg-blue-400 border border-black rounded-lg"> Connect Wallet </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
