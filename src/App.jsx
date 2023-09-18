import { useState } from 'react';
import { ShoppingBag } from 'react-feather';

import Game from './Game.jsx';

// eslint-disable-next-line react-refresh/only-export-components
export default function App() {
  const [startGame, setStartGame] = useState(false);

  const onStartGameClick = () => {
    setStartGame(true);
  };

  return (
    <main className=" flex min-h-screen flex-col items-center gap-4 p-4">
      {startGame ? (
        <Game />
      ) : (
        <>
          <header className="mb-6">
            <h1 className="text-center text-3xl font-bold text-red-500">O OFERTĂ DE NEREFUZAT!</h1>
            <h3 className="text-center text-sm font-bold text-slate-500">(serios, nu ai voie sa o refuzi...)</h3>
          </header>

          <article className="flex max-w-prose flex-col gap-4 text-base">
            <p className="text-justify">
              Ești iubirea vieții mele și vreau ce e mai bun și mai frumos pentru tine. Așadar, am făurit această
              aplicație care îți va oferi plăcerea de a îți alege poșeta visurilor tale.
            </p>
            <p className="text-justify">
              Alege una din multitudinea de modele atent selecționate. După ce ai terminat crunta bătălie între poșete,
              trimite rezultatul iubitului tău soț iar de restul se va ocupa el.
            </p>
            <p className="text-justify">Bătălia poșetelor va începe imediat ce apeși butonul de mai jos.</p>
          </article>

          <button onClick={onStartGameClick} className="mt-20 flex gap-2 rounded-md border border-black p-2">
            <ShoppingBag />
            Start
          </button>
        </>
      )}
    </main>
  );
}
