import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProjectOverview = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Project</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchText}>🔍</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.projectContainer}>
        <TouchableOpacity style={styles.projectCard} onPress={() => navigation.navigate('ServiceRequest')}>
          <Text style={styles.projectTitle}>Service Requested</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.projectCard} onPress={() => navigation.navigate('ServiceApproved')}>
          <Text style={styles.projectTitle}>Request Approved</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.projectCard} onPress={() => navigation.navigate('ServiceDeclined')}>
          <Text style={styles.projectTitle}>Request Declined</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </TouchableOpacity>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Quoted</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Quotation Updated</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Quotation Expired</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Project Confirmed</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>In Progress</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>In Progress (Request)</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Project Completed</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Project Closed</Text>
          <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  searchButton: {
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 8,
  },
  searchText: {
    color: '#fff',
    fontSize: 18,
  },
  projectContainer: {
    paddingHorizontal: 16,
  },
  projectCard: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  projectTitle: {
    color: '#fff',
    fontSize: 16,
  },
  projectDate: {
    color: '#999',
    marginTop: 4,
  },
});

export default ProjectOverview;
