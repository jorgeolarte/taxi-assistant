// import { generateText, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';
// import { z } from 'zod';
import type { CoreMessage } from 'ai';
// import { sendEmail } from '@/actions/sendEmail';

const TaxiSystem = 'Eres un asesor telefonico que ayuda a las personas a pedir un taxi.'
TaxiSystem.concat(' El asesor debe identificar la dirección de la persona.')
TaxiSystem.concat(' El asesor debe pedir el nombre y el correo electrónico de la persona.')
TaxiSystem.concat(' El asesor debe abstenerse de preguntar destino a donde va a ir.')
TaxiSystem.concat(' El asesor debe terminar la conversacion cuando obtenga la direccion del donde se encuentra ubicada la persona, el nombre de la persona y su correo electrónico.')
TaxiSystem.concat(' El asesor debe empezar la conversación con un saludo que diga "Hola, soy el asistente de IA 🤖 de Coomocart"')
TaxiSystem.concat(' El asesor debe terminar la conversación con un mensaje que diga "Gracias por elegirnos tu 🚕 llegara pronto"')

const LawerSystem = 'Actua como un consultor legal de la empresa Grupo GIE, que ayuda a las empresas a resolver problemas legales.'
LawerSystem.concat(' El consultor legal trabaja con las leyes Españolas y de la Unión Europea.')
LawerSystem.concat(' El consultor legal debe pedir el nombre de la empresa y el correo electrónico de la persona con quien se esta comunicando')
LawerSystem.concat(' El consultor legal debe terminar la conversación cuando resuelva la pregunta legal que se esta planteando.')
LawerSystem.concat(' El consultor legal debe empezar la conversacion con un saludo que diga "Hola, soy el asistente de IA 🤖 de Grupo Gie"')
LawerSystem.concat(' El consultor legal debe terminar la conversación con un mensaje que diga "Gracias por elegirnos, recuerda que tu confianza es nuestra garantia"')

export async function POST(req: Request) {
    const { messages, ...rest } = await req.json();

    console.log(rest.botType)

    let system = rest.botType === 'taxi' ? TaxiSystem : LawerSystem

    const groq = createOpenAI({
        baseURL: 'https://api.groq.com/openai/v1',
        apiKey: process.env.GROQ_API_KEY,
    });

    // const userPrompt = messages.filter((message: any) => message.role === 'user').map((message: any) => message.content).join(' ')

    // const testing = await generateText({
    //     model: groq('llama3-8b-8192'),
    //     tools: {
    //         taxi: tool({
    //             description: 'Send a taxi notification',
    //             parameters: z.object({
    //                 address: z.string({
    //                     description: 'The address where the person is located',
    //                     required_error: 'Please provide the address',
    //                 }).describe('La dirección donde se encuentra la persona'),
    //                 email: z.string().describe('El email de la persona'),
    //                 name: z.string().describe('El nombre de la persona'),
    //             }),
    //             execute: async ({ address, email, name }) => ({
    //                 address,
    //                 email,
    //                 name,
    //                 sendMail: sendEmail({ address, email, name }),
    //             }),
    //         }),
    //     },
    //     prompt: userPrompt,
    // });

    const result = await streamText({
        model: groq('llama3-8b-8192'),
        system,
        messages,
    });

    return new StreamingTextResponse(result.toAIStream());
}