import { getprofile } from "../api/profile";
import { useEffect, useState } from "../libs";
const listhomepage = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
      getprofile()
        .then(({ data }) => setdata(data))
    }, [])
  return `
  <section class="mx-auto my-[64px] px-[12px]">
  ${data.map(profile => {
    return `
    <div class="bg-white dark:bg-dark-200 px-8" id="about">
  <div class="max-w-6xl mx-auto">
    <div class="py-8 dark:text-white">
      <div class="pt-3 pb-20">
        <div class="p-1 bg-gradient-to-r from-[#00cc99] via-[#00cc99] to-[#6600ff]"
          style="opacity: 1; transform: none;">
          <div class="p-7 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-dark-200">
  <div class="flex border-8 border-gray-200 dark:border-white"><span
      style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span
        style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img
          style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
          alt="" aria-hidden="true"
          src="${profile.image}"></span><img

        alt="" src="/_next/image?url=%2Fphuy-about.jpeg&amp;w=750&amp;q=75" decoding="async" data-nimg="intrinsic"
        class="object-cover"
        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
        srcset="/_next/image?url=%2Fphuy-about.jpeg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fphuy-about.jpeg&amp;w=750&amp;q=75 2x"></span>
  </div>

            <div class="flex-1 ">
              <div class="pb-4 border-b border-gray-500">
                <h2 class="text-3xl font-bold my-3">M???t ch??t v??? t??i</h2>
                <p>${profile.about}</p>
                <p class="pt-2">${profile.target}</p>
              </div>
              <div class="py-3">
                <h1 class="text-xl font-bold capitalize my-4">Th??ng tin c?? b???n</h1>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                  <li><span class="w-[110px] inline-block">H???c v???n<!-- -->:</span><span>${profile.school}</span></li>
                  <li><span class="w-[110px] inline-block">??i???n tho???i<!-- -->:</span><span>${profile.phone}</span></li>
                  <li><span class="w-[110px] inline-block">Email<!-- -->:</span><span>${profile.email}</span>
                  </li>
                  <li><span class="w-[110px] inline-block">?????a ch???<!-- -->:</span><span>${profile.address}</span></li>
                  <li><span class="w-[110px] inline-block">Website<!-- -->:</span><span>${profile.website}</span>
                  </li>
                  <li><span class="w-[110px] inline-block">Ngh??? nghi???p<!-- -->:</span><span>Web developer</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    `
  }).join("")}
  
</section>
  `
  
}

export default listhomepage