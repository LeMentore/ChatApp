import faker from 'faker';

export const addNewUser = () => {
    const randUserName = `@${faker.internet.userName().toLowerCase()}`;
    return {
        type: 'ADD_NEW_USER',
        randUserName
    }
};