import { generateText, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';
import { z } from 'zod';
import type { CoreMessage } from 'ai';
import { sendEmail } from '@/actions/sendEmail';

export async function POST(req: Request) {
    const { messages } = await req.json() as { messages: CoreMessage[] };

    let system = 'Eres un asesor telefonico que ayuda a las personas a pedir un taxi.'
    system += ' El asesor debe identificar la dirección de la persona.'
    system += ' El asesor debe pedir el nombre y el correo electrónico de la persona.'
    system += ' El asesor debe abstenerse de preguntar destino a donde va a ir.'
    system += ' El asesor debe terminar la conversacion cuando obtenga la direccion del donde se encuentra ubicada la persona, el nombre de la persona y su correo electrónico.'
    system += ' El asesor debe empezar la conversación con un saludo que diga "Hola, soy el asistente de IA 🤖 de Coomocart"'
    system += ' El asesor debe terminar la conversación con un mensaje que diga "Gracias por elegirnos tu 🚕 llegara pronto"'

    const groq = createOpenAI({
        baseURL: 'https://api.groq.com/openai/v1',
        apiKey: process.env.GROQ_API_KEY,
    });

    const userPrompt = messages.filter((message: any) => message.role === 'user').map((message: any) => message.content).join(' ')

    const testing = await generateText({
        model: groq('llama3-8b-8192'),
        tools: {
            taxi: tool({
                description: 'Send a taxi notification',
                parameters: z.object({
                    address: z.string({
                        description: 'The address where the person is located',
                        required_error: 'Please provide the address',
                    }).describe('La dirección donde se encuentra la persona'),
                    email: z.string().describe('El email de la persona'),
                    name: z.string().describe('El nombre de la persona'),
                }),
                execute: async ({ address, email, name }) => ({
                    address,
                    email,
                    name,
                    sendMail: sendEmail({ address, email, name }),
                }),
            }),
        },
        prompt: userPrompt,
    });

    const result = await streamText({
        model: groq('llama3-8b-8192'),
        system,
        messages,
    });

    return new StreamingTextResponse(result.toAIStream());
}