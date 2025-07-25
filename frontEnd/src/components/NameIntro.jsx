// Copyright 2025 LeandroGiovani

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { useState, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const NameIntro = () => {
    const strokeW = 3
    const [intro, setIntro] = useState(false)

    useEffect(() => {
        const handleLoad = () => {
            const loaderDiv = document.querySelector('.div_loader')
            if (loaderDiv) loaderDiv.remove()
            setIntro(true)
        }

        // Garante que o handleLoad seja executado mesmo se o evento 'load' não disparar
        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
        }

        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, [])

    useEffect(() => {
        if (!intro) return

        const navItem = document.querySelectorAll('.hid')
        const navBtns = document.querySelectorAll('.revealNav9')
        const landItems = document.querySelectorAll('.hidd')
        const activeBox = document.querySelector('.active__box')
        const introName = document.querySelector('.name__intro svg')
        const introNamePage = document.querySelector('.name__intro')

        if (introName) introName.style.display = 'block'

        const initNav = (navL) => {
            navL.style.display = 'grid'
            if (activeBox) {
                activeBox.style.top = navL.offsetTop + 'px'
                activeBox.style.left = navL.offsetLeft + 'px'
                activeBox.style.width = navL.offsetWidth + 'px'
                activeBox.style.height = navL.offsetHeight + 'px'
            }
        }

        setTimeout(() => {
            navItem.forEach((item) => {
                if (item.getAttribute('href') === '#home') {
                    initNav(item)
                } else {
                    item.style.display = 'grid'
                }
            })

            navBtns.forEach((item) => {
                item.style.display = 'flex'
            })

            landItems.forEach((item) => {
                item.style.display = 'flex'
            })

            ScrollTrigger.refresh()

            if (introNamePage) {
                introNamePage.style.opacity = 0
                window.scroll(0, 0)

                setTimeout(() => {
                    introNamePage.style.display = 'none'
                }, 300)
            }
        }, 3850)
    }, [intro])

    return (
        <section className="name__intro">
            <div className="div_loader flex items-center justify-center h-screen bg-zinc-900 z-60">
                <div className="loader relative flex items-center justify-center w-full max-w-24 mt-12 mb-12"></div>
            </div>
            <svg viewBox="0 0 608 188" fill="none" xmlns="http://www.w3.org/2000/svg" id="name">
                <path d="M566.473 171.2H575.273V184H536.073V171.2H544.873H546.873V169.2V118.8V116.8H544.873H536.073V104H575.273V116.8H566.473H564.473V118.8V169.2V171.2H566.473Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M463.616 135.6V184H446.016V104H465.656L493.88 153.392L497.616 159.931V152.4V104H515.216V184H495.577L467.353 134.608L463.616 128.069V135.6Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M405.103 170.323L404.627 169H403.221H373.221H371.815L371.339 170.323L366.415 184H347.317L377.602 104H398.84L429.125 184H410.027L405.103 170.323ZM376.728 154.755L375.828 157.4H378.621H397.821H400.615L399.714 154.755L390.114 126.555L388.221 120.994L386.328 126.555L376.728 154.755Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M303.574 161.456L305.463 166.902L307.353 161.456L327.286 104H346.368L316.082 184H294.845L264.559 104H283.64L303.574 161.456Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M247.162 107.959L247.176 107.974L247.192 107.989C250.478 111.207 252.351 116.643 252.351 124.8V163.2C252.351 171.353 250.48 176.842 247.177 180.146C243.96 183.363 238.518 185.2 230.351 185.2H200.351C192.201 185.2 186.709 183.37 183.405 180.146C180.18 176.841 178.351 171.35 178.351 163.2V124.8C178.351 116.633 180.188 111.191 183.405 107.974C186.708 104.671 192.198 102.8 200.351 102.8H230.351C238.508 102.8 243.944 104.673 247.162 107.959ZM234.751 124.8C234.751 122.092 234.072 119.693 232.365 117.986C230.658 116.278 228.259 115.6 225.551 115.6H205.151C202.442 115.6 200.044 116.278 198.337 117.986C196.629 119.693 195.951 122.092 195.951 124.8V163.2C195.951 165.908 196.629 168.307 198.337 170.014C200.044 171.722 202.442 172.4 205.151 172.4H225.551C228.259 172.4 230.658 171.722 232.365 170.014C234.072 168.307 234.751 165.908 234.751 163.2V124.8Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M151.16 171.2H159.96V184H120.76V171.2H129.56H131.56V169.2V118.8V116.8H129.56H120.76V104H159.96V116.8H151.16H149.16V118.8V169.2V171.2H151.16Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M82.7367 150.4H69.1367V140H102.337V182.4C84.3663 184.268 67.8341 185.2 52.7367 185.2C45.1621 185.2 40.0228 183.418 36.8709 180.266C33.719 177.114 31.9367 171.975 31.9367 164.4V126C31.9367 117.833 33.7739 112.391 36.9909 109.174C40.2944 105.871 45.7841 104 53.9367 104H95.1367V116.8H58.7367C56.0284 116.8 53.6299 117.478 51.9225 119.186C50.2151 120.893 49.5367 123.292 49.5367 126V164.4C49.5367 166.636 50.1801 168.638 51.6311 170.201L51.6815 170.255L51.7358 170.306C53.2984 171.757 55.3007 172.4 57.5367 172.4C66.7648 172.4 75.2005 172.199 82.8418 171.797L84.7367 171.698V169.8V152.4V150.4H82.7367Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M600.576 7.95923L600.591 7.97428L600.606 7.98901C603.892 11.2071 605.765 16.6426 605.765 24.8V63.2C605.765 71.3526 603.894 76.8423 600.591 80.1458C597.374 83.3628 591.932 85.2 583.765 85.2H553.765C545.615 85.2 540.123 83.3703 536.819 80.1456C533.594 76.8413 531.765 71.3497 531.765 63.2V24.8C531.765 16.6329 533.602 11.1912 536.819 7.9742C540.123 4.6707 545.612 2.79999 553.765 2.79999H583.765C591.922 2.79999 597.358 4.67268 600.576 7.95923ZM588.165 24.8C588.165 22.0917 587.486 19.6931 585.779 17.9858C584.072 16.2784 581.673 15.6 578.965 15.6H558.565C555.857 15.6 553.458 16.2784 551.751 17.9858C550.043 19.6931 549.365 22.0917 549.365 24.8V63.2C549.365 65.9083 550.043 68.3068 551.751 70.0142C553.458 71.7216 555.857 72.4 558.565 72.4H578.965C581.673 72.4 584.072 71.7216 585.779 70.0142C587.486 68.3068 588.165 65.9083 588.165 63.2V24.8Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M498.659 60.588L511.961 84H493.183L479.952 59.8394L479.383 58.8H478.198H461.398H459.398V60.8V84H441.798V4H490.198C498.355 4 503.791 5.87269 507.009 9.15925L507.023 9.1743L507.038 9.18902C510.325 12.4071 512.198 17.8426 512.198 26V36.8C512.198 43.2559 511.102 47.9995 509.129 51.2401L509.121 51.2538L509.113 51.2676C507.268 54.4099 504.282 56.5674 499.913 57.6597L497.358 58.2984L498.659 60.588ZM461.398 16.8H459.398V18.8V44V46H461.398H485.398C488.106 46 490.504 45.3216 492.212 43.6142C493.919 41.9069 494.598 39.5083 494.598 36.8V26C494.598 23.2917 493.919 20.8932 492.212 19.1858C490.504 17.4784 488.106 16.8 485.398 16.8H461.398Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M413.324 10.4821L413.336 10.4943L413.348 10.5062C417.563 14.6492 419.83 20.8949 419.83 29.6V58.4C419.83 67.1026 417.564 73.3983 413.336 77.6258C409.195 81.7674 402.945 84 394.23 84H349.43V4H394.23C402.936 4 409.181 6.26765 413.324 10.4821ZM369.03 16.8H367.03V18.8V69.2V71.2H369.03H389.43C393.339 71.2 396.637 70.2216 398.945 67.9142C401.252 65.6069 402.23 62.3083 402.23 58.4V29.6C402.23 25.6917 401.252 22.3932 398.945 20.0858C396.637 17.7784 393.339 16.8 389.43 16.8H369.03Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M273.374 35.6V84H255.774V4H275.414L303.638 53.3923L307.374 59.9311V52.4V4H324.974V84H305.335L277.111 34.6077L273.374 28.0689V35.6Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M214.861 70.3226L214.385 69H212.979H182.979H181.573L181.097 70.3226L176.173 84H157.075L187.36 4H208.598L238.883 84H219.785L214.861 70.3226ZM186.486 54.7555L185.585 57.4H188.379H207.579H210.372L209.472 54.7555L199.872 26.5555L197.979 20.9939L196.086 26.5555L186.486 54.7555Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M102.007 71.2H145.007V84H82.407V4H145.007V16.8H102.007H100.007V18.8V35V37H102.007H135.407V49.8H102.007H100.007V51.8V69.2V71.2H102.007Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
                <path d="M20.1789 69.2V71.2H22.1789H63.9789V84H2.57892V4H20.1789V69.2Z" stroke="#F2F2F2" strokeWidth={strokeW}/>
            </svg> 
        </section>
        
    )
}

export default NameIntro