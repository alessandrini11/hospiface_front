import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchForm = () => {
  return (
    <form className="app-search d-none d-md-block">
        <div className="input-group">
          <input type="text" className="form-control" aria-label="Search" name="query" placeholder="Recherche..." />
          <button className="btn btn-primary" type="button"><FontAwesomeIcon icon={faSearch} /></button>
      </div>
    </form>
  )
}

export default SearchForm