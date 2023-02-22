import axios from "axios";
import navbar from "../components/navbar";
import { router, useEffect, useState } from "../libs";

const project_deltail = ({ data: { id } }) => {
    console.log(id);
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/projects/${id}`)
            .then(({ data }) => setdata(data))
    }, [])
    return `
    ${navbar()}
    <div class="px-4">
    <h5 class="text-[32px] my-[64px] mx-auto">CHI TIẾT DỰ ÁN</h5>
    </div>   
        <div class="border px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div class="mb-2">
                          <img src="${data.image}" alt="" class="w-full" />
                      </div>
                      <div class="my-auto">
                      <h3>
                        <a href="" class="block font-bold text-xl text-orange-500 mb-3">${data.name}</a>
                      </h3>
                      <p>
                      ${data.deltail}
                      </p> <br>
                      <a class="bg-black rounded-md text-white" href="${data.link}"<p>xem source code github</p></a>
                    </div>
        </div>   
  `
}

export default project_deltail