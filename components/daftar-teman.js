import React, { useState } from 'react';
import { View, Text, FlatList, Button, Modal, StyleSheet } from 'react-native';

// Data teman
const friendsData = [
  { id: '1', name: 'Alice', description: 'Alice is a software developer.' },
  { id: '2', name: 'Bob', description: 'Bob is a graphic designer.' },
  { id: '3', name: 'Charlie', description: 'Charlie is a project manager.' },
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
    <View style={styles.friendItem}>
      <Text style={styles.friendName}>{item.name}</Text>
      <Button title="View Details" onPress={() => showDetails(item)} />
    </View>
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
          <Text style={styles.modalTitle}>{selectedFriend?.name}</Text>
          <Text style={styles.modalDescription}>{selectedFriend?.description}</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  friendItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  friendName: {
    fontSize: 18,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
});
