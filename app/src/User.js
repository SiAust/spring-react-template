import "./User.css";

const User = ({ id, name, email }) => {
  return (
    <div className="user">
      <div className="user__prop">
        <p>id:&nbsp;</p>
        <p>{id}</p>
      </div>
      <div className="user__prop">
        <p>name:&nbsp;</p>
        <p>{name}</p>
      </div>
      <div className="user__prop">
        <p>email:&nbsp;</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default User;
