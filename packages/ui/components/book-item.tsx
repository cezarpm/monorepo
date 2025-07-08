type Book = {
  id: number;
  title: string;
  author: string;
};

export const BookItem = ({ book }: { book: Book }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "8px",
        backgroundColor: "red",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ margin: "0 0 4px", color: "green" }}>{book.title}</h3>
      <p style={{ margin: 0, color: "black" }}>
        <strong>Autor:</strong> {book.author}aaa
      </p>
      <p style={{ margin: 0, fontSize: "0.85rem", color: "black" }}>
        <strong>ID:</strong> {book.id}
      </p>
    </div>
  );
};
