import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterBy } from '../slices/sortSlice';
import { categories } from '../data/FindProsCategories'; // Adjust the path as necessary


const FindProsCategory = ({ navigation }) => {
    const dispatch = useDispatch();
    const sortBy = useSelector((state) => state.sort.sortBy); // Assuming sortBy is stored in your Redux state
    const filterBy = useSelector((state) => state.sort.filterBy);


    const handleSortByClick = (subcategory) => {
        dispatch(setFilterBy(subcategory)); // Dispatch action to set filterBy to the subcategory
    };

    const category = categories.find(category => category.name === sortBy);

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
                    <Text style={styles.tagText}>{sortBy}</Text>
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
                <View style={styles.categories}>
                    {category && category.subcategories.map((subcategory, subIndex) => (
                        <Pressable
                            key={subIndex}
                            style={({ pressed }) => [
                                styles.categoryCard,
                                { opacity: pressed ? 0.5 : 1 }
                            ]}
                            onPress={() => {
                                navigation.navigate('FindProsListing', { subcategories: category.subcategories });
                                handleSortByClick(subcategory.name);
                            }}
                        >


                            <View style={styles.textContainer}>
                                <Text style={styles.categoryName}>{subcategory.name}</Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={{ uri: subcategory.image }}
                                    style={styles.categoryImage}
                                />
                            </View>
                        </Pressable>
                    ))}








                    {/*}
                    {categories.map((category, index) => (
                        <Pressable
                            key={index}
                            style={({ pressed }) => [
                                styles.categoryCard,
                                { opacity: pressed ? 0.5 : 1 }
                            ]}
                            onPress={() => {
                                navigation.navigate('FindProsCategory', { subcategories: category.subcategories });
                                handleSortByClick(category.name);
                            }}
                        >
                            <Image source={{ uri: category.image }} style={styles.categoryImage} />
                            <Text style={styles.categoryName}>{category.name}</Text>
                        </Pressable>
                    ))}*/}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
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
    categories: {
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

export default FindProsCategory;
