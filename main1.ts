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
    return{
        content:[{type:"text",text:`El clima de ${city} es soleado`}]
    }
}
)

//3-escuchar las conexiones del cliente

const transport=new StdioServerTransport()

server.connect(transport)


