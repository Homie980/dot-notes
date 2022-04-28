import SidebarWithHeader from "./components/Sidebar";
import Note from "./components/Note";
import notes from "./data";
function App() {
  return (
    <>
      <SidebarWithHeader
      // children={notes.map((note) => (
      //   <Note
      //     title={note.title}
      //     heading={note.heading}
      //     content={note.content}
      //     key={note.key}
      //   />
      // ))}
      />
    </>
  );
}

export default App;
