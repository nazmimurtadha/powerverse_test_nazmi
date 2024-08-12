import React, { useState } from 'react'
import { SafeAreaView, FlatList, View, Text } from 'react-native'
import { useAppSelector, useAppDispatch } from '../../state/hooks'
import {
    saveMovieSelected,
    selectMovieData
} from '../../state/reducers/movies'
import { MovieState } from './movie.type'
import { styles } from './style'

export function ItemList({ navigateScreen }) {
    const moviesData = useAppSelector(selectMovieData)
    const dispatch = useAppDispatch()
    const { movieLists } = moviesData
    const [selectedId, setSelectedId] = useState<number>();

    const saveSelectedMovie = (item: MovieState) => {
        setSelectedId(item.id);
        dispatch(saveMovieSelected(item))
        navigateScreen('MovieDetail')
    }

    const Item = ({ item }: any) => (
        <View style={styles.item}>
            <Text style={styles.title}
                onPress={() => saveSelectedMovie(item)}
            >{item.title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {movieLists && <FlatList
                data={movieLists}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />}
        </SafeAreaView>
    )
}

