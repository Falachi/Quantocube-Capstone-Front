import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ServiceDeclined = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Project #8676</Text>
        <Text style={styles.subTitle}>Service Request</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Service Declined</Text>
          <Text style={styles.cardStatus}>Declined</Text>
        </View>
        <Text style={styles.cardText}>Request ID: 123456789</Text>
        <Text style={styles.cardText}>12/12/2023 12:30</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Service</Text>
        <Text style={styles.detailsText}>Interior Design</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Service Details</Text>
        <Text style={styles.detailsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Location</Text>
        <Text style={styles.detailsText}>10 Downing Street, London, UK</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Timeline</Text>
        <Text style={styles.detailsText}>01/01/2023 - 01/06/2023</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Budget</Text>
        <Text style={styles.detailsText}>$10,000 - $15,000</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Additional Comments</Text>
        <Text style={styles.detailsText}>
          Please make sure to follow the guidelines and complete the project on time.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Project Overview</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
  },
  cardStatus: {
    color: 'red',
    fontSize: 16,
  },
  cardText: {
    color: '#999',
    marginTop: 4,
  },
  details: {
    marginBottom: 16,
  },
  detailsTitle: {
    color: '#999',
    fontSize: 14,
    marginBottom: 4,
  },
  detailsText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#fe5823',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ServiceDeclined;
