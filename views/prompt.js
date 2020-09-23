const { isNotEmpty } = require("../utils");
let { tempFolder } = require("../../../src/settings.js");
module.exports = {
  description: "Create a view",
  prompts: [
    {
      type: "input",
      name: "name",
      message:
        "Please enter the view name, do not repeat the previous one, and then click enter",
      validate: isNotEmpty("name"),
    },
  ],
  actions: (data) => {
    const name = "{{name}}";
    const actions = [
      {
        type: "add",
        path: `src/views/${tempFolder || "project"}/${name}/index.vue`,
        templateFile: "node_modules/vue-templates-generator/views/index.hbs",
        data: {
          name: name,
        },
      },
    ];

    return actions;
  },
};
