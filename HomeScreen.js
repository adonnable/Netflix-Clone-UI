import {View, Text, StyleSheet, Alert, Image, SafeAreaView,ScrollView, TouchableOpacity, ImageBackground, ToastAndroid} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';  

export default function HomeScreen({navigation}){
    const navigateToSearch = () => {
        navigation.navigate('Search');
    };

    const navigateToList = () => {
        navigation.navigate('List');
    };

    const showToast = () => {
        console.log("Toast is clicked...");
        ToastAndroid.show("You are now on the Movie Screen.", ToastAndroid.SHORT); 
      }

    const simpleAlert = () => {
        Alert.alert(
          'Confimartion',
          'Do you wish to proceed with playing the movie?',
          [
            {
                text: 'No',
                onPress: () => {
                  console.log('No Pressed');
                }
            },

            {
              text: 'Yes',         
              onPress: () => {
                navigation.navigate('Movie');
                showToast();
              }
            },         
          ]
        );
      };


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.mainscroll}>                
                <LinearGradient
                colors={['#000000', '#020C09', '#149B76', '#106074', '#0C1670', '#0B1353','#000000']}style={styles.linearGradient}>
                <ImageBackground source={require('./images/jurassic.png')} style={styles.jur_img}>
                    <View style={styles.content1}>
                        <Text style={styles.genre}>Adrenaline Rush</Text>
                        <View style={styles.circle}></View>
                        <Text style={styles.genre}>Explosive</Text>
                        <View style={styles.circle}></View>
                        <Text style={styles.genre}>Sci-fi Adventure</Text>
                    </View>
                    <View style={styles.content2}>
                        <TouchableOpacity style={styles.btnlist} onPress={simpleAlert}>
                            <View style={styles.box1}>
                                <Image source={require('./images/playbtn.png')} style={styles.icon}/>
                                <Text style={styles.iconName1}>Play</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.box2}>
                            <Image source={require('./images/plus.png')} style={styles.icon}/>
                            <Text style={styles.iconName2}>My List</Text>
                        </View>
                    </View>
                </ImageBackground>
            </LinearGradient>

            <View style={styles.innercontainer}>
            <View style={styles.rowheader}>
                        <Text style={styles.text3}>Mobile Games</Text>

                        <TouchableOpacity style={styles.btnlist} onPress={navigateToList}>
                            <Text style={styles.text3}> My List</Text>
                            <Image source={require('./images/sidev.png')} style={styles.sidev}/>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal={true} style={styles.scrollview}>
                    <View style={styles.game_row}>
                        <View>
                            <Image source={require('./images/rainbowsix.png')} style={styles.game}/>
                            <Text style={styles.text4}>Rainbow Six:</Text>
                            <Text style={styles.text4}>SMOL</Text>
                            <Text style={styles.text5}>Action</Text>
                        </View>

                        <View>
                            <Image source={require('./images/gta.png')} style={styles.game}/>
                            <Text style={styles.text4}>GTA: San</Text>
                            <Text style={styles.text4}>Andreas-The...</Text>
                            <Text style={styles.text5}>Action</Text>
                        </View>

                        <View>
                            <Image source={require('./images/pinball.png')} style={styles.game}/>
                            <Text style={styles.text4}>Pinball Masters</Text>
                            <Text style={styles.text4}>Arcade</Text>
                        </View>

                        <View>
                            <Image source={require('./images/spongee.png')} style={styles.game}/>
                            <Text style={styles.text4}>SpongeBob: Get</Text>
                            <Text style={styles.text4}>Cooking</Text>
                            <Text style={styles.text5}>Cooking</Text>
                        </View>

                        <View>
                            <Image source={require('./images/solitire.png')} style={styles.game}/>
                            <Text style={styles.text4}>Solitaire</Text>
                            <Text style={styles.text4}>TableTop</Text>
                        </View>
                    </View>
                    </ScrollView>   

                    <View style={styles.row5}><Text style={styles.text6}>Continue Watching for Donna</Text></View>
                    <ScrollView horizontal={true} style={styles.scrollview}>
                        <View style={styles.row6}>
                            <Image source={require('./images/sheldon.png')} style={styles.watch}/>
                            <Image source={require('./images/doctorslump.png')} style={styles.watch}/>
                            <Image source={require('./images/kungfu.png')} style={styles.watch}/>
                            <Image source={require('./images/transyvania.png')} style={styles.watch}/>
                            <Image source={require('./images/minions.png')} style={styles.watch}/>
                        </View>
                    </ScrollView>

                    <View style={styles.row5}><Text style={styles.text6}>TV Shows</Text></View>                 
                    <ScrollView horizontal={true} style={styles.scrollview}>
                        <View style={styles.row7}>
                            <Image source={require('./images/cantbuymelove.png')} style={styles.watch}/>
                            <Image source={require('./images/legendofkorra.png')} style={styles.watch}/>
                            <Image source={require('./images/killerparadox.png')} style={styles.watch}/>
                            <Image source={require('./images/troll.png')} style={styles.watch}/>
                            <Image source={require('./images/flash.png')} style={styles.watch}/>
                        </View>
                    </ScrollView>

                    <View style={styles.row5}><Text style={styles.text6}>New Releases</Text></View>
                    <ScrollView horizontal={true} style={styles.scrollview}>
                        <View style={styles.row8}>
                            <Image source={require('./images/lostcity.png')} style={styles.watch}/>
                            <Image source={require('./images/avatar.png')} style={styles.watch}/>
                            <Image source={require('./images/dumbledore.png')} style={styles.watch}/>
                            <Image source={require('./images/dune.png')} style={styles.watch}/>
                            <Image source={require('./images/gorilla.png')} style={styles.watch}/>
                        </View>
                    </ScrollView>

            </View>
            </ScrollView>
            
            <View style={styles.row1}>
            <Image source={require('./images/N.png')} style={styles.logo}/>
            <TouchableOpacity onPress={navigateToSearch} style={styles.btn}>
            <Image source={require('./images/search.png')} style={styles.search}/>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:35,
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
        width:30,
        height:30,
        resizeMode:"contain",
    },
    bg:{
        height:700,
        width:360,
    },
    linearGradient:{
        height: 500,
        width: "100%",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:55,
    },
    jur_img:{
        height:"100%",
        width:"100%",
        marginLeft:8,
        alignItems:"center",
        
    },
    innercontainer:{
        backgroundColor: "#000000",
        alignItems: "center",
        paddingRight:10,
        paddingLeft:10,
        gap:5,
        paddingTop:10,
    },
    content1:{
        flexDirection:"row",
        gap:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:325,
    },
    genre:{
        color:"#FFFFFF",
        fontSize:12,
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: 50,
        backgroundColor:"#707070", 
        
    },
    content2:{
        flexDirection:"row",
        gap:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:25,
    },
    box1:{
        backgroundColor:"#FFFFFF",
        height:43,
        width:130,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        gap:10,
    },
    box2:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        height:43,
        width:130,
        borderRadius:5,
        flexDirection:"row",
        gap:10,
        justifyContent:"center",
        alignItems:"center",
    },
    icon:{
        height:30,
        width:30,
        resizeMode:"contain",
    },
    iconName1:{
        fontSize:16,
        fontWeight:"bold",
    },
    iconName2:{
        fontSize:16,
        fontWeight:"bold",
        color:"#FFFFFF",
    },
    text3:{
        color:"#FFFFFF",
        fontWeight:"bold",
        fontSize:18,
        marginBottom:5,
        marginLeft:10,
    },
    game_row:{
        flexDirection:"row",
        gap:12,
    },
    game:{
        height:80,
        width:80,
        resizeMode:"contain",
        flexDirection:"row",
        gap:5,
    },
    text4:{
        color:"white",
        fontSize:11,
    },
    text5:{
        color:"white",
        fontSize:10,
    },
    gamerow:{
        padding:10,
       
    },
    plus:{
        height:20,
        width:20,
        resizeMode:"contain",
    },
    rowheader:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:30,
        width:"100%",
    },
    btnlist:{
        flexDirection:"row",
        gap:10,
        
    },
    sidev:{
        height:25,
        width:15,
        resizeMode:"contain",
    },
    mainscroll:{
        height:"100%",
    },

    text6:{
        color:"#FFFFFF",
        fontWeight:"bold",
        fontSize:18,
        marginLeft:15,
    },
    row5:{
        alignItems:"flex-start",
        height:20,
        width:"100%",
        marginTop:5,
    },
    row6:{
        height:150,
        width:"100%",
        gap:5,
        flexDirection:"row",
        marginTop:10,
    },
    watch:{
        height:150,
        resizeMode:"contain",
    },
    scrollview:{  
        flexGrow: 0,  
    },
    row7:{
        height:150,
        width:"100%",
        gap:10,
        flexDirection:"row", 
    },

    row8:{
        height:150,
        width:"100%",
        gap:10,
        flexDirection:"row", 
        marginBottom:10,
    },
    
});

