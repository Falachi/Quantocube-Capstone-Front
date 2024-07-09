// ContractorProjectOverview.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const projectData = [
  { id: '1', status: 'New Request', date: '22 Jan', person: 'Matiny Ong', color: '#FF6B35', screen: 'NewRequestScreen' },
  { id: '2', status: 'Request Accepted', date: '22 Jan', person: 'Matiny Ong', color: '#FF6B35', screen: 'RequestAcceptedScreen' },
  { id: '3', status: 'Request Declined', date: '22 Jan', person: 'Matiny Ong', color: '#FF6B35', screen: 'RequestDeclinedScreen' },
  { id: '4', status: 'Draft Quotation', date: '22 Jan', person: 'Matiny Ong', color: '#F7B32B', screen: 'DraftQuotationScreen' },
  { id: '5', status: 'Quotation Sent', date: '22 Jan', person: 'Matiny Ong', color: '#F7B32B', screen: 'QuotationSentScreen' },
  { id: '6', status: 'Negotiate Request', date: '22 Jan', person: 'Matiny Ong', color: '#F7B32B', screen: 'NegotiateRequestScreen' },
  { id: '7', status: 'Quotation Updated', date: '22 Jan', person: 'Matiny Ong', color: '#F7B32B', screen: 'QuotationUpdatedScreen' },
  { id: '8', status: 'Quotation Expired', date: '22 Jan', person: 'Matiny Ong', color: '#F7B32B', screen: 'QuotationExpiredScreen' },
  { id: '9', status: 'Project Confirmation', date: '22 Jan', person: 'Matiny Ong', color: '#A1C349', screen: 'ProjectConfirmationScreen' },
  { id: '10', status: 'In Progress', date: '22 Jan', person: 'Matiny Ong', color: '#A1C349', screen: 'InProgressScreen' },
  { id: '11', status: 'Project Completed', date: '22 Jan', person: 'Matiny Ong', color: '#A1C349', screen: 'ProjectCompletedScreen' },
  { id: '12', status: 'Project Closed', date: '22 Jan', person: 'Matiny Ong', color: '#212529', screen: 'ProjectClosedScreen' },
];

const ContractorProjectOverview = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={[styles.itemContainer, { backgroundColor: item.color }]}>
      <View style={styles.textContainer}>
        <Text style={styles.status}>{item.status}</Text>
        <Text style={styles.details}>{item.date} - {item.person}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Project</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchText}>🔍</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={projectData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 24,
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  searchButton: {
    padding: 10,
  },
  searchText: {
    color: '#fff',
    fontSize: 24,
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  textContainer: {
    flex: 1,
  },
  status: {
    color: '#fff',
    fontSize: 16,
  },
  details: {
    color: '#fff',
    marginTop: 4,
    fontSize: 14,
  },
});

export default ContractorProjectOverview;
