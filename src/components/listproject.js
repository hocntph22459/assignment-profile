import { data } from "autoprefixer";
import { getsproject } from "../api/projects";
import { useEffect, useState } from "../libs"

const listproject = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getsproject()
      .then(({ data }) => setdata(data))
  }, [])
  return `
  <section class="mx-auto my-[64px] px-[12px]">

                    <div class="bg-white dark:bg-dark-200 px-8" id="about">
                      <div class="py-8 dark:text-white px-[12px]">
                      <div class="text-4xl  text-left	 md:text-6xl font-bold text-center mb-10" style="opacity: 1; transform: none;">Project
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      ${data.map(pro => {
    return `
                      <div class="border px-4 py-3 hover:shadow-lg">
                      <div class="mb-2">
                        <a href="${pro.link}">
                          <img src="${pro.image}" alt="" class="w-full" />
                        </a>
                      </div>
                      <h3>
                        <a href="" class="block font-bold text-xl text-orange-500 mb-3">${pro.name}</a>
                      </h3>
                      <p>chi tiết</p>
                    </div>
                      `
  }).join("")}
                      </div>
                      </div>
                      </div>
</section>

  `
}

export default listproject