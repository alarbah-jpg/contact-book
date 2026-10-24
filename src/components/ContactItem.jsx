export default function ContactItem({ contact, onDelete }) {
  const { id, name, email, phone } = contact
  const initial = name.charAt(0).toUpperCase()

  return (
    <li className="contact">
      <div className="avatar" aria-hidden="true">
        {initial}
      </div>
      <div className="contact-info">
        <p className="contact-name">{name}</p>
        <p className="contact-detail">{email}</p>
        {phone && <p className="contact-detail">{phone}</p>}
      </div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(id)}
        aria-label={`Delete ${name}`}
      >
        Delete
      </button>
    </li>
  )
}
