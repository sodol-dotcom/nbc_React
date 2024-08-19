import React, { useState } from "react"; // imsr
import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  const style = {
    padding: "100px",
    display: "flex",
    gap: "12px",
  };

  // const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"];
  const [users, setUsers] = useState([
    {
      id: new Date().getTime(),
      age: 30,
      name: "송중기",
    },
    {
      id: new Date().getTime() + 1,
      age: 24,
      name: "송강",
    },
    {
      id: new Date().getTime() + 2,
      age: 21,
      name: "김유정",
    },
    {
      id: new Date().getTime() + 3,
      age: 29,
      name: "구교환",
    },
  ]);

  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  const ageHandler = (e) => {
    setAge(Number(e.target.value));
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const addUserHandler = () => {
    // users state에 한 객체가 추가되면 됨!
    const newUser = {
      id: new Date().getTime(),
      age: age,
      name: name,
    };

    setUsers([...users, newUser]);
  };

  const deleteUserHandler = (id) => {
    // 삭제할 대상 id를 가지고 있어야 함

    const deletedUsers = users.filter(function (user) {
      return user.id != id;
    });
    // console.log(deletedUsers)
    setUsers(deletedUsers);
  };

  return (
    <>
      {/* input을 사용할 때는 'value'와 'onChange'를 쌍으로 묶어서 같이 쓰자. */}
      <input type="number" value={age} onChange={ageHandler} />
      <input type="text" value={name} onChange={nameHandler} />
      <Button color="green" onClick={addUserHandler}>
        추가
      </Button>
      <div style={style}>
        {/* <div style={squareStyle}>감자</div>
      <div style={squareStyle}>고구마</div>
      <div style={squareStyle}>오이</div>
      <div style={squareStyle}>가지</div>
      <div style={squareStyle}>옥수수</div> */}
        {users
          // age가 25세 이상인 user는 제외하고 렌더링 해보기!
          .filter(function (u) {
            return u.age < 25;
          })
          // 여기까지 25세 이상 필터링 코드
          // filter + map 조합 정말정말 많이 쓰니까 기억해두자
          .map(function (user) {
            // return (
            // <div key={user.id} style={squareStyle}>
            //   {user.name}
            // </div>
            // );
            return (
              <User
                key={user.id}
                user={user}
                deleteUserHandler={deleteUserHandler}
              />
            );
          })}
      </div>
    </>
  );
};

export default App;
