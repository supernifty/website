import ExtLink from './ExtLink';
import data from './data/funding.json'

const Funding = (): JSX.Element => {
    return (
        <section className="grid" id="funding">
            <h2 className="text-xl font-bold mt-12 mb-4">Research Funding</h2>
            <div className="text-base ml-4 text-gray-700">
                <ul className="list-disc">
                  {data.map((classInfo) => (
                     <li><span><b>{classInfo.funder} ({classInfo.when})</b> - {classInfo.amount}<br/><ExtLink href={classInfo.link}>{classInfo.title}</ExtLink><br/><br/></span></li>
                  ))}
                </ul>
            </div>

        </section>
    );
};



export default Funding;
