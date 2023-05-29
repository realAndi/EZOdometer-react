import React, { useState, useEffect } from 'react';
import './Odometer.css';

const Digit = ({ value }) => {
    const [previousValue, setPreviousValue] = useState(value);
  
    useEffect(() => {
      setPreviousValue(value);
    }, [value]);
  
    return (
      <div className="digit">
        <div className="digit-content" style={{ top: `-${value}em` }}>
          {[...Array(10).keys()].map((i) => (
            <div key={i} className="digit-value">
              {i}
            </div>
          ))}
        </div>
      </div>
    );
  };


const Odometer = ({ value }) => {
    const digits = String(value).padStart(4, '0').split('').map(Number);
  
    return (
      <div className="odometer">
        {digits.map((digit, i) => (
          <Digit key={i} value={digit} />
        ))}
      </div>
    );
  };

export default Odometer;
