import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TextInput, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeownerHomePage = () => {
  const navigation = useNavigation();
  const profilePic = require("../assets/images/HomeownerPage/martinypfp.jpg")
  const quickAccessMascot = require("../assets/images/HomeownerPage/homeowner_mag.png")
  const quickAccessMascot2 = require("../assets/images/HomeownerPage/homeowner_game.png")
  const icon = require("../assets/images/HomeownerPage/icon.png")
  const icon2 = require("../assets/images/HomeownerPage/icon2.png")
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContents}>
          <Text style={styles.headerDate}>MONDAY 22, MAY</Text>
          <Text style={styles.headerName}>Hello, Martiny.</Text>
        </View>
        <View style={styles.profilePictureContainer}>
          <Image style={styles.profilePicture} source={profilePic}/>
        </View>
      </View>
      <View style={styles.quickAccessButtonContainer}>
        <TouchableOpacity style={styles.quickAccessButton}>
          <View style={styles.quickAccessTextContainer}>
            <Text style={styles.quickAccessTitle}>Find Pros</Text>
          </View>
          <View style={styles.quickAccessImageContainer}>
           <Image style={styles.quickAccessImage} source={quickAccessMascot} />
          </View>          
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAccessButton}>
          <View style={styles.quickAccessTextContainer}>
            <Text style={styles.quickAccessTitle}>Coming Soon!</Text>
          </View>
          <View style={styles.quickAccessImageContainer}>
           <Image style={styles.quickAccessImage} source={quickAccessMascot2} />
          </View>          
        </TouchableOpacity>
        </View>
        <Pressable onPress={() => navigation.navigate("HomeownerProjectOverview")} style={{paddingTop: 60}}>
          <Text style={styles.sectionTitle}>Ongoing Project</Text>
        </Pressable>
        <View style={styles.ongoingProjectContainer}>
          <View style={styles.ongoingProjectIcon}>
            <Image style={styles.ongoingProjectIconImage} source={icon} />
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.projectID}>Project #9876</Text>
            <Text style={styles.projectTitle}>Quoted</Text>
            <Text style={styles.projectDetails}>22 Jun • Jackson Hon</Text>
          </View>
        </View>
        <View style={styles.ongoingProjectContainer}>
          <View style={styles.ongoingProjectIcon}>
            <Image style={styles.ongoingProjectIconImage} source={icon2} />
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.projectID}>Project #9876</Text>
            <Text style={styles.projectTitle}>In Progress</Text>
            <Text style={styles.projectDetails}>22 Jun • Jackson Hon</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Featured Contractors</Text>
        <View style={styles.contractors}>
        <Pressable
            style={({ pressed }) => [
              styles.contractorCard,
              { opacity: pressed ? 0.5 : 1 }
            ]}
            onPress={() => {
              navigation.navigate('ContractorProfileScreen');
            }}
          >
            <Image source={{ uri: '../assets/images/findpros/contractorpfp/1.jpeg' }} style={styles.contractorImage} />
            <Text style={styles.contractorName}>Jackson Hon</Text>
            <Text style={styles.contractorDetails}>Ad · 8.2 km · ⭐ 4.6</Text>
            <Pressable style={({ pressed }) => [
              styles.button,
              { opacity: pressed ? 0.5 : 1 }
            ]}>
              <Text style={styles.buttonText}>Read more</Text>
            </Pressable>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.contractorCard,
              { opacity: pressed ? 0.5 : 1 }
            ]}
            onPress={() => {
              navigation.navigate('ContractorProfileScreen');
            }}
          >
            <Image source={{ uri: '../assets/images/findpros/contractorpfp/2.jpeg' }} style={styles.contractorImage} />
            <Text style={styles.contractorName}>Susan Bo</Text>
            <Text style={styles.contractorDetails}>Ad · 10 km · ⭐ 4.1</Text>
            <Pressable style={({ pressed }) => [
              styles.button,
              { opacity: pressed ? 0.5 : 1 }
            ]}>
              <Text style={styles.buttonText}>Read more</Text>
            </Pressable>
          </Pressable>
        </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070707',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#1B1B1B',
    flex: 1,
    verticalAlign: 'middle',
    flexDirection: 'row',
    padding: 20,
    paddingVertical: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 40,
  },
  headerContents: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
  },
  headerDate: {
    color: '#8F9193',
    alignContent:'flex-start',
    fontWeight: '600',
    fontSize: 13,
    verticalAlign: 'middle'
  },
  headerName: {
    color: 'white',
    alignContent: 'flex-start',
    fontWeight: '700',
    fontSize: 25,
    paddingTop: 5,
  },
  profilePictureContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  quickAccessButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    paddingTop: 40,
  },
  quickAccessButton: {
    flexDirection: 'column',
    backgroundColor: '#1B1B1B',
    padding: 5,
    aspectRatio: 1,
    borderRadius: 8,
    paddingBottom: 0,
    width: '48%',
    marginHorizontal: 5,
    minHeight: 168,
  },
  quickAccessTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  quickAccessImage: {
    flex: 1,
    alignItems: 'flex-end',
    aspectRatio: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  quickAccessTextContainer: {
    margin: 10,
  },
  quickAccessImageContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 22,
    color: 'white',
    padding: 20,
    paddingTop: 60,
  },
  ongoingProjectContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderRadius: 15,
    backgroundColor: '#1B1B1B',
    alignItems:'center',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  ongoingProjectIcon: {
    width: 74,
    height: 74,
    overflow: 'hidden',
    borderRadius: 10,
  },
  ongoingProjectIconImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  textGroup: {
    flexDirection: 'column',
    paddingHorizontal: 5,
    flex: 1,
  },
  projectID: {
    fontWeight: '500',
    fontSize: 10,
    color: '#C7C7C7',
  },
  projectTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  projectDetails: {
    color: '#C7C7C7',
    fontWeight: '500',
    fontSize: 11,
  },
  contractors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  contractorCard: {
      backgroundColor: '#2a2a2a',
      borderRadius: 8,
      padding: 10,
      width: '48%',
  },
  contractorImage: {
      height: 100,
      borderRadius: 8,
  },
  contractorName: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
  },
  contractorDetails: {
      color: 'white',
      fontSize: 14,
      marginTop: 5,
  },
  button: {
      backgroundColor: '#FE5823',
      borderRadius: 8,
      paddingVertical: 5,
      marginTop: 10,
  },
  buttonText: {
      color: 'white',
      textAlign: 'center',
  },
});

