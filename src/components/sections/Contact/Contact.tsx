import Section from "@/components/containers/section/Section";
import {fadeIn, flyRight, flyLeft} from "@/anim/animations";
import {motion} from "framer-motion";
import {MdEmail} from "react-icons/md";
import {BsFillSendFill} from "react-icons/bs";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser'
import {toast} from "react-toastify";

type Props = {}
export default function Contact ({}: Props) {
  const [loading, setLoading] = useState(false)

  const form  = useRef<any>('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.sendForm(
        'service_06ucv1i',
        'template_weiezvo',
        form.current,
        'ujWGQJntsXHdicI8X'
      )
      toast.success('Mensaje enviado correctamente')
      form.current.reset()
    } catch (e) {
      console.log(e)
      toast.error('Ocurrió un error al enviar el mensaje')
    } finally {
      setLoading(false)
    }

  }

  return (
    <Section className={'bg-gradient-to-b md:bg-gradient-to-r from-primary-focus to-secondary-focus'}>
      <div className='sm:w-full xl:w-8/12 2xl:w-7/12 px-3 py-5 mt-10 text-white' id='contact'>
        <motion.h2
          {...fadeIn}
          transition={{ delay: 0.3}}
        >
          Contactanos
        </motion.h2>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-2 mt-8'>
          <div className='flex flex-col'>
            <p className="text-lg font-semibold">
              Gracias por llegar hasta aquí, si deseas adquirir nuestro producto o tienes alguna duda o sugerencia puedes contactarnos a través del siguiente formulario. También puedes enviar un correo a tapredit.5@gmail.com
            </p>
            <a href="mailto:tapredit.5@gmail.com" className={'w-min'}>
              <MdEmail className='text-6xl text-white mt-4 hover:text-gray-200' />
            </a>
          </div>
          <form className='flex flex-col gap-4 text-neutral' onSubmit={handleSubmit} ref={form}>
            <input
              className='input input-bordered input-primary w-full'
              name='email'
              type='email'
              placeholder='Tu correo electrónico'
              required
            />
            <input
              className='input input-bordered input-primary w-full'
              name='subject'
              type='text'
              placeholder='Asunto'
              minLength={5}
              maxLength={50}
              required
            />
            <textarea
              className='textarea textarea-bordered textarea-primary w-full'
              name='message'
              placeholder='Mensaje'
              minLength={10}
              maxLength={500}
              required
            />
            <button className='btn btn-neutral w-full' type='submit' disabled={loading}>
              Enviar mensaje
              {loading
                ? (<span className="loading loading-dots loading-md"></span>)
                : (<BsFillSendFill className='inline-block ml-2' />)
              }
            </button>
          </form>
        </div>
      </div>
    </Section>
  )}