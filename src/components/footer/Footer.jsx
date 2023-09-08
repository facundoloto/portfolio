import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import footerStyle from "./footer.module.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
    return (
        <MDBFooter className={'text-center text-lg-start ' + " " + footerStyle.bg} >
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Facundo Loto:</span>
                </div>

                <div>
                    <a href="mailto:lotofacundo6@gmail.com" target="blank" className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='www.linkedin.com/in/facundo-loto-496384177' target="blank" className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href="https://github.com/facundoloto" target="blank" className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>
        </MDBFooter >
    );
}