import {NextPage} from 'next';

import About from '../components/About';
import Funding from '../components/Funding';
import PublicationList from '../components/PublicationList';
import Presentations from '../components/Presentations';
import Supervision from '../components/Supervision';
import Teaching from '../components/Teaching';
import Education from '../components/Education';


const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <PublicationList/>
        <Presentations/>
        <Funding/>
        <Supervision/>
        <Teaching/>
        <Education/>
    </>
);

export default Index;
