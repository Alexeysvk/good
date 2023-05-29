import FriendListItem from "./FriendListItem";


export const Friendlist = ({ friends}) => {
  return (
    <div>
          <ul className="Friendlist">
            {friends.map(({id, avatar, name, isOnline}) => (
             <FriendListItem 
                key={id} 
                avatar={avatar} 
                name={name} 
                isOnline={isOnline}
             />    
            ))}
        </ul>
    </div>
  );
};

export default Friendlist;
