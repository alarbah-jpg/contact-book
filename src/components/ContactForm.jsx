import { useState } from 'react'

const EMPTY = { name: '', email: '', phone: '' }

export default function ContactForm({ onAdd }) {
  // Controlled inputs: every value lives in state
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear the message for a field once the user edits it
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'Enter a name.'
    const email = values.email.trim()
    if (!email) next.email = 'Enter an email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = 'Enter a valid email, like name@example.com.'
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    onAdd({
      id: Date.now().toString(),
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
    })
    setValues(EMPTY)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p className="error" id="name-error" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p className="error" id="email-error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="phone">
          Phone <span className="optional">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="off"
          value={values.phone}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add contact
      </button>
    </form>
  )
}
