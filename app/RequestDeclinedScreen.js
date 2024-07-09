// RequestDeclinedScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RequestDeclinedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Project #9876</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationText}>🔔</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Homeowner</Text>
          <Text style={styles.sectionContent}>Matiny Ong</Text>
        </View>
        <View style={styles.statusSection}>
          <View style={styles.statusItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.icon} />
            <View style={styles.statusDetails}>
              <Text style={styles.statusText}>New Request</Text>
              <Text style={styles.statusDate}>22 Jun</Text>
            </View>
          </View>
          <View style={styles.statusItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={[styles.icon, { backgroundColor: '#FF6B35' }]} />
            <View style={styles.statusDetails}>
              <Text style={styles.statusText}>Request Declined</Text>
              <Text style={styles.statusDate}>22 Jun</Text>
            </View>
          </View>
        </View>
        <View style={styles.serviceRequestSection}>
          <Text style={styles.serviceRequestTitle}>Service Request</Text>
          <TouchableOpacity style={styles.previewButton}>
            <Text style={styles.previewText}>Preview</Text>
          </TouchableOpacity>
          <Text style={styles.requestDateTitle}>Request on</Text>
          <Text style={styles.requestDate}>21/06/2024 21:38</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    color: '#fff',
    fontSize: 24,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  notificationButton: {
    padding: 10,
  },
  notificationText: {
    color: '#fff',
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  sectionContent: {
    color: '#FF6B35',
    fontSize: 14,
  },
  statusSection: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: '#999',
    borderRadius: 8,
    marginRight: 10,
  },
  statusDetails: {
    flex: 1,
  },
  statusText: {
    color: '#fff',
    fontSize: 16,
  },
  statusDate: {
    color: '#999',
    fontSize: 14,
  },
  serviceRequestSection: {
    marginBottom: 20,
  },
  serviceRequestTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  previewButton: {
    alignSelf: 'flex-end',
  },
  previewText: {
    color: '#FF6B35',
    fontSize: 14,
  },
  requestDateTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
  },
  requestDate: {
    color: '#999',
    fontSize: 14,
  },
});

export default RequestDeclinedScreen;
