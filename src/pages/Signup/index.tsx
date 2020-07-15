import React, { useCallback, useRef } from 'react'
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Link, useHistory } from 'react-router-dom'

import {
   Container,
   Content,
   Background,
   AnimatedContainer,
} from './styles'
import { useToast } from '../../hooks/Toast'
import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import getValidationErrors from '../../utlitarios/getValidationsErros'

interface SignupFormData {
   name: string
   email: string
   password: string
}

const Signup: React.FC = () => {
   const formRef = useRef<FormHandles>(null)
   const { addToast } = useToast()
   const history = useHistory()

   const handleSubimit = useCallback(async (data: SignupFormData) => {
      try {
         const schema = Yup.object().shape({
            name: Yup.string().required('Nome para cadastro é obrigatório!'),
            email: Yup.string().required('E-mail para cadastro é obrigatório!').email('Digíte um e-mail válido!'),
            password: Yup.string().min(6, 'Senha tem que ter no mínimo com 6 digitos!'),
         })
         await schema.validate(data, {
            abortEarly: false
         })
         await api.post('/users', data)
         history.push('/')
         addToast({
            type: 'sucess',
            title: 'Cadastro realizado!',
            description: 'Você já pode realizar seu login no GoBarber!',
         })
      } catch (e) {
         if (e instanceof Yup.ValidationError) {
            const errors = getValidationErrors(e)
            formRef.current?.setErrors(errors)
            return
         }
         addToast({
            type: 'error',
            title: 'Erro no cadastro!',
            description: 'Ocorreu um erro ao fazer o cadastro, tente novamente!',
         })
      }
   }, [addToast, history])

   return (
      <Container>
         <Background />
         <Content>
            <AnimatedContainer>
               <img
                  src={logoImg}
                  alt='GoBarber'
               />
               <Form ref={formRef} onSubmit={handleSubimit} >
                  <h1>Faça seu cadastro</h1>
                  <Input
                     name='name'
                     icon={FiUser}
                     placeholder='Digite seu nome...'
                  />
                  <Input
                     name='email'
                     icon={FiMail}
                     placeholder='Digite seu e-mail...'
                  />
                  <Input
                     name='password'
                     icon={FiLock}
                     placeholder='Digite sua senha...'
                     type='password'
                  />
                  <Button type='submit' >
                     Cadastrar
               </Button>
               </Form>
               <Link to='/' >
                  <FiArrowLeft size={16} />
                  Voltar para login!
            </Link>
            </AnimatedContainer>
         </Content>
      </Container>
   )
}


export default Signup
