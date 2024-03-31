import React from 'react';
import { View, Text, StyleSheet, Button,SafeAreaView, Image,ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
    const navigation = useNavigation(); 

    const navigateBack = () => {
        navigation.goBack('Search');
      };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innercontent}>
            <TouchableOpacity onPress={navigateBack} style={styles.btn}>
                <Image source={require('./images/back.png')} style={styles.back}/>
            </TouchableOpacity>

            <View style={styles.bar}>
            <Image source={require('./images/searchgrey.png')} style={styles.icon}/>
            <Text style={styles.text1}> Search games, shows, movies... </Text>
            <Image source={require('./images/mic.png')} style={styles.icon}/>
            </View>

            <ScrollView>
            <View style={styles.content}>
            <Text style={styles.text2}>Recommended Mobile Games</Text>
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
            <Text style={styles.text3}>Recommended TV Shows & Movies</Text> 
            </View>
                
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
    innercontent:{
        backgroundColor:"#000000",
        paddingTop:20,
    },
    bar:{
        width:360,
        height:45,
        backgroundColor:"#262626",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingLeft:5,
        paddingRight:5,
    },
    back:{
        height:25,
        resizeMode:"contain",
        marginLeft:10,
        marginBottom:10,
    },
    icon:{
        height:30,
        resizeMode:"contain",
    },
    text1:{
        color:"#707070",
        fontSize:15,
    },
    content:{
        paddingLeft:10,
        paddingRight:10,
        gap:10,
        marginTop:5,
    },
    text2:{
        color:"#FFFFFF",
        fontSize:15,
        fontWeight:"bold",
    },
    text3:{
        color:"#FFFFFF",
        fontSize:15,
        fontWeight:"bold",
        marginTop:10,
    },
    scrollview:{  
        flexGrow: 0,  
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
    recom:{
        paddingRight:10,
        paddingLeft:10,
    },
});