import { StyleSheet } from "react-native";


const button = StyleSheet.create({
  default: {
    backgroundColor: "#22368E",
    justifyContent: "center",
    alignItems: "center",
  }
})

const style = StyleSheet.create({
  base:{
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    paddingTop: 15 
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 14,
  },
  inputPesquisar: {
    color: "#22368E",
    borderWidth: 3,
    borderColor: "#22368E",
    borderRadius: 5,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    width: "65%",
  },
  buttonSearchClear:{
    ...button.default,
    width: 55,
  },
  buttonPreviousNext:{
    ...button.default,
    width: 50,
    height: 50,
  }, 
  buttonPreviousNextDisabled:{
    ...button.default,
    width: 50,
    height: 50,
    backgroundColor: 'grey'
  }
});


export default style;
