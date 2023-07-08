import {useEffect, useState} from 'react'
function App() {
 const [comment, setComment] = useState('Hi, How are you')
 const [secondcomment, setSecondComment] = useState('Hi, This is second useState')
 const [thirdComment , setThirdComment] = useState(true)

//  useEffect(()=>{
//   console.log("trigger useEffect hook")
// }) // it will render when component is render and when you change component property

  // useEffect(()=>{
  //   console.log("trigger useEffect hook")
  // },[]) // it will render only once when component is render & it will not render any component property change.

  // useEffect(()=>{
  //   console.log("trigger useEffect hook")
  // },[comment]) // it will render only once when component is render & when the comment has update its value.

  useEffect(()=>{
    console.log("trigger useEffect hook")
    return ()=>{
      console.log("Unmount")
    }
  },[])

  const commenthandler = () => {
    setThirdComment(!thirdComment)
  }
  return (
    <div className="App">
      {/* <h1>{comment}</h1>
      <h1>{secondcomment}</h1>
      <button onClick={()=>setComment('I am fine')}>Reply</button>
      <button onClick={()=>setSecondComment('UseEffect is called')}>Reply2</button> */}
      <div>{thirdComment?"thirdComment is true" : "thirdComment is false"}</div>
      <button onClick={commenthandler}>Reply</button>
    </div>
  );
}

export default App;