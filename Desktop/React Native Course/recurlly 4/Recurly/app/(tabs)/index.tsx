import "@/global.css"
import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
 
const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
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

        
    </SafeAreaView>
  );
}