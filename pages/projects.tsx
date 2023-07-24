
import toast, { Toaster } from 'react-hot-toast';
export default function Projects() {
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
                <h1 className="font-bold text-6xl text-center text-transparent bg-gradient-to-r bg-clip-text from-gray-300 to-gray-500">Our Projects</h1>
                
                <p className="mt-3 font-light text-center mx-auto text-zinc-300">COMING SOON IN <span className="cointdown-text uppercase">{countDown(thisDate, new Date('2023-10-08').getTime())}</span></p>
  
                <p className="mt-3 font-light text-center mx-auto text-zinc-300"><a className="sub-text-think" id="sub-text-think">Create.</a> <a className="sub-text-make" id="sub-text-make">Automate.</a> <a className="sub-text-solve" id="sub-text-solve">Engage.</a></p>

                <button onClick={notify} className="bg-blue-400 hover:bg-white shadow-blue-800/20 hover:shadow-white/20 shadow-xl py-3 px-6 mx-auto mt-5 flex items-center justify-center rounded-lg text-zinc-900 transition-all">
                    <i className="mr-1.5 fa fa-bell" /> Notify me
                </button>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <a target="_blank" href="https://dbl.azury.cc" className="mt-6">
 <div style={{ '--card-banner': 'url(https://cdn.discordapp.com/attachments/957070789776113694/1133083576297074688/image.png)' } as any } className="group mt-6 project-card p-8 relative rounded-lg overflow-hidden transition-all duration-200 w-full">
            <img className="w-20 h-20 rounded-full -ml-5" src={"https://dbl.azury.cc/img/logo.png?size=4096"} />
            <div className="flex flex-col mt-3 -ml-2">
                <a className="flex items-center space-x-3 -ml-2">
                    <h1 className="text-zinc-100 leading-none text-2xl">Azury DBL</h1>
                </a>
                <h6 className="font-medium mt-1 text-white/40 text-sm -ml-2">Azury Discord Botlist and Serverlist.</h6>
            </div>
        </div>
    </a>
    <a target="_blank" href="https://discord.com/api/oauth2/authorize?client_id=1096194520032485579&permissions=8&scope=bot%20applications.commands" className="mt-6">
 <div style={{ '--card-banner': 'url(https://cdn.discordapp.com/attachments/957070789776113694/1133088936458207343/image.png)' } as any } className="group mt-6 project-card p-8 relative rounded-lg overflow-hidden transition-all duration-200 w-full">
            <img className="w-20 h-20 rounded-full -ml-5" src={"https://cdn.discordapp.com/avatars/1096194520032485579/c07d41a44cf2db3a569ce2e390ccdb87.webp?size=4096"} />
            <div className="flex flex-col mt-3 -ml-2">
                <a className="flex items-center space-x-3 -ml-2">
                    <h1 className="text-zinc-100 leading-none text-2xl">Aprex</h1>
                </a>
                <h6 className="font-medium mt-1 text-white/40 text-sm -ml-2">Aprex discord bot.</h6>
            </div>
        </div>
    </a>
    
            </div>
        </>
    );
}
