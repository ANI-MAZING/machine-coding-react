import React, { useState } from 'react'
import JsonProjects from '../data/project.json'
import './Pagitation.css'

function Pagitation() {

    const [currentPage, setCurrentPage] = useState(1)
    const [ itemsPerPage, setItemsPerPage] = useState(6)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = JsonProjects.slice(startIndex, endIndex)

    function nextPage() {
        setCurrentPage(page => page + 1)
    }

    function prevPage() {
        setCurrentPage(page => page - 1)
    }

    function specificPage(pageNumber){
        setCurrentPage(pageNumber)
    }

    function getStatusClass(status) {
        switch(status) {
            case 'Available':
                return 'status-available'
            case 'Under Offer':
                return 'status-under-offer'
            case 'Sold Out':
                return 'status-sold-out'
            default:
                return ''
        }
    }

    function renderPagitationControl() {
        const totalPages = Math.ceil(JsonProjects.length / itemsPerPage)

        return (
            <div className="pagination-controls">
                <button onClick={prevPage} disabled={currentPage === 1}>← Previous</button>
                {Array.from({length: totalPages}, (_, i) => (
                    <button 
                        key={i} 
                        onClick={() => specificPage(i+1)}
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i+1}
                    </button>
                ))
                }
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next →</button>
                <span className="pagination-info">Page {currentPage} of {totalPages}</span>
            </div>
        )
    }


    return (
    <div className="pagination-container">
        <ul className="projects-grid">
            {currentItems.map((project) => {
                return (
                    <li key={project.id} className="project-card">
                        <img src={project.images[0]} alt={project.name} className="project-image" />
                        <div className="project-content">
                            <div className="project-id">ID: {project.id}</div>
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <span className={`project-status ${getStatusClass(project.status)}`}>{project.status}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
        {renderPagitationControl()}
    </div>
  )
}

export default Pagitation
