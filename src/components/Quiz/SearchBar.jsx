export const SearchBar = ({ level, topic, onChangeTopic, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={e => {
          onChange(e.currentTarget.value, 'topic');
        }}
        placeholder="Topic Filter"
      />
      <select
        value={level}
        onChange={e => {
          onChange(e.currentTarget.value, 'level');
        }}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};
