import './App.css'
import Counter from './components/Counter'

function App() {
 

  return (
   <div className='container'>
    <div className='container2'>
      <h1 className='titulo'>
      Mi página
    </h1></div>
    
    <Counter
    initialValue={8}/>
   </div>
  )
}

export default App
