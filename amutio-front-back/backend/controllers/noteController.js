const service = require('../services/noteService');

const getNotes = async (_, res) =>
  res.json(await service.getActiveNotes());

const getArchivedNotes = async (_, res) =>
  res.json(await service.getArchivedNotes());

/*const createNote = async (req, res) =>
  res.json(await service.createNote(req.body));*/

const createNote = async (req, res) => {
  try {
    console.log('BODY:', req.body); // 👀 Ver qué llega
    const note = await service.createNote(req.body);
    res.json(note);
  } catch (error) {
    console.error('Error al crear nota:', error);
    res.status(500).json({ error: 'Error al crear la nota' });
  }
};

const updateNote = async (req, res) => {
  await service.updateNote(req.params.id, req.body);
  res.json({ message: 'Updated' });
};

const archiveNote = async (req, res) => {
  await service.archiveNote(req.params.id, req.body.archived);
  res.json({ message: 'Archived status updated' });
};

const deleteNote = async (req, res) => {
  await service.deleteNote(req.params.id);
  res.json({ message: 'Deleted' });
};

module.exports = {
  getNotes,
  getArchivedNotes,
  createNote,
  updateNote,
  archiveNote,
  deleteNote
};
