import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {ListOffices, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {
  DummyOffices1,
  DummyOffices2,
  DummyOffices3,
  ILOfficesBG,
} from '../../assets';
import {ListInfo} from '../../components';
import {Fire} from '../../config';

const Info = (props) => {
  console.log('🚀 ~ file: index.js ~ line 21 ~ Info ~ props', props);

  const [detail, setDetail] = useState();
  const params = props.route.params;
  useEffect(() => {
    Fire.database()
      .ref('info/' + params.item.id)
      .on('value', (snapshot) => {
        console.log(
          '🚀 ~ file: index.js ~ line 29 ~ useEffect ~ snapshot',
          snapshot.val(),
        );
        if (snapshot.val()) {
        }
        setDetail(snapshot.val());
      });
  }, []);

  return (
    <View style={styles.page}>
      <Header
        title="Detail Informasi"
        onPress={() => props.navigation.goBack()}
      />
      <ImageBackground
        source={detail ? {uri: detail.image} : ILOfficesBG}
        style={styles.background}>
        <Text style={styles.title}>{detail && detail.title}</Text>
        <Text style={styles.desc}>Alo Care</Text>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.body}>{detail && detail.body}</Text>
        <Text style={styles.part}>{detail && detail.part1}</Text>
        <Text style={styles.part}>{detail && detail.part2}</Text>
        <Text style={styles.part}>{detail && detail.part3}</Text>
        <Text style={styles.part}>{detail && detail.part4}</Text>
        <Text style={styles.part}>{detail && detail.part5}</Text>
        <Text style={styles.part}>{detail && detail.part6}</Text>
        <Text style={styles.part}>{detail && detail.part7}</Text>
        <Text style={styles.part}>{detail && detail.part8}</Text>
        <Text style={styles.part}>{detail && detail.part9}</Text>
        <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    padding: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  part: {
    fontSize: 16,
    padding: 4,
    paddingLeft: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
