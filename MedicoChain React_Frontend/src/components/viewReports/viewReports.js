import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import './viewReports.css';
class viewReports extends Component {
constructor(props)
{
    super(props);
    this.state={
        redirectrefer: false,
    }
}

render()

{ 
    if(this.state.redirectrefer)
    return (<Redirect to={'/doctordash'}/>)
    let data= JSON.parse(sessionStorage.getItem('filedata'));
console.log(data)
    return(
    <div>
        <h3 class="det1" >Report Details</h3>
        <h4 class="det">Uploaded by: Dr. {data.docname}</h4>
        <h4 class="det">Report Name: {data.file}</h4>
        <h4 class="det">Report: <a target='_blank'
                   href={'https://ipfs.io/ipfs/' + data.filehash}>{ data.filehash }</a></h4>
        
        <button class="appointment1" onClick={(event)=>{
            let statusback={
                pid: data.patid,
                ind: data.ind,
            }
            console.log(statusback)
            PostData('statusBack',statusback).then((result) => {
                if(result.success)
                {
                console.log("back to 0")
                }
                else
                console.log("OOOOOPS")
                }
                );
            this.setState({redirectrefer: true})
            
        }}>Back</button>
    </div>
    )
}
}
export default viewReports;