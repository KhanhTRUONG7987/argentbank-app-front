import Navbar from './NavBar';
import Footer from './Footer';
import UserProfileHeader from './UserProfileHeader';
import AccountSection from './AccountSection';
import '../css/main.css';
import "../css/UserProfilePage.css"

const UserProfilePage = () => {
  return (
    <div className='user-profile-page'>
      <Navbar />
      <main className="main bg-dark">
        <UserProfileHeader username="Tony Jarvis" />
        <h2 className="sr-only">Accounts</h2>
        <AccountSection
          accountTitle="Argent Bank Checking (x8349)"
          accountAmount="$2,082.79"
          amountDescription="Available Balance"
          buttonLabel="View transactions"
        />
        <AccountSection
          accountTitle="Argent Bank Savings (x6712)"
          accountAmount="$10,928.42"
          amountDescription="Available Balance"
          buttonLabel="View transactions"
        />
        <AccountSection
          accountTitle="Argent Bank Credit Card (x8349)"
          accountAmount="$184.30"
          amountDescription="Current Balance"
          buttonLabel="View transactions"
        />
      </main>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
