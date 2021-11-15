import { StyleSheet} from 'react-native';


const globalSheet = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
    },
    title:{
        textAlign:'center',
        marginTop: 15,
        fontSize : 25,
        color: "#7289da"
    },
    subtitle:{
        textAlign:'center',
        marginTop: 5,
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
    },
    input:{
        backgroundColor:'#DDD',
        borderRadius:10,
        margin:15,
        padding:10,
        color:'#000',
        fontSize:23
    },
});


export default globalSheet;