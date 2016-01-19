/**
* Cuestionario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    observaciones : { type: 'string' },

    fechaFin : { type: 'date' },

    preguntas: { collection: 'Pregunta', via: 'cuestionarios' },

    alumnos: { collection: 'Alumno', via: 'cuestionarios' },

    duplicar: function(cb) {
    	cuestionarioJSON = this.toJSON();
	    delete cuestionarioJSON['id'];
		Cuestionario.create(cuestionarioJSON).exec(function createCB(err, created) {
	      	if(err) return cb(err);
	      		/*Cuestionario.preguntas.forEach(function (pregunta) {
	      			created.preguntas.add(pregunta.id)
	      		}); */
			cb(null, created);

   		})
    },

    asociarGrupo: function(grupo, cb) {
		while (grupo.alumnos.length){
			this.alumnos.add(grupo.alumnos.pop());
			this.save(console.log);
	  	}
		cb(null);
	}

  },

  duplicar: function (cuestionario, cb) {

	  (function _lookupCuestionarioIfNecessary(afterLookup){
	    // (this self-calling function is just for concise-ness)
	    if (typeof cuestionario === 'object') return afterLookup(null, cuestionario);
	    Cuestionario.findOne(cuestionario).populate('preguntas').exec(afterLookup);
	  })(function (err, cuestionario){
	    if (err) return cb(err);
	    if (!cuestionario) {
	      err = new Error();
	      err.message = require('util').format('No hay ningun cuestionario con el id: id=%s', cuestionario);
	      err.status = 404;
	      return cb(err);
	    }

	    cuestionarioJSON = cuestionario.toJSON();
	    delete cuestionarioJSON['id'];
		Cuestionario.create(cuestionarioJSON).exec(function createCB(err, created) {
	      	if(err) return cb(err);
	      		/*Cuestionario.preguntas.forEach(function (pregunta) {
	      			created.preguntas.add(pregunta.id)
	      		}); */
			cb(null, created);

   		})

	  });

	}

}