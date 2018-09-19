import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const stable=({
  root: {
    width: '58.3%',
   // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    float: 'none',
    margin: 0 
    
  },
  table: {
   minWidth: 700,
    width:300,
  //marginTop:20,
 // marginLef:'20%'
  },
});
class Containers extends Component {
  
constructor(props){
  super(props);
  this.state={
   repository:"",
   ImagedId:"",
   status:"",
   etat:"",
   command:"",
   ports:"",
   type:"",
   contid:[]
  }
}

  componentDidMount(){
//const getrepository: shuffleArray(this.props.posts);
//, this.props.posts[0].ImageID.indexOf(":")
console.log("yes data",this.props.posts[0].Ports[0].PrivatePort)

var cloneidimage = this.props.posts[0].Id.substring(0, 12);
//var getreposiim = this.props.posts[0].Image.substring(0, this.props.posts[0].Image.indexOf(':'));
//console.log("jks",getreposiim)

this.setState({
   repository:this.props.posts[0].Image,
   ImagedId:cloneidimage,
status:this.props.posts[0].State,
etat:this.props.posts[0].Status,
command:this.props.posts[0].Command,
ports: this.props.posts[0].Ports[0].PrivatePort,
type:this.props.posts[0].Ports[0].Type,

})

}
  
  
  render() {
    
    var text = '{  [' +
'{ "repository":'+this.state.repository+' , "ImageId":'+this.state.ImagedId+',"Command":'+this.state.command+',"Ports":'+this.state.ports+',"Etat":'+this.state.etat+',"status":'+this.state.status+' },]}';
const json = JSON.stringify(text);

//    var cont =[]
  //  cont.push(this.state.repository,this.state.ImagedId,this.state.command,this.state.status,this.state.ports,this.state.etat)
    
    

    console.log("les ",json)
    console.log("heus fedfd",this.state.repository);
    let id = 0;
    function createData(repository, ImagedId, Command, Ports, Etat,status) {
      id += 1;
      return { id, repository, ImagedId, Command, Ports, Etat,status };
    }
    
    const rows = [
      createData(this.state.ImagedId,this.state.repository,this.state.command,this.state.ports,this.state.etat,this.state.status),
      
    ];
    const divStyle = {
      //width:80,
      let:50
    //  marginLef:80
    };

    return (
      <div style={{display: 'flex', justifyContent: 'center',marginTop:50}}>



<Paper style={stable.root}>
      <Table style={stable.table}>
        <TableHead >
          <TableRow>
            <TableCell>CONTAINERS ID</TableCell>
            <TableCell numeric>IMAGE</TableCell>
            <TableCell numeric>COMMAND</TableCell>
            <TableCell numeric>CREATED</TableCell>
             <TableCell numeric>PORTS</TableCell>
            <TableCell numeric>STATUS</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell >
                  {row.repository}
                </TableCell>
              
               
                <TableCell numeric>{row.ImagedId}</TableCell>
                <TableCell numeric>{row.Command}</TableCell>
                <TableCell numeric>{row.Etat}</TableCell>
                <TableCell numeric>{row.Ports}/{this.state.type}</TableCell>
                <TableCell numeric>{row.status}</TableCell>
               
              </TableRow>
            );
          })}
        </TableBody>
{/*
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.carbs}</TableCell>
                <TableCell numeric>{row.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
*/}  

      </Table>
    </Paper>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
   posts: state.posts,
     
  };
}

export default connect(mapStateToProps)(Containers);

//export default 