import { LINKS } from "@/constants/Links.constant"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex items-center justify-between py-8 px-32">
            <div className="flex items-center gap-4">
                <img src="/avatar-github.png" alt="" className="max-w-[6rem] rounded-full" />
                <p className="text-xl font-medium">Open Source @ noneandundefined</p>
            </div>

            <div>
                <ul>
                    <li>
                        <Link to={LINKS.GITHUB}>GitHub</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
