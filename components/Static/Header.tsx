export default function Header() {

    return (
        <div className="nav-bar">
            <div className="flex items-center space-x-3">
                <i className="text-blue-400 fal fa-fire fa-2x" />
                <h1 className="font-semibold text-2xl text-white">Azury</h1>
            </div>
            <a target="_blank" href="https://github.com/AzuryIndustry">
                <i className="fab fa-github fa-2x text-blue-400 hover:text-white transition-all" />
            </a>
        </div>
    );
};