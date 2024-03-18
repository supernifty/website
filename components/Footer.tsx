import personalInfo from './data/personalInfo.json';
import SupportingBox from './SupportingBox';


const Footer = (): JSX.Element => {
    const iconStyle = "hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded-md";

    return (
        <footer>
            <div className="mb-9 pb-0 pl-6 max-w-4xl flex items-center justify-between text-sm opacity-60 m-auto pt-20 pr-5">
                <p> &copy; {new Date().getFullYear()}. {personalInfo.copyright}</p>
                <SupportingBox></SupportingBox>
            </div>
        </footer>
    );
};

export default Footer;
