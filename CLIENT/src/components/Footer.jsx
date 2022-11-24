import React from 'react'


export default function Footer() {
    return (
      <div className="bg-blue-200 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              {/* <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
            >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
            </svg> */}
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Juan Carlos Ramirez Pinilla
            </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
                Desarrollador Full Stack 
            </p>
            <p className="mt-4 text-sm text-gray-800">
                Tecnologias: back-end MongoDb,Nodejs Expressjs, 
                Front-end Reactjs, Reduxjs, Tailwincss
            </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +57 3224772180
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Juank27ra@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                El Pital-Huila, Colombia
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="https://www.linkedin.com/in/juan-carlos-ramirez-pinilla-a8518077/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400" target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4">
                <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                </svg>
              </a>
              <a
                href="https://github.com/juank27ra"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400" target="_blank"
              >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-4 h-4">
                    <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                  </a>
              <a
                href="https://wa.me/message/QRNH5HVO3NPCD1"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400" target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4">
                <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              {/* Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami. */}
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            {/* © Copyright 2020 Lorem Inc. All rights reserved. */}
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                {/* F.A.Q */}
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                {/* Privacy Policy */}
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                {/* Terms &amp; Conditions */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };


// export default function Footer() {

//     return (
//         <div className="relative mt-16 bg-deep-purple-accent-400">
//         <svg
//             className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
//             preserveAspectRatio="none"
//             viewBox="0 0 1440 54"
//         >
//             <path
//             fill="currentColor"
//             d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
//             />
//         </svg>
//         <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
//             <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
//             <div className="md:max-w-md lg:col-span-2">
//                 <a
//                 href="/"
//                 aria-label="Go home"
//                 title="Company"
//                 className="inline-flex items-center"
//                 >
//                 <svg
//                     className="w-8 text-teal-accent-400"
//                     viewBox="0 0 24 24"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeMiterlimit="10"
//                     stroke="currentColor"
//                     fill="none"
//                 >
//                     <rect x="3" y="1" width="7" height="12" />
//                     <rect x="3" y="17" width="7" height="6" />
//                     <rect x="14" y="1" width="7" height="6" />
//                     <rect x="14" y="11" width="7" height="12" />
//                 </svg>
//                 <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
//                     Company
//                 </span>
//                 </a>
//                 <div className="mt-4 lg:max-w-sm">
//                 <p className="text-sm text-deep-purple-50">
//                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                     accusantium doloremque laudantium, totam rem aperiam.
//                 </p>
//                 <p className="mt-4 text-sm text-deep-purple-50">
//                     Eaque ipsa quae ab illo inventore veritatis et quasi architecto
//                     beatae vitae dicta sunt explicabo.
//                 </p>
//                 </div>
//             </div>
//             <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
//                 <div>
//                 <p className="font-semibold tracking-wide text-teal-accent-400">
//                     Category
//                 </p>
//                 <ul className="mt-2 space-y-2">
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         News
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         World
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Games
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         References
//                     </a>
//                     </li>
//                 </ul>
//                 </div>
//                 <div>
//                 <p className="font-semibold tracking-wide text-teal-accent-400">
//                     Cherry
//                 </p>
//                 <ul className="mt-2 space-y-2">
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Web
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         eCommerce
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Business
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Entertainment
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Portfolio
//                     </a>
//                     </li>
//                 </ul>
//                 </div>
//                 <div>
//                 <p className="font-semibold tracking-wide text-teal-accent-400">
//                     Apples
//                 </p>
//                 <ul className="mt-2 space-y-2">
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Media
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Brochure
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Nonprofit
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Educational
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Projects
//                     </a>
//                     </li>
//                 </ul>
//                 </div>
//                 <div>
//                 <p className="font-semibold tracking-wide text-teal-accent-400">
//                     Business
//                 </p>
//                 <ul className="mt-2 space-y-2">
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Infopreneur
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Personal
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Wiki
//                     </a>
//                     </li>
//                     <li>
//                     <a
//                         href="/"
//                         className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                     >
//                         Forum
//                     </a>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//             </div>
//             <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
//             <p className="text-sm text-gray-100">
//                 © Copyright 2020 Lorem Inc. All rights reserved.
//             </p>
//             <div className="flex items-center mt-4 space-x-4 sm:mt-0">
//                 <a
//                 href="/"
//                 className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
//                 >
//                 <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//                 </svg>
//                 </a>
//                 <a
//                 href="/"
//                 className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
//                 >
//                 <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
//                     <circle cx="15" cy="15" r="4" />
//                     <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
//                 </svg>
//                 </a>
//                 <a
//                 href="/"
//                 className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
//                 >
//                 <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//                 </svg>
//                 </a>
//             </div>
//             </div>
//         </div>
//         </div>
//     );
// };

