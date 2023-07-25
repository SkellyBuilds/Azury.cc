
import toast, { Toaster } from 'react-hot-toast';
import * as React from "react";
export default function Index(props: React.SVGProps<SVGSVGElement>) {
    let thisDate = Date.now();
    const countDown = (start: number, end: number) => {
        const diff = end - start;
        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;
        
        return `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
    };


    const notify = () => {
        if(Notification.permission === 'granted') {
            toast.error('You have already been set to be notified!');
        } else {
            Notification.requestPermission().then((permission) => {
                if(permission === 'granted') {
                    localStorage.setItem('notified', 'true');
                    toast.success('You will be notified in '+countDown(thisDate, new Date('2023-10-08').getTime()))
                } else {
                    toast.error('You have denied notifications!')
                }
            });
        }
    }

    const sendNotification = (title: string, body: string) => {
        if(typeof document !== 'undefined') {
        if(Notification?.permission === 'granted') {
            if(localStorage.getItem('alreadynotified_'+title) === 'true') {
                return;
            } else {
            new Notification(title, { body });
            localStorage.setItem('alreadynotified_'+title, 'true');
            }
        } 
    }
    }

    
    return (
        setInterval(() => {
            thisDate = Date.now();
            typeof document !== 'undefined' ? document.querySelector('.cointdown-text').innerHTML = countDown(thisDate, new Date('2023-10-08').getTime()) : null;
            if(thisDate === new Date('2023-10-08-00:00:00').getTime()) {
                sendNotification('Azury Industries', 'Azury Industries is now available! Check it out at https://azury.cc');
            }
        }, 1000),
        <>
        <div className="h-96 flex items-center justify-center">
            <div>
                <h1 className="font-bold text-6xl text-center jsx-1b2b5b2a3b6a5b5a bg-text-gray">Azury&nbsp;<p className="main-text jsx-1b2b5b2a3b6a5b5a bg-text-gray">Industries</p></h1>

                <p className="mt-3 font-light text-center mx-auto text-zinc-300 text-bold text-casing"><b>LAUNCH IN</b> <span className="cointdown-text uppercase">{countDown(thisDate, new Date('2023-10-08').getTime())}</span></p>
  
                <p className="mt-3 font-light text-center mx-auto text-zinc-300"><a className="sub-text-think" id="sub-text-think">Create.</a> <a className="sub-text-make" id="sub-text-make">Automate.</a> <a className="sub-text-solve" id="sub-text-solve">Engage.</a></p>

                <button onClick={notify} className="bg-blue-400 hover:bg-white shadow-blue-800/20 hover:shadow-white/20 shadow-xl py-3 px-6 mx-auto mt-5 flex items-center justify-center rounded-lg text-zinc-900 transition-all">
                    <i className="mr-1.5 fa fa-bell" /> Notify me
                </button>
            </div>
        </div>
        <div className="flex flex-col space-y-5 text-left w-80">
            <h1 className="font-bold text-white text-4xl text-left">Who We <span className="jsx-ed981c243ab0ceaf bg-text-blue">Are&nbsp; <i className="fal fa-note" /></span></h1>
            <p className="mt-3 font-light text-left text-zinc-300">
                Azury Industries is a company that develops discord products such as bots or APIs for free or cheap.
                We are a small team of developers who are passionate about programming and want to share our knowledge with the world.
                </p>
        </div>
        <br></br>
        <div className="flex flex-col space-y-5 text-right w-80 ml-auto">
            <h1 className="font-bold text-white text-4xl text-right">Our <span className="jsx-ed981c243ab0ceaf bg-text-blue">Mission&nbsp; <i className="fal fa-rocket-launch" /></span></h1>
            <p className="mt-3 font-light text-right text-zinc-300">
                Our mission is to make the world a better place by providing free or cheap products to the world.
                We want to change the way people think about programming and make it more accessible to everyone.
                </p>
        </div>
        <br></br><br></br><br></br>
        <div className="flex flex-col space-y-5 text-center ml-auto">
        <h1 className="jsx-ed981c243ab0ceaf flex items-center text-2xl sm:text-4xl text-center tracking-tight text-white">
        <svg
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      className="mr-2"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <path d="M13 7 A4 4 0 0 1 9 11 A4 4 0 0 1 5 7 A4 4 0 0 1 13 7 z" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>

  The
  <span className="jsx-ed981c243ab0ceaf bg-text-blue">&nbsp;Team&nbsp;</span>
  We Love
</h1>;
            <div className="flex flex-col items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            <a target="_blank" href="https://discord.com/users/693553429380857978" className="mt-6">
 <div style={{ '--card-banner': 'url()' } as any } className="group mt-6 project-card p-8 relative rounded-lg overflow-hidden transition-all duration-200 w-full">
            <div className="flex flex-col mt-3 -ml-2">
            <a className="flex items-center text-center justify-center space-x-3 -ml-2">
                <a className="flex items-center text-center justify-center space-x-3 -ml-2">
                <img src="https://cdn.discordapp.com/avatars/693553429380857978/c0409547c4230f9d20cf529ee8467c52.webp?size=1024?size=256" className="rounded-full w-10 h-10 mx-auto" />
                <h2 className="font-bold text-white text-2xl text-center">Masterious</h2>
                </a>
                </a>
                <h6 className="font-medium mt-1 text-white/40 text-sm -ml-2">Founder & Developer at Azury Industries</h6>
            </div>
            </div>
           </a>

           <a target="_blank" href="https://discord.com/users/1090632016812326954" className="mt-6">
 <div style={{ '--card-banner': 'url()' } as any } className="group mt-6 project-card p-8 relative rounded-lg overflow-hidden transition-all duration-200 w-full text-center">
            <div className="flex flex-col mt-3 -ml-2">
                <a className="flex items-center text-center justify-center space-x-3 -ml-2">
                <a className="flex items-center text-center justify-center space-x-3 -ml-2">
                <img src="https://cdn.discordapp.com/avatars/1090632016812326954/d7cebc7b04ddc0848d28ca3723ee9f69.webp" className="rounded-full w-10 h-10 mx-auto" />
                <h2 className="font-bold text-white text-2xl text-center">Mee69</h2>
                </a>
                </a>
                <h6 className="font-medium mt-1 text-white/40 text-sm -ml-2">Co-Founder & Developer at Azury Industries</h6>
            </div>
            </div>
           </a>

           <a target="_blank" href="https://discord.com/users/711712752246325343" className="mt-6">
 <div style={{ '--card-banner': 'url()' } as any } className="group mt-6 project-card p-8 relative rounded-lg overflow-hidden transition-all duration-200 w-full text-center">
            <div className="flex flex-col mt-3 -ml-2">
                <a className="flex items-center text-center justify-center space-x-3 -ml-2">
                <a className="flex items-center text-center justify-center space-x-3 -ml-2">
                <img src="https://cdn.discordapp.com/avatars/711712752246325343/043a3e4e28f94acd2a3d56aa1625ef18.webp" className="rounded-full w-10 h-10 mx-auto" />
                <h2 className="font-bold text-white text-2xl text-center">Ducko</h2>
                </a>
                </a>
                <h6 className="font-medium mt-1 text-white/40 text-sm -ml-2">Administrator at Azury Industries</h6>
            </div>
            </div>
           </a>

            </div>
        </div>
        <br></br><br></br><br></br>
        <div className="flex flex-col space-y-5 text-center ml-auto">
<h1 className="jsx-ed981c243ab0ceaf flex items-left text-2xl sm:text-4xl text-center tracking-tight text-white">
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    className="mr-2"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z M10,5 L12,3 M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z M8,16 L16,8 M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z M12,21 L14,19"
    />
  </svg>
  <span className="jsx-ed981c243ab0ceaf bg-text-blue">Technologies&nbsp;</span>
  We Use
</h1>;

            <div className="tech-row cointainer flex flex-row space-x-5 justify-left mr-auto ml-auto flex-wrap flex-grow-0 flex-shrink-0 flex-basis-auto">

            <a className="tech-card" target="_blank">
            <h2 className="font-bold text-white text-2xl text-center tech-icon"><i className="fab fa-js-square"></i></h2>
                <h2 className="font-bold text-white text-2xl text-center tech-title">&nbsp;&nbsp;JavaScript</h2>
            </a>
            <a className="tech-card" target="_blank">
            <h2 className="font-bold text-white text-2xl text-center tech-icon"><i className="fab fa-node-js"></i></h2>
                <h2 className="font-bold text-white text-2xl text-center tech-title">&nbsp;&nbsp;Node.js</h2>
            </a>
            <a className="tech-card" target="_blank">
            <h2 className="font-bold text-white text-2xl text-center tech-icon"><i className="fab fa-react"></i></h2>
                <h2 className="font-bold text-white text-2xl text-center tech-title">&nbsp;&nbsp;React.js</h2>
            </a>
            <a className="tech-card" target="_blank">
            <h2 className="font-bold text-white text-2xl text-center tech-icon"><i className="fab fa-html5"></i></h2>
                <h2 className="font-bold text-white text-2xl text-center tech-title">&nbsp;&nbsp;HTML</h2>
            </a>
            <a className="tech-card" target="_blank">
            <h2 className="font-bold text-white text-2xl text-center tech-icon"><i className="fab fa-css3-alt"></i></h2>
                <h2 className="font-bold text-white text-2xl text-center tech-title">&nbsp;&nbsp;CSS</h2>
            </a>

            </div>
        </div>
        </>
    );
};
