import axios from "axios";
import {useEffect, useState } from "../../../libs";
import adminhomepage from "../adminhomepage";
const listprofile = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/profile")
            .then(({ data }) => setdata(data))
    }, [])
    // useEffect(() => {
    //     const btns = document.querySelectorAll("#btn-xoa")
    //     for (let btn of btns) {
    //         const id = btn.dataset.id;
    //         btn.addEventListener("click", () => {
    //             const project = data.filter((project) => {
    //                 return project.id != id;
    //             })
    //             setdata(data)
    //             axios.delete(`http://localhost:3000/projects/${id}`)
    //                 .then(() => router.navigate('/admin/project'))
    //         })

    //     }
    // })
  return `
  ${adminhomepage()}
  <h1 class="text-[40px]">profile</h1>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class="px-6 py-3">id</th>
      <th scope="col" class="px-6 py-3">phone</th>
      <th scope="col" class="px-6 py-3">email</th>
      <th scope="col" class="px-6 py-3">facebook</th>
      <th scope="col" class="px-6 py-3">github</th>
      <th scope="col" class="px-6 py-3">school</th>
      <th scope="col" class="px-6 py-3">address</th>
      <th scope="col" class="px-6 py-3">website</th>
      <th scope="col" class="px-6 py-3">action</th>
    </tr>
  </thead>
  <tbody class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
  ${data.map(profile => {
        return `
    <tr>
    <td class="px-6 py-8">${profile.id}</td>
    <td class="px-6 py-8">${profile.phone}</td>
    <td class="px-6 py-8">${profile.email}</td>
    <td class="px-6 py-8">${profile.facebook}</td>
    <td class="px-6 py-8">${profile.github}</td>
    <td class="px-6 py-8">${profile.school}</td>
    <td class="px-6 py-8">${profile.address}</td>
    <td class="px-6 py-8">${profile.website}</td>
    <td class="px-6 py-8">
    <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/admin/profile/edit/${profile.id}">sửa</a>
    </td>
  </tr>
    `
    }).join("")}
    </div>
  `
}

export default listprofile