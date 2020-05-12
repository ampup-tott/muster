import React , { Component } from 'react' ;

class ErrorPage extends Component {
    backPageBefore(){
        window.history.back();
    }
    render(){
        return(
            <div>
                <h1>ERROR PAGE</h1>
                <button onClick = {this.backPageBefore} type='button'> back</button>
            </div>
        )
    }
}

export default ErrorPage;