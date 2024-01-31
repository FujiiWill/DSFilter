/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./styles.css";

type FormData = {
  min?: number;
  max?: number;
}

type Props = {
  onFilter: Function;
}

export default function FilterCard({onFilter}: Props) {

  const [formData, setFormData] = useState<FormData>({})

  function handleInputChange(event: any){
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value})
  }

  function handleSubmit (event: any){
    event.preventDefault();
    setFormData(formData);
    onFilter(formData.min, formData.max)
  }

  return (
    <section className="filter-card container dsf-mt20 dsf-mb20">
      <form className="filter-container" onSubmit={handleSubmit}>
        <input 
          name="min"
          value={formData.min || ""}
          className="dsf-mb20" 
          type="text" 
          placeholder="Preço minimo"
          onChange={handleInputChange}
        />
        <input 
          name="max" 
          value={formData.max || ""}
          className="dsf-mb20" 
          type="text" 
          placeholder="Preço máximo" 
          onChange={handleInputChange}
        />
        <button className="button" type="submit">Filtrar</button>
      </form>
    </section>
  );
}
