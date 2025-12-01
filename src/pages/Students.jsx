import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching student data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading students...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Student Introductions</h1>

      {students.map((student, index) => {
        const fullName = `${student.name.preferred || student.name.first} ${student.name.last}`;

        return (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
              background: "#f9f9f9",
            }}
          >
            <h2 style={{ marginBottom: "5px" }}>{fullName}</h2>
            <p><strong>Email Prefix:</strong> {student.prefix}</p>
            <p><strong>Mascot:</strong> {student.mascot}</p>

   
            {student.media?.hasImage && (
              <img
                src={`https://dvonb.xyz${student.media.src}`}
                alt={student.name.preferred}
                style={{ width: "250px", borderRadius: "8px", marginTop: "10px" }}
              />
            )}

         
            <h3>Background</h3>
            <p><strong>Personal: </strong>{student.backgrounds?.personal}</p>
            <p><strong>Professional: </strong>{student.backgrounds?.professional}</p>
            <p><strong>Academic: </strong>{student.backgrounds?.academic}</p>
            <p><strong>Subject Interest: </strong>{student.backgrounds?.subject}</p>

     
            <h3>Courses</h3>
            <ul>
              {student.courses?.map((course, i) => (
                <li key={i}>
                  <strong>{course.code}</strong> — {course.name}
                  <br />
                  <em>{course.reason}</em>
                </li>
              ))}
            </ul>

      
            <h3>Personal Statement</h3>
            <p>{student.personalStatement}</p>

            {/* Quote */}
            {student.quote?.text && (
              <>
                <h3>Favorite Quote</h3>
                <blockquote>
                  "{student.quote.text}" — <strong>{student.quote.author}</strong>
                </blockquote>
              </>
            )}

     
            <p><strong>Fun Fact:</strong> {student.funFact}</p>


            <h3>Links</h3>
            <ul>
              {Object.entries(student.links || {}).map(([key, value]) => (
                <li key={key}>
                  <a href={value} target="_blank" rel="noreferrer">
                    {key.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
