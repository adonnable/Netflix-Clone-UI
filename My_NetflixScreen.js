import {View, Text, StyleSheet, ToastAndroid, Image, SafeAreaView,TouchableOpacity, Modal,Alert,  TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function My_NetflixScreen(){
    const navigation = useNavigation();

    const navigateToSearch = () => {
        navigation.navigate('Search');
    };

    const navigateToList = () => {
        navigation.navigate('List');
    };

    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    const showToast = () => {
        console.log("Toast is clicked...");
        ToastAndroid.show("Signed out succesfully", ToastAndroid.SHORT); 
      }

    const handleSignOut = () => {
        setModalVisible(false); 
       
        Alert.alert(
            'Sign Out',
            "Signing out of this app means you'll also sign out of all other Netflix apps on this device.",
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Sign Out',
                    onPress: () => {
                        navigation.navigate("Intro");
                        showToast();
                    },
                },
            ],
            { cancelable: false }
        );
    };
    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.innercontent}>
            <View style={styles.row2}>
                <Image source={require('./images/girl.jpg')} style={styles.girl}/>
                <View style={styles.profinfo}>
                    <Text style={styles.name}>Donna</Text>
                    <Image source={require('./images/sidev.png')} style={styles.down}/>
                </View>
            </View>

            <View>
                <View style={styles.row3}>
                    <View style={{flexDirection:"row", gap:30, alignItems:"center"}}>
                        <Image source={require('./images/notification.png')} style={styles.circle}/>
                        <Text style={styles.iconname}>Notification</Text>
                    </View>
                    <Image source={require('./images/sidev.png')}/>
                </View>
                <View style={styles.row3}>
                    <View style={{flexDirection:"row", gap:30, alignItems:"center"}}>
                        <Image source={require('./images/download.png')} style={styles.circle}/>
                        <Text style={styles.iconname}>Downloads</Text>
                    </View>
                    <Image source={require('./images/sidev.png')}/>
                </View> 
            </View>

            <View style={styles.row4}><Text style={styles.text1}>TV Shows & Movies You've Liked</Text></View>
            <ScrollView horizontal={true} style={styles.scrollview}>
                <View style={styles.row6}>
                    <Image source={require('./images/sh_shelly.png')} style={styles.watch}/>
                    <Image source={require('./images/sh_doc.png')} style={styles.watch}/>
                    <Image source={require('./images/sh_panda.png')} style={styles.watch}/>
                    <Image source={require('./images/sh_transy.png')} style={styles.watch}/>
                    <Image source={require('./images/sh_minion.png')} style={styles.watch}/>
                </View>
            </ScrollView>

            <View style={styles.row8}>
                <Text style={styles.text1}>My List</Text>
                <TouchableOpacity onPress={navigateToList}>
                            <Image source={require('./images/sidev.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={styles.scrollview}>
                <View style={styles.row5}>
                    <Image source={require('./images/lostcity.png')} style={styles.watch}/>
                    <Image source={require('./images/avatar.png')} style={styles.watch}/>
                    <Image source={require('./images/dumbledore.png')} style={styles.watch}/>
                    <Image source={require('./images/dune.png')} style={styles.watch}/>
                    <Image source={require('./images/gorilla.png')} style={styles.watch}/>
                </View>
            </ScrollView>

            <View style={styles.row4}><Text style={styles.text1}>Trailers You've Watched</Text></View>
            <ScrollView horizontal={true} style={styles.scrollview}>
                <View style={styles.row5}>
                    <Image source={require('./images/cantbuymelove.png')} style={styles.watch}/>
                    <Image source={require('./images/legendofkorra.png')} style={styles.watch}/>
                    <Image source={require('./images/killerparadox.png')} style={styles.watch}/>
                    <Image source={require('./images/troll.png')} style={styles.watch}/>
                    <Image source={require('./images/flash.png')} style={styles.watch}/>
                </View>
            </ScrollView>

            <View style={styles.row4}><Text style={styles.text1}>Recently Watched</Text></View>
            <ScrollView horizontal={true} style={styles.scrollview}>
                <View style={styles.row7}>
                    <Image source={require('./images/ep5.png')} style={styles.watch}/>
                    <Image source={require('./images/ep4.png')} style={styles.watch}/>
                    <Image source={require('./images/ep3.png')} style={styles.watch}/>
                    <Image source={require('./images/ep2.png')} style={styles.watch}/>
                </View>
            </ScrollView>

            </View>
            </ScrollView>

            <View style={styles.row1}>
                <Text style={styles.headname}>My Netflix</Text>
                <View style={styles.icons}>
                    
                    <TouchableOpacity onPress={navigateToSearch} style={styles.btn}>
                    <Image source={require('./images/search.png')} style={styles.search}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePress}>
                        <Image source={require('./images/menubar.png')} style={styles.menu}/>
                    </TouchableOpacity>
                    
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <TouchableOpacity
                    style={styles.modalContainer}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                >
                <TouchableWithoutFeedback>
                    <View style={styles.modalContent}>
                        <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                                <Image source={require('./images/edit.png')} style={{width:30,height:30,resizeMode:"contain"}} />
                                <Text style={styles.signOutButton}>Manage Profiles</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                                <Image source={require('./images/i_settings.png')} style={{width:30,height:30,resizeMode:"contain"}} />
                                <Text style={styles.signOutButton}>App Settings</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                                <Image source={require('./images/i_account.png')} style={{width:30,height:30,resizeMode:"contain"}} />
                                <Text style={styles.signOutButton}>Account</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                                <Image source={require('./images/i_help.png')} style={{width:30,height:30,resizeMode:"contain"}} />
                                <Text style={styles.signOutButton}>Help</Text>
                        </View>

                        <TouchableOpacity onPress={handleSignOut}>
                            <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                                <Image source={require('./images/i_logout.png')} style={{width:30,height:30,resizeMode:"contain"}} />
                                <Text style={styles.signOutButton}>Sign Out</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
            </Modal>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:35,
    },
    innercontent:{
        backgroundColor:"#000000",
        paddingTop:30,
    },
    row1:{
        width:360,
        height:55,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        position:"absolute",
        marginTop:35,
    },
    logo:{
        width:35,
        height:35,
        resizeMode:"contain",
    },
    search:{
        width:35,
        height:35,
        resizeMode:"contain",
    },
    menu:{
        width:30,
        height:30,
        resizeMode:"contain",
        marginTop:2,
    },
    headname:{
        fontSize:25,
        fontWeight:"bold",
        color:"#FFFFFF",
    },
    icons: {
        flexDirection:"row",
        gap:20,
    },
    girl:{
        width:130,
        height:130,
        resizeMode:"contain",
        borderRadius:10,
    },
    row2:{
        width:"100%",
        height:240,
        justifyContent:"center",
        alignItems:"center",
        paddingTop:55,
        
    },
    down:{
        transform:[{rotate:'90deg'}],
        height:25,
        width:25,
        marginTop:5,
        resizeMode:"contain",
    },
    profinfo:{
        flexDirection:"row",
        gap:10,
    },
    name:{
        color:"#FFFFFF",
        fontSize:22,
        fontWeight:"bold",
    },
    circle:{
        height:50,
        width:50,
        resizeMode:"contain",
    },
    row3:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        alignItems:"center",
    },
    iconname:{
        color:"#FFFFFF",
        fontSize:20,
        fontWeight:"bold",
    },
    text1:{
        color:"#FFFFFF",
        fontWeight:"bold",
        fontSize:18,
        marginLeft:15,
    },
    row4:{
        alignItems:"flex-start",
        height:20,
        width:"100%",
        marginTop:10,
    },
    
    row5:{
        height:150,
        width:"100%",
        gap:10,
        flexDirection:"row", 
        padding:10,
    },

    row6:{
        height:180,
        width:"100%",
        gap:10,
        flexDirection:"row", 
        padding:10,
    },

    row7:{
        height:180,
        width:"100%",
        flexDirection:"row", 
        paddingTop:10,
        marginBottom:5,
    },
    watch:{
        resizeMode:"contain",
    },

    row8:{
        alignItems:"flex-start",
        height:20,
        width:"100%",
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:10,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection:"column",
        justifyContent:"flex-end",
    },
    modalContent: {
        backgroundColor: '#262626',
        padding: 10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        elevation: 5,
        width:"100%",
        height:"35%",
        flexDirection:"column",
        justifyContent:"flex-end",
    },
    signOutButton: {
        textAlign: 'left',
        color: '#FFFFFF',
        padding:10,
        fontSize:18,
    },
    closeButton: {
        textAlign: "right",
        color: '#000000',
        fontWeight: 'bold',
        
    },
});