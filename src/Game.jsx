import { useState, useEffect } from 'react';

import { ThumbsUp } from 'react-feather';
import { PURSES } from './assets/purses';
import ConfettiExplosion from 'react-confetti-explosion';

const Game = () => {
  const [purseNumber, setPurseNumber] = useState(0);

  const [purseA, setPurseA] = useState({});
  const [purseB, setPurseB] = useState({});
  const [winner, setWinner] = useState({});

  useEffect(() => {
    setPurseA(PURSES[purseNumber + 1]);
    setPurseB(PURSES[purseNumber]);
  }, []);

  const onPurseAClick = () => {
    setWinner(purseA);
    setPurseNumber(purseNumber + 1);
    setPurseB(PURSES[purseNumber]);
  };

  const onPurseBClick = () => {
    setWinner(purseB);
    setPurseNumber(purseNumber + 1);
    setPurseA(PURSES[purseNumber]);
  };

  return (
    <>
      {PURSES.length !== purseNumber - 1 ? (
        <>
          <h2 className="mb-4 text-center text-xl">Care îți place mai mult?</h2>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-2 rounded-md border border-gray-500 p-2 shadow-md">
              {purseA && <img src={purseA.img} alt={purseA.name} className="object-contain" />}

              <button
                onClick={onPurseAClick}
                className="flex items-center justify-center gap-2 rounded-md border border-lime-500 p-2"
              >
                <ThumbsUp /> Pe asta o vreau!
              </button>
            </div>
            <div className="flex flex-col gap-2 rounded-md border border-gray-500 p-2 shadow-md">
              {purseB && <img src={purseB.img} alt={purseB.name} className="object-contain" />}

              <button
                onClick={onPurseBClick}
                className="flex items-center justify-center gap-2 rounded-md border border-lime-500 p-2"
              >
                <ThumbsUp /> Pe asta o vreau!
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          <ConfettiExplosion duration={4000} />
          <h3 className="text-center text-xl font-bold"> Un screenshot la băiatu ms pwp!</h3>
          <div className="flex flex-col items-center">
            <img src={winner.img} alt={winner.name} />
            <span className="text-base font-bold text-gray-500">{winner.name}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Game;
