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
  const onFormSub = (w, h) => {
    let b=calcBmi(w,h);
    setBmi(b);
    setType(calcType(b));
    console.log(w, h)
  }

const calcBmi = (w,h) => (w/(h*h)).toFixed(2)
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
      <BmiList />
    </>
  );
}

export default App;
