const listcontact = () => {
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
      <div class="sm:flex justify-center items-end pt-[32px]">
        <div class="pr-[12px]">
          <a href="https://github.com/hocntph22459">
            <img class="w-[150px] sm:w-[40px]" src="https://phuy.vercel.app/github.svg" alt="">
          </a>
        </div>
        <div class="pr-[12px]">
          <a href="">
            <img class="w-[150px] sm:w-[40px]" src="https://phuy.vercel.app/gmail.svg" alt="">
          </a>
        </div>
        <div class="pr-[12px]">
          <a href="https://www.facebook.com/hoclnh">
            <img class="w-[150px] sm:w-[40px]" src="https://phuy.vercel.app/facebook.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="text">
    <h5 class="sm:text-center text-[32px] mt-[64px]">THÔNG TIN LIÊN LẠC</h5>
  </div>
    <form class="my-[64px]" action="" onsubmit="return contact()">
    <div class="flex justify-between items-center my-[32px]">
        <div class="contact-left">
            <div><label for="">NAME:</label></div>
            <div><input class="w-[450px] h-[40px]" type="text" placeholder="Enter your name..." id="ten" required></div>
            <div><label for="">PHONE:</label></div>
            <div> <input class="w-[450px] h-[40px]" type="text" placeholder="Enter phone..." id="phone" required></div>
        </div>
        <div class="contact-right">
            <div><label for="">EMAIL ADDRESS:</label></div>
            <div><input class="w-[450px] h-[40px] " type="email" placeholder="Your email address..." id="email" required></div>
        </div>
    </div>
    <div class="messages">
        <div><label for="">MESSAGES</label></div> <br>
        <textarea name="" id="messages" placeholder="Enter your messages..." cols="60" rows="7" required></textarea>
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