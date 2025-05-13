import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const ageGroups = [
    { age: '2-3 Years', color: '#E8F3FF' },
    { age: '3-4 Years', color: '#FFFFFF' },
    { age: '4-5 Years', color: '#FFFFFF' },
  ];

  const timelineOptions = [
    { months: '3 Months', active: true },
    { months: '6 Months', active: false },
    { months: '9 Months', active: false },
    { months: '12 Months', active: false },
  ];


  const handleLocation = () => {
    navigation.navigate('Location');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.greeting}>Good Evening</Text>
          <Text style={styles.date}>Tuesday, May 12, 2025</Text>
        </View>
        <TouchableOpacity style={styles.expertButton}>
          <Text style={styles.expertButtonText}>Talk to Expert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.location} onPress={handleLocation}>
         <Ionicons name="location" size={18} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Choose Age Group</Text>
      <View style={styles.ageGroupContainer}>
        {ageGroups.map((item, index) => (
          <TouchableOpacity 
            key={index}
            style={[styles.ageGroupCard, { backgroundColor: item.color }]}
          >
            <Ionicons name = "football" size={20}/>
            <Text style={styles.ageGroupText}>{item.age}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Development Timeline</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.timelineContainer}>
        {timelineOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timelineButton,
              item.active && styles.timelineButtonActive
            ]}
          >
            <Text style={[
              styles.timelineText,
              item.active && styles.timelineTextActive
            ]}>{item.months}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.developmentCards}>
        <View style={styles.card}>
          <MaterialCommunityIcons name="book-open-page-variant" size={24} color="#3B82F6" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Learning Goals</Text>
            <Text style={styles.cardDescription}>Uses 50+ words and begins forming simple sentences</Text>
          </View>
        </View>

        <View style={styles.card}>
          <FontAwesome5 name="puzzle-piece" size={24} color="#8B5CF6" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Problem Solving</Text>
            <Text style={styles.cardDescription}>Completes simple puzzles with assistance</Text>
          </View>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons name="account-group" size={24} color="#10B981" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Social Skills</Text>
            <Text style={styles.cardDescription}>Shows interest in playing alongside other children</Text>
          </View>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons name="heart" size={24} color="#EF4444" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Emotional Growth</Text>
            <Text style={styles.cardDescription}>Expresses basic emotions and recognizes others' feelings</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 14,
    fontWeight: '600',
  },
  date: {
    fontSize: 10,
    color: '#666',
  },
  expertButton: {
    backgroundColor: '#F3F0FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  location: {
   width:25,
   height:25,
   borderRadius:8,
justifyContent:'center',
    
  },
  expertButtonText: {
    color: '#7C3AED',
    fontSize: 14,
  },
  locationtext: {
    color: '#7C3AED',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  ageGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  ageGroupCard: {
    width: '30%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  ageGroupText: {
    fontSize: 13,
    fontWeight: '500',
  },
  timelineContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  timelineButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  timelineButtonActive: {
    backgroundColor: '#7C3AED',
  },
  timelineText: {
    color: '#666',
  },
  timelineTextActive: {
    color: '#fff',
  },
  developmentCards: {
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  cardContent: {
    marginLeft: 16,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
