import React , {Component} from 'react'

const credentials = {
  email: 'admin@gmail.com',
  password: 'admin'
}

class First extends Component  {
constructor(prop) {
  super(prop);

  this.state = { email : "" , pass : "", result: true };
  
}

onSubmit(){
  const { email, password } = credentials
  if(this.state.email === email && this.state.pass === password){
    console.log('success')
    this.props.history.push('second')
  }
  else{
    alert("Wrong credentials")
  }
  
}

render () {

  
  
  return ( 
        <div>
  
<div className="flex-container">
 
   <button id="bttn" className = "btn btn-default btn-lg"  data-toggle="modal" data-target="#myModal"  > Login here </button>

 <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
     
      
      <div   style={{ backgroundColor: "rgba(0,0,0,0.1)" , color:"white"}} className="modal-content">
        <div style={{display: 'flex', flexFlow: 'row nowrap'}} >
        <div style={{flex: 1}} ></div>
        <div style={{flex: 1}}>
        <img style={ { borderRadius:"200px", height :"140px", width:"140px"}} src={"./style/avatar.jpeg"} />
          </div>
          <div style={{flex: 1}} >
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
        </div>
        <div className="modal-body">
      <form onSubmit={this.onSubmit.bind(this)} >
      <input value={ this.state.email} 
        onChange={ e => this.setState({ email : e.target.value  }) } 
       type="email" id="defaultForm-email" className={"form-control validate" + this.state.result ? '' : "danger"}  placeholder="aiman@something.com" /> <br/>
           
           
           <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
      <input value={ this.state.pass} 
        onChange={ e =>  this.setState({ pass : e.target.value  }) } 
       type="password" id="defaultForm-email" className="form-control validate" /> 
           <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your password</label>
          <br /> <br/>
          <button type="submit" className="btn btn-success btn-md"> Done ! </button> <br />

       <br />
           <label>
              <input type="checkbox" name="remember" /> Remember me
            </label> 

  
        </form>
        </div>
        <div className="modal-footer">
          <button id="btnn" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          
        </div>
      </div>
      
    </div>
 </div>
  
</div> 



    </div> 
  
    
    
);
}      
    
}

export default First