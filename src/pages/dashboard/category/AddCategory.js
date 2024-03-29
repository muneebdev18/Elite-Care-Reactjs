import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Headers from '../header/Headers'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { createCategoryApi,clearCategory } from '../../../global/features/Dashboard/categorySlice/createCategory'
import { toast } from 'react-toastify'
// import { Postcategory } from '../../../global/features/Dashboard/categorySlice/Addcategory'

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: ''
  });
  const dispatch = useDispatch();
  const { success, message } = useSelector((value) => value.createCategorySlice)



  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(createCategoryApi(category))
  }
  useEffect(() => {
    if (success == true) {
      toast.success(message, {
        position: 'top-center'
      })
      setCategory({
        name: ''
      })
      dispatch(clearCategory())
    }

    else if (success == null) {
      return;
    }
    else {
      toast.error(message, {
        position: 'top-center'
      })
      dispatch(clearCategory())

    }
  }, [success])
  console.log(category);
  return (
    <div className="d-flex">
      <div className={style.sidecolor}>
        <Sidebar />
      </div>
      <div className=" w-100 my-[120px]">
        <Headers />
        <div className=" container">
          <h1>Create Category</h1>
          <form onSubmit={handlesubmit}>
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                onChange={(e) => setCategory({ ...category, name: e.target.value })}
                value={category.name}
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default AddCategory