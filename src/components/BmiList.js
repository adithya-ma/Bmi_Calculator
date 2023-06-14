// function BmiList({range, bmi}){
//    console.log(range);
//     return(
//     <>
//        <div className="list">
//         <table className="details">
//            <tr>
//             <th>Type</th>
//             <th>BMI</th>
//             <th>Weight</th>
//            </tr>
//            <tr>
//             <td div className={
//                18.5<bmi && bmi<24.9
//              ? "border border-danger border-3 list-group-item"
//              : "list-group-item"
//              }>Underweight</td>
//             <td> &lt; 18.5 </td>
//             <td>{range.Underweight.low + " kg"}</td>
//            </tr>
//            <tr>
//            <td>Normal</td>
//             <td>18.5 - 24.9 </td>
//             <td>{range.Normal.low + " kg - " +range.Normal.high + " kg"}</td>
//            </tr>
//            <tr>
//            <td>Overweight</td>
//             <td>25 - 29.9 </td>
//             <td>{range.Overweight.low + " kg - " +range.Overweight.high + " kg"}</td>
//            </tr>
//            <tr>
//            <td>Obesity Class I</td>
//             <td>30 - 34.9 </td>
//             <td>{range.ObesityOne.low + " kg - " +range.ObesityOne.high + " kg"}</td>
//            </tr>
//            <tr>
//            <td>Obesity Class II</td>
//             <td>35 - 39.9 </td>
//             <td>{range.ObesityTwo.low + " kg - " +range.ObesityTwo.high + " kg"}</td>
//            </tr>
//            <tr>
//            <td>Obesity Class III</td>
//             <td>&gt; 40</td>
//             <td>{range.ObesityThree.high + " kg"}</td>
//            </tr>

//         </table>
//        </div>
//     </>
//     );
// }

// export default BmiList;

function BmiList({ range, bmi }) {
   console.log(range);
 
   const isInRange = (min, max) => bmi >= min && bmi <= max;
 
   return (
     <>
       <div className="list">
         <table className="details">
           <tr>
             <th>Type</th>
             <th>BMI</th>
             <th>Weight</th>
           </tr>
           <tr
             className={
               isInRange(18.5, 24.9) ? "highlight-row" : ""
             }
           >
             <td>Underweight</td>
             <td>&lt; 18.5</td>
             <td>{range.Underweight.low + " kg"}</td>
           </tr>
           <tr
             className={
               isInRange(0, 18.5) ? "highlight-row" : ""
             }
           >
             <td>Normal</td>
             <td>18.5 - 24.9</td>
             <td>
               {range.Normal.low + " kg - " + range.Normal.high + " kg"}
             </td>
           </tr>
           <tr
             className={
               isInRange(25, 29.9) ? "highlight-row" : ""
             }
           >
             <td>Overweight</td>
             <td>25 - 29.9</td>
             <td>
               {range.Overweight.low + " kg - " + range.Overweight.high + " kg"}
             </td>
           </tr>
           <tr
             className={
               isInRange(30, 34.9) ? "highlight-row" : ""
             }
           >
             <td>Obesity Class I</td>
             <td>30 - 34.9</td>
             <td>
               {range.ObesityOne.low + " kg - " + range.ObesityOne.high + " kg"}
             </td>
           </tr>
           <tr
             className={
               isInRange(35, 39.9) ? "highlight-row" : ""
             }
           >
             <td>Obesity Class II</td>
             <td>35 - 39.9</td>
             <td>
               {range.ObesityTwo.low + " kg - " + range.ObesityTwo.high + " kg"}
             </td>
           </tr>
           <tr
             className={
               bmi >= 40 ? "highlight-row" : ""
             }
           >
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
 