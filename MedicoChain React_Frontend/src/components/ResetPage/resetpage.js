import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import './resetpage.css'
class resetpage extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state={
            password:'',
            confirmpassword:'',
        }
        this.onChange=this.onChange.bind(this);
        this.newPassword=this.newPassword.bind(this);
    }
    
    newPassword()
    {
        const search=window.location.search;
        const params=new URLSearchParams(search);
        const id=params.get('id');
        if(this.state.password==this.state.confirmpassword){
            let data={
                password: this.state.password,
                id: id,
            }
            
            PostData('newPassword',data).then((result) => {
                console.log(result)
            });
            }
            else
                alert("Passwords don't match");
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        }
    render()
    {
        return(
            <div class="resetdiv">
                <h3>Reset Password</h3><br/>
                <input type="password" class="resetinputs" name="password" placeholder="Enter New Password" onChange={this.onChange}/>
                <input type="password" class="resetinputs" name="confirmpassword" placeholder="Confirm New Password" onChange={this.onChange}/>
                <br/><button class="savebutton" value="Save" onClick={this.newPassword}>SAVE</button>
            </div>
        )
    }
}
export default resetpage;