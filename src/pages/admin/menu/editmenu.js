import axios from "axios";
import { router, useEffect, useState } from "../../../libs";
import adminhomepage from "../adminhomepage";

const editmenu = ({data:{id}}) => {

    const [data,setdata] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/categories/${id}`)
        .then(({data})=>setdata(data))
    },[])

    useEffect(() => {
        const form = document.querySelector("#form");
        const input = document.querySelector("#input");

        form.addEventListener("submit", (e) => {
            e.preventDefault()

            const newdata = {
                name: input.value
            }
            axios.put(`http://localhost:3000/categories/${id}`, newdata)
                .then(() => router.navigate('/admin/menu'))
        })
    })

  return `
  ${adminhomepage()}
  <form action="" id="form" class="w-[500px]" mx-auto>
  <h2 class="my-[32px] text-[32px]">thêm mới menu</h2>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input value="${data.name}" type="text" id="input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SỬA</button>
</form>
  `
}

export default editmenu