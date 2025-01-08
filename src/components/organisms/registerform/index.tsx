import React, { useState } from "react";
import FormField from "../../molecules/formfield";
import FormOrganism from "../form";
import { RegisterCredentials } from "../../../services/auth/auth.usecase";

interface RegisterFormOrganismProps {
  onRegister: (credentials: RegisterCredentials) => void;
}

const RegisterFormOrganism: React.FC<RegisterFormOrganismProps> = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister({ fullname: name, password, email, cpf });
  };

  return (
    <FormOrganism
      onSubmit={handleSubmit}
      submitText="Registrar"
      footer={
        <div className="flex flex-col items-center gap-2">
          <label className="text-sm">&#169; 2024 <b>Project</b> - Todos os direitos reservados</label>
        </div>
      }
    >
        

        <FormField
            type="email"
            placeholder="E-mail"
            value={ email }
            onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
            type="password"
            placeholder="Senha"
            value={ password }
            onChange={(e) => setPassword(e.target.value)}
        />
        <FormField
            type="name"
            placeholder="Nome completo"
            value={ name }
            onChange={(e) => setName(e.target.value)}
        />
        <FormField
            type="cpf"
            placeholder="Cpf"
            value={ cpf }
            onChange={(e) => setCpf(e.target.value)}
        />

    </FormOrganism>
  );
};

export default RegisterFormOrganism;
