import React from 'react'
import { Formik } from "formik";
import swal from 'sweetalert2'

const Product = () => {

    const productSubmit = async (formdata,{resetForm}) => {
        console.log(formdata);
        resetForm();
       
       const response = await fetch('http://localhost:5000/product/add',{
        method:'POST',
        body: JSON.stringify(formdata),
        headers : {
          'Content-Type' : 'application/json'
        }

       })
       console.log(response.status);
       if(response.status === 200){
        console.log(' product data added');
        swal.fire({
          icon:'success',
          title:'done',
          text:'product added'
        })
          
       }
      
      }
  return (
    <div> 
        <div className='container'>
     <Formik initialValues={{productname:'',companyname:'',price:''}} onSubmit={productSubmit} >
     {({values, handleSubmit ,handleChange})=>(
     <form onSubmit={handleSubmit} >
         {/* Name input */}
          <div className="form-outline mb-4">
          <input type="text" id="productname" onChange={handleChange}  value={values.productname}className="form-control" />
    <label className="form-label" htmlFor="form4Example1">
     productName
    </label>
  </div>
  {/* Email input */}
  <div className="form-outline mb-4">
    <input type="text" id="companyname" onChange={handleChange} value={values.companyname} className="form-control" />
    <label className="form-label" htmlFor="form4Example2">
      companyName
    </label>
  </div>
  {/* Message input */}
  <div className="form-outline mb-4">
    <input
      type="number"  onChange={handleChange} value={values.price} 
      className="form-control"
      id="price"
      
    />
    <label className="form-label" htmlFor="form4Example3">
      Price
    </label>
  </div>
  <button type="submit" className="btn btn-primary btn-block mb-2">
    add product
  </button>
</form>
     )}

 </Formik>
</div>
 </div>
  ) }

export default Product ;