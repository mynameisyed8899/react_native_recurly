import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const sign_up = () => {
  return (
    <View>
      <Text>sign_up</Text>
      <Link href='/(auth)/sign_up'></Link>
    </View>
  )
}

export default sign_up

const styles = StyleSheet.create({})