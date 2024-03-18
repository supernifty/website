import {NextPage} from 'next';

import About from '../components/About';
import Funding from '../components/Funding';
import PublicationList from '../components/PublicationList';
import Presentations from '../components/Presentations';
import Teaching from '../components/Teaching';
import Education from '../components/Education';


const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <PublicationList/>
        <Presentations/>
        <Funding/>
        <Teaching/>
        <Education/>
    </>
);

export default Index;
