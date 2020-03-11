import React from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native'

import SoundPlayer from 'react-native-sound-player'

import styles from './styles'

const Track = props => {

    function playTrack(url) {
        try {
            SoundPlayer.playUrl(url)
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    return (
        <TouchableOpacity onPress={() => playTrack(props.track.media.mp3.url) }>
            <Text style={styles.track}>
                {props.track.title}
            </Text>
        </TouchableOpacity>
    )
}

export default Track
