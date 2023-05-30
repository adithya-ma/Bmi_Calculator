import { useState } from 'react';

function Form({ getdata }) {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [alert, setAlert] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (isNaN(weight) || isNaN(height)) {
            setAlert(true);
        }
        else {
            getdata(weight, height);
            setAlert(false);
        }
    };

    return (
        <>
            <div className="bmi">
                <h1>BMI CALCULATOR</h1>
                <form onSubmit={onSubmit}>
                    <div className="main">
                        <div className="weight">
                            <label for="weight">Weight(kg): </label> <br></br>
                            <input id="weight" type="text" placeholder="eg: 80" value={weight} onChange={(e) => setWeight(e.target.value)} required></input>
                        </div>
                        <div className="height">
                            <label for="height" >Height(m): </label> <br></br>
                            <input id="height" type="text" placeholder="eg: 1.80" value={height} onChange={(e) => setHeight(e.target.value)} required></input>
                        </div>
                    </div>
                    <div className='button'>
                        <button type="submit">Get BMI</button>
                    </div>
                </form>
                {alert === true ? <div className="alert">Please enter valid details</div> : null}
            </div>
        </>
    );
}

export default Form;