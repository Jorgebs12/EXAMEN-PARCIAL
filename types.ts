export type AuthorModel = { 
    name: string,
    biografia: string
}

export type BooksModel = {
    titulo: string,
    autores: AuthorModel,
    copias: number,
}