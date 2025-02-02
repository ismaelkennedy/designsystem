import React, { useState } from "react";
import Input from "./input";
import Checkbox from "./checkbox";
import Button from "./button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    agree: false,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agree: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert(`Name: ${formData.name}, Agreed: ${formData.agree}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#161717] p-6 max-w-md mx-auto space-y-4 border  rounded-lg shadow">
      <h1 className="font-inter text-3xl font-light text-white text-center">Inscription</h1>

      <Input
        label="Username"
        placeholder="Entrez votre username"
        value={formData.name}
        onChange={handleInputChange}
        className="w-full text-white"
      />
      <Input
        label="Email"
        placeholder="Entrez votre mail"
        value={formData.name}
        onChange={handleInputChange}
        className="w-full text-white"
      />
      <Input
        label="Password"
        placeholder="Entrez votre password"
        value={formData.name}
        onChange={handleInputChange}
        className="w-full text-white "
      />
      

      <Checkbox
        label="Je suis organisateur"
        checked={formData.agree}
        onChange={handleCheckboxChange}
      />

      <Checkbox
        label="Je suis participant"
        checked={formData.agree}
        onChange={handleCheckboxChange}
      />

      <Button 
        label="Se connecter" 
      />
    </form>
  );
};

export default Form;
