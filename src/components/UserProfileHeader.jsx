import '../css/main.css';

const UserProfileHeader = ({ username }) => {
  return (
    <div className="header">
      <h1>Welcome back<br />{username}!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default UserProfileHeader;
