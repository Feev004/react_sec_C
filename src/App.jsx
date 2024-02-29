import Contact from './assets/contact';
import Counter from './assets/counter';
import Hello from "./assets/hello";
function App() {
  const helloData = [
    {name: 'few', massage: 'Rojjanai'},
    {name: 'Tom', massage: 'Hello...'}
  ]
  return (
    <div className='App'>
      <Counter/>
      {helloData.map((data, index)=>(
        <Hello key={index} name={data.name} massage={data.massage}/>
      ))}

      <Contact email = "feevfeev2@gmail.com" phone = "123456789"/>
    </div>

  )
}

export default App
