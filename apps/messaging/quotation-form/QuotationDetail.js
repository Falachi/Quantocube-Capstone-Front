import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../store/messagesSlice';
import { getCurrentTime } from '../../../utils/TimeDate';
import users from '../../../utils/UserData';

const ButtonProperties = {
  size: 25,
  color: '#FE5823',
}

const QuotationDetails = ({route}) => {
  const {attachment} = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = users[0];
  const receiver = users[1];

  const buttonHandler = (choice) => {
    dispatch(addMessage({
      type: 'bar',
      name: 'YOU',
      text: choice ? "HAVE ACCEPTED THE QUOTATION" : "HAVE REJECTED THE QUOTATION",
      time: getCurrentTime(),
    }))
    navigation.navigate('Screen', {user, receiver});
    //console.log(choice);
  };



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{paddingBottom: 20,}} onPress={() => navigation.goBack()}>
          <Icon2 name='arrow-left' size={ButtonProperties.size} color={ButtonProperties.color}></Icon2>
        </TouchableOpacity>
        <View style={styles.formInfo}>
          <Icon name='file-contract' size={15} color='#FFCF36' />
          <Text style={styles.formInfoText}>#12345</Text>
        </View>
        <Text style={styles.title}>{`Quotation for Martiny Ong`}</Text>
        <View style={styles.choiceButtons}>
          <TouchableOpacity style={styles.button} onPress={() => buttonHandler(false)}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => buttonHandler(true)}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps='handled'>
        <View style={[styles.section, { marginTop: 40 }]}>
            <Text style={styles.quote}>Quote #Q81292</Text>
            <Text style={styles.sectionTitle}>Martiny Ong</Text>
            <Text style={styles.sectionText}>A-28-21, Sky Greenfield Condominium, 57000 Bukit Jalil, Kuala Lumpur </Text>
            <Text style={styles.sectionText}>Renovation and redesign of the living room to create a modern and cozy space. This includes new furniture, updated colour scheme, improved lighting, and overall aesthetic enhancement to match the client's vision.</Text>
        </View>
        <View style={styles.sectionPair}>
          <Text style={styles.sectionSubTitle}>Sent</Text>
          <Text style={styles.sectionText}>21/06/2024 21:38</Text>
        </View>
        <View style={styles.separatorBig} />
        <View style={styles.section}>
          <Text style={styles.sectionSubTitle}>Interior Design Consultation</Text>
          <Text style={styles.priceText}>Concept development for modern cozy design</Text>
          <View style={styles.pricingSeparator} />
          <Text style={styles.price}>TOTAL</Text>
          <Text style={styles.priceText}>MYR 2000.00</Text>
          <View style={styles.pricingSeparatorThick} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionSubTitle}>Painting Services</Text>
          <Text style={styles.priceText}>Application of new color scheme</Text>
          <View style={styles.pricingSeparator} />
          <Text style={styles.price}>TOTAL</Text>
          <Text style={styles.priceText}>MYR 1000.00</Text>
          <View style={styles.pricingSeparatorThick} />
        </View>
        <View style={styles.sectionPair}>
          <Text style={styles.sectionTitle}>Subtotal</Text>
          <Text style={styles.sectionPrice}>MYR 3000.00</Text>
        </View>
        <View style={styles.sectionPair}>
          <Text style={styles.sectionTitle2}>{`GST (6%)`}</Text>
          <Text style={styles.sectionPrice}>MYR 180.00</Text>
        </View>
        <View style={styles.sectionPair}>
          <Text style={styles.sectionTitle2}>Total</Text>
          <Text style={styles.sectionPrice}>MYR 3180.00</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  sectionSubTitle: {
    flex: 1,
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 10,
  },  
  quote: {
    flex: 1,
    color: '#8F9193',
    marginBottom: 20,
    fontWeight: '500',
    fontSize: 16,
  },
  header: {
    backgroundColor: '#1B1B1B',
    borderBottomLeftRadius: 40,
    paddingVertical: 40,
    paddingHorizontal: 40,
    paddingTop: 80
  },
  formInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  formInfoText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
    paddingLeft: 5,
  },
  title: {
    color: 'white',
    fontSize: 25,
    marginTop: 10,
    fontWeight: '700',
  },
  headerTwo: {
    color: 'gray',
    fontSize: 14,
    marginTop: 5,
  },
  date: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  choiceButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#FE5823',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backButtonText: {
    color: '#1B1B1B',
    fontWeight: 'bold',
  },
  scrollViewContent: {
    paddingBottom: 70,
    backgroundColor: "black",
    flexGrow: 1,
    paddingHorizontal: 40,
    flexDirection: 'column',
  },
  section: {
    marginBottom: 40
  },
  separator: {
    height: 1,
    backgroundColor: '#252525',
    marginBottom: 20,
  },
  separatorBig: {
    height: 5,
    backgroundColor: '#252525',
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  sectionText: {
    color: '#B8B8B8',
    fontWeight: '500',
    fontSize: 16,
    paddingTop: 10,
  },
  sectionPair: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 10,
  },
  priceText: {
    color: '#B8B8B8',
    fontWeight: '500',
    fontSize: 15,
    paddingTop: 10,
    width: '70%',
    paddingBottom: 10,
  },
  pricingSeparator: {
    height: 1,
    backgroundColor: '#252525',
    marginBottom: 10,
    marginTop: 10,
  },
  pricingSeparatorThick: {
    height: 3,
    backgroundColor: '#252525',
    marginBottom: 0,
  },
  price: {
    flex: 1,
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    alignItems: 'center',
    alignContent: 'center',
  },
  sectionPrice: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    flex: 1,
    textAlign: 'right',
    alignItems: 'center',
    alignContent: 'center'
  },
  sectionTitle2: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },

});

export default QuotationDetails;