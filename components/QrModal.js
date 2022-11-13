import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import QrCodeComponent from "./QrCodeComponent";
import AppText from "./AppText";

const ModalComponent = (props) => {
  const [modalVisible, setModalVisible] = useState(props.open);
  const close = () => {
    props.closeModal();
    setModalVisible(false)
  }
    useEffect(() => {
        setModalVisible(props.open)
    }, [props.open])
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => close()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => close()}
                >
                <Icon name="close" size={50} color="#2196F3" />
            </Pressable>
            <AppText style={styles.modalText}>{props.modalText}</AppText>
            <View>
                <QrCodeComponent content={props.modalText} size={300} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    position: "absolute",
    top: 5 ,
    right: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 17 
  }
});

export default ModalComponent;