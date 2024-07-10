import data from './data/supervision.json'

const Supervision = (): JSX.Element => {
    return (
        <section className="grid" id="supervision">
            <h2 className="text-xl font-bold mt-12 mb-4">Supervision</h2>
            <div className="text-base ml-4 text-gray-700">
                <ul className="list-disc">
                  {data.map((p) => (
                     <li>
                       <span><b>{p.who}</b> - {p.what} ({p.when}). {p.title && <i>{p.title}.</i>}
                         <br/><br/>
                       </span>
                     </li>
                  ))}
                </ul>
            </div>

        </section>
    );
};



export default Supervision;
