import { createOpenAI } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';

export async function POST(req: Request) {
    const { messages } = await req.json();

    let system = 'Eres un asesor telefonico que ayuda a las personas a pedir un taxi.'
    system += ' El asesor debe identificar la dirección de la persona.'
    system += ' El asesor debe abstenerse de preguntar información personal y destino de la carrera.'
    system += ' El asesor debe terminar la conversacion cuando obtenga la direccion del donde se encuentra ubicada la persona.'
    system += ' El asesor debe empezar la conversación con un saludo que diga "Hola, soy el asistente de IA 🤖 de Coomocart 🚕"'
    system += ' El asesor debe terminar la conversación con un mensaje que diga "Gracias por elegirnos tu 🚕 llegara pronto"'

    const groq = createOpenAI({
        baseURL: 'https://api.groq.com/openai/v1',
        apiKey: process.env.GROQ_API_KEY,
    });

    const result = await streamText({
        model: groq('llama3-8b-8192'),
        system,
        messages,
    });

    return new StreamingTextResponse(result.toAIStream());
}