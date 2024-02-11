import React from "react";
import '@mui/material'
import useNoticias from "../hooks/useNoticias";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];
function Formulario() {
  
    const {categoria,handleChangeCategoria}=useNoticias();
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select label="Categoria" value={categoria} onChange={handleChangeCategoria}>
          {CATEGORIAS.map((opcion) => (
            <MenuItem key={opcion.value} value={opcion.value}>{opcion.label}</MenuItem>
          ))}
        </Select>
        

        
      </FormControl>
    </form>
  );
}

export default Formulario;
