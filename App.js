import { useState } from 'react';
import { StyleSheet,View,FlatList,Modal,Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const[modalIsVisible,setModalVisible]=useState(false)
  const [courseGoals, setCourseGoals]=useState([]);

  function startModalVisiblehandler(){
    setModalVisible(true);
  }

  function stopModalVisiblehandler(){
    setModalVisible(false);
  }
  
  function updateGoal(enteredText){
    setCourseGoals((currentGoals)=>([...currentGoals,{text:enteredText, id:Math.random().toString()}]));
    setModalVisible(false);
  }

  function onDeleteHandler(id){
    setCourseGoals(courseGoals=>{
      return courseGoals.filter((goal)=>goal.id!=id)
    })
  }
  return (
    <>
    <View style={styles.appContainer}>
      <Button color='#060f24' onPress={startModalVisiblehandler} title='add your goal'/>
     <GoalInput updateGoalsList={updateGoal} visible={modalIsVisible} stopModal={stopModalVisiblehandler}/>
     <View style={styles.goalsContainer}>
     <FlatList 
     data={courseGoals} 
     renderItem={itemData=>{
      return(
        <GoalItem addGoal={itemData.item.text} id={itemData.item.id} onDelete={onDeleteHandler}/>
      )
     }}
     keyExtractor={(item,index)=>{
      return item.id
     }}
     />
     </View>
     
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:15,
    backgroundColor:'#e4d0ff',
  },
  goalsContainer:{
    flex:5
  },
  
})
