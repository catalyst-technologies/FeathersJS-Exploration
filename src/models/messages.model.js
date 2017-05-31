module.exports = function (app) {
	const db = app.get('db_connection');
	db.schema.dropTableIfExists('messages').then(function(){
		console.log('Dropped messages table');
		return db.schema.createTable('messages',function(table){
			console.log('Creating messages table');
			table.increments('id');
			table.string('name');
			table.string('text');
		})
	})
	return db;
};
