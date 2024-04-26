// src/components/About.js
import React from 'react';
import './About.css';
import myPhoto from '../images/my-photo.jpg'; // Importe sua foto (imagem)

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h2>Sobre Mim</h2>
                    <p>
                        Eu sou um desenvolvedor backend e estudante de ciências da computação.
                        Tenho experiência em Rest API, Nest js, Spring boot, Java, Ruby, banco de dados Postgress.
                        Estou sempre buscando aprender novas tecnologias e melhorar minhas habilidades.
                        Minha abordagem para o desenvolvimento de software é baseada na dedicação à qualidade e na
                        busca constante pela eficiência. Eu me sinto confortável trabalhando em equipes colaborativas,
                        onde posso contribuir com minhas ideias e aprender com colegas mais experientes.

                        Além de minhas habilidades técnicas, valorizo a resolução de problemas de forma criativa e
                        eficaz. Acredito na importância de entender os requisitos do usuário e traduzi-los em soluções
                        funcionais e robustas
                    </p>
                </div>
                <div className="about-photo">
                    <img src={myPhoto} alt="Minha Foto" />
                </div>
            </div>
        </section>
    );
};

export default About;
