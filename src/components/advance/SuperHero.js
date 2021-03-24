import React from 'react'

function SuperHero({heroName}) {
    if(heroName === 'joker') throw  new Error('Not a hero')
    return (
        <div>
            <h3>Error Boundaries</h3>
            1.getDerivedStateFromError(error)- Display UI on Error<br/>
            2.componentDidCatch(error,info)- logs the error
            {heroName}
        </div>
    )
}

export default SuperHero
