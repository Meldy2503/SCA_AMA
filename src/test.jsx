// useState hook

import { useState } from "react";

const test = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default test;
