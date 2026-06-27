import Item from "./Item";

export default function Category({
  category_name,
  filter,
}: {
  category_name: string;
  filter: string;
}) {
  return (
    <div className={`CategoryContainer ${category_name}`}>
      <Item category_name={category_name} />
    </div>
  );
}
