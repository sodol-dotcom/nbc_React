import Button from "./Button";

const User = ({ user, deleteUserHandler }) => {
  const squareStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid green",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const { age, name, id } = user;

  return (
    <div style={squareStyle}>
      <div>
        {age}살 - {name}
      </div>
      <div>
        <Button color="red" onClick={() => deleteUserHandler(id)}>
          삭제
        </Button>
      </div>
    </div>
  );
};

export default User;
