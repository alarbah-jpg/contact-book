export default function SearchBar({ value, onChange }) {
  return (
    <div className="field search">
      <label htmlFor="search">Search by name or email</label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start typing to filter"
      />
    </div>
  )
}
