import {View, Text, StyleSheet, Image, SafeAreaView,ScrollView, TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function NewHotScreen() {
    const navigation = useNavigation();

    const navigateToSearch = () => {
        navigation.navigate('Search');
    };

    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.outer_box}>
                <View style={styles.row1}>
                    <Image source={require('./images/N.png')} style={styles.logo}/>
                    <TouchableOpacity onPress={navigateToSearch} style={styles.btn}>
                        <Image source={require('./images/search.png')} style={styles.search}/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.mainscroll}>
                    <View style={styles.content}>
                    <ScrollView horizontal={true} style={styles.scrollview}>
                <View style={styles.row2}>
                        <View style={styles.c1}>
                        <Image source={require('./images/fire.png')} style={styles.r2icon1}/>
                        <Text style={styles.text1}>Everyone's Watching</Text>
                        </View>

                        <View style={styles.c2}>
                        <Image source={require('./images/popcorn.png')} style={styles.r2icon2}/>
                        <Text style={styles.text2}>Coming Soon</Text>
                        </View>

                        <View style={styles.c3}>
                        <Image source={require('./images/top10.png')} style={styles.r2icon2}/>
                        <Text style={styles.text2}>Top 10 Movies</Text>
                        </View>    

                        <View style={styles.c4}>
                        <Image source={require('./images/top10.png')} style={styles.r2icon2}/>
                        <Text style={styles.text2}>Top 10 TV Shows</Text>
                        </View>    
      
                </View>
                </ScrollView>
                    
                    <View style={styles.row3}>
                        <Image source={require('./images/p_avatar.png')} style={{width:"100%",height:"45%",}}/>
                        <View style={{flexDirection:"row", height:"30%",alignItems:"center",padding:5, justifyContent:"space-between"}}>
                            <Image source={require('./images/avatar-title.png')} style={{width:170,height:50,resizeMode:"contain"}}/>
                            <View style={{justifyContent:"center", alignItems:"center",padding:5, width:50,}}>
                                <Image source={require('./images/plus.png')} style={{width:20,height:20,resizeMode:"contain"}}/>
                                <Text style={{color:"#FFFFFF", fontSize:12,}}>My List</Text>
                            </View>
                            <View style={{justifyContent:"center", alignItems:"center",padding:5, width:50,}}>
                                <Image source={require('./images/Polygon.png')} style={{width:20,height:20, resizeMode:"contain"}}/>
                                <Text style={{color:"#FFFFFF", fontSize:12,}}>Play</Text>
                            </View>  
                        </View>
                        <Text style={{color:"#FFFFFF", width:"99%", paddingRight:10,paddingLeft:10,paddingBottom:10,textAlign:"justify"}}>In this exciting action-adventure series, a young boy with special powers set out to save the world.</Text>
                    </View>

                    <View style={styles.row4}>
                        
                        <Text style={styles.text3}>Mobile Games</Text>
                        
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
                    </View>  

                    <View style={styles.row3}>
                    <Image source={require('./images/p_dslump.png')} style={{width:"100%",height:"45%",}}/>
                        <View style={{flexDirection:"row", height:"20%",alignItems:"center",padding:5, justifyContent:"space-between"}}>
                            <Image source={require('./images/docslump_title.png')} style={{width:170,height:50,resizeMode:"contain"}}/>
                            <View style={{justifyContent:"center", alignItems:"center",padding:5, width:50,}}>
                                <Image source={require('./images/plus.png')} style={{width:20,height:20,resizeMode:"contain"}}/>
                                <Text style={{color:"#FFFFFF", fontSize:12,}}>My List</Text>
                            </View>
                            <View style={{justifyContent:"center", alignItems:"center",padding:5, width:50,}}>
                                <Image source={require('./images/Polygon.png')} style={{width:20,height:20, resizeMode:"contain"}}/>
                                <Text style={{color:"#FFFFFF", fontSize:12,}}>Play</Text>
                            </View>  
                        </View>
                        <Text style={{fontWeight:"bold", color:"#FFFFFF", fontSize:16, paddingLeft:10, paddingRight:10,marginBottom:5}}>New Episode Coming Sunday</Text>
                        <Text style={{color:"#FFFFFF", width:"99%", paddingRight:10,paddingLeft:10,paddingBottom:10,textAlign:"justify"}}>Park Shin-hye ("Sisyphus: The Myth") stars as a  burnt-out anesthesiologist who unexpectedly relies on her high school rival in her journey to recovery.</Text>
                    </View>

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

                    </View>
                </ScrollView>        
            </View>  
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop:30,
        
    },  
    outer_box:{
        alignItems:"center",
        gap:15,
        backgroundColor:"#000000",
        paddingRight:10,
        paddingLeft:10,
        marginTop:5,
    },
    content:{
        alignItems:"center",
        gap:10,
        
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
    row1:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:340,
        marginTop:10,
    },
    row2:{
        width:"100%",
        height:35,
        flexDirection:"row",
        gap:10,
        
    },
    c1:{
        width:150,
        height:35,
        flexDirection:"row",
        gap:5,
        backgroundColor:"#FFFFFF",
        borderRadius:60,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    },
    text1: {
        fontSize: 11,
        fontWeight: "bold",
        color:"#000000",
    },
    r2icon1:{
        width:20,
        height:20,
        resizeMode:"contain",
    },
    c2:{
        width:120,
        height:35,
        flexDirection:"row",
        gap:5,
        borderColor:"#FFFFFF",
        borderWidth:1,
        borderRadius:60,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    },
    text2: {
        fontSize: 11,
        fontWeight: "bold",
        color:"#FFFFFF",
    },
    r2icon2:{
        width:15,
        height:15,
        resizeMode:"contain",
    },
    c3:{
        width:120,
        height:35,
        flexDirection:"row",
        gap:5,
        borderColor:"#FFFFFF",
        borderWidth:1,
        borderRadius:60,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    },
    c4:{
        width:135,
        height:35,
        flexDirection:"row",
        gap:5,
        borderColor:"#FFFFFF",
        borderWidth:1,
        borderRadius:60,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    },
    scrollview:{  
        flexGrow: 0,  
    },
    row3:{
        width:310,
        height:300,
        borderWidth:1,
        borderColor:"#707070",
        borderRadius:10,
        overflow:"hidden",
    },
    row4:{
        width:340,
        height:160,
        padding:5,
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
        width:"100%",
    },
    row6:{
        height:150,
        width:"100%",
        marginBottom:10,
        paddingLeft:10,
        gap:5,
        flexDirection:"row",
    },
    watch:{
        height:150,
        resizeMode:"contain",
    },
});