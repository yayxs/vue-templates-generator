const { isNotEmpty } = require("../utils");

module.exports = {
  description: "创建vuex",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入vuex名称,勿与之前重复,然后点击回车",
      validate: notEmpty("name"),
    },
  ],
  actions: (data) => {
    const name = "{{name}}";
    const actions = [
      {
        type: "add",
        path: `src/store/modules/${name}.js`,
        templateFile: "node_modules/zx-templates/vuex/index.hbs",
        data: {
          name: name,
        },
      },
    ];

    return actions;
  },
};
