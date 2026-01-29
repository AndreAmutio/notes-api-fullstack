const repo = require('../repositories/noteRepository');

const getActiveNotes = () => repo.getActiveNotes();
const getArchivedNotes = () => repo.getArchivedNotes();
const createNote = (data) => repo.createNote(data);
const updateNote = (id, data) => repo.updateNote(id, data);
const archiveNote = (id, archived) =>
  repo.updateNote(id, { archived });
const deleteNote = (id) => repo.deleteNote(id);

module.exports = {
  getActiveNotes,
  getArchivedNotes,
  createNote,
  updateNote,
  archiveNote,
  deleteNote
};
