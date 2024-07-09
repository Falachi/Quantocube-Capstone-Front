// ContractorHomePage.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const ContractorHomePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('ContractorOptionScreen')}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.date}>THURSDAY, 30 MAY</Text>
      </View>
      <Text style={styles.greeting}>Hello, Jackson!</Text>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchBox}>
          <Text style={styles.searchText}>Search something here...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.sectionTitle}>Schedule Plan Today</Text>
        <View style={styles.scheduleCard}>
          <Text style={styles.scheduleText}>Meeting with Matiny Ong</Text>
          <Text style={styles.scheduleDetails}>10:00 AM - 12:00 PM</Text>
          <Text style={styles.scheduleDetails}>Department Hall, Library City</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>To Do</Text>
      <View style={styles.todoContainer}>
        <View style={styles.todoCard}>
          <Text style={styles.todoText}>Review New Requests</Text>
        </View>
        <View style={styles.todoCard}>
          <Text style={styles.todoText}>Review Negotiate Requests</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Inspiration</Text>
      <View style={styles.inspirationContainer}>
        <View style={styles.inspirationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.inspirationImage} />
          <Text style={styles.inspirationTitle}>Modern Luxury Dining Concept</Text>
        </View>
        <View style={styles.inspirationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.inspirationImage} />
          <Text style={styles.inspirationTitle}>Milky Aesthetic Ins Style</Text>
        </View>
        <View style={styles.inspirationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.inspirationImage} />
          <Text style={styles.inspirationTitle}>Simple Luxury Interiors</Text>
        </View>
        <View style={styles.inspirationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.inspirationImage} />
          <Text style={styles.inspirationTitle}>Modern Wavy Space</Text>
        </View>
        <View style={styles.inspirationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.inspirationImage} />
          <Text style={styles.inspirationTitle}>Luxury Living Room</Text>
        </View>
        <View style={styles.inspirationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.inspirationImage} />
          <Text style={styles.inspirationTitle}>Simple Modern Interior</Text>
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
  menuButton: {
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 8,
  },
  menuText: {
    color: '#fff',
    fontSize: 24,
  },
  date: {
    color: '#999',
    fontSize: 14,
  },
  greeting: {
    color: '#fff',
    fontSize: 24,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  searchBox: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    color: '#999',
    fontSize: 16,
  },
  scheduleContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 8,
  },
  scheduleCard: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  scheduleText: {
    color: '#fff',
    fontSize: 16,
  },
  scheduleDetails: {
    color: '#999',
    marginTop: 4,
    fontSize: 14,
  },
  todoContainer: {
    paddingHorizontal: 16,
  },
  todoCard: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  todoText: {
    color: '#fff',
    fontSize: 16,
  },
  inspirationContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  inspirationCard: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
    width: '48%',
  },
  inspirationImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  inspirationTitle: {
    color: '#fff',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default ContractorHomePage;
