import React from 'react';//
import ReactDOM from 'react-dom/client';//
import { useState } from 'react';
import './index.css';//
const root = ReactDOM.createRoot(document.getElementById("root"));

function App1(props) {
  const [val, setVal] = useState('');
  function handleChange(evt) {
    setVal(evt.target.value)
  }
  return (<><InputField handleChange={handleChange} val={val} /><h1>Echo:{val}</h1></>)
}


function InputField(props) {
  return (<input onChange={props.handleChange} type="text" value={props.val} />)
}


function App(props) {
  const [counts, setCounts] = useState([0, 0])
  const [total, setTotal] = useState(0);
  function handleClick(i, evt) {
    const copy = counts.slice();
    copy[i] = copy[i] + 1;
    setCounts(copy)
    setTotal(copy.reduce((total, ele) => {
      return total + ele
    }, 0))
  }
  const counters = counts.map((count, i) => {
    return <Counter handleClick={evt => handleClick(i, evt)} count={count} key={i} />
  })
  return <>{counters} <Total val={total} /></>
}


function Total(props) {
  return (<h2>Total: {props.val}</h2>)
}


function Counter(props) {
  // const [name, setName] = useState('user');
  // const [count, setCount] = useState(0);
  // function handleClick(evt) {
  //   setTimeout(function(){setCount(prev=>prev+1)}, 3000)
  // setCount(prev => prev + 1)
  // console.log('hello');
  // setName('newUser');
  // }
  return (
    <div className='counter' onClick={props.handleClick}>{props.count}</div>
  )
}


const App2 = props => {
  const [bits, setBits] = useState([0, 0, 0, 0]);
  const [decVal, setDecVal] = useState(0);
  const handleClick = (i, evt) => {
    const copy = bits.slice();
    copy[i] = copy[i] === 0 ? 1 : 0;
    setBits(copy)
    const s = copy.map(val => val).join('');
    setDecVal(parseInt(s, 2));
  }
  const bitEle = bits.map((val, i) => {
    return <Bit val={val} key={i} handleClick={evt => handleClick(i, evt)} />
  })
  return (
    <>
      <h1> bin to dec</h1>
      {bitEle}
      <Result decVal={decVal} />
    </>)
}

const Result = props => {
  return (
    <h1> = {props.decVal}</h1>)
}


const Bit = props => {
  return (
    <div onClick={props.handleClick} className='bit'>{props.val}</div>)
}

// const validPlays = ( {handleChange, handlePlay, userInput }) =>{
// return ( <div> <input value={userInput} onClick = {handleChange} type = 'text' placeholder='rock, paper, scissors'/>
// <button onChange={ handlePlay }>play!</button>
// </div>)}

// const PlayResults = ({ plays }) => {
// const emoji = { rock:'1', paper: '2', scissors: '3'}
// const winner = getWinner (plays.player, plays.computer)
// const playDivs = Object.entries (plays).map(play => {
// const [name, val] = play
// return <div key={ name } className="play"><h2>{ emoji[val] }</h2>{ name }</div>})
// return (<> <div id="plays">{ playDivs }</div></>)}

// const RockPaperscissors = () => {
// const validPlays = ['rock', 'paper', 'scissors']
// const [plays, setPlays] = useState ({})
// const [userInput, setUserInput] = useState('')
// const handleChange = evt => setUserInput(evt.target.value)
// const handlePlay = ()=>{
// if (validPlays.index0f (userInput) >= 0) {
// const i = Math. floor(Math. random() * validPlays.length);
// setPlays({ player: userInput, computer: validPlays [i] })}}

// const playResults = Object.keys (plays) .length === 2 ? <PlayResults plays={ plays }/> : null
// const playForm = <PlayForm handlePlay={ handlePlay } handleChange={handleChange } />
// return <div id="game">{ playForm}{ playResults !== null ? playResults :''}</div>}


root.render(<div><App /><App1 /><App2 /></div>)

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

