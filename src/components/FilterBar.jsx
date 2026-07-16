import { TAGS } from '../lib/tags';

function FilterBar({ activeTags, onToggle }) {
  return (
    <div className="filter-bar">
    <span className="filter-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
    <path
      d="M3 5 L21 5 L14 13 L14 19 L10 21 L10 13 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
    </span>
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