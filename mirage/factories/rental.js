import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    title() {
        return faker.company.companyName();
    },
    owner() {
        return `${faker.name.firstName()}  ${faker.name.lastName()}`;
    },
    city() {
        return faker.address.city();
    },
    'property-type'() {
        return faker.random.arrayElement(['Condo', 'Apartment', 'Suite']);
    },
    bedrooms() {
        return faker.random.number({
            'min': 1,
            'max': 15
        });
    },
    image() {
        return faker.image.city();
    },
    description() {
        return faker.lorem.paragraph();
    }
});
