import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

function App (){
  
  const [number1,setNumber1] = useState ('');
  const [number2,setNumber2] = useState ('');
  const [answer, setAnswer] = useState('');

  const handleAddition = () => {
    let ans = 0;
    ans = Number(number1) + Number(number2)
    setAnswer(ans);
  };
  const handleDivision = () => {
    let ans = 0;
    ans = Number(number1)/ Number(number2)
    setAnswer(ans);
  };
  const handleMultiplication = () => {
    let ans = 0;
    ans = Number(number1) * Number(number2)
    setAnswer(ans);
  };
  const handleMinus = () => {
    let ans = 0;
    ans = Number(number1) - Number(number2)
    setAnswer(ans);
  }
  const handlePower = () => {
    let ans = 0;
    ans =Number(number1) ** Number(number2) 
    setAnswer(ans);
  }
  const handleSquard = () => {
    let ans = 0;
    ans = Math.sqrt(Number(number1) )
    setAnswer(ans);
  }
  
    return(
      <View style={styles.container}>
             <Text style={styles.heading}>Calculator</Text>
        <View style={styles.inputContainer}>
              <TextInput style={styles.input}
                placeholder="Enter a number"
                value={number1}
                onChangeText={(number1) => setNumber1(number1)}
              />
         </View>
         <View style={styles.inputContainer}>
              <TextInput style={styles.input}
                placeholder="Enter a number"
                value={number2}
                onChangeText={(number2) => setNumber2(number2)}
              />
      </View>
          <View style={styles.operatoeContainer}>
              <View >
                <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddition}
              >
                <Text style={styles.addButtonText}>+</Text>
               </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity 
                style={styles.minusButton}
                onPress={handleMinus}
                >
                <Text style={styles.minusButtonText}>-</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity 
                style={styles.multiplicationButton}
                onPress={handleMultiplication}
                >
                <Text style={styles.multiplicationButtonText}>*</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity 
                style={styles.divisionButton}
                onPress={handleDivision}
                >
                <Text style={styles.divisionButtonText}>/</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity 
                style={styles.powerButton}
                onPress={handlePower}
                >
                <Text style={styles.powerButtonText}>**</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity 
                style={styles.squardButton}
                onPress={handleSquard}
                >
                <Text style={styles.squardButtonText}>sqrt</Text>
                </TouchableOpacity>
              </View>
          </View>
        <View>
          <View style={styles.answerContainer}>
              <Text placeholder= '0'>
              {answer}
              </Text>
          </View>
        </View>
          
      </View>
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#f7ede2',
  },
  heading: {
    textAlign:'center',
    fontSize: 28,
    marginBottom: 19,
    marginTop: 50,
    color:'#274c77',
    fontWeight:'bold',
  },
  inputContainer: {
    marginTop:20,
    paddingBottom:10,
    paddingEnd:20,
     paddingStart:20,
    flexDirection: 'row',
    
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlign:'center',
    color:'#723d46',
    borderRadius:20,
    
  },
  operatoeContainer:{
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    marginTop: 10,
    
  },
  addButton: {
    marginTop:20,
    marginLeft:2,
    width: 50,
    height: 50,
    backgroundColor: '#219ebc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  },
  addButtonText: {
    fontSize: 24,
    color: '#023047',
  },
  minusButton: {
    marginTop:20,
    marginLeft: 5,
    width: 50,
    height: 50,
    backgroundColor: '#219ebc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  },
  minusButtonText: {
    fontSize: 24,
    color: '#023047',
  },
  multiplicationButton: {
    marginTop:20,
    marginLeft: 5,
    width: 50,
    height: 50,
    backgroundColor: '#219ebc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  },
  multiplicationButtonText: {
    fontSize: 24,
    color: '#023047',
  },
divisionButton: {
    marginTop:20,
    marginLeft:5,
    width: 50,
    height: 50,
    backgroundColor: '#219ebc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  },
  divisionButtonText: {
    fontSize: 24,
    color: '#023047',
  },
  powerButton: {
    marginTop:20,
    marginLeft:5,
    width: 50,
    height: 50,
    backgroundColor: '#219ebc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  },
  powerButtonText: {
    fontSize: 24,
    color: '#023047',
  },
  squardButton: {
    marginTop:20,
    marginLeft: 1,
    width: 50,
    height: 50,
    backgroundColor: '#219ebc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  },
  squardButtonText: {
    fontSize: 15,
    color: '#023047',

  },
  answerContainer:{
    marginTop:40,
    width: 150,
    height: 50,
    backgroundColor: '#f59099',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
    
  },
  
});

export default App;
