
import Profile from "components/profile/Profile";
import user from "./Data/user"

import Statistic from "components/Statistic/Statistic";
import data from "./Data/data"

import Friendlist from "components/Friendlist/Friendlist";
import friends from "./Data/friends"

import TransactionHistory from "components/TransactionHistory.jsx/TransactionHistory";
import transactions from "./Data/transactions"



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
        <Statistic title="Upload status" stats={data}/>
        <Friendlist friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;