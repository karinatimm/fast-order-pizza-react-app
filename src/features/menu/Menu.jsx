import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../api/apiRestaurant';
import MenuItem from './MenuItem';

const Menu = () => {
    const menu = useLoaderData();

    return (
        <ul className="divide-y divide-stone-200 px-2">
            {menu.map((pizza) => (
                <MenuItem pizza={pizza} key={pizza.id} />
            ))}
        </ul>
    );
};

export const loader = async () => {
    const menu = await getMenu();
    return menu;
};

export default Menu;
