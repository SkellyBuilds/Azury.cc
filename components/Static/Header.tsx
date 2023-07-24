export default function Header() {

    return (
        <>
        <div className="nav-bar">
            <div className="flex items-center space-x-3">
                <i className="text-blue-400 fal fa-fire fa-2x" />
                <h1 className="font-semibold text-2xl text-white">Azury<span className="text-blue-400">.cc</span></h1>
            </div>
            <a target="_blank" href="/projectsy" className="text-white/70">
                Projects
            </a>
            <a target="_blank" href="https://github.com/AzuryIndustry">
                <i className="fab fa-github fa-2x text-blue-400 hover:text-white transition-all" />
            </a>
        </div>
        <div className="nav-items flex items-center space-x-5">
        <a target="_blank" href="https://github.com/AzuryIndustry">
                <i className="fab fa-github fa-2x text-blue-400 hover:text-white transition-all" />
        </a>
        <a target="_blank" href="https://dsc.gg/azuryindustry">
                <i className="fab fa-discord fa-2x text-blue-400 hover:text-white transition-all" />
        </a>

        <div className="flex items-center space-x-3 text-white">
                <a className="up-line"></a><h1 className="font-semibold text-2xl text-white">Azury<span className="text-blue-400">.cc</span></h1>
            </div>
        </div>
        </>
    );
};
