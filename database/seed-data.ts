interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description:string;
  status: string;
  createdAt:number;
}

export const seedData:SeedData={
  entries:[
    {
      description:'Pendiente: Nulla Lorem reprehenderit voluptate eu anim nisi ex ipsum laboris',
      status:'pending',
      createdAt:Date.now()
    },
    {
      description:'En Progreso: Nulla Lorem reprehenderit voluptate eu anim nisi ex ipsum laboris',
      status:'in-progress',
      createdAt:Date.now()-1000000
    },
    {
      description:'Terminada: Nulla Lorem reprehenderit voluptate eu anim nisi ex ipsum laboris',
      status:'finished',
      createdAt:Date.now()-2000000
    },
  ]
}