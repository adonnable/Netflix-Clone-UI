import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MovieInfoScreen() {
    const navigation = useNavigation();
    
    const navigateBack = () => {
        navigation.goBack('Search');
      };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.row1}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                    <TouchableOpacity onPress={navigateBack} style={styles.btn}>
                        <Image source={require('./images/back.png')} style={styles.back}/>
                    </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={styles.mainscroll}>
                    <Image source={require('./images/jurrasicbg.jpg')} style={styles.bg} />
                    <View style={styles.content}>
                        <Text style={{color:"#FFFFFF", fontWeight:"bold", fontSize:30,}}>Jurassic World: Fallen Kingdom</Text>
                        <View style={{flexDirection:"row", gap:10,marginTop:5, aligItems:"center"}}>
                            <Text style={styles.text1}>2018</Text>
                            <Text style={styles.text1}>13+</Text>
                            <Text style={styles.text1}>2h 8m</Text>
                            <Image source={require('./images/i_hd.png')} style={{width:20,height:20}}/>
                            <Image source={require('./images/i_ad.png')} style={{width:20,height:20}}/>
                            <Image source={require('./images/i_comment.png')} style={{width:20,height:20}}/>
                        </View>

                        <View style={{backgroundColor:"#FFFFFF", width:"100%", height:60, marginTop:10,borderRadius:5,flexDirection:"row", justifyContent:"center", alignItems:"center", gap:10,}}>
                            <Image source={require('./images/playbtn.png')} style={{width:35,height:35,resizeMode:"contain"}}/>
                            <Text style={{fontSize:22, fontWeight:"bold"}}>Play</Text>
                        </View>
                        <View style={{backgroundColor:"#393939", width:"100%", height:60, marginTop:10,borderRadius:5,flexDirection:"row", justifyContent:"center", alignItems:"center", gap:10,}}>
                            <Image source={require('./images/dl.png')} style={{width:35,height:35,resizeMode:"contain"}}/>
                            <Text style={{fontSize:22, fontWeight:"bold", color:"#FFFFFF"}}>Download</Text>
                        </View>

                        <Text style={styles.text2}>As a volcanic eruption threatens Isla Nublar, Owen and Claire race to find sanctuary for the park's dinosaurs - and become pawns in a nefarious scheme.</Text>
                        <Text style={styles.text3}>Starring: Chris Pratt, Bryce Dallas Howard, Rafe Spall...more Director: J.A. Bayona</Text>
                   
                        <View style={{flexDirection:"row",justifyContent:"space-around", marginTop:30,}}>
                            <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Image source={require('./images/plus.png')} style={{width:35,height:35,resizeMode:"contain"}}/>
                            <Text style={{color:"#FFFFFF", fontSize:10,}}>My List</Text>
                            </View>

                            <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Image source={require('./images/like.png')} style={{width:35,height:35,resizeMode:"contain"}}/>
                            <Text style={{color:"#FFFFFF", fontSize:10,}}>Rate</Text>
                            </View>

                            <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Image source={require('./images/Share.png')} style={{width:35,height:35,resizeMode:"contain"}}/>
                            <Text style={{color:"#FFFFFF", fontSize:10,}}>Share</Text>
                            </View>
                        </View>

                        <View style={{width:"100%", height:3, backgroundColor:"#707070", marginTop:15,}}></View>
                        <View style={styles.content2}>
                            <View style={{width:"40%", height:4, backgroundColor:"#F9060E"}}></View>
                            <View style={{flexDirection:"row", gap:55,marginLeft:25}}>
                                <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"bold"}}>Collection</Text>
                                <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"bold"}}>More Like This</Text>
                            </View>
                            
                            <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center", marginTop:20,}}>
                                <Image source={require('./images/dino1.png')} style={{width:95,height:140, borderRadius:5,}}/>
                                <Image source={require('./images/dino2.png')} style={{width:95,height:140, borderRadius:5,}}/>
                                <Image source={require('./images/dino3.png')} style={{width:95,height:140, borderRadius:5,}}/>
                            </View>

                            <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center", marginTop:10,}}>
                                <Image source={require('./images/dino4.png')} style={{width:95,height:140, borderRadius:5,}}/>
                                <Image source={require('./images/dino5.png')} style={{width:95,height:140, borderRadius:5,}}/>
                                <Image source={require('./images/dino6.png')} style={{width:95,height:140, borderRadius:5,}}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
    },
    wrapper: {
        flex: 1,
    },
    row1: {
        width: 360,
        height: 55,
        backgroundColor: "#000000",
        padding: 10,
    },
    mainscroll: {
        backgroundColor: "#000000",
    },
    bg: {
        height:220,
        width: "100%",
        resizeMode:"stretch",
    },
    content:{
        padding:13,
    },
    text1:{
        color:"#707070",
        fontSize:14,
    },
    text2:{
        color:"#FFFFFF",marginTop:10,
    },
    text3:{
        color:"#707070",
        fontSize:12,
        marginTop:5,
    },
    content2:{
        paddingLeft:15,
        paddingRight:15,
    }
});
