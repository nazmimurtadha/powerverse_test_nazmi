import React from 'react'
import { View } from 'react-native'
import { ItemSearch, ItemList } from '../../components/movie/index'

export function Listing({ navigation }) {

    const navigateScreen = (page: string) => {
        navigation.navigate(page)
    }

    return (
        <View>
            <ItemSearch />
            <ItemList navigateScreen={navigateScreen} />
        </View >
    )
}
