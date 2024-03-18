import ExtLink from './ExtLink';

interface Props {
    publication: any;
}

const PublicationItem = ({publication}: Props): JSX.Element => {
    return (
        <div className = "mt-4 mb-8">
            <p className = "text-base text-gray-500">
                <b><i>{publication.title}</i></b>. {publication.author}. <i>{publication.journal}</i>{publication.journal == "" ? "" : "."} {publication.year}.<br/>
            </p>
            <p className = "text-gray-500 flex justify-end text-sm bold">
                <ExtLink href={publication.url}> [{publication.doi}] &nbsp;</ExtLink>
            </p>
            
        </div>

    );
};

export default PublicationItem;
