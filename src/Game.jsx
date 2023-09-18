import { useState, useEffect } from 'react';

import { ThumbsUp } from 'react-feather';
import ConfettiExplosion from 'react-confetti-explosion';

const Game = () => {
  const [purses, setPurses] = useState([]);
  const [purseNumber, setPurseNumber] = useState(0);

  const [purseA, setPurseA] = useState({});
  const [purseB, setPurseB] = useState({});
  const [winner, setWinner] = useState({});

  useEffect(() => {
    const getPurses = async () => {
      const res = await fetch('/src/assets/purses.json');
      await res.json().then((data) => {
        setPurses(data.data);
      });
    };

    getPurses();
  }, []);

  useEffect(() => {
    setPurseA(purses[purseNumber + 1]);
    setPurseB(purses[purseNumber]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [purses]);

  const onPurseAClick = () => {
    setWinner(purseA);
    setPurseNumber(purseNumber + 1);
    setPurseB(purses[purseNumber]);
  };

  const onPurseBClick = () => {
    setWinner(purseB);
    setPurseNumber(purseNumber + 1);
    setPurseA(purses[purseNumber]);
  };

  return (
    <>
      {purses.length !== purseNumber - 1 ? (
        <>
          <h2 className="text-xl">Care îți place mai mult?</h2>

          <div className="flex w-full flex-1 flex-col gap-2">
            <div className="flex flex-1 flex-col justify-between gap-2 rounded-md border border-gray-500 p-2 shadow-md">
              <div className="flex flex-col items-center gap-2">
                {purseA && <img src={purseA.img} alt={purseA.name} className="object-fit" />}
              </div>
              <button
                onClick={onPurseAClick}
                className="flex items-center justify-center gap-2 rounded-md border border-lime-500 p-2"
              >
                <ThumbsUp /> Pe asta o vreau!
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-2 rounded-md border border-gray-500 p-2 shadow-md">
              <div className="flex flex-col items-center gap-2">
                {purseB && <img src={purseB.img} alt={purseB.name} className="object-cover" />}
              </div>
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

/*
CONTEXT:
  You want 2 random objects from the array to be displayed on each of the two cards.
  You should keep track of the number of items that are passed through on each item click.
  When one of the items is selected as the winner, the other one is replaced by another object from the array.
  When the number of purses rendered match the length of the purses array, the last selected item is the winner and the Win screen comes up.

IMPLEMENTATION:
  save item1 and item2 in state -> remove the two objects that were saved in state from the array -> render the two objects from their respective state
  case "item1 is pressed" -> set item2 to another random element from the array -> render the new element on the page in the item2 slot
  case "item2 is pressed" -> set item1 to another random element from the array -> render the new element on the page in the item1 slot
  case "item1 is pressed and the purseNumber matches the length of the purses arr" -> display end game screen with winner rendered on the page
  case "item2 is pressed and the purseNumber matches the length of the purses arr" -> display end game screen with winner rendered on the page
 */
