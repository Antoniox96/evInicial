module.exports = {

  attributes: {

    anyo : { type: 'string', size: 7, required: true },

    grupo : { type: 'string',  size: 5, required: true },

    subgrupo : { type: 'string',  size: 5, required: true },

    ensenanza: { type: 'string',  size: 80 },

    curso: { type: 'integer', size: 11 },

    alumnos: { collection: 'Alumno', via: 'grupo' }

  }

};