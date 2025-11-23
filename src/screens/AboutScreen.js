import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="information-circle" size={80} color="tomato" />
        <Text style={styles.appName}>My App</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Welcome to My App! This is a React Native Expo application demonstrating 
          modern mobile app development with navigation, authentication, and 
          beautiful user interfaces.
        </Text>

        <View style={styles.featureList}>
          <Text style={styles.featureTitle}>Features:</Text>
          <Text style={styles.featureItem}>• Modern UI/UX Design</Text>
          <Text style={styles.featureItem}>• Secure Authentication</Text>
          <Text style={styles.featureItem}>• Smooth Navigation</Text>
          <Text style={styles.featureItem}>• Cross-Platform Compatibility</Text>
        </View>

        <View style={styles.contactInfo}>
          <Text style={styles.contactTitle}>Contact Information</Text>
          <Text style={styles.contactText}>Email: support@myapp.com</Text>
          <Text style={styles.contactText}>Phone: +1 (555) 123-4567</Text>
          <Text style={styles.contactText}>Website: www.myapp.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 40,
    marginBottom: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  version: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
  },
  featureList: {
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    marginLeft: 10,
  },
  contactInfo: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});
