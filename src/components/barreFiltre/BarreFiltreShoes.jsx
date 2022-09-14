import React, { useState } from 'react';

const BarreFiltreShoes = () => {

    const [activity, setactivity] = useState();
    return (
        <div className='barreFiltreShoes'>
            <h3>Filtrer ma recherche</h3>
            <hr />
            <form className='containerInputs'>
                <div className='filtres'>
                    <div className='filtre'>Activity :
                    <input
                    type="checkbox"
                    id='activity'
                    checked={activity}
                    onChange={(e)=> setactivity(e.target.id)}
                    />
                    <label htmlFor="activity">Trail</label>
                        
                    </div>

                </div>
            </form>
            
        </div>
    );
};

export default BarreFiltreShoes;