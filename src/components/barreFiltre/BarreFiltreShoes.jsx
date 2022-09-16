import React, { useState } from "react";

const BarreFiltreShoes = () => {
  const [activity, setactivity] = useState();
  return (
    <div className="barreFiltreShoes">
      <div className="containerTxtSearch">
        <h3>Filtrer ma recherche</h3>
        <hr />
        <br />
        <form className="containerInputs">
          <div className="filtres">
            {/* <h4 className="titrefiltre">Activity :</h4> */}
            <fieldset className="sousFiltre">
                <legend> activity</legend>
                <div className="choiceActivity choice">
                <input type="checkbox" id="choiceTrail"  onChange={(e) => setactivity(e.target.id)}/>
                <label htmlFor="choiceTrail">Trail</label>
                </div>
                <div className="choiceActivity choice">
                <input type="checkbox" id="choiceRunning"  onChange={(e) => setactivity(e.target.id)}/>
                <label htmlFor="choiceRunning">running</label>
                </div>
                <div className="choiceActivity choice">
                <input type="checkbox" id="choiceHike"  onChange={(e) => setactivity(e.target.id)}/>
                <label htmlFor="choiceHike">hike</label>
                </div>

            </fieldset>

        </div>
            
        </form>
      </div>
    </div>
  );
};

export default BarreFiltreShoes;
