import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const { mutate } = useMutation({
    mutationFn: async (user) => {
      const { data } = await axios.post(`http://localhost:8080/api/signup`, user);
      return data.product;
    },
    onSuccess: () => {
      alert('ĐĂNG KÝ THÀNH CÔNG !');
      queryClient.invalidateQueries({
        queryKey: ['PRODUCTS']
      });
    }
  });

  const onSubmit = (user:any) => {
    mutate(user);
    navigate(`/signin`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Đăng Ký</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Tên Người Dùng</label>
                  <input type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} id="name" placeholder="Tên Người Dùng" {...register('name', { required: true, minLength: 3 })} />
                  {errors.name && <div className="invalid-feedback">Tên người dùng phải có ít nhất 3 ký tự</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="email" placeholder="Email" {...register('email', { required: true })} />
                  {errors.email && <div className="invalid-feedback">Email không hợp lệ</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mật Khẩu</label>
                  <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} id="password" placeholder="Mật Khẩu" {...register('password', { required: true })} />
                  {errors.password && <div className="invalid-feedback">Mật khẩu là trường bắt buộc</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Nhập Lại Mật Khẩu</label>
                  <input type="password" className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`} id="confirmPassword" placeholder="Nhập Lại Mật Khẩu" {...register('confirmPassword', { required: true })} />
                  {errors.confirmPassword && <div className="invalid-feedback">Mật khẩu không khớp</div>}
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Đăng Ký</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
