import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render(mousePosition);
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <MousePosition render={
          (coordinate) => {
            return(
              <>
                <span>x: {coordinate.x}</span>
                <span>y: {coordinate.y}</span>
              </>
            );
          }
        }
        />
      </div>
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition render={
      (coordinate) => {
        return(
          <p>({coordinate.x}, {coordinate.y})</p>
        );
      }
    }
    />
  )
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;