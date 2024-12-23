import React from "react";

interface FormViewTemplateProps {
  children: React.ReactNode;
}

const FormViewTemplate: React.FC<FormViewTemplateProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative w-full max-w-md p-8 rounded-[24px] bg-neutral">
        <h1 className="text-4xl text-primary font-bold mb-6 text-center">Didakta</h1>
        <h2 className="text-2xl mb-6 text-center">Credenciamento</h2>
        {children}
      </div>
    </div>
  );
};

export default FormViewTemplate;
