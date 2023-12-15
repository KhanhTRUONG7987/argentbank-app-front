import '../css/main.css';

const AccountSection = ({ accountTitle, accountAmount, amountDescription, buttonLabel }) => {
  return (
    <section className="account">
      <h3>{accountTitle}</h3>
      <p className="account-amount">{accountAmount}</p>
      <p className="account-description">{amountDescription}</p>
      <button className="view-transactions-button">{buttonLabel}</button>
    </section>
  );
};

export default AccountSection;
