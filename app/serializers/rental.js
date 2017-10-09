import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    keyForAttribute(key, method){
        return key;
    },
});
