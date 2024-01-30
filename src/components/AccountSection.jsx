import { useNavigate } from "react-router-dom";
import "../css/main.css";

const AccountSection = ({
  accountTitle,
  accountAmount,
  amountDescription,
  buttonLabel,
}) => {
  const navigate = useNavigate();

  const handleViewTransaction = () => {
    navigate("/user-transaction");
  };
  return (
    <section className="account">
      <div className="info">
        <div>{accountTitle}</div>
        <div className="account-amount">{accountAmount}</div>
        <div className="account-description">{amountDescription}</div>
      </div>
      <button
        className="view-transactions-button"
        onClick={handleViewTransaction}
      >
        {buttonLabel}
      </button>
    </section>
  );
};

export default AccountSection;
