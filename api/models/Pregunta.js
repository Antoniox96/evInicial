module.exports = {

  attributes: {

    pregunta : { type: 'string', size: 255, required: true },

    respuesta : { type: 'string', size: 255, required: true },
    
    cuestionarios: { collection: 'Cuestionario', via: 'preguntas' }

  }

};