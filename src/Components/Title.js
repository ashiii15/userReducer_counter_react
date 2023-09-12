import React from 'react'

function Title() {
    console.log('ttitle render');
  return (
    <h1>useCallback</h1>
  )
}

export default React.memo(Title)