import { TAGS } from '../lib/tags';

function FilterBar({ activeTags, onToggle }) {
  return (
    <div className="filter-bar">
      {TAGS.map((tag) => (
        <button
          key={tag.id}
          className={activeTags.includes(tag.id) ? 'filter-chip active' : 'filter-chip'}
          onClick={() => onToggle(tag.id)}
        >
          {tag.emoji} {tag.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;