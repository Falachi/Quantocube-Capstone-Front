import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView, Platform, Alert, KeyboardAvoidingView } from "react-native";
import { useDispatch } from "react-redux";
import { sendRequestForm } from "../../../store/requestFormSlice"; // Import the action
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addMessage } from "../../../store/messagesSlice";
import { getCurrentTime } from "../../../utils/TimeDate";

const ButtonProperties = {
  size: 25,
  color: '#FE5823',
};

const RequestForm = ({route}) => {
  const {user, receiver} = route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  //const [open, setOpen] = useState(false);
  const [service, setService] = useState('');
  // const [items, setItems] = useState([
  //   {label: 'Interior Painting', value: 'Interior Painting'},
  //   {label: 'Exterior Painting', value: 'Exterior Painting'},
  //   {label: 'Interior Design', value: 'Interior Design'},
  //   {label: 'Flooring Installation', value: 'Flooring Installation'},
  //   {label: 'Interior Painting', value: 'Interior Painting'},
  // ]);

  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    if (!service || !description || !location || !startDate || !endDate || !budget) {
      Alert.alert('Error', 'Please fill all required fields (*)');
      return;
    }
  
    const formData = {
      id: new Date().getTime().toString(),
      type: "request form",
      status: false,
      service,
      description,
      location,
      startDate,
      endDate,
      budget,
      additionalInfo,
      createdAt: new Date().toLocaleString(),
    };
  
    // Dispatch the action to send the form data
    dispatch(addMessage({
      type: 'attachment',
      attachment: formData,
      time: getCurrentTime(),
      flag: true,
      attachmentType: 'request',
    }));

    // Navigate to the MessageScreen with the attachment parameter
    navigation.navigate('Screen', { user, receiver, attachment: formData.id });
  };


  return (
    <View style={styles.container}>
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={handleBackButton}>
          <Icon2 name='arrow-left' size={ButtonProperties.size} color={ButtonProperties.color} />
        </TouchableOpacity>
        <Text style={styles.title}>Service Request</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps='handled'>
        <View style={styles.infoBox}>
          <View style={[styles.section, { marginTop: 0 }]}>
            <Text style={styles.text}>Select Service*</Text>
            <View style={styles.textInputContainerSmall}>
              <TextInput
                style={styles.textInput}
                placeholder="Service Option"
                placeholderTextColor="gray"
                multiline={true}
                numberOfLines={1}
                value={service}
                onChangeText={setService}
              />
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.section}>
            <Text style={styles.text}>Service Description*</Text>
            <View style={styles.textInputContainerBig}>
              <TextInput
                style={styles.textInput}
                placeholder="Tell us more about your project"
                placeholderTextColor="gray"
                multiline={true}
                numberOfLines={1}
                value={description}
                onChangeText={setDescription}
              />
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.section}>
            <Text style={styles.text}>Location*</Text>
            <View style={styles.textInputContainerSmall}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your location"
                placeholderTextColor="gray"
                multiline={true}
                numberOfLines={1}
                value={location}
                onChangeText={setLocation}
              />
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.section}>
            <Text style={styles.text}>Timeline*</Text>
            <View style={styles.timelineContainer}>
              <View style={styles.timelineBox}>
                <Text style={styles.scheduleText}>Start Date</Text>
                <View style={{flex:1, flexDirection:'row',alignItems:'center', paddingTop: 5}}>
                  <Icon name='calendar' size={17} color={ButtonProperties.color} />
                  <TextInput
                    style={styles.scheduleTextInput}
                    placeholder="Select date"
                    placeholderTextColor="gray"
                    multiline={true}
                    numberOfLines={1}
                    value={startDate}
                    onChangeText={setStartDate}
                  />
                </View>
              </View>
              <Text style={{fontSize: 18, color:'white',marginHorizontal: 5}}>-</Text>
              <View style={styles.timelineBox}>
                <Text style={styles.scheduleText}>End Date</Text>
                <View style={{flex:1, flexDirection:'row',alignItems:'center', paddingTop: 5}}>
                  <Icon name='calendar' size={17} color={ButtonProperties.color} />
                  <TextInput
                    style={styles.scheduleTextInput}
                    placeholder="Select date"
                    placeholderTextColor="gray"
                    multiline={true}
                    numberOfLines={1}
                    value={endDate}
                    onChangeText={setEndDate}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.section}>
            <Text style={styles.text}>Budget*</Text>
            <View style={styles.textInputContainerSmall}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your budget"
                placeholderTextColor="gray"
                multiline={true}
                numberOfLines={1}
                value={budget}
                onChangeText={setBudget}
              />
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.section}>
            <Text style={styles.text}>Service Description</Text>
            <View style={styles.textInputContainerBig}>
              <TextInput
                style={styles.textInput}
                placeholder="Anything else we should know?"
                placeholderTextColor="gray"
                multiline={true}
                numberOfLines={1}
                value={additionalInfo}
                onChangeText={setAdditionalInfo}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.floatingButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    padding: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 20
  },
  scrollViewContent: {
    paddingBottom: 70,
    backgroundColor: "#1B1B1B",
    borderTopLeftRadius: 40,
    flexGrow: 1,
  },
  infoBox: {
    backgroundColor: "#1B1B1B",
    paddingHorizontal: 35,
    paddingTop: 40,
    marginBottom: 10,
    marginTop: 25,
    borderTopLeftRadius: 40,
    flexDirection: 'column',
  },
  section: {
    marginBottom: 40
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  textInputContainerSmall: {
    backgroundColor: 'black',
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 'auto',
  },
  textInputContainerBig: {
    backgroundColor: 'black',
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    minHeight: 150,
    lineHeight: 18,
    height: 'auto'
  },
  textInput: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    zIndex: 1000,
  },
  floatingButton: {
    backgroundColor: '#FE5823',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#252525',
    marginBottom: 40,
  },
  timelineContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:10,
    width: '100%',
  },
  timelineBox: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    flex: 1,
  },
  scheduleText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
  },
  scheduleTextInput: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    padding: 5,
  }
});

export default RequestForm;