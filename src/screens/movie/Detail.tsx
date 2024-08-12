import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAppSelector } from '../../state/hooks'
import { selectMovieData } from '../../state/reducers/movies'
import DeviceInfo from 'react-native-device-info'
import { styles } from './style'

export function Detail() {
    const moviesData = useAppSelector(selectMovieData)
    const { movieSelected } = moviesData
    const isSimulator = () => {
        return DeviceInfo.isEmulator();
    };

    return (
        <View>
            <Text>Running on emulator: {isSimulator() ? 'true' : 'false'}</Text>
            {movieSelected &&
                Object.keys(movieSelected).map((key) => (
                    <View style={styles.container}>
                        <Text
                            key={`title-${key}`}
                            style={styles.title}
                        >{key} :</Text>
                        <Text
                            key={`body-${key}`}
                            style={styles.title}
                        >{movieSelected[key]}</Text>
                    </View>
                ))
            }
        </View>
    )
}