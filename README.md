# EZOdometer

EZOdometer is a lightweight and customizable React component for smoothly animating numbers, ideal for creating captivating odometers and counters in web applications.

!(Preview)[https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODkzOWFkM2UyYzkxMzE0ZTkxZWY1MGFkYjhjMjk0MTVjODAwNTczOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/BKVtm1A7QiUQhRKU7Y/giphy.gif]

## Requirements

- React 18.2.0 or higher

## Features

- Smooth transitions: Numbers transition smoothly with customizable animation effects.
- Customizable appearance: Easily modify the appearance and styling to match your project's design.
- Configurable options: Control the transition duration, easing function, and number formatting.
- Responsive and accessible: The library is responsive and accessible, ensuring a seamless experience for all users.
- Lightweight and performant: Built with performance in mind, the library is optimized for efficiency and minimal overhead.

## Usage

Install React Odometer using npm:

```bash
npm install ezodometer
```

Import the Odometer component in your React project:

```js
import React from 'react';
import Odometer from 'react-odometer';

const YourComponent = () => {
  const someNumber = 42;

  return (
    <div>
      <Odometer value={someNumber} />
    </div>
  );
};

export default YourComponent;
```

The Odometer component allows you to dynamically adjust the sizing based on the container element. Simply set the appropriate width and height on the container element, and the odometer will adapt accordingly.

```js
<div style={{ width: '200px', height: '100px' }}>
  <Odometer value={someNumber} />
</div>
```


