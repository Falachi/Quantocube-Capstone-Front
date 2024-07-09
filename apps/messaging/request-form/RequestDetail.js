import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../store/messagesSlice';
import { getCurrentTime } from '../../../utils/TimeDate';

const ButtonProperties = {
  size: 25,
  color: '#FE5823',
}

const RequestDetails = ({ route }) => {
  const { user, receiver, attachment } = route.params;
  //const form = useSelector((state) => state.requestForm.find((item) => item.id === formId));
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const buttonHandler = (choice) => {
    dispatch(addMessage({
      type: 'bar',
      name: receiver.name,
      text: choice ? "HAS ACCEPTED THE REQUEST" : "HAS REJECTED THE REQUEST",
      time: getCurrentTime(),
    }))
    navigation.navigate('Screen', {user, receiver});
    //console.log(choice);
  };

  if (!attachment) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Form not found</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{paddingBottom: 20,}} onPress={() => navigation.goBack()}>
          <Icon2 name='arrow-left' size={ButtonProperties.size} color={ButtonProperties.color}></Icon2>
        </TouchableOpacity>
        <View style={styles.formInfo}>
          <Icon name='file-contract' size={15} color='#FFCF36' />
          <Text style={styles.formInfoText}>{`#${attachment.id}`}</Text>
        </View>
        <Text style={styles.title}>{`Request from ${user.name}`}</Text>
        <Text style={styles.headerTwo}>Created</Text>
        <Text style={styles.date}>{attachment.createdAt}</Text>
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
            <Text style={styles.sectionTitle}>SEVICE</Text>
            <Text style={styles.sectionText}>{attachment.service}</Text>
          </View>
          <View style={styles.separator} />
          <View style={[styles.section, { marginTop: 40 }]}>
            <Text style={styles.sectionTitle}>SERVICE DETAILS</Text>
            <Text style={styles.sectionText}>{attachment.description}</Text>
          </View>
          <View style={styles.separator} />
          <View style={[styles.section, { marginTop: 40 }]}>
            <Text style={styles.sectionTitle}>LOCATION</Text>
            <Text style={styles.sectionText}>{attachment.location}</Text>
          </View>
          <View style={styles.separator} />
          <View style={[styles.section, { marginTop: 40 }]}>
            <Text style={styles.sectionTitle}>TIMELINE</Text>
            <Text style={styles.sectionText}>{`${attachment.startDate} - ${attachment.endDate}`}</Text>
          </View>
          <View style={styles.separator} />
          <View style={[styles.section, { marginTop: 40 }]}>
            <Text style={styles.sectionTitle}>BUDGET</Text>
            <Text style={styles.sectionText}>{attachment.budget}</Text>
          </View>
          <View style={styles.separator} />
          <View style={[styles.section, { marginTop: 40 }]}>
            <Text style={styles.sectionTitle}>ADDITIONAL COMMENTS</Text>
            <Text style={styles.sectionText}>{attachment.additionalInfo}</Text>
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
    marginTop: 20,
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
  sectionTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  sectionText: {
    color: '#B8B8B8',
    fontWeight: '500',
    fontSize: 16,
    paddingTop: 10,
  },

});

export default RequestDetails;