import CategoryCard from './CategoryCard';

interface CategoryListProps {
  title: string;
  data: any[];
}

const CardList = ({ title, data }: CategoryListProps) => (
  <div className="flex flex-col space-y-4">
    <h2>{title}</h2>
    {data && data.map((item, index) => <CategoryCard key={index} {...item} />)}
  </div>
);

export default CardList;
