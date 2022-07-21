import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App () {
  const [tasks] = useState([
    { id: 1, msg: 'Item1' },
    { id: 2, msg: 'Item2' },
    { id: 3, msg: 'Item3' },
    { id: 4, msg: 'Item4' }
  ])

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
