const API_URL = 'http://localhost:3001/notes';

// Render Active Notes - Renderizar notas activas

function renderActiveNotes(notes) {
  const list = document.getElementById('active-notes');
  list.innerHTML = notes.map(n => `
    <div class="column is-one-third">
      <div class="note-card">
        <h3 class="title is-5">${n.title}</h3>
        <p>${n.content}</p>
        <div class="buttons mt-2">
          <!-- Edit button opens modal / Botón editar abre modal -->
          <button class="button is-small is-info"
            onclick="openEditModal(${n.id}, '${n.title}', '${n.content}')">
            Edit
          </button>
          <button class="button is-small is-warning"
            onclick="toggleArchive(${n.id}, true)">
            Archive
          </button>
          <button class="button is-small is-danger"
            onclick="deleteNote(${n.id})">
            Delete
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Archived Notes - Renderizar notas archivadas

function renderArchivedNotes(notes) {
  const list = document.getElementById('archived-notes');
  list.innerHTML = notes.map(n => `
    <div class="column is-one-third">
      <div class="note-card archived">
        <h3 class="title is-5">${n.title}</h3>
        <p>${n.content}</p>
        <div class="buttons mt-2">
          <button class="button is-small is-success"
            onclick="toggleArchive(${n.id}, false)">
            Unarchive
          </button>
          <button class="button is-small is-danger"
            onclick="deleteNote(${n.id})">
            Delete
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Load Notes - Cargar notas

async function loadNotes() {
  try {
    const res = await fetch(API_URL);
    const notes = await res.json();
    renderActiveNotes(notes);
  } catch (error) {
    showNotification('Error loading active notes / Error al cargar notas activas', 'is-danger');
    console.error(error);
  }
}

async function loadArchivedNotes() {
  try {
    const res = await fetch(`${API_URL}/archived`);
    const notes = await res.json();
    renderArchivedNotes(notes);
  } catch (error) {
    showNotification('Error loading archived notes / Error al cargar notas archivadas', 'is-danger');
    console.error(error);
  }
}

// Create Note - Crear nota

document.getElementById('note-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    showNotification('Please fill in title and content / Completa título y contenido', 'is-danger');
    return;
  }

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });

    titleInput.value = '';
    contentInput.value = '';

    showNotification('Note created successfully / Nota creada con éxito', 'is-success');
    loadNotes();
    loadArchivedNotes();
  } catch (error) {
    showNotification('Error creating note / Error al crear nota', 'is-danger');
    console.error(error);
  }
});

// Edit Note with Modal - Editar nota con modal

function openEditModal(id, currentTitle, currentContent) {
  document.getElementById('edit-title').value = currentTitle;
  document.getElementById('edit-content').value = currentContent;
  document.getElementById('edit-modal').classList.add('is-active');
  window.currentEditId = id; // store current note id / guardar id actual
}

function closeModal() {
  document.getElementById('edit-modal').classList.remove('is-active');
}

async function saveEdit() {
  const newTitle = document.getElementById('edit-title').value.trim();
  const newContent = document.getElementById('edit-content').value.trim();

  if (!newTitle || !newContent) {
    showNotification('Please fill in title and content / Completa título y contenido', 'is-danger');
    return;
  }

  try {
    await fetch(`${API_URL}/${window.currentEditId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, content: newContent })
    });

    showNotification('Note updated successfully / Nota actualizada con éxito', 'is-success');
    loadNotes();
    loadArchivedNotes();
    closeModal();
  } catch (error) {
    showNotification('Error updating note / Error al actualizar nota', 'is-danger');
    console.error(error);
  }
}

// Archive / Unarchive Note - Archivar / Desarchivar nota

async function toggleArchive(id, archived) {
  try {
    await fetch(`${API_URL}/${id}/archive`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ archived })
    });

    showNotification(
      archived ? 'Note archived / Nota archivada' : 'Note unarchived / Nota desarchivada',
      'is-info'
    );

    loadNotes();
    loadArchivedNotes();
  } catch (error) {
    showNotification('Error updating note status / Error al cambiar estado de nota', 'is-danger');
    console.error(error);
  }
}

// Delete Note - Eliminar nota

async function deleteNote(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

    showNotification('Note deleted / Nota eliminada', 'is-warning');
    loadNotes();
    loadArchivedNotes();
  } catch (error) {
    showNotification('Error deleting note / Error al eliminar nota', 'is-danger');
    console.error(error);
  }
}

// Notifications - Notificaciones

function showNotification(message, type = 'is-info') {
  const container = document.getElementById('notification-container');
  container.innerHTML = `
    <div class="notification ${type}">
      <button class="delete" onclick="this.parentElement.remove()"></button>
      ${message}
    </div>
  `;
}

// Init SPA - Inicializar SPA

window.addEventListener('DOMContentLoaded', () => {
  loadNotes();
  loadArchivedNotes();
});