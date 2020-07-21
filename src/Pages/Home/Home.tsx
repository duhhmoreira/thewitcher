import React, { FC, Dispatch, SetStateAction } from 'react'

const Home: FC<IHomeProps> = (state, setState) => {
  return (
    <div>
      <h1>Home Component</h1>
      <aside>
        <button>trailers</button>
        <button>Logout</button>
      </aside>
    </div>
  )
}

export default Home