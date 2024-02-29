export const ContactList = ({ items, deleteContact }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}: </span> <span>{number}</span>
            <button
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
