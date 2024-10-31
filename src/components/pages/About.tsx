import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../atoms/titles/TitlesCustom";

const About: React.FC = () => {
  return (
    <div className="container mt-5 mb-5">
      <Title
        level={2}
        color="custom-text-secondary"
        weight="bold"
        align="center"
        className="mb-4"
      >
        Acerca de Esta Aplicación
      </Title>
      <p>
        Bienvenido a nuestra aplicación de control de gastos personales. Este
        proyecto fue una prueba técnica que me brindó la oportunidad de
        sumergirme en el fascinante mundo del desarrollo web. A lo largo del
        proceso, tuve la oportunidad de aprender y aplicar nuevas tecnologías
        que han ampliado mis habilidades como desarrollador.
      </p>
      <p>
        Durante el desarrollo de esta aplicación, utilicé{" "}
        <strong className="custom-text-secondary">TypeScript</strong> para
        asegurarme de que el código fuera más robusto y fácil de mantener.
        Gracias a TypeScript, pude implementar tipos estrictos y mejorar la
        calidad general del proyecto. Esta experiencia me enseñó la importancia
        de la tipificación en el desarrollo de aplicaciones complejas.
      </p>
      <p>
        También incorporé{" "}
        <strong className="custom-text-secondary">Bootstrap</strong> para
        diseñar una interfaz de usuario atractiva y responsiva. La flexibilidad
        y la facilidad de uso de Bootstrap me permitieron centrarme en la
        funcionalidad de la aplicación sin sacrificar el diseño. Aprendí a crear
        componentes reutilizables y a optimizar el diseño para diferentes
        dispositivos.
      </p>
      <p>
        En resumen, desarrollar esta aplicación fue una experiencia muy
        enriquecedora. Estoy emocionado por seguir aprendiendo y mejorando mis
        habilidades en el desarrollo web. Espero que esta herramienta de control
        de gastos personales sea útil para muchos y ayude a los usuarios a
        gestionar sus finanzas de manera más efectiva.
      </p>
    </div>
  );
};

export default About;
