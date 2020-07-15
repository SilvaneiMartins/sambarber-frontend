import React, { useCallback, useRef, useState } from 'react'
import { FiLogIn, FiMail } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import {
   Container,
   Content,
   Background,
   AnimatedContainer,
} from './styles'
import { useToast } from '../../hooks/Toast'
import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import getValidationErrors from '../../utlitarios/getValidationsErros'
import api from '../../services/api'

interface ForgotPasswodFormData {
   email: string
   password: string
}

const ForgotPasswod: React.FC = () => {
   const [loading, setLoading] = useState(false)

   const formRef = useRef<FormHandles>(null)
   const { addToast } = useToast()
   // const history = useHistory()

   const handleSubimit = useCallback(async (data: ForgotPasswodFormData) => {
      try {
         setLoading(true)

         formRef.current?.setErrors({})

         const schema = Yup.object().shape({
            email: Yup.string().required('E-mail é obrigatório!').email('Digíte um e-mail válido!'),
         })
         await schema.validate(data, {
            abortEarly: false
         })

         await api.post('/password/forgot', {
            email: data.email,
         })

         addToast({
            type: 'sucess',
            title: 'E-mail de recuperaçãoe enviado',
            description: 'Enviamos um e-mail oara confirmar a recuperação de senha, cheque sua caixa de entrada!',
         })

         // history.push('/dashboard')
      } catch (e) {

         if (e instanceof Yup.ValidationError) {
            const errors = getValidationErrors(e)
            formRef.current?.setErrors(errors)
            return
         }

         addToast({
            type: 'error',
            title: 'Erro na recuperação de senha',
            description: 'Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente!',
         })

      } finally {
         setLoading(false)
      }

   }, [addToast])

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
                  <h1>Recuperar Senha</h1>

                  <Input
                     name='email'
                     icon={FiMail}
                     placeholder='Digite seu e-mail...'
                  />

                  <Button
                     loading={loading}
                     type='submit'
                  >
                     Recuperar Senha
                  </Button>

               </Form>

               <Link to='/' >
                  <FiLogIn size={16} />
				      Voltar ao Login
			      </Link>

            </AnimatedContainer>
         </Content>

      </Container>
   )
}


export default ForgotPasswod
