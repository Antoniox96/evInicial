module.exports = {

	load: function(req, res, next) {
		Pregunta.findOne({ 
			where: { id: Number(req.params.PreguntaId) } 
		}).then(function(Pregunta) {
			if ( Pregunta ) {
				req.Pregunta = Pregunta;
				next();
			}
			else {
				next(new Error('No existe la pregunta con el Id: ' + req.params.PreguntaId + '.'));
			}
		}).catch(function(Error) { next(Error); });
	},

	CorregirRespuesta: function(req, res) {
		var RespuestaVal = (req.query.respuesta) ? req.query.respuesta : undefined, Resultado = 'Incorrecto';

		if ( req.Pregunta.respuesta == RespuestaVal ) {
			Resultado = 'Correcto';
		}

		res.json(Resultado);
	}

};