import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Animated,
  FlatList,
} from 'react-native';
import FlatlistItem from '../FlatlistItem/FlatlistItem';

const flatlistcontent = [
  {
    id: '1',
    title: 'Oujda',
    description:
      'La médina d Oujda est fondée en 9943 près de la plaine des Angads, par Ziri Ibn Attia',
    image: require('../../../assets/images/homeflatlist/2.png'),
    message: 'See Balance',
  },
  {
    id: '2',
    title: 'Oujda',
    description:
      'La médina d Oujda est fondée en 9943 près de la plaine des Angads, par Ziri Ibn Attia',
    image: require('../../../assets/images/homeflatlist/3.png'),
    message: 'See Balance',
  },
  {
    id: '3',
    title: 'Oujda',
    description:
      'La médina d Oujda est fondée en 9943 près de la plaine des Angads, par Ziri Ibn Attia',
    image: require('../../../assets/images/homeflatlist/4.png'),
    message: 'See Balance',
  },
  {
    id: '4',
    title: 'Oujda',
    description:
      'La médina d Oujda est fondée en 9943 près de la plaine des Angads, par Ziri Ibn Attia',
    message: 'See Balance',
  },
];

const HomeFlatlist = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const slidesRef = React.useRef(null);
  const viewConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;
  const viewableItemsChanged = React.useRef(({viewableItems}) => {
    console.log(viewableItems);
  }).current;
  return (
    <View style={styles.container}>
      <FlatList
        data={flatlistcontent}
        renderItem={({item}) => <FlatlistItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'White',
  },
});

export default HomeFlatlist;
