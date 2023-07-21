import React from "react";
import NavigationLink from "./navigationLink";
import { BsFillFolderSymlinkFill } from "react-icons/bs"

const Navigator = () => {
    return (
        <div className="navigation">
            <ul className="navigation__sections">
                <li className="navigation__section-item">ANYTHING</li>
                <li className="navigation__section-item">ANYTHING</li>
                <li className="navigation__section-item">ANYTHING</li>
            </ul>
            <ul className="navigation__links">
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
                <NavigationLink name="something" image={<BsFillFolderSymlinkFill className="link-item__image"/>} link="https://www.google.com/search?q=how+to+block+input+text+in+html&rlz=1C1ONGR_enGB1046GB1046&sourceid=chrome&ie=UTF-8" />
            </ul>
        </div>
    )
}

export default Navigator