import React, { Component } from 'react';
import {connect} from 'react-redux';


class Contactlist extends Component {
    render() {
        return (
            <div>
                {this.props.contact.map(el=>
                   ( <div>
                    <h1>{el.nom}</h1>
                    <h1>{el.telephone}</h1>
                    </div>)
                )}

                
                
            </div>
        );
    }
}
 const mapStateToprops=(state)=>{
     return{
        contact:state.contactReducer

     }
 }




export default connect (mapStateToprops)   (Contactlist);