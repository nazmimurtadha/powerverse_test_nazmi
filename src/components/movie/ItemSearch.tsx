import React, { useState } from 'react'
import { Button, View, TextInput } from 'react-native'
import { getMovieList } from '../../api/home'
import { useAppDispatch } from '../../state/hooks'
import {
    saveMovieList,
} from '../../state/reducers/movies'

export function ItemSearch() {
    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitSearch = async () => {
        await setIsLoading(true)
        const movies = await getMovieList(searchValue);
        await dispatch(saveMovieList(movies))
        await setIsLoading(false)
    }

    return (
        <View>
            <TextInput
                onChangeText={setSearchValue}
                value={searchValue}
            />
            <Button
                onPress={() => submitSearch()}
                disabled={isLoading}
                title={isLoading ? 'Searching...' : 'Search'} />
        </View>
    )
}
