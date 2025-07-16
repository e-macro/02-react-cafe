
// import clsx from  'clsx'
import { useState } from 'react'
import type { VoteType, Votes } from '../../types/Votes';
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions';
import css from './App.module.css'



function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleVote = (type: VoteType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  }
  const resetVotes = () => {
    setVotes({good: 0,
    neutral: 0,
    bad: 0});
  }

  return <div className={css.app}>
    <CafeInfo />
    <VoteOptions 
      onVote={handleVote}
      onReset={resetVotes}
      canReset={true}/>
  </div>

}

export default App
