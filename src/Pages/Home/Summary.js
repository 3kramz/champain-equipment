import React from 'react';

const Summary = () => {
    return (
        <div className='flex justify-center'>
        <div className="stats shadow w-11/12">
  
        <div className="stat place-items-center">
          <div className="stat-title">Revinue</div>
          <div className="stat-value">31M</div>
          <div className="stat-desc">From January 2021 <br/> to February 2022</div>
        </div>
        
        <div className="stat place-items-center">
          <div className="stat-title">Tools</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>
        
        <div className="stat place-items-center">
          <div className="stat-title">Consumer</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↗ Around World </div>
        </div>
        
      </div>
      </div>
    );
};

export default Summary;