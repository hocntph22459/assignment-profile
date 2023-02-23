import axios from "axios";
import { router, useEffect } from "../../../libs";
import adminhomepage from "../adminhomepage";
const addproject = () => {
    useEffect(()=>{
        const form = document.querySelector("#form");
        const input = document.querySelector("#input");
        const image = document.querySelector("#image");
        const github = document.querySelector("#github");
        const deltail = document.querySelector("#deltail");


        form.addEventListener("submit",(e)=>{
            e.preventDefault()

            const newdata = {
                name:input.value,
                image:image.value,
                link:github.value,
                deltail:deltail.value
            }
            axios.post(`http://localhost:3000/projects`,newdata)
            .then(()=>router.navigate('/admin/project'))
        })
    })
  return `
  ${adminhomepage()}
  <form action="" id="form" class="w-[500px]" mx-auto>
  <h2 class="my-[32px] text-[32px]">thêm mới project</h2>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">IMAGE</label>
    <input type="text" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GITHUB</label>
    <input type="text" id="github" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <div class="mb-6">
  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CHI TIẾT</label>
  <input type="text" id="deltail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
</div>
  <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">thêm mới</button>
</form>
  `
}

export default addproject