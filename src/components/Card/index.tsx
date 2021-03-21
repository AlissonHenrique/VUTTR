import Button from "../Button";
import { Container } from "./styles";

interface Tools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}
interface PropsCard {
  handleOpenModalRemove: (id: number) => void;
  tool: Tools;
}

export function Card({ handleOpenModalRemove, tool }: PropsCard) {
  return (
    <Container>
      <div className="card-header">
        <a href={tool.link} rel="noreferrer" target="_blank">
          {tool.title}
        </a>
        <Button colorType="red" onClick={() => handleOpenModalRemove(tool.id)}>
          Remove
        </Button>
      </div>
      <p>{tool.description}</p>
      <span>{tool.tags}</span>
    </Container>
  );
}
