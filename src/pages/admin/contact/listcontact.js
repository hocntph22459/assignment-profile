import axios from "axios";
import {useEffect, useState } from "../../../libs";
import adminhomepage from "../adminhomepage";
const listcontact = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/contact")
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
  <h1 class="text-[40px]">contact</h1>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
      <th scope="col" class="px-6 py-3">id</th>
      <th scope="col" class="px-6 py-3">name</th>
      <th scope="col" class="px-6 py-3">phone</th>
      <th scope="col" class="px-6 py-3">email</th>
      <th scope="col" class="px-6 py-3">messages</th>
    </tr>
  </thead>
  <tbody class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
  ${data.map(contact => {
        return `
    <tr>
    <td class="px-6 py-8">${contact.id}</td>
    <td class="px-6 py-8">${contact.name}</td>
    <td class="px-6 py-8">${contact.phone}</td>
    <td class="px-6 py-8">${contact.email}</td>
    <td class="px-6 py-8">${contact.messages}</td>
  </tr>
    `
    }).join("")}
    </div>
  `
}

export default listcontact