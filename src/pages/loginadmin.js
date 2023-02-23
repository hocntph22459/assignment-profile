import axios from "axios"
import { router, useEffect } from "../libs"

const loginadmin = () => {
    useEffect(()=>{
        axios.get("http://localhost:3000/admin")
        .then(({data})=>{

            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const form = document.getElementById('form');
            console.log(data);
    
            form.addEventListener("submit",(e)=>{
                e.preventDefault()

                    if(email.value == 'admin' && password.value == 'admin123'){
                        alert('đăng nhập thành công')
                        router.navigate('admin/home')
                    }else{
                        alert('sai tài khoản hoặc mật khẩu')
                    }
            })
        })

    },[])
  return `
  <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          hocclnh    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login Admin
              </h1>
              <form id="form" class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-[black] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">login</button>
              </form>
          </div>
      </div>
  </div>
</section>
  `
}

export default loginadmin



// import 'toastify-js/src/toastify.css';

// import Toastify from 'toastify-js';
// import { login } from '../../../api/config-user-json';
// import { useEffect } from '../../../config/config';

// const loginadmin = () => {
// 	const loginPage = async (data) => {
// 		try {
// 			const response = await login(data);
// 			if (response.data.length === 1) {
// 				Toastify({
// 					text: 'Mật khẩu tối thiểu phải là 6 ký tự!',
// 					duration: 3000,
// 					backgroundColor: 'orange',
// 				}).showToast();
// 				localStorage.setItem('userInfo', JSON.stringify(response.data));
// 				window.location = '/admin/projects';
// 			} else {
// 				Toastify({
// 					text: 'Tài khoản or mật khẩu không đúng!',
// 					duration: 3000,
// 					backgroundColor: 'orange',
// 				}).showToast();
// 				return false;
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	useEffect(() => {
// 		const form = document.querySelector('.login-form');
// 		const regextEmail =
// 			/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 		form.addEventListener('submit', (e) => {
// 			e.preventDefault();
// 			let email = form.elements.email.value;
// 			let password = form.elements.password.value;
// 			if (email.trim() === '' || password.trim() === '') {
// 				Toastify({
// 					text: 'Bạn đang để trống!',
// 					duration: 3000,
// 					backgroundColor: 'orange',
// 				}).showToast();
// 				return false;
// 			}
// 			if (password.trim().length < 6) {
// 				Toastify({
// 					text: 'Mật khẩu tối thiểu phải là 6 ký tự!',
// 					duration: 3000,
// 					backgroundColor: 'orange',
// 				}).showToast();
// 				return false;
// 			}
// 			if (regextEmail.test(email)) {
// 				const data = { email, password };
// 				loginPage(data);
// 			} else {
// 				Toastify({
// 					text: 'Chưa đúng định dạng email!',
// 					duration: 3000,
// 					backgroundColor: 'orange',
// 				}).showToast();
// 				return false;
// 			}
// 		});
// 	}, []);
// 	return /* html */ `
//   <div
//     style='background-image: url("/assets/images/login/bg-writting-cv.png")'
//     class='bg-no-repeat bg-center bg-cover min-h-screen w-screen bg-opacity-50 flex items-center justify-center p-4 md:p-10 gap-x-10'
//   >
//     <div class="w-full h-full grid xl:grid-cols-2 grid-cols-1 gap-16 md:p-4 rounded-md">
//       <div class='bg-white text-black bg-opacity-20 rounded-md w-full md:p-6 p-4 flex justify-center items-center flex-col'>
//         <h1 class='text-3xl mb-10'>Login</h1>
//         <form class='login-form w-full' autocomplete='off'>
//           <div class='mb-4 relative w-full'>
//             <input
//               type="email" name="email" value="" placeholder='Email'
//               class='bg-gray-300 focus:bg-white border focus:border-blue-400 p-2 rounded outline-none duration-300 transition-all w-full placeholder:text-gray-500'
//             />
//           </div>
//           <div class='mb-4 relative w-full'>
//             <input
//               type="text" name="password" value="" placeholder='Password'
//               class='bg-gray-300 focus:bg-white border focus:border-blue-400 p-2 rounded outline-none duration-300 transition-all w-full placeholder:text-gray-500'
//             />
//           </div>
//           <button class='p-2 rounded bg-blue-500 text-white w-full'>Login</button>
//         </form>
//         <p class='capitalize text-black cursor-pointer hover:text-blue-900 mt-10'>forgot password?</p>
//         <p class='capitalize text-black mt-2'>dont't have account? <a href="/admin/sign-up" data-navigo class='capitalize cursor-pointer text-blue-900 mt-10'>Sign up</a></p>
//       </div>
//       <div class='flex items-center justify-center flex-col h-full w-full'>
//         <div class='flex gap-x-4'>
//           <img
//             src="/public/assets/images/login/resume__1_-removebg-preview.png"
//             alt=""
//             class='h-10 w-10 object-cover'
//           />
//           <h1 class='capitalize text-4xl'>MyCv Creator</h1>
//         </div>
//         <p class='mt-10 md:w-1/2 w-3/2 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore id consequatur, minus quae necessitatibus veritatis pariatur. Incidunt optio velit aliquid voluptas quae quos quo! Fuga dolorem porro necessitatibus quis!</p>
//         <a href="/admin/sign-up" class='mt-10 inline-block py-2 px-8 rounded bg-blue-500 text-white capitalize text-base'>register</a>
//       </div>
//     </div>
//   </div>
//   `;
// };

// export default loginadmin;