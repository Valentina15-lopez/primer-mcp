import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {z} from "zod"

//1-Crear servidor 
// es la interfaz principal con el protocolo mcp.
//maneja la comunicacion entre el cliente (chatgpt,claude,etc) y el servidor
const server= new McpServer({name:"DEMO",version:"1.0.0"})
//2-Definir las herramientas
//Las herramientas le permiten a LLM realizar acciones atraves de tu servidor
server.tool("el tiempo",//titulo de la herramienta
 "Herramienta para saber el estado del tiempo",//descripcion de la herramienta
 {
    city:z.string().describe("city name") //parametros de la herramienta
 },
async({city})=>{
    // 1. Geolocalización
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`)
    const data= await response.json();
    if (data.results.length === 0)
        {
        return{
            content:[{type:"text",text:`No se encontro info para  ${city}`}]
        }
    }
    // 2. Extraer coordenadas

    const{latitude,longitude}=data.results[0];

  // 3. Obtener clima
    const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,is_day,rain&current_weather=true&forecast_days=1`
  );
    const weatherData=await weatherResponse.json();

  // 4. Devolver resultado al LLM

    return{
        content:[{type:"text",text: JSON.stringify(weatherData,null,2) }]
    }
}
)

//3-escuchar las conexiones del cliente

const transport=new StdioServerTransport()

server.connect(transport)


