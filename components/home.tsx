import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '@react-navigation/native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { colors } = useTheme();
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Sample data
  const campaignData = [
    { id: 1, name: 'Summer Sale', status: 'Active', daysLeft: 7, budgetUsed: 65 },
    { id: 2, name: 'New Product', status: 'Active', daysLeft: 14, budgetUsed: 42 },
    { id: 3, name: 'Holiday Promo', status: 'Active', daysLeft: 21, budgetUsed: 78 },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.appName, { color: colors.text }]}>AdManager</Text>
        <View style={styles.headerIcons}>
          <MaterialIcons name="notifications" size={24} color={colors.text} style={styles.icon} />
          <FontAwesome name="gear" size={24} color={colors.text} style={styles.icon} />
          <Text style={[styles.time, { color: colors.text }]}>9:42 AM</Text>
          <Ionicons name="wifi" size={20} color="#7E3DFF" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Campaign Overview */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Campaign Overview</Text>
          <Text style={[styles.dateText, { color: colors.text }]}>{currentDate}</Text>
          
          <View style={styles.cardContainer}>
            <View style={[styles.card, { backgroundColor: '#F2EAFA' }]}>
              <Text style={styles.cardTitle}>Active Campaigns</Text>
              <Text style={[styles.cardValue, { color: '#7E3DFF' }]}>12</Text>
            </View>
            
            <View style={[styles.card, { backgroundColor: '#F2EAFA' }]}>
              <Text style={styles.cardTitle}>Total Clicks</Text>
              <Text style={[styles.cardValue, { color: '#7E3DFF' }]}>8.4K</Text>
            </View>
          </View>
          
          <View style={styles.cardContainer}>
            <View style={[styles.card, { backgroundColor: '#F2EAFA' }]}>
              <Text style={styles.cardTitle}>Conversions</Text>
              <Text style={[styles.cardValue, { color: '#7E3DFF' }]}>1.2K</Text>
            </View>
            
            <View style={[styles.card, { backgroundColor: '#F2EAFA' }]}>
              <Text style={styles.cardTitle}>Budget Spent</Text>
              <Text style={[styles.cardValue, { color: '#7E3DFF' }]}>$8,240</Text>
            </View>
          </View>
        </View>

        {/* Recent Campaigns */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Campaigns</Text>
          {campaignData.map((campaign) => (
            <View key={campaign.id} style={[styles.campaignCard, { backgroundColor: '#F2EAFA' }]}>
              <View style={styles.campaignInfo}>
                <Text style={[styles.campaignName, { color: colors.text }]}>{campaign.name}</Text>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>{campaign.status}</Text>
                </View>
              </View>
              <Text style={[styles.daysLeft, { color: colors.text }]}>{campaign.daysLeft} days left</Text>
              <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { width: `${campaign.budgetUsed}%` }]} />
                <Text style={styles.progressText}>{campaign.budgetUsed}%</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Performance Metrics */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Campaign Performance</Text>
          <View style={[styles.chartPlaceholder, { backgroundColor: '#F2EAFA' }]}>
            <Text style={[styles.chartText, { color: '#7E3DFF' }]}>Performance Chart</Text>
          </View>
          <View style={styles.monthSelector}>
            {['April', 'May', 'June', 'July', 'August'].map((month) => (
              <TouchableOpacity key={month} style={[styles.monthButton, 
                month === 'July' && { backgroundColor: '#7E3DFF' }]}>
                <Text style={[styles.monthText, 
                  month === 'July' && { color: 'white' }]}>{month}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={[styles.bottomNav, { backgroundColor: 'white' }]}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={24} color="#7E3DFF" />
          <Text style={[styles.navText, { color: '#7E3DFF' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/create-ad')}>
          <MaterialIcons name="add-circle-outline" size={24} color="#9E9E9E" />
          <Text style={styles.navText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/campaigns')}>
          <MaterialIcons name="campaign" size={24} color="#9E9E9E" />
          <Text style={styles.navText}>Campaigns</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/profile')}>
          <MaterialIcons name="person-outline" size={24} color="#9E9E9E" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60, // Space for bottom nav
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  time: {
    marginLeft: 15,
    marginRight: 5,
    fontSize: 14,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    marginBottom: 15,
    opacity: 0.7,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    width: '48%',
    borderRadius: 12,
    padding: 15,
  },
  cardTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  campaignCard: {
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  campaignInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  campaignName: {
    fontSize: 16,
    fontWeight: '500',
  },
  statusBadge: {
    backgroundColor: '#7E3DFF',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
  },
  daysLeft: {
    fontSize: 14,
   