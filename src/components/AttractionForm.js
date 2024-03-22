function AttractionForm({ onSubmit, onChange }) {
  return (
    <form className="attraction-form" onSubmit={onSubmit}>
      <label htmlFor="attractionInput">
        Search an Irish Attraction by name
      </label>
      <input id="attractionInput" type="text" onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default AttractionForm;
