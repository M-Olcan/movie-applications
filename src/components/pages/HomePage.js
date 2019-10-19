import React, { Component } from 'react';
import ActorList from '../ActorList';

 class HomePage extends Component {

    state={
        actors:[{
            name:"Marlon Brando",
            description:"Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem",
            photo:"https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_.jpg"
        },

        {
            name:" Al Pacino",
            description:"Al Pacino established himself during one of cinema's most vibrant decades, the 1970s, and has become an enduring and iconic figure in the world of American movies.",
            photo:"https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_.jpg"
        }
    ]
    };
    render() {
        return (
           <div>
               <ActorList actors={this.state.actors}/>
           </div>
        )
    }
}

export default HomePage;