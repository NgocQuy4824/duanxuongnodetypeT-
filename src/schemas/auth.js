import Joi from "joi";

export const registerSchema = Joi.object({
    username: Joi.string().trim().required().lowercase().messages({
        "any.required":"Username bắt buộc phải nhập ",
        "string.empty":"Không được để trống",
        "string.trim":"Username không được chứa khoảng trắng"
    }),
    email:Joi.string().email().required().messages({
        "any.required":"Email bắt buộc phải nhập",
        "string.email":"Email không đúng định dạng",
        "string.empty":"Email không được để trống "
    }),
    password:Joi.string().min(6).required().messages({
        "any.required":"Mật khẩu bắt buộc phải nhập",
        "string.any":"Password không được để trống",
        "string.min":"Mật khẩu có ít nhất 6 ký tự"
    }),
    confirmPassword:Joi.string().required().valid(Joi.ref("password")).messages({
        "any.required":"ConfirmPassword bắt buộc phải nhập",
        "any.only":"Mật khẩu không khớp"
    }),
    age :Joi.number().max(90).messages({
        "number.max":"Tuổi không nhập quá 90 "
    }) 
})