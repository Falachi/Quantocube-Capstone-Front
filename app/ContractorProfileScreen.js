import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import users from '../utils/UserData';

const ContractorProfileScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('About');

  const user = users[0];
  const receiver = users[1];

  const handleStartChat = () => {
    navigation.navigate('RequestForm', {
      user,
      receiver,
    });
  };
  const handleToChat = () => {
    console.log(receiver);
    navigation.navigate("Screen", {
      user, receiver
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={({ pressed }) => [
            styles.backButton,
            { opacity: pressed ? 0.5 : 1 }
          ]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
        <Text style={styles.headerTitle}>Jackson Hon</Text>
        <Pressable
          style={({ pressed }) => [
            styles.searchButton,
            { opacity: pressed ? 0.5 : 1 }
          ]}
          onPress={() => {
            // Handle search button press
          }}
        >
          <Ionicons name="search" size={24} color="white" />
        </Pressable>
      </View>
      <View style={styles.profileSection}>
        <Image source={{ uri: "../assets/images/findpros/contractorpfp/1.jpeg" }} style={styles.profileImage} />
        <Text style={styles.profileName}>Jackson Hon</Text>
        <View style={styles.profileStats}>
          <Text style={styles.stat}>120</Text>
          <Text style={styles.stat}>100</Text>
          <Text style={styles.stat}>★ 4.6</Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.followButton} onPress={() => handleToChat()}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.hireButton} onPress={() => handleStartChat()}>
          <Text style={styles.buttonText}>Hire</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'About' && styles.activeTab]}
          onPress={() => setActiveTab('About')}
        >
          <Text style={[styles.tabText, activeTab === 'About' && styles.activeTabText]}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Work' && styles.activeTab]}
          onPress={() => setActiveTab('Work')}
        >
          <Text style={[styles.tabText, activeTab === 'Work' && styles.activeTabText]}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Review' && styles.activeTab]}
          onPress={() => setActiveTab('Review')}
        >
          <Text style={[styles.tabText, activeTab === 'Review' && styles.activeTabText]}>Review</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'About' && (
        <View style={styles.aboutContainer}>
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statBoxText}>4.6{"\n"}REVIEWS</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statBoxText}>100{"\n"}APPRECIATIONS</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statBoxText}>15{"\n"}COMPLETED PROJECTS</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statBoxText}>100%{"\n"}COMPLETION RATE</Text>
            </View>
          </View>
          <Text style={styles.locationTitle}>LOCATION</Text>
          <Text style={styles.location}>📍 Bukit Jalil, Malaysia</Text>
          <Text style={styles.aboutTitle}>ABOUT</Text>
          <Text style={styles.aboutText}>
            Hello, I'm Jackson Hon, an interior designer with a passion for creating beautiful and functional spaces.
            With over 4 years of experience in the industry, I have had the pleasure of working on a variety of
            projects, from cozy residential homes to stylish commercial spaces. 🏠
          </Text>
          <Text style={styles.aboutText}>
            My approach to design is client-centered, ensuring that each project reflects the unique personality and
            lifestyle of my clients. I believe in the power of design to transform spaces and enhance the quality of
            life.
          </Text>
        </View>
      )}
      {activeTab === 'Work' && (
        <View style={styles.projectsContainer}>
          <View style={styles.projectCard}>
            <Image source={{ uri: "../assets/images/findpros/contractorsplash/work1.png" }} style={styles.projectImage} />
            <Text style={styles.projectTitle}>Modern Luxury Living Concept</Text>
          </View>
          <View style={styles.projectCard}>
            <Image source={{ uri: "../assets/images/findpros/contractorsplash/work2.png" }} style={styles.projectImage} />
            <Text style={styles.projectTitle}>Milky Aesthetic Ins Style</Text>
          </View>
          <View style={styles.projectCard}>
            <Image source={{ uri: "../assets/images/findpros/contractorsplash/work3.png" }} style={styles.projectImage} />
            <Text style={styles.projectTitle}>Cozy Beige Living Room</Text>
          </View>
          <View style={styles.projectCard}>
            <Image source={{ uri: "../assets/images/findpros/contractorsplash/work4.png" }} style={styles.projectImage} />
            <Text style={styles.projectTitle}>Modern Woody Space</Text>
          </View>
        </View>
      )}
      {activeTab === 'Review' && (
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewCount}>20 REVIEWS</Text>
          {Array.from({ length: 3 }).map((_, index) => (
            <View key={index} style={styles.reviewCard}>
              <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.reviewImage} />
              <View style={styles.reviewContent}>
                <Text style={styles.reviewAuthor}>Evelyn Hon</Text>
                <Text style={styles.reviewDate}>2 days ago · ★ 4.6</Text>
                <Text style={styles.reviewText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 15... <Text style={styles.readMore}>Read More</Text>
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1b1b1b',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageIcon: {
    width: 24,
    height: 24,
  },
  profileSection: {
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    color: '#fff',
    fontSize: 24,
    marginTop: 8,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 8,
  },
  stat: {
    color: '#fff',
    fontSize: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  followButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
  },
  hireButton: {
    backgroundColor: '#fe5823',
    padding: 10,
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    paddingVertical: 10,
    borderTopLeftRadius: 30,
  },
  tab: {
    paddingVertical: 10,
    width: '33%',
    alignItems: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#fe5823',
  },
  activeTabText: {
    color: '#fe5823',
  },
  projectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#000',
  },
  projectCard: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '45%',
    marginBottom: 16,
  },
  projectImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  projectTitle: {
    color: '#fff',
    marginTop: 8,
    textAlign: 'center',
  },
  aboutContainer: {
    padding: 16,
    backgroundColor: '#000',
  },
  statsContainer: {
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // marginBottom: 16,
    // width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  statBox: {
    marginBottom: 7,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '47%',
    aspectRatio: 2,
  },
  statBoxText: {
    // color: '#999',
    // fontSize: 12,
    // marginTop: 4,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  locationTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  location: {
    color: '#fe5823',
    fontSize: 16,
    marginBottom: 16,
  },
  aboutTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  aboutText: {
    color: '#999',
    fontSize: 14,
    marginBottom: 8,
  },
  reviewContainer: {
    padding: 16,
    backgroundColor: '#000',
  },
  reviewCount: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 16,
  },
  reviewCard: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  reviewImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  reviewContent: {
    flex: 1,
  },
  reviewAuthor: {
    color: '#fff',
    fontSize: 16,
  },
  reviewDate: {
    color: '#999',
    fontSize: 12,
    marginBottom: 8,
  },
  reviewText: {
    color: '#999',
    fontSize: 14,
  },
  readMore: {
    color: '#fe5823',
  },
  backButton: {
    backgroundColor: '#FE5823',
    borderRadius: 24,
    aspectRatio: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContractorProfileScreen;