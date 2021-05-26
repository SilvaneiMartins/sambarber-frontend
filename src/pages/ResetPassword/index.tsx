import React, { useCallback, useRef } from "react";
import { FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useHistory, useLocation } from "react-router-dom";

import { Container, Content, Background, AnimatedContainer } from "./styles";

import { useToast } from "../../hooks/Toast";
import logoImg from "../../assets/logo/logoR.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import getValidationErrors from "../../utlitarios/getValidationsErros";
import api from "../../services/api";

interface ResetPasswordFormData {
    password: string;
    password_confirmation: string;
}

const ResetPassword: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const history = useHistory();
    const location = useLocation();

    const handleSubimit = useCallback(
        async (data: ResetPasswordFormData) => {
            try {
                const schema = Yup.object().shape({
                    password: Yup.string().required(
                        "A nova senha é obrigatório!"
                    ),
                    password_confirmation: Yup.string().oneOf(
                        [Yup.ref("password"), null],
                        "Confirmação de senha estão incorreta!"
                    ),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                const { password, password_confirmation } = data;
                const token = location.search.replace("?token=", "");

                if (!token) {
                    throw new Error();
                }

                await api.post("/password/resert", {
                    password,
                    password_confirmation,
                    token,
                });

                history.push("/");
            } catch (e) {
                if (e instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(e);
                    formRef.current?.setErrors(errors);
                    return;
                }

                addToast({
                    type: "error",
                    title: "Erro ao resetar senha",
                    description:
                        "Ocorreu um erro ao resetar sua senha, tente novamente!",
                });
            }
        },
        [addToast, history, location.search]
    );

    return (
        <Container>
            <Content>
                <AnimatedContainer>
                    <img src={logoImg} alt="Rondosoft" />

                    <Form ref={formRef} onSubmit={handleSubimit}>
                        <h1>Resetar a senha</h1>

                        <Input
                            name="password"
                            icon={FiLock}
                            placeholder="Digite sua nova senha..."
                            type="password"
                        />

                        <Input
                            name="password_confirmation"
                            icon={FiLock}
                            placeholder="Digite a senha para confirmar..."
                            type="password"
                        />

                        <Button type="submit">Alterar sua senha</Button>
                    </Form>
                </AnimatedContainer>
            </Content>

            <Background />
        </Container>
    );
};

export default ResetPassword;
