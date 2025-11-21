/*

4. Controlled vs. Uncontrolled Components

Controlled components are fully controlled by React state, while uncontrolled components rely on the DOM.

Example 1: Controlled components
This example shows a controlled input field where the value is managed by React state.
*/

function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

/*
Example 2: Uncontrolled components
This example demonstrates an uncontrolled input field where the value is accessed directly from the DOM using a ref.
*/

function UncontrolledInput() {
  const inputRef = useRef();

  function handleClick() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
}
