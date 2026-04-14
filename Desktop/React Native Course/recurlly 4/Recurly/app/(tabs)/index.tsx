import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
       <Link href="/onboarding" className="mt-4 reounded bg-primary text-white p-4" >
      Go to Onboarding</Link> 
      <Link href="/(auth)/sign_in" className="mt-4 reounded bg-primary text-white p-4" >
      Go to Sign In</Link> 

         <Link href="/(auth)/sign_up" className="mt-4 reounded bg-primary text-white p-4" >
      Go To Sign Up</Link> 

         <Link href="/subscriptions/spotify" className="mt-4 reounded bg-primary text-white p-4" >
      Spotify Subscription</Link> 

      <Link href={{

        pathname: "/subscriptions/[id]",
        params: {id: "cloude"},
      }}>
        Claude Max Subscription
      </Link>

        
    </View>
  );
}