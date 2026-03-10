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

import AnimateIn from './AnimateIn'
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
        
        e.preventDefault();

        const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
        });

        if (!res.ok) {
        throw new Error("Erro no servidor");
        }

        const data = await res.json();

        if (data.success) {
            successDiv.classList.add('cardShow')
            setTimeout(() => {
                successDiv.classList.remove('cardShow')
            }, 3000);
            setName('')
            setEmail('')
            setMessage('')
            document.querySelectorAll('form input, form textarea').forEach(input => input.value = '')
        } else {
            errorDiv.classList.add('cardShow')
            setTimeout(() => {
                errorDiv.classList.remove('cardShow')
            }, 3000);
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
            <AnimateIn delay={300}>
                <div className="mb-4">
                    <label 
                        htmlFor="name"
                        className="label"
                    >
                        Nome
                    </label>

                    <input 
                        required
                        type="text" 
                        id="name"
                        name="name" 
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        className="text-field"
                    />
                </div>
            </AnimateIn>

            <AnimateIn delay={300}>
                <div className="mb-4">
                    <label 
                        htmlFor="email"
                        className="label"
                    >
                        Email
                    </label>

                    <input 
                        required
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="seuemail@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        className="text-field"
                    />
                </div>
            </AnimateIn>
        </div>

        <AnimateIn delay={400}>
            <div className="mb-4">
                <label 
                    htmlFor="message" 
                    className="label"
                >
                    Message
                </label>

                <textarea 
                    required
                    id="message"
                    name="message"
                    placeholder="Olá!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    autoComplete="off"
                    className="text-field resize-y min-h-32 max-h-80"
                >

                </textarea>
            </div>
        </AnimateIn>

        <AnimateIn delay={500}>
            <button 
                type="submit" 
                className="btn btn-primary !max-w-full w-full justify-center hover:cursor-pointer"
            >
                Enviar
            </button>
        </AnimateIn>

    </form>
  )
}

export default ContactForm