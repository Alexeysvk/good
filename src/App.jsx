import Friendlist from "components/Friendlist/Friendlist";
import Statistic from "components/Statistic/Statistic";
import ProfileCard from "./components/profile-cart/ProfileCard";
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
        <ProfileCard />
        <Statistic />
        <Friendlist />
    </div>
  );
};

export default App;