import React from 'react'

export default function Forget_as_exb() {
  let [email,setEmail]=useState("")

  async function fp(){
      try {
          await axios.post(`http://localhost:4000/eproject/forgot`,{
              email:email
          }).then((a)=>{
              toast.success(a.data.msg)
          })
          
      } catch (error) {
          toast.error(error.message)
      }
  }
  return (
    <div>
    <Navbar/>
    <h1>Forget Password</h1>
    <div className='container'>
    <h2>Forget Password</h2>
    <p>Enter Your Email</p>
    <input type="email" placeholder='Enter Email ' className='form-control my-2' value={email}
    onChange={(e)=>setEmail(e.target.value)}/>

    <button className='btn btn-primary my-2' onClick={fp}>Sent Link</button>
    <ToastContainer/>
</div>
<Footer/>
</div>
  )
}
