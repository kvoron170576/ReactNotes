export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <label htmlFor="phoneBookFilter">Find contacts by name</label>
      <input
        id="phoneBookFilter"
        type="text"
        value={filter}
        onChange={e => {
          onChangeFilter(e.currentTarget.value);
        }}
        placeholder="Start to type"
      />
    </div>
  );
};
