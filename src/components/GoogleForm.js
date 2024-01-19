import { useState } from "react";
import { Drawer, FloatButton } from "antd";
import { FormOutlined } from "@ant-design/icons";
import "./GoogleForm.css";

function GoogleForm() {
  const [open, setOpen] = useState(false);
  return (
    <>
      
      <FloatButton className="FloatButton"
        icon={<FormOutlined/>}
        description="Autodiagnóstico"
        onClick={() => setOpen(true)}
      />

      <Drawer
        title="Autodiagóstico"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size="large"
      >
        <iframe
          title="Survey"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfUiR1zC_THd5D2RCXfbAzSEkMjt9C71b33631ZDR5eFyWhsw/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style={{ width: "100%", height: "calc(100% - 3px)" }}
        >
          Loading…
        </iframe>
      </Drawer>
    </>
  );
}

export default GoogleForm;