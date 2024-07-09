import React from 'react';
import { TextInput, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const HomeownerHomePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>THURSDAY, 30 MAY</Text>
        <Text style={styles.greeting}>Hello, Matiny.</Text>
        <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profileImage} />
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchIcon}>
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('FindPros')}>
          <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Find Pros</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>QuantoMall</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Ongoing Project</Text>
      <TouchableOpacity style={styles.projectCard} onPress={() => navigation.navigate('HomeownerProjectOverview')}>
        <Text style={styles.projectTitle}>Project #8676</Text>
        <Text style={styles.projectStatus}>Quoted</Text>
        <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Featured Contractor</Text>
      <View style={styles.contractorContainer}>
        <View style={styles.contractorCard}>
          <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.contractorImage} />
          <Text style={styles.contractorName}>Jackson Hon</Text>
          <Text style={styles.contractorRating}>4.8</Text>
        </View>
        <View style={styles.contractorCard}>
          <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.contractorImage} />
          <Text style={styles.contractorName}>Joyce Leong</Text>
          <Text style={styles.contractorRating}>5.0</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Service Category</Text>
      <View style={styles.serviceContainer}>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Renovations</Text>
        </View>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Installations</Text>
        </View>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Electrical</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>QuantoMall Delight</Text>
      <View style={styles.mallContainer}>
        <View style={styles.mallCard}>
          <Text style={styles.mallTitle}>Tapestry Counter Stool</Text>
          <Text style={styles.mallPrice}>MYR 182.00</Text>
        </View>
        <View style={styles.mallCard}>
          <Text style={styles.mallTitle}>Sotena Bean Bag Chair</Text>
          <Text style={styles.mallPrice}>MYR 232.00</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Join The List</Text>
      <TextInput style={styles.emailInput} placeholder="yourname@example.com" placeholderTextColor="#999" />
      <Text style={styles.sectionTitle}>Inspiration</Text>
      <View style={styles.inspirationContainer}>
        <View style={styles.inspirationCard}>
          <Text style={styles.inspirationTitle}>Modern Luxury Dining Concept</Text>
          <Text style={styles.inspirationAuthor}>Hida Zayn</Text>
        </View>
        <View style={styles.inspirationCard}>
          <Text style={styles.inspirationTitle}>Milky Aesthetic Ins Style</Text>
          <Text style={styles.inspirationAuthor}>Jackson Hon</Text>
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
  date: {
    color: '#999',
  },
  greeting: {
    color: '#fff',
    fontSize: 24,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  searchIcon: {
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 8,
  },
  searchText: {
    color: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  card: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
  },
  cardTitle: {
    color: '#fff',
    marginTop: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    padding: 16,
  },
  projectCard: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  projectTitle: {
    color: '#fff',
    fontSize: 16,
  },
  projectStatus: {
    color: '#fe5823',
    fontSize: 16,
    marginTop: 4,
  },
  projectDate: {
    color: '#999',
    marginTop: 4,
  },
  contractorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  contractorCard: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  contractorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contractorName: {
    color: '#fff',
    marginTop: 8,
  },
  contractorRating: {
    color: '#fe5823',
    marginTop: 4,
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  serviceCard: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  serviceTitle: {
    color: '#fff',
  },
  mallContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  mallCard: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  mallTitle: {
    color: '#fff',
  },
  mallPrice: {
    color: '#fe5823',
    marginTop: 4,
  },
  emailInput: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    color: '#fff',
  },
  inspirationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  inspirationCard: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  inspirationTitle: {
    color: '#fff',
  },
  inspirationAuthor: {
    color: '#999',
    marginTop: 4,
  },
});

export default HomeownerHomePage;
  