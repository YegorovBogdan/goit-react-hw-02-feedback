import Profile from './components/profile/Profile';
import user from './data/user.json';

import Statistics from './components/statistics/Statistics';
import data from './data/data.json';

import FriendList from './components/friendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/transactions/TransactionHistory';
import transactions from './data/transactions.json'; 

import Container from './components/Container/Container';

import './index.css';



function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data}/>
      <FriendList items={friends}/>
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;