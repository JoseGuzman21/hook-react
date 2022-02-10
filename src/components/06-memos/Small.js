import React, { memo } from 'react'

// memo = solo dispara si las properties cambian
export const Small = memo(({value}) => {
    console.log('small')
    return (
      <small> {value } </small>
    )
  })

// export const Small = ({ value }) => {
//     console.log('small')
//     return (
//         <small> {value} </small>
//     )
// }
