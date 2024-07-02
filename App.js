import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';

// Mengimpor gambar dari folder assets
import BruceImage from './assets/bruce.jpg';
import BobdylanImage from './assets/bobdylan.png';
import PaulImage from './assets/paul.png';

// Data teman dengan gambar dari assets
const friendsData = [
  { id: '1', name: 'Bruce Springstreen', description: 'Bruce Springsteen, dikenal luas sebagai "The Boss," adalah ikon musik rock Amerika yang telah menginspirasi banyak generasi melalui musiknya yang penuh energi dan lirik yang mendalam. Dia terkenal karena konsernya yang berdurasi lama dan penampilannya yang penuh semangat, serta kontribusinya yang signifikan terhadap musik rock.', image: BruceImage },
  { id: '2', name: 'Bob dylan', description: 'Bob Dylan adalah salah satu musisi dan penulis lagu paling berpengaruh dan revolusioner dalam sejarah musik. Dikenal karena liriknya yang puitis dan musiknya yang mencakup berbagai genre, Dylan telah membentuk dan menginspirasi budaya musik global selama lebih dari lima dekade.', image: BobdylanImage },
  { id: '3', name: 'paul mccartney', description: 'Paul McCartney adalah salah satu musisi paling berpengaruh dan sukses sepanjang masa, terkenal sebagai anggota The Beatles dan karir solonya yang luar biasa. McCartney dikenal karena bakat menulis lagunya yang tak tertandingi dan suaranya yang khas..', image: PaulImage },
];

export default function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const showDetails = (friend) => {
    setSelectedFriend(friend);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedFriend(null);
  };

  const renderFriendItem = ({ item }) => (
    <TouchableOpacity style={styles.friendItem} onPress={() => showDetails(item)}>
      <Image source={item.image} style={styles.friendImage} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.viewDetails}>View Details</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends List</Text>
      <FlatList
        data={friendsData}
        keyExtractor={(item) => item.id}
        renderItem={renderFriendItem}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalView}>
          {selectedFriend && (
            <>
              <Image source={selectedFriend.image} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedFriend.name}</Text>
              <Text style={styles.modalDescription}>{selectedFriend.description}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2c3e50',
  },
  viewDetails: {
    fontSize: 14,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#3498db',
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
