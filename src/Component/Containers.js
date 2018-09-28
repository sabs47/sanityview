import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import{fetchpauses} from '../Component/actions/Containersaction'
import {bindActionCreators} from 'redux';
import {AccountCircle,Dashboard,AllOut,Pause,PlayArrow} from '@material-ui/icons';

const stable=({
  root: {
    width: '55%',
   // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    float: 'none',
    margin: 0 
    
  },
  table: {
   minWidth: 800,
    width:400,
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
   contid:[],
   containerobject:[],
   selected: [],
   id:''
  }

  this.presplaypause = this.presplaypause.bind(this)
}

onSelectAllClick = event => {
  if (event.target.checked) {
    this.setState(state => ({ selected: state.containerobject.map(n => n.id) }));
    return;
  }
  this.setState({ selected: [] });
};

handleClick = (event, id) => {
  const { selected } = this.state;
  const selectedIndex = selected.indexOf(id);
  let newSelected = [];

  if (selectedIndex === -1) {
    newSelected = newSelected.concat(selected, id);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selected.slice(1));
  } else if (selectedIndex === selected.length - 1) {
    newSelected = newSelected.concat(selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selected.slice(0, selectedIndex),
      selected.slice(selectedIndex + 1),
    );
  }

  this.setState({ selected: newSelected });
};

presplaypause(containerobject){
  //FETCH_PAUSE
  this.setState({
    id:containerobject[0].repository
  })
  console.log("containerobject[0].repository",containerobject[0].repository)
this.props.fetchpauses(containerobject[0].repository)

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
containerobject:[{"repository":cloneidimage,"ImageId":this.props.posts[0].Image,"Status":this.props.posts[0].State,"Command":this.props.posts[0].Command,"Port":this.props.posts[0].Ports[0].PrivatePort,"type":this.props.posts[0].Ports[0].Type}]
})

}

isSelected = id => this.state.selected.indexOf(id) !== -1;

  
  render() {
   
   
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    

    console.log("les ",this.state.containerobject)
    console.log("heus fedfd",this.state.repository);
   
    const divStyle = {
      //width:80,
      let:50
    //  marginLef:80
    };

    return (
      <div style={{display: 'flex', justifyContent: 'center',marginTop:90}}>

    


<Paper style={stable.root}>

      <Table style={stable.table}>
        <TableHead >
          <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
            
              onChange={this.onSelectAllClick}
            />
          </TableCell>
          <TableCell>CONTAINER ID</TableCell>
            <TableCell numeric> IMAGE </TableCell>
            <TableCell numeric>COMMAND</TableCell>
            <TableCell numeric>STATUS</TableCell>
            <TableCell numeric> PORTS </TableCell>
            <TableCell numeric> TYPE </TableCell>
         
          </TableRow>
        </TableHead>
       <TableBody>
          {this.state.containerobject.map(row => {
             const isSelected = this.isSelected(row.id);
            return (
              <TableRow
              hover
              onClick={event => this.handleClick(event, row.id)}
              role="checkbox"
              aria-checked={isSelected}
              tabIndex={-1}
              key={row.id}
              selected={isSelected}
            >
                  <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                <TableCell >
                  {row.repository}
                </TableCell>
              
                <TableCell >
                  {row.ImageId}
                </TableCell>
                <TableCell >
                  {row.Command}
                </TableCell>
                <TableCell >
                  {row.Status}
                </TableCell>
                <TableCell >
                  {row.Port}
                </TableCell>
                <TableCell >
                  {row.type}
                </TableCell>
               
             
               
                     

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

 <div style={{justifyContent: 'right',marginTop:-37,marginLeft:-115}}>
    <Button variant="contained" color="secondary" 
     onClick={()=>{this.presplaypause(this.state.containerobject)}}
    >
      Supprimer
    </Button>
    </div>
      </div>
      
    );
   
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchpauses: fetchpauses}, dispatch);
}
function mapStateToProps(state) {
  return {
   posts: state.posts,
     
  };
}


export default connect(mapStateToProps,matchDispatchToProps)(Containers);

//export default 