import { Container, Text } from "typetailui";
import { IStudent } from "./IStudent";
interface StudentProps {
  student: IStudent;
}
export default function Student({ student }: StudentProps) {
  return (
    <Container key={student.id} className="p-4 hover:bg-gray-100 transition">
      <Text className="text-lg font-semibold">
        {student.name}
      </Text>
      <Text className="block text-sm text-gray-500">
        ID: {student.id}
      </Text>
    </Container>
  );
}
