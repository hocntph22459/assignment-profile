import navbar from './navbar'

const header = () => {
  return `
  ${navbar()}

  <section class="mx-auto my-[64px] px-[12px]">
  <header>
      <div class="text-center">
        <h1 class="text-[64px] font-bold">Xin chào, tôi là Thái Học</h1>
        <div class="wrapper">
          <div class="text-[48px] font-bold text-black">Tôi Làm</div>
          <div class="dynamic-txt">
            <li><span>Web Designer</span></li>
            <li><span>Front-End Dev</span></li>
          </div>
        </div>
      </div>
  </header>
</section>
  `
}

export default header