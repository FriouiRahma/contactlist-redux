import React, { Component } from 'react';
import {connect}from 'react-redux';
import addcontact from  '../action/contactactions';

class AddContact extends Component {

    Handeladdcontact=()=>{
        let name=prompt("Donnez votre nom");
        let telephone=prompt("Donnez votre Tel");
        this.props.add({name,telephone});
    }

    render() {
        return (
            <div>
                <button onClick={this.Handeladdcontact} >
                    add contact
            </button>
            </div>
        );
    }
}


const  mapdispatchToProps=(dispatch)=>{
    return{
        add:(newContact)=> dispatch(addcontact(newContact))
    }

}

export default   connect (null,mapdispatchToProps)(AddContact);
