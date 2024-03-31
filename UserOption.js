import {View, Text, StyleSheet, Dimensions, Image, SafeAreaView, TouchableOpacity, ToastAndroid, Alert} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');
export default function UserOption({ navigation }){

    const showToast = () => {
        console.log("Toast is clicked...");
        ToastAndroid.show("You are now on the Tab Screens.", ToastAndroid.SHORT); 
      }

    const simpleAlert = () => {
        Alert.alert(
          'Confimartion',
          'Do you wish to continue as Donna?',
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
                navigation.navigate('Main');
                showToast();
              }
            },         
          ]
        );
      };

    return (        
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
            <View style={styles.editview}>
                <Image source={require('./images/edit.png')} style={styles.edit}/>
            
            </View>
                <Image source={require('./images/netflix.png')} style={styles.netflix}/>
            <View>

            </View>

            <View style={styles.table}>
                <View style={styles.row}>
                    <View style={[styles.cell, {flex:2}]}>
                        <Text style={styles.text}>Who's Watching?</Text>                   
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Image source={require('./images/Sponge Bob.jpg')} style={styles.profile}/>
                        <Text style={styles.name}>Sponge Bob</Text>   
                    </View>
                    <View style={styles.cell}>
                        <Image source={require('./images/Meilin Lee.jpg')} style={styles.profile}/>
                        <Text style={styles.name}>Meilin</Text>   
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Image source={require('./images/otin.png')} style={styles.profile}/>
                        <Text style={styles.name}>Nitro</Text>   
                    </View>
                    <View style={styles.cell}>
                        <Image source={require('./images/shrekie.jpg')} style={styles.profile}/>
                        <Text style={styles.name}>Shrekie</Text>   
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.cell}>
                        <TouchableOpacity  onPress={simpleAlert} style={styles.btn}>
                            <Image source={require('./images/girl.jpg')} style={styles.profile}/>
                            <Text style={styles.name}>Donna</Text>   
                        </TouchableOpacity>
                                  
                    </View>
                    <View style={styles.cell}>
                        
                    </View>
                </View>
            </View> 
            </View>       
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
    },
    content:{
        backgroundColor: "#000000",
        width:"100%",
        flex:1,
        marginTop:35,
        alignItems:"center",
        paddingTop:20,
    },
    text: {
      fontSize: 14,
      marginBottom: 15,
      color:"#FFFFFF",
    },
    table:{    
        width:290,
      
    },
    row:{
        flexDirection:"row",
    },
    cell:{
        flex:1,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    },
    callText:{
        textAlign:"center",
    },
    netflix:{
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginBottom:5,
    },
    profile:{
        width:110,
        height:110,
        resizeMode:"contain",
        borderRadius:5,
    },
    name:{
        color:"#FFFFFF",
        marginTop:5,
        marginBottom:5,
        fontSize:14,
    },
    edit:{
        width:25,
        height:25,
        resizeMode:"contain",
        marginTop:35,
    },
    editview:{
        position:"absolute",
        right:30,
        top:30,
    },
    btn:{
        alignItems:"center",
    },
});

