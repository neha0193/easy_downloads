import Card from "./card";
import { VscVscode } from "react-icons/vsc";
import { FaDiscord } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";
import { SiValorant } from "react-icons/si";
import { FaSteam } from "react-icons/fa";
import { FaBrave } from "react-icons/fa6";
import { FaOpera } from "react-icons/fa";
import { FaEdge } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { TbBrandZoom } from "react-icons/tb";
import { SiEpicgames } from "react-icons/si";
import { SiPycharm } from "react-icons/si";

const Utilities = () => {
    // <Card Children =  text= "Google Chrome "/>
    return (
        <div className="main">
            <div className="games">
                <h2>Games</h2>
                <div className="card-items">
                    <Card Children={<SiValorant/> } text=" Valorant " url="https://valorant.secure.dyn.riotcdn.net/channels/public/x/installer/current/live.live.eu.exe" />
                    <Card Children={<FaSteam />} text=" Steam " url="https://cdn.fastly.steamstatic.com/client/installer/SteamSetup.exe" />
                    <Card Children={<SiEpicgames />} text=" Epic " url="https://epicgames-download1.akamaized.net/Builds/UnrealEngineLauncher/Installers/Win32/EpicInstaller-17.2.0.msi?launcherfilename=EpicInstaller-17.2.0-253f8600e71f410a8910aff6590d56dd.msi" />
                    <Card Children={<FaDiscord />} text=" Discord " url="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64" />
                </div>
            </div>
            <div className="browser">
                <h2>Browser</h2>
                <div className="card-items">
                    <Card Children={<SiGooglechrome/>} text=" Google Chrome " url="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B0E773293-E41E-3329-A509-EE820C8CF240%7D%26lang%3Den-GB%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe" />
                    <Card Children={<FaBrave />} text=" Brave " url="https://laptop-updates.brave.com/download/BRV010?bitness=64" />
                    <Card Children={<FaOpera/>} text=" Opera " url="https://net.geo.opera.com/opera/stable/windows?utm_source=PWNgames&utm_medium=pa&utm_campaign=PWN_IN_HVR_WEB_3518&edition=std-2&utm_content=3518_5d12268eedb0370001274ee6_18886252&utm_id=bb5b4360d3054cc7978ea65cf970d36d&http_referrer=https%3A%2F%2Fwww.opera.com%2Fget%2Fopera-gx%3Futm_content%3D3518_5d12268eedb0370001274ee6_18886252%26utm_source%3DPWNgames%26utm_medium%3Dpa%26utm_campaign%3DPWN_IN_HVR_WEB_3518%26utm_id%3Dbb5b4360d3054cc7978ea65cf970d36d%26edition%3Dstd-2&utm_site=opera_com&utm_lastpage=opera.com%2F&dl_token=39200483" />
                    <Card Children={<FaEdge />} text=" Edge " url="https://go.microsoft.com/fwlink/?linkid=2109047&Channel=Stable&language=en&brand=M100" />
            
                </div>
            </div>
            <div className="dev-tools">
                <h2>Developer tools</h2>
                <div className="card-items">
                    <Card Children={<VscVscode />} text=" Visual Studio " url="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user" />
                    <Card Children={<FaGitAlt />} text=" Git " url="https://github.com/git-for-windows/git/releases/download/v2.47.1.windows.1/Git-2.47.1-64-bit.exe" />
                    <Card Children={<SiPycharm />} text=" PyCharm " url="https://d29n1vtx0mqj8k.cloudfront.net/QGao7i8srx4V.exe" />
                </div>
            </div>
            <div className="mesaaging">
                <h2>Mesaaging</h2>
                <div className="card-items">
                    <Card Children={<TbBrandZoom />} text=" Zoom " url="https://cdn.zoom.us/prod/6.3.1.53598/x64/ZoomInstallerFull.exe" />
                    <Card Children={<FaSkype />} text=" Skype " url="https://download.skype.com/s4l/download/win/Skype-8.134.0.202.exe" />
                </div>
            </div>
        </div>
    )

}
export default Utilities;