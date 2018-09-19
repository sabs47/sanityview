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
    width: '56.3%',
   // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    float: 'none',
    margin: 0 
    
  },
  table: {
   minWidth: 900,
    width:200,
  //marginTop:20,
  marginLef:'20%'
  },
});
class Images extends Component {
  
constructor(props){
  super(props);
  this.state={
   repository:"",
   ImagedId:"",
   status:"",
   etat:""
  }
}

  componentDidMount(){
//const getrepository: shuffleArray(this.props.posts);
console.log("yes data",this.props.posts)

var cloneidimage = this.props.posts[0].ImageID.substring(19, this.props.posts[0].ImageID.indexOf(":"));
var getreposiim = this.props.posts[0].Image.substring(0, this.props.posts[0].Image.indexOf(':'));
console.log("jks",getreposiim)
this.setState({
   repository:getreposiim,
   ImagedId:cloneidimage.substring(1),
status:this.props.posts[0].State,
etat:this.props.posts[0].Status

  })
  
  }
  
  
  render() {
    console.log("heus fedfd",this.state.repository);
    let id = 0;
    function createData(name, calories, fat, carbs, protein) {
      id += 1;
      return { id, name, calories, fat, carbs, protein };
    }
    
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    const divStyle = {
      //width:80,
      let:50
    //  marginLef:80
    };

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>



<Paper style={stable.root}>
      <Table style={stable.table}>
        <TableHead >
          <TableRow>
            <TableCell>REPOSITORY</TableCell>
            <TableCell numeric>TAG</TableCell>
            <TableCell numeric>IMAGE Id</TableCell>
            <TableCell numeric>CREATED</TableCell>
            <TableCell numeric>SIZE</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
                   
              <TableRow>
                <TableCell component="th" scope="row">
                 
                </TableCell>
                <TableCell >{this.state.ImagedId}</TableCell>
                <TableCell >{this.state.repository}</TableCell>
                <TableCell >{this.state.status}</TableCell>
                <TableCell >{this.state.etat}</TableCell>
               
              </TableRow>
            
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

export default connect(mapStateToProps)(Images);

//export default 