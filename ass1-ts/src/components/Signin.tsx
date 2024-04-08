// import { joiResolver } from "@hookform/resolvers/joi"
// import Joi from "joi"
import { useForm } from "react-hook-form"

import axios from "axios"
import { Link, useNavigate  } from "react-router-dom"
import { useMutation} from "@tanstack/react-query"
import { useState } from "react"



// const signupSchema = Joi.object({
//   name: Joi.string().min(3),
//   email: Joi.string().email().required(),
//   password: Joi.string().required().min(6),
//   confirmPassword: Joi.string().required().valid(Joi.ref('password'))
// }) 

const Signin = () => {
  const navitage = useNavigate()
  // const queryClient = useQueryClient()
  const [isLoginSuccess,setIsLoginSuccess] = useState(false)//kiểm soát vc chuyển hướng
  const { register, handleSubmit, formState: { errors } } = useForm({
    // resolver: joiResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    } 
  })
  const { mutate } = useMutation({
    mutationFn: async (user: any) => {
      const { data } = await axios.post(`http://localhost:8080/api/signin`, user);
      localStorage.setItem('user',JSON.stringify(data));
      setIsLoginSuccess(true);
      navitage(`/dashboard`)
      return data.product;
    },
    onSuccess: () => {
      alert('ĐĂNG NHẬP THÀNH CÔNG !')
    }
  })

  const onSubmit = (user: any) => {
    mutate(user)
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="text-center mb-4">Đăng Nhập</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control" {...register('email', { required: true })} />
                  {errors?.email?.message && <div className="text-danger">{errors?.email?.message}</div>}
                </div>
                <div className="form-group mb-3">
                  <label>Mật Khẩu</label>
                  <input type="password" className="form-control" {...register('password', { required: true })} />
                  {errors?.password?.message && <div className="text-danger">{errors?.password?.message}</div>}
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-block">Đăng Nhập</button>
                </div>
              </form>
              <div className="text-center mt-3">
                <p>Bạn chưa có tài khoản? <Link to="/signup">Đăng ký ngay</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin 