import React from 'react'

function CharacterPeople({ person }) {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={ person.img } alt='' />
          </div>
          <div className='card-back'>
            <h1>{ person.name }</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> { person.portrayed }
              </li>
              <li>
                <strong>Nickname:</strong> { person.nickname }
              </li>
              <li>
                <strong>Birthday:</strong> { person.birthday }
              </li>
              <li>
                <strong>Status:</strong> { person.status }
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CharacterPeople
