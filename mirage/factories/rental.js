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
  'property-type'(i) {
    return faker.list.cycle('Condo', 'Apartment', 'Suite')(i);
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
