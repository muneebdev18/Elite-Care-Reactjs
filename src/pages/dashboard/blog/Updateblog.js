import React, { useEffect } from "react";
import styles from "./style.module.css";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import { useDispatch, useSelector } from "react-redux";
import { createBlogApi } from "../../../global/features/Dashboard/blogsSlice/createBlog";
import { clearUpdateBlog, updateBlogApi } from "../../../global/features/Dashboard/blogsSlice/updateBlog";
import { constants } from "../../../global/constants";
import { toast } from "react-toastify";
import { clearBlog } from "../../../global/features/Dashboard/blogsSlice/createBlog";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";
import './styles.css'
const Updateblog = () => {
  const { id } = useParams()
  const [blog, setBlog] = React.useState({
    title: "",
    description: "",
    category: "",
    blogImg: null,
  });
  const [category, setCategory] = React.useState([]);
  const categoryData = category?.data?.results?.results;

  const dispatch = useDispatch();
  const { success, message } = useSelector((value) => value.updateBlog);
  const user = JSON.parse(localStorage.getItem("user"));
  let token = user.data?.refreshToken;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCategories = async () => {
    try {
      const response = await fetch(`${constants.baseUrl}api/category`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setCategory(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const imageHandler = (e) => {
    const image = e.target.files[0];
    setBlog({ ...blog, blogImg: image });
  };
  useEffect(() => {
    fetch(`https://flutterapi.testdevlink.net/elite-care-db/api/blog/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
    
        setBlog({
          ...blog,
          title: data.data.title,
          description: data.data.description,
          category: data.data.category,
          blogImg: data.data.blogImg,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(updateBlogApi({
      id: id,
      title: blog.title,
      description: blog.description,
      category: blog.category,
      blogImg: blog.blogImg
    }))

  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (success === true) {
      toast.success(message, {
        position: "top-center",
      });
      dispatch(clearUpdateBlog())
      setBlog({
        title: "",
        description: "",
        category: "",
        blogImg: null,
      });
    } else if (success === null) {
      return;
    } else {
      toast.error(message, {
        position: "top-center",
      });
      dispatch(clearUpdateBlog())

    }
  }, [success, message]);
  return (
    <div className="d-flex">
      <div className={styles.sidecolor}>
        <Sidebar />
      </div>
      <div className={`w-100  ${styles.widthdiv}`}>
        <Headers />
        <div className=" container">
          <h1> Update Blogs </h1>
          <form onSubmit={handlesubmit}>
            <div class="mb-3">
              <label for="name" class="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
                value={blog.title}
                onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              />
            </div>
            <div class="mb-3 ">
              <label for="" class="form-label">
                Category
              </label>
              <select
                name="cars"
                id="cars"
                class="form-control"
                className={styles.inputWrapper3}
                value={blog.category}
                onChange={(e) => setBlog({ ...blog, category: e.target.value })}
              >
                <option value="" selected disabled hidden>
                  Select Category
                </option>

                {categoryData &&
                  categoryData.map((item) => {
                    return (
                      <option key={item?._id} value={item?.name}>
                        {item?.name}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload *
              </label>
              <input
                class="form-control"
                type="file"
                id="formFile"
                name="image"
                onChange={imageHandler}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Description
              </label>
              <CKEditor
                editor={ClassicEditor}
                data={blog?.description}
                className={styles.ckEditor}
                onReady={(editor) => {
                  console.log("Editor is ready to use!", editor);
                }}
                config={{
                  allowedContent: true, // Allow all content
                  format_tags: 'p', // Set the default format to 'p'
                }}
                onChange={(e, editor) => {
                  const data = editor.getData();
                  console.log("editor", editor.getData().concat());
                  setBlog({ ...blog, description: data });
                }}
                onBlur={(event, editor) => {
                  // console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  // console.log("Focus.", editor);
                }}
              />
            </div>

            <button type="submit" class="btn btn-dark">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updateblog;
