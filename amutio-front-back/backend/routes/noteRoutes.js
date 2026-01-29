const router = require('express').Router();
const ctrl = require('../controllers/noteController');

router.get('/', ctrl.getNotes);
router.get('/archived', ctrl.getArchivedNotes);
router.post('/', ctrl.createNote);
router.put('/:id', ctrl.updateNote);
router.patch('/:id/archive', ctrl.archiveNote);
router.delete('/:id', ctrl.deleteNote);

module.exports = router;
