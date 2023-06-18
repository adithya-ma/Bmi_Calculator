function BmiScore({ bmiNo, bmiName, changeWeight }) {
  console.log(changeWeight)
    return (
      <>
        <div className="wrapper">
          <form>
            <div className="bmiscore">
              <p>Your Bmi Score is</p>
              <div className='score'>
                {bmiNo}
              </div>
            </div>
            <div className="bmitype">
              <div className='type'>
                {bmiName}
              </div>
  
              {changeWeight.type === "positive" && (
                <div className="weightResult">" You need to lose <span>{changeWeight.weight} kg "</span></div>
              ) }

              {changeWeight.type === "negative" && (
                <div className="weightResult">" You need to gain <span>{changeWeight.weight} kg "</span></div>
              ) }

              {changeWeight.type === "normal" && (
                <div className="weightResult">"Your weight is <span>Normal</span> Good to go"</div>
              ) }

            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default BmiScore;