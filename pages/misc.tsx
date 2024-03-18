import {useState} from 'react';
import {NextPage} from 'next';
import {Audio} from 'react-loader-spinner';
import ExtLink from '../components/ExtLink';


const Style={
    height: 498,
    width: 680,
    frameborder: 0
}

const Misc: NextPage<unknown> = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="items-center">
      <div className="shadow-lg mb-8 mx-auto lg:w-11/12 lg:flex lg:flex-row lg:h-auto">
        <img className="rounded-tr-lg rounded-tl-lg h-68 w-full lg:h-auto lg:w-6/12 lg:rounded-bl-lg lg:rounded-tr-none" src="/images/taketwo.jpg" alt="" />
        <div className="w-full bg-gray-50 p-8 rounded-bl-lg rounded-br-lg lg:rounded-bl-none lg:rounded-tr-lg">
          <h2 className="text-gray-700 font-semibold">Take Two!</h2>
          <p className="text-sm text-gray-500 mt-4">Take a break from research and try out this fun and fast Scrabble-related word game.</p>
          <p className="text-sm text-gray-500 mt-4"><ExtLink href="https://supernifty.org/#taketwo">Learn more!</ExtLink></p>
        </div>
      </div>
        </div>
    );
};

export default Misc;
