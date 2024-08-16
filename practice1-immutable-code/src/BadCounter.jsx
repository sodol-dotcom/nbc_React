// 불변성 유지하는 코드 작성하기

import React, { useState } from "react";

function BadCounter() {
  const [items, setItems] = useState([1, 2, 3]);

  // 버튼 클릭 시 호출되는 함수
  const addItem = () => {
    // // 변경 전 코드
    // items.push(items.length + 1);   // 배열에 직접 push, 불변성 위반

    // 변경 후 코드
    // 새로운 배열을 생성하고 상태를 업데이트합니다.
    // 'setItems' 함수는 기존 'items' 배열을 복사본을 만들고
    // 새로운 항목을 추가하여 상태를 업데이트 함
    setItems([...items, items.length + 1]);

    // // 변경 전 코드
    // setItems(items);    //상태 업데이트
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BadCounter;
