import data from './data/presentations.json'

const Presentations = (): JSX.Element => {
    return (
        <section className="grid" id="presentations">
            <h2 className="text-xl font-bold mt-12 mb-4">Presentations</h2>
            <div className="text-base ml-4 text-gray-700">
                <ul className="list-disc">
                  {data.map((p) => (
                     <li><span><b>{p.title}</b><br/><i>{p.where}</i> ({p.when}). {p.type}.<br/><br/></span></li>
                  ))}
                </ul>
            </div>

        </section>
    );
};



export default Presentations;
