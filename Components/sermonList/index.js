import React, { Component, useEffect, useState } from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import SermonItem from '../sermonItem';
import styles from './styles';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { ActivityIndicator } from 'react-native';

export default function SermonList(){
    const [loading, setloading] = useState(true);
    const [sermons,setSermons] = useState([]);

    useEffect(() =>{
        const db = firebase.firestore();
        const sermon = db.collection('Sermons').get().then((querySnapshot)=>
        {
            const sermons = []; 
            querySnapshot.forEach((doc) =>{
                sermons.push(doc.data());
            
        });
        setSermons(sermons);
        setloading(false);
    }).catch(error => {console.error(error)});
    return() => sermon();
    }, []);
    if (loading) {
        return <ActivityIndicator />;
      }

    return(
        <View style={styles.container}>
             <FlatList
                data={sermons}
                renderItem={({item}) =>(
                    <SermonItem sermon={item}/>
                )}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
       
    )
}
