import React from 'react'

const Table = ({ data }) => {
  return (
    <table className='Table-user'>
        <tbody>
            <tr className='Primary'>
                <th>Name</th>
                <th>Surname</th>
                <th>Gender</th>
                <th>Email</th>
            </tr>
            {data.map((item) => (    
            <tr className='Secondary' key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table