import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    Container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', 
      width: '100%',
      marginTop:'10px', 
    },
    Button:{
      display: 'flex',
      flexDirection: 'row',
     
      width: '95%'
    },
    sermonArt:{
      width: '20%',
      height: '50px',
      
      marginLeft: '10px',
    },
    sermonDetails:{
     width: '80%',
      marginLeft: '5px',
    },
    sermonTitle:{
      fontSize:'20px',
      fontWeight:'600',
    },
    speaker:{

    },
    speakerTime:{
      flexDirection: 'row',
      
       
    },
    separator:{
      marginLeft: '15px',
      marginRight: '15px',
      //trying to create space between speaker and time
    },
    menu:{
     width: '5%',
     
    },
})

export default styles;