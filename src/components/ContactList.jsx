import ContactItem from './ContactItem.jsx'

export default function ContactList({ contacts, totalCount, filterText, onDelete }) {
  // Conditional rendering: empty state vs. no matches vs. the list
  if (totalCount === 0) {
    return <p className="empty">No contacts yet. Add one above!</p>
  }

  if (contacts.length === 0) {
    return <p className="empty">No matches found for ‘{filterText}’</p>
  }

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  )
}
