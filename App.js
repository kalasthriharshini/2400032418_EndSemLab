import React, { useState, useRef } from "react";

function App() {
  const [courses, setCourses] = useState([
    "Mathematics",
    "Physics",
    "Chemistry",
    "Computer Science",
    "Biology",
  ]);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    const listCopy = [...courses];
    const draggedItemContent = listCopy[dragItem.current];

    // Remove item
    listCopy.splice(dragItem.current, 1);
    // Insert item
    listCopy.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setCourses(listCopy);
  };

  return (
    <div style={{ margin: "40px" }}>
      <h2>Course List (Drag to Rearrange)</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {courses.map((course, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
            style={{
              padding: "12px",
              marginBottom: "10px",
              background: "#dcdcdc",
              borderRadius: "5px",
              cursor: "grab",
              fontSize: "18px",
            }}
          >
            {index + 1}. {course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
