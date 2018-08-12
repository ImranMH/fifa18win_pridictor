import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectInput from './../../forms/SelectInput'
import InputElement from './../../forms/InputElement'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMatch} from '../../../actions/match';

class MatchResultCont extends Component {
  static propTypes = {
    onchange: PropTypes.func,
  }

  state = {
    match:{
      group: 'A',
      id: 0,
      matchNo: 105,
      playTime:'Aug 8 2018',
      teamOne:{
        title: 'Brazil',
        score:0
      },
      teamTwoScore: 0,
      teamTwo:{
        title: 'Argentina', 
        score:0 
      },
      teamOneScore: 0,
      playDate: '2018-07-18',
      playTime: '16:50'
    }
  }
  componentDidMount =() =>{

  }
  groupOnchange = (e) => {
    const groupKey = e.target.value;
    const data = this.props.teams.filter(team => {
      if (team.group === groupKey) {
        return team
      }
      return false
    })
    const g = data.map(group => {
      return group.title
    })
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      grouped: g,
    })
  }

  updateGroup = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  updateScore = (e)=>{
    this.setState({
      match:{
        ...this.state.match,
        [e.target.name]: parseInt(e.target.value) 
      }
    });
    
  }

  clickFn = (e) => {
    e.preventDefault()
    /* update match dispatch action */
    console.log(this.state);
     this.props.dispatchUpdateMatch(this.state)
  }

  /* testless onChange function for onchange Event handler ...... */
  onChange =(e)=>{
    let matchId = e.target.value
    this.props.matches.map(m=>{
      
      if (m._id === matchId) {
        // this.match = match;
        this.setState({
          match:{
            id: m._id,
            group: m.group,
            teamOne:{
              title: m.teamOne.name,
              id: m.teamOne.id._id,  // this is the problem of publishng new match
            },
            teamTwo:{
              title: m.teamTwo.name,
              id: m.teamTwo.id._id,
            },
             teamTwoScore: m.teamTwo.score || 0,
             teamOneScore: m.teamOne.score || 0,
            matchNo: m.matchNo,          
            playDate: m.playDate,
            playTime: m.playTime
          }
        })
      }
    })
  }

  render() {
    console.log(this.state)
    /* match select option value data  */
    const mlist = []
    if (this.props.matches) {
      const match = this.props.matches
      
        match.map(item => {
          let i = {}
          i.id = item._id,
            i.match = item.matchNo,
          mlist.push(i)
        })
    }
    /* match select option value */
    const options = (data) => {
      if (data) {
        return data.map((opt, index) => {
          return <option key={index} value={opt.id} >{opt.match} </option>
        })
      }
    }
    const { match } = this.state
    
    const data = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
    ]

    return (
      <form>
        <div className="form-row">
          <label htmlFor="matchNo" >select Match </label>
          <select className="custom-select mr-sm-2"  name="matchNo" value="" onChange={this.onChange}>
            <option defaultValue='' >Choose a match ... </option>
            {options(mlist)}
          </select>
        </div>
        <div className="form-row">
          <InputElement value={match.matchNo} onChange={this.updateGroup} nil={'matchNo'} cnc="form-group col-md-6"  label={'Match No'}
            placeholder={'Match No'} disabled={true} />
          <InputElement value={match.group} onChange={this.updateGroup} nil={'group'} cnc="form-group col-md-6" label={'Group'}
            placeholder={'Group'} disabled={true} />
        </div>
        <div className="form-row">

          <InputElement value={match.playDate} onChange={this.updateGroup} nil={'playDate'} cnc="form-group col-md-6" label={'Playing Date'}
            placeholder={'Playing Date'} disabled={true} />
          <InputElement value={match.playTime} onChange={this.updateGroup} nil={'playTime'} cnc="form-group col-md-6" label={'Playing Time'}
            placeholder={'Playing Time'} disabled={true} />
        </div>
        <div className="form-row">
          <InputElement value={match.teamOne.title} onChange={this.updateGroup} nil={'team'} cnc="form-group col-md-6"  label={'Team'}
            placeholder={'Brazil'} disabled={true} />
          <InputElement value={match.teamTwo.title} onChange={this.updateGroup} nil={'opponent'} cnc="form-group col-md-6" label={'Opponent'}
            placeholder={'Argintina'} disabled={true} />
        </div>
        <div className="form-row">
          <InputElement value={match.teamOneScore} type={'number'} onChange={this.updateScore} nil={'teamOneScore'} cnc="form-group col-md-6" label={'Team Goal'}
            placeholder={''}  />
          <InputElement value={match.teamTwoScore} type={'number'} onChange={this.updateScore} nil={'teamTwoScore'} cnc="form-group col-md-6" label={'Opponent Goal'}
            placeholder={''}  />
        </div>
        <div className="form-row">
          {/* <SelectInput onChange={this.updateGroup} data={data} nil={'teamOne'} label={"Team One"} dftvlu="Select Team" />
          <SelectInput onChange={this.updateGroup} data={data} nil={'teamTwo'} label={"Team Two"} dftvlu="Select Oponent" /> */}

        </div>

        <button onClick={this.clickFn} type="submit" className="btn btn-primary">Update match</button>
        <button onClick={this.editData}  className="btn btn-warning">Edit</button>
      </form>
    )
  }
}

/* redux implementation .................... */
const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    matches: state.matches.matches,
    groupTeam: state.groupTeam
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ dispatchUpdateMatch: updateMatch }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(MatchResultCont);
