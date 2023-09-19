const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req,res) => {
   console.log('conectamos na api')
   let sendTest = 0
   const body = JSON.parse(req.body)

   console.log(body)
   
   const message = `
   Contato de Whatsapp enviado via site Blend Química - Enviado na sessão de brindes: \r\n
   WhatsApp: ${body}\r\n
   `;
   const data = {
      to:'matheus@awer.co',
      from: 'contato@awer.co',
      subject: `Contato via site Blend Química`,
      text: message,
      html: message.replace(/\r\n/g,'<br>')
   }

   await mail.send(data).then((response) => {
      console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      while(response[0].statusCode != 202){
         setTimeout(mail.send(data), 500)
         console.log(response[0].headers)
         sendTest = sendTest + 1
         console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      }
   })
   .catch((error) => {
     console.error(error)
   })
   
   const message2 = `
   Nome/Empresa: ${body.Empresa}\r\n
   Email: ${body.Email}\r\n
   Número: ${body.telefone}\r\n
   Messagem: ${body.Mensagem}
   `;
   const data2 = {
      to:'comercial@blendquimica.com.br',
      from: 'contato@awer.co',
      subject: `Contato via site Blend Química`,
      text: message2,
      html: message2.replace(/\r\n/g,'<br>')
   }

   await mail.send(data2).then((response) => {
      console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      while(response[0].statusCode != 202){
         setTimeout(mail.send(data2), 500)
         console.log(response[0].headers)
         sendTest = sendTest + 1
         console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      }
   })
   .catch((error) => {
     console.error(error)
   })

   console.log('E-mail enviado')
   res.status(200).json({status: 'Ok'})
   // Criar lógica do If status not 200, retry
}
