import {View, Text, StyleSheet, Dimensions, Image, SafeAreaView, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';  
import { useNavigation } from '@react-navigation/native';


export default function GameScreen(){
    const navigation = useNavigation();

    const navigateToSearch = () => {
        navigation.navigate('Search');
    };
    return(
        <SafeAreaView>
            <View style={{marginTop:35}}>
            <ScrollView>
                <View style={styles.innercontent}>
                    <ImageBackground source={require('./images/cuttherope.jpg')} style={styles.bg}>
                        <Image source={require('./images/cut.png')} style={styles.cut}/>
                        <LinearGradient colors={['rgba(0,0,0,0)', '#000000']} style={styles.gradient}/>
                    </ImageBackground>

                    <View style={styles.row2}>
                        <Text style={styles.gamename}>Cut the Rope Daily</Text>
                        <View style={styles.content1}>
                            <Text style={styles.genre}>Physics-Based</Text>
                            <View style={styles.circle}></View>
                            <Text style={styles.genre}>Cute</Text>
                            <View style={styles.circle}></View>
                            <Text style={styles.genre}>Puzzle</Text>
                            <View style={styles.circle}></View>
                            <Text style={styles.genre}>Arcade</Text>
                        </View>
                    </View>

                    <View style={styles.row3}><Text style={styles.text6}>Game Based on TV Shows & Movies </Text></View>
                    <ScrollView horizontal={true} style={styles.scrollview}>
                        <View style={styles.row4}>
                            <Image source={require('./images/shadowandbone.png')} style={styles.game1}/>
                            <Image source={require('./images/loveisblind.png')} style={styles.game2}/>
                        </View>
                    </ScrollView>

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
            </ScrollView>
            <View style={styles.row1}>
                <Text style={styles.headname}>Games</Text>
                
                <TouchableOpacity onPress={navigateToSearch} style={styles.btn}>
                <Image source={require('./images/search.png')} style={styles.search}/>
                </TouchableOpacity>
            </View>
            </View> 
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
        marginTop:40,
    },
    row1:{
        width:360,
        height:55,
        backgroundColor: "#000000",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        position:"absolute", 
    },
    mainscroll:{
        height:"100%",
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
    headname:{
        fontSize:25,
        fontWeight:"bold",
        color:"#FFFFFF",
    },
    bg:{
        width:"100%",
        height:300,
        resizeMode:"contain",
        alignItems:"center",
    },
    cut:{
        width:120,
        height:120,
        marginTop:135,
        borderWidth:2,
        borderColor:"#000000",
        borderRadius:20,
    },
    gradient: {
        flex: 1,
        width: '100%',
    },
    gamename:{
        color:"#FFFFFF",
        fontSize:24,
        fontWeight:"bold",
    },

    row2:{
        alignItems:"center",
    },
    content1:{
        flexDirection:"row",
        gap:10,
        justifyContent:"center",
        alignItems:"center",
    },
    genre:{
        color:"#FFFFFF",
        fontSize:11,
    },
    circle: {
        width: 5,
        height: 5,
        borderRadius: 50,
        backgroundColor:"#707070", 
        
    },

    text6:{
        color:"#FFFFFF",
        fontWeight:"bold",
        fontSize:18,
        marginLeft:15,
    },
    row3:{
        alignItems:"flex-start",
        height:20,
        width:"100%",
        marginTop:30,
        marginBottom:10,
    },

    row4:{
        height:360,
        width:"100%",
        flexDirection:"row", 
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center",
    },
    game1:{
        width:380,
        height:400,
        resizeMode:"contain",
    },
    game2:{
        width:360,
        height:400,
        resizeMode:"contain",
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
        padding:10,
        marginBottom:10,
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
});