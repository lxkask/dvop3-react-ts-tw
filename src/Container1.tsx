import img4 from './assets/img4.png'

const Container1: React.FC = () => {
    return (
        <div className="flex flex-col xl:flex-row w-8/12 mx-auto mt-24 shadow-3xl">
    <div className="w-full xl:min-w-fit xl:mr-[-20px] xl:z-10">
        <img src={img4} className="w-full" />
    </div>
    <div className="bg-gradient-to-tr from-primary to-secondary rounded-md px-20 xl:pl-20 py-6">
        <p className="leading-6 xl:leading-7 mt-4 xl:mt-0">Vestibulum fermentum tortor id mi. Phasellus rhoncus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aliquam in lorem sit amet leo accumsan lacinia.</p>
        <p className="leading-6 xl:leading-7 mt-4"> Aliquam erat volutpat. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.</p>
    </div>
</div>
    );
};

export default Container1;