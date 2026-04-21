import { View,Image, Text, Pressable } from 'react-native'
import React from 'react'
import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from '@/lib/utils'
import clsx from 'clsx'

const SubscriptionCard = ( {
   name, price , currency, icon,
   billing, color,category,
   startDate, 
   plan, renewalDate, expanded, onPress, paymentMethod, status}: 
  SubscriptionCardProps) => {
  return (
    //clsx👉 condition && "class" = add class if true
    // 🧸 Super simple explanation
    // 👉 This component is saying:
    // “When you tap me → run a function”
    // “If I’m open → use expanded style”
    // “If I’m closed → use normal style + color”
    <Pressable onPress={onPress} 
    className={clsx('sub-card',
     expanded ? 'sub-card-expanded' : 'bg-card')} 
     style={!expanded && color ? { backgroundColor: color } : undefined }>

      <View className='sub-head'>
        <View className='sub-main'>
          <Image source={icon} className="sub-icon" />
          <View className='sub-copy'>
            <Text numberOfLines={1} className='sub-title'>
              {name}
            </Text>
            <Text numberOfLines={1} ellipsizeMode='tail' className='sub-meta'>
              {category?.trim() || plan?.trim() || (renewalDate ? 
                formatSubscriptionDateTime(renewalDate) : '')}
            </Text>
          </View>
        </View>
    
        <View className='sub-price-box'>
          <Text className='sub-price'>{formatCurrency(price, currency)}</Text>
          <Text className='sub-billing'>{billing}</Text>
        </View>
      </View>
      
      {expanded && (
        <View className='sub-body' >
          <View className='sub-details'>

            <View className='sub-row'>
              <View className='sub-row-copy'>
                <Text className='sub-label'>Payment:</Text>
                <Text className='sub-value' numberOfLines={1}
                //👉 || means: “use the left value if it’s truthy, otherwise use the right one.”
                ellipsizeMode='tail'>{(paymentMethod || '').trim()}</Text>
              </View>
            </View>

            
            <View className='sub-row'>
              <View className='sub-row-copy'>
                <Text className='sub-label'>Category:</Text>
                <Text className='sub-value' numberOfLines={1}
                //👉 || means: “use the left value if it’s truthy, otherwise use the right one.”
                ellipsizeMode='tail'>{(category?.trim()) || plan?.trim()}</Text>
              </View>
            </View>

            
            <View className='sub-row'>
              <View className='sub-row-copy'>
                <Text className='sub-label'>Started:</Text>
                <Text className='sub-value' numberOfLines={1}
                //👉 || means: “use the left value if it’s truthy, otherwise use the right one.”
                ellipsizeMode='tail'>{startDate ? formatSubscriptionDateTime(startDate) : ''}</Text>
              </View>
            </View>

            
            <View className='sub-row'>
              <View className='sub-row-copy'>
                <Text className='sub-label'>Renewal Date:</Text>
                <Text className='sub-value' numberOfLines={1}
                //👉 || means: “use the left value if it’s truthy, otherwise use the right one.”
                ellipsizeMode='tail'>{renewalDate ? formatSubscriptionDateTime(renewalDate) : ''}</Text>
              </View>
            </View>

             <View className='sub-row'>
              <View className='sub-row-copy'>
                <Text className='sub-label'>Status:</Text>
                <Text className='sub-value' numberOfLines={1}
                //👉 || means: “use the left value if it’s truthy, otherwise use the right one.”
                ellipsizeMode='tail'>{ status ? formatStatusLabel(status) : ''}</Text>
              </View>
            </View>



          </View>
        </View>
      )}

    </Pressable>
  )
}
export default SubscriptionCard