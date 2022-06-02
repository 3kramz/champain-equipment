import React from 'react';

const Summary = () => {
    return (
        <div className='flex justify-center'>
        <div class="stats shadow w-11/12">
  
        <div class="stat place-items-center">
          <div class="stat-title">Revinue</div>
          <div class="stat-value">31M</div>
          <div class="stat-desc">From January 2021 <br/> to February 2022</div>
        </div>
        
        <div class="stat place-items-center">
          <div class="stat-title">Tools</div>
          <div class="stat-value text-secondary">4,200</div>
          <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>
        
        <div class="stat place-items-center">
          <div class="stat-title">Consumer</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↗ Around World </div>
        </div>
        
      </div>
      </div>
    );
};

export default Summary;