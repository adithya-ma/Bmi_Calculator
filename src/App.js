import BmiList from './components/BmiList.js'
import './App.css';
import { useState } from 'react';
import BmiScore from './components/BmiScore.js'
import Form from './components/Form.js'

import './css/Form.css'
import './css/BmiScore.css'
import './css/BmiList.css'

function App() {
  //let bmi=18;
  const [bmi, setBmi] = useState("00");
  const [type, setType] = useState("Not Calculated");

  const [bmirange,setBmiRange] = useState({
    Underweight:{low:""},
    Normal:{low:"",high:""},
    Overweight:{low:"",high:""},
    ObesityOne:{low:"",high:""},
    ObesityTwo:{low:"",high:""},
    ObesityThree:{high:""}
  });

  const onFormSub = (w, h) => {
    let b=calcBmi(w,h);
    setBmi(b);
    setType(calcType(b));
    console.log(w, h);
    const range={
      Underweight:{low:calweight(18.5,h)},
      Normal:{low:calweight(18.5,h), high:calweight(24.9,h)},
      Overweight:{low:calweight(25.0,h), high:calweight(29.9,h)},
      ObesityOne:{low:calweight(30.0,h), high:calweight(34.9,h)},
      ObesityTwo:{low:calweight(35.0,h), high:calweight(39.9,h)},
      ObesityThree:{high:calweight(40.0,h)},
    };
    setBmiRange(range);
  }

const calcBmi = (w,h) => (w/(h*h)).toFixed(2)
const calweight = (b,h) => (b*h*h).toFixed(2)
const calcType = (bmi) =>{
  if(bmi<18.5){
    return "Underweight"
  }
  else if(18.5<=bmi && bmi<=24.9){
    return "Normal weight"
  }
  else if(25.0<=bmi && bmi<=29.9){
    return "Overweight"
  }
  else if(30.0<=bmi && bmi<=34.9){
    return "Obesity class I"
  }
  else if(35.0<=bmi && bmi<=39.9){
    return "Obesity calss II"
  }
  else if(bmi>=40.0){
    return "Obesity class III"
  }
}

  return (
    <>
      <Form getdata={onFormSub} />
      <BmiScore bmiNo={bmi} bmiName={type} />
      <BmiList range={bmirange}/>
    </>
  );
}

export default App;
