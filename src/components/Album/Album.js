import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

import Track from '../Track/Track'

import styles from './styles'

const Album = props => {
    return (
        <>
            <View style={styles.headerWrapper}>
                <Image
                    style={styles.image}
                    source={{uri: props.album.cover.url}}
                />
                <Text style={styles.title}>
                    {props.album.title}
                </Text>
            </View>
            {
                props.album.tracks.map(track => <Track
                    key={track.key}
                    track={track}
                />)
            }
        </>
    )
}

export default Album
