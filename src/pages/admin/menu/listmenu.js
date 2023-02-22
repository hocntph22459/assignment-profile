import axios from "axios";
import { router, useEffect, useState } from "../../../libs";

const listmenu = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/categories")
            .then(({ data }) => setdata(data))
    }, [])
    useEffect(() => {
        const btns = document.querySelectorAll("#btn-xoa")
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", () => {
                const project = data.filter((project) => {
                    return project.id != id;
                })
                setdata(data)
                axios.delete(`http://localhost:3000/categories/${id}`)
                    .then(() => router.navigate('/admin/menu'))
            })

        }
    })
    return `
  <h1 class="text-[40px]">menu</h1>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
      <th scope="col" class="px-6 py-3">id</th>
      <th scope="col" class="px-6 py-3">name</th>
      <th scope="col" class="px-6 py-3">
      <a href="/admin/menu/add">thêm</a>
      </th>
    </tr>
  </thead>
  <tbody class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
  ${data.map(pro => {
        return `
    <tr>
    <td class="px-6 py-8">${pro.id}</td>
    <td class="px-6 py-8">${pro.name}</td>
    <td class="px-6 py-8">
      <button onclick="return confirm('bạn có chắc xóa không')" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" data-id="${pro.id}" id="btn-xoa">xóa</button>
      <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/admin/menu/edit/${pro.id}">sửa</a>
    </td>
  </tr>
    `
    }).join("")}
    </div>
  `
}

export default listmenu






// const [project, setproject] = useState([]);

// useEffect(() => {
//     axios.get("http://localhost:3000/projects")
//         .then((project) => console.log(project))
// }, [])
// useEffect(() => {
//     const btns = document.querySelectorAll("#btn-xoa")
//     for (let btn of btns) {
//         const id = btn.dataset.id;
//         btn.addEventListener("click", () => {
//             const project = project.filter((project) => {
//                 return project.id != id;
//             })
//             setproject(project)
//             axios.delete(`http://localhost:3000/projects/${id}`)
//                 .then(() => router.navigate('/admin/home'))
//         })

//     }
// })
// return `
//   <h1 class="text-[40px]">menu</h1>
//   <a href="/admin/add">thêm</a>
//   <table class="">
//   <thead>
//     <tr>
//       <td>id</td>
//       <td>name</td>
//       <td>
//         action
//       </td>
//     </tr>
//   </thead>
//   <tbody>
//   ${data.map(pro => {
//     return `
//     <tr>
//     <td>${pro.id}</td>
//     <td>${pro.name}</td>
//     <td>
//       <button data-id="${pro.id}" id="btn-xoa">xóa</button>
//       <a href="/admin/${pro.id}/edit">sửa</a>
//     </td>
//   </tr>
//     `
// }).join("")}
//   </tbody>
// </table>
  
// <h1 class="text-[40px]">project</h1>
// <table class="">
// <a href="/admin/add">thêm</a>
// <thead>
//   <tr>
//     <td>id</td>
//     <td>name</td>
//     <td>
//       action
//     </td>
//   </tr>
// </thead>
// <tbody>
// ${project.map(pro => {
//     return `
//   <tr>
//   <td>${pro.id}</td>
//   <td>${pro.name}</td>
//   <td>
//     <button data-id="${pro.id}" id="btn-xoa">xóa</button>
//     <a href="/admin/${pro.id}/edit">sửa</a>
//   </td>
// </tr>
//   `
// }).join("")}
// </tbody>
// </table>
//   `
