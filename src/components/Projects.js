// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Meu Site Pessoal',
            description: 'Meu portfólio online criado com React.js.',
            techStack: 'React.js, HTML, CSS',
            url: 'https://www.meusite.com'
        },
        {
            title: 'Site para contrato de serviços',
            description: 'Um website simples para contratar serviços de infraestrutura, desenvolvimento e entre outros.',
            techStack: 'React.js, HTML, CSS',
            url: 'https://github.com/Vitor96255/costs'
        },
        {
            title: 'Programa para busca de Cep',
            description: 'Um sistema simples para busca de CEP.',
            techStack: 'Spring boot, Kotlin',
            url: 'https://github.com/Vitor96255/BuscaCep'
        },
        {
            title: 'Jogo piano tiles',
            description: 'Jogo piano tiles utilizando pygame',
            techStack: 'Python',
            url: 'https://github.com/Vitor96255/Piano_tiles'
        },      
    ];

    return (
        <section className="projects-section">
            <h2>Projetos</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project-item" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tecnologias:</strong> {project.techStack}</p>
                        <p><a href={project.url} target="_blank" rel="noopener noreferrer">Ver Projeto</a></p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
