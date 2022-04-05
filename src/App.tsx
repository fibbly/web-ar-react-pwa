import React from "react";
import "./App.css";
import "@google/model-viewer";

const App = () => {
    return (
        <div>
            <model-viewer
                id="viewer"
                src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
                alt="A 3D model of an astronaut"
                ar
                auto-rotate
                camera-controls
                ar-modes="webxr scene-viewer quick-look"
                xr-environment
            ></model-viewer>
        </div>
    );
};

export default App;
