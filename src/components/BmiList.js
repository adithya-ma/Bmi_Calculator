
//   return (
//     <>
//       <div className="list">
//         <table className="details">
//           <div>
//             <th>Type</th>
//             <th>BMI</th>
//             <th>Weight</th>
//           </tr>

//           <tr className={bmi && isInRange(0, 18.5) ? "highlight-row" : ""}>
//             <td>Underweight</td>
//             <td>&lt; 18.5</td>
//             <td>{range.Underweight.low + " kg"}</td>
//           </tr>

//           <tr className={bmi && isInRange(18.5, 24.9) ? "highlight-row" : ""}>
//             <td>Normal</td>
//             <td>18.5 - 24.9</td>
//             <td>
//               {range.Normal.low + " kg - " + range.Normal.high + " kg"}
//             </td>
//           </tr>

//           <tr className={bmi && isInRange(25, 29.9) ? "highlight-row" : ""}>
//             <td>Overweight</td>
//             <td>25 - 29.9</td>
//             <td>
//               {range.Overweight.low + " kg - " + range.Overweight.high + " kg"}
//             </td>
//           </tr>

//           <tr className={bmi && isInRange(30, 34.9) ? "highlight-row" : ""}>
//             <td>Obesity Class I</td>
//             <td>30 - 34.9</td>
//             <td>
//               {range.ObesityOne.low + " kg - " + range.ObesityOne.high + " kg"}
//             </td>
//           </tr>

//           <tr className={bmi && isInRange(35, 39.9) ? "highlight-row" : ""}>
//             <td>Obesity Class II</td>
//             <td>35 - 39.9</td>
//             <td>
//               {range.ObesityTwo.low + " kg - " + range.ObesityTwo.high + " kg"}
//             </td>
//           </tr>

//           <tr className={bmi && bmi >= 40 ? "highlight-row" : ""}>
//             <td>Obesity Class III</td>
//             <td>&gt; 40</td>
//             <td>{range.ObesityThree.high + " kg"}</td>
//           </tr>
//         </table>
//       </div>
//     </>
//   );
// }

function BmiList({ range, bmi }) {
  console.log(range);

  const isInRange = (min, max) => bmi >= min && bmi <= max;


  return (
    <div className="list">
      <div className="details">
        <div className="row">
          <h2>Type</h2>
          <h2>BMI</h2>
          <h2>Weight</h2>
        </div>

        <div className={bmi && isInRange(0, 18.5) ? "highlight-row" : ""}>
          <div className="row">
            <span className="content">Underweight</span>
            <span className="content">&lt; 18.5</span>
            <span className="content">{range.Underweight.low + " kg"}</span>
          </div>
        </div>

        <div className={bmi && isInRange(18.5, 24.9) ? "highlight-row" : ""}>
          <div className="row">
            <span>Normal</span>
            <span>18.5 - 24.9</span>
            <span>
              {range.Normal.low + " kg - " + range.Normal.high + " kg"}
            </span>
          </div>

        </div>
        <div className={bmi && isInRange(25, 29.9) ? "highlight-row" : ""}>
          <div className="row">
            <span>Overweight</span>
            <span>25 - 29.9</span>
            <span>
              {range.Overweight.low + " kg - " + range.Overweight.high + " kg"}
            </span>
          </div>
        </div>
        <div className={bmi && isInRange(30, 34.9) ? "highlight-row" : ""}>
          <div className="row">
            <span>Obesity Class I</span>
            <span>30 - 34.9</span>
            <span>
              {range.ObesityOne.low + " kg - " + range.ObesityOne.high + " kg"}
            </span>
          </div>
        </div>

        <div className={bmi && isInRange(35, 39.9) ? "highlight-row" : ""}>
          <div className="row">
            <span>Obesity Class II</span>
            <span>35 - 39.9</span>
            <span>
              {range.ObesityTwo.low + " kg - " + range.ObesityTwo.high + " kg"}
            </span>
          </div>
        </div>

        <div className={bmi && bmi >= 40 ? "highlight-row" : ""}>
          <div className="row">
            <span>Obesity Class III</span>
            <span>&gt; 40</span>
            <span>{range.ObesityThree.high + " kg"}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BmiList;
