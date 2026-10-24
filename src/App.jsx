import { useState } from 'react'
import ContactForm from './components/ContactForm.jsx'
import SearchBar from './components/SearchBar.jsx'
import ContactList from './components/ContactList.jsx'

// App is the single source of truth for contacts and the filter text.
export default function App() {
  const [contacts, setContacts] = useState([])
  const [filterText, setFilterText] = useState('')

  function addContact(newContact) {
    // Never mutate state: build a new array
    setContacts((prev) => [...prev, newContact])
  }

  function deleteContact(id) {
    setContacts((prev) => prev.filter((c) => c.id !== id))
  }

  const query = filterText.trim().toLowerCase()
  const visibleContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(query) ||
      c.email.toLowerCase().includes(query)
  )

  return (
    <div className="page">
      <header className="page-header">
        <h1>Contact Book</h1>
        <p className="subtitle">
          {contacts.length === 0
            ? 'Nothing saved yet'
            : `${contacts.length} saved ${contacts.length === 1 ? 'contact' : 'contacts'}`}
        </p>
      </header>

      <main className="layout">
        <section className="panel" aria-labelledby="add-heading">
          <h2 id="add-heading">Add a contact</h2>
          <ContactForm onAdd={addContact} />
        </section>

        <section className="panel" aria-labelledby="list-heading">
          <h2 id="list-heading">Your contacts</h2>
          <SearchBar value={filterText} onChange={setFilterText} />
          <ContactList
            contacts={visibleContacts}
            totalCount={contacts.length}
            filterText={filterText.trim()}
            onDelete={deleteContact}
          />
        </section>
      </main>
    </div>
  )
}
