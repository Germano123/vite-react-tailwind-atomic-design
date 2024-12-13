import React from "react";
import ButtonAtom from "../../atoms/button";
import ImageAtom from "../../atoms/image";
import IconButton from "../../molecules/iconbutton";
import Breadcrumbs from "../../molecules/breadcrumbs";

const HomePage: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Produtos", href: "/produtos" },
    { label: "Eletrônicos", href: "/produtos/eletronicos" },
    { label: "Smartphones" }, // Último item, sem link
  ];

  return (
    <div className="pr-8 w-full h-screen
    flex gap-[20px]">
      <div className="grow-[4]
      pt-4 px-4
      flex flex-col items-center gap-4
      bg-vague">
        <div className="w-full">
          <ImageAtom
          src="/Brand.png"
          alt="Brand"
          className="flex-start"
          />
        </div>
        <p className="font-bricolage">Informações</p>

        <div className="p-4 w-fit
        flex flex-col items-center gap-4
        rounded-md
        shadow-lg
        bg-white">
          <div className="flex flex-col items-center">
            <p className="font-bricolage font-bold text-md">6º Ano Fundamental</p>
            <p className="font-bricolage text-sm text-[#8B9CA8]">Turno: Matutino</p>
            <p className="font-bricolage text-sm text-[#8B9CA8]">Previsão de Início: 02/02/2025</p>
            <p className="font-bricolage text-sm text-[#8B9CA8]">Previsão de Término: 20/12/2025</p>
          </div>

          <ButtonAtom
          text="Ver lista de alunos"
          size="full"
          onClick={ () => {} }
          />

          <IconButton 
          icon="/icon-download.png"
          alt="Download icon"
          text="Matriz curricular"
          size="full"
          onClick={ () => {} }
          />

        </div>

        <ButtonAtom
        className="bg-[#AED5FF]"
        size="full"
        text="Acessar turma"
        onClick={ () => {} }
        />
      </div>

      <div className="grow-[10] px-4
      pt-20
      flex flex-col items-center justify-start gap-10
      bg-white">
        <p className="text-3xl font-bricolage font-bold">Criar Plano de aula</p>
        
        <div className="p-8 w-full
        flex flex-col items-center
        rounded-lg
        bg-vague">
          <p>Olá Sávio Silva,</p>
          <p>Estou aqui para te ajudar a montar o plano de aula perfeito para seus alunos!</p>
          <p>Para comerçarmos, preciso que você me forneça algumas informações:</p>
        </div>

        <Breadcrumbs items={breadcrumbItems} separator=">" />
      </div>
    </div>
  );
};

export default HomePage;
