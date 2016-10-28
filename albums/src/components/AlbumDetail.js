import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props)=>{
  // Destructure props into artist, title & image
  const {album} = props;
  const {artist, title, thumbnail_image, image} = album;
  return(
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source={{uri:thumbnail_image}}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{uri:image}}
          style={styles.imageStyle}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
  // imageContainerStyle: {
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
}

export default AlbumDetail;
