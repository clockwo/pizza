import Item from '../../components/Item/Item';
import ItemList from '../../components/ItemList/ItemList';

const Menu = () => {
  return (
    <>
      <ItemList>
        <Item
          name="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          price={300}
          rating={4.5}
        />
      </ItemList>
    </>
  );
};

export default Menu;
