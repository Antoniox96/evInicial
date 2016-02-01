module.exports = {
	load: function(req, res, next) {
		Cuestionario.findOne().where( { id: Number(req.params.CuestionarioId) }
		).populate('preguntas').then(function(Cuestionario) {
			if ( Cuestionario ) {
				req.Cuestionario = Cuestionario;
				next();
			}
			else {
				next(new Error('No existe el Cuestionario con el Id: ' + req.params.CuestionarioId + '.'));
			}
		}).catch(function(Error) { next(Error); });
	},

	Duplicar: function(req, res, next) {
		/*
		Cuestionario.duplicar(req.Cuestionario, function (err, CuestionarioDuplicado) { 
			res.json(CuestionarioDuplicado);
		});
		*/

		req.Cuestionario.duplicar(function (err, CuestionarioDuplicado) { 
			res.json(CuestionarioDuplicado);
		});
	},

	AsociarGrupo: function(req, res, next) {
		req.Cuestionario.asociarGrupo(req.Grupo, function (err, CuestionarioDuplicado) { 
			res.json(CuestionarioDuplicado);
		});
	}

};