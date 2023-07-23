
import toast, { Toaster } from 'react-hot-toast';
export default function Index() {
    let thisDate = Date.now();
    const countDown = (start: number, end: number) => {
        const diff = end - start;
        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;
        
        return `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
    };

    let text = ['Studios', 'Community', 'Hangout', 'Development'];
    let usedText = [];

    setInterval(() => {
        if(typeof document !== 'undefined') {
            const randomText = () => {
                const random = Math.floor(Math.random() * text.length);
                if(usedText.length === text.length) {
                    usedText = [];
                    document.querySelector('.main-text').innerHTML = 'Industries'
                }
                if(usedText.includes(text[random])) {
                    randomText();
                } else {
                    usedText.push(text[random]);
                    document.querySelector('.main-text').innerHTML = text[random];
                }
            };
            randomText();
        }
    }, 10000);

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
            new Notification(title, { body });
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
                <h1 className="flex items-center justify-center font-bold text-6xl text-center text-white">Azury&nbsp;<p className="main-text">Industries</p></h1>
                <p className="mt-3 font-light text-center mx-auto text-zinc-300">COMING SOON IN <span className="cointdown-text">{countDown(thisDate, new Date('2023-10-08').getTime())}</span></p>
                <button onClick={notify} className="bg-blue-400 hover:bg-white shadow-blue-800/20 hover:shadow-white/20 shadow-xl py-3 px-6 mx-auto mt-5 flex items-center justify-center rounded-lg text-zinc-900 transition-all">
                    <i className="mr-1.5 fa fa-bell" /> Notify me
                </button>
            </div>
        </div>
        <div className="flex flex-col space-y-5 text-left w-80">
            <h1 className="font-bold text-white text-4xl text-left">About Us <i className="fa fa-users text-blue-400" /></h1>
            <p className="mt-3 font-light text-left text-zinc-300">
                Azury Industries is a company that develops discord products such as bots or APIs for free or cheap.
                We are a small team of developers who are passionate about programming and want to share our knowledge with the world.
                </p>
        </div>
        <br></br>
        <div className="flex flex-col space-y-5 text-right w-80 ml-auto">
            <h1 className="font-bold text-white text-4xl text-right"><i className="fa fa-rocket text-blue-400" /> Our Mission</h1>
            <p className="mt-3 font-light text-right text-zinc-300">
                Our mission is to make the world a better place by providing free or cheap products to the world.
                We want to change the way people think about programming and make it more accessible to everyone.
                </p>
        </div>
        <br></br><br></br><br></br>
        <div className="flex flex-col space-y-5 text-center ml-auto">
            <h1 className="font-bold text-white text-4xl text-center">Our Team <i className="fa fa-wrench text-blue-400" /></h1>
            <div className="team-row cointainer flex flex-row space-x-5 justify-center mr-auto ml-auto flex-wrap flex-grow-0 flex-shrink-0 flex-basis-auto">

            <a className="team-card" target="_blank" href="https://discord.com/users/693553429380857978">
                <img src="https://cdn.discordapp.com/avatars/693553429380857978/c0409547c4230f9d20cf529ee8467c52.webp?size=1024?size=256" className="rounded-full w-10 h-10 mx-auto" />
                <div className="team-username">
                <h2 className="font-bold text-white text-2xl text-center">Masterious</h2>
                </div>
            </a>

            <a className="team-card" target="_blank" href="https://discord.com/users/711712752246325343">
                <img src="https://cdn.discordapp.com/avatars/711712752246325343/043a3e4e28f94acd2a3d56aa1625ef18.webp" className="rounded-full w-10 h-10 mx-auto" />
                <div className="team-username">
                <h2 className="font-bold text-white text-2xl text-center">Ducko</h2>
                </div>
            </a>

            <a className="team-card" target="_blank" href="https://discord.com/users/1090632016812326954">
                <img src="https://cdn.discordapp.com/avatars/1090632016812326954/d7cebc7b04ddc0848d28ca3723ee9f69.webp" className="rounded-full w-10 h-10 mx-auto" />
                <div className="team-username">
                <h2 className="font-bold text-white text-2xl text-center">Mee69</h2>
                </div>
            </a>

            </div>
        </div>
        </>
    );
};
