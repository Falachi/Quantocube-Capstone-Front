import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setSortBy } from '../slices/sortSlice';
import { categories } from '../data/FindProsCategories'; // Adjust the path as necessary

const FindPros = ({ navigation }) => {
    const dispatch = useDispatch();
    const sortBy = useSelector((state) => state.sort.sortBy);

    const handleSortByClick = (category) => {
        dispatch(setSortBy(category)); // Dispatch action to set sortBy to the category
    };

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
                        console.log('Search button pressed!');
                        // Add search functionality
                    }}
                >
                    <Ionicons name="search" size={24} color="#FE5823" />
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.featured}>
                    <Text style={styles.sectionTitle}>Featured Contractor</Text>
                    <View style={styles.contractors}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.contractorCard,
                                { opacity: pressed ? 0.5 : 1 }
                            ]}
                            onPress={() => {
                                navigation.navigate('FindProsCategory');
                                console.log('Featured contractor card pressed!');
                                console.log('Featured contractor card pressed2');
                            }}
                        >
                            <Image source={{ uri: 'path/to/your/image1.jpg' }} style={styles.contractorImage} />
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
                                console.log('Featured contractor card pressed!');
                            }}
                        >
                            <Image source={{ uri: 'path/to/your/image2.jpg' }} style={styles.contractorImage} />
                            <Text style={styles.contractorName}>Joyce Leong</Text>
                            <Text style={styles.contractorDetails}>Ad · 8.2 km · ⭐ 5.0</Text>
                            <Pressable style={({ pressed }) => [
                                styles.button,
                                { opacity: pressed ? 0.5 : 1 }
                            ]}>
                                <Text style={styles.buttonText}>Read more</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.category}>
                    <Text style={styles.sectionTitle}>Category</Text>
                    <View style={styles.categories}>
                        {categories.map((category, index) => (
                            <Pressable
                                key={index}
                                style={({ pressed }) => [
                                    styles.categoryCard,
                                    { opacity: pressed ? 0.5 : 1 }
                                ]}
                                onPress={() => {
                                    navigation.navigate('FindProsCategory', { categories: category.subcategories });
                                    handleSortByClick(category.name);
                                }}
                            >
                                <View style={styles.textContainer}>
                                    <Text style={styles.categoryName}>{category.name}</Text>
                                </View>
                                <View style={styles.imageContainer}>
                                    <Image source={{ uri: category.image }} style={styles.categoryImage} />
                                </View>
                            </Pressable>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: '#FE5823',
        borderRadius: 24,
        aspectRatio: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: '#333',
        zIndex: 1,
        borderBottomLeftRadius: 30,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollContainer: {
        paddingTop: 16,
    },
    featured: {
        padding: 16,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contractors: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    searchButton: {
        padding: 8,
    },
});

export default FindPros;
