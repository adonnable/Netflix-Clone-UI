import React from 'react';
import { View, Text, StyleSheet, Button,SafeAreaView, Image,ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ListGameScreen() {
    const navigation = useNavigation();
    navigation.navigate('ListGame');

    const navigateBack = () => {
        navigation.goBack('Home');
      };

    const navigateToList = () => {
        navigation.navigate('List');
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row1}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingTop:15,paddingLeft:10, paddingRight:10, paddingBottom:15,}}>
                        <View style={{flexDirection:"row", justifyContent:"flex-start", gap:20, alignItems:"center"}}>
                        <TouchableOpacity onPress={navigateBack} style={styles.btn}>
                            <Image source={require('./images/back.png')} style={styles.back}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:24, fontWeight:"bold", color:"#FFFFFF"}}>Games</Text>
                        </View>
                        <Image source={require('./images/edit.png')} style={{width:32, height:32, resizeMode:"contain"}}/>
                    </View>
                    <View style={{width:"100%",height:2,backgroundColor:"#707070"}}></View>
                    <View style={{justifyContent:"flex-end", flexDirection:"row"}}>
                        <View style={{width:"35%",height:4,backgroundColor:"#F9060E", }}></View>
                    </View>
       
                    <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                        <TouchableOpacity style={styles.btn} onPress={navigateToList}>
                            <Text style={{color:"#707070", fontSize:19, fontWeight:"bold", marginTop:5}}> TV Shows & Movies</Text>
                        </TouchableOpacity>
                        <Text style={{color:"#FFFFFF", fontSize:19, fontWeight:"bold", marginTop:5}}> Games</Text>
                    </View>
               
                    
                    <ScrollView style={styles.mainscroll}>
                        <View style={styles.content}>
                            <ScrollView horizontal={true} style={styles.scrollview}>
                                <View style={styles.row2}>
                                    <View style={styles.c1}>
                                    <Text style={styles.text1}>Haven't Started</Text>
                                    </View>

                                    <View style={styles.c2}>
                                    <Text style={styles.text1}>Started</Text>
                                    </View>
                                </View>
                            </ScrollView>  

                            <View style={{ width:"100%", height:570,justifyContent:"center", alignItems:"center"}}>
                                <Text style={{color:"#FFFFFF", fontSize:30, fontWeight:"bold", marginBottom:15,}}>Nothing here...yet</Text>
                                <Text style={{color:"#707070", width:"65%", fontSize:12, textAlign:"center"}}>Add games to your list to keep track of what you want to play next.</Text>
                            
                                <TouchableOpacity style={styles.btn}>
                                    <View style={{backgroundColor:"#FFFFFF", width:180, height:50, borderRadius:5,justifyContent:"center",alignItems:"center",marginTop:150}}>
                                        <Text style={{fontWeight:"bold", fontSize:20,}}>Browse Games</Text>
                                    </View>
                                </TouchableOpacity>
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
        paddingTop:35,
        gap:10,
    },
    row1:{
        width:360,
        height:100,
        backgroundColor: "#000000",
        flex: 1,
    },
    mainscroll:{
        marginTop:10,
        paddingLeft:5,
        paddingRight:5,
    },

    row2:{
        width:"100%",
        height:40,
        flexDirection:"row",
        gap:10,
    },
    c1:{
        width:120,
        height:40,
        flexDirection:"row",
        gap:5,
        borderWidth:1,
        borderColor:"#707070",
        borderRadius:60,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    },
    c2:{
        width:110,
        height:40,
        flexDirection:"row",
        gap:5,
        borderWidth:1,
        borderColor:"#707070",
        borderRadius:60,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    },
    text1:{
        color:"#707070",
    },
});