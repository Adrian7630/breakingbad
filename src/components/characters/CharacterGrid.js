import React from 'react'

import CharacterPeople from './CharacterPeople'

import Spinner from '../Spinner'

function CharacterGrid({ people , isLoading }) 
{
    return isLoading ? (<Spinner />) : 

    (
        <section className = "cards">
            { 
                people.map(person => 
                    (
                        <CharacterPeople key = { person.char_id } person = { person } />
                    )
                )
            }

        </section>
    )
}

export default CharacterGrid
