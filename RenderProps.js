/*

2. Render Props
Render Props is a pattern where a function is passed as a prop to a component. It provides flexibility in rendering logic.
	
Example: Mouse Tracker
This example creates a MouseTracker component that tracks the mouse position and uses a render prop to display the data in a customizable way.
*/

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

export default MouseTracker;

//Usage:

<MouseTracker render={({ x, y }) => (
  <h1>Mouse position: ({x}, {y})</h1>
)} />
