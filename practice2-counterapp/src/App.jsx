import React, { useState } from "react";

// App 컴포넌트 정의
function App() {
  // useState를 사용하여 'number'라는 상태 변수 정의
  // 초기값이 0인 상태를 정의한다.
  const [number, setNumber] = useState(0);
  return (
    <div>
      {/* 현재 'number' 상태 변수의 값을 화면에 표시한다. */}
      <div>{number}</div>

      {/* '+' 버튼을 클릭하면 'number 상태 변수를 1 증가시킨다. */}
      <button
        onClick={() => {
          setNumber(number + 1); // 'number'를 1 증가시키고, 새로운 값을 상태에 저장한다.
        }}
      >
        +
      </button>

      {/* '-' 버튼을 클릭하면 'number' 상태 변수를 1 감소시킨다. */}
      <button
        onClick={() => {
          setNumber(number - 1); // 'number'를 1 감소시키고, 새로운 값을 상태에 저장한다.
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
