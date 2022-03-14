import api from '.';
import getToken from './getToken';

const getInitalCategories = async () => {
    try {
        const params = { locale: 'sv_SE', country: 'SE' };
        const token = await getToken();
        const headers = { Authorization: token };
        const { data } = await api.get(`browse/categories/`, { headers, params });

        return data.categories;
    } catch (error) {
        console.log({ error });
    }
};

export default getInitalCategories;
