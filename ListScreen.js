import React from 'react';
import { View, Text, StyleSheet, Button,SafeAreaView, Image,ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function ListScreen() {
    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.goBack('Home');
      };
    const navigateToListGame = () => {
        navigation.navigate('ListGame');
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row1}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingTop:15,paddingLeft:10, paddingRight:10, paddingBottom:15,}}>
                        <View style={{flexDirection:"row", justifyContent:"flex-start", gap:20, alignItems:"center"}}>
                        <TouchableOpacity onPress={navigateBack} style={styles.btn}>
                            <Image source={require('./images/back.png')} style={styles.back}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:24, fontWeight:"bold", color:"#FFFFFF"}}>My List</Text>
                        </View>
                        <Image source={require('./images/edit.png')} style={{width:32, height:32, resizeMode:"contain"}}/>
                    </View>
                    <View style={{width:"100%",height:2,backgroundColor:"#707070"}}></View>
                    <View style={{width:"65%",height:4,backgroundColor:"#F9060E"}}></View>
                    <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                        <Text style={{color:"#FFFFFF", fontSize:19, fontWeight:"bold", marginTop:5}}> TV Shows & Movies</Text>
                        <TouchableOpacity style={styles.btn} onPress={navigateToListGame}>
                            <Text style={{color:"#707070", fontSize:19, fontWeight:"bold", marginTop:5}}> Games</Text>
                        </TouchableOpacity>
                        
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

                                    <View style={styles.c3}>
                                    <Text style={styles.text1}>TV Shows</Text>
                                    </View>

                                    <View style={styles.c4}>
                                    <Text style={styles.text1}>Movies</Text>
                                    </View>    
                                </View>
                            </ScrollView>  

                            <Text style={{color:"#707070", marginTop:10}}>Sort by</Text>
                            <Text style={{color:"#FFFFFF", marginTop:10, fontSize:20, fontWeight:"bold"}}>Suggested</Text>
                            
                            <View style={styles.recom}>
                                <View style={styles.movierow}>
                                    <Image source={require('./images/pokemon.png')} style={styles.movie}/>
                                    <View>
                                    <Text style={styles.text6}>PokemonJourneys: The Series</Text>
                                    </View>
                                    <Image source={require('./images/play.png')} style={styles.play}/>
                                </View>

                                <View style={styles.movierow}>
                                    <Image source={require('./images/brooklyn.png')} style={styles.movie}/>
                                    <Text style={styles.text6}>Brooklyn: Nine-Nine</Text>
                                    <Image source={require('./images/play.png')} style={styles.play}/>
                                </View>

                                <View style={styles.movierow}>
                                    <Image source={require('./images/allofusaredead.png')} style={styles.movie}/>
                                    <Text style={styles.text6}>All of Us Are Dead</Text>
                                    <Image source={require('./images/play.png')} style={styles.play}/>
                                </View>

                                <View style={styles.movierow}>
                                    <Image source={require('./images/korra.png')} style={styles.movie}/>
                                    <Text style={styles.text6}>The Legend of Korra</Text>
                                    <Image source={require('./images/play.png')} style={styles.play}/>
                                </View>

                                <View style={styles.movierow}>
                                    <Image source={require('./images/blacklist.png')} style={styles.movie}/>
                                    <Text style={styles.text6}>The Blacklist</Text>
                                    <Image source={require('./images/play.png')} style={styles.play}/>
                                </View>

                                <View style={styles.movierow}>
                                    <Image source={require('./images/moneyheist.png')} style={styles.movie}/>
                                    <Text style={styles.text6}>Money Heist</Text>
                                    <Image source={require('./images/play.png')} style={styles.play}/>
                                </View>

                                <View style={styles.movierow}>
                                    <Image source={require('./images/seckim.png')} style={styles.movie}/>
                                    <Text style={styles.text6}>What's Wrong with Secretary Kim</Text>
                                    <Image source={require('./images/play.png')} style={styles.play}/>
                                </View>

                                <View style={styles.movierow}>
                                    <Image source={require('./images/penthouse.png')} style={styles.movie}/>
                                    <Text style={styles.text6}>The Penthouse: War in Life</Text>
                                    <Image source={require('./images/play.png')} style={styles.play}/>
                                </View>

                                <View style={styles.movierow}>
                                    <Image source={require('./images/blinders.png')} style={styles.movie}/>
                                    <Text style={styles.text6}>Peaky Blinders</Text>
                                    <Image source={require('./images/play.png')} style={styles.play}/>
                                </View>

                                <View style={styles.movierow}>
                                    <Image source={require('./images/goodtobetrue.png')} style={styles.movie}/>
                                    <Text style={styles.text6}>2 Good 2 Be True</Text>
                                    <Image source={require('./images/play.png')} style={styles.play}/>
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
    c3:{
        width:100,
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
    c4:{
        width:90,
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
    recom:{
        paddingRight:10,
        paddingLeft:10,
        marginTop:5,
    },
    movierow:{
        flexDirection:"row",
        gap:10,
        alignItems:"center",
    },
    movie:{
        width:130,
        resizeMode:"contain",
    },
    play:{
        width:50,
        resizeMode:"contain",
    },
    text6:{
        color:"#FFFFFF",
        fontSize:14,
        fontWeight:"bold",
        width:145,
    },
});