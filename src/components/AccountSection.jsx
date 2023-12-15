import { useNavigate } from "react-router-dom";
import '../css/main.css';

const AccountSection = ({ accountTitle, accountAmount, amountDescription, buttonLabel }) => {
  const navigate = useNavigate();

  const handleViewTransaction = () => {
    navigate("/user-transaction");
  };
  return (
    <section className="account">
      <h3>{accountTitle}</h3>
      <p className="account-amount">{accountAmount}</p>
      <p className="account-description">{amountDescription}</p>
      <button className="view-transactions-button" onClick={handleViewTransaction}>{buttonLabel}</button>
    </section>
  );
};

export default AccountSection;
