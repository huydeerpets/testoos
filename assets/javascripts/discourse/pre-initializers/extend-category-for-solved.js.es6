import property from 'ember-addons/ember-computed-decorators';
import Category from 'discourse/models/category';

export default {
  name: 'extend-category-for-solved',
  before: 'inject-discourse-objects',
  initialize() {

    Category.reopen({

      @property('custom_fields.enable_outofstock_note')
      enable_outofstock_note: {
        get(enableField) {
          return enableField === "true";
        },
        set(value) {
          value = value ? "true" : "false";
          this.set("custom_fields.enable_outofstock_note", value);
          return value;
        }
      }

    });
  }
};
