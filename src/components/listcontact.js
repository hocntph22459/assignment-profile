// import { useEffect } from "../libs";
const listcontact = () => {
  // form inndex
  // useEffect(() => {
  //   const form = document.getElementById("form");
  //   const ten = document.getElementById("ten");
  //   const phone = document.getElementById("phone");
  //   const email = document.getElementById("email");
  //   const messages = document.getElementById("messages");

  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault()
  //     if (ten.value == 0 || phone.value == 0 || email.value == 0 || messages.value == 0) {
  //       alert("phải nhập tất cả các trường");
  //       ten.style.background = "#F7F6AB";
  //       phone.style.background = "#F7F6AB";
  //       email.style.background = "#F7F6AB";
  //       messages.style.background = "#F7F6AB"
  //       return false;
  //     }
  //   })
  // })
  return `
  <section class="mx-auto my-[64px] px-[12px]">
  <div class="bg-white dark:bg-dark-200 px-8" id="about">
    <div class="max-w-6xl mx-auto">
      <div class="py-8 dark:text-white">
        <div class="text-4xl md:text-6xl font-bold text-center mb-10" style="opacity: 1; transform: none;">Contact</div>
      </div>
      <div class="text">
        <h5 class="sm:text-center text-[32px]">Hiện đang tích cực tìm kiếm Frontend Developer Internship</h5>
      </div>
      <div class="flex justify-center items-end pt-[32px]">
        <div class="pr-[12px]">
          <a href="https://github.com/hocntph22459">
            <img class="w-[150px] lg:w-[60px]" src="https://phuy.vercel.app/github.svg" alt="">
          </a>
        </div>
        <div class="pr-[12px]">
          <a href="">
            <img class="w-[150px] lg:w-[60px]" src="https://phuy.vercel.app/gmail.svg" alt="">
          </a>
        </div>
        <div class="pr-[12px]">
          <a href="https://www.facebook.com/hoclnh">
            <img class="w-[150px] lg:w-[60px]" src="https://phuy.vercel.app/facebook.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="text">
      <h5 class="sm:text-center text-[32px] mt-[64px]">THÔNG TIN LIÊN LẠC</h5>
    </div>
    <form class="my-[64px]" action="" id="form">
  <div class="lg:flex justify-between my-[32px]">
    <div class="contact-left">
      <div class="mb-6">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
        <input type="text" id="ten"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[470px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name" required>
      </div>
      <div class="mb-6">
        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
        <input type="text" id="phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[470px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0123456789" required>
      </div>
    </div>
    <div class="contact-right">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[470px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com" required>
      </div>
    </div>
  </div>
  <div class="messages">
    <div><label for="">MESSAGES</label></div> <br>
    <textarea class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[470px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="" id="messages" placeholder="Enter your messages..." cols="60" rows="7"></textarea>
    <div class="pb-[32px]">
      <button id="sb" class="bg-[black] w-[160px] h-8 rounded-lg px-4 text-white mt-4">Submit</button>
    </div>
  </div>
</form>
  </div>
  </div>

  
</section>


  `
}

export default listcontact