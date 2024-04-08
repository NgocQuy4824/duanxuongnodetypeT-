import Products from "../model/products";

export const getProducts = async (req, res) => {
    try {
        //ở đây là lấy toàn bộ sản phẩm trong products ( cụ thể là dùng find )
        const data = await Products.find();
        if (data.length < 0) {
            return res.status(404).json({
                message: "không có sản phẩm trả về"
            })
        }
        //sau đó sẻ trả về data 
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//hiển thị sản phẩm theo id 
export const getProductsById = async (req, res) => {
    try {
        //ở đây là lấy toàn 1 sản phẩm trong products ( cụ thể là dùng findOne )
        const data = await Products.findOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({
                message: "không có sản phẩm trả về"
            })
        }
        //sau đó sẻ trả về data 
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//thêm sản phẩm 
export const addProducts = async (req, res) => {
    try {
        const data = await Products(req.body).save();
        //sau đó sẻ trả về data 
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//xóa sản phẩm 
export const removeProduct = async (req, res) => {
    try {
        //ở đây là xóa 1 sản phẩm trong products theo id ( cụ thể là dùng findOneAndDelete )
        const data = await Products.findOneAndDelete({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({
                message: "không có sản phẩm trả về"
            })
        }
        //sau đó sẻ trả về data 
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// cập nhật sản phẩm 
export const updateProducts = async (req, res) => {
    try {
        //ở đây là cập nhật 1 sản phẩm trong products ( cụ thể là dùng findOneAndUpdate )
        const data = await Products.findOneAndUpdate({ _id: req.params.id },req.body,{new:true});
        if (data.length < 0) {
            return res.status(404).json({
                message: "không có sản phẩm trả về"
            })
        }
        //sau đó sẻ trả về data 
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}