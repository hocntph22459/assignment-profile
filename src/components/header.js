import navbar from './navbar'

const header = () => {
  return `
  ${navbar()}
  <section class="mx-auto my-[64px] px-[12px]">
  <header>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
    <div class="my-auto">
      <h1 class="text-[64px] font-bold">Xin chào, tôi là Thái Học</h1>
      <div class="wrapper">
        <div class="static-txt">Tôi Làm</div>
        <div class="dynamic-txt">
            <li><span>Web Designer</span></li>
            <li><span>Front-End Dev</span></li>
        </div>
    </div>
      <a href=""></a>
    </div>
    <div class="">
      <img class="w-[100%]" class="rounded-xl" src="https://res.cloudinary.com/dpy2w5vus/image/upload/v1676875349/samples/test/ok_oefbos.jpg" alt="">
    </div>
  </div>
</header>
  </section>
  `
}

export default header