import {ReactNode} from 'react';
import ExtLink from './ExtLink';
import IconImage from './IconImage';
import personalInfo from './data/personalInfo.json';

interface BoxProps {
    href: string;
    label: string;
    onClick?: () => void;
    children: ReactNode;
}

const Box = ({href, label, onClick, children}: BoxProps) => (
    <a target="_blank"
        rel="noopener noreferrer"
        href={href}
        aria-label={label}
        className="items-center justify-center cursor-pointer transition-colors rounded-md select-none w-7 h-7"
        onClick={onClick}>
        {children}
    </a>
);

const SupportingBox = (): JSX.Element => {
    return (
        <div className="flex justify-between w-44 dark:invert">
            <div className="flex justify-between w-44">
                <Box href={personalInfo.socialMedia.Twitter} label="Twitter">
                    <IconImage path='/images/icons8-twitter.svg' name="Twitter"/>
                </Box>
                <Box href={personalInfo.socialMedia.LinkedIn} label="LinkedIn">
                    <IconImage path='/images/icons8-linkedin.svg' name="LinkedIn"/>
                </Box>
                <Box href={personalInfo.socialMedia.GoogleScholar} label="GoogleScholar">
                    <IconImage path='/images/icons8-google-scholar.svg' name="GoogleScholar"/>
                </Box>
                <Box href={personalInfo.socialMedia.Orcid} label="Orcid">
                    <IconImage path='/images/orcid.svg' name="Orcid"/>
                </Box>
                <Box href={personalInfo.socialMedia.Github} label="Github">
                    <IconImage path='/images/github.svg' name="Github"/>
                </Box>
            </div>
        </div>
        );
};

export default SupportingBox;



