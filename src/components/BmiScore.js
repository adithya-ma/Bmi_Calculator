function BmiScore({ bmiNo, bmiName }) {
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
  
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default BmiScore;