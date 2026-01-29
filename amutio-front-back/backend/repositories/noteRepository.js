const Note = require('../models/Note');

const getActiveNotes = () =>
  Note.findAll({ where: { archived: false } });

const getArchivedNotes = () =>
  Note.findAll({ where: { archived: true } });

const createNote = (data) => Note.create(data);
const updateNote = (id, data) => Note.update(data, { where: { id } });
const deleteNote = (id) => Note.destroy({ where: { id } });

module.exports = {
  getActiveNotes,
  getArchivedNotes,
  createNote,
  updateNote,
  deleteNote
};