import "../pages/login.css";
import Header from "../layouts/Header";
import "../css/ServiceHiring.css";
import ContainedButton from "../components/buttons/ContainedButton";
import HandshakeIcon from '@mui/icons-material/Handshake';
import { alignProperty } from "@mui/material/styles/cssUtils";
import { AlignCenterOutlined } from "@ant-design/icons";

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
            <div>
            <label className="subtitle">
              Negocio Solicitante:
              <br />
              <input
                type="text"
                placeholder="Nombre de tu Negocio"
                className="input-business-name"
              />
            </label>
            <br />
            <label className="subtitle">
              Características Generales:
              <br />
              <input
                type="password"
                placeholder="Descripción de tu Pedido"
                className="input-features"
              />
            </label>
            </div>
            <div>
            <ContainedButton
              text={"Contratar Servicio"}
              startIcon={<HandshakeIcon/>}
            />
          </div>


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

