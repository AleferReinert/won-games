module.exports = function (plop) {
  plop.setGenerator('template', {
    description: 'application template',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'template name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{camelCase  name}}.tsx',
        templateFile: 'templates/template/page.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase  name}}/{{pascalCase  name}}.tsx',
        templateFile: 'templates/template/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase  name}}/{{pascalCase  name}}.stories.tsx',
        templateFile: 'templates/template/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase  name}}/{{pascalCase  name}}.styles.ts',
        templateFile: 'templates/template/styles.ts.hbs'
      }
    ]
  })
}
