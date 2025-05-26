import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AdPreviewScreen = () => {
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [aiAssistantEnabled, setAiAssistantEnabled] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Ad Preview</Text>

      {/* Media Preview Box */}
      <View style={styles.mediaBox}>
        {/* Replace with your actual media preview */}
        <View style={styles.mediaPlaceholder}>
          <Text style={styles.mediaText}>Your Ad Creative Will Appear Here</Text>
        </View>
        
        {/* Timer in bottom right corner */}
        <View style={styles.timerBadge}>
          <Text style={styles.timerText}>0:30</Text>
        </View>
      </View>

      {/* Timer Section */}
      <TouchableOpacity 
        style={styles.listItem}
        onPress={() => setTimerEnabled(!timerEnabled)}
      >
        <MaterialIcons 
          name={timerEnabled ? "check-box" : "check-box-outline-blank"} 
          size={24} 
          color={timerEnabled ? "#6C63FF" : "#ccc"} 
        />
        <Text style={styles.listText}>0:30</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      {/* AI Assistant Section */}
      <TouchableOpacity 
        style={styles.listItem}
        onPress={() => setAiAssistantEnabled(!aiAssistantEnabled)}
      >
        <MaterialIcons 
          name={aiAssistantEnabled ? "check-box" : "check-box-outline-blank"} 
          size={24} 
          color={aiAssistantEnabled ? "#6C63FF" : "#ccc"} 
        />
        <Text style={styles.listText}>AI-Powered Marketing Assistant</Text>
      </TouchableOpacity>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          Transform your marketing strategy with our advanced AI tools. Create, optimize, and analyze campaigns effortlessly.
        </Text>
        
        <TouchableOpacity style={styles.learnMore}>
          <Text style={styles.learnMoreText}>Learn More</Text>
          <MaterialIcons name="arrow-forward" size={16} color="#6C63FF" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* Action Buttons */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Ad</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.publishButton}>
        <Text style={styles.publishButtonText}>Confirm & Publish</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  mediaBox: {
    height: 200,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  mediaPlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  mediaText: {
    color: '#888',
    fontSize: 16,
  },
  timerBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  timerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  listText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  descriptionBox: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 20,
    marginVertical: 15,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  learnMore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  learnMoreText: {
    color: '#6C63FF',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  editButton: {
    borderWidth: 1,
    borderColor: '#6C63FF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginVertical: 10,
  },
  editButtonText: {
    color: '#6C63FF',
    fontSize: 16,
    fontWeight: '600',
  },
  publishButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginVertical: 10,
  },
  publishButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AdPreviewScreen;