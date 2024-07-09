import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import jsondata from '../data/FindProsCategories.json'; // Adjust the path as needed

const FindProsCategory = ({ navigation }) => {
    const sortBy = useSelector((state) => state.sort.sortBy); // Assuming sortBy is stored in your Redux state

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
                    {jsondata.categories.map((category, index) => (
                        <View key={index}>
                            {/* Render subcategories based on sortBy */}
                            {jsondata.submap((subcategory, subIndex) => (
                                <Pressable
                                    key={subIndex}
                                    style={({ pressed }) => [
                                        styles.categoryCard,
                                        { opacity: pressed ? 0.5 : 1 }
                                    ]}
                                    onPress={() => {
                                        // Handle subcategory press
                                    }}
                                >
                                    <Image
                                        source={{ uri: subcategory.image }}
                                        style={styles.categoryImage}
                                    />
                                    <Text style={styles.categoryName}>{subcategory.name}</Text>
                                </Pressable>
                            ))}
                        </View>
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
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#333',
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
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryCard: {
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        padding: 10,
        width: '48%',
        marginBottom: 10,
        alignItems: 'center',
    },
    categoryImage: {
        height: 50,
        width: 50,
        borderRadius: 8,
    },
    categoryName: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
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
