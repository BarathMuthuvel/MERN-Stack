import React, { useState } from 'react';

function TwoWayBindingExample() {
  // Define state variables to hold the value of the input
  const [inputValue, setInputValue] = useState('');

  // Define a function to handle changes in the input
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the state with the new input value
  };

  return (
    <div>
      {/* Input field with value bound to state and onChange handler */}
      <input type="text" className='border-2 p-2' value={inputValue} onChange={handleInputChange} />
      {/* Display the current value */}
      <p>Current value: {inputValue}</p>
    </div>
  );
}

export default TwoWayBindingExample;
