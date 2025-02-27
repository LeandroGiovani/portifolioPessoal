// Copyright 2025 LeandroGiovani

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import axios from 'axios'

const ContactForm = () => {
    const successDiv = document.querySelector('#divCards .success')
    const errorDiv = document.querySelector('#divCards .error')
    const form = useRef()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const serviceId = 'service_djwfdof'
        const templateId = 'template_g4nk4qg'
        const publicKey = 'BeP_E7EMCzvlzf8oL'

        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Leandro',
                message: message,
            }
        }

        try{
            const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
            console.log(res.data)
            setName('')
            setEmail('')
            setMessage('')
            successDiv.classList.add('cardShow')
            setTimeout(() => {
                successDiv.classList.remove('cardShow')
            }, 2600)
        } catch (error){
            console.error(error)
            errorDiv.classList.add('cardShow')
            setTimeout(() => {
                errorDiv.classList.remove('cardShow')
            }, 2600)
        }

    }

  return (
    <form 
        action=""
        method="POST"
        className="xl:pl-10 2xl:pl-20"
        ref={form}
        onSubmit={handleSubmit}
    >

        <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
                <label 
                    htmlFor="name"
                    className="label reveal-up"
                >
                    Nome
                </label>

                <input 
                    required
                    type="text" 
                    name="name" 
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-field reveal-up"
                />
            </div>

            <div className="mb-4">
                <label 
                    htmlFor="email"
                    className="label reveal-up"
                >
                    Email
                </label>

                <input 
                    required
                    type="email" 
                    name="email" 
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-field reveal-up"
                />
            </div>
        </div>

        <div className="mb-4">
            <label 
                htmlFor="message" 
                className="label reveal-up"
            >
                Message
            </label>

            <textarea 
                required
                name="message" 
                placeholder="Olá!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-field resize-y min-h-32 max-h-80 reveal-up"
            >

            </textarea>
        </div>

        <button 
            type="submit" 
            className="btn btn-primary !max-w-full w-full justify-center hover:cursor-pointer reveal-up"
        >
            Enviar
        </button>

    </form>
  )
}

export default ContactForm