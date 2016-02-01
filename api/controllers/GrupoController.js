module.exports = {
	load: function(req, res, next) {
		Grupo.findOne().where( { id: Number(req.params.GrupoId) }
		).populate('alumnos').then(function(Grupo) {
			if (Grupo) {
				req.Grupo = Grupo;
				next();
			}
			else {
				next(new Error('No existe el Grupo con el Id: ' + req.params.GrupoId + '.'));
			}
		}).catch(function(Error) { next(Error); });
	}
};