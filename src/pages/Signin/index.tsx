import React, { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import { Container, Content, Background, AnimatedContainer } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/Auth";
import { useToast } from "../../hooks/Toast";
import logoImg from "../../assets/logo/logoR.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import getValidationErrors from "../../utlitarios/getValidationsErros";

interface SigninFormData {
    email: string;
    password: string;
}

const Signin: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { signin } = useAuth();
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubimit = useCallback(
        async (data: SigninFormData) => {
            try {
                const schema = Yup.object().shape({
                    email: Yup.string()
                        .required("Seu usuário é obrigado!")
                        .email("Digíte um usuário valido!"),
                    password: Yup.string().required("A senha é obrigatório!"),
                });
                await schema.validate(data, {
                    abortEarly: false,
                });
                await signin({
                    email: data.email,
                    password: data.password,
                });
                history.push("/dashboard");
            } catch (e) {
                if (e instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(e);
                    formRef.current?.setErrors(errors);
                    return;
                }
                addToast({
                    type: "error",
                    title: "Erro na autenticação",
                    description:
                        "Ocorreu um erro ao fazer login, entre em contato com o administrador do sistema!",
                });
            }
        },
        [signin, addToast, history]
    );

    return (
        <Container>
            <Content>
                <AnimatedContainer>
                    <img src={logoImg} alt="Rondosoft" />

                    <Form ref={formRef} onSubmit={handleSubimit}>
                        <h1>Faça seu login</h1>

                        <Input
                            name="email"
                            icon={FiMail}
                            placeholder="Digite nome de usuário..."
                        />

                        <Input
                            name="password"
                            icon={FiLock}
                            placeholder="Digite sua senha..."
                            type="password"
                        />

                        <Button type="submit">Entrar</Button>

                        {/* <Link to="/forgot-password">Esqueci minha senha</Link> */}
                    </Form>

                    {/* <Link to="/signup">
                        <FiLogIn size={16} />
                        Criar Conta
                    </Link> */}
                </AnimatedContainer>
            </Content>

            <Background />
        </Container>
    );
};

export default Signin;
