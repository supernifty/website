import ExtLink from './ExtLink'
import IconImage from './IconImage';
import data from './data/personalInfo.json'

const Education = (): JSX.Element => {
    return (
        <section className="grid" id="education">
            <h2 className="text-xl font-bold mt-12 mb-4">Education</h2>
            <p className = "text-base ml-4 text-gray-700">
            <ul className="space-y-4 text-left">
                {
                  
                  data.education.map((education) => {
                    return <li className="flex items-center space-x-4"><IconImage path="/images/school.svg" name="education"></IconImage> <span><b>{education.name}</b><br/>{education.institution}</span></li>
                  })
                }
            </ul>
            </p>

        </section>
    );
};



export default Education;
