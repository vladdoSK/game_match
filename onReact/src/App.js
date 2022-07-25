import './App.css';
import Field_table_block from './component/jsx/Field_table_block';
import Modal_open from './component/jsx/Modal_open.jsx';
import { useState } from "react";
import Winner from './component/jsx/Winner';

function App() {

  const warning = document.querySelector('.warning');

  const [comp_score, setComp_score] = useState(0);
  const [player_score, setPlayer_score] = useState(0);
  const [amount_player_step, setAmount_player_step] = useState(0);
  const [left_move, setLeft_move] = useState(3);
  const [winner, setWinner] = useState("draw");

  let score = 0;
  const modal = document.querySelector('.modal_window');

  function isEndGame(win) {
    const match = document.getElementsByClassName('match');
    if (match.length === 0) {

      if (((player_score + win) % 2) === 0) {

        setWinner("Congratulations, you won!!!");
        modal.classList.add('active');
      }
      else {
        setWinner("Sorry, you lose");
        modal.classList.add('active');
      }
    }
  }

  function computer_step() {

    if (amount_player_step === 0) {
      warning.classList.add('active');
    }
    else {
      setAmount_player_step(0);
      setLeft_move(3);
      const ai_step = document.querySelector('.computer_back');
      const p_step = document.querySelector('.player_back');

      p_step.classList.remove('active');
      ai_step.classList.add('active');
      const match = document.getElementsByClassName('match');

      setTimeout(function () {

        let amount_matches;
        let module = match.length % 4;
        if (match.length > 4) {
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
          if (((comp_score % 2) === 0) && match.length != 1) {
            if (match.length === 2) {
              const matches = document.querySelector('.matches_block');
              while (matches.firstChild) {
                matches.removeChild(matches.firstChild);
              }
              amount_matches = 0;
              score = 2;              
              isEndGame(0);
            }
            else{
              amount_matches = 2;
            }
            
          }
          else if (match.length === 3) {
            const matches = document.querySelector('.matches_block');
              while (matches.firstChild) {
                matches.removeChild(matches.firstChild);
              }
              amount_matches = 0;
              score = 3;              
              isEndGame(0);
          }
          else {
            amount_matches = 1;
          }
        }
        setComp_score(comp_score + amount_matches + score);
        for (let i = 0; i < amount_matches; i++) {
          match[i].remove();
          isEndGame(0);
        }

      }, 300);
      setTimeout(function () {
        ai_step.classList.remove('active');
        p_step.classList.add('active');
      }, 600);
    }
  }

  function computer_first() {
    const modal = document.querySelector('.modal_open');
    modal.classList.add('active');
    amount_player_step = 1;
    computer_step();
  }

  function disappear(e) {
    //warning.classList.remove('active');
    setLeft_move(left_move - 1);
    e.target.closest('.match').remove();
    setPlayer_score(player_score + 1);
    setAmount_player_step(amount_player_step + 1);

    setTimeout(function () {

      isEndGame(1);
      if ((amount_player_step + 1) === 3) {
        computer_step();
        setAmount_player_step(0);
        setLeft_move(3);
      }

    }, 300);
  }

  return (
    <div className="wrapper">
      <Modal_open comp_first={computer_first} />
      <Field_table_block c_score={comp_score}
        p_score={player_score}
        disappear={disappear}
        left_move={left_move}
      />
      <button className="button" onClick={computer_step}>Finish my move</button>
      <Winner winner={winner}/>
    </div>
  );
}

export default App;
