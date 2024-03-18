import Image from 'next/image';

import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-8 hidden md:block rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
                                        <br/>
					<p>
						I am a {personalInfo.about.role} based at <ExtLink href= {personalInfo.about.college.link}>{personalInfo.about.college.name} </ExtLink> 
                                                in {personalInfo.about.advisor.name}'s <ExtLink href= {personalInfo.about.group.link}>{personalInfo.about.group.name}</ExtLink>.
					</p>
                                        <br/>
					<p>
                                           I have an ongoing interest in cancer genomics, statistical methods, and machine learning.
                                           My current research focuses on the application of tumour mutational signatures to understanding and detecting the underlying aetiology driving different sub-types of colorectal cancer.
					</p>
                                        <br/>
					<p className = "text-sm text-gray-600">
						Research Interests: {personalInfo.about.interest}.
					</p>
					<p className = "text-sm text-gray-400">
					   <br/><br/>
                                           <a className = "text-sm">✉️ {personalInfo.about.email}</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
