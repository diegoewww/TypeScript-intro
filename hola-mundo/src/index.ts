let mensaje: string = "Hola Mundo"

mensaje = "chanchito feliz"


mensaje = "chao mundo"
console.log(mensaje)
console.log(typeof [])

let extincionDinosaurios: number = 76_000_00
let dinosarioFavorito: string = "T-Rex"
let extintos: boolean = true

let mivariable

function chanchitofeliz(config: any) {
  return config
}

let animales: string[] = ["chanchito", "feliz", "felipe"]

let nums: number[] = [1, 2, 3]

let checks: boolean[] = []

let nums2: Array<number> = []

// nums.map(x=> x.)  esto me ayuda

let tupla: [number, string[]] = [1, ["chanchito feliz", "chanchito fe"]]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'


enum Talla {
  Chica = chica, Mediana = mediana, Grande = grande, ExtraGrande = extragrande
}

const tallaparami = Talla.ExtraGrande
console.log(tallaparami)

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error
}

const estado = LoadingState.Success

type Direccion = {
  numero: number,
  calle: string,
  pais: string
}

type Persona = {
  readonly id: number,
  nombre: string,
  talla: Talla,
  direccion: Direccion
}

const objeto: Persona = {
  id: 1,
  nombre: 'Hola mundo',
  talla: Talla.Chica,
  direccion: {
    numero: 1,
    calle: 'siempre viva',
    pais: "chanchito landia"
  }
}

const arr: Persona[] = [objeto,]



