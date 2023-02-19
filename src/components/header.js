import navbar from './navbar'

const header = () => {
  return `
  ${navbar()}
  <section class="mx-auto my-[64px] px-[12px]">
  <header>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
    <div class="my-auto">
      <h1 class="text-[64px] font-bold">Xin chào, tôi là Thái Học <br> Tôi làm</h1>
      <span class="text-2xl md:text-5xl font-bold ml-2 inline-block max-w-[140px] md:max-w-[360px] text">Web Developer</span>
      <a href=""></a>
    </div>
    <div class="">
      <img class="w-[100%]" class="rounded-xl" src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/300960368_207541288262308_2476625993356792531_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=19026a&_nc_ohc=mmoZH8sChK8AX-xB7Ut&_nc_ht=scontent.fhan19-1.fna&oh=00_AfAOzAhyVxC3LTkqt6y1CWFu1OdiW-hF0OixrAqwETLNxA&oe=63F3BD07" alt="">
    </div>
  </div>
</header>
  </section>
  `
}

export default header