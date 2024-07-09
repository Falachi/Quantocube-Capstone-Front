import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { listings } from '../data/FindProsListings.json'; // Adjust the path as necessary

const FindProsListing = ({ navigation }) => {
    const dispatch = useDispatch();
    const filterBy = useSelector((state) => state.sort.filterBy); // Assuming sortBy is stored in your Redux state

    const filteredListings = listings.filter(listing => listing.services.includes(filterBy));

    return (
        <View style={styles.container}>
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
                <Text style={styles.headerTitle}>Find Pros</Text>
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

            <View style={styles.filterContainer}>
                <Pressable
                    style={({ pressed }) => [
                        styles.filterButton,
                        { opacity: pressed ? 0.5 : 1 }
                    ]}
                    onPress={() => {
                        // Handle filter button press
                    }}
                >
                    <Ionicons name="settings-outline" size={24} color="white" />
                </Pressable>
                <View style={styles.tagContainer}>
                    <Text style={styles.tagText}>{filterBy}</Text>
                    <Pressable
                        style={({ pressed }) => [
                            styles.removeTagButton,
                            { opacity: pressed ? 0.5 : 1 }
                        ]}
                        onPress={() => {
                            // Handle remove tag button press
                        }}
                    >
                        <Ionicons name="close-circle" size={20} color="white" />
                    </Pressable>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {filteredListings.map((listing, index) => (
                    <View key={index} style={styles.listingcard}>
                        <View style={styles.listingimageContainer}>
                            <Image
                                source={{ uri: listing.images[0] }} // Replace with actual image link
                                style={styles.listingbackgroundImage}
                            />

                        </View>
                        <View style={styles.listingdetailsContainer}>
                            <Image
                                source={{ uri: listing.profileimage }} // Replace with actual profile image link
                                style={styles.listingprofileImage}
                            />
                            <View style={styles.listingtextContainer}>
                                <Text style={styles.listingname}>{listing.name}</Text>
                                <Text style={styles.listingdetails}>Ad • {listing.distance} km • {listing.rating} ⭐</Text>
                            </View>
                            <Pressable style={styles.listingbutton}
                                onPress={() => {
                                    navigation.navigate('ContractorProfileScreen');
                                }}>
                                <MaterialIcons name="arrow-forward" size={24} color="black" />
                            </Pressable>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    listingcard: {
        backgroundColor: 'black',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    listingimageContainer: {
        height: 200,
        position: 'relative',
    },
    listingbackgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    // listingcategoryLabel: {
    //     position: 'absolute',
    //     top: 10,
    //     left: 10,
    //     backgroundColor: 'rgba(255, 255, 255, 0.7)',
    //     paddingVertical: 5,
    //     paddingHorizontal: 10,
    //     borderRadius: 5,
    //     fontSize: 14,
    //     fontWeight: 'bold',
    // },
    listingdetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    listingprofileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    listingtextContainer: {
        flex: 1,
    },
    listingname: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    listingdetails: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
    },
    listingbutton: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10,
    },


    imageContainer: {
        //aspectRatio: 1,
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        //width: '50%',
    },
    categoryImage: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        aspectRatio: 1,
        //width: "100%",
        //height: "100%",
        resizeMode: 'cover',
    },
    textContainer: {
        width: "100%",
        //flex: 1,
        //justifyContent: 'flex-start',
        //position: relative,
        //right: 0,
        //float: left,
        margin: 10,
    },
    categoryCard: {
        backgroundColor: '#2a2a2a',
        flexDirection: 'column',
        //justifyContent: 'space-between',
        //padding: 10,
        width: '48%',
        aspectRatio: 1,
        //height: '48%',
        //minimumHeight: "48%",
        marginBottom: 10,
        borderRadius: 8,
    },
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#1b1b1b',
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 5,
    },
    filterButton: {
        backgroundColor: '#444',
        padding: 8,
        borderRadius: 8,
        marginRight: 10,
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#444',
        padding: 8,
        borderRadius: 8,
    },
    tagText: {
        color: 'white',
        fontSize: 14,
    },
    removeTagButton: {
        marginLeft: 5,
    },
    scrollContainer: {
        padding: 16,
    },
    contractorCard: {
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        padding: 10,
        width: '48%',
    },
    category: {
        padding: 16,
    },
    listings: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    backButton: {
        backgroundColor: '#FE5823',
        borderRadius: 24,
        padding: 8,
    },
    searchButton: {
        padding: 8,
    },
});

export default FindProsListing;
