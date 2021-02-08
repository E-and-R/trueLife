import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

export default function SermonItem(props){

    const {image,link, speaker, time, title} = props.sermon
    
    return(
        <View style={styles.Container} >
            <TouchableOpacity style={styles.Button} >
                <Image style={styles.sermonArt} source={image} />
                <View style={styles.sermonDetails}>
                    <Text style={styles.sermonTitle}>
                        {title}
                    </Text>
                    <View style={styles.speakerTime}>
                        <Text style={styles.speaker}>
                            {speaker}
                        </Text>
                        <Text style={styles.separator}>
                            •
                        </Text>
                        <Text style={styles.speaker}>
                            {time}
                        </Text>
                       
                    </View>
                    
                </View>
            </TouchableOpacity>
            <FontAwesome style={styles.menu} name="ellipsis-v" size={24} color="black" />
        </View>
    )
}