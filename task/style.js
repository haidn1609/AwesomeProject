import { StyleSheet } from "react-native";
import color from "./color";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.backgroud
  } , 
  //tileBar
    containerTitleBar: {
        padding:20,
        justifyContent: "flex-start",
        flexDirection:"row"
      },
      TextBox:{
        flex:4,
        padding: 20,
        backgroundColor: color.textBox,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
      },
    // item
    containerItem: {
        padding: 20,
        justifyContent: "flex-start",
      },
      item: {
        margin: 15,
        padding: 10,
        backgroundColor: color.instructions,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection: "row",
      },
      square: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 100,
        justifyContent:"center",
        alignItems:"center"
      },
      numberId: {
        backgroundColor: "white",
      },
      contentText: {
        flex:3,
        padding:10
      },
    // add button
    containerButton: {
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center"
      },
      instructions: {
        textAlign: "center",
        color: color.instructions,
        fontSize:30
      },
      button :{
        flex:1,
        width:50,
        height:50,
        backgroundColor: color.button,
        borderColor: "black",
        borderWidth: 1,
        borderRadius:1000,
        justifyContent:"center",
        alignItems:"center"
      },
      buttonQr :{
        marginHorizontal: 50,
        height:50,
        backgroundColor: color.button,
        borderColor: "black",
        borderWidth: 1,
        borderRadius:1000,
   
      },
})
export default styles;