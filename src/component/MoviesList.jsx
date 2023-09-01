import React from 'react'
import { Row } from 'react-bootstrap'
import Card from './Card'
import PaginationComponent from './Pagination'

const MoviesList = ({ movies, getPage , pageCount}) => {
    return (
        <Row className='mt-3'>
            {
                movies.length > 0 ? (movies.map((mov) => {
                    
                    return (<Card key={mov.id} mov={mov} />)
                })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>
            }
             <PaginationComponent getPage={getPage} pageCount={pageCount}/>
        </Row>
       
    )
}

export default MoviesList
