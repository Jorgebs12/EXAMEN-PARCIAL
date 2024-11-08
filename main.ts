import { MongoClient, ObjectId } from "mongodb"
import { AuthorModel, BooksModel } from "./types.ts"

const MONGO_URL = Deno.env.get("MONGO_URL")
if(!MONGO_URL){
  console.error("MONGO no")
  Deno.exit(1)
}

const client = new MongoClient(MONGO_URL)
await client.connect()

console.log("Conectado a mongo")

const db = client.db("Libreria");

const autorCollection = db.collection<AuthorModel>("Author")
const libroCollection = db.collection<BooksModel>("Author")

const handler = async (req: Request): Promise<Response>=>{

  const method= req.method
  const url = new URL(req.url)
  const path = url.pathname;

  if( method === "GET") {
    if(path === "/libros") {
      const name = url.searchParams.get("name")
      if(name){
        const booksdb = await autorCollection.find({name})
        /*const books = await Promise.all{
          booksdb.map((elem) => )
        }*/
       //ggreturn new Response(JSON.stringify(books))
      
      } }
    else if(path ==="libro"){
      
      }


    }



  }







