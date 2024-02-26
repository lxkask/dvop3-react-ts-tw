import img5 from './assets/img5.png';
import img6 from './assets/img6.png';

const Container2: React.FC = () => {
    return (
        <div className="flex flex-col xl:flex-row w-3/4 mx-auto mt-24">
            <div className='xl:w-1/3 pr-5 order-2 xl:order-1'>
                <p className="leading-7 mt-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis viverra diam non justo. Donec quis nibh at felis congue commodo. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Praesent vitae arcu tempor neque lacinia pretium. Integer tempor. Nunc dapibus tortor vel mi dapibus sollicitudin.</p>
                <p className="leading-7 mt-10">Nunc tincidunt ante vitae massa. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Fusce aliquam vestibulum ipsum. Nulla non lectus sed nisl molestie malesuada. Aliquam ante. Integer imperdiet lectus quis justo.</p>
            </div>
            <div className="order-1 xl:order-2 xl:mt-5">
                <img src={img5} className="hidden lg:block" />
                <img src={img6} className="block lg:hidden" />
            </div>
        </div>
    );  
};

export default Container2;

