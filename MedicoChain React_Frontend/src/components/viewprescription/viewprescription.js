import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import './viewprescription.css';
class viewprescription extends Component {
constructor(props)
{
    super(props);
    this.state={
        redirectToManage: false,
    }
}

render()

{ 
    if(this.state.redirectToManage)
    return (<Redirect to={'/management'}/>)
    let data= JSON.parse(sessionStorage.getItem('filedatap'));
console.log(data)
    return(
    <div>
        <h3 class="det1" >Prescription Details</h3>
        <h4 class="det">Prescribed by: Dr.{data.docname}</h4>
        <h4 class="det">Prescription Name: {data.file}</h4>
        <h4 class="det">Prescription: <a target='_blank'
                   href={'https://ipfs.io/ipfs/' + data.filehash}>{ data.filehash }</a></h4>
        
        <button class="appointment1" onClick={(event)=>{
            let statusback={
                pid: data.patid,
                ind: data.ind,
            }
            console.log(statusback)
            PostData('statusBackp',statusback).then((result) => {
                if(result.success)
                {
                console.log("back to 0")
                }
                else
                console.log("OOOOOPS")
                }
                );
            this.setState({redirectToManage: true})
            
        }}>Back</button>
    </div>
    )
}
}
export default viewprescription;