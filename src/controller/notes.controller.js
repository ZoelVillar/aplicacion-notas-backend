const notas = [
  {
    id: 1,
    titulo: 'Nota 1',
    contenido: 'Contenido de la nota 1'
  },
  {
    id: 2,
    titulo: 'Nota 2',
    contenido: 'Contenido de la nota 2'
  },
  {
    id: 3,
    titulo: 'Nota 3',
    contenido: 'Contenido de la nota 3'
  }
]

export const getNotes = (req, res) => {
  res.send(notas)
}

export const getNote = (req, res) => {
  res.status(500).json({ mensaje: 'Nota obtenida' })
}

export const createNote = (req, res) => {
  res.status(500).json({ mensaje: 'Nota creada' })
}

export const updateNote = (req, res) => {
  res.status(500).json({ mensaje: 'Nota actualizada' })
}

export const deleteNote = (req, res) => {
  res.status(500).json({ mensaje: 'Nota eliminada' })
}