// return (
//   <ScrollView style={styles.container}>
//     <View style={styles.header}>
//       <Text style={styles.date}>THURSDAY, 30 MAY</Text>
//       <Text style={styles.greeting}>Hello, Matiny.</Text>
//       <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profileImage} />
//     </View>
//     <View style={styles.searchContainer}>
//       <TouchableOpacity style={styles.searchIcon}>
//         <Text style={styles.searchText}>Search</Text>
//       </TouchableOpacity>
//     </View>
//     <View style={styles.cardContainer}>
//       <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('FindPros')}>
//         <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.cardImage} />
//         <Text style={styles.cardTitle}>Find Pros</Text>
//       </TouchableOpacity>
//       <View style={styles.card}>
//         <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.cardImage} />
//         <Text style={styles.cardTitle}>QuantoMall</Text>
//       </View>
//     </View>
//     <Text style={styles.sectionTitle}>Ongoing Project</Text>
//     <TouchableOpacity style={styles.projectCard} onPress={() => navigation.navigate('HomeownerProjectOverview')}>
//       <Text style={styles.projectTitle}>Project #8676</Text>
//       <Text style={styles.projectStatus}>Quoted</Text>
//       <Text style={styles.projectDate}>22 Jun - Jackson Hon</Text>
//     </TouchableOpacity>
//     <Text style={styles.sectionTitle}>Featured Contractor</Text>
//     <View style={styles.contractorContainer}>
//       <View style={styles.contractorCard}>
//         <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.contractorImage} />
//         <Text style={styles.contractorName}>Jackson Hon</Text>
//         <Text style={styles.contractorRating}>4.8</Text>
//       </View>
//       <View style={styles.contractorCard}>
//         <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.contractorImage} />
//         <Text style={styles.contractorName}>Joyce Leong</Text>
//         <Text style={styles.contractorRating}>5.0</Text>
//       </View>
//     </View>
//     <Text style={styles.sectionTitle}>Service Category</Text>
//     <View style={styles.serviceContainer}>
//       <View style={styles.serviceCard}>
//         <Text style={styles.serviceTitle}>Renovations</Text>
//       </View>
//       <View style={styles.serviceCard}>
//         <Text style={styles.serviceTitle}>Installations</Text>
//       </View>
//       <View style={styles.serviceCard}>
//         <Text style={styles.serviceTitle}>Electrical</Text>
//       </View>
//     </View>
//     <Text style={styles.sectionTitle}>QuantoMall Delight</Text>
//     <View style={styles.mallContainer}>
//       <View style={styles.mallCard}>
//         <Text style={styles.mallTitle}>Tapestry Counter Stool</Text>
//         <Text style={styles.mallPrice}>MYR 182.00</Text>
//       </View>
//       <View style={styles.mallCard}>
//         <Text style={styles.mallTitle}>Sotena Bean Bag Chair</Text>
//         <Text style={styles.mallPrice}>MYR 232.00</Text>
//       </View>
//     </View>
//     <Text style={styles.sectionTitle}>Join The List</Text>
//     <TextInput style={styles.emailInput} placeholder="yourname@example.com" placeholderTextColor="#999" />
//     <Text style={styles.sectionTitle}>Inspiration</Text>
//     <View style={styles.inspirationContainer}>
//       <View style={styles.inspirationCard}>
//         <Text style={styles.inspirationTitle}>Modern Luxury Dining Concept</Text>
//         <Text style={styles.inspirationAuthor}>Hida Zayn</Text>
//       </View>
//       <View style={styles.inspirationCard}>
//         <Text style={styles.inspirationTitle}>Milky Aesthetic Ins Style</Text>
//         <Text style={styles.inspirationAuthor}>Jackson Hon</Text>
//       </View>
//     </View>
//   </ScrollView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//   },
//   date: {
//     color: '#999',
//   },
//   greeting: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   searchIcon: {
//     backgroundColor: '#333',
//     padding: 8,
//     borderRadius: 8,
//   },
//   searchText: {
//     color: '#fff',
//   },
//   cardContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 16,
//   },
//   card: {
//     backgroundColor: '#222',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   cardImage: {
//     width: 60,
//     height: 60,
//   },
//   cardTitle: {
//     color: '#fff',
//     marginTop: 8,
//   },
//   sectionTitle: {
//     color: '#fff',
//     fontSize: 18,
//     padding: 16,
//   },
//   projectCard: {
//     backgroundColor: '#222',
//     padding: 16,
//     borderRadius: 8,
//     marginHorizontal: 16,
//     marginBottom: 16,
//   },
//   projectTitle: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   projectStatus: {
//     color: '#fe5823',
//     fontSize: 16,
//     marginTop: 4,
//   },
//   projectDate: {
//     color: '#999',
//     marginTop: 4,
//   },
//   contractorContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 16,
//   },
//   contractorCard: {
//     backgroundColor: '#222',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   contractorImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   contractorName: {
//     color: '#fff',
//     marginTop: 8,
//   },
//   contractorRating: {
//     color: '#fe5823',
//     marginTop: 4,
//   },
//   serviceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 16,
//   },
//   serviceCard: {
//     backgroundColor: '#222',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   serviceTitle: {
//     color: '#fff',
//   },
//   mallContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 16,
//   },
//   mallCard: {
//     backgroundColor: '#222',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   mallTitle: {
//     color: '#fff',
//   },
//   mallPrice: {
//     color: '#fe5823',
//     marginTop: 4,
//   },
//   emailInput: {
//     backgroundColor: '#222',
//     padding: 16,
//     borderRadius: 8,
//     margin: 16,
//     color: '#fff',
//   },
//   inspirationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 16,
//   },
//   inspirationCard: {
//     backgroundColor: '#222',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   inspirationTitle: {
//     color: '#fff',
//   },
//   inspirationAuthor: {
//     color: '#999',
//     marginTop: 4,
//   },
// });

export default HomeownerHomePage;
  