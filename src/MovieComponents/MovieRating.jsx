import React, { Component } from 'react';

class MovieRating extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:1,
         }
    }
    render() { 
        
        const ratingArray=[] ; 
        
        for(let i=0; i<5; i++ )
        {
        if (i<this.props.userRating) {
            ratingArray.push(<i onClick={()=>this.props.handleRate(i+1)}>★</i>)
        }
        else ratingArray.push(<i onClick={()=>this.props.handleRate(i+1)}>☆</i>)
        };
        return ( 
            <button className='btn btn-secondary movie-rating'>
                {ratingArray}
            </button>
         );
    }
}
 
export default MovieRating;