const { isNotEmpty } = require("../utils");

module.exports = {
  description: "Create a component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Please enter a unique component name",
      validate: isNotEmpty("name"),
    },
  ],
  actions: (data) => {
    const name = "{{properCase name}}";
    const actions = [
      {
        type: "add",
        path: `src/components/${name}/index.vue`,
        templateFile:
          "node_modules/vue-templates-generator/components/index.hbs",
        data: {
          name: name,
        },
      },
    ];
    return actions;
  },
};
