import { useEffect, useState } from "react";
import { Container, H2, Text } from "typetailui";
import { IStudent } from "./IStudent";
import Student from "./Student";
import { BACKEND_ENDPOINT } from "./common";

const sample = [
  { "id": "001", "name": "Alice Johnson" },
  { "id": "002", "name": "Bob Smith" }
]

const StudentList = () => {
  const [students, setStudents] = useState<IStudent[]>(sample);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`${BACKEND_ENDPOINT}/students`);
        if (!response.ok) throw new Error("Failed to fetch students");
        const data = await response.json();
        setStudents(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">
        {error}
      </p>
    );

  return (
    <Container className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <H2 className="text-2xl font-bold mb-4 text-center">Student List</H2>
      {students.length === 0
        ? <Text className="text-center text-gray-500">No students found.</Text>
        : <Container>
            {students.map((student: IStudent) =>
              <Student key={student.id} student={student} />
            )}
          </Container>}
    </Container>
  );
};

export default StudentList;
