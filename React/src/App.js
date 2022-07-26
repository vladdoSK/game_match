import './App.css';
import Field_table_block from './component/jsx/Field_table_block';
import Modal_open from './component/jsx/Modal_open.jsx';
import { useRef, useState } from "react";
import Winner from './component/jsx/Winner';

function App() {

  const warnRef = useRef();
  const modal_win_Ref = useRef();
  const ai_moveRef = useRef();
  const player_moveRef = useRef();
  const matchesRef = useRef();


  const [isStartGame, setIsStartGame] = useState(true);
  const [comp_score, setComp_score] = useState(0);
  const [player_score, setPlayer_score] = useState(0);
  const [left_move, setLeft_move] = useState(3);
  const [winner, setWinner] = useState("draw");
  const [match_num, setMatch_num] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);

  let score = 0;

  function isEndGame(win, last_move) {

    let total_score = comp_score + player_score + last_move;

    if (total_score === 25) {

      if (((player_score + win) % 2) === 0) {
        setWinner("Congratulations, you won!!!");
      }
      else {
        setWinner("Sorry, you lose");
      }
      modal_win_Ref.current.classList.add('active');
    }
  }

  function new_game() {
    setLeft_move(3);
    setComp_score(0);
    setPlayer_score(0);
    modal_win_Ref.current.classList.remove('active');
    setTimeout(function () {
      setMatch_num([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    }, 10);
  }

  function computer_step() {

    if (left_move === 3) {
      warnRef.current.classList.add('active');
    }
    else {

      setLeft_move(3);

      player_moveRef.current.classList.remove('active');
      ai_moveRef.current.classList.add('active');

      logic_move();

      setTimeout(function () {
        ai_moveRef.current.classList.remove('active');
        player_moveRef.current.classList.add('active');
      }, 600);
    }
  }

  function logic_move(){
    setTimeout(function () {

      let amount_matches;
      let module = match_num.length % 4;
      if (match_num.length > 4) {
        if (module === 0) {
          amount_matches = 3;
        }
        else if (module === 1) {
          amount_matches = 1;
        }
        else if (module === 2) {
          amount_matches = 1;
        }
        else if (module === 3) {
          amount_matches = 3;
        }
      }
      else {
        if (((comp_score % 2) === 0) && match_num.length != 1) {
          if (match_num.length === 2) {
            setTimeout(function () {
              setMatch_num([]);
            }, 10)
            amount_matches = 0;
            score = 2;
            isEndGame(0, 2);
          }
          else {
            amount_matches = 2;
          }

        }
        else if (match_num.length === 3) {
          setTimeout(function () {
            setMatch_num([]);
          }, 10)

          amount_matches = 0;
          score = 3;
          isEndGame(0, 3);
        }
        else {
          amount_matches = 1;
        }
      }

      setComp_score(comp_score + amount_matches + score);
      setMatch_num([...match_num.slice(amount_matches)]);
      isEndGame(0, amount_matches);


    }, 300);
  }

  function computer_first() {
    setIsStartGame(false);
    setLeft_move(2);
    computer_step();
  }

  return (
    <div className="wrapper">
      <Modal_open comp_first={computer_first} match={matchesRef} 
      isStartGame={isStartGame} setIsStartGame={setIsStartGame} />

      <button className="button" onClick={new_game}>New game</button>

      <Field_table_block c_score={comp_score}
        p_score={player_score}
        warning={warnRef}
        setLeft_move={setLeft_move}
        setMatch_num={setMatch_num}
        setPlayer_score={setPlayer_score}
        isEndGame={isEndGame}
        left_move={left_move}
        player_move={player_moveRef}
        ai_move={ai_moveRef}
        matches={matchesRef}
        num_matches={match_num}
      />

      <button className="button" onClick={computer_step}>Finish my move</button>

      <Winner winner={winner} modalRef={modal_win_Ref} new_game={new_game}/>
    </div>
  );
}

export default App;
