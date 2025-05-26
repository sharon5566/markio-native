import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView,
  Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CreateAdScreen = () => {
  const [form, setForm] = useState({
    productName: '',
    budget: '',
    startDate: '',
    endDate: '',
    targetLocation: '',
  });
  const [mediaUri, setMediaUri] = useState<string | null>(null);

  const handleMediaUpload = async () => {
    // Implement your media picker logic here
    // For example using expo-image-picker
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Create Ad</Text>

      {/* Media Upload Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Media Upload</Text>
        <TouchableOpacity 
          style={styles.uploadButton}
          onPress={handleMediaUpload}
        >
          {mediaUri ? (
            <Image 
              source={{ uri: mediaUri }}
              style={styles.mediaPreview}
            />
          ) : (
            <>
              <MaterialIcons name="cloud-upload" size={40} color="#6C63FF" />
              <Text style={styles.uploadText}>Upload image or video</Text>
              <Text style={styles.uploadSubtext}>Max size: 50MB</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* Product Details Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Product Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter product name"
          value={form.productName}
          onChangeText={(text) => setForm({...form, productName: text})}
        />

        <Text style={styles.sectionHeader}>Budget</Text>
        <View style={styles.currencyInput}>
          <Text style={styles.currencySymbol}>$</Text>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter budget amount"
            keyboardType="numeric"
            value={form.budget}
            onChangeText={(text) => setForm({...form, budget: text})}
          />
        </View>

        <Text style={styles.sectionHeader}>Duration</Text>
        <View style={styles.dateRow}>
          <TextInput
            style={[styles.input, styles.dateInput]}
            placeholder="Start date"
            value={form.startDate}
            onChangeText={(text) => setForm({...form, startDate: text})}
          />
          <Text style={styles.dateSeparator}>-</Text>
          <TextInput
            style={[styles.input, styles.dateInput]}
            placeholder="End date"
            value={form.endDate}
            onChangeText={(text) => setForm({...form, endDate: text})}
          />
        </View>

        <Text style={styles.sectionHeader}>Target Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter target location"
          value={form.targetLocation}
          onChangeText={(text) => setForm({...form, targetLocation: text})}
        />
      </View>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create Ad</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 25,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
  uploadButton: {
    height: 150,
    borderWidth: 2,
    borderColor: '#6C63FF',
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9ff',
  },
  mediaPreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  uploadText: {
    color: '#6C63FF',
    fontSize: 16,
    marginTop: 10,
  },
  uploadSubtext: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  currencyInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingLeft: 14,
    marginBottom: 15,
  },
  currencySymbol: {
    fontSize: 16,
    color: '#555',
    marginRight: 8,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dateInput: {
    flex: 1,
  },
  dateSeparator: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#555',
    alignSelf: 'center',
  },
  createButton: {
    backgroundColor: '#6C63FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CreateAdScreen;