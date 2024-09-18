import React, { useState, useEffect } from 'react';

const TwoCounters = () => {
  const [firstCounter, setFirstCounter] = useState(0); 
  const [secondCounter, setSecondCounter] = useState(0); 

  useEffect(() => {
    setSecondCounter(firstCounter * 2); 
    console.log(`First Counter: ${firstCounter}, Second Counter: ${secondCounter}`);
  }, [firstCounter, secondCounter]); 

  const increaseFirstCounter = () => {
    setFirstCounter(firstCounter + 1);
  };

  const decreaseFirstCounter = () => {
    setFirstCounter(firstCounter - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counters</h1>

      <div>
        <h2>First Counter: {firstCounter}</h2>
        <button onClick={increaseFirstCounter}>Increase</button>
        <button onClick={decreaseFirstCounter}>Decrease</button>
      </div>

=      <div style={{ marginTop: '20px' }}>
        <h2>Second Counter (Double): {secondCounter}</h2>
      </div>
    </div>
  );
};

export default TwoCounters;
