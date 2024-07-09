// ContractorOptionScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ContractorOptionScreen = ({ navigation }) => {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/80' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Jackson Hon</Text>
        <TouchableOpacity style={styles.viewProfileButton}>
          <Text style={styles.viewProfileButtonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => handleNavigation(item.screen)}>
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const menuItems = [
  { label: 'Home', screen: 'Home' },
  { label: 'Projects', screen: 'ContractorProjectOverview' },
  { label: 'Calendar', screen: 'Calendar' },
  { label: 'Message', screen: 'Message' },
  { label: 'Notifications', screen: 'Notifications' },
  { label: 'QuantoMall', screen: 'QuantoMall' },
  { label: 'Community', screen: 'Community' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  viewProfileButton: {
    backgroundColor: '#444',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  viewProfileButtonText: {
    color: '#fff',
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ContractorOptionScreen;
