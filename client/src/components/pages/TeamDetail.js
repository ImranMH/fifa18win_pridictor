import React from 'react'
import { Link } from 'react-router-dom';
const DisplayTeamDetail = (props) => {
  const {team} = props
  console.log(team)
  return (
    <div className="displayTeamDetail">
      <div className="teamSummery fc ">
        <div className="teamlit fc">
          <h2 className="top">Details Page</h2>
          <div className="teamflag">
            <img src={`/flags/${team.flag}.png`} alt={team.title} />

          </div>
          <div className="teaminfo">
            <h2 className="teaminfo_heading" > <Link to={`team/${team._id}`}> {team.title} </Link></h2>
            <h3 >Rangking:<strong>{team.ranking} </strong> </h3>
            <h3>Continent:<strong>{team.continent} </strong> </h3>
          </div>
          <div className="group"> <p>{team.group}</p> </div>
        </div>
        <div className="teamInfo fl_left">
          <h2>team Info</h2>
        </div>
        <div className="teamPlayer fl_right">
            <h2>Player list</h2>
            <ul>
              {
              team.players.map(player=>{
                return <PlayerList player={player}  />
              })
              }
            </ul>
        </div>
      </div>

    </div>
  )
}
export default DisplayTeamDetail;


const PlayerList = (props) => {
  const {player} = props
  return (
    <li>
      <Link to="" >{player.name}</Link>
      <div>{player.club}</div>
      <div>{player.age}</div>
    </li>
  )
}


