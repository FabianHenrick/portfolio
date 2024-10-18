import { ButtonContact } from "../../Components/Header/styles";
import { SectionContent } from "./style";

export function Home() {
  return (
    <SectionContent>
      <div>
        <div>
          <h1>
            TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL<span>.</span>
          </h1>
          <p>
            Criatividade e inovação andam lado a lado. Com uma combinação única
            de design impactante, funcionalidade intuitiva e otimização para
            resultados, estou pronto para criar a presença online dos seus
            sonhos.
          </p>
          <a href="#">
            <ButtonContact>Entre em contato</ButtonContact>
          </a>
        </div>
        <div>
          <img
            src="https://placehold.co/450x450/png"
            alt="Logo Fabian Henrick"
          />
        </div>
      </div>
    </SectionContent>
  );
}
