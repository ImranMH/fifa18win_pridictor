
module.exports = function(mongoose) {

const PlayerSchema = require('../schema/player.schema')(mongoose)

const PlayerModel = mongoose.model('Player', PlayerSchema);

	let api = {
	addTeam,
	updateTeam,
}
return api;

	/*apis functtions ......................*/
	function addTeam(){

	}
	function updateTeam(){
		
	}

}