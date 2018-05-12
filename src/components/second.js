import React from 'react'
   


const Second = () => {
    return (
    
        <div>
          
           <div className="container-fluid ">
         


<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <form className="navbar-form navbar-left" action="/action_page.php">
      <div className="form-group">
        <input type="text" />
      </div>
      <button type="submit" className="btn btn-success btn-sm">Search</button>
    </form>
  </div>
</nav>

 <h1>Second</h1>
            <a href="/" >Link to First</a>
      
        </div> 
         </div>
    );
}

export default Second