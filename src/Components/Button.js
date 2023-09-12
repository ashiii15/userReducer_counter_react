import React from 'react'

function Button({increment,children}) {
    console.log(`${children}render`);
  return (
    <div>
        <button onClick={increment}>{children}</button>

    </div>
  )
}

export default React.memo(Button)