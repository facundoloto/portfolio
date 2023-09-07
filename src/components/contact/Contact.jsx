import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import contactStyle from './contact.module.css';

export default function FormContact() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState([]);
    const onSubmit = data => setData(data);

    return (
        <div className={contactStyle.main}>
            <div className={contactStyle.flexChild}>

            </div>
            <div className={contactStyle.formContact + " " + contactStyle.flexChild} id="contact">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center">¡Envianos Un Mensaje!</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                        <Form.Control type="text" placeholder="name" required {...register("firstName")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="email" required {...register("email")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Control placeholder="mensaje" as="textarea" rows={6} required {...register("message")} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
            <div class="contacto text-light" id="contactarme">
                <div class="row center-link">
                    <div class="col-12 col-md-2"><a href="https://github.com/facundoloto" target="blank" class="text-dark" ><img src="src/assets/image/icons8-github-2-50.png" alt="" /></a></div>
                    <div class="col-12 col-md-2"><a href="mailto:lotofacundo6@gmail.com" target="blank" class="text-dark"><img src="src/assets/image/icons8-google-plus-50.png" alt="" /></a></div>
                    <div class="col-12 col-md-2"><a href="https://www.linkedin.com/in/facundo-emanuel-loto-496384177/" target="blank" class="text-dark"><img src="src/assets/image/icons8-linkedin-rodeado-de-círculo-50.png" alt="" /></a></div>
                </div>
                <p class="text-center">&copy; Copyright 2022 Facundo Loto</p>
            </div>
        </div>
    )
};