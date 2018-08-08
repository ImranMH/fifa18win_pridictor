import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { team } from '../actions/team';
import  DisplayTeamDetail  from '../components/pages/TeamDetail';

class SingleTeam extends Component {
  componentDidMount = () => {
    let params = this.props.match.params;
    this.props.getTeam(params)
  }
  renderDetail() {
    const { singleTeam } = this.props;

    if (singleTeam) {
      return <DisplayTeamDetail team={singleTeam} />
    } else {
      return <div> Loading ... </div>
    }
  }
  render() {
    return (
      <div>
        {this.renderDetail()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    singleTeam: state.team
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTeam: team }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleTeam);