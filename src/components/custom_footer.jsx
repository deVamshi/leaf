import React from "react";
import { Footer } from "flowbite-react";

function CustomFooter() {
  return (
    <Footer className="footer" container={true}>
      <Footer.Copyright
        href="#"
        by="Developed By Sagri Bengaluru Private Limited"
        className="bg-transparent"
      />
      <Footer.LinkGroup className="bg-transparent">
        <Footer.Link className="bg-transparent" href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default CustomFooter;
