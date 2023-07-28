// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    if(r3eq.method === "GET"){
      handleGet(req,res)
    }else{
      res.status(405).send()
  }
}


  function handleGet(req, res){
    res.status(200).json({
      id: 3,
      nome: 'Maria',
      email: 'mariamariamaria@xcfmail.com'
    })
  }
  
