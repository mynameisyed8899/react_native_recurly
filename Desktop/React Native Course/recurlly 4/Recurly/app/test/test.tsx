// import { Tabs } from "expo-router"
// import {tabs} from "@/constants/data"
// import { icons } from "@/constants/icons"
// import { View, Image } from "react-native"
// import { colors, components } from '@/constants/theme'
// import clsx from "clsx"
// import {  useSafeAreaInsets } from "react-native-safe-area-context"



// const tabBar = components.tabBar;

// const TabLayout = () => {
//   const insets = useSafeAreaInsets();
//   const TabIcon = ({ focused, icon }: TabIconProps) => {
//     return (
//       <View className="tabs-icon">
//         <View className={clsx('tabs-pill' , focused && 'tabs-active')}>
//           <Image source={icon} className="tabs-glyph"
//           />
//         </View>

//       </View>
//     )

//   }

//   return <Tabs
  
//   screenOptions={{
//     tabBarStyle: {
//       position: 'absolute',
//       height: tabBar.height,
//       bottom: Math.max(insets.bottom, tabBar.horizontalInset),
//       marginHorizontal: tabBar.horizontalInset,
      
//     },
//      tabBarItemStyle: {
//       paddingVertical: tabBar.height / 2 - 

//     },

//     tabBarIconStyle : {

//     },

//   }}>


//     {tabs
//     .map((tab) => (
//       <Tabs.Screen
//         key={tab.name}
//         name={tab.name}
//         options={{
//           title: tab.title,
//           tabBarIcon: ({ focused }) => (
//             <TabIcon focused={focused} icon={tab.icon} />
//           )

//         }}
//       />
//     )
//   )}
   

//   </Tabs>
// }

// export default TabLayout;