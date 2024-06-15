import React, { useState, useEffect } from 'react';
import './T9Keyboard.css';

const T9Keyboard = () => {
  const [output, setOutput] = useState('');
  const [lastKeyPress, setLastKeyPress] = useState(null);
  const [keyPressCount, setKeyPressCount] = useState(0);
  let t9Timeout = null;

  const handleButtonClick = (keys) => {
    clearTimeout(t9Timeout);

    if (keys === ' ') {
      setOutput(output + ' ');
      resetKeyPress();
    } else if (keys === 'back') {
      setOutput(output.slice(0, -1));
      resetKeyPress();
    } else {
      if (lastKeyPress === keys) {
        let newKeyPressCount = keyPressCount + 1;
        if (newKeyPressCount >= keys.length) {
          newKeyPressCount = 0;
        }
        setKeyPressCount(newKeyPressCount);
        setOutput(output.slice(0, -1) + keys[newKeyPressCount]);
      } else {
        setLastKeyPress(keys);
        setKeyPressCount(0);
        setOutput(output + keys[0]);
      }
      t9Timeout = setTimeout(resetKeyPress, 1000);
    }
  };

  const resetKeyPress = () => {
    setLastKeyPress(null);
    setKeyPressCount(0);
  };

  useEffect(() => {
    return () => {
      clearTimeout(t9Timeout);
    };
  }, []);

  return (
    <div id="t9-container">
      <div id="output">{output}</div>
      <div id="keyboard">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('abc')}>2<br /><small>abc</small></button>
        <button onClick={() => handleButtonClick('def')}>3<br /><small>def</small></button>
        <button onClick={() => handleButtonClick('ghi')}>4<br /><small>ghi</small></button>
        <button onClick={() => handleButtonClick('jkl')}>5<br /><small>jkl</small></button>
        <button onClick={() => handleButtonClick('mno')}>6<br /><small>mno</small></button>
        <button onClick={() => handleButtonClick('pqrs')}>7<br /><small>pqrs</small></button>
        <button onClick={() => handleButtonClick('tuv')}>8<br /><small>tuv</small></button>
        <button onClick={() => handleButtonClick('wxyz')}>9<br /><small>wxyz</small></button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick(' ')}>0<br /><small>Space</small></button>
        <button onClick={() => handleButtonClick('#')}>#</button>
        <button onClick={() => handleButtonClick('back')} className="back">Back</button>
      </div>
    </div>
  );
};

export default T9Keyboard;
