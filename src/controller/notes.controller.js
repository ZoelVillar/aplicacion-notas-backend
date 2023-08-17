export const getNotes = (req, res) => {
  res.status(500).json({ mensaje: 'Notas obtenidas' })
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
