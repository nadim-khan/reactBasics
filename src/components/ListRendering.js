import React from 'react';
import Person from './Person'

function ListRendering() {
    const persons = [
        {id:1,name:'Nadeem',post:'Developer'},
        {id:2,name:'Sukku',post:'Developer'},
        {id:3,name:'Vivek',post:'Doctor'},
        {id:4,name:'Shyam',post:'Neta'},
        {id:5,name:'Nimish',post:'Dude'}
       ];
       const personList = persons.map(person => 
            <Person key={person.id} person={person}></Person>
       );
    return personList
}

export default ListRendering
