import { StyleSheet} from 'react-native';


const globalSheet = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },
    title:{
        textAlign:'center',
        marginTop: 10,
        fontSize : 25,
        color: "#7289da"
    },
    subtitle:{
        textAlign:'center',
        margin: 5,
        fontSize : 15,
        color: "#B1D4E0",
        shadowColor: "#00000"
    },
    row: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 3,              
    },
    card: {
        padding: 3,
        margin: 5,
    },
});


export default globalSheet;