export default function FilterDropdown({ selectedType, onChange }) {
    return (
      <select
        className="border p-2 rounded mb-4"
        value={selectedType}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
    );
  }
  