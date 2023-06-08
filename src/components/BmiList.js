function BmiList({range, bmi}){
   console.log(range);
    return(
    <>
       <div className="list">
        <table className="details">
           <tr>
            <th>Type</th>
            <th>BMI</th>
            <th>Weight</th>
           </tr>
           <tr>
            <td>Underweight</td>
            <td> &lt; 18.5 </td>
            <td>{range.Underweight.low + " kg"}</td>
           </tr>
           <tr>
           <td>Normal</td>
            <td>18.5 - 24.9 </td>
            <td>{range.Normal.low + " kg - " +range.Normal.high + " kg"}</td>
           </tr>
           <tr>
           <td>Overweight</td>
            <td>25 - 29.9 </td>
            <td>{range.Overweight.low + " kg - " +range.Overweight.high + " kg"}</td>
           </tr>
           <tr>
           <td>Obesity Class I</td>
            <td>30 - 34.9 </td>
            <td>{range.ObesityOne.low + " kg - " +range.ObesityOne.high + " kg"}</td>
           </tr>
           <tr>
           <td>Obesity Class II</td>
            <td>35 - 39.9 </td>
            <td>{range.ObesityTwo.low + " kg - " +range.ObesityTwo.high + " kg"}</td>
           </tr>
           <tr>
           <td>Obesity Class III</td>
            <td>&gt; 40</td>
            <td>{range.ObesityThree.high + " kg"}</td>
           </tr>

        </table>
       </div>
    </>
    );
}

export default BmiList;