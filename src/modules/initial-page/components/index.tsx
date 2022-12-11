import { useState } from "react";
import { Container } from "../../../shared/components/container";

import "./style.css";

export const InitialPage = () => {
    const [textLink, setTextLink] = useState("");

    const handleChangeTextLink = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextLink(event.target.value);
    }

    return (
        <Container>
            <main className="main-initial-page">
                <aside className="aside-left">
                    <h1>Faça reuniões por vídeo chamadas</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum id commodi aspernatur doloribus fugiat numquam molestiae impedit ipsam incidunt officia. Dolorem sunt voluptatibus tenetur nemo quis sequi rem cumque enim?</p>
                    <div className="buttons-links">
                        <button>Nova Reunião</button>
                        <input 
                            type="text" 
                            placeholder="Digite um código de link" 
                            onChange={handleChangeTextLink}
                            value={textLink} 
                        />
                        <button disabled={!textLink.length} onClick={() => console.log(textLink)}>Participar</button>
                    </div>
                </aside>
                <aside className="aside-right">
                    teste
                </aside>
            </main>
        </Container>
    );
}