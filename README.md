React Animate Load
react-animate-load is a lightweight and customizable React component for creating beautiful loading animations. Easily integrate it into your projects to enhance user experience during loading states.

Installation
You can install the package using npm or yarn:

bash
Copy code
npm install react-animate-load
Or with yarn:

bash
Copy code
yarn add react-animate-load
Usage
Import the AnimateLoad component and use it in your React application:

jsx
Copy code
import React from 'react';
import AnimateLoad from 'react-animate-load';

function App() {
return (
<div className="App">
<h1>Welcome to My App</h1>
<AnimateLoad
        animation="spinner"
        size={50}
        color="#3498db"
        duration={1000}
      />
</div>
);
}

export default App;
Props
Prop Type Default Description
animation string 'spinner' Type of animation. Options: 'spinner', 'pulse', 'wave', etc.
size number 40 Size of the animation (in pixels).
color string '#000' Color of the animation.
duration number 800 Duration of one animation cycle in milliseconds.
Customization
You can customize the loading animation by passing different props for animation, size, color, and duration. Combine these to fit your design needs.

Example
Here’s an example with multiple animations:

jsx
Copy code
import React from 'react';
import AnimateLoad from 'react-animate-load';

function LoaderExamples() {
return (
<div>
<h2>Loading Animations</h2>
<AnimateLoad animation="spinner" size={40} color="#e74c3c" duration={800} />
<AnimateLoad animation="pulse" size={60} color="#2ecc71" duration={1200} />
<AnimateLoad animation="wave" size={50} color="#9b59b6" duration={1000} />
</div>
);
}

export default LoaderExamples;
Contributing
Contributions are welcome! Please open an issue or submit a pull request with your ideas or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
