import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../constants'

import styles from './tabs.style'

type TabButtonProps = {
  name: string
  activeTab: string
  onHandleSearchType: () => void
}

const TabButton = ({ name, activeTab, onHandleSearchType }: TabButtonProps) => {
  return (
    <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  )
}

type TabsProps = {
  tabs: []
  activeTab: string
  setActiveTab: any
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
        data={tabs}
        renderItem={({ item }) => {
          return <TabButton name={item} activeTab={activeTab} onHandleSearchType={() => setActiveTab(item)} />
        }}
      />
    </View>
  )
}

export default Tabs
