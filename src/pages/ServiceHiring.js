import "../pages/login.css";
import Header from "../layouts/Header";
import "../css/ServiceHiring.css";
import ContainedButton from "../components/buttons/ContainedButton";

function ServiceHiring() {
  return (
    <div>
      <Header />
      <section>
        <br />
        <br />
        <div className="service-border">
          <form>
            <div>
              <h1 className="title">Contratación de Servicios</h1>
            </div>
            <label className="subtitle">
              Negocio Solicitante:
              <br />
              <input
                type="text"
                placeholder="Nombre de tu Negocio"
                className="input"
              />
            </label>
            <br />
            <label className="subtitle">
              Características Generales:
              <br />
              <input
                type="password"
                placeholder="Descripción de tu Pedido"
                className="input"
              />
            </label>

            <ContainedButton/>

            <br />
            <br />
            
            
          </form>
        </div>
        <br />
        <br />
        
       

      </section>
      
    </div>
  );
}

export default ServiceHiring;

