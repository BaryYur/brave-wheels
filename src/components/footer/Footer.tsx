import { Container } from "../../components";
import { P } from "../../theme";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#49413A", color: "white", fontFamily: "sans-serif" }}>
      <Container>
        <div style={{ padding: "30px 0" }}>
          <P style={{ color: "white" }}>Footer</P>
        </div>
      </Container>
    </footer>
  );
}