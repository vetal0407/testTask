import React, { useEffect } from 'react'
import {
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { fetchSongsGet } from '../../redux/actions/main'

import Album from '../../components/Album/Album'
import Loading from '../../components/Loading/Loading'

const Main = props => {

  useEffect(() => {
    props.fetchSongsGet()
  }, [])

  return (
    <ScrollView>
      {!props.isLoading
        ? props.data.map(album => <Album
              key={album.id}
              album={album}
          />)
        : <Loading/>
      }
    </ScrollView>
  )
}

function mapStateToProps(state) {
  return {
    data: state.main.data,
    isLoading: state.main.isLoading,
  }
}

const mapDispatchToProps = {
  fetchSongsGet
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main)
