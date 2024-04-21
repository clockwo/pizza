import Item from '../../components/Item/Item';
import ItemList from '../../components/ItemList/ItemList';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';

const Menu = () => {
  return (
    <>
      <Header>
        <Title>Меню</Title>
        <Search placeholder="Введите блюдо или состав" />
      </Header>
      <ItemList>
        <Item
          itemId={1}
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
