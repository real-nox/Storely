export default function Category({ category_name }: { category_name: string }) {
  return <div className={`CategoryContainer ${category_name}`}></div>;
}
