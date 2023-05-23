import Friendlist from "components/Friendlist/Friendlist";
import Profile from "components/profile/Profile";
import Statistic from "components/Statistic/Statistic";
import TransactionHistory from "components/TransactionHistory.jsx/TransactionHistory";
import user from "./Data/user"


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
        <Statistic />
        <Friendlist />
        <TransactionHistory />
    </div>
  );
};

export default App;