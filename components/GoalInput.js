import { useState } from 'react';
import { View, StyleSheet, TextInput, Button,Modal, Image} from 'react-native';

function GoalInput(props){
    const [enteredText,setEnteredText]=useState();

    function updateEnteredText(enteredText){
        setEnteredText(enteredText);
      }   
      
    function updateCourseGoalList(){
        props.updateGoalsList(enteredText);
        setEnteredText('');
    }

    return(
    <Modal animationType='slide' visible={props.visible}>
    <View style={styles.inputContainer}>
        <Image style={styles.image} 
        source={require('../assets/images/goal.png')}
        />
            <TextInput style={styles.textInput} placeholder='your goal' onChangeText={updateEnteredText} value={enteredText}/>
            <View style={styles.buttonConatiner}>
                <View style={styles.button}>
                    <Button title='add goal' onPress={updateCourseGoalList} color='#b180f0' />
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.stopModal} color='#e051b4'/>
                </View>
            </View>
     </View>
     </Modal>
    )
}

export default GoalInput;

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#060f24',
        padding:16,
      },
      textInput:{
        width:'100%',
        borderWidth:1,
        padding:8,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'black',
        borderRadius:6
      },
      buttonConatiner:{
        flexDirection:'row',
        marginTop:16,
      },
      button:{
        width:100,
        marginHorizontal:16,
      },
      image:{
        height:100,
        width:100,
        margin:20,
      }
})