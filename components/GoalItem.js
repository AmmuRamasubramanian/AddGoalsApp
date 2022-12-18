import {Text, View, StyleSheet, Pressable} from 'react-native';

function GoalItem(props){
    return(
        <Pressable 
            onPress={props.onDelete.bind(this, props.id)}
            android_ripple={{color:'#210644'}} 
            style={({pressed})=>pressed && styles.pressedItem}>
            <View style={styles.goalsItem}>
            <Text style={styles.goalText}>{props.addGoal}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem;

const styles=StyleSheet.create({
    goalsItem:{
        margin:10,
        backgroundColor:'#352b80',
        borderRadius:6,
      },
      pressedItem:{
        opacity:0.5,
      },
      goalText:{
        padding:10,
        color:'white',
      }
})