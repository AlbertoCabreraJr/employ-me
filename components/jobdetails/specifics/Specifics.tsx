import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

type SpecificsProps = {
  title: string
  points: any
}

const Specifics = ({ title, points }: SpecificsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item: any, index: number) => {
          return (
            <View style={styles.pointWrapper} key={item + index}>
              <Text style={styles.pointDot} />
              <Text style={styles.pointText}>{item}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default Specifics
